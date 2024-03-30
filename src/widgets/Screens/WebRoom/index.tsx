import React, { useState } from 'react'
import AbsoluteTab from '@entities/Tab_Components/AbsoluteTab'
import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { VideoCams } from '@shared/ui/VideoCams/index'
import { players } from '@shared/lib/content/webCamContent'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'

import styles from './styles.module.scss'

const VideoRoom = () => {
	const { cameraStates, toggleCamera, microphoneStates, toggleMicrophone } =
		useCameraStates(players)

	return (
		<>
			<div className={styles.videoRoom}>
				<div className={styles.webcam_grid}>
					{players.map((player, index) => (
						<div
							key={player.id}
							className={`${styles.webcam} ${player.cameraPlayerNumber === 6 ? styles.showman : ''}`}
						>
							{cameraStates[player.cameraPlayerNumber] ? (
								<VideoCams
									cameraPlayerNumber={player.cameraPlayerNumber}
									number={player.number}
									isShowman={player.cameraPlayerNumber === 6}
									videoType={player.cameraPlayerNumber === 6 ? 'showman' : 'default'}
								/>
							) : (
								<div className={styles.loader}>
									{player.cameraPlayerNumber === 6 ? (
										<div className={styles.loader__showman}>Loading kakashki...</div>
									) : (
										<div>Loading...</div>
									)}
								</div>
							)}
						</div>
					))}
				</div>

				<AbsoluteTab toggleCamera={toggleCamera} toggleMicrophone={toggleMicrophone} />
			</div>
		</>
	)
}

export default VideoRoom
