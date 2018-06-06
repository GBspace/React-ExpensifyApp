import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

class ExpenseSummary extends React.Component{
    render(){
        return(
            <div>
                <h1>ExpenseSummary as of now</h1>
                {this.props.expenseCount}
                <p/>
                {this.props.expenseTotal}
            </div>
        );
    };
};



const mapStateToProps = (state)=>{
    let expenses = selectExpenses(state.expense,state.filters);
    return{
        expenseCount: selectExpenses(state.expense,state.filters).length,
        expenseTotal: expensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);