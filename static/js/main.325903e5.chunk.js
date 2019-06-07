(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),l=(a(86),a(87),a(134)),o=a(136),u=a(39);function s(){return r.a.createElement(l.a,{position:"static"},r.a.createElement(o.a,{className:"justify-content-center"},r.a.createElement(u.a,{variant:"h6"},"Treebo Hotels")))}var m=a(27),d=a(28),p=a(42),E=a.n(p),f=a(61),y=a(62),h=a(63),b=a(74),v=a(64),w=a(75),O=a(38),j=a.n(O),k=a(144),g=a(137),x=a(145),_=a(146),S=a(138),D=a(139),M=a(140),L=a(141),P=a(142),T=a(72),F=a.n(T),G=a(36),I=function(e){function t(){return Object(y.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(E.a.mark(function e(){var t,a,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("http://www.mocky.io/v2/5a7f23442e00005000b56873");case 2:return t=e.sent,this.props.getHotels(t.data.data),e.next=6,j.a.get("http://www.mocky.io/v2/5a7f24f02e00005200b56875");case 6:return a=e.sent,this.props.embedPrices(a.data.data),e.next=10,j.a.get("http://www.mocky.io/v2/5a7f265b2e00005d00b56877");case 10:n=e.sent,this.props.getDetails(n.data.data);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMinimumFromObj",value:function(e){var t=Object.values(e).filter(function(e){return e});return Math.min.apply(Math,Object(d.a)(t))}},{key:"render",value:function(){var e=this;return r.a.createElement(k.a,{mt:5},r.a.createElement(g.a,null,this.props.hotelReducer.hotels.map(function(t){return r.a.createElement(x.a,{key:t.id},r.a.createElement(_.a,{expandIcon:r.a.createElement(F.a,null)},e._buildSummary(t)),r.a.createElement(S.a,null),r.a.createElement(D.a,null,e._buildDetails(t)))})))}},{key:"_buildDetails",value:function(e){return r.a.createElement(k.a,{width:"60%",display:"flex",flexDirection:"row"},this._buildPriceList(e),this._buildPolicyList(e),this._buildEssentialsList(e))}},{key:"_buildEssentialsList",value:function(e){return r.a.createElement(k.a,{flexGrow:"1"},r.a.createElement(M.a,{dense:!0},r.a.createElement(u.a,{variant:"caption"},"Essentials"),e.details?e.details.essentials.map(function(e){return r.a.createElement("div",{key:Math.random()},r.a.createElement(L.a,null,r.a.createElement(P.a,{primary:e})))}):r.a.createElement(u.a,null)))}},{key:"_buildPolicyList",value:function(e){return r.a.createElement(k.a,{flexGrow:"1"},r.a.createElement(M.a,{dense:!0},r.a.createElement(u.a,{variant:"caption"},"Policies"),e.details?e.details.policies.map(function(e){return r.a.createElement("div",{key:Math.random()},r.a.createElement(L.a,null,r.a.createElement(P.a,{primary:e})))}):r.a.createElement(u.a,null)))}},{key:"_buildPriceList",value:function(e){return r.a.createElement(k.a,{flexGrow:"1"},r.a.createElement(M.a,{dense:!0},r.a.createElement(u.a,{variant:"caption"},"Room Prices"),e.price?Object.keys(e.price).map(function(t){return r.a.createElement("div",{key:Math.random()},r.a.createElement(L.a,{button:!0},r.a.createElement(P.a,{primary:t.charAt(0).toUpperCase()+t.slice(1),secondary:e.price[t]?"\u20b9"+e.price[t]:"Out of Stock"})))}):r.a.createElement(u.a,null)))}},{key:"_buildSummary",value:function(e){return r.a.createElement(k.a,{display:"flex",flexDirection:"column"},r.a.createElement(u.a,{variant:"h6"},e.name),r.a.createElement(u.a,{style:{fontSize:14},className:"grey-text"},e.locality?e.locality+", ":"",e.city?e.city:""),r.a.createElement(k.a,{mt:2},e.price?this.getMinimumFromObj(e.price)!==1/0?r.a.createElement(u.a,{style:{fontSize:14},variant:"subtitle2"},"Starting from \u20b9",this.getMinimumFromObj(e.price)):r.a.createElement(u.a,{className:"danger-text",style:{fontSize:14},variant:"subtitle2"},"Out of Stock"):null))}}]),t}(n.Component),B=Object(G.b)(function(e){return Object(m.a)({},e)},function(e){return{getHotels:function(t){return e(function(e){return{type:"GET_HOTELS",payload:e}}(t))},embedPrices:function(t){return e(function(e){return{type:"EMBED_PRICES",payload:e}}(t))},getDetails:function(t){return e(function(e){return{type:"GET_DETAILS",payload:e}}(t))}}})(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(24),R={hotels:[]},C=Object(H.b)({hotelReducer:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_HOTELS":return{hotels:[].concat(Object(d.a)(a.hotels),Object(d.a)(n.payload))};case"EMBED_PRICES":return{hotels:(e=a.hotels,t=n.payload,e.map(function(e){return Object(m.a)({},t.find(function(t){return t.id===e.id&&t}),e)}))};case"GET_DETAILS":return{hotels:a.hotels.map(function(e){return Object(m.a)({},e,{details:Object(m.a)({},n.payload)})})};default:return a}}});var z=a(73),A=a(147),N=Object(z.a)({palette:{primary:{main:"#0EB550",contrastText:"#FFFFFF"}}});c.a.render(r.a.createElement(A.a,{theme:N},r.a.createElement(G.a,{store:Object(H.c)(C)},r.a.createElement(function(){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(B,null))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(117)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.325903e5.chunk.js.map