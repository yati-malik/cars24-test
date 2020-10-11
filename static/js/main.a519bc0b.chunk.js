(this.webpackJsonpcars24=this.webpackJsonpcars24||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1),l=a.n(c),i=(a(30),a(31),a(32),a(8)),s=a(4);var o=a(3);var u=Object(o.b)((function(e,t){return{filters:e.productReducer.filters}}),{setFilters:function(e){return{type:"SET_FILTERS",filters:e}}})((function(e){var t=Object(n.useState)(e.filters.startPrice),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(e.filters.endPrice),u=Object(i.a)(o,2),m=u[0],d=u[1];Object(n.useEffect)((function(){l(e.filters.startPrice),d(e.filters.endPrice)}),[e.filters.startPrice,e.filters.endPrice]);var f=function(e,t){e.persist();var a=e.target.value;if(""!=a&&!/[0-9]/g.test(a))return!1;switch(t){case"start":l(a);break;case"end":d(a)}};return r.a.createElement("div",{className:"sidebar"},r.a.createElement(s.a,{autoClose:3e3}),r.a.createElement("h2",null,"Search Criteria"),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"bold"},"Price range")),r.a.createElement("div",null,r.a.createElement("label",null,"Start Price"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return f(e,"start")}})),r.a.createElement("div",null,r.a.createElement("label",null,"End Price"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:m,onChange:function(e){return f(e,"end")}})),r.a.createElement("div",{className:"apply"},r.a.createElement("input",{type:"button",value:"Apply",onClick:function(){if(!(c<m))return s.b.warn("Start price can not be less than end price !",{position:s.b.POSITION.TOP_LEFT}),!1;var t={startPrice:c,endPrice:m};e.setFilters(t)}}))))}));var m=Object(o.b)((function(e,t){return{name:e.productReducer.name}}),{setSearch:function(e){return{type:"SET_SEARCH",name:e}}})((function(e){var t=Object(n.useState)(e.name),a=Object(i.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){l(e.name)}),[e.name]);return r.a.createElement("div",{className:"search-bar"},r.a.createElement(s.a,{autoClose:3e3}),r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{type:"text",value:c,placeholder:"Name",className:"search-box",onChange:function(e){l(e.target.value)}}),r.a.createElement("input",{type:"button",className:"search",value:"Search",onClick:function(){""==c?s.b.warn("Search field value is empty !",{position:s.b.POSITION.TOP_RIGHT}):e.setSearch(c)}})))})),d=a(16),f=a(19),p=a(20),v=a(24),E=a(23),h=a(15),b=a.n(h),O=a(21),g=function(){var e=Object(O.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yati-malik.github.io/cars24-test/products.json");case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r="Page"+t,e.abrupt("return",n[r]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var P=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).getProducts=function(e){g(e).then((function(e){if(void 0!=e){var t=n.state.products,a=[].concat(Object(d.a)(t),Object(d.a)(e.Products));n.setState({products:a})}}))},n.scrollHandler=function(e){var t=n.loadingRef,a=document.body,r="scrollTop",c="scrollHeight";(t[r]||a[r])/((t[c]||a[c])-t.clientHeight)*100>73&&(n.currentPage+=1,n.getProducts(n.currentPage))},n.handleReset=function(){n.props.resetFilters()},n.handleProductSearch=function(e){n.setState({searchName:e})},n.state={products:[]},n.currentPage=1,n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getProducts(this.currentPage),this.loadingRef.addEventListener("scroll",(function(t){return e.scrollHandler(t)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"tbody-container"},r.a.createElement("div",{className:"product thead-container"},r.a.createElement("div",{className:"col-item"},"Name"),r.a.createElement("div",{className:"col-item"},"Category"),r.a.createElement("div",{className:"col-item"},"Amount"),r.a.createElement("div",{className:"col-item"},"Payment")),r.a.createElement("div",{className:"productDiv",ref:function(t){return e.loadingRef=t}},r.a.createElement("div",{ref:function(t){return e.targetRef=t}},this.state.products.filter((function(t){var a=e.props.filters.startPrice,n=e.props.filters.endPrice;return(""==a&&""==n||!(a>t.Amount||n<t.Amount))&&t.Name.toUpperCase().includes(e.props.name.toUpperCase())})).map((function(e){return r.a.createElement("div",{className:"product",key:e.Id},r.a.createElement("div",{className:"col-item"},e.Name),r.a.createElement("div",{className:"col-item"},e.Category),r.a.createElement("div",{className:"col-item"},e.Amount),r.a.createElement("div",{className:"col-item"},e.Payment))}))))),r.a.createElement("div",{className:"reset",onClick:this.handleReset},r.a.createElement("span",null,"Reset")))}}]),a}(r.a.Component),j=Object(o.b)((function(e,t){return e.productReducer}),{resetFilters:function(){return{type:"RESET_FILTERS"}}})(P);var N=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(u,null),r.a.createElement(m,null),r.a.createElement(j,null))},S=a(5),y=a(6),R={name:"",filters:{startPrice:"",endPrice:""}};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH":return Object(y.a)(Object(y.a)({},e),{},{name:t.name});case"SET_FILTERS":return Object(y.a)(Object(y.a)({},e),{},{filters:t.filters});case"RESET_FILTERS":return Object(y.a)(Object(y.a)({},e),R);default:return e}},C=Object(S.combineReducers)({productReducer:T}),w=a(22),k=Object(S.createStore)(C,Object(w.devToolsEnhancer)());var I=function(){return r.a.createElement(o.a,{store:k},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a519bc0b.chunk.js.map