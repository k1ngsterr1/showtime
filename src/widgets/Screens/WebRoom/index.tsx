import { useState, useEffect } from 'react'
import { ControlPanel } from '../SelectedTab/index'
import { players } from '@shared/lib/content/webCamContent'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'
import { WebcamGrid } from '@features/WebcamGrid'
import { TimeTable } from '@shared/ui/TimeTable'

import styles from './styles.module.scss'
import ContextMenu from '@shared/ui/WebMenu/index'

const VideoRoom = () => {
	const { cameraStates, toggleCamera, toggleMicrophone } = useCameraStates(players)
	const [contextMenu, setContextMenu] = useState({
		isVisible: false,
		xPos: 0,
		yPos: 0
	})

	const [tabType, setTabType] = useState<string>('')

	useEffect(() => {
		console.log(`Showman active: ${cameraStates[6]}`)
		const showmanIsActive = cameraStates[6]
		setTabType(showmanIsActive ? 'showman' : 'default')
	}, [cameraStates])

	const handleCameraContextMenu = (event, cameraPlayerNumber) => {
		event.preventDefault()
		const bounds = event.target.getBoundingClientRect()

		setContextMenu({
			isVisible: true,
			xPos: event.clientX - bounds.left,
			yPos: event.clientY - bounds.top,
			cameraPlayerNumber
		})
	}

	const handleCloseMenu = () => {
		setContextMenu({ ...contextMenu, isVisible: false })
	}

	return (
		<>
			<div className={styles.videoRoom} onContextMenu={handleCameraContextMenu}>
				<TimeTable time="Ночь" />
				<WebcamGrid players={players} cameraStates={cameraStates} />
				{contextMenu.isVisible && (
					<ContextMenu
						xPos={contextMenu.xPos}
						yPos={contextMenu.yPos}
						onMenuClose={handleCloseMenu}
						cameraPlayerNumber={contextMenu.cameraPlayerNumber}
					/>
				)}
				<ControslPanel
					tabType={tabType}
					toggleCamera={toggleCamera}
					toggleMicrophone={toggleMicrophone}
				/>
			</div>
		</>
	)
}

export default VideoRoom
