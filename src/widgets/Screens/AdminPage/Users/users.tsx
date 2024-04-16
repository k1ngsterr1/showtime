import React from 'react'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import AdminUsers from '@entities/AdminEntities/AdminUsers'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import Oleg from '@assets/Admin/oleg.webp'
import fedora from '@assets/logo/fedora.svg'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'

export const Users = () => {
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
								<h1 className={styles.client__main__functional__header_heading}>Пользователи</h1>
							</div>
							<div className={styles.client__main__functional__users}>
								<ParagraphReact
									text="Подтвердите либо отклоните пользователя"
									paragraphType="white"
									margin="mb-12"
								/>
								<AdminUsers />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
