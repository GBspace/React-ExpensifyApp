import React from 'react';
import {removeExpense} from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export const ExpenseListItem = ( {id,desc,amount,createAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}> Edit </Link>  
            <h3>{desc} </h3>
            <p> {amount} -- {createAt}</p>
        </div>
    );
};



export default connect()(ExpenseListItem);;