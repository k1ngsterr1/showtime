import React, { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload' // Ensure this path is correct
import CalendarComponent from '@features/Calendar/reviewcalendar' // Ensure this path is correct
import { TextArea } from '@shared/ui/TexrArea/index' // Fixed typo in the path
import AddButton from '@shared/ui/AddButton' // Ensure this path is correct
import { Input } from '@shared/ui/Inputs/DefaultInput/index' // Ensure this path is correct
import Button from '@shared/ui/Buttons/DefaultReactButton/index'
import { useUpdateOnlineStat } from '@shared/lib/hooks/Admin/Update/useUpdateOnlineRating' // Ensure this path is correct

import Fedora from '@assets/logo/fedora.svg' // Ensure this path is correct. Consider how you import SVG in your project setup
import styles from '../AdminFeatures/AdminNewsArticles/styles.module.scss' // Ensure this path is correct

export const AdminOnlineRating = () => {
	const { updateOnlineStat } = useUpdateOnlineStat()

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
			formData.append('loss', lose)


			await updateOnlineStat(formData)
		} else {
			console.log('All fields are required')
		}
	}


	return (
		<div className={styles.container} onSubmit={handleSubmit}>
			<div className={`${styles.container__content} flex flex-col items-center justify-center`}>
				<p className="mb-8 text-center font-neoregular text-primary-light">
					Напиши email пользователя, чей рейтинг вы хотите добавить.
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
						name="wins"
						placeholder="Победы"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setWin(e.target.value)}
					/>
						<Input
						type="loss"
						name="rank"
						placeholder="Поражения"
						inputType="default"
						margin="mt-4"
						required
						onChange={(e) => setLose(e.target.value)}
					/>
					<Button type="submit" text="Добавить рейтинг" buttonType="filled" margin="mt-4" />
				</form>
			</div>
		</div>
	)
}
