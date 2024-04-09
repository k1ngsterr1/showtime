import VacancyCard from '@entities/AdminEntities/VacancyCard/index'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetVacancies } from '@shared/lib/hooks/Admin/Get/useGetVacancies'
import { useDeleteVacancy } from '@shared/lib/hooks/Admin/Delete/useDeleteVacancy'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'

export const VacanciesList = () => {
	const [vacancies, setVacancies] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getVacancies } = useGetVacancies()
	const { deleteVacancy } = useDeleteVacancy()

	useEffect(() => {
		setIsLoading(true)
		getVacancies()
			.then((data) => {
				if (Array.isArray(data)) {
					setVacancies(data)
				} else {
					console.error('Data is not an array:', data)

					setVacancies([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteVacancy = (vacancyId: string) => {
		deleteVacancy({ vacancyId: vacancyId })
			.then(() => {
				getVacancies()
					.then((data) => {
						if (Array.isArray(data)) {
							setVacancies(data)
						} else {
							console.error('Data is not an array:', data)
							setVacancies([])
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
				<h1 className="text-primary-red">Вакансии</h1>
				<div className={styles.services__content_cards}>
					<div className={`${styles.services__content_card} flex flex-wrap gap-10`}>
						{vacancies.map((vacancy) => (
							<div key={vacancy.number}>
								<VacancyCard
									number={vacancy.number}
									position={vacancy.position}
									text={vacancy.text}
								/>
								<div className="mt-10 flex flex-col items-center justify-center">
									<Buttons buttonType="filled" text="Редактировать" margin="mt-10" />
									<Buttons
										buttonType="filled"
										text="Удалить"
										margin="mt-5"
										onClick={() => handleDeleteVacancy(vacancy.id)}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="vacancies" text="Назад" margin="mt-8" />
			</div>
		</main>
	)
}

export default VacanciesList
