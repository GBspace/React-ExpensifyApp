import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';

export class ExpenseSummary extends React.Component{
    render(){
        const expenseLabel = this.props.expenseCount === 1 ? 'expense' : 'expenses';
        return(
            <div className="page-header">
                <div className = "content-container">
                    <h1 className="page-header__title">Viewing <span>{this.props.expenseCount} </span> {expenseLabel} totalling to <span>{this.props.expenseTotal}</span> </h1>
                    <div className="page-header__actions">
                        <Link className = "button" to="/create">Add Expense</Link> 
                    </div>
                </div>
            </div>
        );
    };
};



const mapStateToProps = (state)=>{
    let visibleExpenses = selectExpenses(state.expense,state.filters);
    return{
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);