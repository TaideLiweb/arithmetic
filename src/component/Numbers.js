import React from 'react';

function Numbers(props) {
  const { changefirstText, changesecondText } = props;
  const { firstText ,secondText, } = props;
  return (
    <div className="minheight">
      <div className="flexbox">
        <div>
          <span>數字1</span>
          <input placeholder="請輸入第一個數字" onChange={changefirstText} />
          {!firstText.match('[a-z]') ? null : (<p className="redword mg40">限定數字</p>)}
        </div>
        <div>
          <span>數字2</span>
          <input placeholder="請輸入第二個數字" onChange={changesecondText} />
          {!secondText.match('[a-z]') ? null : (<p className="redword mg40">限定數字</p>)}
        </div>
      </div>
    </div>
  );
}
export default Numbers;
