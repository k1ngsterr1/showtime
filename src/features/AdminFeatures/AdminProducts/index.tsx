import React from 'react'
import styles from './styles.module.scss'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton/index'

const AdminProducts: React.FC = () => {
	const { previewUrl, handleFileChange } = useFileUpload()

	return (
		<div className={styles.container}>
			<form>
				<div className={styles.container__content}>
					{previewUrl ? (
						<img
							src={previewUrl}
							alt="Preview"
							className={styles.container__content__previewImage}
						/>
					) : (
						<label htmlFor="file-upload" className={styles.container__content__upload}>
							<img
								src={Fedora.src}
								alt="Fedora"
								className={styles.container__content__upload_fedora}
							/>
							<p className="font-neoregular text-xl text-primary-red">Добавить фото</p>
							<input
								id="file-upload"
								type="file"
								style={{ display: 'none' }}
								onChange={handleFileChange}
							/>
						</label>
					)}
					<Input inputType="product" type="text" placeholder="Название продукта" margin="mt-8" />
					<TextArea placeholder="Описание продкута" textareaType="product-desc" margin="mt-4" />
					<Input inputType="product" type="text" placeholder="Цена" margin="mt-5" />
					<ReactButton margin="mt-4" text="Купить" buttonType="transparent" />
				</div>
			</form>
		</div>
	)
}

export default AdminProducts
