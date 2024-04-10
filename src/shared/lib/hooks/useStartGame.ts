import axios from 'axios'
import { useState, useEffect } from 'react'

export function useStartGame() {
	const startGame = async (roomId: number) => {
		try {
			const response = await axios.post(
				`http://localhost:4200/api/game/start-game/${roomId}`,
				null,
				{
					withCredentials: true
				}
			)
			console.log(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	return { startGame }
}
