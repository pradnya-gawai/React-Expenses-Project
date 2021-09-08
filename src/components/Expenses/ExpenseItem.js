import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
function ExpenseItem  (props) 
{        let title="updated"

    const clickHnadler=()=>
    
    {
        console.log(title);
    }
    return (
        <Cards className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h1>{title}</h1>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHnadler}
            >Change title</button>
        </Cards>);
}

    export  default ExpenseItem;