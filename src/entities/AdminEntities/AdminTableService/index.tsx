import React from 'react'
import { useState } from 'react'
import ButtonMore from '@shared/ui/Buttons/DefaultReactButton/index'
import { DetailsPopup } from '@features/Popup_Components/OrdersDetailsPopup/index'

import styles from './styles.module.scss'

interface Service {
	id: string
	service: string
	price: string
	product: string
	date: string
	text: string
}

interface Props {
	services: Service[]
}

export const AdminTableService: React.FC<Props> = ({ services }) => {
	const [isPopupOpen, setPopupOpen] = useState(false)

	const handleClick = () => {
		setPopupOpen(true)
	}

	const handleClose = () => {
		setPopupOpen(false)
	}

	return (
		<table className={styles.table}>
			<thead className={styles.table__header}>
				<tr className={styles.table__header_row}>
					<th className={styles.table__header__item}>ID</th>
					<th className={styles.table__header__item}>Услуга</th>
					<th className={styles.table__header__item}>Цена</th>
					<th className={styles.table__header__item}>Товар</th>
					<th className={styles.table__header__item}>Дата</th>
				</tr>
			</thead>
			<tbody className={styles.table__content}>
				{services.map((service, index) => (
					<tr key={index} className={styles.table__content_row}>
						<td className={styles.table__content_item}>{service.id}</td>
						<td className={styles.table__content_item}>{service.service}</td>
						<td className={styles.table__content_item}>{service.price}</td>
						<td className={styles.table__content_item}>{service.product}</td>
						<td className={styles.table__content_item}>
							{service.date}
							<div className={styles.table__content_buttons}>
								<ButtonMore buttonType="filled-small" text="Подробнее" onClick={handleClick} />
								{isPopupOpen && (
									<DetailsPopup onClick={handleClose} text={service.text} popupState />
								)}
								<ButtonMore buttonType="filled-small" text="Удалить" />
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
