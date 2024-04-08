import React, { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import CalendarComponent from '@features/Calendar/reviewcalendar'
import { TextArea } from '@shared/ui/TexrArea/index'
import AddButton from '@shared/ui/AddButton'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddNews } from '@shared/lib/hooks/Admin/Add/useAddNews'

import Fedora from '@assets/logo/fedora.svg'
import styles from './styles.module.scss'

export const NewsArticleCard = () => {
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [newsTitle, setNewsTitle] = useState('')
	const [newsText, setNewsText] = useState('')
	const [reviewDate, setReviewDate] = useState('')
	const { addNews } = useAddNews()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (newsTitle && newsText && selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile, selectedFile.name)
			formData.append('heading', newsTitle)
			formData.append('description', newsText)
			formData.append('date', reviewDate)

			await addNews(formData)
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
							value={newsTitle}
							name="heading"
							onChange={(e) => setNewsTitle(e.target.value)}
						/>
						<TextArea
							textareaType="articles"
							placeholder="Текст"
							margin="mt-3"
							value={newsText}
							name="description"
							onChange={(e) => setNewsText(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="mt-8 flex flex-row items-center justify-center gap-10">
				<AddButton buttonType="filled" text="Добавить" margin="mt-3" type="submit" />
				<LinkButton buttonType="filled" href="news-list" text="Смотреть все" margin="mt-3" />
			</div>
		</form>
	)
}
