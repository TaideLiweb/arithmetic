import React from 'react'
import PropTypes from 'prop-types'

function Numbers(props) {
  const { firstNumber, changefirstNumber, changesecondNumber, secondNumber } = props
  const wordDisplay = (value) => {
    if (!value.match('^[0-9]*$')) {
      return <p className="redword mg40">限定數字</p>
    }
    return null
  }

  return (
    <div className="minheight">
      <div className="flexbox">
        <div>
          <span>數字1</span>
          <input placeholder="請輸入第一個數字" onChange={changefirstNumber} />
          {wordDisplay(firstNumber)}
        </div>
        <div>
          <span>數字2</span>
          <input placeholder="請輸入第二個數字" onChange={changesecondNumber} />
          {wordDisplay(secondNumber)}
        </div>
      </div>
    </div>
  )
}

Numbers.propTypes = {
  firstNumber: PropTypes.string.isRequired,
  secondNumber: PropTypes.string.isRequired,
  changefirstNumber: PropTypes.func.isRequired,
  changesecondNumber: PropTypes.func.isRequired,
}

export default Numbers
