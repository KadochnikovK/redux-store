import { useState } from "react";
import AddFormComponent from "./components/AddForm/AddFormComponent";
import GoodsListComponent from "./components/GoodsList/GoodsListComponent";

function App() {

  const [goods, setGoods] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 1900, count: 4 }
  ])

  const createGood = (newGood, dropGood) => {
    setGoods(prev => ([...prev, { id: Date.now(), count: 1, ...newGood }]))
    dropGood()
  }

  const increment = (id) => {
    
    setGoods(prev => prev.map(good =>
      good.id === id ? { ...good, count: good.count + 1 } : good
    ))
  }

  const decrement = (id) => {
    
    setGoods(prev => prev.map(good =>
      good.id === id ? { ...good, count: Math.max(0, good.count - 1) } : good
    ).filter(good => good.id !== id || good.count > 0))
  }

  const deleteGood = (id) => {
    
    setGoods(prev => (prev.filter(good => good.id !== id)))
  }

  return (

    <div className="app content">
      <div className="goods">
        <AddFormComponent createGood={createGood} />
        <GoodsListComponent goods={goods} increment={increment} decrement={decrement} deleteGood={deleteGood}/>
      </div>
    </div>

  );
}

export default App;
