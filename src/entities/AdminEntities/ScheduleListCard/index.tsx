import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index';
import { Input } from '@shared/ui/Inputs/DefaultInput/index';
import { TextArea } from '@shared/ui/TexrArea';
import CalendarComponent from '@features/Calendar/index';
import { useUpdateTimetable } from '@shared/lib/hooks/Admin/Update/useUpdateTimetable';

interface IScheduleListCard {
    date: string;
    time: string;
    place: string;
    address: string;
    price: string;
    name: string;
    timetableId: number;
}



export const ScheduleListCard: React.FC<IScheduleListCard> = ({
    date,
    time,
    place,
    address,
    price,
    name,
    timetableId,
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [timeSchedule, setTimeSchedule] = useState('')
	const [reviewDate, setReviewDate] = useState('')
	const [placeSchedule, setPlaceSchedule] = useState('')
	const [addressSchedule, setAddressSchedule] = useState('')
	const [priceSchedule, setPriceSchedule] = useState('')
	const [nameSchedule, setNameSchedule] = useState('')

	const { updateTimetable } = useUpdateTimetable()

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault()

		if (timeSchedule && reviewDate && placeSchedule && priceSchedule && nameSchedule && addressSchedule) {
			const formData = new FormData()
			formData.append('timestamp', timeSchedule)
			formData.append('place', placeSchedule)
			formData.append('date', reviewDate)
			formData.append('price', priceSchedule)
			formData.append('name', nameSchedule)
			formData.append('address', addressSchedule)
			formData.append('timetableId', timetableId.toString())

			await updateTimetable(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<form onSubmit={handleUpdate} className="flex flex-col items-center justify-center">
			{isEditing ? (
				<>
					<div className={styles.change}>
						<div className={styles.change__upper}>
							<span className={styles.change__upper__date}>
								<CalendarComponent onDateChange={setReviewDate} />
							</span>
							<div className="pl-56">
								<Input
									type="text"
									inputType="default-red-small"
									placeholder="Время"
									name="timestamp"
									onChange={(e) => setTimeSchedule(e.target.value)}								/>
							</div>
						</div>
						<Input
							inputType="default-red-big"
							type="text"
							placeholder="Название"
							margin="mt-12 ml-4"
							name="name"
							onChange={(e) => setNameSchedule(e.target.value)}								/>
						<TextArea
							textareaType="schedule"
							placeholder="Адрес"
							margin="mt-8"
							name="address"
							onChange={(e) => setAddressSchedule(e.target.value)}		
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
										onChange={(e) => setPlaceSchedule(e.target.value)}								/>
								</a>
							</div>
							<div>
								<Input
									type="text"
									inputType="default-red-small"
									placeholder="Цена"
									name="price"
									onChange={(e) => setPriceSchedule(e.target.value)}								/>
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