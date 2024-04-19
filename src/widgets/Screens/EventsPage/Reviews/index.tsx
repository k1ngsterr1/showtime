import React from 'react';
import SwiperReview from '@features/Swiper_Components/Swiper';
import { reviews } from '@shared/lib/content/reviewContent';
import Paragraph from '@shared/ui/ParagraphReact';
import { ReviewCard } from '@entities/Card_Components/ReviewCard/index'
import styles from './styles.module.scss';
import '@shared/styles/global.scss';
import { useGetReviews } from '@shared/lib/hooks/Admin/Get/useGetReviews'
import { useState } from'react';
import { useEffect } from'react';



const ReviewSection: React.FC = () => {
    const [reviews, setReviews] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getReviews } = useGetReviews()

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
        <>
            <section className={`${styles.bgPrimaryDark} ${styles.container}`}>
                <div className="m-auto mb-16 w-[86.6%]">
                    <div className="mt-16 flex items-center justify-evenly gap-10">
                        <SwiperReview />
                    </div>
                </div>
            </section>
            <section className={`${styles.bgPrimaryDark} ${styles.container_mob} bg-primary-dark`}>
                <div className="mb-10 flex flex-col items-center ">
                    <h3 className="text-primary-red">Отзывы</h3>
                    <Paragraph
                        align="text-center"
                        margin="mt-4"
                        paragraphType="white"
                        width="75%"
                        text="Мы ценим каждого участника нашего сообщества и стремимся создать лучший опыт для всех любителей игры Мафия. Ваши отзывы и предложения помогают нам улучшать наш сайт, игры и мероприятия, делая их более интересными, увлекательными и доступными для каждого."
                    />
                    <div className="mt-8 flex flex-col items-center gap-10">
                        {reviews.map((review, index) => (
                            <div key={index} className="flex">
                                <ReviewCard
                                    date={review.date}
                                    text={review.text}
                                    name={review.name}
                                    rating={review.rating}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReviewSection;