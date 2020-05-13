import React from 'react';

function Result(props) {
  const { firstText, secondText, method } = props;
  //   const firstText = Number(...props);
  //   const secondText = Number(...props);
  //   const method = { ...props };
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
      result = Math.round((firstText / secondText) * 1000) / 1000;
      break;
    default:
  }
  return (
    <p>
      答案為:
      {firstText === '' || secondText === '' || Number.isNaN(Number(result)) ? '' : result}
    </p>
  );
}

export default Result;
