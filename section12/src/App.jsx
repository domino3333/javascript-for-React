import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Notfound from './components/Notfound'
import Edit from './components/Edit'
import Header from './components/Header'
import { Link } from 'react-router-dom'
function App() {

  const nav = useNavigate();

  const onClickGoPage = (e) => {
    nav(`${e.target.value}`)
  }
  return (
    <>

      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>new</Link>
      <Link to={"/diary"}>diary</Link>
      <Link to={"/edit"}>Edit</Link><br/>
      <button value="/" onClick={onClickGoPage} >Home</button>
      <button value="/new" onClick={onClickGoPage}>New</button>
      <button value="/diary" onClick={onClickGoPage}>diary</button>
      <button value="/edit" onClick={onClickGoPage}>edit</button>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/*' element={<Notfound />} />

      </Routes>

    </>
  )
}

export default App
