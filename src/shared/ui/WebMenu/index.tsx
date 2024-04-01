// ContextMenu.js
import React from 'react'
import styles from './styles.module.scss'

const ContextMenu = ({ xPos, yPos, onMenuClose }) => {
	// Calculate the position for the menu
	const menuStyle = {
		position: 'absolute',
		left: `${xPos}px`,
		top: `${yPos}px`,
		zIndex: 1000 // Make sure it's on top of other elements
	}

	return (
		<div className={styles.menu} style={menuStyle} onClick={onMenuClose}>
			<span className={styles.menu__items}>Дать БАН</span>
			<span className={styles.menu__items}>Выгнать</span>
			<span className={styles.menu__items}>Отключить Микрофон</span>
		</div>
	)
}

export default ContextMenu
