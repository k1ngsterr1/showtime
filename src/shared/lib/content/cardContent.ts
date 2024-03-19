import mafia_icon from '@assets/Card/rifle_card.svg'
import fedora from '@assets/logo/fedora.svg'

interface RulesCardsData {
	name: string
	paragraph: string
	iconType: ImageMetadata
	icon: ImageMetadata
}

export const cards = [
	{
		name: 'Мафиози',
		paragraph:
			'Член мафии, работающий ночью. Цель мафии - устранить невиновных граждан и взять контроль над городом. Мафиози выбирают цель для убийства каждую ночь.',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Дон мафии',
		paragraph:
			'Глава мафии. Помимо выполнения обычных действий мафиози, имеет способность один раз за игру проверить игрока на принадлежность к полиции.',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Комиссар',
		paragraph:
			'Лидер гражданских. Каждую ночь может проверить одного игрока на принадлежность к мафии. Старается вычислить и убедить других граждан в том, кто является мафией.',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Доктор',
		paragraph:
			'Имеет способность каждую ночь выбирать одного игрока для лечения, в том числе и себя, спасая его от атаки мафии.',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Путана',
		paragraph:
			'Выбирает игрока каждую ночь, которого блокирует, лишая его возможности выполнять ночные действия. Это может включать в себя как блокировку действий мафии, так и предотвращение лечения от доктора.',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Маньяк',
		paragraph:
			'Одиночка, играющий сам за себя. Его цель - остаться последним выжившим. Каждую ночь может убивать любого игрока.',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Журналист',
		paragraph:
			'Гражданский, старающийся собрать информацию и делиться ей с другими игроками. Может раз за игру проверить двух игроков и узнать, являются ли они мафией или нет.',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Шериф',
		paragraph:
			'Дополнительная роль для гражданских, имеющая аналогичные полномочия, что и комиссар, но с некоторыми модификациями правил, в зависимости от вариации игры.',
		iconType: mafia_icon,
		icon: fedora
	}

]

export const RulesCards: RulesCardsData[] = [
	{
		name: 'Мафиози',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Lorem',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Lorem',

		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Lorem',

		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
		iconType: mafia_icon,
		icon: fedora
	},
	{
		name: 'Lorem',

		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
		iconType: mafia_icon,
		icon: fedora
	}
]
