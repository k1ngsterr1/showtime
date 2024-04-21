import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';
import Fedora from '@assets/logo/fedora.svg';
import useFileUpload from '@shared/lib/hooks/useFileUpload';
import { Input } from '@shared/ui/Inputs/DefaultInput';
import { useUpdateWorker } from '@shared/lib/hooks/Admin/Update/useUpdateWorker';

interface UserTab {
  email: string;
  position: string;
  margin?: string;
  url: string;
  userTabType?: string | 'users';
  userPhotoType?: string | 'users';
  userTextType?: string | 'users';
  onDelete?: () => void;
  workerId?: number;
}

export const AdminUserTab: React.FC<UserTab> = ({
  email,
  position,
  url,
  margin,
  userTabType = 'users',
  userPhotoType = 'users',
  userTextType = 'users',
  onDelete,
  workerId
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
	const [workerName, setWorkerName] = useState('')
	const [workerPosition, setWorkerPosition] = useState('')
  const { updateWorker } = useUpdateWorker()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (selectedFile && workerName && workerPosition && workerId) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile)
			formData.append('email', workerName)
			formData.append('position', workerPosition)
      formData.append('workerId', workerId.toString())


			try {
				await updateWorker(formData)
			} catch (error) {
				console.error('Error adding worker:', error)
			}
		} else {
			console.log('All fields are required')
		}
	}

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  const toggleEdit = () => setIsEditMode(!isEditMode);

  const userTabClass = `${styles.usertab} ${styles[`usertab--${userTabType}`]} ${margin || ''}`;
  const userPhotoClass = `${styles.usertab__photo} ${styles[`usertab__photo--${userPhotoType}`]}`;
  const userTextClass = `${styles.usertab__text} ${styles[`usertab__text--${userTextType}`]}`;

  return (
    <form onSubmit={handleSubmit}>
    <div className={userTabClass}>
      <div className={styles['kebab-menu']} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faEllipsisV}className="text-3xl" />
      </div>
      {isMenuVisible && (
        <div className={styles.menu}>
          {isEditMode ? (
            <button className={styles.menu_btn} type="submit" onClick={toggleEdit}>Сохранить</button>
          ) : (
            <button className={styles.menu_btn} onClick={toggleEdit}>Редактировать</button>
          )}
          <button className={styles.menu_btn} onClick={onDelete}>Удалить</button>
        </div>
      )}
      {isEditMode ? (
      	<div className={`${userTabClass}  `}>
		  <div className={styles.card__content}>
			  {previewUrl ? (
				  <img src={previewUrl} alt="Preview" className={styles.card__content__previewImage} />
			  ) : (
				  <label htmlFor="file-upload" className={styles.upload}>
					  <img src={Fedora.src} alt="Fedora" className={styles.upload__fedora} />
					  <input
						  id="file-upload"
						  type="file"
						  style={{ display: 'none' }}
						  onChange={handleFileChange}
						  name="pictureName"
					  />
				  </label>
			  )}
		  </div>
		  <div className={userTextClass}>
			  <Input
				  inputType="teamname"
				  placeholder="Email"
				  type="text"
          value={workerName}
					onChange={(e) => setWorkerName(e.target.value)}
					name="email"
			  />
			  <Input
				  inputType="teamposition"
				  placeholder="Должность"
				  type="text"
				  value={workerPosition}
					onChange={(e) => setWorkerPosition(e.target.value)}
					name="position"
			  />
		  </div>
        </div>
      ) : (
        <>
          <div className={userPhotoClass}>
            <img src={url} alt="User" />
          </div>
          <div className={userTextClass}>
            <span className={styles.usertab__text_name_1}>{email}</span>
            <span className={styles.usertab__text_position_1}>{position}</span>
          </div>
        </>
      )}
    </div>
    </form>
  );
};
