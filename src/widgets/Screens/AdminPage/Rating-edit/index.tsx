import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import { useUserData } from '@shared/lib/hooks/useGetUserData'
import { AdminRating } from '@features/AdminRating/edit'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import fedora from '@assets/logo/fedora.svg'
import { ErrorScreen } from '@widgets/Screens/Error'
import { useEffect } from 'react'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'

export const EditRating = () => {
	const userData = useUserData()

	return (
		<main className={styles.client}>
			{userData?.role !== 'admin' ? (
				<>
					<AdminErrorScreen />
				</>
			) : (
				<>
					{' '}
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
								<h1 className={styles.client__main__functional__header_heading}>Редактирование рейтинга</h1>
								<ParagraphReact
									text="Заполните все поля, чтобы редактировать рейтинг"
									paragraphType="white"
									margin="mt-2 mr-8"
								/>
							</div>
							<div className={styles.client__main__functional__news}>
								<AdminRating />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
