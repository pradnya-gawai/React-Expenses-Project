import './ExpenseItem.css'
function ExpenseItem  () 
{
    const expenseDate=new Date(2021, 2, 28);
    const expenseTitle="Car Insurance";
    const expenseAmount=247.00;
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h1>{expenseTitle}</h1>
                 <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>);
}

    export  default ExpenseItem;