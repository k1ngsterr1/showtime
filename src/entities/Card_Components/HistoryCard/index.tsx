import React from 'react'
import styles from './styles.module.scss'

interface Props {
	paragraph: string
	data: string
	name: string
}

const ReviewCard: React.FC<Props> = ({ data, name, paragraph }) => (
	<div className={styles.review_card}>
		<div className="flex gap-6 pt-2">{/* <span className={styles.name}>{name}</span> */}</div>
		{/* <span className={styles.data}>{data}</span> */}
		<div className="flex w-full items-center justify-center  pt-4">
			<p
				className={`${'mt-4 w-full overflow-hidden text-center text-5xl text-primary-dark'} ${styles.paragraph}`}
			>
				Скоро
			</p>
		</div>
	</div>
)

export default ReviewCard
