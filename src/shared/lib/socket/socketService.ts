import { io } from 'socket.io-client'

export const socket = io('https://showtime.up.railway.app', {
	path: '/sockets/',
	transports: ['polling', 'websocket'],
	reconnectionAttempts: 500,
	reconnectionDelay: 2000
})
