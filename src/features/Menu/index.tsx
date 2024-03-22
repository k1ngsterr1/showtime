import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { UserTab } from '@entities/User_Components/UserTab'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchBar } from '@features/SearchBar'
import { Line } from '@shared/ui/Line'
import { links, links_second } from '@shared/lib/content/menuLinks'
import { useCustomMenu } from '@shared/lib/hooks/useCustomMenu'
import { useUserData } from '@shared/lib/hooks/useGetUserData'
import { logOut } from '@shared/lib/hooks/useLogout'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import Logo from '@shared/ui/Icons/Logo'

import LogoMob from '@assets/logo/menu_revolver.svg'
import ShowMob from '@assets/logo/showtime_logo.svg'
import styles from './styles.module.scss'

export const Menu = () => {
	const { onClose } = useCustomMenu()
	const userData = useUserData()

	return (
		<>
			<aside className={styles.menu} id="menu">
				<Line position="absolute left-0 right-0 ml-auto mr-auto" />
				<div className={styles.menu__container}>
					<div className="absolute left-0 top-16 overflow-hidden">
						<Logo />
					</div>
					<div
						className="absolute right-0 top-16 !z-[1000000000] overflow-hidden"
						onClick={onClose}
					>
						<MenuButton />
					</div>
					<div className={styles.menu__container__inner}>
						<div className="flex flex-col items-start overflow-hidden">
							{links.map((link, index) => (
								<a
									key={index}
									href={link.path}
									className={`${styles.menu__container__inner__link} ${index > 0 ? 'mt-2' : ''}`}
								>
									{link.name}
								</a>
							))}
							<div className="mt-8 flex items-center gap-8 ">
								<FontAwesomeIcon
									icon={faInstagram}
									className={styles.menu__container__inner__icon}
								/>
								<FontAwesomeIcon icon={faTiktok} className={styles.menu__container__inner__icon} />
							</div>
							<div className="flex flex-col items-start overflow-hidden">
								<a
									href="tel:+77017812956"
									className={`${styles.menu__container__inner__contact} mt-8`}
								>
									+7 747 179 49 39
								</a>
								<span className={`${styles.menu__container__inner__contact} mt-4`}>
									Байзакова 280
								</span>
							</div>
						</div>
						<div className="flex w-[45%] flex-col items-start  overflow-hidden">
							{links_second.map((link, index) => (
								<a
									key={index}
									href={link.path}
									className={`${styles.menu__container__inner__link} ${index > 0 ? 'mt-2' : ''}`}
								>
									{link.name}
								</a>
							))}
							{userData && (
								<div className="flex items-center gap-8">
									<UserTab name={userData.username} margin="mt-8" />
									<FontAwesomeIcon
										onClick={logOut}
										icon={faRightFromBracket}
										className="mt-8 text-4xl text-primary-red transition-all hover:text-primary-light"
									/>
								</div>
							)}
							{/* <SearchBar /> */}
						</div>
					</div>
				</div>
			</aside>
			<aside className={styles.menu_mob} id="menu">
				<div className={styles.menu_mob__container}>
					<div className={`${'absolute left-5 top-8 overflow-hidden'} ${styles.show}`}>
						<img src={ShowMob.src} alt="" />
					</div>
					<div
						className={`${'absolute right-5 top-8 overflow-hidden'} ${styles.logo}`}
						onClick={onClose}
					>
						<img src={LogoMob.src} alt="" />
					</div>
					<div className={styles.menu_mob__container__inner}>
						<div className={styles.menu_mob__container__inner__items}>
							{links.map((link, index) => (
								<a
									key={index}
									href={link.path}
									className={`${styles.menu_mob__container__inner__link} ${index > 0 ? 'mt-2' : ''}`}
								>
									{link.name}
								</a>
							))}
						</div>
						<div className="mt-16 flex flex-col items-end ">
							{links_second.map((link, index) => (
								<a
									key={index}
									href={link.path}
									className={`${styles.menu_mob__container__inner__link} ${index > 0 ? 'mt-2' : ''}`}
								>
									{link.name}
								</a>
							))}
						</div>
					</div>
					<div className="flex flex-col items-center">
						<UserTab name="Руслан Махматов" margin="mt-8" />
						<SearchBar />

						<div className="mb-4 mt-8 flex items-center gap-8">
							<FontAwesomeIcon
								icon={faInstagram}
								className={styles.menu_mob__container__inner__icon}
							/>
							<FontAwesomeIcon
								icon={faTiktok}
								className={styles.menu_mob__container__inner__icon}
							/>
						</div>
						<a
							href="tel:+77017812956"
							className={`${styles.menu_mob__container__inner__contact} mt-0`}
						>
							+7 701 781 29 56
						</a>
						<span className={`${styles.menu_mob__container__inner__contact} mt-4`}>
							ул.Маметова 54, 4 этаж
						</span>
						<span className={`${styles.menu_mob__container__inner__contact} mt-4`}>
							Время работы: с 08:00 до 17:00 <br /> Выходные: суббота, воскресенье
						</span>
					</div>
				</div>
			</aside>
		</>
	)
}
