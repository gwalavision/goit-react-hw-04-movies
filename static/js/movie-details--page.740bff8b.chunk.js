(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{55:function(A,t,e){"use strict";var n=e(58),r=e.n(n);r.a.defaults.baseURL="https://api.themoviedb.org/3",r.a.defaults.params={api_key:"832bed4351187ecd0cb4c74b91000f85"},t.a=r.a},88:function(A,t,e){A.exports={avatar:"Cast_avatar__r9Px2"}},91:function(A,t,e){"use strict";function n(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function r(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,n)}return e}function c(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){n(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}e.r(t);var a,i=e(56),o=e.n(i),s=e(57),l=e(59),j=e(0),u=e(11),b=e(4),p=e(55),d=new Uint8Array(16);function f(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(d)}var h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var E=function(A){return"string"===typeof A&&h.test(A)},Q=[],x=0;x<256;++x)Q.push((x+256).toString(16).substr(1));var m=function(A){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(Q[A[t+0]]+Q[A[t+1]]+Q[A[t+2]]+Q[A[t+3]]+"-"+Q[A[t+4]]+Q[A[t+5]]+"-"+Q[A[t+6]]+Q[A[t+7]]+"-"+Q[A[t+8]]+Q[A[t+9]]+"-"+Q[A[t+10]]+Q[A[t+11]]+Q[A[t+12]]+Q[A[t+13]]+Q[A[t+14]]+Q[A[t+15]]).toLowerCase();if(!E(e))throw TypeError("Stringified UUID is invalid");return e};var v=function(A,t,e){var n=(A=A||{}).random||(A.rng||f)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){e=e||0;for(var r=0;r<16;++r)t[e+r]=n[r];return t}return m(n)},O=e(18),g=e.n(O),B=e.p+"static/media/No-Photo-Available.8e7315f8.jpg",y=e(88),C=e.n(y),w=e(3),P=Object(b.f)((function(A){var t=A.cast;return Object(w.jsx)("ul",{children:t.length>0&&t.map((function(A){var t=A.profile_path,e=A.name,n=A.id,r=A.character;return Object(w.jsxs)("li",{children:[t?Object(w.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t),alt:e}):Object(w.jsx)("img",{className:C.a.avatar,src:B,alt:e}),Object(w.jsx)("p",{children:e}),Object(w.jsxs)("p",{children:["Character: ",r]})]},n)}))})})),U=Object(b.f)((function(A){var t=A.reviews;return Object(w.jsx)(w.Fragment,{children:t.length>0?Object(w.jsx)("ul",{children:t.map((function(A){var t=A.author,e=A.content,n=A.id;return Object(w.jsxs)("li",{children:[Object(w.jsx)("h3",{children:t}),Object(w.jsx)("p",{children:e})]},n)}))}):Object(w.jsx)("p",{children:"We don't have any reviews yet"})})})),S=e(17),z=function(A){var t=A.onClick,e=A.movie,n=Object(S.a)({container:{position:"relative",display:"block",textAlign:"center"},button:{position:"absolute",top:"0",left:"0",display:"inline-block",padding:"0.35em 1.2em",border:"0.1em solid #FFFFFF",margin:"0 0.3em 0.3em 0",borderRadius:"0.12em",boxSizing:"border-box",textDecoration:"none",color:"#FFFFFF",backgroundColor:"#049C95",textAlign:"center",transition:" all 0.2s","&:hover":{backgroundColor:"#8801D2"}},genres:{marginRight:"5px"}})(),r=e.poster_path,c=e.title,a=e.name,i=e.vote_average,o=e.overview,s=e.genres;return Object(w.jsxs)("section",{className:n.container,children:[Object(w.jsx)("button",{type:"button",onClick:t,className:n.button,children:"Go back"}),r&&Object(w.jsx)("img",{src:"data:image/jpeg;base64,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",width:300,alt:c||a})&&Object(w.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r),alt:c||a}),Object(w.jsx)("h2",{children:c||a}),i&&Object(w.jsxs)("p",{children:["User score:",Object(w.jsxs)("span",{children:[10*i,"%"]})]}),Object(w.jsx)("h3",{children:"Overview"}),Object(w.jsx)("p",{children:o}),Object(w.jsx)("h3",{children:"Genres"}),s&&Object(w.jsx)("p",{children:s.map((function(A){return Object(w.jsx)("span",{className:n.genres,children:A.name},A.id)}))})]})},D=e(10);t.default=Object(b.f)((function(A){var t=A.location,e=A.match,n=A.history,r=Object(j.useState)(""),a=Object(l.a)(r,2),i=a[0],d=a[1],f=Object(j.useState)(""),h=Object(l.a)(f,2),E=h[0],Q=h[1],x=Object(j.useState)(""),m=Object(l.a)(x,2),O=m[0],B=m[1],y=Object(j.useState)(!1),C=Object(l.a)(y,2),X=C[0],k=C[1],I=Object(S.a)({container:{display:"block",textAlign:"center"},link:{fontSize:"20px",textDecoration:"none",color:"#049C95","&:hover":{color:"#8801D2"}},linkActive:{color:"#8801D2"}})(),K=function(){k((function(A){return!A}))},L=e.params.movieId;return Object(j.useEffect)((function(){function A(){return(A=Object(s.a)(o.a.mark((function A(){var t;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return K(),A.prev=1,A.next=4,p.a.get("movie/".concat(L));case 4:t=A.sent,d(t.data),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(1),console.log(A.t0);case 11:return A.prev=11,K(),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[L]),Object(j.useEffect)((function(){function A(){return(A=Object(s.a)(o.a.mark((function A(){var t;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,p.a.get("movie/".concat(L,"/credits")).then((function(A){return A.data.cast.splice(1,10)}));case 3:t=A.sent,Q(t),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[L]),Object(j.useEffect)((function(){function A(){return(A=Object(s.a)(o.a.mark((function A(){var t;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,p.a.get("movie/".concat(L,"/reviews"));case 3:t=A.sent,B(t.data.results),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[L]),Object(w.jsx)(w.Fragment,{children:X?Object(w.jsx)(g.a,{type:"Oval",color:"#00BFFF",height:80,width:80}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(z,{onClick:function(A){var e;n.push((null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from)||D.a.home)},movie:i&&i}),Object(w.jsxs)("section",{className:I.container,children:[Object(w.jsx)("h3",{children:"Additional information"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)(u.c,{to:{pathname:"".concat(e.url,"/cast"),state:t.state},className:I.link,activeClassName:I.linkActive,children:"Cast"})},v()),Object(w.jsx)("li",{children:Object(w.jsx)(u.c,{to:{pathname:"".concat(e.url,"/reviews"),state:t.state},className:I.link,activeClassName:I.linkActive,children:"Reviews"})},v())]}),Object(w.jsx)(b.a,{path:"".concat(e.path,"/cast"),render:function(A){return Object(w.jsx)(P,c(c({},A),{},{cast:E}))}}),Object(w.jsx)(b.a,{path:"".concat(e.path,"/reviews"),render:function(A){return Object(w.jsx)(U,c(c({},A),{},{reviews:O}))}})]})]})})}))}}]);
//# sourceMappingURL=movie-details--page.740bff8b.chunk.js.map