import './App.css'
import Adder from './components/Adder'
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import { useState, useRef } from 'react'

function App() {

  const [goods, setGoods] = useState([{
    id: -1,
    name: '',
    price: 0
  }]);
  const idRef = useRef(0);

  const addGoods = (name, price) => {

    const newGoods = {
      id: idRef.current++,
      name: name,
      price: price
    }

    setGoods([...goods, newGoods]);
  }

  console.log(goods)

  const deleteGoods = (id) => {
    setGoods(prev => prev.filter(item => item.id !== id))
  }


  return (
    <>
      <Header />
      <Adder addGoods={addGoods} />
      <ShoppingList goods={goods} deleteGoods={deleteGoods} />
    </>
  )
}

export default App
