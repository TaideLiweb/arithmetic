import React, { useState } from 'react'
import Title from './component/Title'
import Numbers from './component/Numbers'
import Result from './component/Result'
import Operator from './component/Operator'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState('')
  const changeFirstNumber = (e) => {
    setFirstNumber(e.target.value)
  }
  const changeSecondNumber = (e) => {
    setSecondNumber(e.target.value)
  }
  const changeoperator = (e) => {
    if (firstNumber === '' || secondNumber === '') {
      e.target.checked = false
      setOperator('')
    } else {
      setOperator(e.target.value)
    }
  }
  return (
    <div className="center">
      <Title />
      <Numbers
        changeFirstNumber={changeFirstNumber}
        changeSecondNumber={changeSecondNumber}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        operator={operator}
      />
      <Operator
        changeoperator={changeoperator}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
      />
      <Result firstNumber={firstNumber} secondNumber={secondNumber} operator={operator} />
    </div>
  )
}

export default App
