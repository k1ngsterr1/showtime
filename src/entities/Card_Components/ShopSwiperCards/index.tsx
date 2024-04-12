import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

export interface IShopCard {
	heading: string
	photo: ImageMetadata
	desc: string
	price: string
}

export const ShowCard: React.FC<IShopCard> = ({ heading, desc, price, photo }) => {
	// State to manage item quantity
	const [quantity, setQuantity] = useState(0)

	// Function to increment quantity
	const incrementQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1)
	}

	// Function to decrement quantity
	const decrementQuantity = () => {
		setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1)) // Prevents quantity from going below 1
	}

	return (
		<div className={styles.card}>
			<img src={photo.src} className={styles.card__icon} alt="" />
			{/* <span className={styles.card__price}>{price}</span> */}
			<span className={styles.card__heading}>{heading}</span>
			<p className={styles.card__paragraph}>{desc}</p>
			<div className="mt-5 items-start justify-between">
				<button onClick={decrementQuantity} className="mr-2 text-2xl text-primary-red">
					<FontAwesomeIcon icon={faMinus} />
				</button>
				<span className="text-2xl text-primary-light">{quantity}</span>
				<button onClick={incrementQuantity} className="ml-2 text-2xl text-primary-red">
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</div>
	)
}
