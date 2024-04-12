import axios from 'axios'
import { useState, useEffect } from 'react'

export function useStartGame() {
	const startGame = async (roomId: number) => {
		try {
			const userData = JSON.parse(localStorage.getItem('userData'))
			const refreshToken = userData.refresh

			const config = {
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			}

			const response = await axios.post(
				`http://localhost:4000/api/game/start-game/${roomId}`,
				{},
				config
			)

			console.log(response.data)
		} catch (error) {
			console.error('Error:', error.response || error.message || error)
		}
	}

	return { startGame }
}
