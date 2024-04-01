import { useState, useEffect } from 'react'
import { ControlPanel } from '../SelectedTab/index'
import { players } from '@shared/lib/content/webCamContent'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'
import { WebcamGrid } from '@features/WebcamGrid'
import { TimeTable } from '@shared/ui/TimeTable'

import styles from './styles.module.scss'

const VideoRoom = () => {
	const { cameraStates, toggleCamera, toggleMicrophone } = useCameraStates(players)

	const [tabType, setTabType] = useState<string>('')

	useEffect(() => {
		console.log(`Showman active: ${cameraStates[6]}`)
		const showmanIsActive = cameraStates[6]
		setTabType(showmanIsActive ? 'showman' : 'default')
	}, [cameraStates])

	return (
		<>
			<div className={styles.videoRoom}>
				<TimeTable time="Ночь" />
				<WebcamGrid players={players} cameraStates={cameraStates} />
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
