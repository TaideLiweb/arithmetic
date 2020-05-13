import React, { useState } from 'react';
import Title from './component/Title';
import Numbers from './component/Numbers';
import Result from './component/Result';
import Operator from './component/Operator';
import './App.css';

function App() {
  const [firstText, setfirstText] = useState('');
  const [secondText, setsecondText] = useState('');
  const [method, setmethod] = useState('');
  const changefirstText = (e) => { setfirstText(e.target.value); };
  const changesecondText = (e) => { setsecondText(e.target.value); };
  const changemethod = (e) => {
    if (firstText === '' || secondText === '') {
      alert('有欄位未輸入數字');
      e.target.checked = false;
    } else { setmethod(e.target.value); }
  };
  return (
    <div className="center">
      <Title />
      <Numbers
        changefirstText={changefirstText}
        changesecondText={changesecondText}
      />
      <Operator changemethod={changemethod} />
      <Result firstText={firstText} secondText={secondText} method={method} />
    </div>
  );
}

export default App;
