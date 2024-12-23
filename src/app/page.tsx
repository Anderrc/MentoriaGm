'use client';
import styles from './page.module.css';
import Button from '../components/Atoms/Button/Button';
import { useEffect, useState } from 'react';

export default function Home() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	console.log('💩 ~ Home ~ name:', name);

	// console.log('💩 ~ Home ~ count:', count);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		if (count === 0) {
			setName('Juan');
		}
		setCount(count - 1);
	};

	// cuando se crea el componente se ejecuta el useEffect
	useEffect(() => {
		// if (count === 0) {
		// 	setName('Juan');
		// }
		// increment();

		fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
			.then(res => res.json())
			.then(data => {
				console.log('💩 ~ Home ~ data:', data);
			});
	}, []);

	// cuando se cambia el estado se ejecuta el useEffect
	useEffect(() => {
		console.log('💩 ~ Ocurrio un cambio en el estado de count:', count);

		if (count === 0) {
			setName('Juan');
		}
	}, [count, name]);

	return (
		<div className={styles.page}>
			<h1>Hello world!</h1>
			<p> Cuenta: {count} </p>
			<Button onClick={increment} text='Incrementar' />
			<Button onClick={decrement} text='Decrementar' />

			<input
				type='text'
				value={name}
				onChange={e => {
					setName(e.target.value);
					console.log('💩 ~ Home ~ name:', name);
				}}
			/>
		</div>
	);
}

