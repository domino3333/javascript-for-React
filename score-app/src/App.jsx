import './App.css'
import { useState, useRef } from 'react';
import Header from './components/Header';
import Adder from './components/Adder';
import List from './components/List';
import EditDisplay from './components/EditDisplay';

function App() {


  const [memberList, setMemberList] = useState([]);
  const [mode, setMode] = useState('list')
  const [selected, setSelected] = useState();
  const idRef = useRef(1);

  const addMember = (input) => {
    const newMember = {
      id: idRef.current++,
      name: input.name,
      kor: input.kor,
      eng: input.eng,
      mat: input.mat
    }
    setMemberList((prev) => [...prev, newMember]);
  }

  const deleteItem = (id) => {
    setMemberList(memberList.filter((member) => member.id !== id))
  }

  const updateItem = (id, name, kor, eng, mat) => {

    setMode('edit')
    setSelected({ id: id, name: name, kor: kor, eng: eng, mat: mat })


  }
  const clickCompleteButton = (id,name,kor,eng,mat) => {

    setMemberList(memberList.map((member) => member.id === id ? {
      ...member,
      name: name,
      kor: kor,
      eng: eng,
      mat: mat
    } : member))
    setMode('list')
  }


  return (
    <>

      {mode === 'list' &&
        <>
          <Header />
          <Adder addMember={addMember} />
          <List memberList={memberList} deleteItem={deleteItem} updateItem={updateItem} />
        </>
      }
      {mode === 'edit' &&
        <>
          <EditDisplay {...selected} clickCompleteButton={clickCompleteButton}setMode={setMode} />
        </>
      }

    </>
  )
}

export default App
