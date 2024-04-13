import React, { useState } from 'react'
import { useUpdateTimetable } from '@shared/lib/hooks/Admin/Update/useUpdateTimetable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea'
import CalendarComponent from '@features/Calendar/index'

export interface IScheduleListCard {
	date: string
	time: string
	place: string
	address: string
	price: string
	name: string
}

export const ScheduleListCard: React.FC<IScheduleListCard> = ({
	date,
	time,
	place,
	address,
	price,
	name
}) => {
	const { updateTimetable } = useUpdateTimetable()
	const [isEditing, setIsEditing] = useState(false)

	const [formData, setFormData] = useState<IScheduleListCard>({
		date,
		time,
		place,
		address,
		price,
		name
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const dataToSend = new FormData()
		Object.entries(formData).forEach(([key, value]) => {
			dataToSend.append(key, value)
		})

		await updateTimetable(dataToSend)
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
			<div className={styles.card}>
				{isEditing ? (
					<div className={styles.card}>
						<div className={styles.card__upper}>
							<CalendarComponent
								onDateChange={(newDate) => setFormData((prev) => ({ ...prev, date: newDate }))}
							/>
							<Input
								type="text"
								inputType="default-red-small"
								placeholder="Time"
								name="time"
								value={formData.time}
								onChange={handleInputChange}
							/>
						</div>
						<Input
							inputType="default-red-big"
							type="text"
							placeholder="Name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
						/>
						<TextArea
							textareaType="schedule"
							placeholder="Address"
							name="address"
							value={formData.address}
							onChange={handleInputChange}
						/>
						<div className={styles.card__down}>
							<FontAwesomeIcon icon={faLocationDot} className={styles.card__icon} />
							<Input
								placeholder="Place on map"
								inputType="default-red-medium"
								type="text"
								name="place"
								value={formData.place}
								onChange={handleInputChange}
							/>
							<Input
								type="text"
								inputType="default-red-small"
								placeholder="Price"
								name="price"
								value={formData.price}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				) : (
					<>
						<div className={styles.card__upper}>
							<span className={styles.card__upper__date}>{formData.date}</span>
							<span className={styles.card__upper__time}>{formData.time}</span>
						</div>
						<span className={styles.card__heading}>{formData.name}</span>
						<address className={styles.card__address}>{formData.address}</address>
						<div className={styles.card__down}>
							<FontAwesomeIcon icon={faLocationDot} className={styles.card__icon} />
							<a
								className={styles.card__link}
								href={formData.place}
								target="_blank"
								rel="noopener noreferrer"
							>
								Place on map
							</a>
							<span className={styles.card__down__price}>{formData.price}</span>
						</div>
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
