import Logo from '@assets/logo/showtime_logo.svg'
import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { LanguageButton } from '@shared/ui/LanguageButton'
import { useCustomMenu } from '@shared/lib/hooks/useCustomMenu'

import styles from './styles.module.scss'
import LinkText from '@shared/ui/LinkText'

import LogoMob from '@assets/logo/menu_revolver.svg'
import ShowMob from '@assets/logo/showtime_logo.svg'

export const Header = () => {
	const { onOpen } = useCustomMenu()
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__content}>
					<a href="/">
						<img src={Logo.src} alt="Logo" className={styles.header__logo} />
					</a>
					<nav className={styles.header__content__links}>
						<LinkText text="О нас" to="about" href="/" />
						<LinkText text="Events" to="services" href="" />
						<LinkText text="Расписание" to="timetable" href="/" />
						<LinkText text="Правила" to="rulesgame" href="/" />
						<LinkText text="Рейтинг" to="rating" href="/" />
						<LinkText text="Контакты" to="contacts" href="" />
						<a href="/game" className={styles.header__content__links_link}>
							Играть
						</a>
					</nav>
					<div className="flex items-center justify-center gap-8 overflow-hidden">
						<LanguageButton />
						<span className="overflow-hidden" onClick={onOpen}>
							<MenuButton />
						</span>
					</div>
				</div>
			</header>
			<header className={styles.header_mob}>
				<div className="mt-6 flex w-full items-center justify-between">
					<a href="/">
						<img src={ShowMob.src} alt="" className={styles.show} />
					</a>
					<span className="overflow-hidden" onClick={onOpen}>
						<img src={LogoMob.src} alt="logo" onClick={onOpen} className={styles.logo} />
					</span>
				</div>
			</header>
		</>
	)
}
