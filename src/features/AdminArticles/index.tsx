import React, { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import CalendarComponent from '@features/Calendar/reviewcalendar'
import { TextArea } from '@shared/ui/TexrArea/index' // Ensure correct import path
import AddButton from '@shared/ui/AddButton'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddArticle } from '@shared/lib/hooks/Admin/Add/useAddArticle'

import Fedora from '@assets/logo/fedora.svg'
import styles from '../AdminFeatures/AdminNewsArticles/styles.module.scss'

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
			formData.append('date', reviewDate) // Directly use the formatted string

			await addArticle(formData)
		} else {
			console.log('All fields are required')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.card}>
				<div className={styles.card__content}>
					{previewUrl ? (
						<img src={previewUrl} alt="Preview" className={styles.card__content__previewImage} />
					) : (
						<label htmlFor="file-upload" className={styles.card__content__upload}>
							<img src={Fedora.src} alt="Upload" className={styles.card__content__upload_fedora} />
							<input
								id="file-upload"
								type="file"
								name="pictureName"
								style={{ display: 'none' }}
								onChange={handleFileChange}
							/>
						</label>
					)}
					<div className="flex w-full flex-col">
						<CalendarComponent marginClass="mt-3" onDateChange={setReviewDate} />
						<Input
							type="text"
							inputType="newsheading"
							name="heading"
							placeholder="Заголовок"
							value={articleTitle}
							onChange={(e) => setArticleTitle(e.target.value)}
						/>
						<TextArea
							margin="mt-3"
							textareaType="articles"
							placeholder="Текст статьи"
							value={articleText}
							name="description"
							onChange={(e) => setArticleText(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="mt-10 flex flex-row gap-10">
				<AddButton buttonType="filled" text="Добавить" type="submit" />
				<LinkButton href="articles-list" text="Смотреть все" buttonType="filled" />
			</div>
		</form>
	)
}
