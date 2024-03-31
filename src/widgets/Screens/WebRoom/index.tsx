import React, { useState, useEffect } from 'react'
import { ControlPanel } from '../SelectedTab/index'
import { VideoCams } from '@shared/ui/VideoCams/index'
import { players } from '@shared/lib/content/webCamContent'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'

import styles from './styles.module.scss'

const VideoRoom = () => {
	const { cameraStates, toggleCamera, toggleMicrophone, menuInfo, setMenuInfo } =
		useCameraStates(players)
	const [tabType, setTabType] = useState<string>('')

	useEffect(() => {
		console.log(`Showman active: ${cameraStates[6]}`)
		const showmanIsActive = cameraStates[6]
		if (showmanIsActive) {
			setTabType('showman')
		} else {
			setTabType('default')
		}
	}, [cameraStates])

	const handleCameraClick = (cameraNumber: any) => {
		console.log(`Camera ${cameraNumber} clicked`)
		if (cameraStates[6]) {
			setMenuInfo({ isVisible: true, cameraNumber })
		}
	}

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
									onCameraClick={handleCameraClick}
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
				{menuInfo.isVisible && <div className={styles.menu}>agioparegoiaerpoig</div>}
				<ControlPanel
					tabType={tabType}
					toggleCamera={toggleCamera}
					toggleMicrophone={toggleMicrophone}
				/>
			</div>
		</>
	)
}

export default VideoRoom
