import { useState } from 'react'

import './App.css'
import Counter from './counter'
import Batsman from './batsman'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert("Hero Alom MP")
  }

  const handleAdd5 =(num)=>{
    const newNum = num + 5;
    alert(newNum);
  }



  return (
    <>
   
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      

    <button onClick={handleClick}>Click Me</button>
    
<button onClick={()=> handleAdd5(5)}>Click Add 5</button>
    
    </>
  )
}

export default App
