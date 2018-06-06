import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 for no expenses',()=>{
    const response = expensesTotal([]);
    expect(response).toBe(0);
});

test('should correctly add up single expense',()=>{
    const response = expensesTotal([expenses[0]]);
    expect(response).toBe(200);
});

test('should correctly add up all the values',()=>{
    const response = expensesTotal(expenses);
    expect(response).toBe(4205); 
});