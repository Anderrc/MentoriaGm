'use client';
import styles from './page.module.css';
import Button from '../components/Atoms/Button/Button';
import { useEffect, useState } from 'react';
import store, { RootState } from '@/store/store';
import {
	decrementCounter,
	incrementCounter,
	incrementCounter2,
} from '@/store/reducers/counterSlice';
import { useSelector } from 'react-redux';
import { getPokemonData, setData } from '@/store/reducers/pokemonSlice';

export default function Home() {
	// const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	console.log('💩 ~ Home ~ name:', name);

	const { value } = useSelector((state: RootState) => state.counter);
	const { pokemons } = useSelector((state: RootState) => state.pokemonData);
	console.log('💩 ~ Home ~ pokemons:', pokemons);
	const increment = () => {
		store.dispatch(incrementCounter(value + 1));
	};

	const decrement = () => {
		store.dispatch(decrementCounter(value - 1));
	};

	// cuando se crea el componente se ejecuta el useEffect
	useEffect(() => {
		// if (count === 0) {
		// 	setName('Juan');
		// }
		// increment();

		// fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log('💩 ~ Home ~ data:', data);
		// 	});

		if (localStorage.getItem('pokemons') === null) {
			store
				.dispatch(getPokemonData())
				.then(data =>
					localStorage.setItem(
						'pokemons',
						JSON.stringify(data.payload.results),
					),
				);
		} else {
			const data = JSON.parse(localStorage.getItem('pokemons') as string);
			console.log('💩 ~ Home ~ data:', data);

			store.dispatch(setData(data));
		}
	}, []);

	return (
		<div className={styles.page}>
			<h1>Hello world!</h1>
			<p> Cuenta: {value} </p>
			<Button onClick={increment} text='Incrementar' />
			<Button onClick={decrement} text='Decrementar' />
			<Button
				onClick={() => {
					store.dispatch(incrementCounter2());
				}}
				text='Incrementar de a 2'
			/>

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

