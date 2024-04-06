import React, { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { FormEvent } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { createAccount } from '@shared/lib/hooks/useCreateAccount'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { VacanciePopup } from '@features/Popup_Components/VacanciePopup/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
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
						<Input
							type="phone"
							inputType="default"
							name="phone"
							placeholder="Номер телефона"
							value={formData.phone}
							onChange={handleInputChange}
						/>
						<div className={styles.fileUpload}>
							<input
								type="file"
								id="resumeUpload"
								hidden
								onChange={handleFileChange}
								accept=".pdf, .doc, .docx, .jpg, .png"
							/>
							<label htmlFor="resumeUpload" className={styles.customFileUpload}>
								<FontAwesomeIcon icon={faPaperclip} /> Attach Resume
							</label>
							{resumeName && (
								<div className={styles.fileDetails}>Файл прикреплен: {resumeName}</div>
							)}
						</div>
						<ReactButton buttonType="filled" text="Отправить" onClick={() => handleSubmit} />
						{/* {isPopupOpen && <VacanciePopup onClose={handleClose} />} */}
					</form>
				</div>
			</section>
		</div>
	)
}
