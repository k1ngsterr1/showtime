import React from 'react'
import { ControlTabButton } from '@shared/ui/Buttons/ControlTabButton'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'

import styles from './styles.module.scss'

const ContextMenu = ({ xPos, yPos, onMenuClose, players }) => {
	const menuStyle = {
		position: 'absolute',
		left: `${xPos}px`,
		top: `${yPos}px`,
		zIndex: 1000000
	}

	const { toggleMicrophone } = useCameraStates(players)

	return (
		<div className={styles.menu} style={menuStyle} onClick={onMenuClose}>
			<span className={styles.menu__items}>Дать фол</span>
			<span className={styles.menu__items}>Выгнать</span>
			<span className={styles.menu__items}>
				<ControlTabButton text="Отключить Микрофон" onClick={() => toggleMicrophone(1)} />
			</span>
		</div>
	)
}

export default ContextMenu
