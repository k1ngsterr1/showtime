import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { useUpdateShowman } from '@shared/lib/hooks/Admin/Update/useUpdateShowman'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'

interface Props {
	url: string
	text: string
	name: string
	showmanId: number
	editing: boolean
}

export const ShowMansCard: React.FC<Props> = ({ url, text, name, editing, showmanId }) => {
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [showmanName, setShowmanName] = useState<string>()
	const [sign, setSign] = useState<string>()
	const { updateShowman } = useUpdateShowman()

	const handleUpdate = async (event: React.FormEvent) => {
		event.preventDefault()

		if (showmanName && sign && selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile)
			formData.append('name', showmanName)
			formData.append('text', sign)
			formData.append('showmanId', showmanId.toString())

			await updateShowman(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<>
			<form className="flex flex-col items-center justify-center" onSubmit={handleUpdate}>
				<div className={styles.card}>
					{editing ? (
						<div className="flex flex-col items-center justify-center">
							{previewUrl ? (
								<img src={previewUrl} alt="Preview" className={styles.previewImage} />
							) : (
								<label htmlFor="file-upload" className={styles.upload}>
									<img src={Fedora.src} alt="Fedora" className={styles.upload_fedora} />
									<p className="font-neoregular text-xl text-primary-light">Добавить фото</p>
									<input
										id="file-upload"
										type="file"
										name="pictureName"
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
								name="name"
								textAlign="center"
								value={showmanName}
								onChange={(e) => setShowmanName(e.target.value)}
							/>
							<Input
								inputType="default-white"
								type="text"
								placeholder="Подпись"
								margin="mt-2"
								name="text"
								textAlign="center"
								value={sign}
								onChange={(e) => setSign(e.target.value)}
							/>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center">
							<img src={url} alt={name} className={styles.card_picture} />
							<span className={styles.card__name}>{name}</span>
							<span className={styles.card__position}>{text}</span>
						</div>
					)}
				</div>
				<Buttons buttonType="filled" text="Сохранить" margin="mt-10" type="submit" />
			</form>
		</>
	)
}
