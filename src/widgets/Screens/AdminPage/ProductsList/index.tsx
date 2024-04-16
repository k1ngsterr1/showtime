import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { ProductCard } from '@entities/Card_Components/ProductsCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDeleteProduct } from '@shared/lib/hooks/Admin/Delete/useDeleteProduct'
import { useGetProducts } from '@shared/lib/hooks/Admin/Get/useGetProducts'
import { useUserData } from '@shared/lib/hooks/useGetUserData'

import Logo from '@assets/logo/showtime_logo.svg'

import styles from '../ServicesList/styles.module.scss'
import '@shared/styles/global.scss'
import { AdminErrorScreen } from '@widgets/Screens/AdminErrorScreen'

export const ProductsList = () => {
	const userData = useUserData()

	const [products, setProducts] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getProducts } = useGetProducts()
	const { deleteProduct } = useDeleteProduct()

	useEffect(() => {
		setIsLoading(true)
		getProducts()
			.then((data) => {
				if (Array.isArray(data)) {
					setProducts(data)
				} else {
					console.error('Data is not an array:', data)

					setProducts([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleDeleteProduct = (productId: string) => {
		deleteProduct({ productId: productId })
			.then(() => {
				getProducts()
					.then((data) => {
						if (Array.isArray(data)) {
							setProducts(data)
						} else {
							console.error('Data is not an array:', data)
							setProducts([])
						}
					})
					.catch((error) => {
						console.error('Failed to fetch showmans:', error)
					})
			})
			.catch((error) => {
				console.error('Failed to delete showman:', error)
			})
	}

	return (
		<main className={styles.services}>
			{userData?.role !== 'admin' ? (
				<>
					<AdminErrorScreen />
				</>
			) : (
				<>
					<div className={styles.services__content}>
						<div className={styles.services__content_logo}>
							<img src={Logo.src} alt="Logo" />
						</div>
						<h1 className="text-primary-red">Список продуктов</h1>
						<div className={styles.services__content_cards}>
							<div className={styles.services__content_card}>
								{products.map((product) => (
									<div className={`${styles.card} mt-12`} key={product.id}>
										<ProductCard
											url={product.url}
											name={product.name}
											description={product.description}
											price={product.price}
										/>
										<Buttons buttonType="filled" text="Редактировать" margin="mt-5" />
										<Buttons
											buttonType="filled"
											text="Удалить"
											margin="mt-10"
											onClick={() => handleDeleteProduct(product.id)}
										/>
									</div>
								))}
							</div>
						</div>
						<LinkButton buttonType="filled" href="products" text="Назад" margin="mt-16" />
					</div>
				</>
			)}
		</main>
	)
}
