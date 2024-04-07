import PasswordInput from '@shared/ui/Inputs/PasswordInput/index'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { createAccount } from '@shared/lib/hooks/useCreateAccount'
import { useState } from 'react'
import { ErrorTab } from '@shared/ui/ErrorTab'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

import styles from '../styles/styles.module.scss'

export const RegistrationForm = () => {
	const [loginError, setLoginError] = useState<any>(null)

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		phone: '',
		password: '',
		passwordConfirmation: ''
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
					<h1 className={styles.registration__heading}>Пройдите регистрацию</h1>
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
							placeholder="Электронная почта"
							name="email"
							inputType="default"
							margin="mt-4"
							type="email"
							required
							value={formData.email}
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
						<PasswordInput
							placeholder="Пароль"
							name="password"
							margin="mt-4"
							type="password"
							required
							value={formData.password}
							onChange={handleInputChange}
						/>
						<PasswordInput
							placeholder="Подтвердите пароль"
							name="passwordConfirmation"
							margin="mt-4"
							type="password"
							required
							value={formData.passwordConfirmation}
							onChange={handleInputChange}
						/>
						<ReactButton
							buttonType="filled"
							text="Создать аккаунт"
							type="submit"
							onClick={() => formData}
							margin="mt-8"
						/>
					</form>
					<span className={styles.registration__mini_text}>
						Уже есть аккаунт?{' '}
						<a href="/login" className="text-primary-red">
							Войти
						</a>
						{loginError && <ErrorTab text={loginError} />}
					</span>
				</div>
			</section>
		</div>
	)
}
