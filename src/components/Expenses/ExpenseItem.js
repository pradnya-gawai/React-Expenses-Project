import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
import { useState } from 'react';
function ExpenseItem  (props) 
{   const [title,setTitle]=useState(props.title)

    const clickHnadler=()=>
    
    {
        setTitle('udated');
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