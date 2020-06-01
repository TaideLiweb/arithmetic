import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ivisionJudge = (firstNumber, secondNumber, setResult) => {
  if (firstNumber.match('^0') && secondNumber.match('^0')) {
    setResult('無解')
  } else if (firstNumber.match('^[0-9]*$') && secondNumber.match('^0')) {
    setResult('∞(無限大)')
  } else if (firstNumber.match('^0') && secondNumber.match('^[0-9]*$')) {
    setResult('0')
  } else if (!firstNumber.match('^[0-9]*$') || !secondNumber.match('^[0-9]*$')) {
    setResult('')
  } else if (firstNumber === '' || secondNumber === '') {
    setResult('')
  } else {
    setResult(firstNumber / secondNumber)
  }
}

function Result(props) {
  const { firstNumber, secondNumber, operator } = props
  const [result, setResult] = useState('')
  useEffect(() => {
    const operatorJudge = () => {
      switch (operator) {
        case '+':
          setResult(Math.round(Number(firstNumber) + Number(secondNumber)))
          break
        case '-':
          setResult(Math.round(firstNumber - secondNumber))
          break
        case '*':
          setResult(Math.round(firstNumber * secondNumber))
          break
        case '/':
          ivisionJudge(firstNumber, secondNumber, setResult)
          break
        default:
      }
    }
    operatorJudge()
  }, [operator, result, firstNumber, secondNumber])
  return (
    <p className="minheight">
      答案為:
      {result}
    </p>
  )
}

Result.propTypes = {
  firstNumber: PropTypes.string.isRequired,
  secondNumber: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
}

export default Result
