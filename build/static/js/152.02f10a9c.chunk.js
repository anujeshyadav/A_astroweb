(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[152],{1124:function(e,t,a){"use strict";a.r(t);var n=a(206),l=a(201),r=a(202),o=a(203),c=a(204),i=a(0),m=a.n(i),s=a(337),u=a(338),d=a(339),p=a(732),h=a(695),E=a(118),g=a(26),f=a(678),b=a.n(f),_=a(780),v=a(1125),C=a(1126),y=a(1127),S=a(209),N=a.n(S),P=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("user_id")),a=localStorage.getItem("astroId"),n={userid:t,astroid:a,mobile:parseInt(r.state.mobile),firstname:r.state.firstname,p_firstname:r.state.p_firstname,lastname:r.state.lastname,p_lastname:r.state.p_lastname,dob:r.state.dob,p_dob:r.state.p_dob,birthPlace:r.state.birthPlace,p_birthPlace:r.state.p_birthPlace,date_of_time:r.state.date_of_time,p_date_of_time:r.state.p_date_of_time,gender:r.state.gender,marital_status:r.state.marital_status,occupation:r.state.occupation,topic_of_cnsrn:r.state.topic_of_cnsrn,entertopic_of_cnsrn:r.state.entertopic_of_cnsrn};""!==t&&null!==t?g.a.post("/user/add_chat_intake",n).then((function(e){var n={userid:t,astroid:a,type:"Chat"};g.a.post("/user/addCallWallet",n).then((function(e){console.log(e),!0===e.data.status?r.props.history.push("/chatApp"):b()("Not having Enough Balance")})).catch((function(e){console.log(e)}))})).catch((function(e){b()("Error!","You clicked the button!","error"),console.log(e)})):b()("Need to Login first")},r.state={userid:"",astroid:"",mobile:"",firstname:"",p_firstname:"",lastname:"",p_lastname:"",dob:"",p_dob:"",date_of_time:"",p_date_of_time:"",birthPlace:"",p_birthPlace:"",gender:"",marital_status:"",occupation:"",topic_of_cnsrn:"",entertopic_of_cnsrn:"",data:[],state:[],city:[],country:[],selectedCountry:null,selectedState:null,selectedCity:null},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user_id"));g.a.get("/user/viewoneuser/".concat(t)).then((function(t){e.setState({mobile:t.data.data.mobile})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a,n=this;return m.a.createElement(E.a,{headerTop:"visible"},m.a.createElement("section",{className:"pt-0 pb-0"},m.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(N.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},m.a.createElement(s.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"12"},m.a.createElement("div",{className:"leftcont text-left"},m.a.createElement("h1",null,"Chat InTake Form"))))))),m.a.createElement("section",{className:""},m.a.createElement(s.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"12"},m.a.createElement("div",{className:"wal-amt"},m.a.createElement("h3",null,"Chat InTake Form "),m.a.createElement("hr",null),m.a.createElement("form",{onSubmit:function(e){return n.submitHandler(e)}},m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Mobile Number*"),m.a.createElement("input",{type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"First Name*"),m.a.createElement("input",{type:"text",name:"firstname",required:!0,placeholder:"Enter Your FirstName",value:this.state.fullname,onChange:this.changeHandler}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Patner First Name*"),m.a.createElement("input",{type:"text",name:"p_firstname",placeholder:"Enter Your Patner firstname",value:this.state.p_firstname,onChange:this.changeHandler}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null," Last Name*"),m.a.createElement("input",{required:!0,type:"text",name:"lastname",placeholder:"Enter Your  Lastname",value:this.state.lastname,onChange:this.changeHandler}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Patner Last Name*"),m.a.createElement("input",{type:"text",name:"p_lastname",placeholder:"Enter Your Patner Lastname",value:this.state.p_lastname,onChange:this.changeHandler}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Date of Birth*"),m.a.createElement("input",{type:"date",name:"dob",value:this.state.dob,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null," Partner Date of Birth*"),m.a.createElement("input",{type:"date",name:"p_dob",value:this.state.p_dob,onChange:this.changeHandler,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Time of Birth*"),m.a.createElement("input",{type:"time",name:"date_of_time",value:this.state.date_of_time,onChange:this.changeHandler,required:!0,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null," Patner Time of birth*"),m.a.createElement("input",{type:"time",name:"p_date_of_time",value:this.state.p_date_of_time,onChange:this.changeHandler,placeholder:"Enter Your Number"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Birth Place*"),m.a.createElement("input",{type:"text",name:"birthPlace",value:this.state.birthPlace,onChange:this.changeHandler,required:!0,placeholder:"Enter Your  Birth Place"}))),m.a.createElement(d.a,{md:"4"},m.a.createElement("label",null,"Country"),m.a.createElement(_.a,{options:v.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCountry,onChange:function(e){n.setState({selectedCountry:e}),g.a.post("/user/time_zone",{country_code:null===e||void 0===e?void 0:e.timezones[0].zoneName}).then((function(e){})).catch((function(e){console.log(e)}))}})),m.a.createElement(d.a,{md:"4"},m.a.createElement("label",null,"State"),m.a.createElement(_.a,{options:null===C.a||void 0===C.a?void 0:C.a.getStatesOfCountry(null===(e=this.state.selectedCountry)||void 0===e?void 0:e.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedState,onChange:function(e){n.setState({selectedState:e})}})),m.a.createElement(d.a,{md:"4"},m.a.createElement("label",null,"City"),m.a.createElement(_.a,{options:y.a.getCitiesOfState(null===(t=this.state.selectedState)||void 0===t?void 0:t.countryCode,null===(a=this.state.selectedState)||void 0===a?void 0:a.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCity,onChange:function(e){n.setState({selectedCity:e})}})),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null," Partner Birth Place"),m.a.createElement("input",{type:"text",name:"p_birthPlace",value:this.state.p_birthPlace,onChange:this.changeHandler,placeholder:"Enter Your  Birth Place"}))),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement("label",null,"Gender*"),m.a.createElement(p.a,{id:"exampleSelect",name:"gender",type:"select",value:this.state.data.gender,onChange:this.changeHandler},m.a.createElement("option",null,"Select Gender"),m.a.createElement("option",null,"Male"),m.a.createElement("option",null,"Female"))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Marital Status*"),m.a.createElement(p.a,{type:"select",name:"marital_status",value:this.state.marital_status,onChange:this.changeHandler},m.a.createElement("option",null,"Select Marital Status"),m.a.createElement("option",null,"Single"),m.a.createElement("option",null,"Married"),m.a.createElement("option",null,"Divorced"),m.a.createElement("option",null,"Separated"),m.a.createElement("option",null,"Widowed")))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Occupation*"),m.a.createElement(p.a,{type:"select",name:"occupation",value:this.state.data.occupation,onChange:this.changeHandler},m.a.createElement("option",null,"Select Employed in"),m.a.createElement("option",null,"Private Sector"),m.a.createElement("option",null,"Govt Sector"),m.a.createElement("option",null,"Business/Self Employed"),m.a.createElement("option",null,"Civil Services"),m.a.createElement("option",null,"Defence"),m.a.createElement("option",null,"Not Working"),m.a.createElement("option",null,"Student")))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Topic of concern*"),m.a.createElement(p.a,{type:"select",name:"topic_of_cnsrn",value:this.state.data.topic_of_cnsrn,onChange:this.changeHandler},m.a.createElement("option",null,"Select Topic"),m.a.createElement("option",null,"Career and Business"),m.a.createElement("option",null,"Marriage"),m.a.createElement("option",null,"Love and Relationship"),m.a.createElement("option",null,"Wealth and Property"),m.a.createElement("option",null,"Education"),m.a.createElement("option",null,"Legal Matters"),m.a.createElement("option",null,"Child Name Consultation"),m.a.createElement("option",null,"Business Name Consultation"),m.a.createElement("option",null,"Gem Stone Consultation"),m.a.createElement("option",null,"Commodity trading consultation"),m.a.createElement("option",null,"Match making"),m.a.createElement("option",null,"Birth Time Rectification"),m.a.createElement("option",null,"Name Correction Consultation"),m.a.createElement("option",null,"Travel Abroad Consulation"),m.a.createElement("option",null,"Remedy Consultation"),m.a.createElement("option",null,"Health Consultation"),m.a.createElement("option",null,"Others")))),m.a.createElement(d.a,{md:"4"},m.a.createElement("div",{class:"form-group mtb-10"},m.a.createElement("label",null,"Enter topic of concern:"),m.a.createElement("input",{type:"text",name:"entertopic_of_cnsrn",required:!0,placeholder:"Enter Your Fullname",value:this.state.entertopic_of_cnsrn,onChange:this.changeHandler}))),m.a.createElement(d.a,{md:"12",className:"mt-3"},m.a.createElement(h.a,{className:"btn btn-warning"},"Start chat with ",localStorage.getItem("astroname")))))))))))}}]),a}(m.a.Component);t.default=P}}]);
//# sourceMappingURL=152.02f10a9c.chunk.js.map