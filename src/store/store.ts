import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './reducers/counterSlice';
import { pokemonSlice } from './reducers/pokemonSlice';

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
    pokemonData: pokemonSlice.reducer,
	},
	devTools: true,
});


export type RootState = ReturnType<typeof store.getState>

export default store;

