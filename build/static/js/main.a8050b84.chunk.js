(this.webpackJsonplikedislike=this.webpackJsonplikedislike||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),l=a.n(i);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(18),c=a(11),s=a(2),m=a(3),u=a(6),d=a(5),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=!0===this.props.property?"fa fa-heart":"fa fa-heart-o";return r.a.createElement("i",{style:{cursor:"pointer"},onClick:this.props.onClick,className:e,"aria-hidden":"true"})}}]),a}(n.Component),p=function(e){var t=e.movies,a=e.dolike,n=e.dodelete,i=e.Sort;return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return i("id")},style:{cursor:"pointer"},scope:"col"},"Id"),r.a.createElement("th",{onClick:function(){return i("name")},style:{cursor:"pointer"},scope:"col"},"Name"),r.a.createElement("th",{onClick:function(){return i("rating")},style:{cursor:"pointer"},scope:"col"},"Rating"),r.a.createElement("th",{style:{cursor:"pointer"},scope:"col"},"Like"),r.a.createElement("th",{style:{cursor:"pointer"},scope:"col"},"Delete"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.rating),r.a.createElement("td",null,r.a.createElement(h,{property:e.like,onClick:function(){return a(e)}})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(e.id)},className:"btn btn-danger btn-sm"},"Delete")))})))))},g=[{id:1,name:"Iron Man 1",rating:"9.5",like:!1},{id:2,name:"Iron Man 2",rating:"8.5",like:!1},{id:3,name:"Iron Man 3",rating:"9.0",like:!1},{id:4,name:"Captain America",rating:"7.5",like:!1},{id:5,name:"Thor",rating:"8.0",like:!1},{id:6,name:"Avengers",rating:"9.5",like:!1},{id:7,name:"Avengers 2",rating:"9.0",like:!1},{id:8,name:"Avengers 3",rating:"8.0",like:!1},{id:9,name:"Captain Marvel",rating:"9.5",like:!1},{id:10,name:"Black Widow",rating:"8.5",like:!1}];function v(){return g}var k=a(4),f=a.n(k),E=a(17),b=function(e){var t=e.length,a=e.size,n=e.currentPage,i=Math.ceil(t/a+1);if(1===i)return null;var l=f.a.range(1,i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},l.map((function(t){return r.a.createElement("li",{key:t,style:{cursor:"pointer"},className:t===n?"page-item active":"page-item"},r.a.createElement(E.a,{to:"/",className:"page-link",onClick:function(){return e.handlePageChange(t)}},t))}))))))},y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:v(),currentPage:1,prev:0,next:3,size:3,sortColumn:{path:"id",order:"asc"}},e.sort=function(t){var a=Object(c.a)({},e.state.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.setState({sortColumn:a})},e.delete=function(t){var a=e.state.movies.filter((function(e){return e.id!==t}));e.setState({movies:a})},e.handlelike=function(t){var a=Object(o.a)(e.state.movies),n=a.indexOf(t);a[n]=Object(c.a)({},a[n]),a[n].like=!a[n].like,e.setState({movies:a})},e.handlePageChange=function(t){e.setState({currentPage:t,prev:t*e.state.size-3,next:t*e.state.size})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.size,a=e.sortColumn,n=e.currentPage,i=e.movies,l=e.prev,o=e.next,c=f.a.orderBy(i,[a.path],[a.order]).slice(l,o);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{movies:c,dolike:this.handlelike,dodelete:this.delete,Sort:this.sort}),r.a.createElement(b,{length:i.length,size:t,currentPage:n,handlePageChange:this.handlePageChange}))}}]),a}(n.Component);a(30),a(31);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"}," Movies List ")," ")," ",r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a8050b84.chunk.js.map