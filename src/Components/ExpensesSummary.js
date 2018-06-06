import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export class ExpenseSummary extends React.Component{
    render(){
        const expenseLabel = this.props.expenseCount === 1 ? 'expense' : 'expenses';
        return(
            <div>
            
                <h1>Viewing {this.props.expenseCount} {expenseLabel} totalling to {this.props.expenseTotal} </h1>
                
                
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