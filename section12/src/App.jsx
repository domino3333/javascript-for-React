import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Notfound from './components/Notfound'
import Edit from './components/Edit'
import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'

function App() {


  return (
    <>

      {/* 공통 부분 */}
      <h2>public img</h2>
      <img src="/emotion11.png"/>
      <img src="/emotion12.png"/>
      <img src="/emotion13.png"/>
      <img src="/emotion14.png"/>
      <img src="/emotion15.png"/>

      <h2>assets img</h2>
      <img src={emotion1}/>
      <img src={emotion2}/>
      <img src={emotion3}/>
      <img src={emotion4}/>
      <img src={emotion5}/>

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
