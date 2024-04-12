import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import PhotoUploadComponent from '@features/AdminFeatures/AdminShowMans/index'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'
import fedora from '@assets/logo/fedora.svg'

export const ShowMans = () => {
	const userData = useUserData()

	return (
		<main className={styles.client}>
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
						<h1 className={styles.client__main__functional__header_heading}>Ведущие</h1>
						<ParagraphReact
							text="Заполните все поля формы чтобы добавить нового ведущего"
							paragraphType="white"
							margin="mt-2"
						/>
					</div>
					<div className={styles.client__main__functional__showmans}>
						<PhotoUploadComponent />
					</div>
				</div>
			</div>
		</main>
	)
}
