// export default only works with class, but not const
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
//import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss'; //scss
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1589479200000}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1594836000000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// match JS to html
ReactDOM.render(jsx, document.getElementById('app'));



