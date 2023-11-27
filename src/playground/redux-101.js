import { createStore } from 'redux'; //deprecated but still works

//Action Generators - functions that return action objects
//  prevent spelling errors better

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

const store = createStore((state = { count : 0 }, action) => { 
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            }
        default: return state;
    }
    // if (action.type === 'INCREMENT'){
    //     return {
    //         count: state.count +1
    //     }
    // } else{
    //     return state;
    // }
});

//subscribe watches for changes and then acts on them
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Action - an object that gets sent to the store. Everytime it dispatches, createStore runs
//Incrementing count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

//Decrementing count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

//unsubscribe(); //stops printing changes

//Reset count
store.dispatch(resetCount());

store.dispatch(setCount( {count: 101 }));