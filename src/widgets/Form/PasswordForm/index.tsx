import { useState } from 'react'

import PasswordInput from '@shared/ui/Inputs/PasswordInput/index'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

import styles from '../styles/styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput'

export const PasswordForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		newPassword: '',
		newPasswordConfirm: ''
	})

	const handleInputChange = (e: any) => {
		const { name, value } = e.target

		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	// const handleSubmit = async (event: any) => {
	// 	event.preventDefault()
	// 	try {
	// 		const error = await createAccount(formData)
	// 		setLoginError(error)
	// 		console.log(loginError)
	// 	} catch (error) {
	// 		console.error('Account creation failed:', error)
	// 	}
	// }

	return (
		<div>
			<section className={styles.registration}>
				<div className={styles.registration__content}>
					<h1 className={styles.registration__heading}>Смените пароль</h1>
					<p className={styles.registration__paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.{' '}
					</p>
					<form action="" className={styles.registration__form}>
						{' '}
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
						<PasswordInput
							placeholder="Новый пароль"
							name="newPassword"
							margin="mt-4"
							type="password"
							required
							value={formData.newPassword}
							onChange={handleInputChange}
						/>
						<PasswordInput
							placeholder="Подтвердите новый пароль"
							name="newPasswordConfirm"
							margin="mt-4"
							type="password"
							required
							value={formData.oldPassword}
							onChange={handleInputChange}
						/>
						<ReactButton
							buttonType="filled"
							text="Cменить пароль"
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
