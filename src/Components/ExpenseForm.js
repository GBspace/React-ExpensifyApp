import "react-dates/initialize";
import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';



// const now = moment();
// console.log(now.format('MMM Do YYYY'));

class ExpenseForm extends React.Component{
    constructor(props){  //constructor is used to access props
        super(props);  

        this. state = {
            description: props.expense? props.expense.desc : '',
            note: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createAt: props.expense? moment(props.expense.createAt) : moment(),
            calanderFocused: false,
            error: ''
        }
    }
   

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({ note }));
    };

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }));
        }
    };

    onDateChange = (createAt) =>{
        if(createAt){ 
            this.setState(()=>({ createAt }));
        }
    };

    onFocusChange = ({focused}) =>{
        this.setState(()=>({
            calanderFocused :focused 
        }));
    };

    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({
                error: "Please provide description and amount"
            }));
        }else{
            this.setState(()=>{
                error: ''
            });
            this.props.onSubmit(
                {
                    desc: this.state.description,
                    amount: parseFloat(this.state.amount, 10),
                    createAt: this.state.createAt.valueOf(),
                    note: this.state.note

                }
                
            );
            // this.setState(()=>({
            //     description: '',
            //     note: '',
            //     amount: '',
            //     createAt: moment(),
            //     calanderFocused: false,
            //     error: ''
            // }));
        }
    };

    render(){
        return(
               <form className = "form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error"> {this.state.error }</p>}
                    <input type="text"
                    placeholder ="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    className="textInput"
                    />
                    <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    className="textInput"
                    />
                    
                    <SingleDatePicker 
                    date = {this.state.createAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calanderFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>{false}}
                    />

               

                    <textarea
                        className="textarea"
                        placeholder="Comments (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <div>   
                        <button className="button" > Save Expense </button>
                    </div>
               </form>
         
        );
    }
}

export default ExpenseForm;