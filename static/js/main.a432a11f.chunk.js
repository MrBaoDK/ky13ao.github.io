(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(6),s=r.n(n),i=r(2),c=r(1);function a(e){if(!e)return null;for(var t=0,r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<r.length;t++){var n=r[t],s=Object(i.a)(n,3),c=s[0],a=s[1],l=s[2];if(e[c]&&e[c]===e[a]&&e[c]===e[l])return e[c]}return null}var l=r(5);r(11);var u=r(0);function o(e){return Object(u.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}function j(e){function t(t){return Object(u.jsx)(o,{value:e.squares[t],onClick:function(){return e.onClick(t)}})}return Object(u.jsxs)("div",{id:"game-board",children:[Object(u.jsx)("h2",{id:"status",children:e.status}),Object(u.jsxs)("div",{id:"board",children:[Object(u.jsxs)("div",{className:"board-row",children:[t(0),t(1),t(2)]}),Object(u.jsxs)("div",{className:"board-row",children:[t(3),t(4),t(5)]}),Object(u.jsxs)("div",{className:"board-row",children:[t(6),t(7),t(8)]})]})]})}function b(e){var t=Object(c.useState)({history:[{squares:Array(9).fill(null)}],stepNumber:0,isXNext:!0}),r=Object(i.a)(t,2),n=r[0],s=r[1],o=Object(c.useState)(!1),b=Object(i.a)(o,2),f=b[0],d=b[1];function h(e){var t=n.history.slice(0,n.stepNumber+1),r=t[t.length-1].squares.slice();a(r)||r[e]||(r[e]=n.isXNext?"X":"O",s({history:t.concat([{squares:r}]),stepNumber:t.length,isXNext:!n.isXNext}))}function v(e){s({history:n.history,stepNumber:e,isXNext:e%2===0})}Object(c.useEffect)((function(){if(!n.isXNext&&!f){var e=n.history.slice(0,n.stepNumber+1);h(function(e){for(var t=0,r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<r.length;t++){var n=r[t];if(2===n.filter((function(t){return"O"===e[t]})).length){var s,i=Object(l.a)(n);try{for(i.s();!(s=i.n()).done;){var c=s.value;if(!e[c])return c}}catch(d){i.e(d)}finally{i.f()}}if(2===n.filter((function(t){return"X"===e[t]})).length){var a,u=Object(l.a)(n);try{for(u.s();!(a=u.n()).done;){var o=a.value;if(!e[o])return o}}catch(d){u.e(d)}finally{u.f()}}}for(var j=0,b=[4,5,3,1,7,0,8,6,2];j<b.length;j++){var f=b[j];if(!e[f])return f}}(e[e.length-1].squares.slice()))}}));var O=n.history,x=O[n.stepNumber],y=a(x.squares),m=y?"Winner: "+y:"Next player : "+(n.isXNext?"X":"O"),N=O.map((function(e,t){var r=0===t?"\u21aa":"\ud83d\udd19#"+t+".";return Object(u.jsx)("li",{className:"moves",onClick:function(){return v(t)},children:r},t)}));return Object(u.jsxs)("div",{id:"game-container",children:[Object(u.jsx)(j,{squares:x.squares,status:m,onClick:h}),Object(u.jsxs)("div",{id:"util",children:[Object(u.jsx)("button",{onClick:function(){return v(0)},children:"Restart"}),Object(u.jsxs)("select",{onChange:function(e){var t=1===parseInt(e.target.value);t!==f&&(d(t),v(0))},children:[Object(u.jsx)("option",{value:"0",children:"Player vs Bot"}),Object(u.jsx)("option",{value:"1",children:"Player vs Player"})]}),Object(u.jsxs)("details",{id:"game-history",children:[Object(u.jsx)("summary",{children:"History:"}),Object(u.jsx)("ul",{id:"history",children:N})]})]})]})}r(13);s.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a432a11f.chunk.js.map