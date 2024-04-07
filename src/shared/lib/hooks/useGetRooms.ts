import axios from 'axios'
import { socket } from '../socket/socketService'
import { useState, useEffect } from 'react'

export function useGetRooms(userId: number) {
	const [rooms, setRooms] = useState([])
	const [userRoom, setUserRoom] = useState()

	useEffect(() => {
		let isMounted = true

		const fetchRooms = async () => {
			try {
				const response = await axios.get('https://showtime.up.railway.app/api/rooms/get-rooms')

				if (isMounted) {
					setRooms(response.data.rooms)
					const foundUserRoom = response.data.rooms.find((room: any) => room.creatorId === userId)
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

		socket.on('connect_error', () => {
			console.log('there was an error with socket connection')
		})

		socket.on('roomCreated', (newRoom) => {
			if (newRoom.room.creatorId === userId) {
				console.log('USER ROOM IS HERE', newRoom)
				setUserRoom(newRoom.room)
				console.log(userRoom)
			} else {
				setRooms((prevRooms) => [...prevRooms, newRoom.room])
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
