(this.webpackJsonpfacies=this.webpackJsonpfacies||[]).push([[0],{262:function(e,t,n){},263:function(e,t,n){},269:function(e,t){},270:function(e,t){},278:function(e,t){},281:function(e,t){},282:function(e,t){},283:function(e,t){},285:function(e,t,n){"use strict";n.r(t);var c=n(38),r=n.n(c),u=n(235),i=n.n(u),o=(n(262),n(4)),s=(n(263),n(138)),a=n(46);function l(e){var t=e.file,n=e.img,r=e.position,u=e.setImgLoaded,i=Object(c.useState)(null),l=Object(o.a)(i,2),f=l[0],j=l[1],b=Object(c.useState)(null),O=Object(o.a)(b,2),h=O[0],g=O[1],d=Object(c.useState)(null),v=Object(o.a)(d,2),p=v[0],m=v[1],w=Object(c.useState)(null),x=Object(o.a)(w,2),R=x[0],S=x[1],F=Object(c.useState)(null),M=Object(o.a)(F,2),y=M[0],L=M[1],C=Object(c.useState)(null),N=Object(o.a)(C,2),B=N[0],D=N[1];return Object(c.useEffect)((function(){t&&(n.current.src=t,function(){var e=.9*window.innerHeight,t=.9*window.innerWidth,c=e/t,r=n.current.height/n.current.width;r>c?(D(e),L(e/r)):(L(t),D(t*r))}(),u(t),r&&s.e((function(){s.c("/facies/model/model.json").then((function(e){var t=s.a.fromPixels(n.current),c=s.d(t,[r.top,r.left],[r.length,r.length]),u=s.b.resizeNearestNeighbor(c,[256,256],!0).div(255).reshape([1,256,256,3]);e.predict(u).array().then((function(e){e=e[0];var t=n.current.getBoundingClientRect(),c=t.top+r.top+e[0]*r.length,u=t.left+r.left+e[1]*r.length,i=(e[2]-e[0])*r.length,o=(e[3]-e[1])*r.length;j(c),g(u),S(i),m(o)}))}))})))}),[t,r]),t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{className:"img",ref:n,src:"",alt:"pet",style:{width:y,height:B}}),Object(a.jsx)("div",{className:"faceBox",style:{top:f,left:h,width:p,height:R}})]}):null}function f(e){var t=e.setFile;return Object(a.jsx)("input",{className:"inputFile",type:"file",name:"file",onChange:function(e){var n=e.target.files[0];if(n&&"image"===n.type.substr(0,5)){var c=new FileReader;c.onload=function(e){t(c.result)},c.readAsDataURL(n)}}})}function j(e){var t=e.img,n=e.box,r=(e.position,e.setPosition),u=e.imgLoaded,i=Object(c.useState)(),s=Object(o.a)(i,2),l=s[0],f=s[1],j=Object(c.useState)(),b=Object(o.a)(j,2),O=b[0],h=b[1],g=Object(c.useState)(),d=Object(o.a)(g,2),v=d[0],p=d[1],m=Object(c.useRef)(!1),w=Object(c.useRef)(),x=Object(c.useRef)(),R=Object(c.useRef)(),S=Object(c.useRef)(),F=Object(c.useRef)(),M=Object(c.useRef)(),y=Object(c.useRef)(),L=Object(c.useRef)(),C=Object(c.useRef)();Object(c.useEffect)((function(){if(t.current){var e=t.current.getBoundingClientRect();F.current=e.top,M.current=e.left,y.current=e.bottom,L.current=e.right,R.current=t.current.width,S.current=t.current.height,R.current>S.current?(p(S.current),C.current=!1):(p(R.current),C.current=!0),f(F.current),h(M.current)}}),[u]);var N=function(e){var t=e+v;return!(e<F.current||t>y.current)},B=function(e){var t=e+v;return!(e<M.current||t>L.current)};return t.current?Object(a.jsx)("div",{ref:n,className:"box",onMouseDown:function(e){(e=e||window.event).preventDefault(),m.current=!0,w.current=e.clientX,x.current=e.clientY},onMouseMove:function(e){if(m.current){(e=e||window.event).preventDefault();var t=w.current-e.clientX,n=x.current-e.clientY;if(w.current=e.clientX,x.current=e.clientY,C.current){var c=l-n;N(c)&&f(c)}else{var r=O-t;B(r)&&h(r)}}},onMouseUp:function(e){m.current=!1,r({top:Math.floor(l-F.current),left:Math.floor(O-M.current),length:Math.floor(v)})},style:{width:v,height:v,top:l,left:O}}):null}function b(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(null),i=Object(o.a)(u,2),s=i[0],b=i[1],O=Object(c.useState)(null),h=Object(o.a)(O,2),g=h[0],d=h[1],v=Object(c.useRef)(null),p=Object(c.useRef)(null);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{setFile:r}),Object(a.jsx)(j,{img:p,box:v,position:s,setPosition:b,imgLoaded:g}),Object(a.jsx)(l,{file:n,img:p,position:s,setImgLoaded:d})]})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,286)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,u=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),u(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),O()}},[[285,1,2]]]);
//# sourceMappingURL=main.aeb901ff.chunk.js.map