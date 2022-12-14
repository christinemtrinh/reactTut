import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState();  //using multiple states per component
    // const [enteredAmount, setEnteredAmount] = useState();
    // const [enteredDate, setEnteredDate] = useState();

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);            //ensures variable is detached from component function LC
    // }; 

    // const amountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value);
    // };

    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value);
    // }; 

    const [userInput, setUserInput] = useState({                      //state as a single composite object
        enteredTitle: '', 
        enteredAmount: '',
        enteredDate: ''
    });

    const inputChangeHandler = event => {
        setUserInput({...userInput,
        enteredTitle: event.target.value
        })
    }


    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}; 

export default ExpenseForm;