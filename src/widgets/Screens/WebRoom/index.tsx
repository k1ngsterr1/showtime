import React, { useState } from 'react'
import AbsoluteTab from '@entities/Tab_Components/AbsoluteTab'
import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { VideoCams } from '@shared/ui/VideoCams/index'
import { players } from '@shared/lib/content/webCamContent'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'

import styles from './styles.module.scss'

const VideoRoom = () => {
	const { cameraStates, toggleCamera } = useCameraStates(players)

	return (
		<>
			<div className={styles.videoRoom}>
				<div className={styles.webcam_grid}>
					{players.map((player) => (
						<div key={player.id}>
							{cameraStates[player.id] ? (
								<VideoCams name={player.name} number={player.number} />
							) : (
								<div className={styles.loader}>
									<MenuButton />
								</div>
							)}
						</div>
					))}
				</div>
				<AbsoluteTab toggleCamera={toggleCamera} />
			</div>
		</>
	)
}

export default VideoRoom
