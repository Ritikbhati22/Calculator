import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result,setResult] =  useState('');
  const handler = (event) =>
  {
   setResult(result.concat(event.target.value));
  };
  const clear = () =>
  {
    setResult('');  };
    const calculate = () =>
    {
      setResult(eval(result).toString());
    }
  return (
    <>
    <div className='cal' >
      <input type="text" 
      placeholder="0" 
      id = "answer"
       value={result} />
      <input  type="button" value="9" className="button" onClick={handler}/>
      <input  type="button" value="8" className="button" onClick={handler}/>
      <input  type="button" value="7" className="button" onClick={handler}/>
      <input  type="button" value="6" className="button" onClick={handler}/>
      <input  type="button" value="5" className="button" onClick={handler}/>
      <input  type="button" value="4" className="button" onClick={handler}/>
      <input  type="button" value="3" className="button" onClick={handler}/>
      <input  type="button" value="2" className="button" onClick={handler}/>
      <input  type="button" value="1" className="button" onClick={handler}/>
      <input  type="button" value="0" className="button" onClick={handler}/>
      <input  type="button" value="+" className="button" onClick={handler}/>
      <input  type="button" value="-" className="button" onClick={handler}/>
      <input  type="button" value="/" className="button" onClick={handler}/>
      <input  type="button" value="*" className="button" onClick={handler}/>
      <input  type="button" value="% " className="button" onClick={handler}/>
      <input  type="button" value=". " className="button" onClick={handler}/>
      <input  type="button" value="clear " className="button button1" onClick={clear}/>
      <input  type="button" value="=" className="button button1" onClick={calculate}/>
    </div>
    </>
  );
}

export default App;
