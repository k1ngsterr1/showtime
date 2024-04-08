import React from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { useAddWorker } from '@shared/lib/hooks/Admin/Add/useAddWorker'
import { useState } from 'react'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'

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
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [workerName, setWorkerName] = useState('')
	const [workerPosition, setWorkerPosition] = useState('')
	const { addWorker } = useAddWorker()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (selectedFile && workerName && workerPosition) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile)
			formData.append('email', workerName)
			formData.append('position', workerPosition)

			try {
				await addWorker(formData)
			} catch (error) {
				console.error('Error adding worker:', error)
			}
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
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
								name="pictureName"
							/>
						</label>
					)}
				</div>
				<div className={userTextClass}>
					<Input
						inputType="teamname"
						placeholder={name}
						type="text"
						value={workerName}
						onChange={(e) => setWorkerName(e.target.value)}
						name="email"
					/>
					<Input
						inputType="teamposition"
						placeholder={position}
						type="text"
						value={workerPosition}
						onChange={(e) => setWorkerPosition(e.target.value)}
						name="position"
					/>
				</div>
			</div>
			<div className=" mt-8 flex flex-col items-center justify-center">
				<Button buttonType="filled" type="submit" text="Добавить" />
			</div>
		</form>
	)
}
