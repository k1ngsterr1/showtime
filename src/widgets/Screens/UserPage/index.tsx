import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { UserProfile } from '@entities/User_Components/UserProfile'
import { UserStats } from '@entities/User_Components/UserStats'
import { HorizontalSeparator } from '@shared/ui/HorizontalSeparator'
import { MoneyTab } from '@entities/Tab_Components/MoneyTab'
import { useCustomMenu } from '@shared/lib/hooks/useCustomMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { UserAside } from '@features/UserAside'
import { useCustomShop } from '@shared/lib/hooks/useCustomShop'
import { useUserData } from '@shared/lib/hooks/useGetUserData'
import { useFetchUserData } from '@shared/lib/hooks/useFetchUserData'
import bgImage from '@assets/Main/mafia_shadow.webp'
import revolver from '@assets/logo/another_revolver.svg'

import styles from './styles.module.scss'
import { useEffect } from 'react'

export const UserScreen = () => {
	const { onOpen } = useCustomMenu()
	const userData = useUserData()
	const { onShopOpen } = useCustomShop()
	const { fetchedData } = useFetchUserData()

	const handleGoBack = () => {
		window.location.href = '/'
	}

	const handleGoEdit = () => {
		window.location.href = '/user-edit'
	}

	return (
		<>
			{fetchedData.isVerified !== true ? (
				<>
					<main className="flex h-full w-full items-center justify-center bg-primary-dark text-primary-red"></main>
				</>
			) : (
				<>
					{' '}
					<main className={styles.user_screen}>
						<div className="flex w-full flex-col">
							<div className={styles.user_screen__upper}>
								<div className="flex items-center gap-16">
									<img
										onClick={handleGoBack}
										src={revolver.src}
										className={`${styles.user_screen__upper__icon}`}
										alt="revolver"
									/>
									<h2 className={styles.user_screen__upper__heading}>Личный кабинет</h2>
								</div>
								<div className="flex items-center gap-8 overflow-hidden">
									<FontAwesomeIcon
										icon={faCartPlus}
										onClick={onShopOpen}
										className={styles.user_screen__upper__cart_icon}
									/>
									<div onClick={onOpen} className="overflow-hidden">
										<MenuButton />
									</div>
									<FontAwesomeIcon
										icon={faEdit}
										onClick={handleGoEdit}
										className={styles.user_screen__upper__cart_icon}
									/>
								</div>
							</div>
						</div>
						<section className={styles.user_screen__container}>
							<div className="sticky top-0 z-10 flex w-[30%] flex-col ">
								<UserProfile name={userData?.username} rank={userData?.rank} />
								<MoneyTab money={0} />
								<HorizontalSeparator />
								<UserStats />
							</div>
							<UserAside />
						</section>
						<img src={bgImage.src} className={styles.user_screen__bg} alt="mafia_bg_image" />
					</main>
					<main className={styles.user_mob_screen}>
						<div className="m-auto mt-8 w-[90%]">
							<div className="flex w-full flex-col">
								<div className={styles.user_mob_screen__upper}>
									<div className="m-auto flex items-center justify-between ">
										<img
											onClick={handleGoBack}
											src={revolver.src}
											className={`${styles.user_mob_screen__upper__icon}`}
											alt="revolver"
										/>
										<div className="flex items-center gap-8 overflow-hidden">
											<FontAwesomeIcon
												icon={faCartPlus}
												onClick={onShopOpen}
												className={styles.user_mob_screen__upper__cart_icon}
											/>
											<div onClick={onOpen} className="overflow-hidden">
												<MenuButton />
											</div>
											<FontAwesomeIcon
												icon={faEdit}
												onClick={handleGoEdit}
												className={styles.user_mob_screen__upper__cart_icon}
											/>
										</div>
									</div>
									<h2 className={styles.user_mob_screen__upper__heading}>Личный кабинет</h2>
								</div>
							</div>
							<section className={styles.user_mob_screen__container}>
								<div className="sticky top-0 flex flex-col ">
									<UserProfile name={userData?.username} rank={userData?.rank} />
									<MoneyTab money={userData?.balance} />
								</div>
								<div className="mt-8">
									<UserAside />
								</div>
							</section>
						</div>
					</main>
				</>
			)}
		</>
	)
}
