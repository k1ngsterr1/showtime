import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { ServiceCard } from '@entities/AdminEntities/AdminServicesCard/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import Paragraph from '@shared/ui/Paragraph/index.astro'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'

export const Services = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
				<div className={styles.client__main__functional}>
					<div className={styles.client__main__functional__header_service}>
						<h1 className={styles.client__main__functional__header_heading}>Услуги</h1>
						<Paragraph
							text="Заполните все поля формы чтобы добавить новый отзыв"
							paragraphType="white"
						/>
					</div>
					<div className={styles.client__main__functional__services}>
						<ServiceCard number="01" href="serviceslist" />
					</div>
				</div>
			</div>
		</main>
	)
}
