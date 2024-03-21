import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	margin?: string
	placeholder?: string
}

const FileInput: React.FC<FileInputProps> = ({ margin, placeholder, ...rest }) => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileIconClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click()
		}
	}

	return (
		<div className={styles.fileInput}>
			<div className={styles.label}>
				<span>Ваше резюме</span>
			</div>
			<input
				placeholder={placeholder}
				type="file"
				ref={fileInputRef}
				style={{ display: 'none' }}
				{...rest}
			/>
			<button className={styles.fileInputButton} onClick={handleFileIconClick}>
				<FontAwesomeIcon icon={faPaperclip} />
			</button>
		</div>
	)
}

export default FileInput
