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
    return(
    <div>
    <Cards className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expense) =>(
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
         />))}
    </Cards>
        </div>
    );



}
export  default Expenses ;