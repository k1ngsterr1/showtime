import React from 'react'
// import KebabMenu from '@shared/ui/KebabMenu/index'

import styles from './style.module.scss'
interface UserTab {
	name: string
	position: string
	margin?: string
	photo: ImageMetadata
	userTabType?: string | 'users'
	userPhotoType?: string | 'users'
	userTextType?: string | 'users'
}

const AdminUserTab: React.FC<UserTab> = ({
	name,
	margin,
	position,
	photo,
	userTabType,
	userPhotoType,
	userTextType
}) => {
	const userTabClass = `${styles.usertab} ${styles[`usertab--${userTabType}`]} ${margin ? margin : ''}`
	const userPhotoClass = `${styles.usertab__photo} ${styles[`usertab__photo--${userPhotoType}`]} ${margin ? margin : ''}`
	const userTextClass = `${styles.usertab__text} ${styles[`usertab__text--${userTextType}`]} ${margin ? margin : ''}`

	return (
		<div className={userTabClass}>
			<div className={styles.kebab}>
				{/* <KebabMenu /> Здесь используется компонент KebabMenu */}
			</div>
			<div className={styles.usertab__kebab}></div>
			<div className={userPhotoClass}>
				<img src={photo.src} alt="photo" />
			</div>
			<div className={userTextClass}>
				<span className={styles.usertab__text_name}>{name}</span>
				<span className={styles.usertab__text_position}>{position}</span>
			</div>
		</div>
	)
}

export default AdminUserTab
