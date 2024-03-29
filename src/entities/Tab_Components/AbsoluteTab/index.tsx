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

import styles from './ControlPanel.module.scss'

const ControlPanel = ({ toggleCamera }) => {
	const {
		toggleReady,
		toggleButton,
		toggleMicrophoneBtn,
		buttonClass,
		buttonClassMicro,
		buttonClassReady
	} = useAbsoluteTab()

	const { cameraStates, toggleMicrophone } = useCameraStates(players)

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
				<FontAwesomeIcon icon={faSignOutAlt} className="transition-all hover:text-primary-red" />
				<span>Выйти</span>
			</button>
			<button>
				<FontAwesomeIcon icon={faEllipsisH} className="transition-all hover:text-primary-red" />
				<span>Больше</span>
			</button>
			<button onClick={() => (window.location.href = '/')}>
				<FontAwesomeIcon icon={faCog} className="transition-all hover:text-primary-red" />
				<span>Настройки</span>
			</button>
		</div>
	)
}

export default ControlPanel
