import React, { useState } from 'react'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea/index' // Make sure the import path is correct
import CalendarComponent from '@features/Calendar/reviewcalendar'
import { StarRating } from '@shared/ui/StarRating/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddReview } from '@shared/lib/hooks/Admin/Add/useAddReview'

import Fedora from '@assets/logo/fedora.svg'
import styles from './styles.module.scss'
import '@shared/styles/global.scss'

interface ICardProps {
	name: string
}

export const ReviewCard: React.FC<ICardProps> = ({ name }) => {
	const [reviewName, setReviewName] = useState('')
	const [reviewText, setReviewText] = useState('')
	const [rating, setRating] = useState<number | null>(null)
	const [reviewDate, setReviewDate] = useState(new Date()) // Состояние для хранения выбранной даты
	const { addReview } = useAddReview()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (reviewName && reviewText && rating !== null) {
			const formData = new FormData()
			formData.append('name', reviewName)
			formData.append('text', reviewText)
			formData.append('rating', rating.toString())
			formData.append('date', reviewDate.toISOString())

			await addReview(formData)
		} else {
			console.log('All fields including rating are required')
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
				<div className={styles.card}>
					<CalendarComponent marginClass="mt-3" onDateChange={setReviewDate} />
					<div className={`${styles.card__client} mt-4`}>
						<div className={styles.card__client_circle}>
							<img src={Fedora.src} alt="Fedora" className={styles.card__client_fedora} />
						</div>
						<Input
							inputType="neo-medium"
							type="text"
							placeholder="Имя клиента"
							value={reviewName}
							onChange={(e) => setReviewName(e.target.value)}
							name="name"
						/>
					</div>
					<div className="mt-2">
						<StarRating onRatingChange={(rating) => setRating(rating)} />
					</div>
					<div className={styles.card__review}>
						<TextArea
							textareaType="review"
							placeholder="Текст отзыва"
							value={reviewText}
							name="text"
							onChange={(e) => setReviewText(e.target.value)}
						/>
					</div>
				</div>
				<div className="mt-8 flex flex-row gap-10">
					<AddButton buttonType="filled" text="Добавить" margin="mt-4" type="submit" />
					<LinkButton buttonType="filled" href="reviews-list" text="Смотреть все" margin="mt-4" />
				</div>
			</form>
		</>
	)
}
