import React from 'react'
import { AdminUserTab } from '../../../entities/AdminEntities/AdminUserTab/index'

import styles from './styles.module.scss'

import Oleg from '@assets/Admin/oleg.webp'
import Art from '@assets/Admin/artw.webp'

export const users = [
	{
		name: 'Ergali Gaidarov',
		position: 'Povar',
		photo: Oleg
	},
	{
		name: 'Ergali Gaidarov',
		position: 'Povar',
		photo: Oleg
	},
	{
		name: 'Ergali Gaidarov',
		position: 'Povar',
		photo: Art
	},
	{
		name: 'Ergali Gaidarov',
		position: 'Povar',
		photo: Oleg
	},
	{
		name: 'Ergali Gaidarov',
		position: 'Povar',
		photo: Oleg
	},
	{
		name: 'Askar Velikiy',
		position: 'Povar',
		photo: Oleg
	}
]

interface IUsers {
	users: Array<{
		photo: ImageMetadata
		name: string
		position: string
	}>
}

const TeamCard: React.FC<IUsers> = ({ users }) => {
	return (
		<div className={styles.adminCard}>
			{users.map((user, index) => (
				<AdminUserTab
					userTabType="users"
					userPhotoType="users"
					userTextType="users"
					key={index}
					name={user.name}
					position={user.position}
					photo={user.photo}
				/>
			))}
		</div>
	)
}

export default TeamCard
