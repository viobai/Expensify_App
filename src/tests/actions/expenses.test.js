import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense( '123abc',  { note:'New Note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note'
        }
    });
});

test('should set up add expense action object with given values', () => {
    const action = addExpense(expenses[2]);
    // uuid is randomly generated, so toEqual does not work here
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 1000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref('expenses/${actions[0].expense.id}').once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done(); // force jest to wait until prev is done
        });
    });
});

test('should add default expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref('expenses/${actions[0].expense.id}').once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done(); // force jest to wait until prev is done
        })
    });
});

//test('should set up add expense action object with default values', () => {
//    const action = addExpense();
//    expect(action).toEqual({
//        type: 'ADD_EXPENSE',
//        expense: {
//            id: expect.any(String),
//            description: '',
//            note: '',
//            amount: 0,
//            createdAt: 0
//        }
//    });
//});