import React, { useEffect } from 'react'
import { HelpCard } from '@entities/Card_Components/HelpCard'
import { GameProfile } from '@entities/Game_Components/GameProfile'
import { Lobby } from '@features/Lobby'
import { useGetScore } from '@shared/lib/hooks/useGetScore'
import { useUserData } from '@shared/lib/hooks/useGetUserData'
import { ErrorScreen } from '../Error'
import { useConnectPlayer } from '@shared/lib/hooks/useConnetPlayerRoom'

import photo from '@assets/logo/fedora.svg'

import styles from './styles.module.scss'

export const GameScreen = () => {
	const userData = useUserData()
	const { scoreData } = useGetScore()

	console.log('trying vercel')

	return (
		<>
			{userData === null || scoreData === null ? (
				<ErrorScreen />
			) : (
				<div className={styles.game} id="game">
					<div className={styles.game__main_content}>
						<HelpCard
							text="Узнайте главные правила игры в мафию за 7 минут"
							paragraph="В разделе «Правила игры», который мы составили для новых игроков"
							linkText="Узнать"
							href="/"
						/>
						<div className="mt-8 flex items-start justify-center gap-16 ">
							<div className="mt-9 flex flex-col items-center">
								<GameProfile
									totalGames={scoreData.totalGames}
									totalLoses={scoreData.totalLoses}
									totalWins={scoreData.totalWins}
									username={userData.username}
									currentRank={userData.rank}
									balance={userData.balance}
									avatar={photo.src}
								/>
							</div>
							<Lobby />
						</div>
					</div>
				</div>
			)}
		</>
	)
}
