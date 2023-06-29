"use strict";(self.webpackChunkbooks_reading_tracker=self.webpackChunkbooks_reading_tracker||[]).push([[660],{1660:function(e,n,o){o.d(n,{Z:function(){return N}});var i=o(9439),t=o(4942),a=o(3366),r=o(7462),l=o(2791),c=o(8182),s={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},u=o(4419),d=o(3967),v=o(4036),p=o(8252).Z,m=o(8278),f=o(3031),h=o(2071),y=o(9201),g=o(184),b=(0,y.Z)((0,g.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Z=(0,y.Z)((0,g.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),x=o(3736),F=o(3794),S=o(5878),A=o(7225);function w(e){return(0,A.Z)("MuiRating",e)}var C=(0,S.Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),V=["value"],R=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function M(e,n){if(null==e)return e;var o=Math.round(e/n)*n;return Number(o.toFixed(function(e){var n=e.toString().split(".")[1];return n?n.length:0}(n)))}var L=(0,F.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[(0,t.Z)({},"& .".concat(C.visuallyHidden),n.visuallyHidden),n.root,n["size".concat((0,v.Z)(o.size))],o.readOnly&&n.readOnly]}})((function(e){var n,o=e.theme,i=e.ownerState;return(0,r.Z)((n={display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},(0,t.Z)(n,"&.".concat(C.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"}),(0,t.Z)(n,"&.".concat(C.focusVisible," .").concat(C.iconActive),{outline:"1px solid #999"}),(0,t.Z)(n,"& .".concat(C.visuallyHidden),s),n),"small"===i.size&&{fontSize:o.typography.pxToRem(18)},"large"===i.size&&{fontSize:o.typography.pxToRem(30)},i.readOnly&&{pointerEvents:"none"})})),z=(0,F.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,n){var o=e.ownerState;return[n.label,o.emptyValueFocused&&n.labelEmptyValueActive]}})((function(e){var n=e.ownerState;return(0,r.Z)({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),j=(0,F.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,n){var o=e.ownerState;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})((function(e){var n=e.theme,o=e.ownerState;return(0,r.Z)({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(n.vars||n).palette.action.disabled})})),H=(0,F.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return(0,F.Dz)(e)&&"iconActive"!==e},overridesResolver:function(e,n){var o=e.iconActive;return[n.decimal,o&&n.iconActive]}})((function(e){var n=e.iconActive;return(0,r.Z)({position:"relative"},n&&{transform:"scale(1.2)"})}));function E(e){var n=(0,a.Z)(e,V);return(0,g.jsx)("span",(0,r.Z)({},n))}function O(e){var n=e.classes,o=e.disabled,i=e.emptyIcon,t=e.focus,a=e.getLabelText,s=e.highlightSelectedOnly,u=e.hover,d=e.icon,v=e.IconContainerComponent,m=e.isActive,f=e.itemValue,h=e.labelProps,y=e.name,b=e.onBlur,Z=e.onChange,x=e.onClick,F=e.onFocus,S=e.readOnly,A=e.ownerState,w=e.ratingValue,C=s?f===w:f<=w,V=f<=u,R=f<=t,M=f===e.ratingValueRounded,L=p(),H=(0,g.jsx)(j,{as:v,value:f,className:(0,c.Z)(n.icon,C?n.iconFilled:n.iconEmpty,V&&n.iconHover,R&&n.iconFocus,m&&n.iconActive),ownerState:(0,r.Z)({},A,{iconEmpty:!C,iconFilled:C,iconHover:V,iconFocus:R,iconActive:m}),children:i&&!C?i:d});return S?(0,g.jsx)("span",(0,r.Z)({},h,{children:H})):(0,g.jsxs)(l.Fragment,{children:[(0,g.jsxs)(z,(0,r.Z)({ownerState:(0,r.Z)({},A,{emptyValueFocused:void 0}),htmlFor:L},h,{children:[H,(0,g.jsx)("span",{className:n.visuallyHidden,children:a(f)})]})),(0,g.jsx)("input",{className:n.visuallyHidden,onFocus:F,onBlur:b,onChange:Z,onClick:x,disabled:o,value:f,id:L,type:"radio",name:y,checked:M})]})}var k=(0,g.jsx)(b,{fontSize:"inherit"}),T=(0,g.jsx)(Z,{fontSize:"inherit"});function I(e){return"".concat(e," Star").concat(1!==e?"s":"")}var N=l.forwardRef((function(e,n){var o=(0,x.Z)({name:"MuiRating",props:e}),t=o.className,s=o.defaultValue,y=void 0===s?null:s,b=o.disabled,Z=void 0!==b&&b,F=o.emptyIcon,S=void 0===F?T:F,A=o.emptyLabelText,C=void 0===A?"Empty":A,V=o.getLabelText,j=void 0===V?I:V,N=o.highlightSelectedOnly,B=void 0!==N&&N,P=o.icon,_=void 0===P?k:P,X=o.IconContainerComponent,D=void 0===X?E:X,W=o.max,Y=void 0===W?5:W,q=o.name,G=o.onChange,J=o.onChangeActive,K=o.onMouseLeave,Q=o.onMouseMove,U=o.precision,$=void 0===U?1:U,ee=o.readOnly,ne=void 0!==ee&&ee,oe=o.size,ie=void 0===oe?"medium":oe,te=o.value,ae=(0,a.Z)(o,R),re=p(q),le=(0,m.Z)({controlled:te,default:y,name:"Rating"}),ce=(0,i.Z)(le,2),se=ce[0],ue=ce[1],de=M(se,$),ve=(0,d.Z)(),pe=l.useState({hover:-1,focus:-1}),me=(0,i.Z)(pe,2),fe=me[0],he=fe.hover,ye=fe.focus,ge=me[1],be=de;-1!==he&&(be=he),-1!==ye&&(be=ye);var Ze=(0,f.Z)(),xe=Ze.isFocusVisibleRef,Fe=Ze.onBlur,Se=Ze.onFocus,Ae=Ze.ref,we=l.useState(!1),Ce=(0,i.Z)(we,2),Ve=Ce[0],Re=Ce[1],Me=l.useRef(),Le=(0,h.Z)(Ae,Me,n),ze=function(e){var n=""===e.target.value?null:parseFloat(e.target.value);-1!==he&&(n=he),ue(n),G&&G(e,n)},je=function(e){0===e.clientX&&0===e.clientY||(ge({hover:-1,focus:-1}),ue(null),G&&parseFloat(e.target.value)===de&&G(e,null))},He=function(e){Se(e),!0===xe.current&&Re(!0);var n=parseFloat(e.target.value);ge((function(e){return{hover:e.hover,focus:n}}))},Ee=function(e){if(-1===he){Fe(e),!1===xe.current&&Re(!1);ge((function(e){return{hover:e.hover,focus:-1}}))}},Oe=l.useState(!1),ke=(0,i.Z)(Oe,2),Te=ke[0],Ie=ke[1],Ne=(0,r.Z)({},o,{defaultValue:y,disabled:Z,emptyIcon:S,emptyLabelText:C,emptyValueFocused:Te,focusVisible:Ve,getLabelText:j,icon:_,IconContainerComponent:D,max:Y,precision:$,readOnly:ne,size:ie}),Be=function(e){var n=e.classes,o=e.size,i=e.readOnly,t=e.disabled,a=e.emptyValueFocused,r=e.focusVisible,l={root:["root","size".concat((0,v.Z)(o)),t&&"disabled",r&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[a&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,u.Z)(l,w,n)}(Ne);return(0,g.jsxs)(L,(0,r.Z)({ref:Le,onMouseMove:function(e){Q&&Q(e);var n,o=Me.current,i=o.getBoundingClientRect(),t=i.right,a=i.left,r=o.firstChild.getBoundingClientRect().width;n="rtl"===ve.direction?(t-e.clientX)/(r*Y):(e.clientX-a)/(r*Y);var l=M(Y*n+$/2,$);l=function(e,n,o){return e<n?n:e>o?o:e}(l,$,Y),ge((function(e){return e.hover===l&&e.focus===l?e:{hover:l,focus:l}})),Re(!1),J&&he!==l&&J(e,l)},onMouseLeave:function(e){K&&K(e);ge({hover:-1,focus:-1}),J&&-1!==he&&J(e,-1)},className:(0,c.Z)(Be.root,t,ne&&"MuiRating-readOnly"),ownerState:Ne,role:ne?"img":null,"aria-label":ne?j(be):null},ae,{children:[Array.from(new Array(Y)).map((function(e,n){var o=n+1,i={classes:Be,disabled:Z,emptyIcon:S,focus:ye,getLabelText:j,highlightSelectedOnly:B,hover:he,icon:_,IconContainerComponent:D,name:re,onBlur:Ee,onChange:ze,onClick:je,onFocus:He,ratingValue:be,ratingValueRounded:de,readOnly:ne,ownerState:Ne},t=o===Math.ceil(be)&&(-1!==he||-1!==ye);if($<1){var a=Array.from(new Array(1/$));return(0,g.jsx)(H,{className:(0,c.Z)(Be.decimal,t&&Be.iconActive),ownerState:Ne,iconActive:t,children:a.map((function(e,n){var t=M(o-1+(n+1)*$,$);return(0,g.jsx)(O,(0,r.Z)({},i,{isActive:!1,itemValue:t,labelProps:{style:a.length-1===n?{}:{width:t===be?"".concat((n+1)*$*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),t)}))},o)}return(0,g.jsx)(O,(0,r.Z)({},i,{isActive:t,itemValue:o}),o)})),!ne&&!Z&&(0,g.jsxs)(z,{className:(0,c.Z)(Be.label,Be.labelEmptyValue),ownerState:Ne,children:[(0,g.jsx)("input",{className:Be.visuallyHidden,value:"",id:"".concat(re,"-empty"),type:"radio",name:re,checked:null==de,onFocus:function(){return Ie(!0)},onBlur:function(){return Ie(!1)},onChange:ze}),(0,g.jsx)("span",{className:Be.visuallyHidden,children:C})]})]}))}))}}]);
//# sourceMappingURL=660.37b5a76e.chunk.js.map