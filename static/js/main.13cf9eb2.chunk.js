(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{1:function(n,e,t){n.exports={container:"grid_container__2ayOh",winner:"grid_winner__3bkZz",player:"grid_player__3tnOf",win:"grid_win__1WrQg",header:"grid_header__2iApk",footer:"grid_footer__25VAi",clear:"grid_clear__2hP3B",button:"grid_button__2Ztk9"}},12:function(n,e,t){"use strict";t.r(e);var i=t(2),r=t.n(i),s=t(5),c=t.n(s),o=t(6),a=t(4),l=t(1),j=t.n(l),u=t(0);function d(n){var e=n.size||100;return Object(u.jsx)("svg",{width:e,height:e,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("circle",{cx:"50",cy:"50",r:"45",stroke:"black",strokeWidth:"10"})})}function h(n){var e=n.size||100;return Object(u.jsx)("svg",{width:e,height:e,viewBox:"0 0 110 110",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M5 5L105 105M105 5L5 105",stroke:"black",strokeWidth:"10","stroke-linecap":"round"})})}function b(n){var e=n.positions.map((function(e,t){var i,r=n.winningIndexes.includes(t);return Object(u.jsx)("div",{className:r?j.a.winner:null,onClick:function(){n.setPositions(t)},children:(i=e,"Cross"===i?Object(u.jsx)(h,{size:60}):"Circle"===i?Object(u.jsx)(d,{size:60}):null)},t)}));return Object(u.jsx)("div",{className:j.a.container,children:e})}function x(n){return n.winner?Object(u.jsxs)("h1",{className:j.a.win,children:["Winner: ",n.winner]}):Object(u.jsxs)("h2",{className:j.a.player,children:["Turn: ",n.turn]})}var w=function(){return Object(u.jsx)("header",{className:j.a.header,children:Object(u.jsx)("h1",{children:Object(u.jsx)("u",{children:"Tic-Tac-Toe"})})})},O=function(){return Object(u.jsx)("footer",{className:j.a.footer,children:Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:Object(u.jsx)("small",{children:"Copyright \xa9 Rachit Tawani 2021"})})})})};function p(){window.location.reload(!1)}var f=function(){return Object(u.jsx)("div",{className:j.a.clear,children:Object(u.jsx)("button",{className:j.a.button,onClick:p,children:"Reset"})})};function _(n){var e=r.a.useState({winner:{name:void 0,indexes:[]},turn:"Cross",positions:new Array(9).fill(null)}),t=Object(a.a)(e,2),i=t[0],s=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w,{}),Object(u.jsx)(b,{winningIndexes:i.winner.indexes,positions:i.positions,setPositions:function(n){return s((function(e){if(e.positions[n]||e.winner.name)return e;var t=Object(o.a)({},e);t.positions[n]=t.turn;return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(n){var e=Object(a.a)(n,3),i=e[0],r=e[1],s=e[2];t.positions[i]&&t.positions[i]===t.positions[r]&&t.positions[i]===t.positions[s]&&(t.winner.name=t.turn,t.winner.indexes=n)})),t.turn="Cross"===t.turn?"Circle":"Cross",t}))}}),Object(u.jsx)(x,{turn:i.turn,winner:i.winner.name}),Object(u.jsx)(f,{}),Object(u.jsx)(O,{})]})}c.a.render(Object(u.jsx)(_,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.13cf9eb2.chunk.js.map