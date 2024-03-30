import React, { useState } from 'react'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.scss'

export const KebabMenu = () => {
	const [isKebabOpen, setKebabOpen] = useState(false)

	const handleOpenMenu = () => {
		setKebabOpen(!isKebabOpen)
	}

	return (
		<>
			<button className={styles.button_kebab} onClick={handleOpenMenu}>
				<FontAwesomeIcon icon={faEllipsisVertical} className={styles.kebab_menu} size="xl" />
				{isKebabOpen && (
					<div className={styles.kebab_opened}>
						<Button buttonType="kebab" text="Изменить" />
						<Button buttonType="kebab" text="Удалить" />
					</div>
				)}
			</button>
		</>
	)
}
