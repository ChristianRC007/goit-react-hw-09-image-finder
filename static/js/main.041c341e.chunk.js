(this["webpackJsonpgoit-react-hw-09-image-finder"]=this["webpackJsonpgoit-react-hw-09-image-finder"]||[]).push([[0],{82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),i=a(16),s=a(4),u=a(28),l=a(29),j=a.n(l),b=a(1);function m(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value)}})]})})}function d(e){var t=e.webformatURL,a=e.largeImageURL,c=e.tags,r=e.onClick,o=e.updateData,i=Object(n.useState)(a),u=Object(s.a)(i,2),l=u[0];u[1];return Object(b.jsx)("li",{className:"ImageGalleryItem",onClick:function(){r(),o(l)},children:Object(b.jsx)("img",{src:t,alt:c,className:"ImageGalleryItem-image"})})}function f(e){var t=e.images,a=e.onClick,n=e.updateData;return Object(b.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.webformatURL,c=e.tags,r=e.id,o=e.largeImageURL;return Object(b.jsx)(d,{webformatURL:t,tags:c,onClick:a,updateData:n,largeImageURL:o},r)}))})}function O(e){var t=e.onClick;e.id;return Object(b.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}var h=document.querySelector("#modal-root");function g(e){var t=e.onClose,a=e.largeImage;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){return window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&t()},children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:a,alt:""})})}),h)}function p(e){var t=e.children;return Object(b.jsx)("div",{className:"Container",children:t})}var v=a(15),x=a.n(v);x.a.defaults.baseURL="https://pixabay.com";var S="21175244-7c66133e2371767f9955ec31b";function w(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),o=Object(s.a)(r,2),l=o[0],d=o[1],h=Object(n.useState)([]),v=Object(s.a)(h,2),w=v[0],y=v[1],k=Object(n.useState)(""),C=Object(s.a)(k,2),N=C[0],I=C[1],L=Object(n.useState)(!1),R=Object(s.a)(L,2),U=R[0],D=R[1],E=Object(n.useState)(!1),F=Object(s.a)(E,2),T=F[0],B=F[1];Object(n.useEffect)((function(){""!==a&&G()}),[a]);var G=function(){B(!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return x.a.get("/api/?q=".concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=15&key=").concat(S)).then((function(e){return e.data}))}(a,l).then((function(e){y((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})),d((function(e){return e+1}))})).finally((function(){return B(!1)}))},q=function(){D((function(e){return!e}))},J=function(){u.animateScroll.scrollToBottom({containerId:"endView"})};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{onSubmit:function(e){c(e),d(1),y([]),console.log()}}),Object(b.jsx)(f,{images:w,onClick:q,updateData:function(e){I(e)}}),Object(b.jsx)(p,{children:T&&Object(b.jsx)(j.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3})}),w.length>0&&Object(b.jsx)(O,{onClick:function(){G(),J()},id:"endView"}),U&&Object(b.jsx)(g,{onClose:q,largeImage:N})]})}a(81),a(82);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.041c341e.chunk.js.map