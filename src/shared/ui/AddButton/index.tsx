import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

interface ButtonProps {
	buttonType: 'filled' | 'outline'
	text: string
	margin?: string
	type?: string
	onClick?: () => void
}

const AddButton: React.FC<ButtonProps> = ({ buttonType, text, margin, onClick }) => {
	const buttonClass = `${styles.button} ${styles[buttonType]} ${margin ? margin : ''}`

	return (
		<button className={buttonClass} onClick={onClick}>
			<FontAwesomeIcon className={styles.buttonIcon} icon={faCirclePlus} />
			<span>{text}</span>
		</button>
	)
}

export default AddButton
