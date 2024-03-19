import React, { useState } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

interface CalendarComponentProps {
	value: Date
	onChange: (date: Date) => void
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ value, onChange }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleDate = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="" onClick={toggleDate}>
			<Input
				type="onlyread"
				inputType="default-red"
				placeholder="Выберите дату"
				margin="mt-8"
				value={format(value, 'dd MMM yyyy', { locale: ru })}
			/>
			<div className="absolute w-[80%]">
				{isOpen && <Calendar onChange={onChange} value={value} />}
			</div>
		</div>
	)
}

export default CalendarComponent
