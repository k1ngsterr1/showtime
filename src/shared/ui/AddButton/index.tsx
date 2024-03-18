import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

interface ButtonProps {
	buttonType: 'filled' | 'outline'
	text: string
	margin?: string
	type?: string
}

const AddButton: React.FC<ButtonProps> = ({ buttonType, text, margin }) => {
	const buttonClass = `${styles.button} ${styles[buttonType]} ${margin ? margin : ''}`

	return (
		<button className={buttonClass}>
			<FontAwesomeIcon className={styles.buttonIcon} icon={faCirclePlus} />
			<span>{text}</span>
		</button>
	)
}

export default AddButton
