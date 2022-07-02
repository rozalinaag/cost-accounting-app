import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
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


  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Compnent');
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}></NewCost>
      <Costs costs = {costs}/>
      
    </div>
  );
};


export default App;
