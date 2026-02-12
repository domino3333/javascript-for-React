import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Notfound from './components/Notfound'
import Edit from './components/Edit'
import emotion1 from './assets/emotion1.png'

function App() {


  return (
    <>

      {/* 공통 부분 */}
      <h2>public img</h2>
      <img src="/emotion11.png"/>

      <h2>assets img</h2>
      <img src={emotion1}/>
      <img src="./assets/emotion1.png"/>

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
