import React from 'react'
import styles from './styles.module.scss'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'

const PhotoUploadComponent: React.FC = () => {
	const { previewUrl, handleFileChange } = useFileUpload()

	return (
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
			<Input inputType="default-red-big" type="text" placeholder="Имя сотрудника" margin="mt-4" />
		</div>
	)
}

export default PhotoUploadComponent
