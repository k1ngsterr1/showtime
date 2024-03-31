import React, { type SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import LinkReactButton from '@shared/ui/Buttons/LinkReactButton'
import Paragraph from '@shared/ui/ParagraphReact'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { useState } from 'react'
import { Selector } from '@shared/ui/Selector'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import styles from './styles.module.scss'

interface ICreateGamePopupProps {
	onClick: () => void
	popupState: boolean
	text: string
}

export const SchedulePopup: React.FC<ICreateGamePopupProps> = ({ onClick, popupState }) => {
	const handleOverlayClick = (e: SyntheticEvent) => {
		if (e.target === e.currentTarget) {
			onClick()
		}
	}
	const [selectedRole, setSelectedRole] = useState<string>('')
	const [value, setValue] = useState(new Date())
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const onChange = (newValue: React.SetStateAction<Date>) => {
		setValue(newValue)
		setIsOpen(false)
	}

	const toggleDate = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<section className={styles.popup} onClick={(e) => e.stopPropagation()}>
				<div className="flex w-full items-center justify-end">
					{/* <h1 className={styles.popup__heading}>Аутнетификация</h1> */}
					<FontAwesomeIcon className={styles.popup__icon} icon={faClose} onClick={onClick} />
				</div>
				<div className="mt-8 flex flex-col items-center justify-center">
					<div>
						<form className={styles.form_screen_mob__form}>
							<div className="mt-12 flex flex-col items-center">
								<Input type="text" inputType="default-red" placeholder="Введите ваше имя" />
								<Input
									type="email"
									inputType="default-red"
									placeholder="Ваша почта"
									margin="mt-8"
								/>
								<Input
									type="phone"
									inputType="default-red"
									placeholder="Номер телефона"
									margin="mt-8"
								/>
								<ReactButton text="Отправить" buttonType="filled" margin="mt-8" />
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}
