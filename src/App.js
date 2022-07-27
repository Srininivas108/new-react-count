import React ,{useState} from "react";
import './App.css';


function App() {
  const [count,setCount]=useState(0)

    const subtract =()=>{
       setCount(count-1)
    }
    const add =()=>{
      setCount(count+1)
   }
   const reset =( )=>{
    setCount(0)
   }
    
  return (
    <section className="count-sec">
      <div className="container">
        <h1>React Counter App</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="sbtn" onClick={subtract}>-Subtract</button>
          <button onClick={reset}>!Reset</button>
          <button calssName="abtn" onClick={add}>+Add</button>
        </div>
      </div>
    </section>
  );
}

export default App;
