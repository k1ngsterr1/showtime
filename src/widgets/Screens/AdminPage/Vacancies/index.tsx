import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { ServiceCard } from '@entities/AdminEntities/AdminServicesCard'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'

export const Vacancie = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
				<div className={styles.client__main__functional}>
					<div className={styles.client__main__functional__header_service}>
						<h1 className={styles.client__main__functional__header_heading}>Вакансии</h1>
						<ParagraphReact
							text="Заполните все поля формы чтобы добавить новую вакансию"
							paragraphType="white"
							margin="mt-2"
						/>
					</div>
					<div className={styles.client__main__functional__vacancies}>
						<ServiceCard number="01" placeholder="Кого ищем" href="vacancieslist" />
					</div>
				</div>
			</div>
		</main>
	)
}
