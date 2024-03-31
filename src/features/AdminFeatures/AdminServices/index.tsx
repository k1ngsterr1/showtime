import React from 'react'
import styles from './styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { TextArea } from '@shared/ui/TexrArea' // Ensure correct import path
import { useChangePicture } from '@shared/lib/hooks/useChangePicture'

interface Props {
	number: string
	cardType?: string | 'white'
}

export const ServiceCard: React.FC<Props> = ({ number, cardType }) => {
	const serviceClass = `${styles.service_card} ${cardType ? styles[cardType] : ''}`
	// const { selectedImage } = useChangePicture()

	return (
		<div className={serviceClass}>
			<div className="space-between flex flex-col p-8">
				<div className="flex w-full items-center justify-between">
					{/* Now selectedImage is a string URL */}
					{/* <img src={selectedImage} alt="Service Icon" className={styles.service_card__icon} /> */}
					<span className={styles.service_card__number}>{number}</span>
				</div>
				<Input
					inputType="services-red-big"
					type="text"
					placeholder="Название услуги"
					margin="mt-8"
				/>
				<TextArea textareaType="services" placeholder="Текст" margin="mt-8" />
			</div>
		</div>
	)
}
