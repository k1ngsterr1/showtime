import { AdminPanel } from '@features/AdminFeatures/AdminPanel/index'
import { adminpanel } from '@features/AdminFeatures/AdminPanel/index'
import AddButton from '../../../../shared/ui/AddButton/index'
import AdminHeader from '@features/AdminFeatures/AdminHeader/index'
import AdminTeam from '@features/AdminFeatures/AdminTeam/index'
import { useState } from 'react'
import { AddPopup } from '@features/Popup_Components/AddTeamPopup/index'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import '@shared/styles/global.scss'

import styles from './styles.module.scss'

import fedora from '@assets/logo/fedora.svg'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'

export const Team = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)
	const userData = useUserData()

	const handleClick = () => {
		setPopupOpen(true)
	}

	const handleClose = () => {
		setPopupOpen(false)
	}

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
							<div className={styles.client__main__functional__header}>
								<h1 className={styles.client__main__functional__header_heading}>
									Управление сотрудниками
								</h1>
								<AddButton buttonType="filled" text="Добавить" onClick={handleClick} />
								{isPopupOpen && <AddPopup onClick={handleClose} popupState />}
							</div>
							<div className={styles.client__main__functional__teammates}>
								<AdminTeam />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
	)
}
