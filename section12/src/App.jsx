import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Notfound from './components/Notfound'
import Edit from './components/Edit'
import Button from './components/Button'
import Header from './components/Header'

function App() {

  const onClickButton = (e) => {
    console.log(e);
    alert(e.target.innerText);
  }



  return (
    <>
      <Header title={"HEADER"} leftChild={<Button text={"LEFT"} onClick={(e) => alert(e.target.innerText)} type={"POSITIVE"} />} rightChild={<Button text={"RIGHT"} type={"NEGATIVE"} onClick={(e) => alert(e.target.innerText)} />} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new/:id' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>

    </>
  )
}

export default App
