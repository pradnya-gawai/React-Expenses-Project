import React from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {

    return

    (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                <lable>Title</lable>
                <input type='text'/>
                </div>
                <div className='new-expense__controls'>
                <lable>Amount</lable>
                <input type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__controls'>
                <lable>Date</lable>
                <input type='date' min='2019-1-1' max='2022-12-31'/>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm;
