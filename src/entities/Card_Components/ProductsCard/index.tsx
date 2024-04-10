import React from 'react'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton/index'

import styles from './styles.module.scss'

interface Props {
	url: string
	name: string
	description: string
	price: string
}
export const ProductCard: React.FC<Props> = ({ url, name, description, price }) => {
	return (
		<div className={styles.card}>
			<img src={url} alt="product" className={styles.card__image} />
			<span className={styles.card__heading}>{name}</span>
			<span className={styles.card__paragraph}>{description}</span>
			<span className="mt-4 font-killbill text-2xl">{price}</span>
			<ReactButton margin="mt-4" text="Купить" buttonType="transparent" />
		</div>
	)
}
