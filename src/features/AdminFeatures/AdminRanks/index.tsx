import React, { useState } from 'react'
import styles from './styles.module.scss'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddProduct } from '@shared/lib/hooks/Admin/Add/useAddProduct'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'

const AdminRanks: React.FC = () => {
	const [productName, setProductName] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const { addProduct } = useAddProduct()

	return (
		<form>
			<div className={styles.container}>
				<div className={`${styles.container__content} flex flex-col items-center justify-center`}>
					<form className="flex flex-col items-center">
						<Input
							type="text"
							name="email"
							placeholder="Почта пользователя"
							inputType="default"
							required
						/>
						<Input
							type="text"
							name="rank"
							placeholder="Введите новое звание пользователя"
							inputType="default"
							margin="mt-4"
							required
						/>
						<Button text="Поменять звание" buttonType="filled" margin="mt-8" />
					</form>
				</div>
			</div>
		</form>
	)
}

export default AdminRanks
