import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { ServiceCard } from '@entities/AdminEntities/AdminServicesCard'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import '@shared/styles/global.scss'
import styles from '../Team/styles.module.scss'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import fedora from '@assets/logo/fedora.svg'

export const Vacancie = () => {
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
								<h1 className={styles.client__main__functional__header_heading}>Вакансии</h1>
								<ParagraphReact
									text="Заполните все поля формы чтобы добавить новую вакансию"
									paragraphType="white"
									margin="mt-2"
								/>
							</div>
							<div className={styles.client__main__functional__vacancies}>
								<ServiceCard number="01" placeholder="Кого ищем" href="/admin/vacancies-list" />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
