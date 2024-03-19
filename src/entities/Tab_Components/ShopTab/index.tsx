import React from 'react'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IShopTabProps {
	name: string
	price: string
	paragraph: string
}

export const ShopTab: React.FC<IShopTabProps> = ({ name, price, paragraph }) => {
	return (
		<div className={styles.shop_tab}>
			<span className={styles.shop_tab__name}>{name}</span>
			<p className={styles.shop_tab__paragraph}>{paragraph}</p>
			<div className="flex items-center gap-4">
				<span className={styles.shop_tab__price}>{price} $$</span>
				<button className={styles.shop_tab__button}>Купить</button>
			</div>
		</div>
	)
}
