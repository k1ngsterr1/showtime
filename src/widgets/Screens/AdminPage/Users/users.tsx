import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import AddButton from '@shared/ui/AddButton'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'
import UsersCard from '@entities/AdminEntities/AdminUsersCard/index'

import '@shared/styles/global.scss'

import styles from '../Team/styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'
import ShowMan from '@assets/ShowMans/showman.webp'

export const Users = () => {
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
				<div className={styles.client__main__functional}>
					<div className={styles.client__main__functional__header_service}>
						<h1 className={styles.client__main__functional__header_heading}>Пользователи</h1>
					</div>
					<div className={styles.client__main__functional__users}>
						<UsersCard photo={ShowMan} name="Erlan Erlanov" />
						<div className={styles.client__main__functional__buttons}>
							<AddButton buttonType="filled" text="Подтвердить" />
							<Button buttonType="users" text="Отклонить" />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
