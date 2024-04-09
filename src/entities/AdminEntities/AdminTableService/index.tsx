import React, { useState } from 'react'
import { useEffect } from 'react'
import ButtonMore from '@shared/ui/Buttons/DefaultReactButton/index'
import { DetailsPopup } from '@features/Popup_Components/OrdersDetailsPopup/index'
import { useGetOrders } from '@shared/lib/hooks/Admin/Get/useGetOrders'
import { useDeleteOrder } from '@shared/lib/hooks/Admin/Delete/useDeleteOrder'

import styles from './styles.module.scss'

interface Service {
	id: string
	service: string
	price: string
	// product: string
	time: string
	text: string
}

export const AdminTableService: React.FC<Service> = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)
	const [selectedService, setSelectedService] = useState<Service | null>(null)
	const [orders, setOrders] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getOrders } = useGetOrders()
	const { deleteOrder } = useDeleteOrder()

	useEffect(() => {
		setIsLoading(true)
		getOrders()
			.then((data) => {
				if (Array.isArray(data)) {
					setOrders(data)
				} else {
					console.error('Data is not an array:', data)
					setOrders([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteOrder = (orderId: string) => {
		deleteOrder({ orderId: orderId })
			.then(() => {
				getOrders()
					.then((data) => {
						if (Array.isArray(data)) {
							setOrders(data)
						} else {
							console.error('Data is not an array:', data)
							setOrders([])
						}
					})
					.catch((error) => {
						console.error('Failed to fetch orders:', error)
					})
			})
			.catch((error) => {
				console.error('Failed to delete order:', error)
			})
	}

	const handleClick = (service: Service) => {
		setSelectedService(service)
		setPopupOpen(true)
	}

	const handleClose = () => {
		setSelectedService(null)
		setPopupOpen(false)
	}

	return (
		<table className={styles.table}>
			<thead className={styles.table__header}>
				<tr className={styles.table__header_row}>
					<th className={styles.table__header__item}>ID</th>
					<th className={styles.table__header__item}>Услуга</th>
					<th className={styles.table__header__item}>Цена</th>
					{/* <th className={styles.table__header__item}>Товар</th> */}
					<th className={styles.table__header__item}>Дата</th>
				</tr>
			</thead>
			<tbody className={styles.table__content}>
				{orders.map((order) => (
					<tr key={order.id} className={styles.table__content_row}>
						<td className={styles.table__content_item}>{order.id}</td>
						<td className={styles.table__content_item}>{order.service}</td>
						<td className={styles.table__content_item}>{order.price}</td>
						{/* <td className={styles.table__content_item}>{service.product}</td> */}
						<td className={styles.table__content_item}>
							{order.time}
							<div className={styles.table__content_buttons}>
								<ButtonMore
									buttonType="filled-small"
									text="Подробнее"
									onClick={() => handleClick(order)}
								/>
								<ButtonMore
									buttonType="filled-small"
									text="Удалить"
									onClick={() => handleDeleteOrder(order.id)}
								/>
							</div>
						</td>
					</tr>
				))}
			</tbody>
			{isPopupOpen && selectedService && (
				<DetailsPopup onClick={handleClose} popupState services={[selectedService]} />
			)}
		</table>
	)
}
