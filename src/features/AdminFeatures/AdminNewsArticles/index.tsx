import React from 'react'
import styles from './styles.module.scss'
import Img from '@assets/About/image-30.webp'
import Calendar from '@features/Calendar/reviewcalendar'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea'

interface Props {
	time: string
	heading: string
	paragraph: string
}

export const NewsArticleCard: React.FC<Props> = ({ paragraph }) => {
	return (
		<div className={styles.card}>
			<img src={Img.src} alt="" />
			<div className="ml-auto mt-3 flex w-[95%] flex-col">
				<Calendar />
				<Input inputType="newsheading" type="text" placeholder="Заголовoк" />
				<TextArea textareaType="articles" placeholder="Текст" />
			</div>
		</div>
	)
}
