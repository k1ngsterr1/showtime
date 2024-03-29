import { useState, useEffect } from 'react'

type Player = {
	cameraPlayerNumber: string | number
}

const initializeCameraStates = (players: Player[]) => {
	return players.reduce(
		(states, player) => {
			states[player.cameraPlayerNumber] = false
			return states
		},
		{} as Record<string | number, boolean>
	)
}
const initializeMicrophoneStates = (players: Player[]) => {
	return players.reduce(
		(states, player) => {
			states[player.cameraPlayerNumber] = true
			return states
		},
		{} as Record<string | number, boolean>
	)
}

export const useCameraStates = (players: Player[]) => {
	const [cameraStates, setCameraStates] = useState<Record<string | number, boolean>>(() =>
		initializeCameraStates(players)
	)
	const [microphoneStates, setMicrophoneStates] = useState<Record<string | number, boolean>>(() =>
		initializeMicrophoneStates(players)
	)

	const toggleCamera = (playerNumber: string | number) => {
		setCameraStates((prevStates) => ({
			...prevStates,
			[playerNumber]: !prevStates[playerNumber]
		}))
	}

	const toggleMicrophone = (playerNumber: string | number) => {
		setMicrophoneStates((prevStates) => ({
			...prevStates,
			[playerNumber]: !prevStates[playerNumber]
		}))
	}

	useEffect(() => {
		setCameraStates(initializeCameraStates(players))
		setMicrophoneStates(initializeMicrophoneStates(players))
	}, [players])

	return { cameraStates, toggleCamera, microphoneStates, toggleMicrophone }
}
