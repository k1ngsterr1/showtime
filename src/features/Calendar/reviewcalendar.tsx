import React, { useState } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import 'react-calendar/dist/Calendar.css'

interface CalendarProps {
	marginClass?: string
}

const CalendarComponent: React.FC<CalendarProps> = ({ marginClass }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [date, setDate] = useState<string | number | Date>(new Date())

	const toggleDate = () => {
		setIsOpen(!isOpen)
	}

	const handleDateChange = (date: Date) => {
		setDate(date)
	}

	return (
		<div className={marginClass} onClick={toggleDate}>
			<Input
				type="onlyread"
				inputType="calendar-small"
				placeholder="Выберите дату"
				value={format(date, 'dd MMM yyyy', { locale: ru })}
			/>
			<div className="absolute w-[80%]">
				{isOpen && <Calendar onChange={handleDateChange} value={date} />}
			</div>
		</div>
	)
}

export default CalendarComponent
