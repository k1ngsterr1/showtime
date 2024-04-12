import React from 'react'
import UsersCard from '@entities/Card_Components/AdminUsersCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { useGetUnverifiedUsers } from '@shared/lib/hooks/Admin/Users/useGetUnverifiedUsers'

const AdminUsers: React.FC = () => {
	const [users, setUsers] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getUnverifiedUsers } = useGetUnverifiedUsers()

	useEffect(() => {
		setIsLoading(true)
		getUnverifiedUsers()
			.then((data) => {
				if (Array.isArray(data)) {
					setUsers(data)
				} else {
					console.error('Data is not an array:', data)

					setUsers([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			<div>
				{users.map((user) => (
					<div key={user.id}>
						<UsersCard userID={user.id} url={user.url} username={user.username} />
					</div>
				))}
			</div>
		</>
	)
}

export default AdminUsers
