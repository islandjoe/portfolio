(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(4),r=n(7),s=n(5),i=n(8),o=n(1),h=n(0),l=n.n(h),u=n(6),m=n.n(u),g=(n(15),function(e){return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onFormSubmit()},className:"search-form"},l.a.createElement("input",{type:"text",onChange:function(t){return e.onSearchValueChange(t.target.value)}}),l.a.createElement("div",null,l.a.createElement("button",{disabled:e.isSearching},"Giggle Search"),l.a.createElement("button",{onClick:e.onSingleSearchClick,disabled:e.isSearching},"Tickle Me Funny")))}),k=(n(17),function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(s.a)(t).call(this))).state={searchTerm:"",jokes:[],isFetchingJokes:!1},e.onSearchChange=e.onSearchChange.bind(Object(o.a)(Object(o.a)(e))),e.searchJokes=e.searchJokes.bind(Object(o.a)(Object(o.a)(e))),e}return Object(i.a)(t,e),Object(c.a)(t,[{key:"searchJokes",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;this.setState({isFetchingJokes:!0}),fetch("https://icanhazdadjoke.com/search?term=".concat(this.state.searchTerm,"&limit=").concat(t),{method:"GET",headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){var n=t.results;e.setState({jokes:n,isFetchingJokes:!1})})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e})}},{key:"renderJokes",value:function(){return l.a.createElement("ul",{className:"jokes-list"},this.state.jokes.map(function(e){return l.a.createElement("li",{key:e.id},e.joke)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("img",{className:"logo",src:"./giggle-logo.png",alt:""}),l.a.createElement(g,{onFormSubmit:this.searchJokes,onSearchValueChange:this.onSearchChange,isSearching:this.state.isFetchingJokes,onSingleSearchClick:function(){return e.searchJokes(1)}}),this.state.isFetchingJokes?"Searching...":this.renderJokes())}}]),t}(l.a.Component)),d=document.getElementById("root");m.a.render(l.a.createElement(k,{version:"1.0"}),d)},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.36b5e1ad.chunk.js.map