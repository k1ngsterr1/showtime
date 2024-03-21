import React from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import CalendarComponent from '@features/Calendar/index'
import styles from './styles.module.scss'
import '@shared/styles/global.scss'

interface ICardProps {
	time: string
	name: string
	address: string
	href: string
}

export const ScheduleCard: React.FC<ICardProps> = ({ address, name, time, href }) => {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.card__upper}>
					<span className={styles.card__upper__date}>
						<CalendarComponent />
					</span>
					<span className={styles.card__upper_time}>
						<Input type="text" inputType="default-red-small" placeholder={time} />
					</span>
				</div>
				<Input inputType="default-red-big" type="text" placeholder={name} margin="mt-12" />
				<TextArea textareaType="schedule" placeholder={address} margin="mt-8" />
				<div className=" mb-2 flex items-center overflow-hidden text-2xl">
					<FontAwesomeIcon icon={faLocationDot} className={styles.card__icon} />
					<a
						className={styles.card__link}
						href="https://www.google.com/maps/@43.2570368,76.906496,12z?entry=ttu"
						target="_blank"
					>
						Укажите место на карте
					</a>
				</div>
			</div>
		</>
	)
}
