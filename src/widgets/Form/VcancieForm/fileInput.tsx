import React, { useState } from 'react'
import s from './s.module.scss'

interface CustomFileInputProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ onChange }) => {
	const [filename, setFilename] = useState('') // Состояние для хранения имени файла

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setFilename(file.name) // Обновляем состояние, устанавливаем имя выбранного файла
		}
		onChange(event) // Передаем событие наверх для обработки
	}

	return (
		<div className={s.customFileInput}>
			<input
				id="resume"
				name="resume"
				type="file"
				onChange={handleChange}
				style={{ display: 'none' }}
				required
				className={s.input}
			/>
			<label htmlFor="resume" className={s.customFileInputLabel}>
				<i className="fa fa-paperclip" aria-hidden="true"></i>
				{filename || 'Ваше резюме'} {/* Показываем имя файла или текст по умолчанию */}
			</label>
		</div>
	)
}

export default CustomFileInput
