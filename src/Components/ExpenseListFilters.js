import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';


export class ExpenseListFilters extends React.Component{
    state = {
        calanderFocused: null
    };
    onDatesChange = ({startDate,endDate})=>{
        
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calanderFocused)=>{
        this.setState(()=>({
            calanderFocused
        }));
    };

    onTextChange =(e)=>{
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e)=>{
        e.target.value==='date' ? this.props.sortByDate() :
        this.props.sortByAmount();
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
        
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value = 'date' > Date </option>
                    <option value = 'amount'> Amount </option>
                </select>
                <DateRangePicker
                    startDate = {this.props.filters.startDate}
                    startDateId= "start"
                    endDate = {this.props.filters.endDate}
                    endDateId = "end"
                    onDatesChange = {this.onDatesChange}
                    focusedInput={this.state.calanderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                /> 
            </div>
        );
    };
};



const mapStateToProps = (state) =>{
    return{
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch)=>({
    setTextFilter: (text)=>dispatch(setTextFilter(text)),
    sortByDate: ()=>dispatch(sortByDate()),
    sortByAmount: ()=>dispatch(sortByAmount()),
    setEndDate: (endDate)=>dispatch(setEndDate(endDate)),
    setStartDate: (startDate)=>dispatch(setStartDate(startDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);