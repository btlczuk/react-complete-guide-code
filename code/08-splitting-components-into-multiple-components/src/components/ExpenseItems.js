import ExpenseItem from './ExpenseItem';

function ExpenseItems(props) {
    console.log(props)
    return (
    <div>
        <h2>Let's get started!</h2>
        {props.expenses.map((expense) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />))}
    </div>);
}

export default ExpenseItems;