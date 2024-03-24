import { ShowMansSwiper } from '@features/Swiper_Components/ShowMansSwiper/index'
import { showmans } from '@features/Swiper_Components/ShowMansSwiper/index'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'

export const ShowmansList = () => {
	return (
		<main className={styles.services}>
			<div className={styles.services__content}>
				<div className={styles.services__content_logo}>
					<img src={Logo.src} alt="Logo" />
				</div>
				<h1 className="text-primary-red">Ведущие</h1>
				<div className={styles.services__content_cards}>
					<div className={styles.services__content_card}>
						<ShowMansSwiper showmans={showmans} />
					</div>
				</div>
				<LinkButton buttonType="filled" href="showmans" text="Назад" margin="mt-8" />
			</div>
		</main>
	)
}
