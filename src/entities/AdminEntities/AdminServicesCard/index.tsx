import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import React, { useState } from 'react'
import { TextArea } from '@shared/ui/TexrArea'
import AddButton from '@shared/ui/AddButton'
import Linkbutton from '@shared/ui/Buttons/LinkReactButton/index'
import { LinkButton } from '@shared/ui/LinkButton'
import { useAddVacancy } from '@shared/lib/hooks/Admin/Add/useAddVacancy'
import { useEffect } from 'react'

import styles from './styles.module.scss'
import '@shared/styles/global.scss'

interface ICardProps {
	number: string
	href: string
	placeholder: string
}
//! null in output

export const ServiceCard: React.FC<ICardProps> = ({ number, href, placeholder }) => {
	const { addVacancy } = useAddVacancy()
	const [position, setPosition] = useState<string>()
	const [text, setText] = useState<string>()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (position && text) {
			const formData = new FormData()
			formData.append('position', position)
			formData.append('text', text)
			console.log(formData, position, text)
			await addVacancy(formData)
		} else {
			console.log('All fields are required')
		}
	}

	// useEffect(() => console.log(FormData), [text, position])

	return (
		<>
			<form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
				<div className={styles.card}>
					<h1 className={styles.card__heading}>{number}</h1>
					<Input
						inputType="default-red-big"
						placeholder={placeholder}
						type="text"
						name="position"
						value={position}
						onChange={(e) => setPosition(e.target.value)}
					/>
					<TextArea
						placeholder="Текст"
						textareaType="vacancie"
						margin="mt-8"
						name="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<LinkButton
						buttonType="filled"
						text="Откликнуться"
						margin="mt-4"
						href="vacancie-form"
						to="osvo"
					/>
				</div>
				<AddButton buttonType="filled" text="Добавить" margin="mt-12" type="submit" />
				<Linkbutton buttonType="filled" href={href} text="Смотреть все" margin="mt-6" />
			</form>
		</>
	)
}
