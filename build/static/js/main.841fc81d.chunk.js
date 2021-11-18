(this["webpackJsonpfresh-mart"]=this["webpackJsonpfresh-mart"]||[]).push([[0],{51:function(e,t,c){},53:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},81:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),j=c(41),s=c.n(j),a=(c(51),c(9)),i=(c(52),c(53),c(42)),d=c.n(i),o=c(85),h=c(90),b=c(86),l=c(89),O=c(13),x=c(1),u=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(o.a,{className:"header mt-4",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Hat-Bazar"})}),Object(x.jsx)("div",{children:Object(x.jsxs)(l.a,{className:"justify-content-end",activeKey:"/home",children:[Object(x.jsx)(l.a.Item,{children:Object(x.jsx)(l.a.Link,{children:Object(x.jsx)(O.b,{to:"/home",children:"Home"})})}),Object(x.jsx)(l.a.Item,{children:Object(x.jsx)(l.a.Link,{children:Object(x.jsx)(O.b,{to:"/addProduct",children:"Add Product"})})}),Object(x.jsx)(l.a.Item,{children:Object(x.jsx)(l.a.Link,{children:Object(x.jsx)(O.b,{to:"/manageProduct",children:"Manage Product"})})})]})})]})})},p=function(){var e=Object(n.useState)(),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(u,{}),Object(x.jsxs)(o.a,{className:"mt-5",children:[Object(x.jsx)("h1",{children:"Add Product"}),Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(h.a.Group,{controlId:"productName",children:[Object(x.jsx)(h.a.Label,{children:"Product Name"}),Object(x.jsx)(h.a.Control,{type:"text",placeholder:"Enter name"})]}),Object(x.jsxs)(h.a.Group,{controlId:"productPrice",children:[Object(x.jsx)(h.a.Label,{children:"Product Price"}),Object(x.jsx)(h.a.Control,{type:"text",placeholder:"Enter price"})]}),Object(x.jsx)(h.a,{children:Object(x.jsx)(h.a.Group,{controlId:"productPhoto",children:Object(x.jsx)(h.a.File,{onChange:function(e){var t=new FormData;t.set("key","ec585676253f01bc8213ab2e0e8976e9"),t.append("image",e.target.files[0]),d.a.post("https://api.imgbb.com/1/upload",t).then((function(e){r(e.data.data.display_url),alert("Image uploaded")})).catch((function(e){console.log(e)}))},id:"exampleFormControlFile1",label:"Add Photo ( after adding photo wait until the pop-up message shown )"})})}),Object(x.jsx)(b.a,{onClick:function(){var e={name:document.getElementById("productName").value,price:document.getElementById("productPrice").value,imgURL:c};fetch("https://protected-caverns-71960.herokuapp.com/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},variant:"primary",children:"Submit"})]})]})]})},m=c(87),f=c(8),v=(c(77),function(){var e=Object(n.useContext)(G),t=Object(a.a)(e,2),c=t[0];t[1];return Object(x.jsx)("div",{children:Object(x.jsxs)(o.a,{className:"header mt-4",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Hat-Bazar"})}),Object(x.jsx)("div",{children:Object(x.jsxs)(l.a,{className:"justify-content-end",activeKey:"/home",children:[Object(x.jsx)(l.a.Item,{children:Object(x.jsx)(l.a.Link,{children:Object(x.jsx)(O.b,{to:"/home",children:"Home"})})}),Object(x.jsx)(l.a.Item,{children:Object(x.jsx)(l.a.Link,{children:Object(x.jsx)(O.b,{to:"/myOrders",children:"Order"})})}),Object(x.jsx)(l.a.Item,{children:Object(x.jsx)(l.a.Link,{children:Object(x.jsx)(O.b,{to:"/admin",children:"Admin"})})}),Object(x.jsx)(l.a.Item,{children:c.name||Object(x.jsx)(l.a.Link,{children:Object(x.jsx)(O.b,{to:"/login",children:"LogIn"})})})]})})]})})}),g=function(){var e=Object(n.useContext)(z),t=Object(a.a)(e,2),c=t[0],r=(t[1],Object(n.useContext)(G)),j=Object(a.a)(r,2),s=j[0],i=(j[1],Object(f.g)());return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsxs)(o.a,{className:"mt-5",children:[Object(x.jsx)("h1",{children:"Checkout"}),Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Description"}),Object(x.jsx)("th",{children:"Quantity"}),Object(x.jsx)("th",{children:"Price"})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:c.name}),Object(x.jsx)("td",{children:"1"}),Object(x.jsx)("td",{children:c.price})]}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{colSpan:"3",children:["Total Price : ",c.price]})})]})]}),Object(x.jsx)(b.a,{onClick:function(){i.push("/myOrders");var e=s.email,t=c.name,n=c.price,r=(new Date).toLocaleTimeString(),j={name:t,price:n,email:e,date:(new Date).toLocaleDateString(),time:r};fetch("https://protected-caverns-71960.herokuapp.com/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)})},variant:"success",children:"Checkout"})]})]})},y=c(88),P=(c(78),c(28)),C=c(29),N=function(e){var t=e.product,c=t.name,n=t.price,r=t.imgURL,j=e.handleProduct;return Object(x.jsxs)("div",{className:"product",children:[Object(x.jsx)("img",{style:{width:"155px",height:"155px"},src:r,alt:""}),Object(x.jsx)("h3",{children:c}),Object(x.jsxs)("h3",{children:[n," ",Object(x.jsx)(P.a,{icon:C.a})]}),Object(x.jsxs)(b.a,{onClick:function(){return j(e.product)},variant:"success",children:["Buy Now ",Object(x.jsx)(P.a,{icon:C.b})]})]})},k=(c(81),function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){fetch("https://protected-caverns-71960.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var j=Object(f.g)(),s=Object(n.useContext)(z),i=Object(a.a)(s,2),d=(i[0],i[1]),h=function(e){d(e),j.push("/checkOut")};return Object(x.jsxs)("div",{children:[0===c.length&&Object(x.jsx)(y.a,{className:"spinner",animation:"border",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(x.jsx)(v,{}),Object(x.jsx)(o.a,{className:"mt-5 homeContainer",children:c.map((function(e){return Object(x.jsx)(N,{product:e,handleProduct:h})}))})]})}),I=function(){var e=Object(n.useContext)(G),t=Object(a.a)(e,2),c=t[0],r=(t[1],Object(n.useState)([])),j=Object(a.a)(r,2),s=j[0],i=j[1];Object(n.useEffect)((function(){fetch("https://protected-caverns-71960.herokuapp.com/myOrder?email="+c.email).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);var d=0;return function(){for(var e=0;e<s.length;e++){var t=s[e].price;d+=parseInt(t)}}(),Object(x.jsxs)("div",{children:[0===s.length&&Object(x.jsx)(y.a,{className:"spinner",animation:"border",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(x.jsx)(v,{}),Object(x.jsxs)(o.a,{className:"mt-5",children:[Object(x.jsx)("h1",{children:"Your Orders"}),Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Description"}),Object(x.jsx)("th",{children:"Quantity"}),Object(x.jsx)("th",{children:"Date ( Month/Day/Year )"}),Object(x.jsx)("th",{children:"Time"}),Object(x.jsx)("th",{children:"Price"})]})}),s.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:"1"}),Object(x.jsx)("td",{children:e.date}),Object(x.jsx)("td",{children:e.time}),Object(x.jsx)("td",{children:e.price})]})})})),Object(x.jsx)("tr",{children:Object(x.jsx)("td",{colSpan:"5",children:Object(x.jsxs)("h3",{children:["Total Price : ",d]})})})]})]})]})},L=c(19),S=(c(82),{apiKey:"AIzaSyBaWxAgy3qaAdIg9IYBwt4FFUSb7CI9DQw",authDomain:"bs-fresh-mart.firebaseapp.com",projectId:"bs-fresh-mart",storageBucket:"bs-fresh-mart.appspot.com",messagingSenderId:"1060864686853",appId:"1:1060864686853:web:ecd6116877bef9cb2e956c"}),D=function(){var e=Object(n.useContext)(G),t=Object(a.a)(e,2),c=(t[0],t[1]),r=Object(f.g)(),j=(Object(f.h)().state||{from:{pathname:"/"}}).from;0===L.a.apps.length&&L.a.initializeApp(S);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsxs)(o.a,{className:"mt-5 App",children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsx)(b.a,{variant:"success",onClick:function(){var e=new L.a.auth.GoogleAuthProvider;L.a.auth().signInWithPopup(e).then((function(e){var t=e.user,n=t.displayName,s=t.email;c({name:n,email:s}),r.replace(j)})).catch((function(e){var t=e.message;console.log(t)}))},children:"Continue With Google"})]})]})},w=c(30),A=c(45),E=function(e){var t=e.children,c=Object(A.a)(e,["children"]),r=Object(n.useContext)(G),j=Object(a.a)(r,2),s=j[0];j[1];return Object(x.jsx)(f.b,Object(w.a)(Object(w.a)({},c),{},{render:function(e){var c=e.location;return s.email?t:Object(x.jsx)(f.a,{to:{pathname:"/login",state:{from:c}}})}}))},F=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(u,{}),Object(x.jsx)(o.a,{className:"mt-5 App",children:Object(x.jsx)("h1",{children:"Welcome to Admin Panel"})})]})},T=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://protected-caverns-71960.herokuapp.com/manageProduct").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(x.jsxs)("div",{children:[0===c.length&&Object(x.jsx)(y.a,{className:"spinner",animation:"border",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(x.jsx)(u,{}),Object(x.jsxs)(o.a,{className:"mt-5",children:[Object(x.jsx)("h1",{children:"Manage Products"}),Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Description"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{})]})}),c.map((function(e){return Object(x.jsx)("tbody",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:e.price}),Object(x.jsx)("td",{children:Object(x.jsx)(b.a,{onClick:function(){return t=e._id,void fetch("https://protected-caverns-71960.herokuapp.com/delete/".concat(t),{method:"DELETE"});var t},variant:"danger",children:"Delete"})})]})})}))]})]})]})},B=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(o.a,{className:"App mt-5",children:[Object(x.jsx)("h1",{children:"404 Error !!!!"}),Object(x.jsx)("h1",{children:"Sorry Page Not Found !!!!"})]})})},G=Object(n.createContext)(),z=Object(n.createContext)();var H=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],r=t[1],j=Object(n.useState)({}),s=Object(a.a)(j,2),i=s[0],d=s[1];return Object(x.jsx)(G.Provider,{value:[c,r],children:Object(x.jsx)(z.Provider,{value:[i,d],children:Object(x.jsx)(O.a,{children:Object(x.jsxs)(f.d,{children:[Object(x.jsx)(f.b,{path:"/home",children:Object(x.jsx)(k,{})}),Object(x.jsx)(f.b,{path:"/addProduct",children:Object(x.jsx)(p,{})}),Object(x.jsx)(f.b,{path:"/manageProduct",children:Object(x.jsx)(T,{})}),Object(x.jsx)(E,{path:"/admin",children:Object(x.jsx)(F,{})}),Object(x.jsx)(E,{path:"/checkOut",children:Object(x.jsx)(g,{})}),Object(x.jsx)(E,{path:"/myOrders",children:Object(x.jsx)(I,{})}),Object(x.jsx)(f.b,{path:"/login",children:Object(x.jsx)(D,{})}),Object(x.jsx)(f.b,{exact:!0,path:"/",children:Object(x.jsx)(k,{})}),Object(x.jsx)(f.b,{path:"*",children:Object(x.jsx)(B,{})})]})})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,j=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),j(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),J()}},[[84,1,2]]]);
//# sourceMappingURL=main.841fc81d.chunk.js.map