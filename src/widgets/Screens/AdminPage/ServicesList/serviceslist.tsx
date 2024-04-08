import Card from '@entities/AdminEntities/ServicesCard/card'
import { useState } from 'react'
import { useEffect } from 'react'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { useGetServices } from '@shared/lib/hooks/Admin/Get/useGetServices'
import { useDeleteService } from '@shared/lib/hooks/Admin/Delete/useDeleteService'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from './styles.module.scss'
import '@shared/styles/global.scss'

export const ServicesList = () => {
	const [services, setServices] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getServices } = useGetServices()
	const { deleteService } = useDeleteService()

	useEffect(() => {
		setIsLoading(true)
		getServices()
			.then((data) => {
				if (Array.isArray(data)) {
					setServices(data)
				} else {
					console.error('Data is not an array:', data)

					setServices([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteService = (serviceId: string) => {
		deleteService({ serviceId: serviceId })
			.then(() => {
				getServices()
					.then((data) => {
						if (Array.isArray(data)) {
							setServices(data)
						} else {
							console.error('Data is not an array:', data)
							setServices([])
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
				<h1 className="text-primary-red">Список услуг</h1>
				<div className={styles.services__content_cards}>
					<div
						className={`${styles.services__content_cards} flex flex-row flex-wrap items-center justify-center gap-10`}
					>
						{services.map((service) => (
							<div key={service.id} className={`${styles.services__content_card} flex flex-col`}>
								<Card number={service.number} service={service.service} text={service.text} />
								<Buttons buttonType="filled" text="Редактировать" margin="mt-8" />
								<Buttons
									buttonType="filled"
									text="Удалить"
									margin="mt-5"
									onClick={() => handleDeleteService(service.id)}
								/>
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="services" text="Назад" margin="mt-8" />
			</div>
		</main>
	)
}
