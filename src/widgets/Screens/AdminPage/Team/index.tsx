import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AddButton from '../../../../shared/ui/AddButton/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import AdminTeam from '@features/AdminFeatures/AdminTeam/index'
import { users } from '@features/AdminFeatures/AdminTeam/index'
import { useState } from 'react'
import { AddPopup } from '@features/Popup_Components/AddTeamPopup/index'

import '@shared/styles/global.scss'

import styles from './styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'

export const Team = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)

	const handleClick = () => {
		setPopupOpen(true)
	}

	const handleClose = () => {
		setPopupOpen(false)
	}
	return (
		<main className={styles.client}>
			<div className={styles.client__left}>
				<AdminPanel adminpanel={adminpanel} />
			</div>
			<div className={styles.client__main}>
				<AdminHeader name="Bafomet Nurmukhamed" position="God" photo={Oleg} />
				<div className={styles.client__main__functional}>
					<div className={styles.client__main__functional__header}>
						<h1 className={styles.client__main__functional__header_heading}>
							Управление сотрудниками
						</h1>
						<AddButton buttonType="filled" text="Добавить" onClick={handleClick} />
						{isPopupOpen && <AddPopup onClick={handleClose} popupState />}
					</div>
					<div className={styles.client__main__functional__teammates}>
						<AdminTeam users={users} />
					</div>
				</div>
			</div>
		</main>
	)
}
