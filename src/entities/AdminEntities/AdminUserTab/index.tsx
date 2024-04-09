import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.scss'

interface UserTab {
	email: string
	position: string
	margin?: string
	image: ImageMetadata
	userTabType?: string | 'users'
	userPhotoType?: string | 'users'
	userTextType?: string | 'users'
	onDelete?: () => void
}

export const AdminUserTab: React.FC<UserTab> = ({
	email,
	margin,
	position,
	image,
	userTabType,
	userPhotoType,
	userTextType,
	onDelete
}) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false)
	const userTabClass = `${styles.usertab} ${styles[`usertab--${userTabType}`]} ${margin ? margin : ''}`
	const userPhotoClass = `${styles.usertab__photo} ${styles[`usertab__photo--${userPhotoType}`]} ${margin ? margin : ''}`
	const userTextClass = `${styles.usertab__text} ${styles[`usertab__text--${userTextType}`]} ${margin ? margin : ''}`

	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible)
	}

	return (
		<>
			<div className={userTabClass}>
				<div className={styles['kebab-menu']} onClick={toggleMenu}>
					<FontAwesomeIcon icon={faEllipsisV} className="text-3xl" />
				</div>
				{isMenuVisible && (
					<div className={styles.menu}>
						<button className={styles.menu_btn}>Редактировать</button>
						<button className={styles.menu_btn} onClick={onDelete}>
							Удалить
						</button>
					</div>
				)}
				<div className={userPhotoClass}>
					<img src={image.src} alt="photo" />
				</div>
				<div className={userTextClass}>
					<span className={styles.usertab__text_name}>{email}</span>
					<span className={styles.usertab__text_position}>{position}</span>
				</div>
			</div>
		</>
	)
}
