(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),s=n(37),o=n.n(s),i=(n(48),n(4)),u=n(38),m=Object(u.io)("https://chessapi55.herokuapp.com/game"),j=(n(79),n(39)),l=n(40),b=n(42),d=n(41),O=n.p+"static/media/chess.5b7e3715.png",p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("header",{className:"center",children:[Object(a.jsx)("img",{src:O,alt:""}),Object(a.jsx)("h1",{children:"Chess Game by RomJ55"})]})}}]),n}(c.a.Component),f=n(5),g=n(3),h=function(e){var t=e.timeoutHandler,n=e.run,c=e.timer,s=Object(r.useState)(c),o=Object(i.a)(s,2),u=o[0],m=o[1],j=Object(r.useState)(n),l=Object(i.a)(j,2),b=l[0],d=l[1];Object(r.useEffect)((function(){d(n);var e=null;return b?e=setInterval((function(){m((function(e){return e-1}))}),1e3):b||0===u||clearInterval(e),function(){return clearInterval(e)}}),[b,u,n]);var O=g.a.create({slide:{animationName:f.zoomInRight,animationDuration:"2.6s"}});if(u>=0){var p=Math.floor(u/60),h=u%60;return h>9?Object(a.jsxs)("h3",{className:Object(g.b)(O.slide),children:["Time: ",p,":",h]}):Object(a.jsxs)("h3",{className:Object(g.b)(O.slide),children:["Time: ",p,":0",h]})}return t(),Object(a.jsx)("h3",{children:"Time: Times up!"})},v=function(e){var t=e.j,n=e.i,r=e.imagePath,c=e.type,s=e.selected,o=e.player,i=e.updateData,u=g.a.create({zoom:{animationName:f.zoomIn,animationDuration:"3s"},zoomImg:{animationName:f.zoomInDown,animationDuration:"2.5s"}});return Object(a.jsx)("button",{className:[Object(g.b)(u.zoom),"square"].join(" "),style:{background:(t+n)%2?"black":"white",border:s?"4px solid rgb(255,255,0)":"2px solid rgb(136, 127, 127)"},onClick:function(){m.emit("clicked",{x:n,y:t,player:o}),m.on("clicked",(function(e){"Done!"===e&&(m.off("clicked"),i())}))},children:Object(a.jsx)("img",{className:Object(g.b)(u.zoomImg),src:"/ReactChess"+r,alt:c})})},x=function(e){var t=e.squares,n=e.rows,c=e.columns,s=e.updateData,o=Object(r.useState)([]),u=Object(i.a)(o,2),m=u[0],j=u[1];Object(r.useEffect)((function(){j(t)}),[t]);for(var l=[],b=0;b<n;b++)for(var d=0;d<c;d++){var O=[b,d],p=-1,f="/pieces/dummy.png",g=-1,h=void 0,x=void 0;void 0!==m&&m.length>1&&m[b][d]&&(p=m[b][d].type,x=m[b][d].selected,f="/pieces/"+(g="white"===(h=m[b][d].player)?0:1)+"0"+p+".png",5===p&&m[b][d].incheck&&(f="/pieces/"+g+"0"+p+"c.png")),l.push(Object(a.jsx)(v,{j:d,i:b,imagePath:f,type:p,selected:x,player:h,updateData:s},O))}return Object(a.jsx)("div",{className:"board",children:l})},N=function(e){var t=e.turn,n=g.a.create({bounce:{animationName:f.zoomInUp,animationDuration:"2.7s"}}),r="not started"===t?"waiting for player...":"".concat(t," Turn");return Object(a.jsx)("h2",{className:Object(g.b)(n.bounce),children:r.toUpperCase()})},S=function(e){var t=e.turn,n=e.giveUpHandler,r=e.run,c=e.timer;return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("button",{className:"gu-button",onClick:n,disabled:"not started"===t,children:"Give up"}),Object(a.jsx)(N,{turn:t}),Object(a.jsx)(h,{timeoutHandler:n,run:r,timer:c})]})},I=n.p+"static/media/w_won.e09776c3.png",y=n.p+"static/media/b_won.b15e077a.png",w=function(e){var t=e.winner,n=e.restartGameHandler,r=e.leaveRoomHandler,c="Winner: "+t,s=g.a.create({bounce:{animationName:f.bounceIn,animationDuration:"0.8s"}});return Object(a.jsxs)("div",{className:[Object(g.b)(s.bounce),"start"].join(" "),children:[Object(a.jsx)("h1",{className:"center",children:c.toUpperCase()}),Object(a.jsx)("img",{src:"white"===t?I:y,alt:"",style:{padding:3}}),Object(a.jsx)("button",{className:"se-button",onClick:n,children:"Play again"}),Object(a.jsx)("button",{className:"se-button",onClick:r,children:"Leave room"})]})},C=n.p+"static/media/start_game.553f5179.jpg",k=function(e){var t=e.startGameHandler,n=e.nameInputChangeHandler,r=e.codeInputChangeHandler,c=e.joinGameHandler,s=g.a.create({bounce:{animationName:f.bounceIn,animationDuration:"0.8s"}});return Object(a.jsxs)("div",{className:[Object(g.b)(s.bounce),"start"].join(" "),children:[Object(a.jsx)("img",{src:C,alt:""}),Object(a.jsx)("input",{className:"name-input",defaultValue:"Choose a Username (required)",onFocus:function(e){return e.target.value=""},onChange:n}),Object(a.jsx)("button",{className:"se-button",onClick:t,style:{marginTop:5},children:"Create new room"}),Object(a.jsxs)("div",{className:"start-footer",children:[Object(a.jsx)("h2",{children:"Have a room code?"}),Object(a.jsx)("input",{className:"name-input",defaultValue:"Enter room code",onFocus:function(e){return e.target.value=""},onChange:r}),Object(a.jsx)("button",{className:"se-button",onClick:c,children:"Join a room"})]})]})},H=function(e){var t=e.items,n=e.updateData,c=Object(r.useState)([[]]),s=Object(i.a)(c,2),o=s[0],u=s[1],j=Object(r.useState)([]),l=Object(i.a)(j,2),b=l[0],d=l[1],O=Object(r.useState)([]),p=Object(i.a)(O,2),f=p[0],g=p[1],v=Object(r.useState)([]),N=Object(i.a)(v,2),I=N[0],y=N[1],C=Object(r.useState)(""),H=Object(i.a)(C,2),D=H[0],R=H[1],E=Object(r.useState)(JSON.parse(sessionStorage.getItem("tempRoom"))),z=Object(i.a)(E,2),G=z[0],J=z[1];Object(r.useEffect)((function(){u(t.board),d(t.turn),g(t.game_running),y(t.is_winner)}),[t.board,t.turn,t.game_running,t.is_winner]);var T=function(){m.emit("gameEnd"),m.on("gameEnd",(function(e){"game ended!"===e&&(m.off("gameEnd"),n())}))},_=function(){m.emit("leave",{username:D,room:G}),sessionStorage.removeItem("tempRoom"),J(null),n()};return Object(a.jsx)(a.Fragment,{children:null!==G&&f?Object(a.jsxs)("div",{className:"game",children:[Object(a.jsxs)("div",{className:"top-area",children:[Object(a.jsx)("button",{className:"gu-button",onClick:_,children:"Leave Room"}),Object(a.jsxs)("h2",{children:["Room: ",G]}),Object(a.jsx)(h,{timeoutHandler:T,run:"black"===b,timer:t.timer})]}),Object(a.jsx)(x,{squares:o,rows:t.rows,columns:t.columns,updateData:n}),Object(a.jsx)(S,{turn:b,run:"white"===b,giveUpHandler:T,timer:t.timer})]}):I?Object(a.jsx)(w,{winner:t.winner,restartGameHandler:function(){m.emit("restart"),m.on("restart",(function(e){"game restarted"===e&&(m.off("restart"),n())}))},leaveRoomHandler:_}):Object(a.jsx)(k,{startGameHandler:function(){if(""!==D){var e=(n=1e7,a=99999999,n=Math.ceil(n),a=Math.floor(a),Math.floor(Math.random()*(a-n))+n);sessionStorage.setItem("tempRoom",e),J(e);var t={username:D,room:e};m.emit("join",t)}var n,a},nameInputChangeHandler:function(e){R(e.target.value)},codeInputChangeHandler:function(e){sessionStorage.setItem("tempRoom",e.target.value)},joinGameHandler:function(){if(""!==D&&""!==sessionStorage.getItem("tempRoom")){var e={username:D,room:sessionStorage.getItem("tempRoom")};m.emit("joinExisting",e),J(JSON.parse(sessionStorage.getItem("tempRoom"))),m.emit("gameStart"),m.on("gameStart",(function(e){"game started!"===e&&(m.off("gameStart"),n())}))}}})})},D=n.p+"static/media/spinner.11d9cde8.gif",R=function(){return Object(a.jsxs)("div",{className:"center",style:{display:"grid",marginTop:100},children:[Object(a.jsx)("img",{src:D,alt:""}),Object(a.jsx)("h3",{style:{fontSize:40,paddingLeft:35},children:"Loading....."})]})};var E=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!0),o=Object(i.a)(s,2),u=o[0],j=o[1],l=function(){m.emit("data"),m.on("data",(function(e){var t=JSON.parse(e);c(t),j(!1)}))};return Object(r.useEffect)((function(){return l(),function(){m.off("data")}}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(p,{}),u?Object(a.jsx)(R,{}):Object(a.jsx)(H,{items:n,updateData:l})]})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))},48:function(e,t,n){},79:function(e,t,n){}},[[158,1,2]]]);
//# sourceMappingURL=main.e7b9e2e1.chunk.js.map