import { Input } from '@shared/ui/Inputs/DefaultInput'
import { createAccount } from '@shared/lib/hooks/useCreateAccount'
import { useState } from 'react'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { VacanciePopup } from '@features/Popup_Components/VacanciePopup/index'
import styles from '../styles/styles.module.scss'

export const VcancieForm = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)

	const handleClick = () => {
		setPopupOpen(true)
	}

	const handleClose = () => {
		setPopupOpen(false)
	}
	const [loginError, setLoginError] = useState<any>(null)
	const [formData, setFormData] = useState({
		username: '',
		phone: '',
		file: ''
	})

	const handleInputChange = (e: any) => {
		const { name, value } = e.target

		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault()
		try {
			const error = await createAccount(formData)
			setLoginError(error)
			console.log(loginError)
		} catch (error) {
			console.error('Account creation failed:', error)
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
						incididunt ut labore et dolore magna aliqua.{' '}
					</p>
					<form className={styles.registration__form} onSubmit={handleSubmit}>
						<Input
							placeholder="Имя"
							name="username"
							inputType="default"
							type="text"
							required
							value={formData.username}
							onChange={handleInputChange}
						/>
						<Input
							placeholder="Номер телефона"
							name="phone"
							inputType="default"
							margin="mt-4"
							type="phone"
							required
							value={formData.phone}
							onChange={handleInputChange}
						/>
						{/* <div className={styles.file}>
							<label htmlFor="resume">Прикрепите резюме:</label>
							<input
								type="file"
								id="resume"
								accept=".pdf,.doc,.docx,.png,.jpg"
								onChange={handleInputChange}
								value={formData.file}
							/>
						</div> */}
						<ReactButton
							buttonType="filled"
							text="Отправить"
							type="submit"
							onClick={handleClick}
							margin="mt-8"
						/>
						{isPopupOpen && <VacanciePopup onClick={handleClose} />}
					</form>
				</div>
			</section>
		</div>
	)
}
