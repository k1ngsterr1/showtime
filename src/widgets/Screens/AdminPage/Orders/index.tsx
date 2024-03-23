import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { ServiceTable } from '@features/AdminFeatures/AdminTable/index'
import { services } from '@features/AdminFeatures/AdminTable/index'
import AddButton from '@shared/ui/AddButton/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

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
						<AddButton buttonType="filled" text="Добавить" />
					</div>
					<div className={styles.client__main__functional__orders}>
						<ServiceTable services={services} />
					</div>
				</div>
			</div>
		</main>
	)
}
