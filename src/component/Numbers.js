import React from 'react';

function Numbers(props) {
  const { changefirstText, changesecondText } = props;
  return (
    <div>
      <div className="flexbox">
        <div>
          <span>數字1</span>
          <input placeholder="請輸入第一個數字" onChange={changefirstText} />
        </div>
        <div>
          <span>數字2</span>
          <input placeholder="請輸入第二個數字" onChange={changesecondText} />
        </div>
      </div>
    </div>
  );
}
export default Numbers;
