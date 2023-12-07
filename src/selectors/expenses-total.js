export default (expenses) => {
    return expenses
        .map((expense) => expense.amount) //taking objects and getting back an array of numbers
        .reduce((sum, value) => sum + value, 0); //adding them up
};