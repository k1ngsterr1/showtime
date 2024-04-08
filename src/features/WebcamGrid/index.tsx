import React, { useEffect, useState } from 'react'
import {
	setupWebRTC,
	initializeSocketListeners,
	tearDownSocketListeners
} from '@shared/lib/hooks/useWebRTC'
import { VideoCams } from '@shared/ui/VideoCams'
import { socket } from '@shared/lib/socket/socketService'

import styles from '@widgets/Screens/WebRoom/styles.module.scss'

interface IWebcamGrid {
	players: any[]
	cameraStates: any
	userId: any
	roomId: any
	onCameraContextMenu: any
	handleCameraClick: (cameraNumber: string | number) => void
}

export const WebcamGrid: React.FC<IWebcamGrid> = ({
	players,
	cameraStates,
	handleCameraClick,
	roomId,
	userId,
	onCameraContextMenu
}) => {
	const [localStream, setLocalStream] = useState<MediaStream | null>(null)
	const [remoteStreams, setRemoteStreams] = useState<any>({})
	const [connectedPlayers, setConnectedPlayers] = useState<any[]>(() => {
		const savedConnectedPlayers = localStorage.getItem('connectedPlayers')
		return savedConnectedPlayers ? JSON.parse(savedConnectedPlayers) : []
	})

	useEffect(() => {
		console.log('use effect is working...')

		console.log('remoteStreams:', remoteStreams)

		if (!socket) {
			console.log('there is no socket :(')
			return
		}

		console.log('Emitting playerJoining event...')
		socket.emit('playerJoining', { roomId, userId })

		socket.on('playerJoined', (data: any) => {
			const { player, connectedPlayersByRoom } = data
			console.log('there is my data from useEffect?', data)
			console.log(player, connectedPlayersByRoom)
			localStorage.setItem('connectedPlayers', JSON.stringify(data.connectedPlayers))
			setConnectedPlayers(data.connectedPlayers)
			console.log('there is my data from useEffect?', data)
		})

		return () => {
			console.log('Cleaning up listener for playerJoined event...')
			socket.off('playerJoined')
		}
	}, [socket])

	console.log('connectedPlayers:', JSON.parse(localStorage.getItem('connectedPlayers')))

	useEffect(() => {
		console.log('use effect is working')
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((stream) => {
				setLocalStream(stream)
				setupWebRTC(connectedPlayers, setRemoteStreams, stream)
				console.log('remoteStreams:', remoteStreams)
				initializeSocketListeners()
			})
			.catch(console.error)

		return () => {
			tearDownSocketListeners()
			if (localStream) {
				console.log('local stream is working:', localStream)
				localStream.getTracks().forEach((track) => track.stop())
			}
		}
	}, [connectedPlayers])

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
							stream={remoteStreams[player.id]}
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
			{/* {localStream && (
				<VideoCams
					cameraPlayerNumber="local"
					number="local"
					videoType="default"
					stream={localStream}
				/>
			)} */}
		</div>
	)
}
