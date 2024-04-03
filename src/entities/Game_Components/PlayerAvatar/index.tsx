import React from 'react'
import fedora from '@assets/logo/fedora.svg'
import { faFedora } from '@fortawesome/free-brands-svg-icons'
import type { PlayerItem } from '@entities/Tab_Components/YourGameTab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.scss'

export const PlayerAvatar: React.FC<PlayerItem> = ({ photo, name }) => {
	return (
		<div className={styles.player_avatar}>
			<img
				className={styles.player_avatar__image}
				src={photo.src === undefined ? fedora.src : photo.src}
				alt={name}
			/>
			<span className={styles.player_avatar__name}>{name}</span>
		</div>
	)
}
