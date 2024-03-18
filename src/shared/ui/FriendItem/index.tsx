import React from 'react'
import styles from './styles.module.scss'

interface Friend {
	id: string
	name: string
	photoUrl: string
}

interface FriendItemProps {
	friend: Friend
	onAddFriend: (friendId: string) => void
}

export const FriendItem: React.FC<FriendItemProps> = ({ friend, onAddFriend }) => {
	return (
		<div className={styles.friendItem}>
			<img src={friend.photoUrl} alt={friend.name} className={styles.friendPhoto} />
			<span className={styles.friendName}>{friend.name}</span>
			<button className={styles.addButton} onClick={() => onAddFriend(friend.id)}>
				Add Friend
			</button>
		</div>
	)
}
