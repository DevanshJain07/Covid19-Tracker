(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3GHU7",infected:"Cards_infected__1tZih",recovered:"Cards_recovered__-mnE0",deaths:"Cards_deaths__1810W",card:"Cards_card__1BhXs"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(69),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(70),d=a(71),f=a(80),p=a(79),m=a(29),v=a(30),h=a.n(v),b="https://covid19.mathdro.id/api",E=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b,t&&(a="".concat(b,"/countries/").concat(t)),e.prev=2,e.next=5,h.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,l={confirmed:c,recovered:o,deaths:u,lastUpdate:i},e.abrupt("return",l);case 15:return e.prev=15,e.t0=e.catch(2),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(42),g=a(72),_=a.n(g),w=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(m.a)(l,2),f=d[0],p=d[1];Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(f),e()}),[]);var v=f.length?r.a.createElement(C.Line,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",fill:!0,backgroundColor:"rgba(255,0,0,0.5)"}]}}):null,h=a?r.a.createElement(C.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(109, 11, 101, 0.5)","rgba(1, 255, 213, 0.767)","rgba(189, 34, 34, 0.815)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:_.a.container},u?h:v)},O=a(228),j=a(227),k=a(73),D=a.n(k),S=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(O.a,{className:D.a.FormControl},r.a.createElement(j.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},N=a(224),I=a(229),B=a(225),U=a(226),V=a(13),J=a.n(V),L=a(31),R=a.n(L),W=a(32),Z=a.n(W),A=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:J.a.container},r.a.createElement(N.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(N.a,{item:!0,component:I.a,xs:12,md:3,className:Z()(J.a.card,J.a.infected)},r.a.createElement(B.a,null,r.a.createElement(U.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(U.a,{variant:"h5"},r.a.createElement(R.a,{start:0,end:a.value,duration:3,separator:","})),r.a.createElement(U.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(U.a,{variant:"body2"},"Number of active cases of COVID19"))),r.a.createElement(N.a,{item:!0,component:I.a,xs:12,md:3,className:Z()(J.a.card,J.a.recovered)},r.a.createElement(B.a,null,r.a.createElement(U.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(U.a,{variant:"h5"},r.a.createElement(R.a,{start:0,end:n.value,duration:3.5,separator:","})),r.a.createElement(U.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(U.a,{variant:"body2"},"Number of Recoveries of COVID19"))),r.a.createElement(N.a,{item:!0,component:I.a,xs:12,md:3,className:Z()(J.a.card,J.a.deaths)},r.a.createElement(B.a,null,r.a.createElement(U.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(U.a,{variant:"h5"},r.a.createElement(R.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(U.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(U.a,{variant:"body2"},"Number of deaths caused by COVID19"))))):"Loading..."},G=a(78),H=a.n(G),P=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:H.a.container},r.a.createElement(A,{data:t}),r.a.createElement(S,{handleCountryChange:this.handleCountryChange}),r.a.createElement(w,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(P,null),document.getElementById("root"))},72:function(e,t,a){e.exports={container:"Chart_container__aHzZJ"}},73:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3f4WC"}},78:function(e,t,a){e.exports={container:"App_container__1WZcL"}},83:function(e,t,a){e.exports=a(206)}},[[83,1,2]]]);
//# sourceMappingURL=main.6091cd15.chunk.js.map