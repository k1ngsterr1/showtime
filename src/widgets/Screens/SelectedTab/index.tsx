import React, { useState } from 'react'
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
	faCog
} from '@fortawesome/free-solid-svg-icons'

import styles from '@entities/Tab_Components/AbsoluteTab/ControlPanel.module.scss'

interface TabContentProps {
	tabType: string
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export const ControlPanel: React.FC<TabContentProps> = ({ tabType, toggleCamera }) => {
	const {
		toggleReady,
		toggleButton,
		toggleMicrophoneBtn,
		buttonClass,
		buttonClassMicro,
		buttonClassReady
	} = useAbsoluteTab()

	const { cameraStates, toggleMicrophone } = useCameraStates(players)

	const renderContent = () => {
		switch (tabType) {
			default:
				return (
					<div>
						<div className={styles.controlPanel}>
							<button
								onClick={() => {
									toggleButton()
									toggleCamera(1)
								}}
							>
								<FontAwesomeIcon icon={faVideo} className={buttonClass} />
								{cameraStates[players.cameraPlayerNumber]}
								<span>Камера</span>
							</button>
							<button
								onClick={() => {
									toggleMicrophoneBtn()
									toggleMicrophone()
								}}
							>
								<FontAwesomeIcon icon={faMicrophone} className={buttonClassMicro} />
								<span>Микрофон</span>
							</button>
							<input type="checkbox" id="toggle" className={styles.toggle__checkbox} />
							<label for="toggle" className={styles.toggle__label}>
								<span className={styles.toggle__label_background}></span>
							</label>
							<div className={styles.background}></div>

							<button
								onClick={() => {
									toggleReady()
								}}
							>
								<FontAwesomeIcon icon={faCheck} className={buttonClassReady} />
								<span>Готов</span>
							</button>
							<button>
								<FontAwesomeIcon
									icon={faSignOutAlt}
									className="transition-all hover:text-primary-red"
								/>
								<span>Выйти</span>
							</button>
							<button>
								<FontAwesomeIcon
									icon={faEllipsisH}
									className="transition-all hover:text-primary-red"
								/>
								<span>Больше</span>
							</button>
							<button onClick={() => (window.location.href = '/')}>
								<FontAwesomeIcon icon={faCog} className="transition-all hover:text-primary-red" />
								<span>Настройки</span>
							</button>
						</div>
					</div>
				)
			case 'showman':
				return (
					<div className={styles.controlPanel}>
						<button
							onClick={() => {
								toggleButton()
								toggleCamera(1)
							}}
						>
							<FontAwesomeIcon icon={faVideo} className={buttonClass} />
							{cameraStates[players.cameraPlayerNumber]}
							<span>Видео</span>
						</button>
						<button
							onClick={() => {
								toggleMicrophoneBtn()
								toggleMicrophone()
							}}
						>
							<FontAwesomeIcon icon={faMicrophone} className={buttonClassMicro} />
							<span>Микрофон</span>
						</button>
						<button>
							<FontAwesomeIcon icon={faRedo} className="transition-all hover:text-primary-red" />
							<span>Перезапустить камеру</span>
						</button>
						<button
							onClick={() => {
								toggleReady()
							}}
						>
							<FontAwesomeIcon icon={faCheck} className={buttonClassReady} />
							<span>Готов</span>
						</button>
						<button>
							<FontAwesomeIcon
								icon={faSignOutAlt}
								className="transition-all hover:text-primary-red"
							/>
							<span>Выйти</span>
						</button>
						<button>
							<FontAwesomeIcon
								icon={faEllipsisH}
								className="transition-all hover:text-primary-red"
							/>
							<span>Больше</span>
						</button>
						<button onClick={() => (window.location.href = '/')}>
							<FontAwesomeIcon icon={faCog} className="transition-all hover:text-primary-red" />
							<span>Настройки</span>
						</button>
					</div>
				)
		}
	}
	return <>{renderContent()}</>
}
