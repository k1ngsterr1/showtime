import { useState } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const CalendarComponent = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [date, setDate] = useState<string | number | Date>(new Date())

	const toggleDate = () => {
		setIsOpen(!isOpen)
	}

	const handleDateChange = (date: Date) => {
		setDate(date)
	}

	return (
		<div className="" onClick={toggleDate}>
			<Input
				type="onlyread"
				inputType="default-red"
				placeholder="Выберите дату"
				margin="mt-8"
				value={format(date, 'dd MMM yyyy', { locale: ru })}
			/>
			<div className="absolute w-[80%]">
				{isOpen && <Calendar onChange={handleDateChange} value={date} />}
			</div>
		</div>
	)
}

export default CalendarComponent
