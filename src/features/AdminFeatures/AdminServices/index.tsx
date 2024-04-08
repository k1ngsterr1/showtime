import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { TextArea } from '@shared/ui/TexrArea' // Make sure this path is corrected
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddService } from '@shared/lib/hooks/Admin/Add/useAddService'

interface Props {
	number: string
	cardType?: string | 'white'
}

export const ServiceCard: React.FC<Props> = ({ number, cardType = 'white' }) => {
	const [serviceName, setServiceName] = useState('')
	const [serviceDescription, setServiceDescription] = useState('')
	const { addService } = useAddService()
	const serviceClass = `${styles.service_card} ${styles[cardType]}`

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		const formData = new FormData()
		formData.append('service', serviceName)
		formData.append('text', serviceDescription)

		try {
			await addService(formData)
		} catch (error) {
			console.error('Error adding service:', error)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
			<div className={serviceClass}>
				<div className="space-between flex flex-col p-8">
					<div className="flex w-full items-center justify-between">
						<span className={styles.service_card__number}>{number}</span>
					</div>
					<Input
						inputType="services-red-big"
						type="text"
						placeholder="Название услуги"
						name="service"
						margin="mt-8"
						value={serviceName}
						onChange={(e) => setServiceName(e.target.value)}
					/>
					<TextArea
						name="text"
						textareaType="services"
						placeholder="Текст"
						margin="mt-8"
						value={serviceDescription}
						onChange={(e) => setServiceDescription(e.target.value)}
					/>
				</div>
			</div>
			<div className="mt-8 flex flex-row gap-10">
				<AddButton buttonType="filled" text="Добавить" margin="mt-4" type="submit" />
				<LinkButton buttonType="filled" href="services-list" text="Смотреть все" margin="mt-4" />
			</div>
		</form>
	)
}
