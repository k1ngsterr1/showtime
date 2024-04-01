import styles from './styles.module.scss'
import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	margin?: string
	inputType:
		| string
		| 'default'
		| 'default-red'
		| 'default-red-big'
		| 'textarea'
		| 'calendar'
		| 'default-red-small'
		| 'default-red-medium'
		| 'default-white'
		| 'product'
		| 'product-desc'
		| 'calendar-small'
		| 'neo-medium'
		| 'services'
		| 'teamname'
		| 'teamposition'
	placeholder?: string
	type: string
	textAlign?: 'left' | 'center' | 'right'
}

export const Input: React.FC<InputProps> = ({
	margin,
	inputType,
	placeholder,
	type,
	textAlign = 'left',
	...rest
}) => {
	const inputClass = `${styles.input} ${styles[`input--${inputType}`]} ${margin ? margin : ''}`

	const inputStyle = {
		textAlign: textAlign
	}

	return (
		<input
			className={inputClass}
			style={inputStyle}
			type={type}
			placeholder={placeholder}
			required
			{...rest}
		/>
	)
}
