import React, { useState } from 'react'
import AbsoluteTab from '@entities/Tab_Components/AbsoluteTab'
import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { VideoCams } from '@shared/ui/VideoCams/index'
import { useWebRoom } from '@shared/lib/hooks/useWebRoom'
import { players } from '@shared/lib/content/webCamContent'

import styles from './styles.module.scss'
import { number } from 'astro/zod'

const VideoRoom = () => {

	const { showCamera,
		toggleCamera,
		isCamera2Active,
		isCamera3Active,
		isCamera4Active,
		isCamera5Active,
		isCamera6Active,
		isCamera7Active,
		isCamera8Active,
		isCamera9Active,
		isCamera10Active,
		isCamera11Active } = useWebRoom();

	< div className="webcam-grid" >
		{
			players.map((player, index) => {
				// Add a special class for every 4th and 8th element
				const specialClass = index === 3 || index === 7 ? 'large' : '';
				return (
					<div key={player.id} className={`webcam-item ${specialClass}`}>
						<div className={styles.grid}>
							{showCamera ? (
								<VideoCams number={players} name="Artem Andreev" />
							) : (
								<div className={styles.loader}>
									<MenuButton />
								</div>
							)}
						</div>
						<AbsoluteTab toggleCamera={toggleCamera} />
					</div>
				);
			})
		}
	</div >
}

export default VideoRoom
