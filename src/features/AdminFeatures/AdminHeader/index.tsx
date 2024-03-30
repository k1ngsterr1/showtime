import AdminHeaderUserTab from '@entities/AdminEntities/AdminHeaderUserTab/index'

import styles from './styles.module.scss'

interface HeaderProps {
	name: string
	position: string
	photo: ImageMetadata
}

const AdminHeader: React.FC<HeaderProps> = ({ name, position, photo }) => {
	return (
		<div className={styles.header}>
			<span className={styles.header__subheading}>Панель администратора</span>
			<div className={styles.header__usertab}>
				<AdminHeaderUserTab name={name} position={position} photo={photo} />
			</div>
		</div>
	)
}

export default AdminHeader
