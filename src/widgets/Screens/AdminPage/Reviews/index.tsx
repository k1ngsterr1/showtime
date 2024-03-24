import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import AdminProducts from '@features/AdminFeatures/AdminProducts/index'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'

export const Reviews = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
				<div className={styles.client__main__functional}>
					<div className={styles.client__main__functional__header_service}>
						<h1 className={styles.client__main__functional__header_heading}>Отзывы</h1>
						<ParagraphReact
							text="Заполните все поля формы чтобы добавить новый отзыв"
							paragraphType="white"
							margin="mt-2"
						/>
					</div>
					<div className={styles.client__main__functional__showmans}>
						<div className={styles.client__main__functional__buttons}>
							<AddButton buttonType="filled" text="Добавить" margin="mt-4" />
							<LinkButton
								buttonType="filled"
								href="reviewslist"
								text="Смотреть все"
								margin="mt-4"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
