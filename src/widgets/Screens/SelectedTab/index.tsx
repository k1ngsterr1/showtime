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
	faCog,
	faSun
} from '@fortawesome/free-solid-svg-icons'
import { ControlTabButton } from '@shared/ui/Buttons/ControlTabButton'

import styles from '@entities/Tab_Components/AbsoluteTab/ControlPanel.module.scss'

interface TabContentProps {
	tabType: string
	toggleCamera: any
	toggleMicrophone: any
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export const ControlPanel: React.FC<TabContentProps> = ({
	tabType,
	toggleCamera,
	toggleMicrophone
}) => {
	const renderContent = () => {
		switch (tabType) {
			default:
				return (
					<div className={styles.controlPanel}>
						<ControlTabButton text="Камера" icon={faVideo} onClick={() => toggleCamera(3)} />
						<ControlTabButton
							text="Микрофон"
							icon={faMicrophone}
							onClick={() => toggleMicrophone(1)}
						/>
						<ControlTabButton
							text="День / Ночь"
							icon={faSun}
							onClick={() => console.log('zhopa')}
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
						<ControlTabButton text="Камера" icon={faVideo} onClick={() => toggleCamera(1)} />
						<ControlTabButton
							text="Микрофон"
							icon={faMicrophone}
							onClick={() => toggleMicrophone(1)}
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
		}
	}

	return <>{renderContent()}</>
}
