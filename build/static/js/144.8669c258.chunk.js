(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[144],{1101:function(e,t,a){"use strict";a.r(t),a.d(t,"FaqPage",(function(){return v}));var n=a(201),r=a(202),c=a(203),o=a(204),l=a(0),s=a.n(l),i=a(337),u=a(338),m=a(339),d=a(118),b=(a(833),a(906)),f=a(210),y=a.n(f),v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(i.a,{fluid:!0},s.a.createElement(u.a,{className:"mb-5"},s.a.createElement("div",{className:"headingtitle text-center ptb-40"},s.a.createElement("h2",null,"FAQS For AstroVipra"),s.a.createElement("img",{src:y.a,alt:"",className:"sb-img"}))),s.a.createElement(u.a,{className:""},s.a.createElement(m.a,{xs:!0,lg:"2"}),s.a.createElement(m.a,{xs:!0,lg:"8"},s.a.createElement(b.a,null,s.a.createElement(b.a.Item,{eventKey:"0",className:"m-4"},s.a.createElement(b.a.Header,null,"I recharged my wallet, how do I call astrologer now?"),s.a.createElement(b.a.Body,null,"After login/registering with our website, you just need to recharge wallet, select the astrologer you want to consult and enter your mobile number. You will receive call from the astrologer within 2 minutes.")),s.a.createElement(b.a.Item,{eventKey:"1",className:"m-4"},s.a.createElement(b.a.Header,null,"I didn\u2019t received call from astrologer after entering phone number in \u201ccall now\u201d button, what to do?"),s.a.createElement(b.a.Body,null,"Don\u2019t worry. Sometimes it happens that astrologer might busy with another customer. If you don\u2019t receive call with in 2 minutes after requesting call, you can request again.")))),s.a.createElement(m.a,{xs:!0,lg:"2"})),s.a.createElement(u.a,{className:""},s.a.createElement(m.a,{xs:!0,lg:"2"}),s.a.createElement(m.a,{xs:!0,lg:"8"},s.a.createElement(b.a,null,s.a.createElement(b.a.Item,{eventKey:"0",className:"m-4"},s.a.createElement(b.a.Header,null,"What if my astrologer is offline?"),s.a.createElement(b.a.Body,null,"There might be chances that astrologer prefer to offline due to some reasons. You can choose to talk to any other astrologer on call. But if you want to talk to particular astrologer only, you can call our customer care number and check availability of the astrologer(s).")),s.a.createElement(b.a.Item,{eventKey:"1",className:"m-4"},s.a.createElement(b.a.Header,null,"Can I talk to astrologer(s) without registering?"),s.a.createElement(b.a.Body,null,"No, you must have to register with our website to talk to astrologer on astrolaabh.in. Registering with Astrolaabh is super easy, just click on register now button, fill the details and you can instantly talk to astrologer.")),s.a.createElement(b.a.Item,{eventKey:"3",className:"m-4"},s.a.createElement(b.a.Header,null,"Do you accept payments via credit cards?"),s.a.createElement(b.a.Body,null,"Yes, we do accept payments via all major credit cards/ debit cards/ net banking/ UPI, wallet payments, Paytm and all other options available to make payments to Astrolaabh.in.")))),s.a.createElement(m.a,{xs:!0,lg:"2"}))))}}]),a}(l.Component);t.default=v},906:function(e,t,a){"use strict";var n=a(13),r=a(667),c=a(58),o=a.n(c),l=a(0),s=a.n(l),i=a(702),u=a(668),m=a(206),d=a(687),b=a(27),f=a(699);var y,v=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)},j=a(698),h=a(701),O=a(666),p=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function E(e,t){var a=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],n=g[e];return a+parseInt(Object(d.a)(t,n[0]),10)+parseInt(Object(d.a)(t,n[1]),10)}var x=(y={},Object(m.a)(y,b.c,"collapse"),Object(m.a)(y,b.d,"collapsing"),Object(m.a)(y,b.b,"collapsing"),Object(m.a)(y,b.a,"collapse show"),y),w={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:E},N=s.a.forwardRef((function(e,t){var a=e.onEnter,c=e.onEntering,i=e.onEntered,u=e.onExit,m=e.onExiting,d=e.className,b=e.children,y=e.dimension,g=void 0===y?"height":y,w=e.getDimensionValue,N=void 0===w?E:w,C=Object(r.a)(e,p),K="function"===typeof g?g():g,A=Object(l.useMemo)((function(){return v((function(e){e.style[K]="0"}),a)}),[K,a]),k=Object(l.useMemo)((function(){return v((function(e){var t="scroll".concat(K[0].toUpperCase()).concat(K.slice(1));e.style[K]="".concat(e[t],"px")}),c)}),[K,c]),P=Object(l.useMemo)((function(){return v((function(e){e.style[K]=null}),i)}),[K,i]),I=Object(l.useMemo)((function(){return v((function(e){e.style[K]="".concat(N(K,e),"px"),Object(j.a)(e)}),u)}),[u,N,K]),B=Object(l.useMemo)((function(){return v((function(e){e.style[K]=null}),m)}),[K,m]);return Object(O.jsx)(h.a,Object(n.a)(Object(n.a)({ref:t,addEndListener:f.a},C),{},{"aria-expanded":C.role?C.in:null,onEnter:A,onEntering:k,onEntered:P,onExit:I,onExiting:B,childRef:b.ref,children:function(e,t){return s.a.cloneElement(b,Object(n.a)(Object(n.a)({},t),{},{className:o()(d,b.props.className,x[e],"width"===K&&"collapse-horizontal")}))}}))}));N.defaultProps=w;var C=N;function K(e,t){return Array.isArray(e)?e.includes(t):e===t}var A=l.createContext({});A.displayName="AccordionContext";var k=A,P=["as","bsPrefix","className","children","eventKey"],I=l.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,s=e.bsPrefix,i=e.className,m=e.children,d=e.eventKey,b=Object(r.a)(e,P),f=Object(l.useContext)(k).activeEventKey;return s=Object(u.c)(s,"accordion-collapse"),Object(O.jsx)(C,Object(n.a)(Object(n.a)({ref:t,in:K(f,d)},b),{},{className:o()(i,s),children:Object(O.jsx)(c,{children:l.Children.only(m)})}))}));I.displayName="AccordionCollapse";var B=I,R=l.createContext({eventKey:""});R.displayName="AccordionItemContext";var H=R,M=["as","bsPrefix","className"],S=l.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,s=e.bsPrefix,i=e.className,m=Object(r.a)(e,M);s=Object(u.c)(s,"accordion-body");var d=Object(l.useContext)(H).eventKey;return Object(O.jsx)(B,{eventKey:d,children:Object(O.jsx)(c,Object(n.a)(Object(n.a)({ref:t},m),{},{className:o()(i,s)}))})}));S.displayName="AccordionBody";var D=S,V=a(54),q=["as","bsPrefix","className","onClick"];var F=l.forwardRef((function(e,t){var a=e.as,c=void 0===a?"button":a,s=e.bsPrefix,i=e.className,m=e.onClick,d=Object(r.a)(e,q);s=Object(u.c)(s,"accordion-button");var b=Object(l.useContext)(H).eventKey,f=function(e,t){var a=Object(l.useContext)(k),n=a.activeEventKey,r=a.onSelect,c=a.alwaysOpen;return function(a){var o=e===n?null:e;c&&(o=Array.isArray(n)?n.includes(e)?n.filter((function(t){return t!==e})):[].concat(Object(V.a)(n),[e]):[e]),null==r||r(o,a),null==t||t(a)}}(b,m),y=Object(l.useContext)(k).activeEventKey;return"button"===c&&(d.type="button"),Object(O.jsx)(c,Object(n.a)(Object(n.a)({ref:t,onClick:f},d),{},{"aria-expanded":b===y,className:o()(i,s,!K(y,b)&&"collapsed")}))}));F.displayName="AccordionButton";var T=F,U=["as","bsPrefix","className","children","onClick"],Y=l.forwardRef((function(e,t){var a=e.as,c=void 0===a?"h2":a,l=e.bsPrefix,s=e.className,i=e.children,m=e.onClick,d=Object(r.a)(e,U);return l=Object(u.c)(l,"accordion-header"),Object(O.jsx)(c,Object(n.a)(Object(n.a)({ref:t},d),{},{className:o()(s,l),children:Object(O.jsx)(T,{onClick:m,children:i})}))}));Y.displayName="AccordionHeader";var J=Y,L=["as","bsPrefix","className","eventKey"],z=l.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,s=e.bsPrefix,i=e.className,m=e.eventKey,d=Object(r.a)(e,L);s=Object(u.c)(s,"accordion-item");var b=Object(l.useMemo)((function(){return{eventKey:m}}),[m]);return Object(O.jsx)(H.Provider,{value:b,children:Object(O.jsx)(c,Object(n.a)(Object(n.a)({ref:t},d),{},{className:o()(i,s)}))})}));z.displayName="AccordionItem";var Q=z,W=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],G=l.forwardRef((function(e,t){var a=Object(i.a)(e,{activeKey:"onSelect"}),c=a.as,s=void 0===c?"div":c,m=a.activeKey,d=a.bsPrefix,b=a.className,f=a.onSelect,y=a.flush,v=a.alwaysOpen,j=Object(r.a)(a,W),h=Object(u.c)(d,"accordion"),p=Object(l.useMemo)((function(){return{activeEventKey:m,onSelect:f,alwaysOpen:v}}),[m,f,v]);return Object(O.jsx)(k.Provider,{value:p,children:Object(O.jsx)(s,Object(n.a)(Object(n.a)({ref:t},j),{},{className:o()(b,h,y&&"".concat(h,"-flush"))}))})}));G.displayName="Accordion";t.a=Object.assign(G,{Button:T,Collapse:B,Item:Q,Header:J,Body:D})}}]);
//# sourceMappingURL=144.8669c258.chunk.js.map