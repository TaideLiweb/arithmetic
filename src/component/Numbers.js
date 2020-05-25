import React from 'react';
import PropTypes from 'prop-types';

function Numbers(props) {
  const {
    firstText, changeFirstText, changeSecondText, secondText,
  } = props;
  const wordDisplay = (value) => {
    if (!value.match('^[0-9]*$')) {
      return (<p className="redword mg40">限定數字</p>);
    } return null;
  };

  return (
    <div className="minheight">
      <div className="flexbox">
        <div>
          <span>數字1</span>
          <input placeholder="請輸入第一個數字" onChange={changeFirstText} />
          {wordDisplay(firstText)}
        </div>
        <div>
          <span>數字2</span>
          <input placeholder="請輸入第二個數字" onChange={changeSecondText} />
          {wordDisplay(secondText)}
        </div>
      </div>
    </div>
  );
}

Numbers.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  changeFirstText: PropTypes.func.isRequired,
  changeSecondText: PropTypes.func.isRequired,
};

export default Numbers;
