import { useState, useEffect } from 'react'
import { ControlPanel } from '../SelectedTab/index'
import { players } from '@shared/lib/content/webCamContent'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'
import { WebcamGrid } from '@features/WebcamGrid'
import { TimeTable } from '@shared/ui/TimeTable'
import { useGetPlayers } from '@shared/lib/hooks/useGetPlayers'
import { fetchPlayer } from '@shared/lib/hooks/useFetchPlayer'

import styles from './styles.module.scss'

// ! Ошибка когда я передаю сюда roomId!
const VideoRoom = () => {
	// const { players, error } = useGetPlayers(roomId)

	// console.log('players are here!', players, error)

	const { cameraStates, toggleCamera, toggleMicrophone } = useCameraStates(players)
	const [tabType, setTabType] = useState<string>('')

	useEffect(() => {
		const showman = players.find((player) => player.role === 'showman')
		console.log(players)
		const showmanIsActive = showman ? true : false
		console.log(`Showman active: ${showmanIsActive}`)
		setTabType(showmanIsActive ? 'showman' : 'user')
		console.log(tabType)
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
