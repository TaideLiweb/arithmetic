import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
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
      if (firstText.match('^0') && secondText.match('^0')) {
        result = '無解';
      } else if (firstText !== '' && firstText.match('^[0-9]*$') && secondText.match('^0')) {
        result = '∞(無限大)';
      } else if (!firstText.match('^[0-9]*$') || !secondText.match('^[0-9]*$')) {
        result = '';
      } else if (firstText === '' || secondText === '') {
        result = '';
      } else {
        result = firstText / secondText;
      } break;
    default:
  }
  return (
    <p className="minheight">
      答案為:
      {result}
    </p>
  );
}

Result.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default Result;
