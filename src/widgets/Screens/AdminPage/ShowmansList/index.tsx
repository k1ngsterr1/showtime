import ShowMansCard from '@entities/Card_Components/ShowMansCard/index'
import { showmans } from '@features/Swiper_Components/ShowMansSwiper/index'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'

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
						{showmans.map((showman) => (
							<div className={`${styles.card} mt-12`}>
								<ShowMansCard
									photo={showman.photo}
									name={showman.name}
									position={showman.position}
								/>
								<Buttons buttonType="filled" text="Редактировать" margin="mt-8" />
								<Buttons buttonType="filled" text="Удалить" margin="mt-4" />
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="showmans" text="Назад" margin="mt-16" />
			</div>
		</main>
	)
}
