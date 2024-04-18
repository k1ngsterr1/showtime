import { useState } from 'react'
import { useEffect } from 'react'
import { useGetTimetables } from '@shared/lib/hooks/Admin/Get/useGetTimetables'
import { useDeleteTimetable } from '@shared/lib/hooks/Admin/Delete/useDeleteTimetable'
import { ScheduleListCard } from '@entities/AdminEntities/ScheduleListCard/index'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import fedora from '@assets/logo/fedora.svg'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../../AdminPage/ServicesList/styles.module.scss'
import '@shared/styles/global.scss'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

export const ScheduleList = () => {
	const userData = useUserData()
	const [timetables, setTimetables] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getTimetables } = useGetTimetables()
	const { deleteTimetable } = useDeleteTimetable()

	useEffect(() => {
		setIsLoading(true)
		getTimetables()
			.then((data) => {
				if (Array.isArray(data)) {
					setTimetables(data)
				} else {
					console.error('Data is not an array:', data)

					setTimetables([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteTimetable = (timetableId: string) => {
		deleteTimetable({ timetableId: timetableId })
			.then(() => {
				getTimetables()
					.then((data) => {
						if (Array.isArray(data)) {
							setTimetables(data)
						} else {
							console.error('Data is not an array:', data)
							setTimetables([])
						}
					})
					.catch((error) => {
						console.error('Failed to fetch showmans:', error)
					})
			})
			.catch((error) => {
				console.error('Failed to delete showman:', error)
			})
	}

	return (
		<main className={styles.services}>
			{userData?.role !== 'admin' ? (
				<>
					<AdminErrorScreen />
				</>
			) : (
				<>
					{' '}
					<div className={styles.services__content}>
						<div className={styles.services__content_logo}>
							<img src={Logo.src} alt="Logo" />
						</div>
						<h1 className="text-primary-red">Расписание</h1>
						<div className={styles.services__content_cards}>
							<div className={styles.services__content_schedulecard}>
								{timetables.map((scheduleItem) => (
									<div className="flex flex-col items-center justify-center" key={scheduleItem.id}>
										<ScheduleListCard
											time={scheduleItem.timestamp}
											place={scheduleItem.place}
											address={scheduleItem.address}
											date={scheduleItem.date}
											price={scheduleItem.price}
											name={scheduleItem.name}
										/>
										<Buttons
											buttonType="filled"
											text="Удалить"
											margin="mt-4"
											onClick={() => handleDeleteTimetable(scheduleItem.id)}
										/>
									</div>
								))}
							</div>
						</div>
						<LinkButton buttonType="filled" href="schedule" text="Назад" margin="mt-8" />
					</div>
				</>
			)}
		</main>
	)
}
