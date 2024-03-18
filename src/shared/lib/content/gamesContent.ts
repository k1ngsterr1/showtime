interface NearGameCardData {
	date: string
	time: string
	place: string
	address: string
	mapHref: string
}

export const nearGameCards: NearGameCardData[] = [
	{
		date: '09.03.2024',
		time: '21:00 до 5:30',
		place: 'Кафедра вкуса',
		address: 'Ул. Баизака 280, парковка бесплатная',
		mapHref: 'https://maps.example.com/location1'
	},
	{
		date: '10.03.2024',
		time: '22:00 до 6:30',
		place: 'Кафе Urban',
		address: 'Ул. Примерная 10, парковка платная',
		mapHref: 'https://maps.example.com/location2'
	},
	{
		date: '10.03.2024',
		time: '22:00 до 6:30',
		place: 'Кафедра вкуса',
		address: 'Ул. Примерная 10, парковка платная',
		mapHref: 'https://maps.example.com/location2'
	},
	{
		date: '10.03.2024',
		time: '22:00 до 6:30',
		place: 'Кафедра вкуса',
		address: 'Ул. Примерная 10, парковка платная',
		mapHref: 'https://maps.example.com/location2'
	},
	{
		date: '10.03.2024',
		time: '22:00 до 6:30',
		place: 'Кафедра вкуса',
		address: 'Ул. Примерная 10, парковка платная',
		mapHref: 'https://maps.example.com/location2'
	}
]

import photo from '@assets/logo/fedora.svg'
import photo2 from '@assets/Events/photo_5451727234810368413_y.webp'

interface ShopCardData {
	heading: string
	photo: ImageMetadata
	desc: string
	price: string
}

export const ShopCards: ShopCardData[] = [
	{
		heading: 'Смайл Фэйс',
		desc: 'Погрузитесь в мир загадок и интриг с эксклюзивным аксессуаром Смайл Фэйс',
		price: '9$',
		photo: photo2
	},
	{
		heading: 'Смайл Фэйс',
		desc: 'Погрузитесь в мир загадок и интриг с эксклюзивным аксессуаром Смайл Фэйс',
		price: '9$',
		photo: photo2
	},
	{
		heading: 'Смайл Фэйс',
		desc: 'Погрузитесь в мир загадок и интриг с эксклюзивным аксессуаром Смайл Фэйс',
		price: '9$',
		photo: photo2
	},
	{
		heading: 'Смайл Фэйс',
		desc: 'Погрузитесь в мир загадок и интриг с эксклюзивным аксессуаром Смайл Фэйс',
		price: '9$',
		photo: photo2
	},
	{
		heading: 'Смайл Фэйс',
		desc: 'Погрузитесь в мир загадок и интриг с эксклюзивным аксессуаром Смайл Фэйс',
		price: '9$',
		photo: photo2
	},
	{
		heading: 'Смайл Фэйс',
		desc: 'Погрузитесь в мир загадок и интриг с эксклюзивным аксессуаром Смайл Фэйс',
		price: '9$',
		photo: photo2
	}
]
