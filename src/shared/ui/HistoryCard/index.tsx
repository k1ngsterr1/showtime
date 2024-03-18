import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import HistoryCard from '@entities/Card_Components/HistoryCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'

import 'swiper/css'
import styles from './styles.module.scss'

export const history = [
	{
		name: 'Ruslan Pricol',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	},
	{
		name: 'Gaidar Lord',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	},
	{
		name: 'Artyom Andre',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	},
	{
		name: 'Zain Ihsan',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	},
	{
		name: 'Zain Ihsan',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	},
	{
		name: 'Zain Ihsan',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	},
	{
		name: 'Zain Ihsan',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	},
	{
		name: 'Zain Ihsan',
		data: '2020',
		paragraph:
			'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua.  Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. '
	}
]

interface SwiperHistoryProps {
	history: Array<{
		data: string
		name: string
		paragraph: string
	}>
}

type Swiper = any

export const SwiperHistory: React.FC<SwiperHistoryProps> = ({ history }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev()
		}
	}

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext()
		}
	}

<<<<<<< HEAD
	return (
		<div>
			<div className={`${'mb-12 flex items-center justify-end'} ${styles.buttons}`}>
				<div className="m-auto w-full"></div>
				<div className="flex w-[10%] justify-between">
					<RevolverButton buttonType="gallery" direction="previous" onClick={handlePrev} />
					<div className="scale-x-[-1]">
						<RevolverButton buttonType="gallery" direction="next" onClick={handleNext} />
					</div>
				</div>
			</div>
			<Swiper
				className="contacts__con__swiper"
				slidesPerView={2}
				spaceBetween={64}
				onSwiper={(swiperInstance) => {
					swiperRef.current = swiperInstance
				}}
			>
				{history.map((history, index) => (
					<SwiperSlide key={index}>
						<div className="flex">
							<HistoryCard name={history.name} data={history.data} paragraph={history.paragraph} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
=======
  return (
    <div>
      <div
        className={`${"flex items-center justify-end mb-12"} ${styles.buttons}`}
      >
        <div className="w-full m-auto"></div>
        <div className="flex justify-between w-[10%]">
          <RevolverButton
            buttonType="gallery"
            direction="previous"
            onClick={handlePrev}
          />
          <div className="scale-x-[-1]">
            <RevolverButton
              buttonType="gallery"
              direction="next"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
      <Swiper
        className={styles.swiper}
        slidesPerView={6}
        spaceBetween={64}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
      >
        {history.map((history, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              <HistoryCard
                name={history.name}
                data={history.data}
                paragraph={history.paragraph}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
>>>>>>> 3da3e236a5ae2058d1e4058c453c77b8c9a5d08c

export default SwiperHistory
