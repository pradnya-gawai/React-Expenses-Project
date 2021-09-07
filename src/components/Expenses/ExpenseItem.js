import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
function ExpenseItem  (props) 
{
    return (
        <Cards className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h1>{props.title}</h1>
            <div className="expense-item__price">${props.amount}</div>
            </div>
        </Cards>);
}

    export  default ExpenseItem;