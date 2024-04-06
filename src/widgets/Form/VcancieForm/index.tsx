import { Input } from '@shared/ui/Inputs/DefaultInput'
import { createAccount } from '@shared/lib/hooks/useCreateAccount'
import { useState } from 'react'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { VacanciePopup } from '@features/Popup_Components/VacanciePopup/index'
import styles from '../styles/styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

export const VacancieForm = () => {
	const [resumeName, setResumeName] = useState('')

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		if (file) {
			setResumeName(file.name)
			console.log('Selected file:', file.name)
		} else {
			console.log('No file selected')
		}
	}

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
						incididunt ut labore et dolore magna aliqua.
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
						<div className={styles.resumeUploadContainer}>
							<input
								type="file"
								id="resume"
								name="resume"
								className={styles.hidden}
								onChange={handleFileChange}
								accept=".pdf,.doc,.docx"
							/>
							<label htmlFor="resume" className={styles.uploadButton}>
								<FontAwesomeIcon icon={faPaperclip} /> Attach Resume
							</label>
							{resumeName && (
								<div className={styles.resumeStatus}>Your resume is attached: {resumeName}</div>
							)}
						</div>
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
