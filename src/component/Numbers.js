import React from 'react';
import PropTypes from 'prop-types';

function Numbers(props) {
  Numbers.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.string.isRequired,
    changefirstText: PropTypes.string.isRequired,
    changesecondText: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  };
  const { changefirstText, changesecondText } = props;
  const { firstText, secondText, method } = props;
  const wordDisplay = (value) => {
    if (method === '/' && value.match('^0')) {
      return <p className="redword mg40">除法數值不能為0</p>;
    } if (!value.match('^[0-9]*$')) {
      return (<p className="redword mg40">限定數字</p>);
    } return null;
  };

  return (
    <div className="minheight">
      <div className="flexbox">
        <div>
          <span>數字1</span>
          <input placeholder="請輸入第一個數字" onChange={changefirstText} />
          {wordDisplay(firstText)}
        </div>
        <div>
          <span>數字2</span>
          <input placeholder="請輸入第二個數字" onChange={changesecondText} />
          {wordDisplay(secondText)}
        </div>
      </div>
    </div>
  );
}

export default Numbers;
