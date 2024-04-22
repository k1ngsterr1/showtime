import React, { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload' // Ensure this path is correct
import CalendarComponent from '@features/Calendar/reviewcalendar' // Ensure this path is correct
import { TextArea } from '@shared/ui/TexrArea/index' // Fixed typo in the path
import AddButton from '@shared/ui/AddButton' // Ensure this path is correct
import { Input } from '@shared/ui/Inputs/DefaultInput/index' // Ensure this path is correct
import Button from '@shared/ui/Buttons/DefaultReactButton/index'
import { useAddArticle } from '@shared/lib/hooks/Admin/Add/useAddArticle' // Ensure this path is correct

import Fedora from '@assets/logo/fedora.svg' // Ensure this path is correct. Consider how you import SVG in your project setup
import styles from '../AdminFeatures/AdminNewsArticles/styles.module.scss' // Ensure this path is correct

export const AdminOnlineRating = () => {
	return (
		<div className={styles.container}>
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
						// onChange={(e) => setEmail(e.target.value)}
					/>
						<Input
						type="text"
						name="rank"
						placeholder="Очки"
						inputType="default"
						margin="mt-4"
						required
						// onChange={(e) => setRank(e.target.value)}
					/>
						<Input
						type="text"
						name="rank"
						placeholder="Игры"
						inputType="default"
						margin="mt-4"
						required
						// onChange={(e) => setRank(e.target.value)}
					/>
						<Input
						type="text"
						name="rank"
						placeholder="Победы"
						inputType="default"
						margin="mt-4"
						required
						// onChange={(e) => setRank(e.target.value)}
					/>
						<Input
						type="text"
						name="rank"
						placeholder="Поражения"
						inputType="default"
						margin="mt-4"
						required
						// onChange={(e) => setRank(e.target.value)}
					/>
					<Button type="submit" text="Редактировать рейтинг" buttonType="filled" margin="mt-4" />
				</form>
			</div>
		</div>
	)
}
