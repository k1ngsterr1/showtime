import mafia_icon from '@assets/Card/rifle_card.svg'
import fedora from '@assets/logo/fedora.svg'

<<<<<<< HEAD
export const cards = [
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
=======
interface RulesCardsData {
  name: string;
  paragraph: string;
  iconType: ImageMetadata;
  icon: ImageMetadata;
}

export const RulesCards: RulesCardsData[] = [
  {
    name: "Мафиози",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
    iconType: mafia_icon,
    icon: fedora,
  },
  {
    name: "Lorem",
    paragraph:
      "Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
    iconType: mafia_icon,
    icon: fedora,
  },
  {
    name: "Lorem",
>>>>>>> 3da3e236a5ae2058d1e4058c453c77b8c9a5d08c

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
