(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n(54)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/Resurs_26.2d7a7cbb.png"},function(t,e,n){},function(t,e,n){var a={"./embl_D.png":28,"./embl_G.png":29,"./embl_H.png":30,"./embl_R.png":31,"./embl_S.png":32};function o(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id=27},function(t,e,n){t.exports=n.p+"static/media/embl_D.6b31582c.png"},function(t,e,n){t.exports=n.p+"static/media/embl_G.6c6476b1.png"},function(t,e,n){t.exports=n.p+"static/media/embl_H.bcbca9db.png"},function(t,e,n){t.exports=n.p+"static/media/embl_R.95e45a02.png"},function(t,e,n){t.exports=n.p+"static/media/embl_S.a4bf028f.png"},function(t,e,n){},function(t,e,n){},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),s=n.n(r),c=(n(22),n(2)),i=n(3),l=n(5),p=n(4),u=n(6);n(23),n(24);function m(t){var e;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(t))return 3==(e=t.substring(1).split("")).length&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),"rgba("+[(e="0x"+e.join(""))>>16&255,e>>8&255,255&e].join(",")+",0.3)";throw new Error("Bad Hex")}var h=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return this.divStyle={backgroundColor:this.props.val.color,height:this.props.val.points},this.opacStyle={backgroundColor:m(this.props.val.color),color:this.props.val.fontcolor},o.a.createElement("div",{className:"opacitor",style:this.opacStyle},o.a.createElement("div",{style:this.divStyle,className:"Beaker"},o.a.createElement("p",{style:this.opacStyle},this.props.val.points)))}}]),e}(a.Component),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).total=[],n.scores=[{name:"slytherin",points:0,color:"#005E2C",house:"S",fontcolor:"#CCC"},{name:"ravenclaw",points:0,color:"#025d8c",house:"R",fontcolor:"#FFF"},{name:"gryffindor",points:0,color:"#A70200",house:"H",fontcolor:"#C2A41E"},{name:"hufflepuff",points:0,color:"#C2A41E",house:"G",fontcolor:"#000"}],n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return this.scores.map(function(t){return t.points=0}),this.props.stats.forEach(function(e){"S"===e.house&&(t.scores[0].points+=e.points),"R"===e.house&&(t.scores[1].points+=e.points),"H"===e.house&&(t.scores[3].points+=e.points),"G"===e.house&&(t.scores[2].points+=e.points)}),this.total=this.scores.map(function(t){return o.a.createElement(h,{val:t})}),o.a.createElement("div",{className:"diagram"},o.a.createElement("div",{className:"beaker-container"},this.total),o.a.createElement("div",{className:"image"},o.a.createElement("img",{src:n(25),alt:"lol"})))}}]),e}(a.Component),b=(n(26),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("li",null,o.a.createElement("div",{className:"team-info"},o.a.createElement("img",{className:"label-img",src:n(27)("./embl_"+this.props.content.house+".png"),alt:"kek"}),o.a.createElement("p",null,this.props.index+". "+this.props.content.name+" "+this.props.content.points)))}}]),e}(a.Component)),d=(n(33),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).total=[],n}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return this.total=this.props.stats.map(function(t,e){if(console.log(t),!1===t.removed)return o.a.createElement(b,{content:t,index:e})}),o.a.createElement("div",{className:"leaderBord"},o.a.createElement("h2",{className:"leaderBoard-capture"},"TOP"),o.a.createElement("div",{className:"leaderBord-inner"},o.a.createElement("ul",null,this.total)))}}]),e}(a.Component)),v=(n(34),n(15)),g=n.n(v),E=[],O=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(p.a)(e).call(this))).state={stats:E},console.log(E),t}return Object(u.a)(e,t),Object(i.a)(e,[{key:"tick",value:function(){var t=this;g.a.get("https://ksis.brakh.men/api/teams/all").then(function(e){t.setState({stats:e.data}),console.log(e.data)})}},{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval(function(){t.tick()},1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{stats:this.state.stats}),o.a.createElement(d,{stats:this.state.stats}),o.a.createElement("p",{className:"advertisement"},"Powered by Brakhmen"))}}]),e}(a.Component);s.a.render(o.a.createElement(O,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.b417e99d.chunk.js.map