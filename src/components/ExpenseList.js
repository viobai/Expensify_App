import React from 'react';
import { connect } from 'react-redux'; // connect react component to redux store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// props defined in mapStateToProps
export const ExpenseList = (props) => (
    <div>
        <h1>Expense List </h1>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            )
        }
        
    </div>
);

// state defined by store from <Provider>
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// first (): define the things we want to get from store
// second (): the component that we want the version of
export default connect(mapStateToProps)(ExpenseList);