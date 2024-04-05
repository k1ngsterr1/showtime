import React, { useState } from 'react'
import ReactButton from '@shared/ui/Buttons/DefaultReactButton'
import ParagraphReact from '@shared/ui/ParagraphReact/index'
import { CardGalleryMob } from '@features/Swiper_Components/CardGalleryMob/index'
import { cards } from '@shared/lib/content/cardContent'
import { RulesContent } from '@widgets/Screens/SelectedRules/index'

import styles from './styles.module.scss'

interface Card {
	name: string
	paragraph: string
	iconType: string
	icon: string
}

interface RulesScreenProps {
	cards: Card[]
}

const RulesScreen: React.FC<RulesScreenProps> = () => {
	const [rulesType, setRulesType] = useState<string>('')
	return (
		<>
			<section className={styles.rules_screen} id="rulesgame">
				<div className={styles.rules_screen__container}>
					<div className={styles.rules_screen__container__upper}>
						<div className="flex flex-col items-start">
							<h5 className="text-primary-red">Правила игры</h5>
							<ParagraphReact
								paragraphType="white"
								width="40%"
								margin="mt-4"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
							/>
						</div>
						<div className="flex items-center gap-8">
							<ReactButton
								type=""
								text="Роли"
								buttonType="transparent"
								onClick={() => setRulesType('roles')}
							/>
							<ReactButton
								text="Общие правила"
								buttonType="transparent"
								onClick={() => setRulesType('rules')}
							/>
						</div>
					</div>
					<RulesContent cards={cards} rulesType={rulesType} />
				</div>
			</section>

			<section className={styles.rules_mob_screen} id="rulesgame_mob">
				<div className={styles.rules_mob_screen__container}>
					<div className={styles.rules_mob_screen__container__upper}>
						<div className="flex flex-col items-center">
							<h5 className="w-[50%] text-center text-primary-red">Правила игры</h5>
							<ParagraphReact
								align="text-center"
								paragraphType="white"
								width="60%"
								margin="mt-4"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
							/>
						</div>
						<div className="flex flex-col items-center gap-6">
							<ReactButton
								text="Роли"
								margin="mt-8"
								buttonType="transparent"
								onClick={() => setRulesType('rolesmob')}
							/>
							<ReactButton
								text="Общие правила"
								buttonType="transparent"
								onClick={() => setRulesType('rulesmob')}
							/>
						</div>
						<RulesContent cards={cards} rulesType={rulesType} />
					</div>
				</div>
			</section>
		</>
	)
}

export default RulesScreen
