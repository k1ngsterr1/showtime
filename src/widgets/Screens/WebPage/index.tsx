import React, { useState, useEffect, useRef } from 'react'
import styles from './VideoRoom.module.scss' // Make sure to define your styles accordingly
import AbsoluteTab from '@features/Tab_Components/AbsoluteTab/index'
import { MenuButton } from '@shared/ui/Icons/MenuButton'

const VideoRoom = () => {
	const [stream, setStream] = useState(null)
	const userVideoRef = useRef()

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((currentStream) => {
				setStream(currentStream)
				if (userVideoRef.current) {
					userVideoRef.current.srcObject = currentStream
				}
			})
			.catch((error) => {
				console.error('Error accessing the webcam', error)
			})

		return () => {
			if (stream) {
				stream.getTracks().forEach((track) => {
					track.stop()
				})
			}
		}
	}, [])

	return (
		<div className={styles.videoRoom}>
			<div className={styles.grid}>
				{Array.from({ length: 6 }, (_, index) =>
					index === 0 ? (
						<video
							key={index}
							ref={userVideoRef}
							autoPlay
							playsInline
							muted
							className={styles.video}
						/>
					) : (
						<div key={index} className={styles.loader}>
							<MenuButton />
						</div>
					)
				)}
			</div>
			<AbsoluteTab />
		</div>
	)
}

export default VideoRoom
