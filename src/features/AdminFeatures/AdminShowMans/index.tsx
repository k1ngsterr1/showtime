import React, { useState } from 'react'
import styles from './styles.module.scss'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddShowman } from '@shared/lib/hooks/Admin/Add/useAddShowman'

const PhotoUploadComponent: React.FC = () => {
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const { addShowman } = useAddShowman()
	const [image, setImage] = useState<any>()
	const [showmanName, setShowmanName] = useState<string>()
	const [sign, setSign] = useState<string>()
	const [email, setEmail] = useState<string>()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (showmanName && sign && email && selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile)
			formData.append('name', showmanName)
			formData.append('text', sign)
			formData.append('email', email)

			await addShowman(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<div className={styles.container}>
			<form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
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
				<Input
					inputType="default-red-big"
					type="text"
					placeholder="Имя сотрудника"
					margin="mt-4"
					textAlign="center"
					value={showmanName}
					onChange={(e) => setShowmanName(e.target.value)}
				/>
				<Input
					inputType="default-white"
					type="text"
					placeholder="Подпись"
					margin="mt-2"
					textAlign="center"
					value={sign}
					onChange={(e) => setSign(e.target.value)}
				/>
				<Input
					inputType="default-white"
					type="text"
					placeholder="Email"
					margin="mt-2"
					textAlign="center"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div className="mt-8 flex flex-row gap-10">
					<AddButton buttonType="filled" text="Добавить" type="submit" />
					<LinkButton buttonType="filled" href="showmans-list" text="Смотреть все" />
				</div>
			</form>
		</div>
	)
}

export default PhotoUploadComponent
