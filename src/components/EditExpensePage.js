import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';

export class EditExpensePage extends React.Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.setState({ show: false });
        this.props.history.push('/');
        
    }

    render() {
        return (
            <div className="page">
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.showModal}>Remove Expense</button>
                </div>
                <Modal
                    isOpen={this.state.show}
                    className="modal"
                    onRequestClose={this.hideModal}
                >
                    <div className="modal-main">
                        <h2 className="modal-title">Delete this expense?</h2>
                        <div className="modal-buttons">
                            <button className="button button--link-sm" onClick={this.hideModal}>Cancel</button>
                            <button className="button" onClick={this.onRemove}>Confirm</button>
                        </div>
                            
                    </div>
                    </Modal>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);