import React from "react";
import { connect } from 'react-redux';
import { setTextFilter } from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { sortByDate } from "../actions/filters";

const ExpenselistFilters = (props) => (
    <div>
        <input 
            type = "text" 
            value={props.filters.text} 
            onChange = {(e) => {
                props.dispatch(setTextFilter(e.target.value)); //writing to the redux store
        }}/>
        <select 
            value = {props.filters.sortBy} //controlled input = value is controlled by javascript, this line is evidence
            onChange = {(e) => { 
                if(e.target.value === 'amount'){
                    props.dispatch(sortByAmount())
                } else if (e.target.value === 'date') {
                    props.dispatch(sortByDate())
                }
            }}
        > 
            <option value = 'date'>Date</option>
            <option value = 'amount'>Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenselistFilters);