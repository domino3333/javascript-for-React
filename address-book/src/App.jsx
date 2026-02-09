import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Adder from './components/Adder';

function App() {

  //연락처를 관리하는 state
  const[address,setAddress] = useState([]);


  const addAddress = (input)=>{
    setAddress(prev=>[...prev,input])
  }
  console.log(address)


  return (
    <>
    <Header/>
    <Adder addAddress={addAddress}/>
    <Content address = {address}/>
    </>
  )
}

export default App
