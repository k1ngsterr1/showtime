import React, { useState } from 'react'
import { LinkButton } from '@shared/ui/LinkButton'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea'
import { useUpdateVacancy } from '@shared/lib/hooks/Admin/Update/useUpdateVacancy'

import styles from '../ServicesCard/styles.module.scss'

export interface IVacancyCardProps {
	number: number
	position: string
	text: string
	vacancyId: number
}

const VacancyCard: React.FC<IVacancyCardProps> = ({ number, position, text, vacancyId }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [editedPosition, setEditedPosition] = useState<string>()
	const [editedText, setEditedText] = useState<string>()
	const { updateVacancy } = useUpdateVacancy()

	const handleUpdate = async (event: React.FormEvent) => {
		event.preventDefault()

		if (editedPosition && editedText) {
			const formData = new FormData()
			formData.append('service', editedPosition)
			formData.append('text', editedText)
			formData.append('vacancyId', vacancyId.toString())

			await updateVacancy(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<form className="flex flex-col items-center justify-center">
			<div className={styles.card}>
				<div className={styles.card__number}>{number}</div>
				{isEditing ? (
					<>
						<Input
							inputType="default"
							type="text"
							placeholder="Позиция"
							name="position"
							value={editedPosition}
							onChange={(e) => setEditedPosition(e.target.value)}
						/>
						<TextArea
							name="text"
							textareaType="default"
							placeholder="Описание"
							value={editedText}
							onChange={(e) => setEditedText(e.target.value)}
						/>
					</>
				) : (
					<>
						<span className={styles.card__heading}>{position}</span>
						<p className={styles.card__paragraph}>{text}</p>
						<LinkButton
							buttonType="filled"
							text="Откликнуться"
							margin="mt-8"
							href="vacancie-form"
						/>
					</>
				)}
			</div>
			{isEditing ? (
				<Buttons buttonType="filled" text="Сохранить" type="submit" margin="mt-10" />
			) : (
				<Buttons buttonType="filled" text="Редактировать" margin="mt-10" />
			)}
		</form>
	)
}

export default VacancyCard
