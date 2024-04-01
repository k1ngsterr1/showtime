import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IControlTabButton {
	icon: IconDefinition
	text: string
	onClick: () => void
}

export const ControlTabButton: React.FC<IControlTabButton> = ({ icon, text, onClick }) => {
	return (
		<button className={styles.control_button} onClick={onClick}>
			<FontAwesomeIcon className={styles.control_button__icon} icon={icon} />
			<span className={styles.control_button__text}>{text}</span>
		</button>
	)
}
