import { createStore } from 'redux'; // use once

// att must be assigned default, else would be undefined
const incrementCount = ({ incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET',
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

// reducer determine what happens with corresponding actions
// 1. pure functions, output only determined by input
// 2. never directly change state/action
const countReducer = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				count: state.count + incrementBy
			};
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
});

const store = createStore(countReducer);

store.subscribe(() => {
	console.log("updating");
});

// dispatch to store, send off action type to obj
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 101 }));





console.log(store.getState());
