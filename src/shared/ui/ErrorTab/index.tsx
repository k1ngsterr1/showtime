import React from 'react'

import styles from './styles.module.scss'

interface ErrorTabProps {
	text: string
}

export const ErrorTab: React.FC<ErrorTabProps> = ({ text }) => {
	return <div className={styles.error_tab}>{text}</div>
}
