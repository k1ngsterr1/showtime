import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { ReviewCard } from '@entities/Card_Components/ReviewCard'
import { useGetReviews } from '@shared/lib/hooks/Admin/Get/useGetReviews'
import { useDeleteReview } from '@shared/lib/hooks/Admin/Delete/useDeleteReviews'
import { useState } from 'react'
import { useEffect } from 'react'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'
import { reviews } from '@shared/lib/content/reviewContent'

export const ReviewsList = () => {
	const [reviews, setReviews] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getReviews } = useGetReviews()
	const { deleteReview } = useDeleteReview()

	useEffect(() => {
		setIsLoading(true)
		getReviews()
			.then((data) => {
				if (Array.isArray(data)) {
					setReviews(data)
				} else {
					console.error('Data is not an array:', data)

					setReviews([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return (
		<main className={styles.services}>
			<div className={styles.services__content}>
				<div className={styles.services__content_logo}>
					<img src={Logo.src} alt="Logo" />
				</div>
				<h1 className="text-primary-red">Список отзывов</h1>
				<div className={styles.services__content_cards}>
					<div className={styles.services__content_card}>
						{reviews.map((review) => (
							<div className={`${styles.card} mt-12`}>
								<ReviewCard
									key={review.id}
									date={review.date}
									text={review.text}
									name={review.name}
									rating={review.rating}
								/>

								<Buttons buttonType="filled" text="Удалить" margin="mt-10" />
								<Buttons buttonType="filled" text="Редактировать" margin="mt-5" />
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="reviews" text="Назад" margin="mt-16" />
			</div>
		</main>
	)
}
