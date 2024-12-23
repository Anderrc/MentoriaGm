import React from 'react';

interface ITextValue {
	label: string;
	value: string;
}

export const TextValue = ({ label, value }: ITextValue) => {
	return (
		<div>
			<span>{label}</span>
			<span>{value}</span>
		</div>
	);
};
