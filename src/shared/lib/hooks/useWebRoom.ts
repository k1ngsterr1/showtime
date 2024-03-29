import { useState, useEffect } from 'react'

type Player = {
	id: string | number
}

const initializeCameraStates = (players: Player[]) => {
	return players.reduce(
		(states, player) => {
			states[player.id] = false
			return states
		},
		{} as Record<string | number, boolean>
	)
}

export const useCameraStates = (players: Player[]) => {
	const [cameraStates, setCameraStates] = useState<Record<string | number, boolean>>(() =>
		initializeCameraStates(players)
	)

	const toggleCamera = (playerId: string | number) => {
		setCameraStates((prevStates) => {
			const newState = {
				...prevStates,
				[playerId]: !prevStates[playerId]
			}
			console.log(`Camera state for player ${playerId}: ${newState[playerId]}`)
			return newState
		})
	}

	useEffect(() => {
		console.log('Initializing camera states for players')
		setCameraStates(initializeCameraStates(players))
	}, [players])

	return { cameraStates, toggleCamera }
}
