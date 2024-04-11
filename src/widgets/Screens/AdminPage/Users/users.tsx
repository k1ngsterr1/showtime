import React, { useEffect, useState } from 'react';
import { Loader } from '@shared/ui/Loader';
import UsersCard from '@entities/AdminEntities/AdminUsersCard';
import styles from '../ServicesList/styles.module.scss'
import { useGetUnverifiedUsers } from '@shared/lib/hooks/Admin/Users/useGetUnverifiedUsers';
import LinkButton from '@shared/ui/Buttons/LinkReactButton/index'
import Buttons from '@shared/ui/Buttons/DefaultReactButton/index'

import Logo from '@assets/logo/showtime_logo.svg'
import '@shared/styles/global.scss'

export const Users = () => {
    const [users, setUsers] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const { getUnverifiedUsers } = useGetUnverifiedUsers();

    useEffect(() => {
		setIsLoading(true);
		getUnverifiedUsers()
			.then((data) => {
				if (Array.isArray(data)) {
					setUsers(data);
				} else {
					console.error('Data is not an array:', data);
					setUsers([]);
				}
			})
			.catch((error) => {
				console.error('Failed to fetch users:', error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

    return (
        <main className={styles.services}>
            <div className={styles.services__content}>
                <div className={styles.services__content_logo}>
                    <img src={Logo.src} alt="Logo" />
                </div>
                <div className={styles.services__content_cards}>
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <Loader />
                        </div>
                    ) : (
                        <div className={`${styles.services__content_card} flex flex-wrap gap-12`}>
                            {users.map((user) => (
                                <div key={user.id} className={`${styles.card} mt-12`}>
                                    <UsersCard
										userId={user.id}
                                        url={user.url}
										name={user.name}
                                    />
                                    <Buttons
                                        buttonType="filled"
                                        text="Edit" // Replace with your text
                                        margin="mt-5"
                                        onClick={() => {/* Implement edit functionality */}}
                                    />
                                    <Buttons
                                        buttonType="filled"
                                        text="Delete" // Replace with your text
                                        margin="mt-5"
                                        // onClick={() => handleDeleteUser(user.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <LinkButton buttonType="filled" href="/users" text="Back" margin="mt-16" />
            </div>
        </main>
    );
};
