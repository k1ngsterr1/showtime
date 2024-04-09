import { useState } from 'react'
import { useEffect } from 'react'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import ArticleCard from '@entities/Card_Components/ArticleCard/index'
import { useGetArticles } from '@shared/lib/hooks/Admin/Get/useGetArticles'
import { useDeleteArticle } from '@shared/lib/hooks/Admin/Delete/useDeleteArticle'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'
import { idText } from 'typescript'

export const ArticlesList = () => {
	const [articles, setArticles] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getArticles } = useGetArticles()
	const { deleteArticle } = useDeleteArticle()

	useEffect(() => {
		setIsLoading(true)
		getArticles()
			.then((data) => {
				if (Array.isArray(data)) {
					setArticles(data)
				} else {
					console.error('Data is not an array:', data)

					setArticles([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteArticle = (articleId: string) => {
		deleteArticle({ articleId: articleId })
			.then(() => {
				getArticles()
					.then((data) => {
						if (Array.isArray(data)) {
							setArticles(data)
						} else {
							console.error('Data is not an array:', data)
							setArticles([])
						}
					})
					.catch((error) => {
						console.error('Failed to fetch showmans:', error)
					})
			})
			.catch((error) => {
				console.error('Failed to delete showman:', error)
			})
	}

	return (
		<main className={styles.services}>
			<div className={styles.services__content}>
				<div className={styles.services__content_logo}>
					<img src={Logo.src} alt="Logo" />
				</div>
				<h1 className="text-primary-red">Список статей</h1>
				<div className={styles.services__content_cards}>
					<div className={styles.services__content_card}>
						{articles.map((article) => (
							<div className={`${styles.card} mt-12`}>
								<ArticleCard
									key={article.id}
									date={article.date}
									image={article.image}
									heading={article.heading}
									description={article.description}
								/>
								<Buttons buttonType="filled" text="Редактировать" margin="mt-10" />
								<Buttons
									buttonType="filled"
									text="Удалить"
									margin="mt-5"
									onClick={() => handleDeleteArticle(article.id)}
								/>
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="articles" text="Назад" margin="mt-16" />
			</div>
		</main>
	)
}
