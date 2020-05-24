import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  Result.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  };
  const { firstText, secondText, method } = props;
  let result;
  switch (method) {
    case '+':
      result = Math.round(Number(firstText) + Number(secondText));
      break;
    case '-':
      result = Math.round(firstText - secondText);
      break;
    case '*':
      result = Math.round(firstText * secondText);
      break;
    case '/':
      if (firstText.match('^0') || secondText.match('^0')) {
        result = '';
      } else {
        result = firstText / secondText;
      } break;
    default:
  }
  return (
    <p className="minheight">
      答案為:
      {firstText === '' || secondText === '' || Number.isNaN(Number(result)) ? '' : result}
    </p>
  );
}

export default Result;
