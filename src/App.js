import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description:'Fridge',
      amount:999.99
    },
    {
      date: new Date(2021, 11, 25),
      description:'MacBook',
      amount:999.99
    },
    {
      date: new Date(2021, 1, 3),
      description:'Jeans',
      amount:999.99
    }
  ];
  return (
    <div>
      <NewCost></NewCost>
      <Costs costs = {costs}/>
      
    </div>
  );
}

export default App;
