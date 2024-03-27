import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { TextArea } from '@shared/ui/TexrArea/index'

import man_01 from '@assets/Main/man_01.png'
import man_02 from '@assets/Main/man_02.png'
import man_03 from '@assets/Main/man_03.png'

interface Props {
	number: string
	cardType?: string | 'white'
	imageIndex: number
}

const images: any[] = [man_01, man_02, man_03]

export const ServiceCard: React.FC<Props> = ({ number, cardType, imageIndex }) => {
	const serviceClass = `${styles.service_card} ${cardType ? styles[cardType] : ''}`

	return (
		<div className={serviceClass}>
			<div className="space-between flex flex-col p-8">
				<div className="flex w-full items-center justify-between">
					<img src={images[imageIndex].src} alt="Image" className={styles.service_card__icon} />
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
