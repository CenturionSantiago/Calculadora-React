
import './App.css';
import Button from './components/Button.js'
import Screen from './components/Screen.js';
import ButtonClear from './components/ButtonClear.js';
import { useState } from 'react'
import {evaluate } from 'mathjs'

function App() {

  const[input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value)
  }

  const calcResult = () => {
    if(input){
      setInput(evaluate(input))
    } else{
      alert("ingrese valores para realizar operaciones")
    }

  }



  return (
    <div className='App'>
      <div className='calculator-container' >
        <Screen input={input} />
        <div className='row'>
          <Button manejarClick={addInput} >1</Button>
          <Button manejarClick={addInput}>2</Button>
          <Button manejarClick={addInput}>3</Button>
          <Button manejarClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manejarClick={addInput}>4</Button>
          <Button manejarClick={addInput}>5</Button>
          <Button manejarClick={addInput}>6</Button>
          <Button manejarClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manejarClick={addInput}>7</Button>
          <Button manejarClick={addInput}>8</Button>
          <Button manejarClick={addInput}>9</Button>
          <Button manejarClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manejarClick={calcResult}>=</Button>
          <Button manejarClick={addInput}>0</Button>
          <Button manejarClick={addInput}>.</Button>
          <Button manejarClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear manejarClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
