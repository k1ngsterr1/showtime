import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import 'react-calendar/dist/Calendar.css'
import { Input } from '@shared/ui/Inputs/DefaultInput'

interface CalendarComponentProps {
	onDateChange: (date: string) => void
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onDateChange }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [date, setDate] = useState<Date>(new Date())

	const toggleDate = () => setIsOpen(!isOpen)

	const handleDateChange = (newDate: Date) => {
		setDate(newDate)
		onDateChange(format(newDate, 'yyyy-MM-dd'))
	}

	return (
		<div onClick={toggleDate}>
			<Input
				type="text"
				inputType="default-red-small"
				placeholder="Выберите дату"
				value={format(date, 'dd MMM yyyy', { locale: ru })}
				readOnly
			/>
			<div className="absolute w-[80%]">
				{isOpen && <Calendar onChange={handleDateChange} value={date} />}
			</div>
		</div>
	)
}

export default CalendarComponent
