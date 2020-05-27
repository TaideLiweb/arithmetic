import React, { useState } from 'react'
import Title from './component/Title'
import Numbers from './component/Numbers'
import Result from './component/Result'
import Operator from './component/Operator'
import './App.css'

function App() {
  const [firstText, setFirstText] = useState('')
  const [secondText, setSecondText] = useState('')
  const [method, setMethod] = useState('')
  const changeFirstText = (e) => {
    setFirstText(e.target.value)
  }
  const changeSecondText = (e) => {
    setSecondText(e.target.value)
  }
  const changeMethod = (e) => {
    if (firstText === '' || secondText === '') {
      e.target.checked = false
      setMethod('')
    } else {
      setMethod(e.target.value)
    }
  }
  return (
    <div className="center">
      <Title />
      <Numbers
        changeFirstText={changeFirstText}
        changeSecondText={changeSecondText}
        firstText={firstText}
        secondText={secondText}
        method={method}
      />
      <Operator changeMethod={changeMethod} firstText={firstText} secondText={secondText} />
      <Result firstText={firstText} secondText={secondText} method={method} />
    </div>
  )
}

export default App
