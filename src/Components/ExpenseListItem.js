import React from 'react';
import {removeExpense} from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ( {id,desc,amount,createAt}) => {
    return (
       
        <Link className="list-item" to={`/edit/${id}`}> 
            <div>
                <h3 className="list-item__title">{desc} </h3>
                <span className="list-item__subtitle">{moment(createAt).format('MMMM Do YYYY')}</span>
            </div> 
            <h3 className="list-item__data">
                {numeral(amount).format('0,0')} 
            </h3>               
        </Link>  
            
            
       
    );
};



export default connect()(ExpenseListItem);;