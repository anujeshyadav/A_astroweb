(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[125],{1137:function(e,a,t){"use strict";t.r(a);var n=t(201),l=t(202),o=t(203),c=t(204),i=t(0),r=t.n(i),s=t(337),m=t(338),d=t(339),u=t(695),p=t(118),v=(t(215),t(884)),f=t(860),g=t(26),E=t(678),b=t.n(E),h=t(209),j=t.n(h),y=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var l,o=e.props;return Object(n.a)(this,t),(l=a.call(this,o)).handlecheckpooja=function(e){localStorage.setItem("poojaviewone",JSON.stringify(e)),null!==localStorage.getItem("user_id")?l.props.history.push("/Poojadetailpage/".concat(null===e||void 0===e?void 0:e._id)):b()("No User Found","User Need to login First")},l.state={listofpooja:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/admin/get_adminevent").then((function(a){console.log(a.data.data),e.setState({listofpooja:a.data.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e,a=this;return r.a.createElement(p.a,{headerTop:"visible"},r.a.createElement("section",{className:"pt-0 pb-0"},r.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(j.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center",timeslot:""}},r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,{md:"12"},r.a.createElement("div",{className:"leftcont text-left"},r.a.createElement("h3",null,"Book Your Pooja")))))),r.a.createElement("div",{className:"container mt-2"},r.a.createElement(m.a,null,r.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},r.a.createElement("div",{className:"category-home"},r.a.createElement("section",{className:"pt-0"},r.a.createElement("div",{className:"container"},r.a.createElement(m.a,null,""!==this.state.listofpooja?r.a.createElement(r.a.Fragment,null,null===(e=this.state.listofpooja)||void 0===e?void 0:e.map((function(e,t){var n,l;return r.a.createElement(d.a,{key:t,className:"mt-3",md:"3"},r.a.createElement("div",{className:"product-grid8"},r.a.createElement("div",{class:"product-image8 imageofpooja"},r.a.createElement("img",{className:"imagepooja",style:{borderRadius:"10px",width:"100%"},src:null===e||void 0===e?void 0:e.poojaimg,alt:"pooja image"})),r.a.createElement("div",{className:"product-content"},r.a.createElement(m.a,{className:"priceandname"},r.a.createElement(d.a,{lg:"8",md:"8",sm:"8"},r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"300"}},r.a.createElement("b",null,null===e||void 0===e||null===(n=e.pooja_type)||void 0===n||null===(l=n.pooja_name)||void 0===l?void 0:l.slice(0,13)))),r.a.createElement(d.a,{lg:"4",md:"4",sm:"4"},r.a.createElement("div",{style:{fontSize:"15px"},className:" poojanames  justify-content-end"},r.a.createElement("i",{class:"fa fa-inr","aria-hidden":"true"})," ",null===e||void 0===e?void 0:e.pooja_price))),r.a.createElement(m.a,{className:"priceandname"},r.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"200"}},"Mode of Pooja")),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"10px"},className:" poojanames  justify-content-end"},r.a.createElement("span",{style:{color:"green"}},(null===e||void 0===e?void 0:e.mode)?r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,null===e||void 0===e?void 0:e.mode)):"offline")))),r.a.createElement(m.a,{className:"mt-1"},"online"===(null===e||void 0===e?void 0:e.mode)?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"15px"}},"online"!==(null===e||void 0===e?void 0:e.mode)?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{color:"red",size:20})," ",null===e||void 0===e?void 0:e.fullfill_location):null))),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("span",{style:{fontSize:"12px"}},!0===(null===e||void 0===e?void 0:e.liveStreaming)?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{fontSize:"12px"},className:" poojanames  justify-content-end"},"LiveStreaming"),r.a.createElement("div",{style:{color:"green"}},"Available")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{fontSize:"12px"},className:" poojanames  justify-content-end"},"LiveStreaming"),r.a.createElement("div",{style:{color:"red"}},"Not Available"))))),r.a.createElement(m.a,null,r.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"17px",fontWeight:"500"}},r.a.createElement(v.a,{color:"green",size:16})," ","Duration")),r.a.createElement(d.a,{lg:"6",md:"6",sm:"6"},r.a.createElement("div",{style:{fontSize:"15px"},className:" poojanames  justify-content-end"},null===e||void 0===e?void 0:e.duration))),r.a.createElement(m.a,{className:"mt-1"},r.a.createElement(u.a,{style:{cursor:"pointer"},onClick:function(){return a.handlecheckpooja(e)},color:"success"},"View")))))}))):null)))))))))}}]),t}(r.a.Component);a.default=y},695:function(e,a,t){"use strict";var n=t(7),l=t(14),o=t(207),c=t(20),i=t(0),r=t.n(i),s=t(3),m=t.n(s),d=t(58),u=t.n(d),p=t(36),v=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],f={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:p.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,c=e.className,i=e.close,s=e.cssModule,m=e.color,d=e.outline,f=e.size,g=e.tag,E=e.innerRef,b=Object(l.a)(e,v);i&&"undefined"===typeof b.children&&(b.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+m,j=Object(p.k)(u()(c,{close:i},i||"btn",i||h,!!f&&"btn-"+f,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),s);b.href&&"button"===g&&(g="a");var y=i?"Close":null;return r.a.createElement(g,Object(n.a)({type:"button"===g&&b.onClick?"button":void 0},b,{className:j,ref:E,onClick:this.onClick,"aria-label":t||y}))},a}(r.a.Component);g.propTypes=f,g.defaultProps={color:"secondary",tag:"button"},a.a=g}}]);
//# sourceMappingURL=125.f60078b4.chunk.js.map