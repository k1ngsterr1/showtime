import { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { BiometryPopup } from '@features/Popup_Components/BiometryPopup'
import { useAddVerifiedUser } from '@shared/lib/hooks/Admin/Users/useVerifyUser'

import styles from '../styles/styles.module.scss'

export const Auth = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const { addVerifyUser } = useAddVerifiedUser()

	const handleClick = async (event: any) => {
		event.preventDefault()
		setPopupOpen(true)

		if (selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile)
			await addVerifyUser(formData)
		} else {
			console.log('All fields are required')
		}
	}

	const handleClose = () => {
		setPopupOpen(false)
	}
	return (
		<form onSubmit={handleClick}>
			<div>
				<section className={styles.registration}>
					<div className={styles.registration__content}>
						<div className={styles.registration__logo}></div>
						<h2 className={styles.registration__heading}>Пройдите аутентификацию</h2>
						<p className={styles.registration__paragraph}>
							Мир интриг, загадок и непредсказуемых поворотов судьбы ждёт вас. Войдите в свой
							аккаунт, чтобы продолжить путешествие в захватывающем мире игры "Мафия", где каждый
							ваш выбор может изменить исход игры.
						</p>
						<div className={styles.container}>
							{previewUrl ? (
								<img src={previewUrl} alt="Preview" className={styles.previewImage} />
							) : (
								<label htmlFor="file-upload" className={styles.container__upload}>
									<img src={Fedora.src} alt="Fedora" className={styles.container__upload_fedora} />
									<p className="font-neoregular text-xl text-primary-light">Добавить фото</p>
									<input
										id="file-upload"
										type="file"
										style={{ display: 'none' }}
										onChange={handleFileChange}
										name="pictureName"
										required
									/>
								</label>
							)}
							<ReactButton
								buttonType="filled"
								text="Отправить"
								type="submit"
								onClick={handleClick}
								margin="mt-8"
								disabled={!previewUrl}
							/>
							{isPopupOpen && <BiometryPopup onClick={handleClose} />}
						</div>
					</div>
				</section>
			</div>
		</form>
	)
}
