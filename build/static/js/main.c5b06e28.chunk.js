(this.webpackJsonppolairoid=this.webpackJsonppolairoid||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(12),r=n.n(o),i=n(14),s=(n(19),n(13)),d=n.n(s),p=n(1);var j=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"PolAIroid photo generator"}),n&&Object(p.jsx)("img",{src:n,alt:"face"}),Object(p.jsx)("button",{type:"button",onClick:function(){d.a.get("https:api.generated.photos/api/v1/faces?api_key=MBNqkaX00ifCjVDt3EtQSQ&order_by=random").then((function(e){var t=e.data.faces[3].urls[4][512];t&&c(t)})).catch((function(e){console.log(e.message)}))},children:"Generate New Image"})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c5b06e28.chunk.js.map