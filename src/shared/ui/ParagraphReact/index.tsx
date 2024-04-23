import React from 'react'
import styles from './styles.module.scss'
import ParagraphReact from '@shared/ui/ParagraphReact/index'

interface Props {
	text: string
	margin?: string
	align?: string
	width?: string
	paragraphType: 'red' | 'white' | 'dark' | 'red-center' 
}

const Paragraph: React.FC<Props> = ({ text, margin, width, align, paragraphType }) => {
	const paragraphClass = `${styles.paragraph} ${
		styles[`paragraph--${paragraphType}`]
	} ${margin} ${align}`

	return (
		<p className={paragraphClass} style={{ width }}>
			{text}
		</p>
	)
}

export default Paragraph
