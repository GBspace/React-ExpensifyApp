
export default (expenses)=>{
    return expenses.reduce((accumulatorValue, expense)=>(
        accumulatorValue + expense.amount
    ),0);
}; 