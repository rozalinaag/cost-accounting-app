import './CostForm.css';
import React, { useState } from 'react';
const CostForm = () => {

  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [userInput, setUserInput] = useState  ({
  //   name: '', 
  //   amount: '', 
  //   date: ''
  // });

  const nameChangeHandler = (event) =>{
    setInputName(event.target.value)
    // setUserInput((previousState) => {
    //   return {
    //     ...userInput, 
    //     name: event.target.value
    //   }
    // })
    // console.log(event.target.value);

  };

  const amountChangeHandler = (event) =>{
    setInputAmount(event.target.value)
    // setUserInput((previousState) => {
    //   return {
    //     ...userInput, 
    //     amount: event.target.value
    //   }
    // })
  }

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput((previousState) => {
    //   return {
    //     ...userInput, 
    //     date: event.target.value
    //   }
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
        name: inputName, 
        amount: inputAmount, 
        date: new Date(inputDate)
    };

    console.log(costData);
  };


  return (
    <form onSubmit = {submitHandler}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Name</label>
            <input type='text' onChange = {nameChangeHandler}></input>
          </div>
          <div className="new-cost__control">
            <label>Summ</label>
            <input type='number' min='0.01' step = '0.01' onChange = {amountChangeHandler}></input>
          </div>
          <div className="new-cost__control">
            <label>Date</label>
            <input type='date' min='2019-01-01' step = '2022-12-31' onChange={dateChangeHandler}></input>
          </div>
          <div className=".new-cost__actions">
            <button type="submit" >Add spending</button>
          </div>
        </div>
    </form>
  )
}

export default CostForm;