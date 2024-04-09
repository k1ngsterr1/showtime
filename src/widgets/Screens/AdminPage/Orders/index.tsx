import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { AdminTableService } from '@entities/AdminEntities/AdminTableService/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import { services } from '@shared/lib/content/orderContent'

import styles from '../Team/styles.module.scss'
import '@shared/styles/global.scss'

import Oleg from '@assets/Admin/oleg.webp'

export const Orders = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
				<div className={styles.client__main__functional}>
					<div className={styles.client__main__functional__header}>
						<h1 className={styles.client__main__functional__header_heading}>Заказы</h1>
					</div>
					<div className={styles.client__main__functional__orders}>
						<AdminTableService />
					</div>
				</div>
			</div>
		</main>
	)
}
