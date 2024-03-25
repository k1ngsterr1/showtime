import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { ReviewCard } from '@entities/Card_Components/ReviewCard'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'
import { reviews } from '@shared/lib/content/reviewContent'

export const ReviewsList = () => {
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
								<ReviewCard time={review.time} paragraph={review.paragraph} name={review.name} />
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
