import { Input } from '@shared/ui/Inputs/DefaultInput/index' // Ensure this path is correct
import Button from '@shared/ui/Buttons/DefaultReactButton/index'
import { useUpdateOffStat } from '@shared/lib/hooks/Admin/Update/useUpdateOffRating'
import { useState } from 'react'

import styles from '../AdminFeatures/AdminNewsArticles/styles.module.scss' // Ensure this path is correct

export const AdminRating = () => {
	const { updateOffStat } = useUpdateOffStat()
	const [email, setEmail] = useState<string>()
	const [points, setPoints] = useState<string>()
	const [win, setWin] = useState<string>()
	const [lose, setLose] = useState<string>()


	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (email && points && email  && win && lose) {
			const formData = new FormData()
			formData.append('points', points)
			formData.append('win', win)
			formData.append('email', email)
			formData.append('lose', lose)


			await updateOffStat(formData)
		} else {
			console.log('All fields are required')
		}
	}



	return (
		<div className={styles.container} onSubmit={handleSubmit}>
			<div className={`${styles.container__content} flex flex-col items-center justify-center`}>
				<p className="mb-8 text-center font-neoregular text-primary-light">
					Напиши email пользователя, чей рейтинг вы хотите редактировать.
				</p>
				<form className="flex flex-col items-center" >
					<Input
						type="email"
						name="email"
						placeholder="Почта пользователя"
						inputType="default"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
						<Input
						type="text"
						name="points"
						placeholder="Очки"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setPoints(e.target.value)}
					/>
						<Input
						type="text"
						name="wins"
						placeholder="Победы"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setWin(e.target.value)}
					/>
						<Input
						type="text"
						name="lose"
						placeholder="Поражения"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setLose(e.target.value)}
					/>
					<Button type="submit" text="Редактировать рейтинг" buttonType="filled" margin="mt-4" />
				</form>
			</div>
		</div>
	)
}
