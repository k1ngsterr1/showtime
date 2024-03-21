import React, { useState } from 'react'
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
	adress: string
}

export const ScheduleCard: React.FC<ICardProps> = ({ adress, name, time }) => {
	return (
		<>
			<div className={styles.card}>
				<CalendarComponent />
				{/* <Input placeholder={time} inputType="default-red-big" type="text" /> */}
				{/* <Input inputType="default-red-big" placeholder={name} type="text" />
				<TextArea placeholder={adress} margin="mt-8" />
				<a href="https://www.google.com/maps/@43.2570368,76.906496,12z?entry=ttu" target="_blank">
					<FontAwesomeIcon icon={faLocationDot} />
					Укажите место на карте
				</a> */}
			</div>
		</>
	)
}
