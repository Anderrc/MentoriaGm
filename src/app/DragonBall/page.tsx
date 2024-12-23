'use client';
import { Card } from '@/components/Organism/Card/Card';
import { ICharacters } from '@/types/IDragonBall';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const DragonBallPage = () => {
	const [characters, setCharacters] = useState<ICharacters[] | []>([]);

	useEffect(() => {
		fetch('https://dragonball-api.com/api/characters', {
			method: 'GET',
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setCharacters(data.items);
			});
		// .catch(error => {})
		// .finally(() => {});
	}, []);
	console.log('💩 ~ DragonBallPage ~ characters:', characters);

	return (
		<>
			<h1>Personajes</h1>
			<ul className={styles.listCharacters}>
				{characters.map((character, index) => (
					<Card key={index} {...character} />
				))}
			</ul>
		</>
	);
};

export default DragonBallPage;
