import React from 'react';
import { connect } from 'react-redux'; // connect react component to redux store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// props defined in mapStateToProps
export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <p>No expenses</p>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    })
                )
            }
        </div>
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