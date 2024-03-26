import React, { useState, useEffect, useRef } from 'react'

import styles from './styles.module.scss'

interface VideoProps {
	number: string
	name: string
}

export const VideoCams: React.FC<VideoProps> = ({ number, name }) => {
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
		<div className={styles.video}>
			<video ref={userVideoRef} autoPlay playsInline muted />
			<div className={styles.video__container}>
				<span className={styles.video__number}>{number}</span>
				<p className={styles.video__name}>{name}</p>
			</div>
		</div>
	)
}
