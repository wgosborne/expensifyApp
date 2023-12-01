import React from "react";
import moment from 'moment';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
//moment is the standard for dates

export default class ExpenseForm extends React.Component { //using a class component so we can use state
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value; //or you can call e.persist() then go through and pass in note
        this.setState(() => ({ note }))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount}));
        };
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}))
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        onChange =  {this.onDescriptionChange}
                    />
                    <input
                        type="text" //switching to text to add more validation
                        placeholder="Amount"
                        value = {this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false} //makes everyday available
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value = {this.state.note}
                        onChange = {this.onNoteChange}
                    >

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}