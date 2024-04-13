import React, { useState } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { Selector } from '@shared/ui/Selector'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useAddOrder } from '@shared/lib/hooks/Admin/Add/useAddOrder'

import styles from '../ContactForm/styles.module.scss'
import { TextArea } from '@shared/ui/TexrArea'

interface IFormContentProps {
	gameType: string
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export const FormContent: React.FC<IFormContentProps> = ({ gameType }) => {
	const [selectedRole, setSelectedRole] = useState<string>('')
	const [value, setValue] = useState(new Date())
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { addOrder } = useAddOrder()
	const [name, setName] = useState<string>('')
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (name && phoneNumber && selectedRole && description) {
			const formData = new FormData()
			formData.append('name', name)
			formData.append('phoneNumber', phoneNumber)
			formData.append('service', selectedRole)
			formData.append('description', description)

			for (let [key, value] of formData.entries()) {
				console.log(`${key}: ${value}`)
			}

			try {
				await addOrder(formData)
				console.log('Order submitted successfully.')
			} catch (error) {
				console.error('Failed to update verification status:', error)
			}
		} else {
			console.log('All fields are required')
		}
	}

	const toggleDate = () => {
		setIsOpen(!isOpen)
	}

	const onChange = (newValue: React.SetStateAction<Date>) => {
		setValue(newValue)
		setIsOpen(false)
	}

	const renderContent = () => {
		switch (gameType) {
			case 'production':
				return (
					<div>
						<form className={styles.form_screen_mob__form} onSubmit={handleSubmit}>
							<div className="mt-12 flex flex-col items-start">
								<Input
									type="text"
									inputType="default-red"
									placeholder="Ваше имя"
									name="name"
									onChange={(e) => setName(e.target.value)}
								/>
								<Input
									type="phone"
									inputType="default-red"
									placeholder="Номер телефона"
									margin="mt-8"
									name="phoneNumber"
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
								<Selector
									placeholder="Выберите услугу"
									selectedValue={selectedRole}
									onChange={setSelectedRole}
									items={['Вечерняя Игра', 'Корпоративная Игра', 'Тематическая Встреча', 'Другое']}
								/>

								<TextArea
									placeholder="Описание"
									textareaType="form"
									margin="mt-8"
									name="description"
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
							<ReactButton text="Отправить" buttonType="filled" margin="mt-8 ml-6" type="submit" />
						</form>
					</div>
				)
			case 'delivery':
				return (
					<div>
						<form className={styles.form_screen_mob__form}>
							<div className="mt-12 flex flex-col items-start">
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
								<Selector
									placeholder="Выберите товар"
									selectedValue={selectedRole}
									onChange={setSelectedRole}
									items={['Шляпа Мафиози', 'Набор карт']}
								/>
								<ReactButton text="Отправить" buttonType="filled" margin="mt-8 ml-6" />
							</div>
						</form>
					</div>
				)
			case 'book':
				return (
					<div>
						<form className={styles.form_screen_mob__form}>
							<div className="mt-12 flex flex-col items-start">
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
								<ReactButton text="Отправить" buttonType="filled" margin="mt-8 ml-6" />
							</div>
						</form>
					</div>
				)
			case 'question':
				return (
					<div>
						<form className={styles.form_screen_mob__form}>
							<div className="mt-12 flex flex-col items-start">
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
									placeholder="Ваш вопрос"
									margin="mt-8"
								/>
								<ReactButton text="Отправить" buttonType="filled" margin="mt-8 ml-6" />
							</div>
						</form>
					</div>
				)
			default:
				return (
					<div>
						<form className={styles.form_screen_mob__form}>
							<div className="mt-12 flex flex-col items-start">
								<Input type="text" inputType="default-red" placeholder="Ваше имя" />
								<Input
									type="phone"
									inputType="default-red"
									placeholder="Номер телефона"
									margin="mt-8"
								/>
								<Input
									type="phone"
									inputType="default-red"
									placeholder="Укажите имя ведущего"
									margin="mt-8"
								/>
								<ReactButton text="Отправить" buttonType="filled" margin="mt-8 ml-6" />
							</div>
						</form>
					</div>
				)
		}
	}
	return <>{renderContent()}</>
}
