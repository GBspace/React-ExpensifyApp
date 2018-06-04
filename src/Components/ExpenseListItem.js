import React from 'react';
import {removeExpense} from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ( {id,desc,amount,createAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}> Edit </Link>  
            <h3>{desc} </h3>
            <p>
                 {numeral(amount).format('$0,0.00')} 
                 -- 
                 {moment(createAt).format('MMMM Do YYYY')}
            </p>
        </div>
    );
};



export default connect()(ExpenseListItem);;