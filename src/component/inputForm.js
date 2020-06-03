import React from 'react'
import PropTypes from 'prop-types'

function InputFrom(props) {
  const { onChange, errorMsg, name } = props
  const numberJudge = (value) => {
    if (!value.match('^[0-9]*$')) {
      return <p className="redword mg40">限定數字</p>
    }
    return null
  }
  return (
    <div>
      <span>{name}</span>
      <input placeholder="請輸入第一個數字" onChange={onChange} />
      {numberJudge(errorMsg)}
    </div>
  )
}

InputFrom.propTypes = {
  onChange: PropTypes.func.isRequired,
  errorMsg: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default InputFrom
