import React from 'react'
import fedora from '@assets/logo/fedora.svg'

import styles from './styles.module.scss'

interface IUserProfileProps {
	name: string
	rank: string
}

export const UserProfile: React.FC<IUserProfileProps> = ({ name, rank }) => {
	return (
		<div className={styles.user_profile}>
			<div className={styles.user_profile__avatar}>
				<img src={fedora.src} className={styles.user_profile__avatar__icon} alt="fedora" />
			</div>
			<span className={styles.user_profile__name}>{name}</span>
			<span className={styles.user_profile__rank}>
				Звание: <strong>{rank}</strong>
			</span>
		</div>
	)
}
