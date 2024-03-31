import React from 'react'
import { ScheduleListCard } from '@entities/AdminEntities/ScheduleListCard/index'
import { schedule } from '@shared/lib/content/scheduleListContent'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../../AdminPage/ServicesList/styles.module.scss'
import '@shared/styles/global.scss'

export const ScheduleList = () => {
	return (
		<main className={styles.services}>
			<div className={styles.services__content}>
				<div className={styles.services__content_logo}>
					<img src={Logo.src} alt="Logo" />
				</div>
				<h1 className="text-primary-red">Расписание</h1>
				<div className={styles.services__content_cards}>
					<div className={styles.services__content_schedulecard}>
						{schedule.map((scheduleItem) => (
							<div className="flex flex-col items-center justify-center">
								<ScheduleListCard
									time={scheduleItem.time}
									place={scheduleItem.name}
									address={scheduleItem.address}
									date={scheduleItem.date}
									price={scheduleItem.price}
								/>
								<Buttons buttonType="filled" text="Редактировать" margin="mt-12" />
								<Buttons buttonType="filled" text="Удалить" margin="mt-4" />
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="schedule" text="Назад" margin="mt-8" />
			</div>
		</main>
	)
}
