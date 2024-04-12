import React from 'react'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import AdminUsers from '@entities/AdminEntities/AdminUsers' // Make sure this import matches the exported component

import styles from '../Team/styles.module.scss'
import '@shared/styles/global.scss'
import Oleg from '@assets/Admin/oleg.webp'

export const Users = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
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
		</main>
	)
}
