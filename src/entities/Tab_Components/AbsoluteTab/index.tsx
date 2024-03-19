import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faVideo,
	faMicrophone,
	faRedo,
	faCheck,
	faSignOutAlt,
	faEllipsisH,
	faCog
} from '@fortawesome/free-solid-svg-icons'
import styles from './ControlPanel.module.scss' // Make sure to have the appropriate styles

const ControlPanel = () => {
	// Here you can manage the state if needed for toggling the icons
	// For example, you can have a state to track if the video or microphone is enabled

	return (
		<div className={styles.controlPanel}>
			<button className="transition-all hover:text-primary-red">
				<FontAwesomeIcon icon={faVideo} />
				<span>Видео</span>
			</button>
			<button className="transition-all hover:text-primary-red">
				<FontAwesomeIcon icon={faMicrophone} className="transition-all hover:text-primary-red" />
				<span>Микрофон</span>
			</button>
			<button className="transition-all hover:text-primary-red">
				<FontAwesomeIcon icon={faRedo} className="transition-all hover:text-primary-red" />
				<span>Перезапустить камеру</span>
			</button>
			<button className="transition-all hover:text-primary-red">
				<FontAwesomeIcon icon={faCheck} className="transition-all hover:text-primary-red" />
				<span>Готов</span>
			</button>
			<button className="transition-all hover:text-primary-red">
				<FontAwesomeIcon icon={faSignOutAlt} className="transition-all hover:text-primary-red" />
				<span>Выйти</span>
			</button>
			<button className="transition-all hover:text-primary-red">
				<FontAwesomeIcon icon={faEllipsisH} className="transition-all hover:text-primary-red" />
				<span>Больше</span>
			</button>
			<button
				className="transition-all hover:text-primary-red"
				onClick={() => (window.location.href = '/')}
			>
				<FontAwesomeIcon icon={faCog} className="transition-all hover:text-primary-red" />
				<span>Настройки</span>
			</button>
		</div>
	)
}

export default ControlPanel
