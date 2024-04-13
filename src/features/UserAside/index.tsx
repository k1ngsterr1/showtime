import { NearestGameSwiper } from '@features/NearestGames'
import { nearGameCards } from '@shared/lib/content/gamesContent'
import { AchievementGallery } from '@features/Swiper_Components/AchievementGallery'
import { achievements } from '@shared/lib/content/achievementContent'

import styles from '@widgets/Screens/UserPage/styles.module.scss'

export const UserAside = () => {
	return (
		<>
			<section>
				<div className={styles.user_screen__column_container}>
					<div className={styles.user_screen__column_container__games}>
						<div className="flex w-full items-center justify-between">
							<span className={styles.user_screen__column_container__games__heading}>
								Ближайшие игры
							</span>
							<a className={styles.user_screen__column_container__games__link} href="/all">
								Подробнее
							</a>
						</div>
						<NearestGameSwiper />
					</div>
					{/* <div className={styles.user_screen__column_container__achievements}>
						<div className="flex w-full items-center justify-between">
							<span className={styles.user_screen__column_container__achievements__heading}>
								Достижения
							</span>
							<a className={styles.user_screen__column_container__achievements__link} href="/all">
								Подробнее
							</a>
						</div>
						<AchievementGallery achievements={achievements} />
					</div> */}
					{/* <div className={styles.user_screen__column_container__achievements}>
						<div className="flex w-full items-center justify-between">
							<span className={styles.user_screen__column_container__achievements__heading}>
								Друзья
							</span>
							<a className={styles.user_screen__column_container__achievements__link} href="/all">
								Все
							</a>
						</div>
					</div> */}
				</div>
			</section>
			<section>
				<div className={styles.user_mob_screen__column_container}>
					<div className={styles.user_mob_screen__column_container__games}>
						<div className="mb-16 flex w-full flex-col items-center">
							<span className={styles.user_screen__column_container__games__heading}>
								Ближайшие игры
							</span>
							<NearestGameSwiper />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
