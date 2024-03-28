import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { NewsArticleCard } from '@features/AdminFeatures/AdminNewsArticles'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'

export const Articles = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
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
						<NewsArticleCard />
						<div className={styles.client__main__functional__buttons}>
							<AddButton buttonType="filled" text="Добавить" margin="mt-3" />
							<LinkButton
								buttonType="filled"
								href="articleslist"
								text="Смотреть все"
								margin="mt-3"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
