import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { ProductCard } from '@entities/Card_Components/ProductsCard'

import Logo from '@assets/logo/showtime_logo.svg'
import photo from '@assets/About/shlyapa.webp'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'

export const products = [
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '15000 тг'
	},
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '7000 тг'
	},
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '7000 тг'
	},
	{
		photo: photo,
		heading: 'Шляпа мафиози',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: '7000 тг'
	}
]

export const ProductsList = () => {
	return (
		<main className={styles.services}>
			<div className={styles.services__content}>
				<div className={styles.services__content_logo}>
					<img src={Logo.src} alt="Logo" />
				</div>
				<h1 className="text-primary-red">Список продуктов</h1>
				<div className={styles.services__content_cards}>
					<div className={styles.services__content_card}>
						{products.map((product) => (
							<div className={`${styles.card} mt-12`}>
								<ProductCard
									photo={product.photo}
									heading={product.heading}
									paragraph={product.paragraph}
									price={product.price}
								/>
								<Buttons buttonType="filled" text="Удалить" margin="mt-10" />
								<Buttons buttonType="filled" text="Редактировать" margin="mt-5" />
							</div>
						))}
					</div>
				</div>
				<LinkButton buttonType="filled" href="products" text="Назад" margin="mt-16" />
			</div>
		</main>
	)
}
