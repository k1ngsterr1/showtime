import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'

import styles from './styles.module.scss'
import '@shared/styles/global.scss'

interface ICardProps {
	data: string
	time: string
	number: string
	href: string
	placeholder: string
}

export const ServiceCard: React.FC<ICardProps> = ({ number, href, placeholder }) => {
	return (
		<>
			<div className={styles.card}>
				<h1 className={styles.card__heading}>{number}</h1>
				<Input inputType="default-red-big" placeholder={placeholder} type="text" />
				<TextArea placeholder="Текст" margin="mt-8" />
			</div>
			<AddButton buttonType="filled" text="Добавить" margin="mt-12" />
			<LinkButton buttonType="filled" href={href} text="Смотреть все" margin="mt-6" />
		</>
	)
}
