import React, { useEffect, useState } from 'react'
import { VideoCams } from '@shared/ui/VideoCams'

import styles from '@widgets/Screens/WebRoom/styles.module.scss'

interface IWebcamGrid {
	players: any[]
	cameraStates: any
	onCameraContextMenu: any
	handleCameraClick: (cameraNumber: string | number) => void
}

export const WebcamGrid: React.FC<IWebcamGrid> = ({
	players,
	cameraStates,
	handleCameraClick,
	onCameraContextMenu
}) => {
	const [localStream, setLocalStream] = useState<MediaStream | null>(null)
	const [remoteStreams, setRemoteStreams] = useState<any>({})

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((stream) => setLocalStream(stream))
			.catch(console.error)
	})

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
							videoType={
								player.cameraPlayerNumber === 6 || player.role === 'showman' ? 'showman' : 'default'
							}
							onCameraClick={() => handleCameraClick(player.cameraPlayerNumber)}
							onContextMenu={(e: any) => onCameraContextMenu(e, player.cameraPlayerNumber)}
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
