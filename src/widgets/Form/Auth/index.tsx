import PasswordInput from '@shared/ui/Inputs/PasswordInput/index'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { createAccount } from '@shared/lib/hooks/useCreateAccount'
import { useState } from 'react'
import { ErrorTab } from '@shared/ui/ErrorTab'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

import styles from '../styles/styles.module.scss'

export const Auth = () => {
	const { previewUrl, handleFileChange } = useFileUpload()

	return (
		<div>
			<section className={styles.registration}>
				<div className={styles.registration__content}>
					<div className={styles.registration__logo}></div>
					<h2 className={styles.registration__heading}>Пройдите аутнетификацию</h2>
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
					</div>
					<ReactButton buttonType="filled" text="Отправить" type="submit" margin="mt-8" />
				</div>
			</section>
		</div>
	)
}
