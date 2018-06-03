import moment from 'moment';

export default [{
    id:'1',
    desc: 'Gum',
    note: 'note1',
    amount:200,
    createAt: 0
},{
    id:'2',
    desc: 'Gum2',
    note: 'note2',
    amount:2002,
    createAt: moment(0).subtract(4, 'days').valueOf()
},{
    id:'3',
    desc: 'Gum3',
    note: 'note3',
    amount:2003,
    createAt: moment(0).add(4,'days').valueOf()
}];

