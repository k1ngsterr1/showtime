import React, { useEffect, type SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Paragraph from '@shared/ui/ParagraphReact'
import { services } from '@shared/lib/content/orderContent'

import styles from '../CreateGamePopup/styles.module.scss'

interface IService {
	text: string
}

interface ICreateGamePopupProps {
	onClick: () => void
	popupState: boolean
	services: IService[]
}

export const DetailsPopup: React.FC<ICreateGamePopupProps> = ({
	onClick,
	popupState,
	services
}) => {
	const handleOverlayClick = (e: SyntheticEvent) => {
		if (e.target === e.currentTarget) {
			onClick()
		}
	}

	// useEffect(() => {
	// 	console.log(text)
	// })

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<section className={styles.popup} onClick={(e) => e.stopPropagation()}>
				<div className="flex w-full items-center justify-between">
					<h1 className={styles.popup__heading}>Подробнее</h1>
					<FontAwesomeIcon className={styles.popup__icon} icon={faClose} onClick={onClick} />
				</div>
				{services.map((service, index) => (
					<Paragraph key={index} margin="mt-12" paragraphType="red" text={service.text} />
				))}
			</section>
		</div>
	)
}
