import React, { useState } from 'react'
import styles from './styles.module.scss'
import useFileUpload from '@shared/lib/hooks/useFileUpload'
import Fedora from '@assets/logo/fedora.svg'
import { Input } from '@shared/ui/Inputs/DefaultInput/index'
import { TextArea } from '@shared/ui/TexrArea/index'
import AddButton from '@shared/ui/AddButton'
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import { useAddProduct } from '@shared/lib/hooks/Admin/Add/useAddProduct'
import Button from '@shared/ui/Buttons/DefaultReactButton/index'
import { useChangeRank } from '@shared/lib/hooks/useChangeRank'

const AdminRanks: React.FC = () => {
	const [email, setEmail] = useState<string>()
	const [rank, setRank] = useState<string>()
	const { changeRank } = useChangeRank()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (email && rank !== null) {
			const formData = new FormData()
			formData.append('email', email)
		}
	}

	return (
		<form>
			<div className={styles.container}>
				<div className={`${styles.container__content} flex flex-col items-center justify-center`}>
					<p className="mb-8 text-center  font-neoregular text-primary-light">
						Напиши email пользователя, чьё звание вы хотите поменять, а также укажите новое звание
						для него.
					</p>
					<form className="flex flex-col items-center">
						<Input
							type="text"
							name="email"
							placeholder="Почта пользователя"
							inputType="default"
							required
							onChange={(e) => setEmail(e.value)}
						/>
						<Input
							type="text"
							name="rank"
							placeholder="Введите новое звание пользователя"
							inputType="default"
							margin="mt-4"
							required
						/>
						<Button text="Поменять звание" buttonType="filled" margin="mt-8" />
					</form>
				</div>
			</div>
		</form>
	)
}

export default AdminRanks
