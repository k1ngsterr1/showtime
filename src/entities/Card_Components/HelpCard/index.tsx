import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

interface IHelpCardProps {
	text: string
	paragraph: string
	linkText: string
	href: string
}

export const HelpCard: React.FC<IHelpCardProps> = ({ text, paragraph, href, linkText }) => {
	const [isClosed, setClose] = useState(false)

	const handleClose = () => {
		setClose(true)
	}

	return (
		<>
			{isClosed ? null : (
				<div className={styles.help_card}>
					<div className="flex items-start justify-between">
						<h2 className={styles.help_card__heading}>{text}</h2>
						<FontAwesomeIcon
							icon={faClose}
							onClick={handleClose}
							className={styles.help_card__close}
						/>
					</div>
					<p className={styles.help_card__paragraph}>{paragraph}</p>
					<a href={href} className={styles.help_card__link}>
						{linkText}
					</a>
				</div>
			)}
		</>
	)
}
