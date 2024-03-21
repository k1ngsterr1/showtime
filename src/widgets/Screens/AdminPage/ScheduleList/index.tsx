import { ScheduleCard } from '@entities/Card_Components/ScheduleCard'
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
					<div className={styles.services__content_card}>
						{schedule.map((schedule) => (
							<ScheduleCardList
								time={schedule.time}
								name={schedule.name}
								address={schedule.address}
							/>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="schedule" text="Назад" margin="mt-8" />
			</div>
		</main>
	)
}
