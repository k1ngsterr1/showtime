import React, { useState } from 'react'
import styles from './styles.module.scss'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddProduct } from '@shared/lib/hooks/Admin/Add/useAddProduct'

const AdminProducts: React.FC = () => {
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [productName, setProductName] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const { addProduct } = useAddProduct()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (productName && productDescription && productPrice && selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile)
			formData.append('name', productName)
			formData.append('description', productDescription)
			formData.append('price', productPrice)

			await addProduct(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.container}>
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
								name="pictureName"
								id="file-upload"
								type="file"
								style={{ display: 'none' }}
								onChange={handleFileChange}
							/>
						</label>
					)}
					<Input
						inputType="product"
						type="text"
						placeholder="Название продукта"
						margin="mt-8"
						name="name"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
					/>
					<TextArea
						placeholder="Описание продкута"
						textareaType="product-desc"
						margin="mt-4"
						name="description"
						value={productDescription}
						onChange={(e) => setProductDescription(e.target.value)}
					/>
					<Input
						inputType="product"
						type="text"
						placeholder="Цена"
						margin="mt-5"
						name="price"
						value={productPrice}
						onChange={(e) => setProductPrice(e.target.value)}
					/>
				</div>
			</div>
			<div className="mt-12 flex flex-row gap-10">
				<AddButton buttonType="filled" text="Добавить" type="submit" />
				<LinkButton buttonType="filled" href="products-list" text="Смотреть все" />
			</div>
		</form>
	)
}

export default AdminProducts
