import React from 'react';

function Operator(props) {
  const { changemethod } = props;
  return (
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
  );
}
export default Operator;
