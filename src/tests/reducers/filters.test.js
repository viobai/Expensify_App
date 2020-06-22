import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    // because default is already date
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'filter';
    const action = { type: 'SET_TEXT_FILTER' , text};
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);
    // use toEqual
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);
    // use toEqual
    expect(state.endDate).toEqual(endDate);
});

