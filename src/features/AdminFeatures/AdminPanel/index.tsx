import React from 'react'
import { AdminCard } from '@entities/AdminEntities/AdminCard/index'

import Logo from '@assets/logo/showtime_logo.svg'

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
	faBriefcase,
	faUsers,
	faNewspaper,
	faTrophy,
	faStar,
	faGlobe,
	faDeleteLeft
} from '@fortawesome/free-solid-svg-icons'

export const adminpanel = [
	{
		icon: faUser,
		tab: 'Команда',
		href: '/admin/team'
	},
	{
		icon: faUsers,
		tab: 'Пользователи',
		href: '/admin/users'
	},
	{
		icon: faPerson,
		tab: 'Ведущие',
		href: '/admin/showmans'
	},
	{
		icon: faCartShopping,
		tab: 'Услуги',
		href: '/admin/services'
	},
	{
		icon: faFileLines,
		tab: 'Заказы',
		href: '/admin/orders'
	},
	{
		icon: faBriefcase,
		tab: 'Вакансии',
		href: '/admin/vacancies'
	},
	{
		icon: faTrophy,
		tab: 'Звания',
		href: '/admin/ranks'
	},
	{
		icon: faNewspaper,
		tab: 'Новости',
		href: '/admin/news'
	},

	{
		icon: faStar,
		tab: 'Рейтинг',
		href: '/admin/rating'
	},
	{
		icon: faGlobe,
		tab: 'Online Рейтинг',
		href: '/admin/online-rating'
	},
	// {
	//   icon: faPenToSquare,
	//   tab: "Статьи",
	//   href: "/admin/articles",
	// },

	{
		icon: faCalendarDays,
		tab: 'Расписание',
		href: '/admin/schedule'
	},
	{
		icon: faShop,
		tab: 'Продукты',
		href: '/admin/products'
	},
	{
		icon: faCommentDots,
		tab: 'Отзывы',
		href: '/admin/reviews'
	},
	{
		icon: faDeleteLeft,
		tab: 'Удалить рейтинг',
		href: '/admin/delete-rating'
	},
	{
		icon: faSignOutAlt,
		tab: 'Выйти',
		href: '/'
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
					<img src={Logo.src} alt="Logo" onClick={() => window.open('/')} />
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
