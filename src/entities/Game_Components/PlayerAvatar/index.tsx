import React from 'react'
import type { PlayerItem } from '@features/Tab_Components/YourGameTab'

import styles from './styles.module.scss'

export const PlayerAvatar: React.FC<PlayerItem> = ({ photo, name }) => {
	return (
		<div className={styles.player_avatar}>
			<img className={styles.player_avatar__image} src={photo.src} alt={name} />
			<span className={styles.player_avatar__name}>{name}</span>
		</div>
	)
}
