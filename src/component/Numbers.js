import React from 'react';

function Numbers(props) {
  const { changefirstText, changesecondText } = props;
  const { firstText ,secondText, method } = props;
  let word;
  let word2;
  if (method === '/' && firstText.match('0')) {
    word = <p className="redword mg40">除法數值不能為0</p>;
  } else if (!firstText.match('^[0-9]*$')) {
    word = <p className="redword mg40">限定數字</p>;
  } else {
    word = null;
  }
  if (method === '/' && secondText.match('0')) {
    word2 = <p className="redword mg40">除法數值不能為0</p>;
  } else if (!secondText.match('^[0-9]*$')) {
    word2 = <p className="redword mg40">限定數字</p>;
  } else {
    word2 = null;
  }

  return (
    <div className="minheight">
      <div className="flexbox">
        <div>
          <span>數字1</span>
          <input placeholder="請輸入第一個數字" onChange={changefirstText} />
          {word}
          {/* {firstText.match('^[0-9]*$') ? null : (<p className="redword mg40">限定數字</p>)} */}
          {/* {method !== '/' ? null : <p className="redword mg40">除法不能有0</p>} */}
        </div>
        <div>
          <span>數字2</span>
          <input placeholder="請輸入第二個數字" onChange={changesecondText} />
          {word2}
          {/* {secondText.match('^[0-9]*$') ? null : (<p className="redword mg40">限定數字</p>)} */}
          {/* {method !== '/' ? null : <p className="redword mg40">除法不能有0</p>} */}
        </div>
      </div>
    </div>
  );
}
export default Numbers;
