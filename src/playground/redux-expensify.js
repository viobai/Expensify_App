


// log when action is taken
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

// actions
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt:1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 4, createdAt:2000 }));
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 }));
store.dispatch(setTextFilter('e'));
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(5));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));
