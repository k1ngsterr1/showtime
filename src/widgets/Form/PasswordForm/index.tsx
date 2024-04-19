import { useState } from 'react'

import PasswordInput from '@shared/ui/Inputs/PasswordInput/index'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

import styles from '../styles/styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { useChangePassword } from '@shared/lib/hooks/useChangePassword'

export const PasswordForm = () => {
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
			const error = await useChangePassword(formData)
		} catch (error) {
			console.error('Account creation failed:', error)
		}
	}

	return (
		<div>
			<section className={styles.registration}>
				<div className={styles.registration__content}>
					<h1 className={styles.registration__heading}>Смените пароль</h1>
					<p className={styles.registration__paragraph}>
						Забота о безопасности вашего аккаунта — ключевой аспект обеспечения непрерывного доступа
						к миру игры "Мафия" и вашему участию в захватывающих партиях. Смена пароля поможет
						защитить вашу личную информацию и сохранить доступ к игре только для вас.
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
							name="newConfirmPassword"
							margin="mt-4"
							type="password"
							required
							value={formData.newConfirmPassword}
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
