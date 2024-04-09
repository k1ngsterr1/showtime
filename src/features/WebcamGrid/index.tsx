import React, { useEffect, useState, useRef } from 'react'
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

		if (!socket) {
			console.log('there is no socket :(')
			return
		}

		socket.emit('playerJoining', { roomId, userId })

		socket.on('playerJoined', (data: any) => {
			const { player, connectedPlayersByRoom } = data
			console.log(player, connectedPlayersByRoom)
			localStorage.setItem('connectedPlayers', JSON.stringify(data.connectedPlayers))
			setConnectedPlayers(data.connectedPlayers)
		})

		return () => {
			socket.off('playerJoined')
		}
	}, [socket])

	useEffect(() => {
		console.log('remote streams are here:', remoteStreams)
		console.log('local streams are here:', localStream)
	}, [remoteStreams])

	console.log('connectedPlayers:', JSON.parse(localStorage.getItem('connectedPlayers')))

	useEffect(() => {
		console.log('use effect is working')
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((stream) => {
				console.log('fucking stream is here:', stream)
				setLocalStream(stream)
				console.log('localStream:', localStream)
				setupWebRTC(connectedPlayers, setRemoteStreams, stream, userId)
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

	useEffect(() => {
		console.log(
			'something wrong... I can feel it:',
			console.log(remoteStreams),
			console.log(players.map((player) => remoteStreams[player.id]))
		)
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
							stream={remoteStreams[5]}
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
			{/* <video playsInline muted autoPlay ref={userVideoRef}></video> */}

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
