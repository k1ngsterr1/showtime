import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAbsoluteTab } from '@shared/lib/hooks/useAbsoluteTab'
import { useCameraStates } from '@shared/lib/hooks/useWebRoom'
import { players } from '@shared/lib/content/webCamContent'
import {
	faVideo,
	faMicrophone,
	faRedo,
	faCheck,
	faSignOutAlt,
	faEllipsisH,
	faCog,
	faSun
} from '@fortawesome/free-solid-svg-icons'
import { ControlTabButton } from '@shared/ui/Buttons/ControlTabButton'

import styles from '@entities/Tab_Components/AbsoluteTab/ControlPanel.module.scss'

interface TabContentProps {
	tabType: string
	toggleCamera: any
	toggleMicrophone: any
	players: any
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export const ControlPanel: React.FC<TabContentProps> = ({
	tabType,
	toggleCamera,
	toggleMicrophone,
	players
}) => {
	const renderContent = (player) => {
		switch (tabType) {
			default:
				return (
					<div className={styles.controlPanel}>
						<ControlTabButton
							text="Камера"
							icon={faVideo}
							onClick={() => toggleCamera(player.cameraNumber)}
						/>
						<ControlTabButton
							text="Микрофон"
							icon={faMicrophone}
							onClick={() => toggleMicrophone(player.id)}
						/>
						<a href="/game">
							<ControlTabButton
								text="Выйти"
								icon={faSignOutAlt}
								onClick={() => toggleMicrophone(1)}
							/>
						</a>
					</div>
				)
			case 'showman':
				return (
					<div className={styles.controlPanel}>
						<ControlTabButton text="Камера" icon={faVideo} onClick={() => toggleCamera(3)} />
						<ControlTabButton
							text="Микрофон"
							icon={faMicrophone}
							onClick={() => toggleMicrophone(3)}
						/>
						<ControlTabButton
							text="День / Ночь"
							icon={faSun}
							onClick={() => console.log('zhopa')}
						/>
						<ControlTabButton
							text="Выйти"
							icon={faSignOutAlt}
							onClick={() => toggleMicrophone(1)}
						/>
					</div>
				)
			case 'user':
				return (
					<div className={styles.controlPanel}>
						<ControlTabButton
							text="Камера"
							icon={faVideo}
							onClick={() => toggleCamera(player.id)}
						/>
						<ControlTabButton
							text="Микрофон"
							icon={faMicrophone}
							onClick={() => toggleMicrophone(player.id)}
						/>
						<a href="/game">
							<ControlTabButton
								text="Выйти"
								icon={faSignOutAlt}
								onClick={() => toggleMicrophone(1)}
							/>
						</a>
					</div>
				)
		}
	}

	return <>{players.map(renderContent)}</>
}
