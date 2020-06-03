import React from 'react'
import PropTypes from 'prop-types'
import InputFrom from './inputForm'

function Numbers(props) {
  const { firstNumber, changeFirstNumber, changeSecondNumber, secondNumber } = props

  return (
    <div className="minheight">
      <div className="flexbox">
        <InputFrom name="數字1" onChange={changeFirstNumber} errorMsg={firstNumber} />
        <InputFrom name="數字2" onChange={changeSecondNumber} errorMsg={secondNumber} />
      </div>
    </div>
  )
}

Numbers.propTypes = {
  firstNumber: PropTypes.string.isRequired,
  secondNumber: PropTypes.string.isRequired,
  changeFirstNumber: PropTypes.func.isRequired,
  changeSecondNumber: PropTypes.func.isRequired,
}

export default Numbers
