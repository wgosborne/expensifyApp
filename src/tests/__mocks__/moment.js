//Mock moment library

const moment = jest.requireActual('moment'); //getting ahold of the actual moment libaray rather than our mock one

export default (timestamp = 0) => {
    return moment(timestamp);
};