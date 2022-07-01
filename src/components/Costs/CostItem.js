import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, { useState } from 'react';


const CostItem = (props) => {

  const [description, SetDescription]  = useState(props.description);

  
  const changeDescriptionHandler = () =>{
    //descrition = 'new cost'
    SetDescription('New cost')
    //call CostItem(props) again (render again)
    console.log(description);
  }
  return (
    <div>
      <Card className='cost-item'>

        <CostDate date={props.date}/>
      <div className='const-item__description'>
        <h2>{description}</h2>
        <div className='cost-item__price'>{props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Change description</button>
      </Card>
    </div>
  );
}

export default CostItem;
