import React from 'react'
import Paragraph from '@shared/ui/ParagraphReact'
import styles from './styles.module.scss'

interface Props {
	time: string
	heading: string
	paragraph: string
	img: ImageMetadata
}

const NewsCard: React.FC<Props> = ({ time, heading, paragraph, img }) => {
	return (
		<div className={styles.card}>
			<img src={img.src} alt="News" />
			<div className="ml-auto mt-3 flex w-[95%] flex-col">
				<span className="font-katana text-xl">{time}</span>
				<span className="mt-2 overflow-hidden font-katana text-4xl">{heading}</span>
				<Paragraph paragraphType="dark" margin="mt-4" width="80%" text={paragraph} />
			</div>
		</div>
	)
}

export default NewsCard
