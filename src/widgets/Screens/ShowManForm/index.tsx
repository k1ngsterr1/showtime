import { FormContent } from '@widgets/Screens/SelectedForm'
import { Map } from '@shared/ui/Map/index'
import styles from './styles.module.scss'

export const ShowForm = () => {
	return (
		<>
			<section className={styles.form} id="contacts_mob">
				<div className={styles.form__ontainer}>
					<h6 className={styles.form__heading}>Заказать Ведущего</h6>
				</div>
				<div className={styles.form__items}>
					<FormContent gameType="show" />
					<Map />
				</div>
			</section>
		</>
	)
}
