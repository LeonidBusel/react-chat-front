(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{208:function(e,c,n){},273:function(e,c,n){},274:function(e,c,n){},341:function(e,c,n){},342:function(e,c,n){},343:function(e,c,n){},346:function(e,c,n){"use strict";n.r(c);var t=n(0),a=n.n(t),s=n(12),o=n.n(s),r=n(63),i=n(50),l=n(25),j=n(97),u=n(32),b=n(354),m=n(352),d=n(351),O=n(353),g=n(197),p=n(350),f=(n(208),n(8)),h=m.a.Text,x=function(e){var c=e.allUser;return Object(f.jsx)("div",{className:"active-user-wrapper",children:Object(f.jsx)(p.b,{dataSource:c,renderItem:function(e,c){var n=e.nickName,t=e.nickColor,a=e.clientId;return Object(f.jsx)(p.b.Item,{children:Object(f.jsx)(p.b.Item.Meta,{title:Object(f.jsxs)(h,{style:{color:t},children:[c+1,". ",n]})})},a)}})})},k=n(188),v=n.n(k),N=(n(272),n(273),function(e){var c=e.onClose,n=e.color;return Object(f.jsx)("div",{className:"color-picker-wrapper",children:Object(f.jsx)(v.a,{animation:"slide-up",enableAlpha:!0,defaultColor:n,onClose:c})})}),y=(n(274),m.a.Text),C=O.a.TextArea,L=function(e){var c=e.allMsg,n=e.sendMsgHandle,t=d.a.useForm(),a=Object(j.a)(t,1)[0];return Object(f.jsxs)("div",{className:"chat-area-wrapper",children:[Object(f.jsx)(p.b,{className:"chat-body",dataSource:c,renderItem:function(e){var c=e.nickName,n=e.nickColor,t=e.id,a=e.message,s=e.date;return Object(f.jsx)(p.b.Item,{children:Object(f.jsx)(p.b.Item.Meta,{title:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{style:{color:n},children:c})," ",Object(f.jsx)(y,{type:"secondary",children:s})]}),description:Object(f.jsx)(y,{children:a})})},t)}}),Object(f.jsxs)(d.a,{className:"msg-send-form",form:a,name:"message-form",layout:"inline",size:"medium",onFinish:n,children:[Object(f.jsx)(d.a.Item,{name:"message",className:"text-area-wrapper",children:Object(f.jsx)(C,{rows:2,placeholder:"Type msg...",required:!0})}),Object(f.jsx)(d.a.Item,{children:Object(f.jsx)(g.a,{type:"primary",htmlType:"submit",children:"Send"})})]})]})},S=function(e){var c=e.path,n=e.exact,t=e.component;return Object(f.jsx)(l.a,{path:c,exact:n,component:t})},U=n(81),w=Object(U.b)({name:"login",initialState:{isLogin:!1,nickName:null,nickColor:null},reducers:{login:function(e,c){var n=c.payload;e.isLogin=!0,e.nickName=n.nickName,e.nickColor=n.nickColor},logout:function(e){console.log("logout:"),e.isLogin=!1,e.nickName=null,e.nickColor=null}}}),I=w.actions,M=I.login,T=I.logout,E=w.reducer,A=(n(341),b.a.Header),J=b.a.Content,F=m.a.Title;var G,H=Object(i.b)((function(e){return{userLogin:e.userLogin}}),(function(e){return Object(u.b)({login:M},e)}))((function(e){var c=d.a.useForm(),n=Object(j.a)(c,1)[0],a=Object(t.useState)("#000"),s=Object(j.a)(a,2),o=s[0],r=s[1],i=Object(l.f)();Object(t.useEffect)((function(){e.userLogin.isLogin&&i.push("/chat")}),[e.userLogin.isLogin]);return Object(f.jsxs)(b.a,{className:"welcome-wrapper",children:[Object(f.jsx)(A,{children:Object(f.jsx)(F,{className:"title",children:"Welcome!"})}),Object(f.jsx)(J,{children:Object(f.jsxs)(d.a,{form:n,name:"login-form",layout:"inline",size:"medium",onFinish:function(c){e.login({nickName:c.nickname,nickColor:o})},children:[Object(f.jsx)(d.a.Item,{label:"Nick Name",name:"nickname",extra:"max 15 symbols",children:Object(f.jsx)(O.a,{placeholder:"Type your nickname...",maxLength:15,required:!0})}),Object(f.jsx)(d.a.Item,{label:"Nick Color",name:"color",children:Object(f.jsx)(N,{color:o,onClose:function(e){var c=e.color;r(c)}})}),Object(f.jsx)(d.a.Item,{children:Object(f.jsx)(g.a,{type:"primary",htmlType:"submit",children:"Entry"})})]})})]})})),_=n(348),q=n(349),z=Object(U.b)({name:"message",initialState:{isOpen:!1,msg:[],activeUser:[]},reducers:{open:function(e){e.isOpen=!0},activeUser:function(e,c){var n=c.payload;e.activeUser=n.slice()},allMsg:function(e,c){var n=c.payload;e.msg=n.slice()},close:function(e){e.isOpen=!1,e.msg=[],e.activeUser=[]}}}),W=z.actions,B=(W.open,W.activeUser),D=W.allMsg,R=W.close,V=z.reducer,K=function(e){var c=e.nickName,n=e.nickColor,t=e.msgAllCallback,a=e.activeUserCallback,s=e.logoutUserCallback,o=new WebSocket("ws://chat-nodejs-leonid.herokuapp.com/");return o.onopen=function(){console.log("websocket is connected..."),o.send(JSON.stringify({type:"LOGIN",nickName:c,nickColor:n}))},o.onmessage=function(e){var c=JSON.parse(e.data);switch(c.type){case"ACTIVE_USER":a(c.activeUser);break;case"MSG_ALL":t(c.messages)}},o.onerror=function(e){console.log("socket error"),s()},o.onclose=function(){console.log("socket is close"),s()},o},P=(n(342),b.a.Header),Q=b.a.Content,X=m.a.Title;var Y=Object(i.b)(null,(function(e){return Object(u.b)({logout:T,activeUser:B,allMsg:D,close:R},e)}))((function(e){var c=Object(l.f)(),n=Object(i.c)((function(e){return e.userLogin})),a=Object(i.c)((function(e){return e.message.msg})),s=Object(i.c)((function(e){return e.message.activeUser})),o=n.isLogin,j=n.nickName,u=n.nickColor;Object(t.useEffect)((function(){o?(G=K({nickName:j,nickColor:u,msgAllCallback:m,activeUserCallback:d,logoutUserCallback:O}),console.log(G)):c.push("/")}),[]);var m=function(c){e.allMsg(c)},d=function(c){e.activeUser(c)},O=function(){e.logout(),e.close(),1===G.readyState&&G.send(JSON.stringify({type:"LOGOUT"}))};return Object(t.useEffect)((function(){n&&!n.isLogin&&c.push("/")}),[n]),Object(t.useEffect)((function(){return function(){n.isLogin&&O()}}),[]),Object(f.jsxs)(b.a,{className:"chat-wrapper",children:[Object(f.jsx)(P,{children:Object(f.jsx)(X,{className:"title",children:"Global Chat!"})}),Object(f.jsxs)(Q,{className:"chat-content-wrapper",children:[Object(f.jsx)(_.a,{children:Object(f.jsx)(r.b,{to:"/",children:"< back to welcome page"})}),Object(f.jsxs)(_.a,{children:[Object(f.jsx)(q.a,{span:16,children:Object(f.jsx)(L,{allMsg:a,sendMsgHandle:function(e){G.send(JSON.stringify({type:"SEND_MSG",message:e.message}))}})}),Object(f.jsx)(q.a,{span:8,children:Object(f.jsx)(x,{allUser:s})})]})]})]})})),Z=function(){return Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/",exact:!0,component:H}),Object(f.jsx)(S,{path:"/chat",exact:!0,component:Y}),Object(f.jsx)(l.a,{path:"*",exact:!0,component:H})]})},$={userLogin:E,message:V},ee=Object(U.a)({reducer:$});n(343),n(344);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{store:ee,children:Object(f.jsx)(r.a,{children:Object(f.jsx)(Z,{})})})}),document.getElementById("root"))}},[[346,1,2]]]);
//# sourceMappingURL=main.1f728a11.chunk.js.map