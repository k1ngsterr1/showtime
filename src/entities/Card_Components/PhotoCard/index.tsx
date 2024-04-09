import React from 'react'
import Paragraph from '@shared/ui/ParagraphReact'
import styles from './styles.module.scss'

interface Props {
	date: string
	heading: string
	description: string
	url: string;
}

const NewsCard: React.FC<Props> = ({ date, heading, description, url }) => {
	return (
		<div className={styles.card}>
			<img src={url} alt="News" />
			<div className="ml-auto mt-3 flex w-[95%] flex-col">
				<span className="font-katana text-xl">{date}</span>
				<span className="mt-2 overflow-hidden font-katana text-4xl">{heading}</span>
				<Paragraph paragraphType="dark" margin="mt-4" width="80%" text={description} />
			</div>
		</div>
	)
}

export default NewsCard
