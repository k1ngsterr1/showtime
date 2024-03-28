import React, { useState } from 'react'
import AbsoluteTab from '@entities/Tab_Components/AbsoluteTab'
import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { VideoCams } from '@shared/ui/VideoCams/index'

import styles from './styles.module.scss'

const VideoRoom = () => {
	const [showCamera, setShowCamera] = useState(false)

	const toggleCamera = () => {
		setShowCamera((prevShowCamera) => !prevShowCamera)
	}

	return (
		<div className={styles.videoRoom}>
			<div className={styles.grid}>
				{showCamera ? (
					<VideoCams number="1" name="Artem Andreev" />
				) : (
					<div className={styles.loader}>
						<MenuButton />
					</div>
				)}

				<div className={styles.loader}>
					<MenuButton />
				</div>

				<div className={styles.loader}>
					<MenuButton />
				</div>

				<div className={styles.loader}>
					<MenuButton />
				</div>
			</div>
			<div className={styles.grid_third}>
				<div className={styles.loader}>
					<MenuButton />
				</div>

				<div className={styles.loader__showman}>
					<MenuButton />
				</div>

				<div className={styles.loader}>
					<MenuButton />
				</div>
			</div>
			<div className={styles.grid_third}>
				<div className={styles.loader}>
					<MenuButton />
				</div>

				<div className={styles.loader}>
					<MenuButton />
				</div>

				<div className={styles.loader}>
					<MenuButton />
				</div>

				<div className={styles.loader}>
					<MenuButton />
				</div>
			</div>
			<AbsoluteTab toggleCamera={toggleCamera} />
		</div>
	)
}

export default VideoRoom
