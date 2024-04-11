import React, { useState } from 'react';
import { Input } from '@shared/ui/Inputs/DefaultInput/index';
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index';
import useFileUpload from '@shared/lib/hooks/useFileUpload';
import styles from './styles.module.scss';

interface Props {
  userId: number;
  url: string;
  name: string;
}

const UsersCard: React.FC<Props> = ({ userId, url, name }) => {
  const [editing, setEditing] = useState(false);
  const [userName, setUserName] = useState(name);
  const [sign, setSign] = useState(''); // Placeholder for signature or position, adjust as needed
  const { previewUrl, handleFileChange } = useFileUpload();

  const toggleEdit = () => setEditing(!editing);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Implement update logic here, possibly including sending data to a server
    console.log('Update User:', { userId, userName, sign, file: previewUrl });
    setEditing(false); // Optionally exit editing mode on submit
  };

  return (
    <>
      <form className="flex flex-col items-center justify-center" onSubmit={handleUpdate}>
        <div className={styles.card}>
          {editing ? (
            <div className="flex flex-col items-center justify-center">
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className={styles.previewImage} />
              ) : (
                <label htmlFor="file-upload" className={styles.upload}>
                  <input
                    id="file-upload"
                    type="file"
                    name="pictureName"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <span className={styles.uploadText}>Добавить фото</span>
                </label>
              )}
              <Input
                inputType="default-red-big"
                type="text"
                placeholder="Имя пользователя"
                margin="mt-4"
                name="name"
                textAlign="center"
                value={userName}
                // onChange={(e) => setUserName(e.target.value)}
              />
              <Input
                inputType="default-white"
                type="text"
                placeholder="Подпись"
                margin="mt-2"
                name="text"
                textAlign="center"
                value={sign}
                // onChange={(e) => setSign(e.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img src={url} alt={name} className={styles.card_picture} />
              <span className={styles.card__name}>{name}</span>
              {/* Include sign or position here if needed */}
            </div>
          )}
        </div>
        {editing ? (
          <Buttons buttonType="filled" text="Сохранить" margin="mt-10" type="submit" />
        ) : (
          <Buttons buttonType="filled" text="Редактировать" margin="mt-10" onClick={toggleEdit} />
        )}
      </form>
    </>
  );
};

export default UsersCard;
