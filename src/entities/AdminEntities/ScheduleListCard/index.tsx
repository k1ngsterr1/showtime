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
	const [selectedDate, setSelectedDate] = useState<string>('')

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
			{isEditing ? (
				<>
					<div className={styles.change}>
						<div className={styles.change__upper}>
							<span className={styles.change__upper__date}>
								<CalendarComponent onDateChange={setSelectedDate} />
							</span>
							<div className="pl-56">
								<Input
									type="text"
									inputType="default-red-small"
									placeholder="Время"
									name="timestamp"
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<Input
							inputType="default-red-big"
							type="text"
							placeholder="Название"
							margin="mt-12 ml-4"
							name="name"
							onChange={handleInputChange}
						/>
						<TextArea
							textareaType="schedule"
							placeholder="Адрес"
							margin="mt-8"
							name="address"
							onChange={handleInputChange}
						/>
						<div className={styles.change__down}>
							<div className=" mb-2 flex items-center overflow-hidden text-2xl">
								<FontAwesomeIcon icon={faLocationDot} className={styles.change__icon} />
								<a
									className={styles.change__link}
									href="https://www.google.com/maps/@43.2570368,76.906496,12z?entry=ttu"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Input
										placeholder="Укажите место на карте"
										inputType="default-red-medium"
										type="text"
										name="place"
										onChange={handleInputChange}
									/>
								</a>
							</div>
							<div>
								<Input
									type="text"
									inputType="default-red-small"
									placeholder="Цена"
									name="price"
									onChange={handleInputChange}
								/>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className={styles.card}>
						<div className={styles.card__upper}>
							<span className={styles.card__upper__date}>{date}</span>
							<span className={styles.card__upper__time}>{time}</span>
						</div>
						<span className={styles.card__heading}>{name}</span>
						<address className={styles.card__address}>{address}</address>
						<div className={styles.card__down}>
							<FontAwesomeIcon icon={faLocationDot} className={styles.card__icon} />
							<a className={styles.card__link} href={place}>
								Место на карте
							</a>
							<span className={styles.card__down__price}>{price}</span>
						</div>
					</div>
				</>
			)}
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
