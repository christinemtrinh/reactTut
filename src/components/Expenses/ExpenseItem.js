import React, { useState } from 'react'; 
import "./ExpenseItem.css"; //each component should have its own css
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem(props) {
  //props receives an object with attributes in HTML of App.js
  //const expenseDate = new Date(2021,2,28);    //adding javascript for dynamic variables
  //const expenseTitle = 'Car Insurance';
  //const expenseAmount = 294.67;
  //html but anything within curly brace is exec as JS

  //react functions (usually start with "use") must be called in function 
  const [title, setTitle] = useState(props.title); //set Title is the update function, array destructuring

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('upd');
  };

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button> 
    </Card>
  );
}

export default ExpenseItem;
