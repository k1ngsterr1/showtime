import axios from 'axios'
import io from 'socket.io-client'
import { socket } from '../socket/socketService'
import { useState, useEffect } from 'react'

export function useGetRooms(userId: number) {
	const [rooms, setRooms] = useState([])
	const [userRoom, setUserRoom] = useState()

	useEffect(() => {
		let isMounted = true

		const fetchRooms = async () => {
			try {
				const response = await axios.get('http://localhost:4000/api/rooms/get-rooms')

				console.log(response)

				if (isMounted) {
					const filteredRooms = response.data.rooms.filter((room) => room.creatorId !== userData.id)
					setRooms(filteredRooms)
					const foundUserRoom = response.data.rooms.find((room) => room.creatorId === userId)
					setUserRoom(foundUserRoom)
					console.log('here is created room:', response.data)
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

// export function useGetRooms(userId: number) {
// 	const [rooms, setRooms] = useState([])
// 	const [userRoom, setUserRoom] = useState()

// 	useEffect(() => {
// 		const fetchRooms = async () => {
// 			try {
// 				const response = await axios.get('https://showtime.up.railway.app/api/rooms/get-rooms')
// 				setRooms(response.data.rooms)
// 			} catch (error) {
// 				console.error('There was an error fetching the rooms:', error)
// 			}
// 		}

// 		fetchRooms()

// 		socket.on('roomCreated', (newRoom) => {
// 			console.log('ROOM CREATED!!!', newRoom.room)
// 			setRooms((prevRooms) => [...prevRooms, newRoom])
// 		})

// 		socket.on('roomUpdated', (updatedRoom) => {
// 			setRooms((prevRooms) =>
// 				prevRooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
// 			)
// 		})

// 		return () => {
// 			socket.off('roomCreated')
// 			socket.off('roomUpdated')
// 		}
// 	}, [])

// 	useEffect(() => {
// 		console.log('found user room effect')
// 		const foundUserRoom = rooms.find((room) => room.creatorId === userId)
// 		setUserRoom(foundUserRoom)
// 	}, [rooms])

// 	return { rooms, userRoom }
// }

// export function useGetRooms(userId: number) {
// 	const [rooms, setRooms] = useState([])
// 	const [userRoom, setUserRoom] = useState()

// 	useEffect(() => {
// 		const fetchRooms = async () => {
// 			try {
// 				const response = await axios.get('https://showtime.up.railway.app/api/rooms/get-rooms')
// 				setRooms(response.data.rooms)
// 				// Check for user's room immediately after fetching rooms
// 				const foundUserRoom = response.data.rooms.find((room) => room.creatorId === userId)
// 				setUserRoom(foundUserRoom)
// 			} catch (error) {
// 				console.error('Error fetching rooms:', error)
// 			}
// 		}

// 		fetchRooms()

// 		const handleRoomCreated = (newRoom) => {
// 			setRooms((prevRooms) => [...prevRooms, newRoom])
// 			// Check if the newly created room is the user's room
// 			if (newRoom.room.creatorId === userId) {
// 				setUserRoom(newRoom.room)
// 			}
// 		}

// 		const handleRoomUpdated = (updatedRoom) => {
// 			setRooms((prevRooms) =>
// 				prevRooms.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
// 			)
// 		}

// 		socket.on('roomCreated', handleRoomCreated)
// 		socket.on('roomUpdated', handleRoomUpdated)

// 		return () => {
// 			socket.off('roomCreated', handleRoomCreated)
// 			socket.off('roomUpdated', handleRoomUpdated)
// 		}
// 	}, [userId])

// 	return { rooms, userRoom }
// }
