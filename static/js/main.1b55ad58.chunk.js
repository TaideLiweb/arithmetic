(this.webpackJsonparithmetic=this.webpackJsonparithmetic||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),m=(a(9),a(1));var o=function(){return r.a.createElement("h2",null,"\u56db\u5247\u904b\u7b97")};var i=function(e){var t,a,n=e.changefirstText,c=e.changesecondText,l=e.firstText,m=e.secondText,o=e.method;return t="/"===o&&l.match("^0")?r.a.createElement("p",{className:"redword mg40"},"\u9664\u6cd5\u6578\u503c\u4e0d\u80fd\u70ba0"):l.match("^[0-9]*$")?null:r.a.createElement("p",{className:"redword mg40"},"\u9650\u5b9a\u6578\u5b57"),a="/"===o&&m.match("^0")?r.a.createElement("p",{className:"redword mg40"},"\u9664\u6cd5\u6578\u503c\u4e0d\u80fd\u70ba0"):m.match("^[0-9]*$")?null:r.a.createElement("p",{className:"redword mg40"},"\u9650\u5b9a\u6578\u5b57"),r.a.createElement("div",{className:"minheight"},r.a.createElement("div",{className:"flexbox"},r.a.createElement("div",null,r.a.createElement("span",null,"\u6578\u5b571"),r.a.createElement("input",{placeholder:"\u8acb\u8f38\u5165\u7b2c\u4e00\u500b\u6578\u5b57",onChange:n}),t),r.a.createElement("div",null,r.a.createElement("span",null,"\u6578\u5b572"),r.a.createElement("input",{placeholder:"\u8acb\u8f38\u5165\u7b2c\u4e8c\u500b\u6578\u5b57",onChange:c}),a)))};var s=function(e){var t,a=e.firstText,n=e.secondText;switch(e.method){case"+":t=Math.round(Number(a)+Number(n));break;case"-":t=Math.round(a-n);break;case"*":t=Math.round(a*n);break;case"/":t=a.match("^0")||n.match("^0")?"":a/n}return r.a.createElement("p",{className:"minheight"},"\u7b54\u6848\u70ba:",""===a||""===n||Number.isNaN(Number(t))||t===1/0?"":t)};var u=function(e){var t=e.changemethod,a=e.firstText,n=e.secondText;return r.a.createElement("div",{className:"minheight"},r.a.createElement("div",{className:"flexbox"},r.a.createElement("div",null,r.a.createElement("span",null,"+"),r.a.createElement("input",{type:"radio",value:"+",onChange:t,name:"method"})),r.a.createElement("div",null,r.a.createElement("span",null,"-"),r.a.createElement("input",{type:"radio",value:"-",onChange:t,name:"method"})),r.a.createElement("div",null,r.a.createElement("span",null,"*"),r.a.createElement("input",{type:"radio",value:"*",onChange:t,name:"method"})),r.a.createElement("div",null,r.a.createElement("span",null,"/"),r.a.createElement("input",{type:"radio",value:"/",onChange:t,name:"method"}))),""===a||""===n?r.a.createElement("p",{className:"redword"},"\u8acb\u8f38\u5165\u6578\u5b57,\u518d\u9078\u53d6\u7b97\u6cd5"):null)};a(10);var d=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),d=Object(m.a)(l,2),h=d[0],E=d[1],v=Object(n.useState)(""),p=Object(m.a)(v,2),g=p[0],f=p[1];return r.a.createElement("div",{className:"center"},r.a.createElement(o,null),r.a.createElement(i,{changefirstText:function(e){c(e.target.value)},changesecondText:function(e){E(e.target.value)},firstText:a,secondText:h,method:g}),r.a.createElement(u,{changemethod:function(e){""===a||""===h?(e.target.checked=!1,f("")):f(e.target.value)},firstText:a,secondText:h}),r.a.createElement(s,{firstText:a,secondText:h,method:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.1b55ad58.chunk.js.map