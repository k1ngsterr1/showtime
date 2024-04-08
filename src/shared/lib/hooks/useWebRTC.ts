import { socket } from './socketService'

let peerConnections = {}

export const setupWebRTC = (players, setRemoteStreams, localStream) => {
	players.forEach((player) => {
		if (player.id === 'local')
			const pc = new RTCPeerConnection({
				iceServers: [
					{ urls: 'stun:stun.example.com' },
					{
						urls: 'turn:turn.example.com',
						username: 'turnuser',
						credential: 'turnpassword'
					}
				]
			})

		// Add the local stream to the connection
		if (localStream) {
			localStream.getTracks().forEach((track) => pc.addTrack(track, localStream))
		}

		// Handle on ice candidate event
		pc.onicecandidate = (event) => {
			if (event.candidate) {
				socket.emit('iceCandidate', { to: player.id, candidate: event.candidate })
			}
		}

		// Handle on track event
		pc.ontrack = (event) => {
			setRemoteStreams((prevStreams) => ({
				...prevStreams,
				[player.id]: event.streams[0]
			}))
		}

		peerConnections[player.id] = pc
	})

	// Creating offers for non-local players
	players.forEach((player) => {
		if (player.id !== 'local') {
			const pc = peerConnections[player.id]
			pc.createOffer()
				.then((offer) => pc.setLocalDescription(offer))
				.then(() => {
					socket.emit('offer', { to: player.id, offer: pc.localDescription })
				})
				.catch(console.error)
		}
	})
}

export const cleanUpPeers = () => {
	Object.values(peerConnections).forEach((pc) => pc.close())
	peerConnections = {}

	// Remove socket listeners
	socket.off('iceCandidate')
	socket.off('offer')
	socket.off('answer')
}

export const initializeSocketListeners = () => {
	socket.on('iceCandidate', ({ from, candidate }) => {
		const pc = peerConnections[from]
		if (pc) {
			pc.addIceCandidate(new RTCIceCandidate(candidate)).catch(console.error)
		}
	})

	socket.on('offer', ({ from, offer }) => {
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

	// Listen for answers from the server
	socket.on('answer', ({ from, answer }) => {
		const pc = peerConnections[from]
		if (pc) {
			pc.setRemoteDescription(new RTCSessionDescription(answer)).catch(console.error)
		}
	})
}

export const tearDownSocketListeners = cleanUpPeers
