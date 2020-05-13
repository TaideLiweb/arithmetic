import React, { useState } from 'react';
import './App.css';
function InputBlock (props){
  return(
  <div>
    <div className="flexbox">
      <div>
        <span>數字1</span>
        <input placeholder="請輸入第一個數字" onChange = {props.changefirstText}></input>
      </div>
      <div>
        <span>數字2</span>
        <input placeholder="請輸入第二個數字" onChange = {props.changesecondText}></input>
      </div>
    </div>
    <div className="flexbox">
      <div>
        <span>+</span>
        <input type = "radio" value = "+" onChange = {props.changemethod} name = "method"></input>
      </div>
      <div>
        <span>-</span>
        <input type = "radio" value = "-" onChange = {props.changemethod} name = "method"></input>
      </div>
      <div>
        <span>*</span>
        <input type = "radio" value = "*" onChange = {props.changemethod} name = "method"></input>
      </div>
      <div>
        <span>/</span>
        <input type = "radio" value = "/" onChange = {props.changemethod} name = "method"></input>
      </div>
    </div>
  </div>
  )
}
function OutputBlock(props){
  let firstText = Number(props.firstText)
  let secondText = Number(props.secondText)
  let result;

    switch(props.method){
    case '+':
      result = Math.round(firstText + secondText );
      break;
    case '-':
      result = Math.round(firstText - secondText);
      break;
    case '*':
      result = Math.round(firstText * secondText);
      break;
    case '/':
      result = Math.round(firstText / secondText*1000)/1000;
      break;
    }
  
  return(
    <p>答案為:{firstText =="" || secondText =="" ? "" : result}</p>
  )
}

function App() {
  let [firstText,setfirstText] = useState('')
  let [secondText,setsecondText] = useState('')
  let [method,setmethod] = useState('')

  let changefirstText = (e)=>{setfirstText(e.target.value)}
  let changesecondText = (e)=>{setsecondText(e.target.value)}
  let changemethod = (e)=>{
    if(firstText === '' || secondText === ''){
      alert('有欄位未輸入數字')
    }else{
      setmethod(e.target.value)
    }  
  }
  return (
    <div className = "center">
      <h2>四則運算</h2>
      <InputBlock changefirstText = {changefirstText} changesecondText = {changesecondText} changemethod = {changemethod}/>
      <OutputBlock firstText = {firstText} secondText = {secondText} method = {method}/>
    </div>
  );
}

export default App;
