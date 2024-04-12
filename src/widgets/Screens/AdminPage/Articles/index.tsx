import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import { useUserData } from '@shared/lib/hooks/useGetUserData'
import { AdminArticles } from '@features/AdminArticles/index'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import fedora from '@assets/logo/fedora.svg'

export const Articles = () => {
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
						<h1 className={styles.client__main__functional__header_heading}>Статьи</h1>
						<ParagraphReact
							text="Заполните все поля формы чтобы добавить новую статью"
							paragraphType="white"
							margin="mt-2"
						/>
					</div>
					<div className={styles.client__main__functional__news}>
						<AdminArticles />
					</div>
				</div>
			</div>
		</main>
	)
}
