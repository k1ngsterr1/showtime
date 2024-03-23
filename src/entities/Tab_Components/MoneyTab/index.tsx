import React from 'react'

import styles from './styles.module.scss'

interface IMoneyTabProps {
	money: number
}

export const MoneyTab: React.FC<IMoneyTabProps> = ({ money }) => {
	return (
		<div className={styles.money_tab}>
			<span className={styles.money_tab__heading}>Ваш баланc:</span>
			<span className={styles.money_tab__balance}>{money} $$</span>
			<a className={styles.money_tab__link}>Пополнить баланс</a>
		</div>
	)
}
