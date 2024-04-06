import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea'
import AddButton from '@shared/ui/AddButton'
import Linkbutton from '@shared/ui/Buttons/LinkReactButton/index'
import { LinkButton } from '@shared/ui/LinkButton'

import styles from './styles.module.scss'
import '@shared/styles/global.scss'

interface ICardProps {
	number: string
	href: string
	placeholder: string
}

export const ServiceCard: React.FC<ICardProps> = ({ number, href, placeholder }) => {
	return (
		<>
			<div className={styles.card}>
				<form>
					<h1 className={styles.card__heading}>{number}</h1>
					<Input inputType="default-red-big" placeholder={placeholder} type="text" />
					<TextArea placeholder="Текст" textareaType="vacancie" margin="mt-8" />
					<LinkButton buttonType="filled" text="Откликнуться" margin="mt-4" href="vacancie-form" />
				</form>
			</div>
			<AddButton buttonType="filled" text="Добавить" margin="mt-12" type="submit" />
			<Linkbutton buttonType="filled" href={href} text="Смотреть все" margin="mt-6" />
		</>
	)
}
