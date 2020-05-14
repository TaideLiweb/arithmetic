import React from 'react';

function Operator(props) {
  const { changemethod, firstText, secondText } = props;
  return (
    <div className="minheight">
      <div className="flexbox">
        <div>
          <span>+</span>
          <input type="radio" value="+" onChange={changemethod} name="method" />
        </div>
        <div>
          <span>-</span>
          <input type="radio" value="-" onChange={changemethod} name="method" />
        </div>
        <div>
          <span>*</span>
          <input type="radio" value="*" onChange={changemethod} name="method" />
        </div>
        <div>
          <span>/</span>
          <input type="radio" value="/" onChange={changemethod} name="method" />
        </div>
      </div>
      {firstText === '' || secondText === '' ? (<p className="redword">請輸入數字,在選取算法</p>) : null}
    </div>
  );
}
export default Operator;
