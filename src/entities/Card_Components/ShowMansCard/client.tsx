import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { useUpdateShowman } from '@shared/lib/hooks/Admin/Update/useUpdateShowman'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'

interface Props {
	url: string
	text: string
	name: string
}

export const ShowMansCard: React.FC<Props> = ({ url, text, name }) => {
	return (
		<>
			<form className="flex flex-col items-center justify-center">
				<div className={styles.card}>
					<div className="flex flex-col items-center justify-center">
						<img
							src={'https://showtimeserver-production.up.railway.app/' + url}
							alt={name}
							className={styles.card_picture}
						/>
						<span className={styles.card__name}>{name}</span>
						<span className={styles.card__position}>{text}</span>
					</div>
				</div>
			</form>
		</>
	)
}
