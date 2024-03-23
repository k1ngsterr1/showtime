import { Card } from '@entities/AdminEntities/ServicesCard/card'
import { services } from '@shared/lib/content/servicesListContent'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'

export const VacanciesList = () => {
	return (
		<main className={styles.services}>
			<div className={styles.services__content}>
				<div className={styles.services__content_logo}>
					<img src={Logo.src} alt="Logo" />
				</div>
				<h1 className="text-primary-red">Вакансии</h1>
				<div className={styles.services__content_cards}>
					<div className={styles.services__content_card}>
						{services.map((service) => (
							<Card number={service.number} name={service.name} paragraph={service.paragraph} />
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="vacancies" text="Назад" margin="mt-8" />
			</div>
		</main>
	)
}
