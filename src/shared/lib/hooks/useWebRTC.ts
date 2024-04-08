import { socket } from '../socket/socketService'

let peerConnections = {}

export const setupWebRTC = (players, setRemoteStreams, localStream) => {
	console.log('web rtc is working!')

	console.log('these are my peerConnections:', peerConnections)

	console.log('localStreams:', localStream, 'players:', players)

	const userData = JSON.parse(localStorage.getItem('userData'))

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
				console.log('onicecandidate is working too!')
				if (event.candidate) {
					socket.emit('iceCandidate', { to: player.id, candidate: event.candidate })
				}
			}

			pc.ontrack = (event) => {
				console.log('\x1b[36m%s\x1b[0m', 'I hope that ontrack will work, God please help me...')
				console.log(`Received new stream from player ${player.id}`)

				setRemoteStreams((prevStreams) => ({
					...prevStreams,
					[player.id]: event.streams[0]
				}))

				console.log('set remote streams:', setRemoteStreams)
			}

			peerConnections[player.id] = pc

			pc.oniceconnectionstatechange = (event) => {
				console.log(`ICE state: ${pc.iceConnectionState}`)
				if (pc.iceConnectionState === 'connected') {
					console.log('ICE connection established with player:', player.id)
				}
			}

			pc.onsignalingstatechange = () => {
				console.log(`Signaling state changed to ${pc.signalingState}`)
			}
		}
	})

	players.forEach((player) => {
		if (player.id !== userData.id) {
			const pc = peerConnections[player.id]

			console.log('pc is working here! yoyyo', pc)

			if (pc) {
				console.log('there should be peer Offer?')
				pc.createOffer()
					.then((offer) => pc.setLocalDescription(offer))
					.then(() => {
						socket.emit('offer', { to: player.id, offer: pc.localDescription })
					})
					.catch(console.error)
			}
		}
	})
}

export const cleanUpPeers = () => {
	Object.values(peerConnections).forEach((pc) => pc.close())
	peerConnections = {}

	socket.off('iceCandidate')
	socket.off('offer')
	socket.off('answer')
}

export const initializeSocketListeners = () => {
	console.log('socket listeners are working!')

	socket.on('connect', () => {
		console.log('Socket is connecting to the room:')
	})

	socket.on('iceCandidate', ({ from, candidate }) => {
		console.log('ice Candidate socket is working!')
		const pc = peerConnections[from]

		if (pc) {
			pc.addIceCandidate(new RTCIceCandidate(candidate)).catch(console.error)
		}
	})

	socket.on('offer', ({ from, offer }) => {
		console.log('offer socket is working!')
		const pc = peerConnections[from]
		if (pc) {
			pc.setRemoteDescription(new RTCSessionDescription(offer))
				.then(() => pc.createAnswer())
				.then((answer) => pc.setLocalDescription(answer))
				.then(() => {
					socket.emit('answer', { to: from, answer: pc.localDescription })
				})
				.catch(console.error)
		}
	})

	socket.on('answer', ({ from, answer }) => {
		console.log('answer socket is working!')
		const pc = peerConnections[from]
		if (pc) {
			pc.setRemoteDescription(new RTCSessionDescription(answer)).catch(console.error)
		}
	})
}

export const tearDownSocketListeners = cleanUpPeers
