(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(20),i=n.n(s),o=(n(31),n(11)),u=n.n(o),j=n(21),m=n(4),b=n(7),l=n.n(b),d=(n(51),n(22)),p=n(23),h=n(25),O=n(24),f=n.p+"static/media/chess.82a0327d.png",x=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("header",{className:"center",children:[Object(a.jsx)("img",{src:f,alt:""}),Object(a.jsx)("h1",{children:"Chess Game by RomJ55"})]})}}]),n}(r.a.Component),g=function(e){var t=e.timer,n=e.timeoutHandler,r=e.run,s=Object(c.useState)(t),i=Object(m.a)(s,2),o=i[0],u=i[1],j=Object(c.useState)(r),b=Object(m.a)(j,2),l=b[0],d=b[1];if(Object(c.useEffect)((function(){d(r);var e=null;return l?e=setInterval((function(){u((function(e){return e-1}))}),1e3):l||0===o||clearInterval(e),function(){return clearInterval(e)}}),[l,o,r]),o>=0){var p=Math.floor(o/60),h=o%60;return h>9?Object(a.jsxs)("h3",{children:["Time: ",p,":",h]}):Object(a.jsxs)("h3",{children:["Time: ",p,":0",h]})}return n(),Object(a.jsx)("h3",{children:"Time: Times up!"})},v=n(6),w=n(5),N=function(e){var t=e.j,n=e.i,c=e.imagePath,r=e.type,s=e.selected,i=e.player,o=e.updateData,u=w.a.create({zoom:{animationName:v.zoomIn,animationDuration:"3s"},zoomImg:{animationName:v.zoomInDown,animationDuration:"2.5s"},selectedAnimation:{animationName:v.rubberBand,animationDuration:"1.1s"}});return Object(a.jsx)("button",{className:[Object(w.b)(u.zoom),"square"].join(" "),style:{background:(t+n)%2?"black":"white",border:s?"4px solid rgb(255,255,0)":"2px solid rgb(136, 127, 127)"},onClick:function(){l.a.post("https://chessapi55.herokuapp.com/api/chess/post",{x:n,y:t,player:i}).then((function(e){"Done!"===e.data&&o()})).catch((function(e){console.log(e)}))},children:Object(a.jsx)("img",{className:Object(w.b)(u.zoomImg),src:"/ReactChess"+c,alt:r})})},y=function(e){var t=e.squares,n=e.rows,r=e.columns,s=e.updateData,i=Object(c.useState)([]),o=Object(m.a)(i,2),u=o[0],j=o[1];Object(c.useEffect)((function(){j(t)}),[t]);for(var b=[],l=0;l<n;l++)for(var d=0;d<r;d++){var p=[l,d],h=-1,O="/pieces/dummy.png",f=-1,x=void 0,g=void 0;void 0!==u&&u.length>1&&u[l][d]&&(h=u[l][d].type,g=u[l][d].selected,O="/pieces/"+(f="white"===(x=u[l][d].player)?0:1)+"0"+h+".png",5===h&&u[l][d].incheck&&(O="/pieces/"+f+"0"+h+"c.png")),b.push(Object(a.jsx)(N,{j:d,i:l,imagePath:O,type:h,selected:g,player:x,updateData:s},p))}return Object(a.jsx)("div",{className:"board",children:b})},k=function(e){var t=e.turn,n=w.a.create({bounce:{animationName:v.zoomInUp,animationDuration:"2.7s"}}),c="".concat(t," Turn");return Object(a.jsx)("h2",{className:Object(w.b)(n.bounce),children:c.toUpperCase()})},D=function(e){var t=e.turn,n=e.whiteTime,c=e.giveUpHandler,r=e.run;return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("button",{className:"gu-button",onClick:c,children:"Give up"}),Object(a.jsx)(k,{turn:t}),Object(a.jsx)(g,{timer:n,timeoutHandler:c,run:r})]})},S=n.p+"static/media/w_won.900f06a0.png",I=n.p+"static/media/b_won.c8d4143d.png",z=function(e){var t=e.winner,n=e.startGameHandler,c="Winner: "+t,r=w.a.create({bounce:{animationName:v.bounceIn,animationDuration:"0.8s"}});return Object(a.jsxs)("div",{className:[Object(w.b)(r.bounce),"start"].join(" "),children:[Object(a.jsx)("h1",{className:"center",style:{fontSize:50},children:c.toUpperCase()}),Object(a.jsx)("img",{src:"white"===t?S:I,alt:"",style:{width:320,padding:3}}),Object(a.jsx)("button",{className:"se-button",onClick:n,children:"Play again"})]})},C=n.p+"static/media/start_game.553f5179.jpg",H=function(e){var t=e.startGameHandler,n=w.a.create({bounce:{animationName:v.bounceIn,animationDuration:"0.8s"}});return Object(a.jsxs)("div",{className:[Object(w.b)(n.bounce),"start"].join(" "),children:[Object(a.jsx)("img",{src:C,style:{width:700},alt:""}),Object(a.jsx)("button",{className:"se-button",onClick:t,children:"Start game"})]})},G=function(e){var t=e.items,n=e.updateData,r=Object(c.useState)([[]]),s=Object(m.a)(r,2),i=s[0],o=s[1],u=Object(c.useState)([]),j=Object(m.a)(u,2),b=j[0],d=j[1],p=Object(c.useState)([]),h=Object(m.a)(p,2),O=h[0],f=h[1],x=Object(c.useState)([]),v=Object(m.a)(x,2),w=v[0],N=v[1];Object(c.useEffect)((function(){o(t.board),d(t.turn),f(t.game_running),N(t.is_winner)}),[t.board,t.turn,t.game_running,t.is_winner]);var k=function(){l.a.post("https://chessapi55.herokuapp.com/api/chess/startend",{command:"end"}).then((function(e){"Game end"===e.data&&n()})).catch((function(e){console.log(e)}))},S=function(){l.a.post("https://chessapi55.herokuapp.com/api/chess/startend",{command:"start"}).then((function(e){"Game start"===e.data&&n()})).catch((function(e){console.log(e)}))};return Object(a.jsx)(a.Fragment,{children:O?Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"top-timer",children:Object(a.jsx)(g,{timer:t.timer,timeoutHandler:k,run:"white"!==b})}),Object(a.jsx)(y,{squares:i,rows:t.rows,columns:t.columns,updateData:n}),Object(a.jsx)(D,{turn:b,whiteTime:t.timer+2,run:"white"===b,giveUpHandler:k})]}):w?Object(a.jsx)(z,{winner:t.winner,startGameHandler:S}):Object(a.jsx)(H,{startGameHandler:S})})};var T=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),i=Object(m.a)(s,2),o=i[0],b=i[1],d=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://chessapi55.herokuapp.com/api/chess");case 2:t=e.sent,r(JSON.parse(t.data)),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(x,{}),o?Object(a.jsx)("h3",{className:"center",style:{marginTop:200,fontSize:40},children:"Loading....."}):Object(a.jsx)(G,{items:n,updateData:d})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))},31:function(e,t,n){},51:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.c7585c26.chunk.js.map