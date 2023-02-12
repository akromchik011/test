
import { useEffect, useState } from 'react';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  const [render, setRender] = useState('')
  const [arr, setArr]= useState([])
  useEffect(()=>{
    console.log('ishladi');
  },[render])
  const toDo = (e)=>{
    e.preventDefault()
    let valuue = e.target.elements.text.value
    setRender(valuue)
    arr.push(valuue)
    setArr(arr)
    e.target.elements.text.value = ''
    console.log(arr);
  }
  return (
    <div className="App">
    {/* <Home render={render} setRender={setRender}/>
    <About render={render} setRender={setRender}/> */}
    <form action="#" onSubmit={toDo}>
      <input type="text" name="text" />
    </form>
    {
      arr && arr.map((e,i)=>(
        <h1 key={i}>{e}</h1>
      ))
    }
    </div>
  );
}

export default App;
