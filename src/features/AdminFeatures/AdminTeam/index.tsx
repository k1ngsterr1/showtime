import { useState } from 'react'
import { useEffect } from 'react'
import { AdminUserTab } from '../../../entities/AdminEntities/AdminUserTab/index'
import { useGetWorkers } from '@shared/lib/hooks/Admin/Get/useGetWorkers'
import { useDeleteWorker } from '@shared/lib/hooks/Admin/Delete/useDeleteWorker'
import { Loader } from '@shared/ui/Loader'

import styles from './styles.module.scss'

const TeamCard = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [workers, setWorkers] = useState<any[]>([])
	const { getWorkers } = useGetWorkers()
	const { deleteWorker } = useDeleteWorker()

	useEffect(() => {
		setIsLoading(true)
		getWorkers()
			.then((data) => {
				if (Array.isArray(data)) {
					setWorkers(data)
				} else {
					console.error('Data is not an array:', data)
					setWorkers([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch workers:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteShowman = (workerId: string) => {
		deleteWorker({ workerId: workerId })
			.then(() => {
				getWorkers()
					.then((data) => {
						if (Array.isArray(data)) {
							setWorkers(data)
						} else {
							console.error('Data is not an array:', data)
							setWorkers([])
						}
					})
					.catch((error) => {
						console.error('Failed to fetch workers:', error)
					})
			})
			.catch((error) => {
				console.error('Failed to delete worker:', error)
			})
	}

	return (
		<div className={styles.adminCard}>
			{isLoading ? (
				<div className="flex items-center justify-center">{/* <Loader /> */}</div>
			) : (
				workers.map((worker) => (
					<AdminUserTab
						userTabType="users"
						userPhotoType="users"
						userTextType="users"
						key={worker.id}
						email={worker.email}
						position={worker.position}
						url={worker.url}
						workerId={worker.id}
						onDelete={() => handleDeleteShowman(worker.id)}
					/>
				))
			)}
		</div>
	)
}

export default TeamCard
