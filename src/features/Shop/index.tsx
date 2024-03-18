import { ShopTab } from '@entities/Tab_Components/ShopTab'
import { MenuButton } from '@shared/ui/Icons/MenuButton'
import { useCustomShop } from '@shared/lib/hooks/useCustomShop'
import { ShopSwiper } from '@features/Swiper_Components/ShopSwiper'
import { ShopCards } from '@shared/lib/content/gamesContent'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export const Shop = () => {
	const { onShopClose } = useCustomShop()

	return (
		<aside className={styles.shop} id="shop">
			<div className={styles.shop__upper}>
				<h1 className={styles.shop__upper__heading}>Магазин</h1>
				<div onClick={onShopClose} className="overflow-hidden">
					<FontAwesomeIcon icon={faClose} className={styles.shop__upper__icon} />
				</div>
			</div>
			<div className="sticky ml-32 flex w-[86.6%] flex-col">
				<ShopSwiper cards={ShopCards} />
			</div>
			<section className={styles.shop__section}>
				<h2 className={styles.shop__section__heading}>Лучшие акции</h2>
			</section>
		</aside>
	)
}
