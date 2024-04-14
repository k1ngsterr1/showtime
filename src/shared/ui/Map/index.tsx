import styles from './styles.module.scss'

export const Map = () => {
	return (
		<>
			<div style={{ width: '50%' }} className={styles.map}>
				<iframe
					width="100%"
					height="320"
					frameBorder="0"
					scrolling="no"
					marginHeight={0}
					marginWidth={0}
					src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=%20%D0%91%D1%83%D1%85%D0%B0%D1%80-%D0%96%D0%B8%D1%80%D0%B0%D1%83%2037,%20%D0%91%D0%B0%D1%80%20%D0%9A%D0%B0%D0%BC%D0%B5%D0%BB%D0%BE%D1%82+(Bar%20Kamelot)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				>
					<a href="https://www.gps.ie/">gps systems</a>
				</iframe>
			</div>
			<div style={{ width: '200%' }} className={styles.map_mob}>
				<iframe
					width="100%"
					height="320"
					frameBorder="0"
					scrolling="no"
					marginHeight={0}
					marginWidth={0}
					src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=%20%D0%91%D1%83%D1%85%D0%B0%D1%80-%D0%96%D0%B8%D1%80%D0%B0%D1%83%2037,%20%D0%91%D0%B0%D1%80%20%D0%9A%D0%B0%D0%BC%D0%B5%D0%BB%D0%BE%D1%82+(Bar%20Kamelot)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				>
					"<a href="https://www.gps.ie/">gps systems</a>
				</iframe>
			</div>
		</>
	)
}
