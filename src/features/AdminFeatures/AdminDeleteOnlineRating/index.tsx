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
import { useChangeRank } from '@shared/lib/hooks/useChangeRank'
import { useDeleteOnlineRating } from '@shared/lib/hooks/Admin/Delete/useDeleteOnlineRating'

const AdminDeleteOnlineRating: React.FC = () => {
	const [email, setEmail] = useState<string>()
	const { deleteOnlineRating } = useDeleteOnlineRating()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (email !== null) {
			const formData = new FormData()
			formData.append('email', email)
			await deleteOnlineRating(email)
		} else {
			console.log('All fields including email and rank are required!')
		}
	}

	return (
		<div className={styles.container}>
			<div className={`${styles.container__content} flex flex-col items-center justify-center`}>
				<p className="mb-8 text-center font-neoregular text-primary-light">
					Напиши email пользователя, чей рейтинг вы хотите удалите.
				</p>
				<form className="flex flex-col items-center" onSubmit={handleSubmit}>
					<Input
						type="text"
						name="email"
						placeholder="Почта пользователя"
						inputType="default"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Button type="submit" text="Удалить" buttonType="filled" margin="mt-4" />
				</form>
			</div>
		</div>
	)
}

export default AdminDeleteOnlineRating
