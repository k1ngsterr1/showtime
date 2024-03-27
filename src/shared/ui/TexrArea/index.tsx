import React from 'react'
import styles from './styles.module.scss'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	margin?: string
	placeholder: string
	textareaType?:
		| string
		| 'vacancie'
		| 'schedule'
		| 'product-desc'
		| 'review'
		| 'articles'
		| 'services'
}

export const TextArea: React.FC<TextAreaProps> = ({
	margin,
	placeholder,
	textareaType,
	...rest
}) => {
	const textAreaClass = `${styles.textarea} ${textareaType ? styles[`textarea--${textareaType}`] : ''} ${margin ? margin : ''}`

	return <textarea className={textAreaClass} placeholder={placeholder} {...rest} />
}
