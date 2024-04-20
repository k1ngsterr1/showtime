import React, { useEffect, useState } from 'react';
import '@shared/styles/global.scss';
import styles from './styles.module.scss';

import Paragraph from '@shared/ui/ParagraphReact'
import VacanciesCard from '@entities/Card_Components/VacanciesCard';
import { useGetVacancies } from '@shared/lib/hooks/Admin/Get/useGetVacancies';

interface Vacancy {
  number: string;
  position: string;
  text: string;
  id: string;
}

const Vacancies: React.FC = () => {
	const [vacancies, setVacancies] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const { getVacancies } = useGetVacancies()

	useEffect(() => {
		setIsLoading(true)
		getVacancies()
			.then((data) => {
				if (Array.isArray(data)) {
					setVacancies(data)
				} else {
					console.error('Data is not an array:', data)

					setVacancies([])
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
      <main className={styles.client}>
        <div className={styles.client__content}>
          <h1 className="mt-32 text-primary-red">Вакансии</h1>
          <Paragraph
            paragraphType="white"
            width="23%"
            text="Хотите присоединиться к нашей команде? Взгляните на наши открытые вакансии и найдите свою возможность стать частью нашего увлекательного проекта."
            margin="mt-8"
          />
          <div className={styles.client__content_cards}>
            {vacancies.map((vacancy) => (
              <VacanciesCard
                key={vacancy.id}
                number={vacancy.number}
                position={vacancy.position}
                text={vacancy.text}
                vacancyId={vacancy.id}
              />
            ))}
          </div>
        </div>
      </main>

      <main className={styles.client_mob}>
        <div className={styles.client_mob__content}>
          <h1 className="mt-16 text-center text-primary-red">Вакансии</h1>
          <Paragraph
            paragraphType="white"
            width="70%"
            align="text-center"
            text="Хотите присоединиться к нашей команде? Взгляните на наши открытые вакансии и найдите свою возможность стать частью нашего увлекательного проекта."
            margin="m-auto pt-6"
          />
          <div className={styles.client_mob__content_cards}>
            {vacancies.map((vacancy) => (
              <VacanciesCard
                key={vacancy.id}
                number={vacancy.number}
                position={vacancy.position}
                text={vacancy.text}
                vacancyId={vacancy.id}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Vacancies;
