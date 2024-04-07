import useFileUpload from '@shared/lib/hooks/useFileUpload'
import CalendarComponent from '@features/Calendar/reviewcalendar'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'

import styles from '../AdminFeatures/AdminNewsArticles/styles.module.scss'

import Fedora from '@assets/logo/fedora.svg'

export const AdminArticles = () => {
	const { previewUrl, handleFileChange } = useFileUpload()

	return (
		<form className="flex flex-col items-center justify-center">
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
							/>
						</label>
					)}
					<div className="ml-auto flex w-[95%] flex-col">
						<CalendarComponent />
						<Input inputType="newsheading" type="text" placeholder="Заголовoк" />
						<TextArea textareaType="articles" placeholder="Текст" margin="mt-3" />
					</div>
				</div>
			</div>
			<div className="mt-8 flex flex-row gap-10">
				<AddButton buttonType="filled" text="Добавить" margin="mt-3" type="submit" />
				<LinkButton buttonType="filled" href="articles-list" text="Смотреть все" margin="mt-3" />
			</div>
		</form>
	)
}
