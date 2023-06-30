"use strict";(self.webpackChunkbooks_reading_tracker=self.webpackChunkbooks_reading_tracker||[]).push([[950],{2950:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var i,a,r,l=e(168),o=e(225),s=o.Z.div(i||(i=(0,l.Z)([""]))),c=e(1413),d=e(3433),u=e(9439),h=o.Z.form(a||(a=(0,l.Z)([""]))),f=o.Z.div(r||(r=(0,l.Z)([""]))),Z=e(9836),g=e(3382),x=e(3994),j=e(9281),b=e(6890),p=e(5855),m=e(5527),k=e(184),_=function(n){var t=n.trainingList,e=n.removeFromTrainingListHandler;return(0,k.jsx)(f,{children:(0,k.jsx)(j.Z,{component:m.Z,children:(0,k.jsxs)(Z.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,k.jsx)(b.Z,{children:(0,k.jsxs)(p.Z,{children:[(0,k.jsx)(x.Z,{align:"left",children:"Book title"}),(0,k.jsx)(x.Z,{align:"left",children:"Author"}),(0,k.jsx)(x.Z,{align:"left",children:"Year"}),(0,k.jsx)(x.Z,{align:"left",children:"Pages"})]})}),(0,k.jsx)(g.Z,{children:t.map((function(n){return(0,k.jsxs)(p.Z,{sx:{"&:last-of-type td, &:last-of-type th":{border:0}},children:[(0,k.jsx)(x.Z,{align:"left",children:n.title}),(0,k.jsx)(x.Z,{align:"left",children:n.author}),(0,k.jsx)(x.Z,{align:"left",children:n.publishYear}),(0,k.jsx)(x.Z,{align:"left",children:n.pagesTotal}),(0,k.jsx)(x.Z,{align:"left",children:(0,k.jsx)("button",{type:"button",onClick:function(){console.log(n),e(n._id)},children:"D"})})]},n._id)}))})]})})})},v=e(7892),Y=e.n(v),C=e(2791),D=e(1754),y=e(1652),T=e(4750),M=e(5770),S=e(5853),F=e(3153),L=e(4452),w=e(4653),A=[],H={},P=function(){var n=(0,F.C)(L.M7),t=(0,F.T)();(0,C.useEffect)((function(){n&&(t((0,w.u)()),console.log("something"))}),[n]);var e=function(){var n=new Date;return"".concat(n.getFullYear(),"-").concat("".concat(n.getUTCMonth()+1).padStart(2,"0"),"-").concat(n.getDate())},i=(0,C.useState)(A),a=(0,u.Z)(i,2),r=a[0],l=a[1],o=(0,C.useState)(e()),s=(0,u.Z)(o,2),f=s[0],Z=s[1],g=(0,C.useState)(""),x=(0,u.Z)(g,2),j=x[0],b=x[1],p=(0,C.useState)(H),m=(0,u.Z)(p,2),v=m[0],P=m[1],B=(0,F.C)(L.r9),E=(0,F.C)(L.k3),N=[].concat((0,d.Z)(B.map((function(n){return(0,c.Z)((0,c.Z)({},n),{},{label:n.title})}))),(0,d.Z)(E.map((function(n){return(0,c.Z)((0,c.Z)({},n),{},{label:n.title})}))));return(0,k.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e={startDate:f,endDate:j,books:r.map((function(n){return n._id}))};t((0,w.f)(e)),console.log(e)},children:[(0,k.jsx)("h2",{children:"My training"}),(0,k.jsxs)("div",{className:"date-input-container",children:[(0,k.jsx)(y._,{dateAdapter:T.y,children:(0,k.jsx)(D.M,{label:"Start",defaultValue:Y()(e()),onChange:function(n){n&&Z(n.format("YYYY-MM-DD"))},disabled:!0})}),(0,k.jsx)(y._,{dateAdapter:T.y,children:(0,k.jsx)(D.M,{label:"Finish",onChange:function(n){n&&b(n.format("YYYY-MM-DD"))},disablePast:!0,minDate:Y()().add(1,"day")})})]}),(0,k.jsxs)("div",{className:"books-input-container",children:[(0,k.jsx)(M.Z,{onChange:function(n,t){t&&(console.log(t),P(t))},disablePortal:!0,isOptionEqualToValue:function(n,t){return n._id===t._id},id:"combo-box-demo",options:N,sx:{width:300},renderInput:function(n){return(0,k.jsx)(S.Z,(0,c.Z)((0,c.Z)({},n),{},{label:"Choose books from the library "}))}}),(0,k.jsx)("button",{type:"button",onClick:function(){v&&function(n){if(console.log("addToTrainingBookListHandler"),n&&!r.find((function(t){return t._id===n._id}))){var t=n.title,e=n.author,i=n.publishYear,a=n.pagesTotal,o=n._id,s=n.pagesFinished;l([].concat((0,d.Z)(r),[{title:t,author:e,publishYear:i,pagesTotal:a,_id:o,pagesFinished:s}]))}}(v)},children:"Add"}),(0,k.jsx)("button",{type:"submit",children:"Start training"})]}),(0,k.jsx)(_,{trainingList:r,removeFromTrainingListHandler:function(n){l(r.filter((function(t){return t._id!==n})))}})]})},B=function(){return(0,k.jsx)(s,{children:(0,k.jsx)(P,{})})}}}]);
//# sourceMappingURL=950.0815a92d.chunk.js.map