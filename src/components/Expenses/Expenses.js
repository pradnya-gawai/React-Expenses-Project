import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Cards from "../UI/Cards";
import  ExpensesFilter from'./ExpensesFilter';

function Expenses(props){
    const [filteredYear,setFilteredYear]=useState("2020")
    const filterChangeHandler =(selectedYear)=>
    {
    //     console.log("Expenses.js");
    //     console.log(selectedYear);
    setFilteredYear(selectedYear);
    }
    const filteredExpenses =props.items.filter(expense => {
        return expense.date.getFullYear().toString() == filteredYear;
    
    }
    );
    let expensesContenet=<p> No record found</p>
    if(filteredExpenses.length >0)
    {filteredExpenses.map((expense) =>( 
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
         />))}
    
    
    return(
    <div>
    <Cards className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expensesContenet}
    </Cards>
        </div>
    );



}
export  default Expenses ;