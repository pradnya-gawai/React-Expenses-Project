import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from './ExpensesList';

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
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    
   

    
    
    return(
    <div>
    <Cards className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
    <ExpensesList items={filteredExpenses} />

    </Cards>
  </div>


    );



}
export  default Expenses ;