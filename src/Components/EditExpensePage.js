import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../Components/ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.startEditExpense(this.props.expense.id, expense)
        .then(()=>{
            this.props.history.push("/dashboard");
        });
        
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id}).then(()=>{
            this.props.history.push('/dashboard');
        });
      
    };

    render(){
        return(
        <div>
            <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit} />

            <button 
                onClick={this.onRemove}> Remove </button>
        </div>
        );
    };
};

const mapStateToProps = (state,props)=>{
    return({
        expense: state.expense.find((expense)=>{
            return expense.id === props.match.params.id;
        })
    });
};

const mapDispatchToProps = (dispatch,props)=>({
    startEditExpense: (id,expense)=>dispatch(startEditExpense(id,expense)),
    startRemoveExpense: (data)=>dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);