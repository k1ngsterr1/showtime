import React, { useEffect, useState, type FormEvent } from 'react'
import { PlayersCounter } from '@entities/Game_Components/PlayersCounter'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { Input } from '@shared/ui/Inputs/DefaultInput'
import { useUserData } from '@shared/lib/hooks/useGetUserData'
import { createRoom } from '@shared/lib/hooks/useCreateGame'

import styles from './styles.module.scss'

interface IGameContentProps {
	gameType: string
}

export const GameContent: React.FC<IGameContentProps> = ({ gameType }) => {
	const userData = useUserData()

	useEffect(() => {
		if (userData) {
			setRoomData((prevState) => ({
				...prevState,
				gameType: gameType,
				creatorId: userData.id
			}))
		}
	}, [gameType, userData])

	const [roomData, setRoomData] = useState({
		gameType: 'Классика',
		roomName: '',
		capacity: 10
	})

	const handleInputChange = (event: any) => {
		const { name, value } = event.target

		setRoomData((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		try {
			await createRoom(roomData)
		} catch (error) {
			console.error('Room creation failed:', error)
		}
	}

	const renderContent = () => {
		switch (gameType) {
			case 'Классика':
				return (
					<div className={styles.urban_content}>
						<h3 className={styles.urban_content__heading}>Режим: "Классическая мафия"</h3>
						<p className={styles.urban_content__paragraph}>
							В этом режиме вы играете на свой ранг со случайными соперниками. При победе ваш ранг
							повысится, при поражении — понизится.
						</p>
						<form className="flex flex-col" onSubmit={handleSubmit}>
							<Input
								placeholder="Название комнаты"
								inputType="default-red"
								type="text"
								onChange={handleInputChange}
								name="roomName"
								margin="mt-4"
							/>

							<ReactButton text="Создать комнату" buttonType="filled" margin=" mt-4 w-[92%]" />
						</form>
					</div>
				)
			default:
				return (
					<div className={styles.urban_content}>
						<h3 className={styles.urban_content__heading}>Режим: "Классическая мафия"</h3>
						<p className={styles.urban_content__paragraph}>
							В этом режиме вы играете на свой ранг со случайными соперниками. При победе ваш ранг
							повысится, при поражении — понизится.
						</p>
						<form className="flex flex-col" onSubmit={handleSubmit}>
							<Input
								placeholder="Название комнаты"
								inputType="default-red"
								type="text"
								onChange={handleInputChange}
								name="roomName"
								margin="mt-4"
							/>

							<ReactButton text="Создать комнату" buttonType="filled" margin=" mt-4 w-[92%]" />
						</form>
					</div>
				)
		}
	}

	return <>{renderContent()}</>
}
