import moment from "moment";

const filters = {
    text: '',
    sortBY: 'date',
    startDate: undefined,
    endDate: undefined
};

const altfilters = {
    text: 'bills',
    sortBY: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altfilters };