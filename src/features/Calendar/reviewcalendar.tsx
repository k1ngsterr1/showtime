import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import 'react-calendar/dist/Calendar.css'
import { Input } from '@shared/ui/Inputs/DefaultInput'

interface CalendarProps {
	marginClass?: string
	onDateChange: (date: string) => void
}

const CalendarComponent: React.FC<CalendarProps> = ({ marginClass, onDateChange }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [date, setDate] = useState(new Date())

	const toggleDate = () => setIsOpen(!isOpen)

	const handleDateChange = (newDate: Date) => {
		setDate(newDate)
		onDateChange(format(newDate, 'yyyy-MM-dd'))
	}

	return (
		<div className={marginClass} onClick={toggleDate}>
			<Input
				type="onlyread"
				name="date"
				inputType="calendar-small"
				placeholder="Выберите дату"
				value={format(date, 'dd MMM yyyy', { locale: ru })}
				required
			/>
			<div className="absolute w-[80%]">
				{isOpen && <Calendar onChange={handleDateChange} value={date} />}
			</div>
		</div>
	)
}

export default CalendarComponent
