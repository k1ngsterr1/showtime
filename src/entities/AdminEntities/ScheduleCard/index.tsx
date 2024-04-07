import React, { useState } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea/index' // Corrected the folder name
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import CalendarComponent from '@features/Calendar/index'
import styles from './styles.module.scss'
import '@shared/styles/global.scss'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddTimetable } from '@shared/lib/hooks/Admin/Add/useAddTimetable'

interface ICardProps {
	time: string
	name: string
	address: string
	price: string
}

export const ScheduleCard: React.FC<ICardProps> = ({ address, name, time, price }) => {
	const { addTimetable } = useAddTimetable()
	const [formData, setFormData] = useState({
		timestamp: '',
		name: '',
		address: '',
		place: '',
		price: ''
	})

	const handleInputChange = (e: any) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		const { timestamp, name, address, place, price } = formData
		if (timestamp && name && address && place && price) {
			console.log('Submitting:', formData)
			// Here, you would call addTimetable or any other method to submit the form data
			await addTimetable(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className={styles.card}>
					<div className={styles.card__upper}>
						<span className={styles.card__upper__date}>
							<CalendarComponent />
						</span>
						<span className={styles.card__upper_time}>
							<Input
								type="text"
								inputType="default-red-small"
								placeholder={time}
								name="timestamp"
								value={formData.timestamp}
								onChange={handleInputChange}
							/>
						</span>
					</div>
					<Input
						inputType="default-red-big"
						type="text"
						placeholder={name}
						margin="mt-12 ml-4"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
					/>
					<TextArea
						textareaType="schedule"
						placeholder={address}
						margin="mt-8"
						name="address"
						value={formData.address}
						onChange={handleInputChange}
					/>
					<div className={styles.card__down}>
						<div className=" mb-2 flex items-center overflow-hidden text-2xl">
							<FontAwesomeIcon icon={faLocationDot} className={styles.card__icon} />
							<a
								className={styles.card__link}
								href="https://www.google.com/maps/@43.2570368,76.906496,12z?entry=ttu"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Input
									placeholder="Укажите место на карте"
									inputType="default-red-medium"
									type="text"
									name="place"
									value={formData.place}
									onChange={handleInputChange}
								/>
							</a>
						</div>
						<div>
							<Input
								type="text"
								inputType="default-red-small"
								placeholder={price}
								name="price"
								value={formData.price}
								onChange={handleInputChange}
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<AddButton buttonType="filled" text="Добавить" margin="mt-12" type="submit" />
					<LinkButton buttonType="filled" href="schedule-list" text="Смотреть все" margin="mt-6" />
				</div>
			</form>
		</>
	)
}
