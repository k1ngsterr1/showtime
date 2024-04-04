import { useState } from 'react'
import { LobbiesBoard } from '@features/LobbiesBoard'
import { CreateGamePopup } from '@features/Popup_Components/CreateGamePopup/index'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'

import styles from './styles.module.scss'

export const Lobby = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)

	const handleClick = () => {
		setPopupOpen(true)
	}

	const handleClose = () => {
		setPopupOpen(false)
	}

	return (
		<div className={styles.lobby}>
			<div className="flex items-center justify-between">
				<h1 className={styles.lobby__heading}>Лобби</h1>

				<ReactButton text="Создать игру" buttonType="transparent" onClick={handleClick} />
			</div>
			{isPopupOpen && <CreateGamePopup onClick={handleClose} popupState />}
			<LobbiesBoard />
		</div>
	)
}
