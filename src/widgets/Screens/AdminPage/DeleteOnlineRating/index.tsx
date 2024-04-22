import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import { useUserData } from '@shared/lib/hooks/useGetUserData'
import fedora from '@assets/logo/fedora.svg'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'
import AdminDeleteRating from '@features/AdminFeatures/AdminDeleteRating'

import '@shared/styles/global.scss'
import styles from '../Team/styles.module.scss'
import { useDeleteOnlineRating } from '@shared/lib/hooks/Admin/Delete/useDeleteOnlineRating'
import AdminDeleteOnlineRating from '@features/AdminFeatures/AdminDeleteOnlineRating'

export const DeleteOnlineRating = () => {
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
							<div className={styles.client__main__functional__header_service}>
								<h1 className={styles.client__main__functional__header_heading}>
									Удаление онлайн рейтинга
								</h1>
							</div>
							<div className={styles.client__main__functional__showmans}>
								<AdminDeleteOnlineRating />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
