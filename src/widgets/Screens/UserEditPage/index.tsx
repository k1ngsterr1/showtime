import React from 'react'

import styles from './styles.module.scss'

import { Input } from '@shared/ui/Inputs/DefaultInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import useFileUpload from '@shared/lib/hooks/useFileUpload'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import PasswordInputProp from '@shared/ui/Inputs/PasswordInput'

interface IUserEditScreen {
	userPhoto: ImageMetadata
	name: string
	email: string
}

export const UserEditScreen: React.FC<IUserEditScreen> = () => {
	const { previewUrl, handleFileChange } = useFileUpload()

	return (
		<main className={styles.user_edit}>
			<h1 className={styles.user_edit__heading}>Настройки профиля</h1>
			{previewUrl ? (
				<img src={previewUrl} alt="Preview" className={styles.user_edit__avatar} />
			) : (
				<label className={styles.user_edit__avatar_input} htmlFor="photo-upload">
					<FontAwesomeIcon icon={faCamera} className={styles.user_edit__avatar_input__icon} />
					<input
						id="photo-upload"
						type="file"
						style={{ display: 'none' }}
						onChange={handleFileChange}
						required
					/>
				</label>
			)}
			<Input placeholder="Имя пользователя" inputType="default" type="text" margin="mt-8" />
			<PasswordInputProp placeholder="Старый пароль" type="text" margin="mt-8" />
			<PasswordInputProp placeholder="Новый пароль" type="text" margin="mt-8" />
			<ReactButton text="Подтвердить изменения" buttonType="filled" margin="mt-8" />
		</main>
	)
}
