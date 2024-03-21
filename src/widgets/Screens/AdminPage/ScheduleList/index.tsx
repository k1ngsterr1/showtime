import { ScheduleListCard } from '@entities/AdminEntities/ScheduleListCard/index'
import { schedule } from '@shared/lib/content/scheduleListContent'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'

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
						{schedule.map((schedule) => (
							<ScheduleListCard
								time={schedule.time}
								place={schedule.name}
								address={schedule.address}
								date={schedule.date}
							/>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="schedule" text="Назад" margin="mt-8" />
			</div>
		</main>
	)
}
