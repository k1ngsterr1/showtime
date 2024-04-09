import React, { useState, useEffect, useRef } from 'react'
import ContextMenu from '@shared/ui/WebMenu/index'

import styles from './styles.module.scss'

interface VideoProps {
	number: string
	name: string
	id: string
	cameraPlayerNumber: string
	type?: string
	stream: any
	videoType: 'default' | 'showman'
	onContextMenu: any
	onCameraClick: (cameraPlayerNumber: string) => void
}

export const VideoCams: React.FC<VideoProps> = ({
	cameraPlayerNumber,
	number,
	name,
	stream,
	onContextMenu,
	videoType,
	onCameraClick
}) => {
	// const [stream, setStream] = useState(null)
	const userVideoRef = useRef<any>()
	const videoClass = `${styles.button} ${styles[videoType]}`

	const [contextMenu, setContextMenu] = useState({
		isVisible: false,
		xPos: 0,
		yPos: 0
	})

	// useEffect(() => {
	// 	console.log('uservideoref:', userVideoRef.current)

	// 	console.log('stream is here:', stream)

	// 	if (userVideoRef.current && stream) {
	// 		console.log('stream is here:', stream)

	// 		userVideoRef.current.srcObject = stream
	// 		userVideoRef.current.play().catch((error) => {
	// 			console.error('Video play failed', error)
	// 		})
	// 	}
	// }, [stream])

	useEffect(() => {
		const playVideo = async () => {
			if (userVideoRef.current && stream) {
				console.log('my stream is here:', stream)

				userVideoRef.current.srcObject = stream
				try {
					await userVideoRef.current.play()
				} catch (error) {
					console.error('Error playing video', error)
				}
			}
		}

		playVideo()
	}, [stream])

	useEffect(() => {
		const handleStreamTrack = (event: MediaStreamTrackEvent) => {
			console.log(`Track ${event.track.kind} is here`, event.track)
		}

		stream?.addEventListener('addtrack', handleStreamTrack)
		return () => {
			stream?.removeEventListener('addtrack', handleStreamTrack)
		}
	}, [stream])

	const handleCameraContextMenu = (event, cameraPlayerNumber) => {
		event.preventDefault()
		const bounds = event.target.getBoundingClientRect()

		setContextMenu({
			isVisible: true,
			xPos: event.clientX - bounds.left,
			yPos: event.clientY - bounds.top,
			cameraPlayerNumber
		})
	}

	const handleCloseMenu = () => {
		setContextMenu({ ...contextMenu, isVisible: false })
	}

	return (
		<div
			className={`${styles.video} ${videoClass}`}
			onContextMenu={handleCameraContextMenu}
			onClick={() => onCameraClick(cameraPlayerNumber)}
		>
			<video
				ref={userVideoRef}
				autoPlay
				playsInline
				// muted
				onError={(e) => {
					console.error('Video element error:', e)
				}}
			/>
			<div className={styles.video__container}>
				<span className={styles.video__number}>{number}</span>
				<p className={styles.video__name}>{name}</p>
			</div>
			{contextMenu.isVisible && (
				<ContextMenu
					xPos={contextMenu.xPos}
					yPos={contextMenu.yPos}
					onMenuClose={handleCloseMenu}
					cameraPlayerNumber={contextMenu.cameraPlayerNumber}
				/>
			)}
		</div>
	)
}
