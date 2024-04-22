import { Input } from '@shared/ui/Inputs/DefaultInput/index' // Ensure this path is correct
import Button from '@shared/ui/Buttons/DefaultReactButton/index'
import { useAddStat } from '@shared/lib/hooks/Admin/Add/useAddRating'
import { useState } from 'react'

import styles from '../AdminFeatures/AdminNewsArticles/styles.module.scss' // Ensure this path is correct

export const AdminRating = () => {
	const { addStat } = useAddStat()
	const [email, setEmail] = useState<string>()
	const [points, setPoints] = useState<string>()
	const [total, setTotal] = useState<string>()
	const [wins, setWins] = useState<string>()
	const [loss, setLoss] = useState<string>()


	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (email && points && email && total && wins && loss) {
			const formData = new FormData()
			formData.append('points', points)
			formData.append('total', total)
			formData.append('wins', wins)
			formData.append('email', email)
			formData.append('loss', loss)


			await addStat(formData)
		} else {
			console.log('All fields are required')
		}
	}



	return (
		<div className={styles.container} onSubmit={handleSubmit}>
			<div className={`${styles.container__content} flex flex-col items-center justify-center`}>
				<p className="mb-8 text-center font-neoregular text-primary-light">
					Напиши email пользователя, чей рейтинг вы хотите поменять, редактировать, удалить.
				</p>
				<form className="flex flex-col items-center" >
					<Input
						type="text"
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
						name="total"
						placeholder="Игры"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setTotal(e.target.value)}
					/>
						<Input
						type="text"
						name="wins"
						placeholder="Победы"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setWins(e.target.value)}
					/>
						<Input
						type="loss"
						name="rank"
						placeholder="Поражения"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setLoss(e.target.value)}
					/>
					<Button type="submit" text="Добавить рейтинг" buttonType="filled" margin="mt-4" />
				</form>
			</div>
		</div>
	)
}
