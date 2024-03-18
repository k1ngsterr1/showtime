import React from 'react'
import styles from './styles.module.scss'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	margin?: string
	placeholder: string
}

export const TextArea: React.FC<TextAreaProps> = ({ margin, placeholder, ...rest }) => {
	const textAreaClass = `${styles.textarea} ${margin ? margin : ''}`

	return <textarea className={textAreaClass} placeholder={placeholder} {...rest} />
}
