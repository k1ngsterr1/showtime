import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { ServiceCard } from '@features/AdminFeatures/AdminServices/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'
import fedora from '@assets/logo/fedora.svg'

export const Services = () => {
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
								<h1 className={styles.client__main__functional__header_heading}>Услуги</h1>
								<ParagraphReact
									text="Заполните все поля формы чтобы добавить новую услугу"
									paragraphType="white"
									margin="mt-2"
								/>
							</div>
							<div className={styles.client__main__functional__services}>
								<ServiceCard number="01" />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
