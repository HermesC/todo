(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);a(64);var n=a(7),r=a(0),o=a.n(r),u=a(11),c=a.n(u),i=a(12),s=a(49),l=a(23),d=a(2),p=a(1),f=a.n(p),m=a(6),g=a(50).create({baseURL:"http://z667651e.beget.tech/"}),h=function(){return Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},v=function(e,t){return Object(m.a)(f.a.mark((function a(){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.put("",{id:e,changes:t});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},A=function(e){return Object(m.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.put("all",{changes:e});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},b=function(e){return Object(m.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.delete("?id=".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},E=function(e){return Object(m.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},O=function(e){return{type:"CREATE",todo:e}},y=function(e){return{type:"DELETE",id:e}},w=function(e,t){return{type:"CHANGE",id:e,changes:t}},I=function(e){return{type:"CHANGE_ALL",changes:e}},_={filter:"all",lastId:0,todos:[]};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODOS":return Object(d.a)(Object(d.a)({},e),{},{lastId:t.todos.length,todos:t.todos});case"CREATE":var a=[].concat(Object(l.a)(e.todos),[t.todo]);return Object(d.a)(Object(d.a)({},e),{},{lastId:e.lastId+1,todos:a});case"DELETE":return Object(d.a)(Object(d.a)({},e),{},{lastId:e.lastId-1,todos:e.todos.filter((function(e){return e.id!==t.id}))});case"CHANGE":return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),t.changes):e}))});case"CHANGE_ALL":return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.map((function(e){return Object(d.a)(Object(d.a)({},e),t.changes)}))});case"DO_ALL":var n=e.todos.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{state:"done"})}));return Object(d.a)(Object(d.a)({},e),{},{todos:n});case"SET_FILTER":return Object(d.a)(Object(d.a)({},e),{},{filter:t.filter});default:return e}};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODOS":case"PUT_TODOS":break;default:return e}},x=Object(i.c)({serverReducer:T,clientReducer:j}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,C=Object(i.e)(x,k(Object(i.a)(s.a))),S=a(51),B=a(52),D=a(16),N=a(62),J=a(61);function H(e,t){var a;e.setDate(e.getDate()+t),a=e.getFullYear();var n=e.getMonth()+1;return a+=n<=9?"-0"+n:"-"+n,a+="-"+e.getDate()}function L(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"urgent",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"!\u0441\u0440\u043e\u0447\u043d\u043e";return e.includes(n)?(e=e.replace(n,""),a):t}function Y(e,t){return e-t<=0}function G(e,t){return e.state===t}function Q(e){var t=e.split(/\D/);return new Date(t[0],--t[1],t[2])}function R(e){return{filter:e.clientReducer.filter,todos:e.clientReducer.todos}}var W=a(53),U=a.n(W),q=function(e){var t=Object(n.c)();function a(e){var a;"doAll"!==e.target.value?t({type:"SET_FILTER",filter:e.target.value}):t((a={state:"done"},function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(a);case 2:e.sent&&t(I(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}return o.a.createElement("div",{className:U.a.Controls},o.a.createElement("label",{htmlFor:"filters"},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"),o.a.createElement("select",{name:"filters",defaultValue:"all",onChange:a},o.a.createElement("option",{value:"all"},"\u0412\u0441\u0435"),o.a.createElement("option",{value:"current"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0435"),o.a.createElement("option",{value:"urgent"},"\u0421\u0440\u043e\u0447\u043d\u044b\u0435"),o.a.createElement("option",{value:"done"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"),o.a.createElement("option",{value:"expired"},"\u041f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u044b\u0435")),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"doAll"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0441\u0435"),o.a.createElement("input",{onClick:a,type:"radio",id:"doAll",name:"filters",value:"doAll"})))},M=a(17),K=a.n(M),z=function(e){Object(N.a)(a,e);var t=Object(J.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).state={inputValue:""},n.handleChange=n.handleChange.bind(Object(D.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(D.a)(n)),n}return Object(B.a)(a,[{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=3,a=this.state.inputValue;this.state.inputValue.includes("!\u0441\u0440\u043e\u0447\u043d\u043e")&&(t=1,a=this.state.inputValue.replace("!\u0441\u0440\u043e\u0447\u043d\u043e","")),this.props.addTask({title:" \u0417\u0430\u0434\u0430\u043d\u0438\u0435 ".concat(this.props.lastId),body:a,deadline:H(new Date,t),state:L(this.state.inputValue,"current","urgent","!\u0441\u0440\u043e\u0447\u043d\u043e")}),this.setState({inputValue:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:K.a.Input},o.a.createElement("div",{className:K.a.title},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),o.a.createElement("div",{className:K.a.form},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{onChange:this.handleChange,type:"text",className:K.a.input,maxLength:250,value:this.state.inputValue,placeholder:"\u041c\u043d\u0435 \u043d\u0443\u0436\u043d\u043e..."})),o.a.createElement(q,null)))}}]),a}(o.a.Component),F=Object(n.b)((function(e){return{lastId:e.clientReducer.lastId+1}}),(function(e){return{createTodo:function(t){return e(O(t))},addTask:function(t){return e((a=t,function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(a);case 2:(n=e.sent)&&t(O(n.newTask));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a}}}))(z),P=a(54),V=a.n(P),X=a(55),Z=a(60);function $(e,t){switch(e.type){case"keypress":!function(e){"Enter"===e.key&&e.target.dataset&&e.target.dataset.type===oe&&e.target.setAttribute("readonly","false")}(e);break;case"dblclick":!function(e){if(e.target.dataset.type===oe){e.target.removeAttribute("readonly");var t=e.target.value.length;e.target.setSelectionRange(t,t),e.target.focus()}}(e);break;case"mouseover":!function(e){e.currentTarget.querySelector("img").style.display="inline"}(e);break;case"mouseout":!function(e){e.currentTarget.querySelector("img").style.display="none"}(e);break;case"click":!function(e){"LABEL"===e.target.tagName&&e.target.blur()}(e);break;case"blur":case"change":ee(e)}}function ee(e){"date"!==e.currentTarget.type&&e.currentTarget.setAttribute("readonly",!0),e.currentTarget.closest("form").querySelector("button").click()}var te=a(4),ae=a.n(te),ne=a(58),re=a.n(ne),oe="changable",ue=function(e){var t=Object(n.c)(),a=Object(r.useRef)("null");var u=Object(Z.a)({initialValues:{title:e.data.title,body:e.data.body,deadline:e.data.deadline},onSubmit:function(n){var r,o,u,c=Object(X.a)(a.current.children);try{for(c.s();!(r=c.n()).done;){var i=r.value;"date"!==i.getAttribute("type")&&i.setAttribute("readOnly",!0)}}catch(s){c.e(s)}finally{c.f()}t((o=e.data.id,u=n,function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(o,u);case 2:e.sent&&t(w(o,u));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}});var c=ae.a.title+" "+function(e){switch(e){case"current":return ae.a.current;case"expired":return ae.a.expired;case"done":return ae.a.done;case"urgent":return ae.a.urgent;default:throw new Error("Todo:mapStateToStyle: unknown todo state - "+e)}}(e.data.state),i=ae.a.deadline,s=ae.a.todoBody,l=o.a.createElement("img",{className:ae.a.trashImg,onClick:function(a){var n;e.data.id&&t((n=e.data.id,function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n);case 2:e.sent&&t(y(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},src:re.a,alt:""});return Y(Q(e.data.deadline),new Date)&&"done"!==e.data.state&&"expired"!==e.data.state&&e.updateTask({state:"expired"}),setInterval((function(){Y(Q(e.data.deadline),new Date)&&"done"!==e.data.state&&"expired"!==e.data.state&&e.updateTask(e.data.id,{state:"expired"})}),1e4),o.a.createElement("div",{className:ae.a.Todo,onDoubleClick:$,onMouseOver:$,onMouseOut:$},o.a.createElement("form",{ref:a,onSubmit:u.handleSubmit,onChange:console.log("hey")},o.a.createElement("div",{className:ae.a.titleWrapper},o.a.createElement("input",{"data-type":oe,onChange:u.handleChange,readOnly:!0,value:u.values.title,onBlur:$,name:"title",className:c}),o.a.createElement("div",{className:ae.a.imgWrapper},l)),o.a.createElement("div",{className:ae.a.deadlineWrapper},o.a.createElement("input",{type:"date",onChange:function(e){u.handleChange(e),$(e)},name:"deadline",value:u.values.deadline,className:i})),o.a.createElement("input",{"data-type":oe,onChange:u.handleChange,readOnly:!0,onBlur:$,name:"body",className:s,value:u.values.body}),o.a.createElement("button",{className:ae.a.submit,type:"submit"},"Submit")))},ce=a(31),ie=a.n(ce),se=function(e){var t=Object(n.d)(R),a=t.filter,r=t.todos,u="",c="",i=null;r.length>=1&&(i=function(e,t){var a=[],n=0,r=0,o=0;return e.forEach((function(e,u){r>=t&&(n++,o=0,r=0,n>t&&(n=0)),r++,a.push({i:e.id,x:o,y:n,w:1,h:1}),o++})),a}(u=function(e,t,a){for(var n=[],r=function(r){var o=e.filter((function(e){return a(e,t[r])}));o.length>=1&&n.push.apply(n,Object(l.a)(o))},o=0;o<t.length;o++)r(o);return n}(u=r.filter((function(e,t){return"all"===a||(a===e.state||"current"===a&&"urgent"===e.state)})),["expired","urgent","current","done"],G),3),c=u.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(ue,{key:e.id,dataGrid:e.id,data:e}))})));var s=i?o.a.createElement(V.a,{layout:i,rowHeight:100,className:ie.a.layout,cols:3,width:1200},c):c;return o.a.createElement("div",{className:ie.a.Todos},s)},le=a(59),de=a.n(le);var pe=function(){var e=Object(n.c)();return Object(r.useEffect)((function(){e(function(){var e=Object(m.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,t({type:"SET_TODOS",todos:a}),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),o.a.createElement("div",{className:de.a.App},o.a.createElement(F,null),o.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(n.a,{store:C},o.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){e.exports={Input:"Input_Input__olBg8",title:"Input_title__1av80",input:"Input_input__2Jxh0",form:"Input_form__3uSHi"}},31:function(e,t,a){e.exports={Todos:"Todos_Todos__2xcB4",layout:"Todos_layout__2E29p"}},4:function(e,t,a){e.exports={Todo:"Todo_Todo__3hwRw",title:"Todo_title__2DKpK",current:"Todo_current__CrAm_",expired:"Todo_expired__2H-_K",done:"Todo_done__1uQDo",urgent:"Todo_urgent__aJP2c",titleWrapper:"Todo_titleWrapper__DX9sF",deadlineWrapper:"Todo_deadlineWrapper__-uJmr",changeInput:"Todo_changeInput__3_mxn",deadline:"Todo_deadline__1Pxf_",todoBody:"Todo_todoBody__YSkAE",edit:"Todo_edit__2a_GV",trash:"Todo_trash__2I_7j",trashImg:"Todo_trashImg__2mCp_",imgWrapper:"Todo_imgWrapper__2jM4L",submit:"Todo_submit__3jJeU"}},53:function(e,t,a){e.exports={Controls:"Controls_Controls__1y9UP"}},58:function(e,t){e.exports="data:image/png;base64,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"},59:function(e,t,a){e.exports={App:"App_App__3SFAK"}},63:function(e,t,a){e.exports=a(103)},64:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.648d0955.chunk.js.map