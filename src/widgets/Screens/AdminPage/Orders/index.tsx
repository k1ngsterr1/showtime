import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { AdminTableService } from '@entities/AdminEntities/AdminTableService/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import { services } from '@shared/lib/content/orderContent'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import styles from '../Team/styles.module.scss'
import '@shared/styles/global.scss'

import fedora from '@assets/logo/fedora.svg'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'

export const Orders = () => {
	const userData = useUserData()

	return (
		<main className={styles.client}>
			{userData?.role !== 'admin' ? (
				<>
					<AdminErrorScreen />
				</>
			) : (
				<>
					<div className={styles.client__left}>
						<AdminPanel adminpanel={adminpanel} />
					</div>
					<div className={styles.client__main}>
						{userData && (
							<>
								<AdminHeader name={userData.username} position={userData.role} photo={fedora} />
							</>
						)}
						<div className={styles.client__main__functional}>
							<div className={styles.client__main__functional__header}>
								<h1 className={styles.client__main__functional__header_heading}>Заказы</h1>
							</div>
							<div className={styles.client__main__functional__orders}>
								<AdminTableService />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
