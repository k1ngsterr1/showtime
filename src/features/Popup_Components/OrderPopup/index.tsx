import React, { type SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Paragraph from '@shared/ui/ParagraphReact'

import styles from '../CreateGamePopup/styles.module.scss'

interface ICreateGamePopupProps {
	onClick: () => void
	popupState: boolean
	text: string
}

export const OrderPopup: React.FC<ICreateGamePopupProps> = ({ onClick, popupState,text }) => {
	const handleOverlayClick = (e: SyntheticEvent) => {
		if (e.target === e.currentTarget) {
			onClick()
		}
	}

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
            popupState={popupState}
			<section className={styles.popup} onClick={(e) => e.stopPropagation()}>
				<div className="flex w-full items-center justify-end">
					<FontAwesomeIcon className={styles.popup__icon} icon={faClose} onClick={onClick} />
				</div>
				<div className="mt-8 flex flex-col items-center justify-center overflow-hidden">
					<Paragraph
						paragraphType="red-center"
						text={text}
						width="60%"
                        margin='mb-8'
					/>
				</div>
			</section>
		</div>
	)
}
