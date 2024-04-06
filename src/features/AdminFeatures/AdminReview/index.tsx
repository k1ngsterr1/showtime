import React from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea/index'
import CalendarComponent from '@features/Calendar/reviewcalendar'
import StarRating from '@shared/ui/StarRating'

import Fedora from '@assets/logo/fedora.svg'

import styles from './styles.module.scss'
import '@shared/styles/global.scss'

interface ICardProps {
	name: string
}

export const ReviewCard: React.FC<ICardProps> = ({ name }) => {
	return (
		<>
			<div className={styles.card}>
				<form>
					<CalendarComponent marginClass="mt-3" />
					<div className={`${styles.card__client} mt-4`}>
						<div className={styles.card__client_circle}>
							<img src={Fedora.src} alt="Fedora" className={styles.card__client_fedora} />
						</div>
						<Input inputType="neo-medium" type="text" placeholder={name} />
					</div>
					<div className="mt-2">
						<StarRating />
					</div>
					<div className={styles.card__review}>
						<TextArea textareaType="review" placeholder="Текст отзыва" />
					</div>
				</form>
			</div>
		</>
	)
}
