(this.webpackJsonpomegasport=this.webpackJsonpomegasport||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(16),i=c.n(n),r=(c(29),c(30),c(2)),l=c(4),o={categories:["all","women","men","casual"],activeCategory:0,cards:[],foundCards:[]},d="SET_CATEGORY",j="SET_CARDS",u="SEARCH_SHOES",b=function(e){return{type:j,cards:e}},h=function(){return function(e){fetch("http://localhost:3004/cards").then((function(e){return e.json()})).then((function(t){e(b(t))}))}},O=c(15),f=c(23),m=c(24),x="ADD_FAVORITE",p="REMOVE_FAVORITE",v="ADD_CART",_="SHOW_WISHLIST",g="HIDE_WISHLIST",N={favorites:[],cart:[],totalPrice:0,showWishlist:!1},w=function(e){return{type:x,payload:e}},y=function(e){return{type:p,payload:e}},A=function(){return{type:g}},C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.c,k=Object(O.b)({shoes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeCategory:t.categoryIndex});case j:return Object(l.a)(Object(l.a)({},e),{},{cards:t.cards});case u:var c=e.cards.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));return Object(l.a)(Object(l.a)({},e),{},{foundCards:c});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return e.favorites.includes(t.payload)?e:Object(l.a)(Object(l.a)({},e),{},{favorites:[].concat(Object(m.a)(e.favorites),[t.payload])});case p:var c=e.favorites.filter((function(e){return e!==t.payload}));return Object(l.a)(Object(l.a)({},e),{},{favorites:c});case v:var a=!1,s=e.cart.map((function(e){return e.id===t.payload.id?(a=!0,e.count+=t.payload.count,e):e}));return a||s.push({id:t.payload.id,count:t.payload.count}),Object(l.a)(Object(l.a)({},e),{},{cart:s,totalPrice:+(e.totalPrice+ +t.payload.price*t.payload.count).toFixed(2)});case _:return Object(l.a)(Object(l.a)({},e),{},{showWishlist:!0});case g:return Object(l.a)(Object(l.a)({},e),{},{showWishlist:!1});default:return e}}}),E=Object(O.d)(k,C(Object(O.a)(f.a))),L=c(11),S=c(0),I={shuffle:Object(S.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"random",className:"svg-inline--fa fa-random fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(S.jsx)("path",{fill:"currentColor",d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"})}),heart:Object(S.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"heart",className:"svg-inline--fa fa-heart fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(S.jsx)("path",{fill:"currentColor",d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"})}),bag:Object(S.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"shopping-bag",className:"svg-inline--fa fa-shopping-bag fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(S.jsx)("path",{fill:"currentColor",d:"M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"})}),search:Object(S.jsx)("svg",{width:21,height:21,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",className:"svg-inline--fa fa-search fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(S.jsx)("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})}),cart:Object(S.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"shopping-cart",className:"svg-inline--fa fa-shopping-cart fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(S.jsx)("path",{fill:"currentColor",d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"})}),star:Object(S.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",className:"svg-inline--fa fa-star fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(S.jsx)("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})})},H=function(e){var t=e.type;return I[t]},B=(c(35),c(36),function(e){var t=e.images,c=e.name,a=e.price;return Object(S.jsxs)("div",{className:"search-item",children:[Object(S.jsx)("img",{className:"search-item__img",src:t[0],alt:"shoe image"}),Object(S.jsxs)("span",{className:"search-item__price",children:["$",a]}),Object(S.jsx)("span",{className:"search-item__name",children:c})]})}),z=c(10),J=function(){var e=Object(a.useState)(!1),t=Object(L.a)(e,2),c=t[0],s=t[1],n=Object(r.c)((function(e){return e.shoes.foundCards})),i=Object(r.c)((function(e){var t=e.cart;return{countInCart:t.cart.reduce((function(e,t){return e+t.count}),0),totalPrice:+t.totalPrice}})),o=i.countInCart,d=i.totalPrice,j=Object(r.b)(),b=function(e){s(!0),j(function(e){return{type:u,payload:e}}(e))},h=Object(r.c)((function(e){return e.cart.favorites.length}));return Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("div",{className:"header__logo",children:Object(S.jsx)(z.b,{to:"/",children:Object(S.jsx)("img",{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAkCAYAAAC9phn5AAADx0lEQVR42u2c4VHbMBiGn3AM4IPf6I5kA5dOELpBaCdo2IAcE3Blg7gTFLJBwgSFbFD/0P/2skH7QxakxvpkKyYJiZ673HGR5dexXkufPsl0Tk5OWIEr4JujbATcrnLyiB+t9ZtrHGz6R0a2n2iSiJdokoiXaJKIl2iSiJdokoiXaJKIl2iSiJfDDemeO77Pi4+LbvGpYtawzqx0zAD4BBwBaVG+AKbAXfF3Hdaqp5RyFQ0KnWWN5euYAjOt9dyn0dlQxvVvQB2fXqdhnR7GkFfANZAIugvgKzBZ4Z68lV6V/iXuh6lMDnzTWmeuA/Z5uOny0qCJ59gEuAeGW6yXAr+K89c1iL2usVJqqpSqrLfPJhnh7pVcNG2AdekNgYcVrg1MCPCklErLBftskvOAOgmmsbdJbwCM8fdOdfUeykbZZ5OE8nmL9LrA95b1EuBeKfVsumgSQ455Ym3gLM0sEsJ6hbfQ88U3i0KjhwnsO8CH4jtJs4sJroHNTYG3iQwzG1jmBnjCPcbbKesm9VLMUONiDvR5bYZ58ckwcUzqqH+llBprrfN970nmvG4wMDe2aZC5br1LocxlkLJmHzkvNYA43IyFstCeYl160pDnG04sPnN+gWiSO6Esr32W9etJmec5DQxXJNFc2ilEk9RNtW+bnpQP+RFwPmdqXimV7rtJdpEQI/4Uyo6iSXaP1ofJQ0xK1zXXjq9EvD9CpufHUuEhcIE7Um4UBEW2gl5AnVQoezxACFrwLxgd0y6+H/ixZb33ivTgNsoGFyu/rjoLrfXiAPgtnOPCoyFdkHczSwVnQlkb6fBdwnV/7ZaEukgLiDMwU2CfK117GobI3dQfn3gFKe7eS4qd9hFpqnuN3DaWIfKelSkYk8yRI+IxJitnn+IU41Qpe7ggrCcBs9mmbBRpR9q+kuGe7iaYdRnJAL42zO1uNbvAZ40gnbBJF3bnKZ/iHjrsDivb25wRe5AqFpiFQVe7JZh2HWG2Qdqw4piX/a8Sz8OQNUmGf99lE3xPfZ0ZU4w//Nxi1lekoaVpjAKQaa2f99faZJrdeNvWhfsSOqFT63Wn0d8DfcKH9irmlILZ5YzrBHn5uQ4Z9bf3hcQYN0SjlLFL/m0YZQL0tdb/3eNyWj7DTHtDGmJEM5PNGh6fYXqpxxZuxq6x4GXHWWj9kdb6omwQqF4FngCnhaDPnTmm4XqEpfAzzMtDko7dgmcN9RZL+LvCclvUuU92G+Wp1trZfnVezkqoTnL53rZrSsrrYDUn7AWliCGlenaYU6Q+6vw7rX92fvrHpygIBwAAAABJRU5ErkJggg==",alt:"logo"})})}),Object(S.jsxs)("div",{className:"header__search",children:[Object(S.jsx)("input",{onInput:function(e){return b(e.target.value)},onBlur:function(){s(!1)},type:"text",placeholder:"Enter your search key..."}),Object(S.jsx)("button",{className:"header__search-btn",children:Object(S.jsx)(H,{type:"search"})}),Object(S.jsxs)("div",{className:"header__hidden-search ".concat(!c&&"hidden"),children:[!n.length&&Object(S.jsx)("span",{className:"header__not-found",children:"Not found"}),n.map((function(e){return Object(S.jsx)(B,Object(l.a)({},e),e.id)})).slice(0,4)]})]}),Object(S.jsxs)("div",{className:"header__cart-block-links",children:[Object(S.jsxs)("div",{className:"header__shuffle header__cart-block-link",children:[Object(S.jsx)(H,{type:"shuffle"}),Object(S.jsx)("span",{className:"count",children:"1"})]}),Object(S.jsxs)("div",{onClick:function(){document.body.style.overflow="hidden",j({type:_})},className:"header__favorite header__cart-block-link",children:[Object(S.jsx)(H,{type:"heart"}),h?Object(S.jsx)("span",{className:"count",children:h}):null]}),Object(S.jsxs)("div",{className:"header__cart header__cart-block-link",children:[Object(S.jsxs)("div",{className:"header__cart-block-link",children:[Object(S.jsx)(H,{type:"bag"}),o?Object(S.jsx)("span",{className:"count",children:o>99?99:o}):null]}),Object(S.jsxs)("span",{className:"header__total-price",children:["$",(d>9999.99?9999.99:d)||0]})]})]})]})},D=(c(39),c.p+"static/media/banner-1.e3e9ce63.jpg"),F=c.p+"static/media/banner-2.015cf950.jpg",R=c.p+"static/media/banner-3.18d63655.jpg",V=function(){return Object(S.jsxs)("div",{className:"banners",children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:D,alt:"banner 1"})}),Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:F,alt:"banner 2"})}),Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:R,alt:"banner 3"})})]})},W=(c(40),c(41),function(e){var t=e.name,c=e.active,a=e.setCategory,s=e.index,n=Object(r.b)();return Object(S.jsxs)("div",{className:"category category__".concat(c),onClick:function(){n(function(e){return function(t){fetch("http://localhost:3004/cards?".concat("all"===e?"":"category=".concat(e))).then((function(e){return e.json()})).then((function(e){t(b(e))}))}}(t)),a({type:d,categoryIndex:s})},children:[t," shoes"]})}),M=(c(42),c(43),function(e){var t=e.rating;return Object(S.jsx)("div",{className:"rating",children:Array(t).fill(0).map((function(e,t){return Object(S.jsx)(H,{type:"star"},t)}))})}),Q=function(e){var t=e.isNew,c=e.name,s=e.price,n=e.discount,i=e.rating,l=e.images,o=e.id,d=(e.favorite,Object(a.useState)(!1)),j=Object(L.a)(d,2),u=j[0],b=j[1],h=Object(r.c)((function(e){return e.cart.favorites})),O=Object(a.useRef)(),f=Object(r.b)(),m=(+s*(1-+n/100)).toFixed(2);return Object(S.jsxs)("div",{className:"card",onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:[Object(S.jsxs)("div",{ref:O,className:"card__thumbnail",children:[Object(S.jsx)(z.b,{to:"/about/".concat(o),children:Object(S.jsx)("img",{src:l[0],alt:"shoes image"})}),Object(S.jsxs)("div",{className:"card__promotions",children:[n&&Object(S.jsxs)("span",{className:"card__discount",children:["-",n,"%"]}),t&&Object(S.jsx)("span",{className:"card__new",children:"New"})]}),Object(S.jsxs)("div",{className:"card__cart-items ".concat(u?"show":"hide"),children:[Object(S.jsx)("div",{className:h.includes(o)&&"favorite",onClick:function(){h.includes(o)?f(y(o)):f(w(o))},children:Object(S.jsx)(H,{type:"heart"})}),Object(S.jsx)("div",{children:Object(S.jsx)(H,{type:"shuffle"})}),Object(S.jsx)("div",{children:Object(S.jsx)(H,{type:"search"})})]})]}),Object(S.jsxs)("div",{className:"card__description",children:[Object(S.jsx)(z.b,{to:"/about/".concat(o),children:Object(S.jsx)("div",{className:"card__name",children:c})}),Object(S.jsx)(M,{rating:i}),Object(S.jsxs)("div",{className:"cart__price",children:[n&&Object(S.jsxs)("span",{className:"cart__old-price",children:["$",s]}),Object(S.jsxs)("span",{className:n&&"card__discount-price",children:["$",n?m:s]}),Object(S.jsx)("div",{children:Object(S.jsx)(H,{type:"cart"})})]})]})]})},Z=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){var t=e.shoes;return{categories:t.categories,activeCategoryIndex:t.activeCategory,cards:t.cards}})),c=t.categories,s=t.activeCategoryIndex,n=t.cards;Object(a.useEffect)((function(){n.length||e(h())}),[]);var i=Object(r.b)();return Object(S.jsxs)("div",{className:"products",children:[Object(S.jsx)("h2",{className:"products__header",children:"Our Products"}),Object(S.jsx)("p",{className:"products__description",children:"Add our products to weekly line up"}),Object(S.jsx)("div",{className:"products__categories",children:c.map((function(e,t){return Object(S.jsx)(W,{index:t,setCategory:i,name:e,active:s===t&&"active"},t)}))}),Object(S.jsx)("div",{className:"cards",children:n.map((function(e){return Object(S.jsx)(Q,Object(l.a)({},e),e.id)}))})]})},G=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(J,{}),Object(S.jsx)(V,{}),Object(S.jsx)(Z,{})]})},P=c(5),q=(c(44),c(45),function(e){var t=e.id,c=Object(r.c)((function(e){return e.shoes.cards.filter((function(e){return e.similar.includes(+t)}))}));return Object(S.jsxs)("div",{className:"suggest",children:[Object(S.jsx)("span",{className:"suggest__title",children:"You Must Also Like"}),Object(S.jsx)("p",{className:"suggest__subtitle",children:"Add Related products to weekly line up"}),Object(S.jsx)("div",{className:"suggest__slider",children:c.map((function(e){return Object(S.jsx)(Q,Object(l.a)({},e),e.id)}))})]})}),T=function(){var e=Object(P.e)().id,t=Object(r.c)((function(t){return t.shoes.cards[e-1]})),c=Object(a.useState)(0),s=Object(L.a)(c,2),n=s[0],i=s[1],l=Object(a.useState)(1),o=Object(L.a)(l,2),d=o[0],j=o[1],u=Object(r.c)((function(e){return e.cart.favorites})),b=Object(r.b)(),O=t&&(+t.price*(1-+t.discount/100)).toFixed(2);Object(a.useEffect)((function(){t||b(h())}),[]),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(J,{}),t&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"about",children:[Object(S.jsxs)("div",{className:"about__gallery",children:[t.isNew&&Object(S.jsx)("div",{className:"about__label",children:"New"}),Object(S.jsx)("img",{className:"about__main-image",width:400,src:t.images[n],alt:"product image"}),Object(S.jsx)("div",{className:"about__gallery-items",children:t.images.map((function(e,t){return Object(S.jsx)("img",{width:100,className:"about__gallery-item ".concat(t===n&&"about__gallery-item_active"),src:e,alt:"gallery image",onClick:function(){i(t)}},t)}))})]}),Object(S.jsxs)("div",{className:"about__info",children:[Object(S.jsx)("h1",{className:"about__name",children:t&&t.name}),Object(S.jsx)(M,{rating:t.rating}),Object(S.jsxs)("div",{className:"about__prices",children:[Object(S.jsxs)("div",{className:"".concat(t.discount&&"about__old__price"," about__price"),children:["$",t.price]}),t.discount&&Object(S.jsxs)("div",{className:"about__new-price",children:["$",O]}),t.discount&&Object(S.jsxs)("div",{className:"about__discount",children:["Save ",t.discount,"%"]})]}),Object(S.jsx)("p",{className:"about__description",children:t.description}),Object(S.jsxs)("div",{className:"about__cart",children:[Object(S.jsxs)("div",{className:"about__counter-wrapper",children:[Object(S.jsx)("input",{onInput:function(e){var t;(t=e.target.value).match(/\D/)||+t>10||j(+t)},value:d,className:"about__counter",type:"text"}),Object(S.jsx)("button",{onClick:function(){d<10&&d>=0&&j((function(e){return e+1}))},className:"about__increment",children:"+"}),Object(S.jsx)("button",{onClick:function(){d<=10&&d>0&&j((function(e){return e-1}))},className:"about__decrement",children:"-"})]}),Object(S.jsx)("button",{onClick:function(){d&&b(function(e,t,c){return{type:v,payload:{id:e,price:t,count:c}}}(t.id,t.price,d))},className:"about__add-to-cart",children:"+ add to cart"})]}),Object(S.jsxs)("div",{className:"about__widgets",children:[Object(S.jsxs)("div",{onClick:function(){u.includes(t.id)?b(y(t.id)):b(w(t.id))},className:"about__widget about__favorite",children:[Object(S.jsx)(H,{type:"heart"}),Object(S.jsxs)("span",{children:[u.includes(t.id)?"Remove from ":"Add to ","wishlist"]})]}),Object(S.jsxs)("div",{className:"about__widget about__compare",children:[Object(S.jsx)(H,{type:"shuffle"}),Object(S.jsx)("span",{children:"Add to compare"})]})]})]})]}),Object(S.jsx)(q,{id:e})]})]})},U=(c(46),c(47),function(e){var t=e.name,c=e.image,s=e.price,n=e.id,i=Object(r.b)(),l=Object(a.useRef)();return Object(S.jsxs)("div",{ref:l,className:"wishlist-item",children:[Object(S.jsx)("img",{className:"wishlist-item__image",src:c,alt:"product image"}),Object(S.jsxs)("div",{className:"wishlist-item__about",children:[Object(S.jsx)("div",{className:"wishlist-item__name",children:t.length>25?t.slice(0,25)+"...":t}),Object(S.jsxs)("div",{className:"wishlist-item__price",children:["$",s]})]}),Object(S.jsx)("div",{onClick:function(){l.current.classList.add("remove-animation"),setTimeout((function(){return i(y(n))}),200)},className:"wishlist-item__remove",children:"\xd7"})]})}),X=function(){var e=Object(r.c)((function(e){return e.cart.favorites})),t=Object(r.c)((function(t){return t.shoes.cards.filter((function(t){return e.includes(t.id)}))})),c=Object(r.c)((function(e){return e.cart.showWishlist})),s=Object(a.useRef)(),n=Object(r.b)();return Object(S.jsx)("div",{ref:s,onClick:function(e){e.target===s.current&&(document.body.style.overflow="auto",n(A()))},className:"wishlist-container ".concat(c&&"wishlist-container_active"),children:Object(S.jsxs)("div",{className:"wishlist ".concat(c&&"wishlist_active"),children:[Object(S.jsxs)("div",{className:"wishlist__head",children:[Object(S.jsx)("span",{className:"wishlist__title",children:"Wishlist"}),Object(S.jsx)("button",{onClick:function(){document.body.style.overflow="auto",n(A())},children:"\xd7"})]}),Object(S.jsx)("div",{className:"wishlist__items",children:t.map((function(e){return Object(S.jsx)(U,{name:e.name,price:e.price,image:e.images[0],id:e.id},e.id)}))}),Object(S.jsx)("button",{className:"wishlist__to-wishlist",children:"view wislist"})]})})};var Y=function(){return Object(S.jsx)("div",{className:"container",children:Object(S.jsx)(z.a,{children:Object(S.jsx)(r.a,{store:E,children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(X,{}),Object(S.jsx)(P.a,{path:"/",exact:!0,component:G}),Object(S.jsx)(P.a,{path:"/about/:id",component:T})]})})})})};i.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(Y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.80d23aeb.chunk.js.map