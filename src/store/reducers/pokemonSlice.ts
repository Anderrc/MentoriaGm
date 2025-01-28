import { getPokemon } from '@/services/getPokemon';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPokemonData = createAsyncThunk(
	'pokemon/getPokemonData',
	async () => {
		return await getPokemon();
	},
);

export const pokemonSlice =createSlice( {
	name: 'pokemon',
	initialState: {
		pokemons: [],
    isLoading: false,
	},
	reducers: {

    setData: (state, action) => {
      state.pokemons = action.payload;
    },
  },
	extraReducers: builder => {
		builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.pokemons = action.payload.results;
      state.isLoading = false;
		}).addCase(getPokemonData.pending, (state) => {
			state.isLoading = true;
		});
	},
})


export const { setData } = pokemonSlice.actions;