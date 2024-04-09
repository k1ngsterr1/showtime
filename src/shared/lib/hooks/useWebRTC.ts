import { socket } from '../socket/socketService'

let peerConnections = {}

const userData = JSON.parse(localStorage.getItem('userData'))

export const setupWebRTC = (players, setRemoteStreams, localStream, userId) => {
	console.log('Initial peer connections state:', peerConnections)

	players.forEach((player) => {
		let pc
		if (player.id !== userData.id) {
			pc = new RTCPeerConnection({
				iceServers: [
					{
						urls: 'stun:stun.l.google.com:19302'
					},
					{
						urls: 'stun:stun1.l.google.com:19302'
					},
					{
						urls: 'turn:numb.viagenie.ca',
						credential: 'muazkh',
						username: 'webrtc@live.com'
					}
				]
			})
		}

		if (pc && localStream) {
			localStream.getTracks().forEach((track) => pc.addTrack(track, localStream))
		}

		if (pc) {
			pc.onicecandidate = (event) => {
				if (event.candidate) {
					// ! ADDED SOCKET ID INSTEAD OF PLAYER ID HERE!
					console.log(`ICE candidate for player ${player.id}:`, event.candidate)

					console.log(
						'\x1b[36m%s\x1b[0m',
						'Data in socket.emit iceCandidate:',
						'to:',
						player.id,
						'event candidate:',
						event.candidate,
						'playerID:',
						userId
					)

					socket.emit('iceCandidate', {
						to: player.id,
						candidate: event.candidate,
						playerID: userId
					})
				}
			}

			pc.ontrack = (event) => {
				console.log(`Received track event:`, event)
				console.log(`Stream received from player ${player.id}:`, event.streams[0])

				setRemoteStreams((prevStreams) => ({
					...prevStreams,
					[player.id]: event.streams[0]
				}))

				console.log('set remote streams:', event.streams[0])
			}

			// ! ADDED SOCKET ID INSTEAD OF PLAYER ID HERE!

			peerConnections[player.id] = pc

			pc.oniceconnectionstatechange = (event) => {
				console.log(`ICE connection state change for player ${player.id}: ${pc.iceConnectionState}`)
				if (pc.iceConnectionState === 'connected') {
					console.log('ICE connection established with player:', player.id)
				}
			}

			pc.onsignalingstatechange = () => {
				console.log(`Signaling state change for player ${player.id}: ${pc.signalingState}`)
			}
		}
	})

	players.forEach((player) => {
		if (player.id !== userData.id) {
			// ! ADDED SOCKET ID INSTEAD OF PLAYER ID HERE!

			const pc = peerConnections[player.id]

			console.log('peerConnections set by player ids:', pc)

			console.log('pc.createOffer()', pc.createOffer())

			if (pc) {
				pc.createOffer()
					.then((offer) => {
						console.log(`Local description set for player ${player.id}`, pc.localDescription)
						return pc.setLocalDescription(offer)
					})
					.then(() => {
						console.log(
							'\x1b[36m%s\x1b[0m',
							'Data in socket.emit offer:',
							'to:',
							player.id,
							'offer:',
							pc.localDescription,
							'playerID:',
							userId
						)
						// if (pc.localDescription) {
						socket.emit(
							'offer',
							{ to: player.id, offer: pc.localDescription, playerID: userId },
							(response) => {
								console.log('offer socket emit response is here:', response)
							}
						)
					})
					.catch(console.error)
			}
		}
	})
}

export const cleanUpPeers = () => {
	console.log('Closing peer connections...')
	Object.values(peerConnections).forEach((pc: any, index) => {
		console.log(`Closing peer connection ${index} with state: ${pc.iceConnectionState}`)
		pc.close()
	})
	peerConnections = {}

	socket.off('iceCandidate')
	socket.off('offer')
	socket.off('answer')
}

export const initializeSocketListeners = () => {
	socket.on('connect', () => {
		console.log('initialize socket listeners are working!')
	})

	socket.on('iceCandidate', ({ from, candidate }) => {
		console.log(
			'\x1b[36m%s\x1b[0m',
			'Data in socket.on iceCandidate:',
			'from:',
			from,
			'candidate:',
			candidate
		)

		const pc = peerConnections[from]

		if (pc) {
			pc.addIceCandidate(new RTCIceCandidate(candidate)).catch(console.error)
		}
	})

	socket.on('offer', ({ from, offer, playerId }) => {
		console.log(
			'\x1b[36m%s\x1b[0m',
			'Data in socket.on offer:',
			'from:',
			from,
			'offer:',
			offer,
			'playerID:',
			playerId
		)

		const pc = peerConnections[from]

		console.log(`Offer received from player ${from}:`, offer)

		console.log('Peer Connections in offer socket:', peerConnections)

		if (pc) {
			console.log('there should be setRemoteDescription')
			pc.setRemoteDescription(new RTCSessionDescription(offer))
				.then(() => pc.createAnswer())
				.then((answer) => pc.setLocalDescription(answer))
				.then(() => {
					console.log(
						'\x1b[36m%s\x1b[0m',
						'Data in socket.emit answer:',
						'to:',
						from,
						'answer:',
						pc.localDescription,
						'playerID:'
					)
					socket.emit('answer', { to: from, answer: pc.localDescription, playerID: userData.id })
				})
				.catch(console.error)
		}
	})

	socket.on('answer', ({ from, answer }) => {
		const pc = peerConnections[from]
		console.log('\x1b[36m%s\x1b[0m', 'Data in socket.on answer:', 'from:', from, 'answer:', answer)

		if (pc) {
			pc.setRemoteDescription(new RTCSessionDescription(answer)).catch(console.error)
		}
	})
}

export const tearDownSocketListeners = cleanUpPeers
