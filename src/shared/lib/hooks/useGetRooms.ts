import axios from 'axios'
import io from 'socket.io-client'
import { useState, useEffect } from 'react'

export function useGetRooms() {
	const [rooms, setRooms] = useState([])

	const socket = io('http://localhost:4000', { path: '/sockets/' })

	useEffect(() => {
		let isMounted = true

		const fetchRooms = async () => {
			try {
				const response = await axios.get('https://showtime.up.railway.app/api/rooms/get-rooms')
				if (isMounted) {
					setRooms(response.data.rooms)
				}
			} catch (error) {
				console.error('There was an error fetching the rooms:', error)
			}
		}

		fetchRooms()

		socket.on('connect', () => {
			console.log('Connected to socket server')
		})

		socket.on('roomCreated', (newRoom) => {
			console.log('ROOM CREATED!!!')
			setRooms((prevRooms) => [...prevRooms, newRoom])
		})

		socket.on('roomUpdated', (updatedRoom) => {
			setRooms((prevRooms) =>
				prevRooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
			)
		})

		return () => {
			socket.off('connect')
			socket.off('roomCreated')
			socket.off('roomUpdated')
		}
	}, [])

	return rooms
}
