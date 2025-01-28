import { createSlice } from '@reduxjs/toolkit';

const initialState: {
	value: number;
} = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		resetCounter: () => {
			return initialState;
		},
		incrementCounter: (state, action) => {
			state.value = action.payload;
		},
		decrementCounter: (state, action) => {
			state.value = action.payload;
		},
		incrementCounter2: state => {
			state.value = state.value + 2;
		},
	},
});

export const {
	incrementCounter,
	resetCounter,
	decrementCounter,
	incrementCounter2,
} = counterSlice.actions;

