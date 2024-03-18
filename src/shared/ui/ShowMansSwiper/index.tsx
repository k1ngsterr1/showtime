import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ShowMansCard from '@entities/Card_Components/ShowMansCard/index'
import { RevolverButton } from '@shared/ui/Buttons/RevolverButton/index'
import { useCustomSwiper } from '@shared/lib/hooks/useCustomSwipes'

import 'swiper/css'
import styles from './styles.module.scss'

import ShowMan from '../../../assets/ShowMans/showman.webp'

export const showmans = [
<<<<<<< HEAD
	{
		photo: ShowMan,
		name: 'Ruslan Pricol',
		position: 'Обычный Смертный'
	},
	{
		photo: ShowMan,
		name: 'Gaidar Lord',
		position: 'Хороший Ведущий'
	},
	{
		photo: ShowMan,
		name: 'Artyom Andre',
		position: 'Мафия Алматы'
	},
	{
		photo: ShowMan,
		name: 'Zain Ihsan',
		position: 'Грязнокровка'
	},
	{
		photo: ShowMan,
		name: 'Erlan Erlanov',
		position: 'Сотрудник'
	},
	{
		photo: ShowMan,
		name: 'Nurmukhamed Pofamet',
		position: 'Сотрудник'
	},
	{
		photo: ShowMan,
		name: 'Aslanchik',
		position: 'Сотрудник'
	},
	{
		photo: ShowMan,
		name: 'Dauren Pidor',
		position: 'Сотрудник'
	}
]
=======
  {
    photo: ShowMan,
    name: "Ruslan Pricol",
    position: "Обычный Смертный",
  },
  {
    photo: ShowMan,
    name: "Gaidar Lord",
    position: "Хороший Ведущий",
  },
  {
    photo: ShowMan,
    name: "Artyom Andre",
    position: "Мафия Алматы",
  },
  {
    photo: ShowMan,
    name: "Zain Ihsan",
    position: "Грязнокровка",
  },
  {
    photo: ShowMan,
    name: "Erlan Erlanov",
    position: "Сотрудник",
  },
  {
    photo: ShowMan,
    name: "Aslanchik",
    position: "Сотрудник",
  },
  {
    photo: ShowMan,
    name: "Aslanchik",
    position: "Сотрудник",
  },
  {
    photo: ShowMan,
    name: "Dauren Pidor",
    position: "Сотрудник",
  },
];
>>>>>>> 3da3e236a5ae2058d1e4058c453c77b8c9a5d08c

interface ShowMansSwiperProps {
	showmans: Array<{
		photo: ImageMetadata
		name: string
		position: string
	}>
}

type Swiper = any

const ShowMansSwiper: React.FC<ShowMansSwiperProps> = ({ showmans }) => {
	const swiperRef = React.useRef<Swiper | null>(null)

	const { handlePrev, handleNext } = useCustomSwiper(swiperRef)

<<<<<<< HEAD
	return (
		<>
			<div className={styles.client}>
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
					slidesPerView={4}
					spaceBetween={4}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
					}}
				>
					{showmans.map((showman, index) => (
						<SwiperSlide key={index}>
							<div className="flex">
								<ShowMansCard
									photo={showman.photo}
									name={showman.name}
									position={showman.position}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={styles.client_mob}>
				<Swiper
					className="contacts__con__swiper"
					slidesPerView={1}
					spaceBetween={4}
					onSwiper={(swiperInstance) => {
						swiperRef.current = swiperInstance
					}}
				>
					{showmans.map((showman, index) => (
						<SwiperSlide key={index}>
							<div className="flex">
								<ShowMansCard
									photo={showman.photo}
									name={showman.name}
									position={showman.position}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
=======
  return (
    <>
      <div className={styles.client}>
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
          className={styles.contacts__con__swiper}
          slidesPerView={6}
          spaceBetween={64}
          onSwiper={(swiperInstance) => {
            swiperRef.current = swiperInstance;
          }}
        >
          {showmans.map((showman, index) => (
            <SwiperSlide key={index}>
              <div className="flex">
                <ShowMansCard
                  photo={showman.photo}
                  name={showman.name}
                  position={showman.position}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=''>
        <Swiper
          className={styles.swiper_mob}
          slidesPerView={5}
          spaceBetween={64}
          onSwiper={(swiperInstance) => {
            swiperRef.current = swiperInstance;
          }}
        >
          {showmans.map((showman, index) => (
            <SwiperSlide key={index}>
              <div className="mr-7">
                <ShowMansCard
                  photo={showman.photo}
                  name={showman.name}
                  position={showman.position}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
>>>>>>> 3da3e236a5ae2058d1e4058c453c77b8c9a5d08c

export default ShowMansSwiper
