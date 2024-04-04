import React from 'react'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import PhotoCard from '@entities/Card_Components/PhotoCard/index'
import { newsData } from '@shared/lib/content/articlesListContent'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'

export const ArticlesList = () => {
	return (
		<main className={styles.services}>
			<div className={styles.services__content}>
				<div className={styles.services__content_logo}>
					<img src={Logo.src} alt="Logo" />
				</div>
				<h1 className="text-primary-red">Список статей</h1>
				<div className={styles.services__content_cards}>
					<div className={styles.services__content_card}>
						{newsData.map((newsItem) => (
							<div className={`${styles.card} mt-12`}>
								<PhotoCard
									time={newsItem.time}
									img={newsItem.img}
									heading={newsItem.heading}
									paragraph={newsItem.paragraph}
								/>
								<Buttons buttonType="filled" text="Удалить" margin="mt-10" />
								<Buttons buttonType="filled" text="Редактировать" margin="mt-5" />
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="articles" text="Назад" margin="mt-16" />
			</div>
		</main>
	)
}
