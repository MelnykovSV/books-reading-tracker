"use strict";(self.webpackChunkbooks_reading_tracker=self.webpackChunkbooks_reading_tracker||[]).push([[643],{4643:function(n,e,i){i.r(e),i.d(e,{default:function(){return D}});var t,o,a,s=i(9439),r=i(2791),l=i(168),d=i(225),c=d.Z.div(t||(t=(0,l.Z)(["\n  background-color: ",";\n  padding-bottom: 100px;\n"])),(function(n){return n.theme.colors.text.secondary})),m=i(1413),p=i(5861),b=i(4687),h=i.n(b),g=d.Z.div(o||(o=(0,l.Z)(["\n  form {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    padding-top: 12px;\n    column-gap: 32px;\n\n    @media screen and (min-width: 1280px) {\n      display: flex;\n      align-items: start;\n      gap: 16px;\n      height: 147px;\n      padding-top: 40px;\n    }\n\n    .book-form__close-button {\n      cursor: pointer;\n      border: none;\n      background-color: ",";\n      height: 36px;\n      margin-bottom: 20px;\n      width: fit-content;\n      svg {\n        display: block;\n      }\n\n      @media screen and (min-width: 768px) {\n        display: none;\n      }\n    }\n    label {\n      grid-column: span 4;\n\n      @media screen and (max-width: 1279px) {\n        margin-bottom: 20px;\n        :last-of-type {\n          margin-bottom: 40px;\n        }\n      }\n\n      @media screen and (min-width: 768px) {\n        grid-column: span 1;\n        :first-of-type {\n          grid-column: span 4;\n        }\n        :nth-of-type(2) {\n          grid-column: span 2;\n        }\n      }\n      .book-form__label-text {\n        display: block;\n        margin-bottom: 8px;\n        color: #898f9f;\n      }\n\n      input {\n        display: block;\n        width: 100%;\n\n        border: 1px solid #a6abb9;\n        background-color: #f6f7fb;\n        padding: 12px;\n      }\n      .book-form__error-message-container {\n        color: ",";\n      }\n    }\n\n    @media screen and (min-width: 1280px) {\n      .book-form__book-title-label {\n        width: 346px;\n      }\n      .book-form__book-author-label {\n        width: 250px;\n      }\n      .book-form__book-publishYear-label,\n      .book-form__book-pagesTotal-label {\n        width: 134px;\n      }\n    }\n\n    .add-book-button {\n      grid-column: span 4;\n      display: block;\n      color: #000000;\n      width: 171px;\n      padding: 12px;\n      margin: 0 auto;\n      border-radius: none;\n      @media screen and (min-width: 1280px) {\n        margin: 0;\n        width: 181px;\n        margin-left: 32px;\n        margin-top: 25px;\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.text.secondary}),(function(n){return n.theme.colors.bg.accentDark})),u=i(5705),x=i(6727),_=["title","titleId"];function f(){return f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},f.apply(this,arguments)}function k(n,e){if(null==n)return{};var i,t,o=function(n,e){if(null==n)return{};var i,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||(o[i]=n[i]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}function j(n,e){var i=n.title,t=n.titleId,o=k(n,_);return r.createElement("svg",f({width:24,height:12,viewBox:"0 0 24 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},o),i?r.createElement("title",{id:t},i):null,a||(a=r.createElement("path",{d:"M0.274948 6.68502C0.275228 6.68531 0.275463 6.68565 0.275791 6.68594L5.17442 11.7182C5.54141 12.0952 6.13498 12.0938 6.50028 11.7149C6.86553 11.3361 6.86412 10.7234 6.49714 10.3463L3.2082 6.96774L23.0625 6.96774C23.5803 6.96774 24 6.53448 24 6C24 5.46552 23.5803 5.03226 23.0625 5.03226L3.20825 5.03226L6.49709 1.65368C6.86408 1.27664 6.86548 0.663918 6.50023 0.285095C6.13494 -0.0938247 5.54131 -0.0951303 5.17437 0.281805L0.275745 5.31407C0.275463 5.31436 0.275228 5.31469 0.2749 5.31498C-0.0922724 5.69328 -0.0910993 6.30799 0.274948 6.68502Z",fill:"#FF6B08"})))}var w,v,N,y=r.forwardRef(j),C=(i.p,i(3153)),O=i(2783),Z=i(184),T=function(){var n=(0,C.T)(),e=x.Ry().shape({title:x.Z_().min(3,"Minimum input length 3 symbols").required("This field is required").trim(),author:x.Z_().min(3,"Minimum input length 3 symbols").matches(/^[a-zA-Z0-9 ]+$/,"Invalid format").required("This field is required").trim(),publishYear:x.Z_().matches(/^[0-9]+$/,"Invalid format").required("This field is required").trim(),pagesTotal:x.Z_().matches(/^[0-9]+$/,"Invalid format").required("This field is required").trim()}),i=function(){var i=(0,p.Z)(h().mark((function i(t,o){var a,s;return h().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=o.resetForm,i.next=3,e.isValid(t);case 3:i.sent&&(s=(0,m.Z)({},t),n((0,O.TA)(s))),a();case 6:case"end":return i.stop()}}),i)})));return function(n,e){return i.apply(this,arguments)}}();return(0,Z.jsx)(g,{className:"book-form-container",children:(0,Z.jsx)(u.J9,{initialValues:{title:"",author:"",publishYear:"",pagesTotal:""},onSubmit:i,validationSchema:e,className:"book-form",children:(0,Z.jsxs)(u.l0,{children:[(0,Z.jsx)("button",{className:"book-form__close-button",children:(0,Z.jsx)(y,{})}),(0,Z.jsxs)("label",{htmlFor:"book-form__book-title-input",className:"book-form__book-title-label",children:[(0,Z.jsx)("span",{className:"book-form__label-text",children:"Book title"}),(0,Z.jsx)(u.gN,{name:"title",type:"text",id:"book-form__book-title-input",placeholder:"..."}),(0,Z.jsx)("span",{className:"book-form__error-message-container",children:(0,Z.jsx)(u.Bc,{name:"title"})})]}),(0,Z.jsxs)("label",{htmlFor:"book-form__book-author-input",className:"book-form__book-author-label",children:[(0,Z.jsx)("span",{className:"book-form__label-text",children:"Author"}),(0,Z.jsx)(u.gN,{name:"author",type:"text",id:"book-form__book-author-input",placeholder:"..."}),(0,Z.jsx)("span",{className:"book-form__error-message-container",children:(0,Z.jsx)(u.Bc,{name:"author"})})]}),(0,Z.jsxs)("label",{htmlFor:"book-form__book-publishYear-input",className:"book-form__book-publishYear-label",children:[(0,Z.jsx)("span",{className:"book-form__label-text",children:"Publication year"}),(0,Z.jsx)(u.gN,{name:"publishYear",type:"text",id:"book-form__book-publishYear-input",placeholder:"..."}),(0,Z.jsx)("span",{className:"book-form__error-message-container",children:(0,Z.jsx)(u.Bc,{name:"publishYear"})})]}),(0,Z.jsxs)("label",{htmlFor:"book-form__book-pagesTotal-input",className:"book-form__book-pagesTotal-label",children:[(0,Z.jsx)("span",{className:"book-form__label-text",children:"Amount of pages"}),(0,Z.jsx)(u.gN,{name:"pagesTotal",type:"text",id:"book-form__book-pagesTotal-input",placeholder:"..."}),(0,Z.jsx)("span",{className:"book-form__error-message-container",children:(0,Z.jsx)(u.Bc,{name:"pagesTotal"})})]}),(0,Z.jsx)("button",{className:"add-book-button",type:"submit",children:"Add"})]})})})},Y=i(3329),B=d.Z.div(w||(w=(0,l.Z)(["\n  margin-bottom: 20px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 32px;\n  }\n  h3 {\n    font-size: 19px;\n    font-weight: 600;\n    line-height: calc(23 / 19);\n    margin-bottom: 20px;\n\n    @media screen and (min-width: 768px) {\n      font-size: 19px;\n      font-weight: 600;\n      line-height: calc(23 / 19);\n      margin-bottom: 24px;\n    }\n  }\n  .books-list__body {\n    .books-list__header {\n      display: none;\n    }\n    .books-list__main {\n      display: flex;\n      gap: 16px;\n      flex-direction: column;\n    }\n    @media screen and (min-width: 768px) {\n      .books-list__header {\n        display: grid;\n        justify-content: space-between;\n        color: #898f9f;\n        font-weight: 500;\n\n        grid-template-columns: 50% 25% 7.1% 14%;\n        margin-bottom: 8px;\n      }\n\n      .books-list__header.read {\n        grid-template-columns: 27.7% 17.5% 5.5% 5.7% 37.5%;\n      }\n      .books-list__main {\n        gap: 8px;\n      }\n    }\n    @media screen and (min-width: 1280px) {\n      .books-list__header.read {\n        grid-template-columns: 27.7% 20.5% 6.5% 10.7% 28.5%;\n      }\n    }\n  }\n\n  .books-list__body.read {\n    .books-list__header {\n      grid-template-columns: 27.1% 20% 6.3% 10.5% 27.8%;\n      /* .header-rating {\n        display: block;\n      } */\n    }\n  }\n"]))),I=i(4452),E=d.Z.div(v||(v=(0,l.Z)(["\n  position: relative;\n  padding: 20px 50px 32px 54px;\n  background-color: white;\n  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);\n\n  ///OUTER\n\n  @media screen and (min-width: 768px) {\n    align-items: center;\n    justify-content: space-between;\n    display: grid;\n    grid-template-columns: 45% 6.5% 42.5% 2% 4%;\n    padding: 11px 20px;\n    height: 61px;\n\n    &.read {\n      grid-template-columns: 26% 2.5% 50% 2.5% 12% 1% 6%;\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    &.read {\n      grid-template-columns: 22% 6.5% 52% 2% 12.5% 1% 4%;\n    }\n  }\n\n  ///OUTER end\n\n  .single-book__title-container {\n    margin-bottom: 27px;\n    position: relative;\n    .single-book__icon {\n      fill: #a6abb9;\n    }\n\n    .single-book__icon.reading-now {\n      fill: #ff6b08;\n    }\n\n    @media screen and (min-width: 768px) {\n      display: flex;\n      gap: 18px;\n      align-items: center;\n      margin-bottom: 0;\n      .single-book__title-text {\n        max-width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n    }\n    svg {\n      position: absolute;\n      display: block;\n      top: 2px;\n      left: -34px;\n      min-width: 22px;\n\n      @media screen and (min-width: 768px) {\n        position: static;\n      }\n    }\n  }\n  .single-book__list {\n    grid-column: 3;\n    margin-bottom: 20px;\n\n    ///INNER\n    .rating-container {\n      grid-column: 7;\n      .rating {\n        width: 101px;\n        height: 20px;\n        background-color: green;\n      }\n    }\n\n    @media screen and (min-width: 768px) {\n      display: grid;\n      grid-template-columns: 60% 5% 15% 7% 13%;\n      align-items: center;\n      margin-bottom: 0;\n      .author {\n        grid-column: 1;\n      }\n      .year {\n        grid-column: 3;\n      }\n      .pages {\n        grid-column: 5;\n      }\n\n      &.read {\n        grid-template-columns: 36% 2% 15% 2% 13% 2% 32%;\n\n        .rating-container {\n          grid-column: 7;\n          .rating {\n            width: 97px;\n            height: 20px;\n            background-color: green;\n          }\n        }\n      }\n    }\n\n    @media screen and (min-width: 1280px) {\n      grid-template-columns: 60% 4% 16% 5% 15%;\n      &.read {\n        grid-template-columns: 40% 4% 11% 5% 19% 5% 18%;\n\n        .rating-container {\n          grid-column: 7;\n          .rating {\n            width: 101px;\n            height: 20px;\n            background-color: green;\n          }\n        }\n      }\n    }\n\n    ///INNER END\n    .single-book__list-item {\n      display: grid;\n      column-gap: 10px;\n      grid-template-columns: 71px 1fr;\n      dd {\n        max-width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n\n      :not(:last-child) {\n        margin-bottom: 14px;\n      }\n      @media screen and (min-width: 768px) {\n        display: block;\n        margin: 0;\n        :not(:last-child) {\n          margin-bottom: 0;\n        }\n      }\n      @media screen and (min-width: 768px) {\n        .single-book__list-term {\n          display: none;\n        }\n      }\n    }\n  }\n  .single-book__resume-button {\n    cursor: pointer;\n    display: block;\n    margin-left: 18px;\n    width: 127px;\n    padding: 11px;\n    background-color: #6d7a8d;\n    color: white;\n    border: none;\n\n    @media screen and (min-width: 768px) {\n      width: 80px;\n      margin-left: 0;\n      grid-column: 5;\n    }\n\n    @media screen and (min-width: 1280px) {\n      width: 127px;\n      margin: 0 auto;\n    }\n  }\n\n  .single-book__delete-button {\n    position: absolute;\n    top: 20px;\n    right: 7px;\n\n    cursor: pointer;\n\n    width: 38px;\n    height: 38px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: none;\n    background-color: white;\n    transition: background-color 0.3s linear;\n    border-radius: 50%;\n\n    svg {\n      display: block;\n      transition: fill 0.3s linear;\n      fill: #a6abb9;\n    }\n    &:hover,\n    &:focus {\n      background-color: #a6abb9;\n      svg {\n        fill: white;\n      }\n    }\n\n    @media screen and (min-width: 768px) {\n      position: static;\n      grid-column: 5;\n      justify-self: right;\n    }\n  }\n\n  &.read .single-book__delete-button {\n    position: absolute;\n    top: 20px;\n    right: 15px;\n\n    cursor: pointer;\n\n    width: 38px;\n    height: 38px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: none;\n    background-color: white;\n    transition: background-color 0.3s linear;\n    &:hover,\n    &:focus {\n      background-color: #a6abb9;\n      svg {\n        fill: white;\n      }\n    }\n\n    @media screen and (min-width: 768px) {\n      position: static;\n      grid-column: 7;\n      justify-self: right;\n      margin: 0;\n      margin-left: auto;\n    }\n    @media screen and (min-width: 1280px) {\n      position: static;\n      grid-column: 7;\n      justify-self: right;\n      margin: 0 auto;\n    }\n  }\n"]))),F=i(5790),H=i(1660),A=["title","titleId"];function P(){return P=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}return n},P.apply(this,arguments)}function S(n,e){if(null==n)return{};var i,t,o=function(n,e){if(null==n)return{};var i,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||(o[i]=n[i]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}function R(n,e){var i=n.title,t=n.titleId,o=S(n,A);return r.createElement("svg",P({width:14,height:18,viewBox:"0 0 14 18",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},o),i?r.createElement("title",{id:t},i):null,N||(N=r.createElement("path",{id:"delete",d:"M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z"})))}var M,z=r.forwardRef(R),V=(i.p,function(n){var e,i=n.title,t=n.author,o=n.publishYear,a=n.pagesTotal,l=n.id,d=n.status,c=n.modalOpenHandler,m=n.updateFeedbackBookId,p=(0,C.C)(I.J3),b=(0,r.useState)((null===(e=p.find((function(n){return n._id===l})))||void 0===e?void 0:e.rating)||0),h=(0,s.Z)(b,2),g=h[0],u=h[1];(0,r.useEffect)((function(){var n;u((null===(n=p.find((function(n){return n._id===l})))||void 0===n?void 0:n.rating)||0)}),[p]);var x=(0,C.T)();switch(d){case"read":return(0,Z.jsxs)(E,{className:"read",children:[(0,Z.jsxs)("div",{className:"single-book__title-container",children:[(0,Z.jsx)(F.r,{className:"single-book__icon read"}),(0,Z.jsx)("p",{className:"single-book__title-text",children:i})]}),(0,Z.jsxs)("dl",{className:"single-book__list read",children:[(0,Z.jsxs)("div",{className:"single-book__list-item author",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Author"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:t})]}),(0,Z.jsxs)("div",{className:"single-book__list-item year",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Year"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:o})]}),(0,Z.jsxs)("div",{className:"single-book__list-item pages",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Pages"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:a})]}),(0,Z.jsxs)("div",{className:"single-book__list-item rating-container",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Rating"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:(0,Z.jsx)(H.Z,{name:"size-small",value:g,size:"small",readOnly:!0})})]})]}),(0,Z.jsx)("button",{type:"button",className:"single-book__resume-button",onClick:function(){m&&c&&(m(l),c())},children:"Resume"}),(0,Z.jsx)("button",{className:"single-book__delete-button",onClick:function(){x((0,O.MC)(l))},children:(0,Z.jsx)(z,{})})]});case"reading now":return(0,Z.jsxs)(E,{children:[(0,Z.jsxs)("div",{className:"single-book__title-container",children:[(0,Z.jsx)(F.r,{className:"single-book__icon reading-now"}),(0,Z.jsx)("p",{className:"single-book__title-text",children:i})]}),(0,Z.jsxs)("dl",{className:"single-book__list reading-now",children:[(0,Z.jsxs)("div",{className:"single-book__list-item author",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Author"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:t})]}),(0,Z.jsxs)("div",{className:"single-book__list-item year",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Year"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:o})]}),(0,Z.jsxs)("div",{className:"single-book__list-item pages",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Pages"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:a})]})]}),(0,Z.jsx)("button",{className:"single-book__delete-button",onClick:function(){x((0,O.MC)(l))},children:(0,Z.jsx)(z,{})})]});case"going to read":return(0,Z.jsxs)(E,{children:[(0,Z.jsxs)("div",{className:"single-book__title-container",children:[(0,Z.jsx)(F.r,{className:"single-book__icon going-to-read"}),(0,Z.jsx)("p",{className:"single-book__title-text",children:i})]}),(0,Z.jsxs)("dl",{className:"single-book__list going-to-read",children:[(0,Z.jsxs)("div",{className:"single-book__list-item author ",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Author"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:t})]}),(0,Z.jsxs)("div",{className:"single-book__list-item year",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Year"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:o})]}),(0,Z.jsxs)("div",{className:"single-book__list-item pages",children:[(0,Z.jsx)("dt",{className:"single-book__list-term",children:"Pages"}),(0,Z.jsx)("dd",{className:"single-book__list-def",children:a})]})]}),(0,Z.jsx)("button",{className:"single-book__delete-button",onClick:function(){x((0,O.MC)(l))},children:(0,Z.jsx)(z,{})})]})}}),q=function(n){var e=n.status,i=n.updateFeedbackBookId,t=n.modalOpenHandler,o=(0,C.C)(I.r9),a=(0,C.C)(I.k3),s=(0,C.C)(I.J3);switch(e){case"going to read":return(0,Z.jsxs)(B,{children:[(0,Z.jsx)("h3",{children:"Going to read"}),(0,Z.jsxs)("div",{className:"books-list__body",children:[(0,Z.jsxs)("div",{className:"books-list__header",children:[(0,Z.jsx)("p",{children:"Book title"}),(0,Z.jsx)("p",{children:"Author"}),(0,Z.jsx)("p",{children:"Year"}),(0,Z.jsx)("p",{children:"Pages"})]}),(0,Z.jsx)("ul",{className:"books-list__main",children:o.map((function(n){var i=n.title,t=n.author,o=n.publishYear,a=n.pagesTotal,s=n._id;return(0,Z.jsx)(V,{title:i,author:t,publishYear:o,pagesTotal:a,id:s,status:e},s)}))})]})]});case"reading now":return(0,Z.jsxs)(B,{children:[(0,Z.jsx)("h3",{children:"Reading now"}),(0,Z.jsxs)("div",{className:"books-list__body",children:[(0,Z.jsxs)("div",{className:"books-list__header",children:[(0,Z.jsx)("p",{children:"Book title"}),(0,Z.jsx)("p",{children:"Author"}),(0,Z.jsx)("p",{children:"Year"}),(0,Z.jsx)("p",{children:"Pages"})]}),(0,Z.jsx)("ul",{className:"books-list__main",children:a.map((function(n){var i=n.title,t=n.author,o=n.publishYear,a=n.pagesTotal,s=n._id;return(0,Z.jsx)(V,{title:i,author:t,publishYear:o,pagesTotal:a,id:s,status:e},s)}))})]})]});case"read":return(0,Z.jsxs)(B,{children:[(0,Z.jsx)("h3",{children:"Already read"}),(0,Z.jsxs)("div",{className:"books-list__body",children:[(0,Z.jsxs)("div",{className:"books-list__header read",children:[(0,Z.jsx)("p",{children:"Book title"}),(0,Z.jsx)("p",{children:"Author"}),(0,Z.jsx)("p",{children:"Year"}),(0,Z.jsx)("p",{children:"Pages"}),(0,Z.jsx)("p",{className:"header-rating",children:"Rating"})]}),(0,Z.jsx)("ul",{className:"books-list__main",children:s.map((function(n){var o=n.title,a=n.author,s=n.publishYear,r=n.pagesTotal,l=n._id;return(0,Z.jsx)(V,{title:o,author:a,publishYear:s,pagesTotal:r,id:l,status:e,updateFeedbackBookId:i,modalOpenHandler:t},l)}))})]})]})}},L=i(1414),J=d.Z.form(M||(M=(0,l.Z)(["\n  /* svg {\n    opacity: 1 !important;\n  } */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  display: block;\n\n  background-color: #fff;\n  box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.2);\n  width: min(280px, 100%);\n  margin: 0 auto;\n  padding: 20px 20px 40px;\n\n  @media screen and (min-width: 768px) {\n    width: min(608px, 100%);\n  }\n\n  .form-label {\n    display: block;\n    color: var(--deep-blue, #242a37);\n    font-family: Montserrat;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin-bottom: 12px;\n  }\n\n  .rating {\n    margin-bottom: 20px;\n  }\n\n  .feedback-textarea {\n    margin-bottom: 28px;\n  }\n\n  textarea {\n    padding: 8px;\n    display: block;\n    resize: none;\n    width: 100%;\n    border: 1px solid #a6abb9;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    height: 170px;\n  }\n  .buttons-container {\n    display: flex;\n    gap: 16px;\n    justify-content: center;\n    @media screen and (min-width: 768px) {\n      gap: 28px;\n    }\n    .form-button {\n      cursor: pointer;\n      min-width: 97px;\n      padding: 12px;\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: normal;\n\n      @media screen and (min-width: 768px) {\n        min-width: 130px;\n      }\n    }\n    .button-back {\n      border: 1px solid var(--deep-blue, #242a37);\n    }\n    .button-save {\n      border: none;\n      color: white;\n      background: #ff6b08;\n      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);\n    }\n  }\n"]))),$=function(n){var e,i,t=n.id,o=n.modalCloseHandler,a=(0,C.T)(),s=(0,C.C)(I.J3),r=(0,u.TA)({initialValues:{rating:(null===(e=s.find((function(n){return n._id===t})))||void 0===e?void 0:e.rating)||0,feedback:(null===(i=s.find((function(n){return n._id===t})))||void 0===i?void 0:i.feedback)||""},onSubmit:function(n){a((0,O.u8)({id:t,values:n})),r.resetForm(),o()}});return(0,Z.jsxs)(J,{onSubmit:r.handleSubmit,children:[(0,Z.jsx)("label",{htmlFor:"single-book-rating",className:"form-label",children:"Choose rating of the book"}),(0,Z.jsx)(H.Z,{name:"rating",id:"single-book-rating",className:"rating",onChange:r.handleChange,value:Number(r.values.rating)}),(0,Z.jsx)("label",{htmlFor:"single-book-feedback",className:"form-label",children:"Resume"}),(0,Z.jsx)("textarea",{name:"feedback",id:"single-book-feedback",className:"feedback-textarea",onChange:r.handleChange,value:r.values.feedback}),(0,Z.jsxs)("div",{className:"buttons-container",children:[(0,Z.jsx)("button",{type:"button",className:"form-button button-back",children:"Back"}),(0,Z.jsx)("button",{type:"submit",className:"form-button button-save",children:"Save"})]})]})},D=function(){var n=(0,r.useState)(!1),e=(0,s.Z)(n,2),i=e[0],t=e[1],o=(0,r.useState)(""),a=(0,s.Z)(o,2),l=a[0],d=a[1],m=function(){t(!1),d("")};return(0,Z.jsxs)(c,{children:[(0,Z.jsxs)("div",{className:"container",children:[" ",(0,Z.jsx)(T,{}),(0,Z.jsx)(q,{status:"read",modalOpenHandler:function(){t(!0)},updateFeedbackBookId:function(n){d(n)}}),(0,Z.jsx)(q,{status:"reading now"}),(0,Z.jsx)(q,{status:"going to read"})]}),(0,Z.jsx)(L.Z,{open:i,onClose:m,children:(0,Z.jsx)(Y.Z,{children:(0,Z.jsx)($,{id:l,modalCloseHandler:m})})})]})}}}]);
//# sourceMappingURL=643.4dc85d09.chunk.js.map