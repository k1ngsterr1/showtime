import { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { BiometryPopup } from '@features/Popup_Components/BiometryPopup'

import styles from '../styles/styles.module.scss'

export const Auth = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)
	const { previewUrl, handleFileChange } = useFileUpload()

	const handleClick = () => {
		setPopupOpen(true)
	}

	const handleClose = () => {
		setPopupOpen(false)
	}

	return (
		<div>
			<section className={styles.registration}>
				<div className={styles.registration__content}>
					<div className={styles.registration__logo}></div>
					<h2 className={styles.registration__heading}>Пройдите аутентификацию</h2>
					<p className={styles.registration__paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
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
								/>
							</label>
						)}
						<ReactButton
							buttonType="filled"
							text="Отправить"
							type="submit"
							onClick={handleClick}
							margin="mt-8"
						/>
						{isPopupOpen && <BiometryPopup onClick={handleClose} />}
					</div>
				</div>
			</section>
		</div>
	)
}
