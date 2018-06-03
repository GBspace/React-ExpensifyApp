export const setTextFilter = (text = '')=>({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

export const sortByDate = ()=>({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

export const setStartDate = (startDate)=>({  //no need to set undefined as default as it is taken by default
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate)=>({  //no need to set undefined as default as it is taken by default
    type: 'SET_END_DATE',
    endDate
});
