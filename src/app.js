// export default only works with class, but not const
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
//import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss'; //scss
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

//store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 1589479200000}));
//store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1594836000000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    // if logged in, retrieve and set user expenses in firebase, go to dashbaord
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                console.log('pushed');
                history.push('/dashboard');
            }
        });
    // if not logged in, go to login page
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});



