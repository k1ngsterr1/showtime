import React from 'react'
import { AdminCard } from '@entities/AdminEntities/AdminCard/index'

import Logo from '@shared/ui/Icons/Logo'

import styles from './styles.module.scss'

import {
	faUser,
	faCartShopping,
	faFileLines,
	faSignOutAlt,
	faCalendarDays,
	faShop,
	faPerson,
	faCommentDots,
	faBriefcase
} from '@fortawesome/free-solid-svg-icons'

export const adminpanel = [
	{
		icon: faUser,
		tab: 'Команда',
		href: 'team'
	},
	{
		icon: faCartShopping,
		tab: 'Услуги',
		href: 'services'
	},
	{
		icon: faFileLines,
		tab: 'Заказы',
		href: 'orders'
	},
	{
		icon: faBriefcase,
		tab: 'Вакансии',
		href: 'vacancies'
	},
	{
		icon: faCalendarDays,
		tab: 'Расписание',
		href: 'schedule'
	},
	{
		icon: faPerson,
		tab: 'Ведущие',
		href: 'showmans'
	},
	{
		icon: faShop,
		tab: 'Продукты',
		href: 'products'
	},
	{
		icon: faCommentDots,
		tab: 'Отзывы',
		href: 'reviews'
	},
	{
		icon: faSignOutAlt,
		tab: 'Выйти',
		href: 'logout'
	}
]

interface IPanel {
	adminpanel: Array<{
		icon: any
		tab: string
		href: string
	}>
}

export const AdminPanel: React.FC<IPanel> = ({ adminpanel }) => {
	return (
		<main className={styles.panel}>
			<div className={styles.panel__content}>
				<div className={styles.panel__content_logo}>
					<Logo />
				</div>
				<div className={styles.panel__content_card}>
					{adminpanel.map((item, index) => (
						<AdminCard key={index} icon={item.icon} tab={item.tab} href={item.href} />
					))}
				</div>
			</div>
		</main>
	)
}
