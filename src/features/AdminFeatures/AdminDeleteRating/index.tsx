import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { useDeleteRating } from '@shared/lib/hooks/Admin/Delete/useDeleteRating'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'

const AdminDeleteRating: React.FC = () => {
	const [email, setEmail] = useState<string>()

	const { deleteRating } = useDeleteRating()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (email !== null) {
			const formData = new FormData()
			formData.append('email', email)
			await deleteRating(email)
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

export default AdminDeleteRating
