import React from 'react';
import DefaultButton from '@shared/ui/Buttons/DefaultReactButton';
import Paragraph from '@shared/ui/ParagraphReact';
import NewsMainCard from '@entities/Card_Components/NewsMainCard';
import { useGetNews } from '@shared/lib/hooks/Admin/Get/useGetNews'
import { useState } from 'react';
import { useEffect } from 'react';


import styles from './styles.module.scss';
import '@shared/styles/global.scss';

interface Article {
    img: string;
    time: string;
    heading: string;
    paragraph: string;
}

const NewsSection: React.FC = () => {
	const [news, setNews] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getNews } = useGetNews()

    useEffect(() => {
		setIsLoading(true)
		getNews()
			.then((data) => {
				if (Array.isArray(data)) {
					setNews(data)
				} else {
					console.error('Data is not an array:', data)

					setNews([])
				}
			})
			.catch((error) => {
				console.error('Failed to fetch showmans:', error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

    return (
        <>
            <section className={`${'bg-primary-dark'} ${styles.container}`}>
                <div className="m-auto mt-48 w-[86.6%]">
                    <div className="mt-8 flex justify-end">
                        <h3 className="text-primary-red">Новости</h3>
                    </div>
                    <span className="flex justify-end">
                        <Paragraph
                            paragraphType="white"
                            width="40%"
                            align="text-right"
                            text="Наши ивенты станут вашей идеальной возможностью встретиться с новыми людьми, наладить коммуникацию и просто хорошо провести время после напряженной рабочей недели. Ведь мафия - это не только игра, это уникальный социальный опыт, где каждый ход может изменить ход событий."
                        />
                    </span>
                    <div className="m-auto flex w-full justify-between pt-16">
                    {news.map((newsData) => (
									<div key={newsData.id} className={`${styles.card} mt-12`}>
										<NewsMainCard
											newsId={newsData.id}
											date={newsData.date}
											url={newsData.url}
											heading={newsData.heading}
											description={newsData.description}
										/>
									</div>
								))}
                    </div>
                </div>
            </section>

            <section className={`${'bg-primary-dark'} ${styles.container_mob}`}>
                <div className="m-auto flex flex-col items-center pt-16">
                    <h4 className="text-primary-red">Новости</h4>
                    <div className="mt-8 flex flex-col items-center gap-10">
                    {news.map((newsData) => (
									<div key={newsData.id} className={`${styles.card} mt-12`}>
										<NewsMainCard
											newsId={newsData.id}
											date={newsData.date}
											url={newsData.url}
											heading={newsData.heading}
											description={newsData.description}
										/>
									</div>
								))}
                        <DefaultButton margin="mt-4" text="Все новости" buttonType="transparent" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsSection;
