import React, { useState, useEffect, useRef } from 'react'

import styles from './styles.module.scss'

interface VideoProps {
	number: string
	name: string
	id: string
	cameraPlayerNumber: string
	type?: string
	videoType: 'default' | 'showman'
	onCameraClick: (cameraPlayerNumber: string) => void
}

export const VideoCams: React.FC<VideoProps> = ({
	cameraPlayerNumber,
	number,
	name,
	videoType,
	onCameraClick
}) => {
	const [stream, setStream] = useState(null)
	const userVideoRef = useRef()
	const videoClass = `${styles.button} ${styles[videoType]}`

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
		<div
			className={`${styles.video} ${videoClass}`}
			onClick={() => onCameraClick(cameraPlayerNumber)}
		>
			<video ref={userVideoRef} autoPlay playsInline muted />
			<div className={styles.video__container}>
				<span className={styles.video__number}>{number}</span>
				<p className={styles.video__name}>{name}</p>
			</div>
		</div>
	)
}
