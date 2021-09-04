import './ExpenseItem.css'
function ExpenseItem()
{
    return (
        <div className="expense-item">
            <div>28th March 2021</div>
            <div className="expense-item__description">
                <h1>Car Insurance</h1>
                 <div className="expense-item__price">$249.4</div>
            </div>
        </div>);
}

    export  default ExpenseItem;