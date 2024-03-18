import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchPopup } from '@features/Popup_Components/SearchPopup'
import { friends } from '@shared/lib/content/friendContent'

import styles from './styles.module.scss'

export const SearchBar = () => {
	const [isPopupOpen, setPopupOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [friendsList, setFriendsList] = useState<string[]>([]) // Replace with your Friend type if you have one

	// useEffect(() => {
	//   if (searchTerm) {
	//     setPopupOpen(true);
	//     setFriendsList(
	//       friends.filter((name) =>
	//         name.toLowerCase().includes(searchTerm.toLowerCase())
	//       )
	//     );
	//   } else {
	//     setPopupOpen(false);
	//     setFriendsList([]);
	//   }
	// }, [searchTerm]);

	const openPopup = () => {
		setPopupOpen(true)
	}

	return (
		<div className={styles.search_bar}>
			<FontAwesomeIcon icon={faSearch} className={styles.search_bar__icon} />
			<input
				onChange={(e) => setSearchTerm(e.target.value)}
				type="text"
				placeholder="Поиск"
				className={styles.search_bar__input}
			/>
			{/* <SearchPopup isOpen={isPopupOpen} friends={friends} /> */}
		</div>
	)
}
