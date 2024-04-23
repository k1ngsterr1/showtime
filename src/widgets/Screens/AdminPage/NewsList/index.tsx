import { useState } from 'react'
import { useEffect } from 'react'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import PhotoCard from '@entities/Card_Components/PhotoCard/index'
import { useGetNews } from '@shared/lib/hooks/Admin/Get/useGetNews'
import { useDeleteNews } from '@shared/lib/hooks/Admin/Delete/useDeleteNews'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import Logo from '@assets/logo/showtime_logo.svg'
import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'

const NewsList = () => {
	const userData = useUserData()
	const [news, setNews] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getNews } = useGetNews()
	const { deleteNews } = useDeleteNews()

	useEffect(() => {
		setIsLoading(true)
		getNews()
			.then((data) => {
				if (Array.isArray(data)) {
					setNews(data)
				} else {
					console.error('Data is not an array:', data)

					setNews([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteNews = (newsId: string) => {
		deleteNews({ newsId: newsId })
			.then(() => {
				getNews()
					.then((data) => {
						if (Array.isArray(data)) {
							setNews(data)
						} else {
							console.error('Data is not an array:', data)
							setNews([])
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
			{userData?.role !== 'admin' ? (
				<>
					<AdminErrorScreen />
				</>
			) : (
				<>
					{' '}
					<div className={styles.services__content}>
						<div className={styles.services__content_logo}>
							<img src={Logo.src} alt="Logo" />
						</div>
						<h1 className="text-primary-red">Список новостей</h1>
						<div className={styles.services__content_cards}>
							<div className={styles.services__content_card}>
								{news.map((newsData) => (
									<div key={newsData.id} className={`${styles.card} mt-12`}>
										<PhotoCard
											newsId={newsData.id}
											date={newsData.date}
											url={newsData.url}
											heading={newsData.heading}
											description={newsData.description}
										/>
										<Buttons
											buttonType="filled"
											text="Удалить"
											margin="mt-5"
											onClick={() => handleDeleteNews(newsData.id)}
										/>
									</div>
								))}
							</div>
						</div>
						<LinkButton buttonType="filled" href="/admin/news" text="Назад" margin="mt-16" />
					</div>
				</>
			)}
		</main>
	)
}

export default NewsList
