import React from 'react'
import styles from './styles.module.scss'
// import BigText from '@shared/ui/BigText/index.astro'
import Paragraph from '@shared/ui/ParagraphReact/index'

interface Props {
	number: string
	images: string[]
	heading: string
	paragraph: string
	cardType?: string | 'white'
}

export const ServiceCard: React.FC<Props> = ({ number, images, heading, paragraph, cardType }) => {
	const serviceClass = `${styles.service_card} ${cardType ? styles[cardType] : ''}`

	return (
		<div className={serviceClass}>
			<div className="space-between flex flex-col p-8">
				<div className="flex w-full items-center justify-between">
					{images.map((image, index) => (
						<img key={index} src={image} alt={heading} className={styles.service_card__icon} />
					))}
					<span className={styles.service_card__number}>{number}</span>
				</div>
				{/* <BigText
                    text={heading}
                    bigTextType={cardType === 'white' ? 'services--card--red' : 'services--card'}
                    margin="mt-2"
                /> */}
				<Paragraph
					text={paragraph}
					margin="mt-2"
					paragraphType={cardType === 'white' ? 'dark' : 'white'}
					width="80%"
				/>
			</div>
		</div>
	)
}
