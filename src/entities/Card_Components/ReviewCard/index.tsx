import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useUpdateReview } from '@shared/lib/hooks/Admin/Update/useUpdatedReview';
import { Input } from '@shared/ui/Inputs/DefaultInput/index';
import { TextArea } from '@shared/ui/TexrArea';
import CalendarComponent from '@features/Calendar/reviewcalendar';
import { StarRating } from '@shared/ui/StarRating/index';
import RounderHat from '@shared/ui/Icons/RounderHat';
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index';
import Fedora from '@assets/logo/fedora.svg'


import styles from './styles.module.scss';

export interface Props {
    text: string;
    date: string;
    name: string;
    rating: number;
    reviewId: number;
    editing: boolean;
}

export const ReviewCard: React.FC<Props> = ({ text, date, name, rating, reviewId, editing: initialEditing }) => {
    const [editing, setEditing] = useState(initialEditing);
    const [reviewName, setReviewName] = useState(name);
    const [reviewText, setReviewText] = useState(text);
    const [ratingReview, setRating] = useState<number | null>(rating);
    const [selectedDate, setSelectedDate] = useState<string>(date);
    const { updateReview } = useUpdateReview();

    const handleUpdate = async () => {
        if (reviewName && reviewText && ratingReview !== null && selectedDate) {
            console.log(rating);
            const formData = new FormData();
            formData.append('name', reviewName);
            formData.append('text', reviewText);
            formData.append('ratingReview', rating.toString());
            formData.append('date', selectedDate);
            formData.append('reviewId', reviewId.toString());

            await updateReview(formData);
            setEditing(false); 
        } else {
            console.log('All fields including rating are required');
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className={styles.review}>
                {editing ? (
                    <>
                    <div className={styles.card}>
					<CalendarComponent marginClass="mt-3" onDateChange={setSelectedDate} />
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
						<StarRating onRatingChange={(ratingReview) => setRating(ratingReview)} />
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
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-start p-4">
                            <span className="font-killbill text-lg">{selectedDate}</span>
                            <div className="flex items-center gap-5 pt-2">
                                <RounderHat />
                                <span>{reviewName}</span>
                            </div>
                            <div>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        className={index < (ratingReview ?? 0) ? styles.starActive : styles.starInactive}
                                    />
                                ))}
                            </div>
                            <div className={styles.review__text}>
                                <p className={`${'p-2 text-sm text-primary-dark'} ${styles.paragraph}`}>{reviewText}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {editing ? (
                <Buttons buttonType="filled" text="Сохранить" margin="mt-10" onClick={handleUpdate} />
            ) : (
                <Buttons buttonType="filled" text="Редактировать" margin="mt-10" onClick={() => setEditing(true)} />
            )}
        </div>
    );
};
