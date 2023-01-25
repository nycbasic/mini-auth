(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(47),l=t.n(o),s=(t(58),t(60),t(62),t(18)),c=t(5),i=t(6),u=t(8),m=t(7),p=t(9),d=t(21),h=t.n(d),E=t(108),f=t(112),g=t(3),v=t(13),b=t.n(v);function y(e){return e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization}var S=function(e,a){return function(t){b.a.post("/api/users/signup",e).then(function(e){var n=e.data.token;y(n),localStorage.setItem("jwt",n),t(w(h()(n))),a.push("/dashboard")}).catch(function(e){console.log(e),t({type:"GET_ERRORS",payload:e.response.data})})}},w=function(e){return function(a){a({type:"SET_CURRENT_USER",payload:e})}},O=function(){return function(e){y(!1),localStorage.clear(),e({type:"SET_CURRENT_USER",payload:{}})}},N=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.auth,a=e.isAuthenticated,t=e.user,n=this.props,o=n.logoutUser,l=n.history;return r.a.createElement("nav",{className:"navbar navbar-expand-lg"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{className:"navbar-brand",to:a?"/dashboard":"/"},"Auth Connector"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},a?r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{onClick:function(){return o()},className:"nav-link",to:"/login","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement("img",{className:"rounded-circle",src:t.avatar,alt:t.name,style:{width:"25px",marginRight:"5px"},title:"You must have a Gravatar connected to your email to display an image"}),"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{onClick:function(){return l.push("/signup")},className:"nav-link",to:"/signup","data-toggle":"collapse","data-target":"#navbarSupportedContent"},"Signup")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{onClick:function(){return l.push("/login")},className:"nav-link",to:"/login","data-toggle":"collapse","data-target":"#navbarSupportedContent"},"Log-in")))))))}}]),a}(n.Component);var C=Object(g.b)(function(e){return{auth:e.auth}},{logoutUser:O})(Object(f.a)(N)),R=t(111),j=t(113),k=t(109),U=function(){return function(e){return e({type:"CLEAR_ERRORS",payload:{}})}},A=t(52),_=t(110);var F=Object(g.b)(function(e){return{auth:e.auth}})(function(e){var a=e.component,t=e.auth,n=Object(A.a)(e,["component","auth"]);return t.isAuthenticated?r.a.createElement(k.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,e)}})):r.a.createElement(_.a,{to:"/login"})}),T=t(10),I=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},r.a.createElement(T.Animated,{animationIn:"bounceInUp"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome to Auth Connector"),r.a.createElement("p",null,"A simple application that creates an account, and logs you in. This app also features password reset, failed login reset, character validation, and sessions."),r.a.createElement(E.a,{to:"/signup",className:"btn btn-primary"},"Sign-Up"),r.a.createElement(E.a,{to:"/login",className:"btn btn-primary"},"Log-in")))))}}]),a}(n.Component),L=function(){return function(e){return e({type:"CLEAR_MSG",payload:""})}},x=function(e){var a=e.name,t=e.placeholder,n=e.value,o=e.error,l=e.info,s=e.type,c=e.onChange,i=e.onSelect,u=e.disabled,m=e.title;return r.a.createElement("div",{className:"form-group"},m&&r.a.createElement("label",{htmlFor:m},m),r.a.createElement("input",{type:s,className:o?"is-invalid form-control":"form-control",placeholder:t,onSelect:i,onChange:c,name:a,value:n,disabled:u}),o?o&&r.a.createElement("div",{className:"invalid-feedback"},o):l&&r.a.createElement("small",{className:"form-text text-muted"},l))},M=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleSignUpSubmit=function(e){e.preventDefault();var a=t.props,n=a.signUpFullName,r=a.signUpEmail,o=a.signUpPassword,l=a.signUpPassword2;(0,t.props.onCreateUser)({fullName:n,email:r,password:o,password2:l},t.props.history)},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,a=e.clearErrors,t=e.clearFlashMsg;a(),t()}},{key:"render",value:function(){var e=this.props.errors,a=e.fullName,t=e.email,n=e.password,o=e.password2,l=this.props,s=l.onSelectClear,c=l.onFieldChange,i=l.onSignUpFieldClear,u=l.signUpFullName,m=l.signUpEmail,p=l.signUpPassword,d=l.signUpPassword2;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.Animated,{animationIn:"bounceInLeft"},r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSignUpSubmit},r.a.createElement("h3",null,"Please Sign Up!"),r.a.createElement(x,{title:"Full Name",type:"text",name:"fullName",placeholder:"Enter Your Full Name",value:u,onChange:c,onSelect:s,error:a}),r.a.createElement(x,{title:"Email Address",type:"text",name:"email",placeholder:"Enter your email address",value:m,onChange:c,onSelect:s,info:"We'll never share your email with anyone else",error:t}),r.a.createElement(x,{title:"Password",type:"password",name:"password",placeholder:"Enter your password",value:p,onChange:c,onSelect:s,info:"Use 8 or more characters with a mix of letters, numbers & symbols",error:n}),r.a.createElement(x,{title:"Confirm Password",type:"password",name:"password2",placeholder:"Please confirm your password",value:d,onChange:c,onSelect:s,info:"Please make sure your confirmation password matches",error:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("button",{onClick:i,className:"btn btn-danger"},"Reset"))))))}}]),a}(n.Component),P=Object(g.b)(null,{createUser:S,clearErrors:U,clearFlashMsg:L})(M),G=t(27),D=t.n(G),W=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleLoginSubmit=function(e){e.preventDefault();var a=t.props,n=a.loginEmail,r=a.loginPassword,o=t.props,l=o.loginUser,s=o.clearErrors,c=o.clearFlashMsg;l({email:n,password:r},t.props.history),s(),c()},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.errors,a=e.email,t=e.password,n=this.props.flash.msg,o=this.props,l=o.onFieldChange,s=o.onSelectClear,c=o.loginEmail,i=o.loginPassword;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flash"},n&&r.a.createElement(T.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement(D.a,{duration:4e3},r.a.createElement("div",{className:"alert alert-success"},n)))),r.a.createElement(T.Animated,{animationIn:"bounceInUp"},r.a.createElement("form",{onSubmit:this.handleLoginSubmit},r.a.createElement("h3",null,"Please Log-in!"),r.a.createElement(x,{title:"Email Address",type:"text",name:"email",placeholder:"Enter your email address",value:c,onSelect:s,onChange:l,error:a}),r.a.createElement(x,{title:"Password",type:"password",name:"password",placeholder:"Enter your password",value:i,onChange:l,onSelect:s,error:t}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Log-in"),r.a.createElement("small",{className:"form-text text-muted"},"Forgot your ",r.a.createElement(E.a,{to:"/password"},"password"),"?"))))))}}]),a}(n.Component);var V=Object(g.b)(function(e){return{flash:e.flash}},{loginUser:function(e,a){return function(t){b.a.post("/api/users/login",e).then(function(e){if(e.data.msg)t({type:"FLASH_MSG",payload:e.data});else{var n=e.data.token;y(n),localStorage.setItem("jwt",n),t(w(h()(n))),a.push("/dashboard")}}).catch(function(e){t({type:"GET_ERRORS",payload:e.response.data})})}},clearErrors:U,clearFlashMsg:L})(W),H=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))},K=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.auth.user,t=a.fullName,n=a.avatar,o=a.id,l=this.props.auth,s=l.loading,c=l.isAuthenticated;return s||!c?r.a.createElement(H,null):r.a.createElement("div",{className:"dashboard"},r.a.createElement(T.Animated,{animationIn:"bounceIn"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome ",t,"!"),r.a.createElement("img",{className:"rounded-circle",src:n,alt:t,style:{width:"150px",marginRight:"5px"},title:"You must have a Gravatar connected to your email to display an image"}),r.a.createElement("p",null,t,"! Thank you for sigining up! You've successfully logged into the app!"),r.a.createElement("button",{onClick:function(){return e.props.deleteUser(o)},className:"btn btn-danger"},"Delete User"))))}}]),a}(n.Component);var Y=Object(g.b)(function(e){return{auth:e.auth}},{deleteUser:function(e){return function(a){b.a.delete("/api/users/".concat(e)).then(function(e){y(!1),localStorage.clear(),a({type:"SET_CURRENT_USER",payload:{}}),a({type:"FLASH_MSG",payload:e.data})}).catch(function(e){a({type:"GET_ERRORS",payload:e.response.data})})}}})(K),z=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleResetSubmit=function(e){e.preventDefault();var a=t.props,n=a.resetEmail;(0,a.resetUser)({email:n})},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,a=e.clearErrors,t=e.clearFlashMsg;a(),t()}},{key:"render",value:function(){var e=this.props,a=e.resetEmail,t=e.onFieldChange,n=e.onSelectClear,o=e.errors,l=this.props.flash.msg;return r.a.createElement("div",{className:"reset"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flash"},l&&r.a.createElement(T.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement(D.a,{duration:4e3},r.a.createElement("div",{className:"alert alert-success"},l)))),r.a.createElement(T.Animated,{animationIn:"bounceIn"},r.a.createElement("form",{onSubmit:this.handleResetSubmit},r.a.createElement("h3",null,"Password Reset"),r.a.createElement(x,{title:"Enter your email address",name:"email",value:a,info:"Make sure your email address already exist!",type:"text",onChange:t,onSelect:n,error:o.email}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component);var B=Object(g.b)(function(e){return{flash:e.flash}},{resetUser:function(e){return function(a){a(function(e){return e({type:"CLEAR_ERRORS",payload:{}})}),a(function(e){return e({type:"CLEAR_MSG",payload:""})}),b.a.post("/api/users/forgot",e).then(function(e){a({type:"FLASH_MSG",payload:e.data})}).catch(function(e){a({type:"GET_ERRORS",payload:e.response.data})})}},clearErrors:U,clearFlashMsg:L})(z),J=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={password:"",password2:"",errors:{}},t.handleChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleSelect=function(){(0,t.props.clearErrors)()},t.handleResetSubmit=function(e){e.preventDefault();var a=t.state,n=a.password,r=a.password2,o=t.props,l=o.history,s=o.match;(0,o.resetPassword)({password:n,password2:r},s.params.token,l),t.setState({password:"",password2:""})},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,a=e.clearErrors,t=e.clearFlashMsg;a(),t()}},{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadReset)(e.match.params.token)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state,a=e.password,t=e.password2,n=e.errors,o=this.props.reset,l=o.validToken,s=o.loading,c=o.expiredToken,i=o.msg;return l&&!s?r.a.createElement("div",{className:"reset-form"},r.a.createElement("div",{className:"container"},r.a.createElement(T.Animated,{animationIn:"bounceIn"},r.a.createElement("form",{onSubmit:this.handleResetSubmit},r.a.createElement("h3",null,"Password Reset"),r.a.createElement(x,{title:"Enter your new password",name:"password",type:"password",info:"Use 8 or more characters with a mix of letters, numbers & symbols",value:a,onChange:this.handleChange,onSelect:this.handleSelect,error:n.password}),r.a.createElement(x,{title:"Confirm your new password",name:"password2",type:"password",info:"Please make sure your confirmation password matches!",value:t,onChange:this.handleChange,onSelect:this.handleSelect,error:n.password2}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Reset"))))):!l&&s?r.a.createElement(H,null):c?r.a.createElement("div",{className:"reset-error"},r.a.createElement(T.Animated,{animationIn:"bounceIn"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},"Unable to complete request"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},i),r.a.createElement(E.a,{to:"/password",className:"btn btn-primary"},"Get new token")))))):void 0}}]),a}(n.Component);var q=Object(g.b)(function(e){return{reset:e.reset,errors:e.errors,flash:e.flash}},{loadReset:function(e){return function(a){b.a.get("/api/users/reset/".concat(e)).then(function(e){var t=e.data,n=t.validToken,r=t.expiredToken,o=t.msg;n?a({type:"VALID_RESET_TOKEN",payload:n}):r&&a({type:"INVALID_RESET_TOKEN",payload:r}),o&&a({type:"INVALID_RESET_MSG",payload:o})}).catch(function(e){a({type:"GET_ERRORS",payload:e.response.data})})}},resetPassword:function(e,a,t){return function(n){n(function(e){return e({type:"CLEAR_ERRORS",payload:{}})}),n(function(e){return e({type:"CLEAR_MSG",payload:""})}),b.a.post("/api/users/reset/".concat(a),e).then(function(e){n({type:"FLASH_MSG",payload:e.data})}).then(function(){t.push("/login")}).catch(function(e){n({type:"GET_ERRORS",payload:e.response.data})})}},clearErrors:U,clearFlashMsg:L})(J),$=t(14),Q=t(22);var X={isAuthenticated:!1,user:{},loading:!0},Z={errors:{}},ee={msg:""},ae={msg:"",validToken:!1,expiredToken:!1,loading:!0},te=Object($.c)({auth:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(Q.a)({},a,{isAuthenticated:(e=t.payload,!(void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length)),user:t.payload,loading:!1});default:return a}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ERRORS":case"CLEAR_ERRORS":return a.payload;default:return e}},flash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FLASH_MSG":case"CLEAR_MSG":return a.payload;default:return e}},reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"VALID_RESET_TOKEN":return{validToken:a.payload,loading:!1};case"INVALID_RESET_TOKEN":return Object(Q.a)({},e,{expiredToken:a.payload,loading:!1});case"INVALID_RESET_MSG":return Object(Q.a)({},e,{msg:a.payload});default:return e}}}),ne=[t(51).a],re=Object($.e)(te,{},Object($.d)($.a.apply(void 0,ne)));var oe=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={fullName:"",email:"",password:"",password2:"",errors:{}},t.handleFieldChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleClearSelectErrors=function(){(0,t.props.clearErrors)()},t.handleClearSignUp=function(e){var a=t.props.clearErrors;e.preventDefault(),t.setState({fullName:"",email:"",password:"",password2:""}),a()},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){localStorage.jwt&&(y(localStorage.jwt),function(){try{re.dispatch(w(h()(localStorage.jwt)))}catch(e){O()}}())}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this;return r.a.createElement(R.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:"main"},r.a.createElement(j.a,null,r.a.createElement(k.a,{exact:!0,path:"/",component:I}),r.a.createElement(k.a,{path:"/signup",render:function(a){return r.a.createElement(P,Object.assign({},a,{onCreateUser:e.props.createUser,onFieldChange:e.handleFieldChange,onSelectClear:e.handleClearSelectErrors,onSignUpFieldClear:e.handleClearSignUp,signUpFullName:e.state.fullName,signUpEmail:e.state.email,signUpPassword:e.state.password,signUpPassword2:e.state.password2,errors:e.state.errors}))}}),r.a.createElement(k.a,{path:"/login",render:function(a){return r.a.createElement(V,Object.assign({},a,{onFieldChange:e.handleFieldChange,onSelectClear:e.handleClearSelectErrors,loginEmail:e.state.email,loginPassword:e.state.password,errors:e.state.errors}))}}),r.a.createElement(k.a,{path:"/password",render:function(a){return r.a.createElement(B,Object.assign({},a,{onFieldChange:e.handleFieldChange,onSelectClear:e.handleClearSelectErrors,resetEmail:e.state.email,errors:e.state.errors}))}}),r.a.createElement(k.a,{path:"/reset/:token",component:q}),r.a.createElement(k.a,{path:"/spinner",component:H}),r.a.createElement(F,{path:"/dashboard",component:Y})))))}}]),a}(n.Component);var le=Object(g.b)(function(e){return{errors:e.errors}},{clearErrors:U,createUser:S})(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g.a,{store:re},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,a,t){e.exports=t(107)},62:function(e,a,t){}},[[53,2,1]]]);
//# sourceMappingURL=main.4fb080c3.chunk.js.map