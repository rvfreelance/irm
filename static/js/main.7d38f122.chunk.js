(this.webpackJsonpirm=this.webpackJsonpirm||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),s=(n(14),n(8)),c=n(1),l=n(2),y=n(4),h=n(3),u=n(5),d=(n(15),["Mathematics","Physics","Chemistry","Biology","Computers","Science & Technology"]),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(y.a)(this,Object(h.a)(t).call(this,e))).nextKeyword=function(){var e=n.state.keywordArray.length;n.state.keywordArray.length===d.length||n.setState({keyword:d[e].toUpperCase(),keywordArray:[].concat(Object(s.a)(n.state.keywordArray),[d[e]])}),n.render()},n.updateHeading=function(){n.setState({visibilityOff:"visible",visibilityOn:"hidden"})},n.switchInterval=function(){var e=1e3;switch(n.state.keywordArray.length){case 0:default:e=1e3}return e},n.checkKeyword=function(){if(0===n.state.keywordArray.length)setInterval(n.nextKeyword,n.switchInterval()),console.log(1e3*(d.length+2)),setTimeout(n.updateHeading,1e3*(d.length+2));else{if(n.state.keywordArray.length===d.length)return!1;setInterval(n.nextKeyword,1e3)}},n.state={keyword:"RESEARCH",keywordArray:[],visibilityOff:"hidden",visibilityOn:"visible"},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.checkKeyword()}},{key:"render",value:function(){return i.a.createElement("div",{id:"crazy"},i.a.createElement("p",{className:this.state.visibilityOn},"Crazy about ",i.a.createElement("span",null,this.checkKeyword?this.state.keyword:"IRM.")),i.a.createElement("p",{className:this.state.visibilityOff},"WORK with ",i.a.createElement("span",null,"IRM.")),i.a.createElement("p",{className:"".concat(this.state.visibilityOff," smallGreen")},"Institute of RESEARCH MANIACS"))}}]),t}(a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(y.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(w,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7d38f122.chunk.js.map