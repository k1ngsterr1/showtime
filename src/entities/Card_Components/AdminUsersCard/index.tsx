import React, { useState } from 'react'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'
import styles from './styles.module.scss'
import { useAddVerifiedAdminUser } from '@shared/lib/hooks/Admin/Users/useVerifyAdminUser'

interface Props {
	verificationPhoto: string
	username: string
	userID: number
}

const UsersCard: React.FC<Props> = ({ userID, verificationPhoto, username }) => {
	const { addAdminVerifyUser } = useAddVerifiedAdminUser()
	const [isVerified, setIsVerified] = useState<boolean>()

	const handleVerification = async (verified: boolean) => {
		setIsVerified(verified);
	
		const formData = new FormData();
		formData.append('userID', userID.toString());
		formData.append('isVerified', verified.toString());
	
		try {
			await addAdminVerifyUser(formData);
			console.log('Verification status updated:', verified);
			window.location.reload();
		} catch (error) {
			console.error('Failed to update verification status:', error);
		}
	}
	

	return (
		<form
			className="flex flex-col items-center justify-center"
			onSubmit={(e) => e.preventDefault()}
		>
			<div className={styles.card}>
				<div className="flex flex-col items-center justify-center">
					<img src={verificationPhoto} alt={username} className={styles.card_picture} />
					<span className={styles.card__name}>{username}</span>
				</div>
			</div>
			<div className="mt-8 flex flex-row gap-10">
				<Button buttonType="filled" text="Подтвердить" onClick={() => handleVerification(true)} />
				<Button buttonType="filled" text="Отклонить" onClick={() => handleVerification(false)} />
			</div>
		</form>
	)
}

export default UsersCard
