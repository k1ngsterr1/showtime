import React from 'react'
import styles from './styles.module.scss'
import RounderHat from '@shared/ui/Icons/RounderHat'
import { Stars } from '@shared/ui/Icons/Stars'

export interface Props {
	paragraph: string
	time: string
	name: string
}

export const ReviewCard: React.FC<Props> = ({ time, name, paragraph }) => (
	<div className={styles.review_card}>
		<div className="flex flex-col items-start p-4">
			<span className="font-killbill text-lg">{time}</span>
			<div className="flex items-center gap-6 pt-2">
				<RounderHat />
				<span>{name}</span>
			</div>
			<div className="pt-4">
				<Stars />
				<p className={`${'mt-4 text-sm text-primary-dark'} ${styles.paragraph}`}>{paragraph}</p>
			</div>
		</div>
	</div>
)
