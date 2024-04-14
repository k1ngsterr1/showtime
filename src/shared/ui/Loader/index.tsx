import { useRef } from 'react'
import { useCustomLoad } from '@shared/lib/hooks/useCustomLoad'
import revolver_ammo from '@assets/logo/revolver_white.svg'
import styles from './styles.module.scss'

export const Loader = () => {
	const { loadRef, imageRef, redDivRef, textRef } = useCustomLoad()

	return (
		<div className={styles.loader} ref={loadRef}>
			<img src={revolver_ammo.src} ref={imageRef} className={styles.loader__image} alt="revolver" />
			<h1 className={styles.loader__text} ref={textRef}>
				SHOWTIME
			</h1>
			<div className={styles.loader__red} ref={redDivRef}></div>
		</div>
	)
}
