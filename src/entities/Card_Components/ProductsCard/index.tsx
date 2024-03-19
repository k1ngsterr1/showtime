import React from 'react'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton/index'

import styles from './styles.module.scss'

interface Props {
	photo: ImageMetadata
	heading: string
	paragraph: string
	price: string
}
export const ProductCard: React.FC<Props> = ({ photo, heading, paragraph, price }) => {
	return (
		<div className={styles.card}>
			<img src={photo.src} alt="" />
			<span className={styles.card__heading}>{heading}</span>
			<span className={styles.card__paragraph}>{paragraph}</span>
			<span className="mt-4 font-killbill text-2xl">{price}</span>
			<ReactButton margin="mt-4" text="Купить" buttonType="transparent" />
		</div>
	)
}
