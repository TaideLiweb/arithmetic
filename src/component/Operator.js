import React from 'react'
import PropTypes from 'prop-types'

function Operator(props) {
  const { changeoperator, firstNumber, secondNumber } = props
  const operatorValue = ['+', '-', '*', '/']
  return (
    <div className="minheight">
      <div className="flexbox">
        {operatorValue.map((value) => (
          <div>
            <span>{value}</span>
            <input type="radio" value={value} onChange={changeoperator} name="operator " />
          </div>
        ))}
      </div>
      {(firstNumber === '' || secondNumber === '') && (
        <p className="redword">請先輸入數字,再選取算法</p>
      )}
    </div>
  )
}

Operator.propTypes = {
  firstNumber: PropTypes.string.isRequired,
  secondNumber: PropTypes.string.isRequired,
  changeoperator: PropTypes.func.isRequired,
}

export default Operator
