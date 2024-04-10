import React, { useEffect, useState } from 'react'
import { ShowMansCard } from '@entities/Card_Components/ShowMansCard/index'
import { useGetShowmans } from '@shared/lib/hooks/Admin/Get/useGetShowmans'
import { useDeleteShowman } from '@shared/lib/hooks/Admin/Delete/useDeleteShowman'
import { useUpdateShowman } from '@shared/lib/hooks/Admin/Update/useUpdateShowman'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { Loader } from '@shared/ui/Loader'

import Logo from '@assets/logo/showtime_logo.svg'
import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'

export const ShowmansList = () => {
	const [editState, setEditState] = useState<Record<string, boolean>>({})
	const toggleEdit = (id: string) => {
		setEditState((prevState) => ({
			...prevState,
			[id]: !prevState[id]
		}))
	}

	const [showmans, setShowmans] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getShowmans } = useGetShowmans()
	const { deleteShowman } = useDeleteShowman()
	const { updateShowman } = useUpdateShowman()

	useEffect(() => {
		setIsLoading(true)
		getShowmans()
			.then((data) => {
				if (Array.isArray(data)) {
					setShowmans(data)
				} else {
					console.error('Data is not an array:', data)

					setShowmans([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteShowman = (showmanId: string) => {
		deleteShowman({ showmanId: showmanId })
			.then(() => {
				getShowmans()
					.then((data) => {
						if (Array.isArray(data)) {
							setShowmans(data)
						} else {
							console.error('Data is not an array:', data)
							setShowmans([])
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
				<h1 className="text-primary-red">Ведущие</h1>
				<div className={styles.services__content_cards}>
					{isLoading ? (
						<div className="flex items-center justify-center">
							<Loader />
						</div>
					) : (
						<div className={`${styles.services__content_card} flex flex-wrap gap-12`}>
							{showmans.map((showman) => (
								<div key={showman.id} className={`${styles.card} mt-12`}>
									<ShowMansCard
										url={showman.url}
										name={showman.name}
										text={showman.text}
										editing={editState[showman.id]}
									/>
									<Buttons
										buttonType="filled"
										text="Редактировать"
										margin="mt-8"
										onClick={() => toggleEdit(showman.id)}
									/>
									<Buttons
										buttonType="filled"
										text="Удалить"
										margin="mt-4"
										onClick={() => handleDeleteShowman(showman.id)}
									/>
									<Buttons buttonType="filled" text="Сохранить" margin="mt-4" />
								</div>
							))}
						</div>
					)}
				</div>
				<LinkButton buttonType="filled" href="showmans" text="Назад" margin="mt-16" />
			</div>
		</main>
	)
}
