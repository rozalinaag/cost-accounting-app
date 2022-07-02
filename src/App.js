import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2020, 2, 12),
    description:'Fridge',
    amount:999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description:'MacBook',
    amount:999.99
  },
  {
    id: 'c3',
    date: new Date(2021, 1, 3),
    description:'Jeans',
    amount:999.99
  }
];

const App = () => {
  
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]; // previous version
    });
  }
  console.log(costs);
  return (
    <div>
      <NewCost onAddCost = {addCostHandler}></NewCost>
      <Costs costs = {costs}/>
      
    </div>
  );
};


export default App;
