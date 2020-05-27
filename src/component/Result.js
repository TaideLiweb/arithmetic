import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Result(props) {
  const { firstText, secondText, method } = props
  const [result, setResult] = useState('')
  const methodController = () => {
    switch (method) {
      case '+':
        setResult(Math.round(Number(firstText) + Number(secondText)))
        break
      case '-':
        setResult(Math.round(firstText - secondText))
        break
      case '*':
        setResult(Math.round(firstText * secondText))
        break
      case '/':
        if (firstText.match('^0') && secondText.match('^0')) {
          setResult('無解')
        } else if (firstText !== '' && firstText.match('^[0-9]*$') && secondText.match('^0')) {
          setResult('∞(無限大)')
        } else if (!firstText.match('^[0-9]*$') || !secondText.match('^[0-9]*$')) {
          setResult('')
        } else if (firstText === '' || secondText === '') {
          setResult('')
        } else {
          setResult(firstText / secondText)
        }
        break
      default:
    }
  }
  useEffect(() => {
    methodController()
  }, [method, result, methodController])
  return (
    <p className="minheight">
      答案為:
      {result}
    </p>
  )
}

Result.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
}

export default Result
