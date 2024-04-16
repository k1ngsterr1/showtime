import React, { useState } from 'react'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import { Map } from '@shared/ui/Map/index'
import { FormContent } from '@widgets/Screens/SelectedForm/index'
import { useSendEmail } from '@shared/lib/hooks/useSendEmail'

import styles from './styles.module.scss'

export const Form = () => {
	const [selectedRole, setSelectedRole] = useState<string>('')
	const [formType, setFormType] = useState<string>('')

	return (
		<>
			<section className={styles.form_screen_mob} id="contacts_mob">
				<div className={styles.form_screen__container}>
					<h6 className="m-auto text-primary-red">Контакты</h6>
					<div className="m-auto flex w-[60%] flex-col items-center justify-between">
						<ReactButton
							text="Заказать"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('production')}
						/>
						<ReactButton
							text="Продукция"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('delivery')}
						/>
						<ReactButton
							text="Запись"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('book')}
						/>
						<ReactButton
							text="Задать вопрос"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('question')}
						/>
					</div>
					<form className={styles.form_screen_mob__form}>
						<div className="flex flex-col items-center">
							<FormContent gameType={formType} />
						</div>
					</form>
					<div className="flex flex-col items-center">
						<a
							href="mailto:info@mafshow.kz"
							className={`${styles.form_screen__container__form__link} mt-5`}
						>
							info@mafshow.kz
						</a>
						<a
							href="tel:+77471794939"
							className={`${styles.form_screen__container__form__link} mt-5`}
						>
							+7-747-179-4939
						</a>
					</div>
					<Map />
				</div>
			</section>
			<section className={styles.form_screen} id="contacts">
				<div className={styles.form_screen__container}>
					<h6 className="m-auto text-primary-red">Контакты</h6>
					<div className="m-auto flex w-[60%] items-center justify-between">
						<ReactButton
							text="Заказать"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('production')}
						/>
						<ReactButton
							text="Продукция"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('delivery')}
						/>
						<ReactButton
							text="Запись"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('book')}
						/>
						<ReactButton
							text="Задать вопрос"
							buttonType="transparent"
							margin="mt-8"
							onClick={() => setFormType('question')}
						/>
					</div>
					<div className="m-auto flex items-start gap-40">
						<FormContent gameType={formType} />
						<Map />
					</div>
				</div>
			</section>
		</>
	)
}
