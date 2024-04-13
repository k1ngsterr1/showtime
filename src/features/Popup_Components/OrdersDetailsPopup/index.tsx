import React, { useEffect, type SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Paragraph from '@shared/ui/ParagraphReact'

import styles from '../CreateGamePopup/styles.module.scss'

interface IService {
	description: string
	phoneNumber: string
	name: string
}

interface ICreateGamePopupProps {
	onClick: () => void
	popupState: boolean
	orders: IService[]
}

export const DetailsPopup: React.FC<ICreateGamePopupProps> = ({ onClick, popupState, orders }) => {
	const handleOverlayClick = (e: SyntheticEvent) => {
		if (e.target === e.currentTarget) {
			onClick()
		}
	}

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<section className={styles.popup} onClick={(e) => e.stopPropagation()}>
				<div className="flex w-full items-center justify-between">
					<h1 className={styles.popup__heading}>Подробнее</h1>
					<FontAwesomeIcon className={styles.popup__icon} icon={faClose} onClick={onClick} />
				</div>
				{orders.map((order, index) => (
					<div key={index}>
						<span className={styles.span}>{order.name}</span>
						<span className={styles.span}>{order.phoneNumber}</span>
						<Paragraph margin="mt-12" paragraphType="red" text={order.description} />
					</div>
				))}
			</section>
		</div>
	)
}
