import React, { useState } from 'react';
import ReactButton from '@shared/ui/Buttons/DefaultReactButton/index';
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index';
import { useUpdateProduct } from '@shared/lib/hooks/Admin/Update/useUpdateProduct';
import useFileUpload from '@shared/lib/hooks/useFileUpload';
import { Input } from '@shared/ui/Inputs/DefaultInput/index';
import { TextArea } from '@shared/ui/TexrArea'; // Correct path and name if needed
import Fedora from '@assets/logo/fedora.svg';

import styles from './styles.module.scss';

interface Props {
    url: string;
    name: string;
    description: string;
    price: string;
    editing: boolean;
    productId: number;
}

export const ProductCard: React.FC<Props> = ({ url, name, description, price, editing: initialEditing, productId }) => {
    const { previewUrl, handleFileChange, selectedFile } = useFileUpload()
    const [editing, setEditing] = useState(initialEditing);
    const [productName, setProductName] = useState(name);
    const [productDescription, setProductDescription] = useState(description);
    const [productPrice, setProductPrice] = useState(price);
    const { updateProduct } = useUpdateProduct();


    const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (productName && productDescription && productPrice && selectedFile) {
			const formData = new FormData()
			formData.append('pictureName', selectedFile)
			formData.append('name', productName)
			formData.append('description', productDescription)
			formData.append('price', productPrice)
            formData.append('productId', productId.toString())


			await updateProduct(formData)
		} else {
			console.log('All fields are required')
		}
	}

    return (
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <div className={styles.card}>
                {editing ? (
                    <div className={styles.container}>
                        <div className={`${styles.container__content} flex flex-col items-center justify-center`}>
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className={styles.container__content__previewImage} />
                            ) : (
                                <label htmlFor="file-upload" className={styles.container__content__upload}>
                                    <img src={Fedora.src} alt="Fedora" className={styles.container__content__upload_fedora} />
                                    <p className="font-neoregular text-xl text-primary-red">Добавить фото</p>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                </label>
                            )}
                            <Input
                                inputType="product"
                                type="text"
                                placeholder="Название продукта"
                                margin="mt-8"
                                name="name"
                                value={productName}
                                textAlign="center"
                                onChange={(e) => setProductName(e.target.value)}
                            />
                            <TextArea
                                placeholder="Описание продукта"
                                textareaType="product-desc"
                                margin="mt-4"
                                name="description"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                            />
                            <Input
                                inputType="product"
                                type="text"
                                placeholder="Цена"
                                margin="mt-5 mb-5"
                                name="price"
                                textAlign="center"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </div>
                    </div>
                ) : (
                    <>
                        <img src={url} alt="product" className={styles.card__image} />
                        <span className={styles.card__heading}>{productName}</span>
                        <span className={styles.card__paragraph}>{productDescription}</span>
                        <span className="mt-4 font-killbill text-2xl">{productPrice}</span>
                        <ReactButton margin="mt-4" text="Купить" buttonType="transparent" />
                    </>
                )}
            </div>
            {editing ? (
                <Buttons buttonType="filled" text="Сохранить" margin="mt-10"  />
            ) : (
                <Buttons buttonType="filled" text="Редактировать" margin="mt-10" onClick={() => setEditing(true)} />
            )}
        </form>
    );
};