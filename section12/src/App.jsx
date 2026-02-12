import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Notfound from './components/Notfound'
import Edit from './components/Edit'
import Button from './components/Button'

function App() {

  const onClickButton = (e)=>{
  console.log(e);
    alert(e.target.innerText);
  }

  return (
    <>
    <Button text={"저장하기"} type={"POSITIVE"} onClick={onClickButton}/>
    <Button text={"취소하기"} type={"NEGATIVE"} onClick={onClickButton}/>
    <Button text={"삭제하기"} type={"POSITIVE"} onClick={onClickButton}/>
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
