import { useState } from 'react'

export const useGameType = () => {
	const [gameType, setGameType] = useState<string>('Классика')

	const selectGameType = (type: string) => {
		setGameType(type)
	}

	return { gameType, selectGameType }
}
