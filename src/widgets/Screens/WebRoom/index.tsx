import { useState, useEffect } from 'react'
import { ControlPanel } from '../SelectedTab/index'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'
import { WebcamGrid } from '@features/WebcamGrid'
import { TimeTable } from '@shared/ui/TimeTable'
import { useGetPlayers } from '@shared/lib/hooks/useGetPlayers'
import { fetchPlayer } from '@shared/lib/hooks/useFetchPlayer'

import styles from './styles.module.scss'

export default function VideoRoom({ roomId }) {
	const { players, error } = useGetPlayers(roomId)
	const { cameraStates, toggleCamera, toggleMicrophone } = useCameraStates(players)
	const [tabType, setTabType] = useState<string>('')

	const [peerConnections, setPeerConnections] = useState({})
	const [localStream, setLocalStream] = useState(null)
	const [remoteStreams, setRemoteStreams] = useState({})

	useEffect(() => {
		console.log('roomID:', roomId)
		const showman = players.find((player) => player.role === 'showman')
		const showmanIsActive = showman ? true : false
		setTabType(showmanIsActive ? 'showman' : 'user')
	}, [cameraStates])

	return (
		<>
			<div className={styles.videoRoom}>
				<TimeTable time="Ночь" />
				{!players || players.length === 0 ? (
					<div>Loading</div>
				) : (
					<WebcamGrid players={players} cameraStates={cameraStates} />
				)}
				<ControlPanel
					players={players}
					tabType={tabType}
					toggleCamera={toggleCamera}
					toggleMicrophone={toggleMicrophone}
				/>
			</div>
		</>
	)
}
