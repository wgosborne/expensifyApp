import moment from "moment";
import filtersReducer from "../../reducers/filters"; //since its defualt export I decide here what I want to call it
import filters from "../../reducers/filters";

//Basically checking that state is changing when user selects filters

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' }) //init is inherent from redux. its the starting value in store for type
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'e' });

    expect(state.text).toBe('e');
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) })

    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) })

    expect(state.endDate).toEqual(moment(0));
});
