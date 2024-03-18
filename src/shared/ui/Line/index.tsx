import styles from './styles.module.scss'

interface LineProps {
	position?: string
}

export const Line: React.FC<LineProps> = ({ position }) => {
	return <span className={`${styles.line} ${position}`} />
}
