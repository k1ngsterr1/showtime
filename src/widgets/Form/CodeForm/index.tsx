import { useState } from 'react'

import PasswordInput from '@shared/ui/Inputs/PasswordInput/index'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

import styles from '../styles/styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { useChangePassword } from '@shared/lib/hooks/useChangePassword'

export const CodeForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		newPassword: '',
		newConfirmPassword: ''
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
			// const error = await useChangePassword(formData)
		} catch (error) {
			console.error('Account creation failed:', error)
		}
	}

	return (
		<div>
			<section className={styles.registration}>
				<div className={styles.registration__content}>
					<h1 className={styles.registration__heading}>Письмо для смены пароля</h1>
					<p className={styles.registration__paragraph}>
						Введите вашу почту, чтобы мы могли отправить вам письмо для смены пароля
					</p>
					<form action="" className={styles.registration__form} onSubmit={handleSubmit}>
						<Input
							placeholder="Электронная почта"
							name="email"
							inputType="default"
							margin="mt-4"
							type="email"
							required
							value={formData.email}
							onChange={handleInputChange}
						/>
						<ReactButton
							buttonType="filled"
							text="Отправить письмо"
							type="submit"
							onClick={() => formData}
							margin="mt-8"
						/>
					</form>
				</div>
			</section>
		</div>
	)
}
