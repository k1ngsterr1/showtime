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

	const handleContextMenu = (event) => {
		event.preventDefault()
		setContextMenu({
			isVisible: true,
			xPos: event.pageX,
			yPos: event.pageY
		})
	}
	const handleCloseMenu = () => {
		setContextMenu({ ...contextMenu, isVisible: false })
	}

	return (
		<>
			<div className={styles.videoRoom} onContextMenu={handleContextMenu}>
				<TimeTable time="Ночь" />
				<WebcamGrid players={players} cameraStates={cameraStates} />
				{contextMenu.isVisible && <ContextMenu onMenuClose={handleCloseMenu} />}
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
