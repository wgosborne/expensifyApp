import moment from "moment";
import database from '../firebase/firebase';


//Get Visible Expenses
//  timestamps (milliseconds)
//  0 is Jan 1st 1970 (unix epoch)



export default (expenses, { text, sortBy, startDate, endDate}) => {
    // database.ref('expenses')
    //             .once('value')
    //             .then((snapshot) => {
    //                 const expenses = [];
    //                 snapshot.forEach((childSnapshot) => {
    //                     expenses.push({
    //                         id: childSnapshot.key,
    //                         ...childSnapshot.val()
    //                     });
    //                 });
    //                 console.log(expenses);
    //             })
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};