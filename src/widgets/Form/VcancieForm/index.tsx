import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { FormEvent } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { createAccount } from '@shared/lib/hooks/useCreateAccount'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { VacanciePopup } from '@features/Popup_Components/VacanciePopup/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/styles.module.scss'

interface FormData {
	username: string
	phone: string
	file: File | null
}

export const VacancieForm = () => {
	const [resumeName, setResumeName] = useState<string>('')
	const [isPopupOpen, setPopupOpen] = useState<boolean>(false)
	const [loginError, setLoginError] = useState<any>(null)
	const [formData, setFormData] = useState<FormData>({ username: '', phone: '', file: null })

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null
		if (file) {
			setResumeName(file.name)
			setFormData({ ...formData, file })
		}
	}

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			// Assuming createAccount function can handle FormData including file uploads
			const accountCreationError = await createAccount(formData)
			setLoginError(accountCreationError)
		} catch (error) {
			console.error('Account creation failed:', error)
			setLoginError(error)
		}
	}

	return (
		<div>
			<section className={styles.registration}>
				<div className={styles.registration__content}>
					<div className={styles.registration__logo}></div>
					<h2 className={styles.registration__heading}>Форма для вакансий</h2>
					<p className={styles.registration__paragraph}>
						В нашем мире каждый день - это новая игра, где интрига, стратегия и человеческое
						взаимодействие создают неповторимую атмосферу. Мы - компания, организующая концепт-игры
						Мафия, и мы ищем талантливых и креативных людей, чтобы присоединиться к нашей уникальной
						команде. Если вы готовы стать частью чего-то захватывающего и динамичного, у нас есть
						место для вас!
					</p>
					<form className={styles.registration__form} onSubmit={handleSubmit}>
						<Input
							type="text"
							inputType="default"
							name="username"
							placeholder="Имя"
							value={formData.username}
							onChange={handleInputChange}
						/>
						<div className="mb-4 mt-4">
							<Input
								type="phone"
								inputType="default"
								name="phone"
								placeholder="Номер телефона"
								value={formData.phone}
								onChange={handleInputChange}
							/>
						</div>
						<div className={styles.fileUpload}>
							<input
								type="file"
								id="resumeUpload"
								hidden
								onChange={handleFileChange}
								accept=".pdf, .doc, .docx, .jpg, .png"
							/>
							<label
								htmlFor="resumeUpload"
								className={styles.customFileUpload}
								style={{ display: resumeName ? 'none' : 'inline-block' }}
							>
								<FontAwesomeIcon icon={faPaperclip} /> Выбрать Файл
							</label>
							{resumeName && (
								<div className={styles.fileDetails}>
									Ваше резюме прикреплено <FontAwesomeIcon icon={faCheck} />
								</div>
							)}
						</div>
						<ReactButton
							margin="mt-4"
							buttonType="filled"
							text="Отправить"
							onClick={() => handleSubmit}
						/>
					</form>
				</div>
			</section>
		</div>
	)
}
