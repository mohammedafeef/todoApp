import React, { useState } from 'react';
import Iteam from './components/Iteam';
import AddIcon from '@material-ui/icons/Add';
function App() {
  const [iteam, setiteam] = useState('')
  const [iteams, setiteams] = useState([])

  const makechange = (e) =>{
    console.log(e.target.value)
    setiteam(e.target.value)
  }
  const newiteam = () =>{
    iteam===''?(
      alert('no input found')
    ):(
    setiteams((parr) => {
      return [
        ...parr,iteam
      ] 
    })
    );
    setiteam('')
  }
  const remiteam = (id) => {
    setiteams((parr) => {
      return (parr.filter((eiteam,initeam) => {
        return id!==initeam
      })
      )
    })
  }
  return (
    <>
      <div className="container">
          <div className="main">
              <h3>Todo List</h3>
              <input type="text" name="list_iteam" id="insert" onChange={makechange} value={iteam}/>
              <button onClick={newiteam}><AddIcon/></button>
              <ul>
                {iteams.map((listelement,initeam)=> {
                    return(
                    <Iteam element={listelement} deletiteam={remiteam} id={initeam} key={initeam}/>
                    )
                  })}
              </ul>
          </div>
      </div> 
    </>
  );
}

export default App;
