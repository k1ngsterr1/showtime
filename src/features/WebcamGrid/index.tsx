import React from 'react'
import { VideoCams } from '@shared/ui/VideoCams'

import styles from '@widgets/Screens/WebRoom/styles.module.scss'

interface IWebcamGrid {
	players: any[]
	cameraStates: any
	handleCameraClick: () => void
}

export const WebcamGrid: React.FC<IWebcamGrid> = ({ players, cameraStates, handleCameraClick }) => {
	return (
		<div className={styles.webcam_grid}>
			{players.map((player) => (
				<div
					key={player.id}
					className={`${styles.webcam} ${player.cameraPlayerNumber === 6 ? styles.showman : ''}`}
				>
					{cameraStates[player.cameraPlayerNumber] ? (
						<VideoCams
							cameraPlayerNumber={player.cameraPlayerNumber}
							number={player.cameraPlayerNumber}
							videoType={player.cameraPlayerNumber === 6 ? 'showman' : 'default'}
							onCameraClick={handleCameraClick}
						/>
					) : (
						<div className={styles.loader}>
							{player.cameraPlayerNumber === 6 ? (
								<div className={styles.loader__showman}>Loading showman...</div>
							) : (
								<div>Loading...</div>
							)}
						</div>
					)}
				</div>
			))}
		</div>
	)
}
