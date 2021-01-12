(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(15),i=n.n(r),o=(n(26),n(6)),j=n.n(o),l=n(16),u=n(4),d=n(3),b=n.n(d),h=(n(46),n(17)),m=n(18),p=n(20),O=n(19),f=n.p+"static/media/chess.82a0327d.png",x=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("header",{className:"center",children:[Object(c.jsx)("img",{src:f,alt:""}),Object(c.jsx)("h1",{children:"Chess Game by RomJ55"})]})}}]),n}(a.a.Component),g=function(e){var t=e.timer,n=Object(s.useState)(t),a=Object(u.a)(n,2),r=a[0],i=a[1];Object(s.useEffect)((function(){i(t)}),[t]);if(t>0){var o=Math.floor(r/60),j=r%60;return j>9?Object(c.jsxs)("h3",{children:["Time: ",o,":",j]}):Object(c.jsxs)("h3",{children:["Time: ",o,":0",j]})}return b.a.post("/api/chess/startend",{command:"end"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Object(c.jsx)("h3",{children:"Time: Times up!"})},v=function(e){var t=e.turn,n=Object(s.useState)("white"),a=Object(u.a)(n,2),r=a[0],i=a[1];Object(s.useEffect)((function(){i(t)}),[t]);var o="".concat(r," Turn");return Object(c.jsx)("h2",{children:o.toUpperCase()})},w=function(e){var t=e.j,n=e.i,a=e.imagePath,r=e.type,i=e.selected,o=e.player,j=Object(s.useState)(i),l=Object(u.a)(j,2),d=l[0],h=l[1];return Object(s.useEffect)((function(){h(i)}),[i]),Object(c.jsx)("button",{className:"square",style:{background:(t+n)%2?"white":"black",border:d?"4px solid rgb(255,255,0)":"2px solid rgb(136, 127, 127)"},onClick:function(){b.a.post("/api/chess/post",{x:n,y:t,player:o}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},children:Object(c.jsx)("img",{src:"/ReactChess"+a,alt:r})})},y=function(e){for(var t=e.board,n=e.rows,s=e.columns,a=[],r=0;r<n;r++)for(var i=0;i<s;i++){var o=[r,i],j=-1,l="/pieces/dummy.png",u=-1,d=void 0,b=void 0;t[r][i]&&(j=t[r][i].type,b=t[r][i].selected,l="/pieces/"+(u="white"===(d=t[r][i].player)?0:1)+"0"+j+".png",5===j&&t[r][i].incheck&&(l="/pieces/"+u+"0"+j+"c.png")),a.push(Object(c.jsx)(w,{j:i,i:r,imagePath:l,type:j,selected:b,player:d},o))}return Object(c.jsx)("div",{className:"board",children:a})},N=n.p+"static/media/start_game.553f5179.jpg",k=function(e){var t=e.startGameHandler;return Object(c.jsxs)("div",{className:"start",children:[Object(c.jsx)("img",{src:N,style:{width:700},alt:""}),Object(c.jsx)("button",{className:"se-button",onClick:t,children:"Start game"})]})},S=n.p+"static/media/w_won.900f06a0.png",C=n.p+"static/media/b_won.c8d4143d.png",_=function(e){var t=e.winner,n=e.startGameHandler,s="Winner: "+t;return Object(c.jsxs)("div",{className:"start",children:[Object(c.jsx)("h1",{className:"center",style:{fontSize:50},children:s.toUpperCase()}),Object(c.jsx)("img",{src:"white"===t?S:C,alt:"",style:{width:320,padding:3}}),Object(c.jsx)("button",{className:"se-button",onClick:n,children:"Play again"})]})},G=function(e){var t=e.items,n=function(){b.a.post("/api/chess/startend",{command:"start"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))};return e.isLoading?Object(c.jsx)("h3",{className:"center",style:{marginTop:200,fontSize:40},children:"Loading....."}):t.game_running?Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("div",{className:"top-timer",children:Object(c.jsx)(g,{timer:t.black_time})}),Object(c.jsx)(y,{board:t.board,rows:t.rows,columns:t.columns}),Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("button",{className:"gu-button",onClick:function(){b.a.post("/api/chess/startend",{command:"end"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},children:"Give up"}),Object(c.jsx)(v,{turn:t.turn}),Object(c.jsx)(g,{timer:t.white_time})]})]}):t.is_winner?Object(c.jsx)(_,{startGameHandler:n,winner:t.winner}):Object(c.jsx)(k,{startGameHandler:n})};var T=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(!0),i=Object(u.a)(r,2),o=i[0],d=i[1];return Object(s.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("/api/chess");case 2:t=e.sent,a(JSON.parse(t.data)),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(x,{}),Object(c.jsx)(G,{items:n,isLoading:o})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.f009163e.chunk.js.map