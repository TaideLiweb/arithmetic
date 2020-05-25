import React from 'react';
import PropTypes from 'prop-types';

function Operator(props) {
  const { changeMethod, firstText, secondText } = props;
  const operatorValue = ['+', '-', '*', '/'];
  return (
    <div className="minheight">
      <div className="flexbox">
        {
          operatorValue.map((value) => (
            <div>
              <span>{value}</span>
              <input type="radio" value={value} onChange={changeMethod} name="method" />
            </div>
          ))
        }
      </div>
      {(firstText === '' || secondText === '') && (<p className="redword">請輸入數字,在選取算法</p>)}
    </div>
  );
}

Operator.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  changeMethod: PropTypes.func.isRequired,
};

export default Operator;
