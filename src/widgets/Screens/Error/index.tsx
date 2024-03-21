import React from 'react'

import styles from './styles.module.scss'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

export const ErrorScreen = () => {
	const handleNavigate = () => {
		window.location.href = '/login'
	}

	return (
		<div className={styles.error}>
			<h1 className={styles.error__heading}>Ошибка</h1>
			<p className={styles.error__paragraph}>
				Авторизуйтесь или создайте аккаунт,чтобы начать играть
			</p>
			<ReactButton buttonType="filled" text="Войти" margin="mt-8" onClick={handleNavigate} />
		</div>
	)
}
