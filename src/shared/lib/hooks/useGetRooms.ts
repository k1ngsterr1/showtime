import { createRoom } from '@shared/lib/hooks/useCreateGame'
import axios from 'axios'
import io from 'socket.io-client'
import { useState, useEffect } from 'react'

export function useGetRooms(userId: number) {
	const [rooms, setRooms] = useState([])
	const [userRoom, setUserRoom] = useState()

	const socket = io('http://localhost:4000', { path: '/sockets/' })

	useEffect(() => {
		let isMounted = true

		const fetchRooms = async () => {
			try {
				const response = await axios.get('https://showtime.up.railway.app/api/rooms/get-rooms')
				if (isMounted) {
					setRooms(response.data.rooms)
					const foundUserRoom = response.data.rooms.find((room) => room.creatorId === userId)
					setUserRoom(foundUserRoom)
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
			console.log('ROOM CREATED!!!', newRoom.room)
			if (newRoom.room.creatorId === userId) {
				console.log('USER ROOM IS HERE', newRoom)
				setUserRoom(newRoom.room)
				console.log(userRoom)
			} else {
				setRooms((prevRooms) => [...prevRooms, newRoom])
			}
		})

		socket.on('roomUpdated', (updatedRoom) => {
			console.log('room updated!')
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

	return { rooms, userRoom }
}
