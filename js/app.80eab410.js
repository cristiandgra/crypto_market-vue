(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],d=0,b=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("b0c0"),n("b680"),{class:"container"}),o={class:"row"},a=Object(r["d"])("h1",null,"Coin Info",-1),i={class:"table table-dark"},u={class:"text-muted"},l=["src"],s={class:"ms-2 text-uppercase text-muted"};function d(e,t,n,d,b,p){return Object(r["f"])(),Object(r["c"])("div",c,[Object(r["d"])("div",o,[a,Object(r["j"])(Object(r["d"])("input",{type:"text",class:"form-control bg-dark text-light rounded-0 border-0 my-4",placeholder:"Search Coin",onKeyup:t[0]||(t[0]=function(e){return p.searchCoin()}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.textSearch=e})},null,544),[[r["i"],b.textSearch]]),Object(r["d"])("table",i,[Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(b.titles,(function(e){return Object(r["f"])(),Object(r["c"])("th",{key:e},Object(r["h"])(e),1)})),128))])]),Object(r["d"])("tbody",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(b.filteredCoins,(function(e,t){return Object(r["f"])(),Object(r["c"])("tr",{key:e.id},[Object(r["d"])("td",u,Object(r["h"])(t+1),1),Object(r["d"])("td",null,[Object(r["d"])("img",{src:e.image,alt:"logo-coin",style:{width:"2rem"},class:"me-2"},null,8,l),Object(r["d"])("span",null,Object(r["h"])(e.name),1),Object(r["d"])("span",s,Object(r["h"])(e.symbol),1)]),Object(r["d"])("td",null,"€"+Object(r["h"])(e.current_price),1),Object(r["d"])("td",{class:Object(r["e"])([e.price_change_percentage_24h>0?"text-success":"text-danger"])},Object(r["h"])(e.price_change_percentage_24h.toFixed(2))+"% ",3),Object(r["d"])("td",null,"€"+Object(r["h"])(e.total_volume.toLocaleString()),1)])})),128))])])])])}var b=n("1da1"),p=(n("96cf"),n("d3b7"),n("4de4"),n("caad"),n("2532"),{name:"App",data:function(){return{coins:[],filteredCoins:[],titles:["#","Coin","Price","Price Change","24h Vol"],textSearch:""}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.coins=r,e.filteredCoins=r;case 8:case"end":return t.stop()}}),t)})))()},methods:{searchCoin:function(){var e=this;this.filteredCoins=this.coins.filter((function(t){return t.name.toLowerCase().includes(e.textSearch.toLowerCase())||t.symbol.toLowerCase().includes(e.textSearch.toLowerCase())}))}}}),f=n("d959"),h=n.n(f);const j=h()(p,[["render",d]]);var O=j;n("ab8b"),n("db43");Object(r["b"])(O).mount("#app")},db43:function(e,t,n){}});
//# sourceMappingURL=app.80eab410.js.map