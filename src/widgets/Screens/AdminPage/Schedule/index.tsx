import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import { ScheduleCard } from '@entities/AdminEntities/ScheduleCard/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import ParagraphReact from '@shared/ui/ParagraphReact/index'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'

export const Schedule = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
				<div className={styles.client__main__functional}>
					<div className={styles.client__main__functional__header_service}>
						<h1 className={styles.client__main__functional__header_heading}>Расписание</h1>
						<ParagraphReact
							text="Заполните все поля формы чтобы добавить новое расписание"
							paragraphType="white"
							margin="mt-2"
						/>
					</div>
					<div className={styles.client__main__functional__schedule}>
						<ScheduleCard time="Время" name="Название места" address="Адресс" href="schedulelist" />
						<AddButton buttonType="filled" text="Добавить" margin="mt-12" />
						<LinkButton buttonType="filled" href="schedulelist" text="Смотреть все" margin="mt-6" />
					</div>
				</div>
			</div>
		</main>
	)
}
