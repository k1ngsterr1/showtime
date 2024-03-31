import React from 'react'

import styles from '../DefaultButton/styles.module.scss'

interface ButtonProps {
	buttonType: 'filled' | 'outline' | 'transparent' | 'filled-small' | 'users' | 'kebab'
	text: string
	margin?: string
	type?: string
	onClick?: () => void
	href?: string
	disabled?: boolean
}

const ReactButton: React.FC<ButtonProps> = ({ buttonType, text, margin, onClick, disabled }) => {
	const buttonClass = `${styles.button} ${styles[buttonType]} ${margin ? margin : ''}`

	return (
		<button className={buttonClass} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	)
}

export default ReactButton
