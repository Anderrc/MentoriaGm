import { TextValue } from '@/components/Atoms/TextValue/TextValue';
import { ICharacters } from '@/types/IDragonBall';
import Image from 'next/image';
import React from 'react';
import styles from './Card.module.css';
import { useRouter } from 'next/router';

export const Card = (props: ICharacters) => {
	const { image, name, ki, maxKi, affiliation, id } = props;

	const router = useRouter();

	return (
		<button
			className={styles.card}
			onClick={() => router.push(`/character/${id}`)}>
			<Image width={100} height={100} src={image} alt={name}></Image>
			<p>{name}</p>
			<TextValue label={'Ki Base '} value={ki}></TextValue>
			<TextValue label={'Ki Total '} value={maxKi}></TextValue>
			<TextValue label={'Afiliación '} value={affiliation}></TextValue>
		</button>
	);
};
