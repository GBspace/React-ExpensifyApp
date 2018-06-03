//get visibile expenses
import moment from 'moment';
import { create } from 'domain';

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const createAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment,'day'): true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createAtMoment,'day'): true;
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
        // return textMatch;
        // return startDateMatch && endDateMatch;
    }).sort((a,b)=>{
        if(sortBy==='date') {
            return a.createAt < b.createAt ? 1 : -1;
        }
        else if(sortBy==='amount'){
            return a.amount > b.amount ? 1 : -1;
        }
    });
};
