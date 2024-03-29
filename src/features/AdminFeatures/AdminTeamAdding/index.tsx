import React from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import { Input } from '@shared/ui/Inputs/DefaultInput'

import Fedora from '@assets/logo/fedora.svg'

import styles from './styles.module.scss'
interface UserTab {
	name: string
	position: string
	margin?: string
	userTabType?: string | 'users'
	userPhotoType?: string | 'users'
	userTextType?: string | 'users'
}

export const AdminTeamAdding: React.FC<UserTab> = ({
	name,
	margin,
	position,
	userTabType,
	userPhotoType,
	userTextType
}) => {
	const userTabClass = `${styles.usertab} ${styles[`usertab--${userTabType}`]} ${margin ? margin : ''}`
	const userPhotoClass = `${styles.usertab__photo} ${styles[`usertab__photo--${userPhotoType}`]} ${margin ? margin : ''}`
	const userTextClass = `${styles.usertab__text} ${styles[`usertab__text--${userTextType}`]} ${margin ? margin : ''}`
	const { previewUrl, handleFileChange } = useFileUpload()

	return (
		<div className={`${userTabClass} mt-8 `}>
			<div className={styles.card__content}>
				{previewUrl ? (
					<img src={previewUrl} alt="Preview" className={styles.card__content__previewImage} />
				) : (
					<label htmlFor="file-upload" className={styles.upload}>
						<img src={Fedora.src} alt="Fedora" className={styles.upload__fedora} />
						<input
							id="file-upload"
							type="file"
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>
					</label>
				)}
			</div>
			<div className={userTextClass}>
				<Input inputType="teamname" placeholder={name} type="text" />
				<Input inputType="teamposition" placeholder={position} type="text" />
			</div>
		</div>
	)
}
