import React, { useState } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { TextArea } from '@shared/ui/TexrArea'
import { useUpdateService } from '@shared/lib/hooks/Admin/Update/useUpdateService'

import styles from './styles.module.scss'

export interface ICardProps {
	number: string
	service: string
	text: string
	serviceId: number
}

const Card: React.FC<ICardProps> = ({ number, service, text, serviceId }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [serviceEdit, setServiceEdit] = useState<string>()
	const [editedText, setEditedText] = useState<string>()
	const { updateService } = useUpdateService()

	const handleUpdate = async (event: React.FormEvent) => {
		event.preventDefault()

		if (serviceEdit && editedText) {
			const formData = new FormData()
			formData.append('service', serviceEdit)
			formData.append('text', editedText)
			formData.append('serviceId', serviceId.toString())

			await updateService(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<form className="flex flex-col items-center justify-center" onSubmit={handleUpdate}>
			<div className={styles.card}>
				{isEditing ? (
					<>
						<div className={styles.card__number}>{number}</div>

						<Input
							inputType="services-red-big"
							type="text"
							placeholder="Название услуги"
							name="service"
							margin="mt-8"
							value={serviceEdit}
							onChange={(e) => setServiceEdit(e.target.value)}
						/>
						<TextArea
							name="text"
							textareaType="services"
							placeholder="Текст"
							margin="mt-8"
							value={editedText}
							onChange={(e) => setEditedText(e.target.value)}
						/>
					</>
				) : (
					<>
						<div className={styles.card__number}>{number}</div>
						<span className={styles.card__heading}>{service}</span>
						<p className={styles.card__paragraph}>{text}</p>
					</>
				)}
			</div>
			{isEditing ? (
				<Buttons buttonType="filled" text="Сохранить" type="submit" margin="mt-10" />
			) : (
				<Buttons
					buttonType="filled"
					text="Редактировать"
					margin="mt-10"
					onClick={() => setIsEditing(true)}
				/>
			)}
		</form>
	)
}

export default Card
