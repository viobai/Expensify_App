import moment from 'moment';

// get visible expense
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // most recent first
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            // if b amount > a amount, b comes first
            return a.amount < b.amount ? 1 : -1;
        }
    })
}