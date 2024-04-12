import React, { useState } from 'react'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import { useUpdateNews } from '@shared/lib/hooks/Admin/Update/useUpdateNews'
import CalendarComponent from '@features/Calendar/reviewcalendar'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'
import { TextArea } from '@shared/ui/TexrArea/index' // Ensure correct import path
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import Fedora from '@assets/logo/fedora.svg' // Ensure Fedora logo import works as expected, might need adjustment
import styles from './styles.module.scss'

interface Props {
	date: string
	heading: string
	description: string
	url: string
	editing: boolean
	newsId: number
}

const NewsCard: React.FC<Props> = ({ date, heading, description, url, editing }) => {
	const [isEditing, setIsEditing] = useState(false)
	const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [newsTitle, setNewsTitle] = useState(heading)
	const [newsText, setNewsText] = useState(description)
	const [selectedDate, setSelectedDate] = useState(date)
	const { updateNews } = useUpdateNews()

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault()

		// Check if the title and text are provided. Do not require a new file to proceed.
		if (!newsTitle || !newsText) {
			console.log('Title and text fields are required.')
			return // Prevents the form from submitting if these fields are empty.
		}

		const formData = new FormData()
		if (selectedFile) {
			// Append file only if it's selected.
			formData.append('pictureName', selectedFile, selectedFile.name)
		}
		formData.append('heading', newsTitle)
		formData.append('description', newsText)
		formData.append('date', selectedDate)

		await updateNews(formData)
	}

	return (
		<form onSubmit={handleUpdate} className="flex flex-col items-center justify-center">
			<div className={styles.card}>
				{editing ? (
					<div className={styles.card__content}>
						<label htmlFor="file-upload" className={styles.card__content__upload}>
							{previewUrl ? (
								<img
									src={previewUrl}
									alt="Preview"
									className={styles.card__content__previewImage}
								/>
							) : (
								<>
									<img
										src={Fedora.src}
										alt="Fedora"
										className={styles.card__content__upload_fedora}
									/>
									<p className="font-neoregular text-xl text-primary-red">Добавить фото</p>
								</>
							)}
							<input
								id="file-upload"
								type="file"
								style={{ display: 'none' }}
								onChange={handleFileChange}
								name="pictureName"
							/>
						</label>
						<CalendarComponent onDateChange={setSelectedDate} />
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
				) : (
					<>
						<img src={url} alt="News" className={styles.card_image} />
						<div className="ml-auto mt-3 flex w-[95%] flex-col">
							<span className="font-katana text-xl">{date}</span>
							<span className="mt-2 overflow-hidden font-katana text-4xl">{heading}</span>
							<div className={`${styles.paragraph} paragraphType="dark" margin="mt-4" width="80%"`}>
								{description}
							</div>
						</div>
					</>
				)}
			</div>
			{editing ? (
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
