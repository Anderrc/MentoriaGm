export const getPokemon = async () => {
	try {
		const response = await fetch(
			'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('💩 ~ getPokemon ~ error:', error);
		return [];
	}
};
