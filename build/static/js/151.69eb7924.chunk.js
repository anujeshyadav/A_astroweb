(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[151],{1120:function(e,t,a){"use strict";a.r(t);var n=a(201),c=a(202),r=a(203),l=a(204),o=a(0),s=a.n(o),i=a(337),u=a(338),m=a(339),d=a(209),p=a.n(d),h=a(118),f=(a(690),a(26)),g=a(873),b=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={userChatList:[]},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(this.props.match.params.id,JSON.parse(localStorage.getItem("user_id")));f.a.get("/user/getOne_Conversation_Wallet/".concat(t)).then((function(t){console.log("userChatList",t.data.data),!0===t.data.status&&e.setState({userChatList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){this.state.userChatList;return s.a.createElement(h.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(p.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(i.a,null,s.a.createElement(u.a,null,s.a.createElement(m.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"User Chat History"))))))),s.a.createElement("section",{style:{marginTop:"52px"},className:"userchathistory"},s.a.createElement(i.a,null,s.a.createElement("div",{className:"container mt-3"},s.a.createElement(g.a,null)))))}}]),a}(s.a.Component);t.default=b}}]);
//# sourceMappingURL=151.69eb7924.chunk.js.map