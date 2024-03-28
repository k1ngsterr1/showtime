import React, { type SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { AdminTeamAdding } from '@features/AdminFeatures/AdminTeamAdding/index'

import styles from '../CreateGamePopup/styles.module.scss'

interface ICreateGamePopupProps {
	onClick: () => void
	popupState: boolean
	text: string
}

export const AddPopup: React.FC<ICreateGamePopupProps> = ({ onClick, popupState }) => {
	const handleOverlayClick = (e: SyntheticEvent) => {
		if (e.target === e.currentTarget) {
			onClick()
		}
	}

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<section className={styles.popup} onClick={(e) => e.stopPropagation()}>
				<div className="flex w-full items-center justify-between">
					<h1 className={styles.popup__heading}>Добавление сотрдуника</h1>
					<FontAwesomeIcon className={styles.popup__icon} icon={faClose} onClick={onClick} />
				</div>
				<AdminTeamAdding
					name="Email сотрудника"
					position="Позиция"
					userTabType="users"
					userPhotoType="users"
					userTextType="users"
				/>
			</section>
		</div>
	)
}
