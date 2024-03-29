import React, { type SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { LinkButton } from '@shared/ui/LinkButton'

import styles from '../CreateGamePopup/styles.module.scss'

interface ICreateGamePopupProps {
	onClick: () => void
	popupState: boolean
	text: string
}

export const VacanciePopup: React.FC<ICreateGamePopupProps> = ({ onClick, popupState }) => {
	const handleOverlayClick = (e: SyntheticEvent) => {
		if (e.target === e.currentTarget) {
			onClick()
		}
	}

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<section className={styles.popup} onClick={(e) => e.stopPropagation()}>
				<div className="flex w-full items-center justify-around">
					<h1 className={styles.popup__heading}>Спасибо! Ваша вакансия была отправлена</h1>
					<FontAwesomeIcon className={styles.popup__icon} icon={faClose} onClick={onClick} />
					<LinkButton buttonType="filled" href="index" text="На главную" />
				</div>
			</section>
		</div>
	)
}
