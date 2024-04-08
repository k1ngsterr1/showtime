import { useState, type SyntheticEvent } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { loginAccount } from '@shared/lib/hooks/useLogin'
import { ErrorTab } from '@shared/ui/ErrorTab'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import PasswordInput from '@shared/ui/Inputs/PasswordInput/index'
import styles from '../styles/styles.module.scss'

export const LoginForm = () => {
	const [loginError, setLoginError] = useState<any>(null)
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const handleInputChange = (e: any) => {
		const { name, value } = e.target
		console.log(name, value)
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault()

		const error = await loginAccount(formData)

		setLoginError(error)

		if (error) {
			console.log('Error occurred:', error)
		} else {
			console.log('Login successful')
		}
	}

	return (
		<>
			<section className={styles.registration}>
				<div className={styles.registration__content}>
					<div className={styles.registration__logo}></div>
					<h1 className={styles.registration__heading}>Войдите в аккаунт</h1>
					<p className={styles.registration__paragraph}>
						Входите в свой аккаунт и погружайтесь в непредсказуемый мир игры "Мафия", где каждая
						роль, каждое решение и каждый ход может изменить исход партии. Здесь вы найдете не
						только захватывающие игры, но и новых друзей, единомышленников и, возможно, соперников.
					</p>
					<form className={styles.registration__form} onSubmit={handleSubmit}>
						<Input
							placeholder="Электронная почта"
							inputType="default"
							margin="mt-4"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleInputChange}
						/>
						<PasswordInput
							placeholder="Пароль"
							margin="mt-4"
							name="password"
							type="password"
							value={formData.password}
							onChange={handleInputChange}
						/>
						<ReactButton text="Войти" buttonType="filled" type="submit" margin="mt-8" />
					</form>
					<a
						href="/password-change"
						className={`mt-4 text-primary-red ${styles.registration__password}`}
					>
						Забыли пароль?
					</a>
					<span className={styles.registration__mini_text}>
						Еще нет аккаунта?{''}
						<a href="/registration" className="ml-2 text-primary-red">
							{''}Создать аккаунт
						</a>
						{loginError && <ErrorTab text={loginError} />}
					</span>
				</div>
			</section>
		</>
	)
}
