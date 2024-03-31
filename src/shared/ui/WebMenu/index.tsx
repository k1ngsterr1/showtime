import React from 'react'

import styles from './styles.module.scss'

const ContextMenu = ({ onMenuClose }) => {
	return (
		<div className={styles.menu} onClick={onMenuClose}>
			<span className={styles.menu__items}>Дать БАН</span>
			<span className={styles.menu__items}>Выгнать</span>
			<span className={styles.menu__items}>Отключить Микрофон</span>
		</div>
	)
}

export default ContextMenu
