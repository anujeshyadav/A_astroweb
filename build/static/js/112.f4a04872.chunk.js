(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[112],{1128:function(e,t,a){"use strict";a.r(t);var n=a(206),l=a(201),r=a(202),o=a(203),i=a(204),c=a(337),s=a(338),m=a(339),u=a(732),p=a(695),d=a(118),h=a(0),b=a.n(h),f=a(26),E=a(678),g=a.n(E),v=a(209),_=a.n(v),C=(a(217),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("user_id")),a=localStorage.getItem("videoCallAstro_id"),n={userid:t,astroid:a,mobile:parseInt(r.state.mobile),firstname:r.state.firstname,p_firstname:r.state.p_firstname,lastname:r.state.lastname,p_lastname:r.state.p_lastname,dob:r.state.dob,p_dob:r.state.p_dob,birthPlace:r.state.birthPlace,p_birthPlace:r.state.p_birthPlace,date_of_time:r.state.date_of_time,p_date_of_time:r.state.p_date_of_time,gender:r.state.gender,marital_status:r.state.marital_status,occupation:r.state.occupation,topic_of_cnsrn:r.state.topic_of_cnsrn,entertopic_of_cnsrn:r.state.entertopic_of_cnsrn};f.a.post("/user/add_chat_intake",n).then((function(e){})).catch((function(e){g()("Error!","error"),console.log(e)}));var l={userid:t,astroid:a,type:"Video"};f.a.post("/user/addCallWallet",l).then((function(e){!0===e.data.status?r.props.history.push("/userVideoCall/".concat(t)):g()("Not Having Enough Balance")})).catch((function(e){console.log(e.response.data.message),e.response.data.message&&alert("Low balance Recharge")}))},r.state={videoCallList:""},r.state={userid:"",astroid:"",mobile:"",userData:{},firstname:"",p_firstname:"",lastname:"",p_lastname:"",dob:"",p_dob:"",date_of_time:"",p_date_of_time:"",birthPlace:"",p_birthPlace:"",gender:"",marital_status:"",occupation:"",topic_of_cnsrn:"",entertopic_of_cnsrn:"",data:[],setVideoCall:!1,toggle:!0},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user_id"));localStorage.getItem("videoCallAstro_id");f.a.get("/user/viewoneuser/".concat(t)).then((function(t){console.log("1154",t.data),e.setState({mobile:t.data.data.mobile}),e.setState({userData:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return b.a.createElement(d.a,{headerTop:"visible"},b.a.createElement(b.a.Fragment,null,b.a.createElement("section",{className:"pt-0 pb-0"},b.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(_.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},b.a.createElement(c.a,null,b.a.createElement(s.a,null,b.a.createElement(m.a,{md:"12"},b.a.createElement("div",{className:"leftcont text-left"},b.a.createElement("h1",null,"Video InTake Form"))))))),b.a.createElement("section",{className:""},b.a.createElement(c.a,null,b.a.createElement(s.a,null,b.a.createElement(m.a,{lg:"12"},b.a.createElement("div",{className:"wal-amt"},b.a.createElement("h3",null,"Video InTake Form "),b.a.createElement("hr",null),b.a.createElement("form",{onSubmit:function(t){return e.submitHandler(t)}},b.a.createElement(s.a,null,b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Mobile Number*"),b.a.createElement("input",{type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"First Name*"),b.a.createElement("input",{type:"text",name:"firstname",required:!0,placeholder:"Enter Your FirstName",value:this.state.fullname,onChange:this.changeHandler}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Patner First Name*"),b.a.createElement("input",{type:"text",name:"p_firstname",placeholder:"Enter Your Patner firstname",value:this.state.p_firstname,onChange:this.changeHandler}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null," Last Name*"),b.a.createElement("input",{required:!0,type:"text",name:"lastname",placeholder:"Enter Your  Lastname",value:this.state.lastname,onChange:this.changeHandler}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Patner Last Name*"),b.a.createElement("input",{type:"text",name:"p_lastname",placeholder:"Enter Your Patner Lastname",value:this.state.p_lastname,onChange:this.changeHandler}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Date of Birth*"),b.a.createElement("input",{type:"date",name:"dob",value:this.state.dob,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null," patner Date of Birth*"),b.a.createElement("input",{type:"date",name:"p_dob",value:this.state.p_dob,onChange:this.changeHandler,placeholder:"Enter Your Number"}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Date of Time*"),b.a.createElement("input",{type:"time",name:"date_of_time",value:this.state.date_of_time,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null," patner Date of Time*"),b.a.createElement("input",{type:"time",name:"p_date_of_time",value:this.state.p_date_of_time,onChange:this.changeHandler,placeholder:"Enter Your Number"}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Birth Place*"),b.a.createElement("input",{type:"text",name:"birthPlace",value:this.state.birthPlace,onChange:this.changeHandler,required:!0,placeholder:"Enter Your  Birth Place"}))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null," patner Birth Place"),b.a.createElement("input",{type:"text",name:"p_birthPlace",value:this.state.p_birthPlace,onChange:this.changeHandler,placeholder:"Enter Your  Birth Place"}))),b.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},b.a.createElement("label",null,"Gender*"),b.a.createElement(u.a,{id:"exampleSelect",name:"gender",type:"select",value:this.state.data.gender,onChange:this.changeHandler},b.a.createElement("option",null,"Select Gender"),b.a.createElement("option",null,"Male"),b.a.createElement("option",null,"Female"))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Marital Status*"),b.a.createElement(u.a,{type:"select",name:"marital_status",value:this.state.marital_status,onChange:this.changeHandler},b.a.createElement("option",null,"Select Marital Status"),b.a.createElement("option",null,"Single"),b.a.createElement("option",null,"Married"),b.a.createElement("option",null,"Divorced"),b.a.createElement("option",null,"Separated"),b.a.createElement("option",null,"Widowed")))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Occupation*"),b.a.createElement(u.a,{type:"select",name:"occupation",value:this.state.data.occupation,onChange:this.changeHandler},b.a.createElement("option",null,"Select Employed in"),b.a.createElement("option",null,"Private Sector"),b.a.createElement("option",null,"Govt Sector"),b.a.createElement("option",null,"Business/Self Employed"),b.a.createElement("option",null,"Civil Services"),b.a.createElement("option",null,"Defence"),b.a.createElement("option",null,"Not Working"),b.a.createElement("option",null,"Student")))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Topic of concern*"),b.a.createElement(u.a,{type:"select",name:"topic_of_cnsrn",value:this.state.data.topic_of_cnsrn,onChange:this.changeHandler},b.a.createElement("option",null,"Select Topic"),b.a.createElement("option",null,"Career and Business"),b.a.createElement("option",null,"Marriage"),b.a.createElement("option",null,"Love and Relationship"),b.a.createElement("option",null,"Wealth and Property"),b.a.createElement("option",null,"Education"),b.a.createElement("option",null,"Legal Matters"),b.a.createElement("option",null,"Child Name Consultation"),b.a.createElement("option",null,"Business Name Consultation"),b.a.createElement("option",null,"Gem Stone Consultation"),b.a.createElement("option",null,"Commodity trading consultation"),b.a.createElement("option",null,"Match making"),b.a.createElement("option",null,"Birth Time Rectification"),b.a.createElement("option",null,"Name Correction Consultation"),b.a.createElement("option",null,"Travel Abroad Consulation"),b.a.createElement("option",null,"Remedy Consultation"),b.a.createElement("option",null,"Health Consultation"),b.a.createElement("option",null,"Others")))),b.a.createElement(m.a,{md:"4"},b.a.createElement("div",{class:"form-group mtb-10"},b.a.createElement("label",null,"Enter topic of concern:"),b.a.createElement("input",{type:"text",name:"entertopic_of_cnsrn",required:!0,placeholder:"Enter Your Fullname",value:this.state.entertopic_of_cnsrn,onChange:this.changeHandler}))),b.a.createElement(m.a,{md:"12",className:"mt-3"},b.a.createElement(p.a,{className:"btn btn-warning"},"Start Video with ",localStorage.getItem("astroname"))))))))))))}}]),a}(b.a.Component));t.default=C},695:function(e,t,a){"use strict";var n=a(7),l=a(14),r=a(207),o=a(20),i=a(0),c=a.n(i),s=a(3),m=a.n(s),u=a(58),p=a.n(u),d=a(36),h=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:d.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,o=e.className,i=e.close,s=e.cssModule,m=e.color,u=e.outline,b=e.size,f=e.tag,E=e.innerRef,g=Object(l.a)(e,h);i&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+m,_=Object(d.k)(p()(o,{close:i},i||"btn",i||v,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),s);g.href&&"button"===f&&(f="a");var C=i?"Close":null;return c.a.createElement(f,Object(n.a)({type:"button"===f&&g.onClick?"button":void 0},g,{className:_,ref:E,onClick:this.onClick,"aria-label":a||C}))},t}(c.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},t.a=f},732:function(e,t,a){"use strict";var n=a(7),l=a(14),r=a(207),o=a(20),i=a(0),c=a.n(i),s=a(3),m=a.n(s),u=a(58),p=a.n(u),d=a(36),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.o,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,o=e.bsSize,i=e.valid,s=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,f=e.innerRef,E=Object(l.a)(e,h),g=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),_=m||("select"===r||"textarea"===r?r:"input"),C="form-control";b?(C+="-plaintext",_=m||"input"):"file"===r?C+="-file":"range"===r?C+="-range":g&&(C=u?null:"form-check-input"),E.size&&v.test(E.size)&&(Object(d.q)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=E.size,delete E.size);var y=Object(d.k)(p()(t,s&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,C),a);return("input"===_||m&&"function"===typeof m)&&(E.type=r),E.children&&!b&&"select"!==r&&"string"===typeof _&&"select"!==_&&(Object(d.q)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),c.a.createElement(_,Object(n.a)({},E,{ref:f,className:y,"aria-invalid":s}))},t}(c.a.Component);f.propTypes=b,f.defaultProps={type:"text"},t.a=f}}]);
//# sourceMappingURL=112.f4a04872.chunk.js.map