import React, { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import { useUpdateNews } from '@shared/lib/hooks/Admin/Update/useUpdateNews'
import CalendarComponent from '@features/Calendar/reviewcalendar'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { TextArea } from '@shared/ui/TexrArea/index'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import Fedora from '@assets/logo/fedora.svg'
import styles from './styles.module.scss'
import Paragraph from '@shared/ui/ParagraphReact'

interface Props {
	date: string
	heading: string
	description: string
	url: string
	newsId: number
}

const NewsCard: React.FC<Props> = ({ date, heading, description, url, newsId }) => {
	const [isEditing, setIsEditing] = useState(false)
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [newsTitle, setNewsTitle] = useState('')
	const [newsText, setNewsText] = useState('')
	const [reviewDate, setReviewDate] = useState('')
	const { updateNews } = useUpdateNews()

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault()

		if (newsTitle && newsText && selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile, selectedFile.name)
			formData.append('heading', newsTitle)
			formData.append('description', newsText)
			formData.append('date', reviewDate)
			formData.append('newsId', newsId.toString())

			await updateNews(formData)
		} else {
			console
		}
	}

	return (
		<form onSubmit={handleUpdate} className="flex flex-col items-center justify-center">
			<div className={styles.card}>
				{isEditing ? (
					<>
						<div className={styles.card__content}>
							{previewUrl ? (
								<img
									src={previewUrl}
									alt="Preview"
									className={styles.card__content__previewImage}
								/>
							) : (
								<label htmlFor="file-upload" className={styles.card__content__upload}>
									<img
										src={Fedora.src}
										alt="Fedora"
										className={styles.card__content__upload_fedora}
									/>
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
					</>
				) : (
					<>
						<img src={url} alt="News" className={styles.card_image} />
						<div className="ml-auto mt-3 flex w-[95%] flex-col">
							<span className="font-katana text-xl">{date}</span>
							<span className="mt-2 overflow-hidden font-katana text-4xl">{heading}</span>
							<Paragraph text={description} paragraphType="dark" margin="mt-4" width="80%" />
						</div>
					</>
				)}
			</div>
			{isEditing ? (
				<Buttons buttonType="filled" text="Сохранить" type="submit" margin="mt-10" />
			) : (
				<Buttons
					buttonType="filled"
					text="Редактировать"
					margin="mt-10"
					onClick={() => setIsEditing(true)}
				/>
			)}
		</form>
	)
}

export default NewsCard
