import React, { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload' // Ensure this path is correct
import CalendarComponent from '@features/Calendar/reviewcalendar' // Ensure this path is correct
import { TextArea } from '@shared/ui/TexrArea/index' // Fixed typo in the path
import AddButton from '@shared/ui/AddButton' // Ensure this path is correct
import { Input } from '@shared/ui/Inputs/DefaultInput/index' // Ensure this path is correct
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index' // Ensure this path is correct
import { useAddArticle } from '@shared/lib/hooks/Admin/Add/useAddArticle' // Ensure this path is correct

import Fedora from '@assets/logo/fedora.svg' // Ensure this path is correct. Consider how you import SVG in your project setup
import styles from '../AdminFeatures/AdminNewsArticles/styles.module.scss' // Ensure this path is correct

export const AdminArticles = () => {
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [articleTitle, setArticleTitle] = useState('')
	const [articleText, setArticleText] = useState('')
	const { addArticle } = useAddArticle()
	const [reviewDate, setReviewDate] = useState('')

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (articleTitle && articleText && selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile, selectedFile.name)
			formData.append('heading', articleTitle)
			formData.append('description', articleText)
			formData.append('date', reviewDate)

			await addArticle(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
			<div className={styles.card}>
				<div className={styles.card__content}>
					{previewUrl ? (
						<img src={previewUrl} alt="Preview" className={styles.card__content__previewImage} />
					) : (
						<label htmlFor="file-upload" className={styles.card__content__upload}>
							<img src={Fedora.src} alt="Fedora" className={styles.card__content__upload_fedora} />
							<p className="font-neoregular text-xl text-primary-red">Добавить фото</p>
							<input
								id="file-upload"
								type="file"
								style={{ display: 'none' }}
								onChange={handleFileChange}
								name="pictureName"
							/>
						</label>
					)}
					<div className="ml-auto flex w-[95%] flex-col">
						<CalendarComponent onDateChange={setReviewDate} />
						<Input
							inputType="newsheading"
							type="text"
							placeholder="Заголовок"
							value={articleTitle}
							name="heading"
							onChange={(e) => setArticleTitle(e.target.value)}
						/>
						<TextArea
							textareaType="articles"
							placeholder="Текст статьи"
							margin="mt-3"
							value={articleText}
							name="description"
							onChange={(e) => setArticleText(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="mt-8 flex flex-row items-center justify-center gap-10">
				<AddButton buttonType="filled" text="Добавить" margin="mt-3" type="submit" />
				<LinkButton
					buttonType="filled"
					href="/admin/articles-list"
					text="Смотреть все"
					margin="mt-3"
				/>
			</div>
		</form>
	)
}
