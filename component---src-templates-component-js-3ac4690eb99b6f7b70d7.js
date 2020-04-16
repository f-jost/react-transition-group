(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return R});t(70),t(199);var n=t(6),r=t.n(n),i=(t(30),t(4)),s=t.n(i),l=t(0),c=t.n(l),o=t(313),u=t(200),d=t.n(u),p=t(149),m=t(175);var y=function(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")},f=function(e){var a=e.description;return a&&a.childMarkdownRemark&&a.childMarkdownRemark.html},h={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({componentPages:s.a.arrayOf(s.a.shape({displayName:s.a.string.isRequired,codeSandboxId:s.a.string})).isRequired}).isRequired}).isRequired,metadata:s.a.shape({displayName:s.a.string,composes:s.a.arrayOf(s.a.string),description:s.a.object.isRequired})}).isRequired},v=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).renderProp=function(e,t){var n=e.defaultValue,r=e.name,i=e.required,s=a.renderType(e),l=t+"-prop-"+r;return c.a.createElement("section",{key:r},c.a.createElement("h3",{id:l,style:{marginTop:"1.5rem",marginBottom:"0.5rem"}},c.a.createElement("a",{href:"#"+l},c.a.createElement("code",null,r))),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:f(e)}}),c.a.createElement("div",{style:{paddingLeft:0}},c.a.createElement("div",null,"type: ",s&&"pre"===s.type?s:c.a.createElement("code",null,s)),i&&c.a.createElement("div",null,"required"),n&&c.a.createElement("div",null,"default: ",c.a.createElement("code",null,n.value.trim()))))},a}r()(a,e);var t=a.prototype;return t.render=function(){var e=this,a=this.props,t=a.data,n=a.location,r=t.metadata,i=t.site.siteMetadata.componentPages.find(function(e){return e.displayName===r.displayName}).codeSandboxId;return c.a.createElement(p.a,{data:t,location:n},c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement("h1",{id:r.displayName},r.displayName),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:f(r)}}),null!=i&&c.a.createElement(m.a,{codeSandbox:{title:r.displayName+" Component",id:i}}),c.a.createElement("h2",{id:r.displayName+"-props"},c.a.createElement("a",{href:"#"+r.displayName+"-props"},"Props"),r.composes&&c.a.createElement(c.a.Fragment,null," ",c.a.createElement("small",{style:{fontStyle:"italic",fontSize:"70%"}},"Accepts all props from"," ",r.composes.map(function(e){return c.a.createElement("code",{key:e},"<"+e.replace("./","")+">")}).reduce(function(e,a,t){return e.push(a),t<r.composes.length-1&&e.push(", "),e},[])," ","unless otherwise noted."))),r.props.map(function(a){return e.renderProp(a,r.displayName)}))))},t.renderType=function(e){var a,t=this,n=e.type||{},r=g(n.name),i=e.doclets||{};switch(r){case"node":return"any";case"function":return"Function";case"elementType":return"ReactClass<any>";case"dateFormat":return"string | (date: Date, culture: ?string, localizer: Localizer) => string";case"dateRangeFormat":return"(range: { start: Date, end: Date }, culture: ?string, localizer: Localizer) => string";case"object":case"Object":return n.value?c.a.createElement("pre",{className:"shape-prop"},(a=E(n.value),JSON.stringify(a,null,2).replace(/"|'/g,""))):r;case"union":return n.value.reduce(function(e,a,n,r){a="string"==typeof a?{name:a}:a;var i=t.renderType({type:a});return c.a.isValidElement(i)&&(i=c.a.cloneElement(i,{key:n})),e=e.concat(i),n===r.length-1?e:e.concat(" | ")},[]);case"array":case"Array":var s=this.renderType({type:n.value});return c.a.createElement("span",null,"Array<",s,">");case"enum":return this.renderEnum(n);case"custom":return y(i.type||r);default:return r}},t.renderEnum=function(e){var a=e.value||[];return c.a.createElement("code",null,a.join(" | "))},a}(c.a.Component);function g(e){return"func"===e?"function":"bool"===e?"boolean":"object"===e?"Object":e}function E(e){return d()(e,function(e,a,t){e[a.required?t:t+"?"]=function e(a){var t=a.type||{};var n=g(t.name);var r=a.doclets||{};switch(n){case"node":return"any";case"function":return"Function";case"elementType":return"ReactClass<any>";case"object":case"Object":return t.value?E(t.value):n;case"array":case"Array":var i=e({type:t.value});return"Array<"+i+">";case"custom":return y(r.type||n);default:return n}}(a)},{})}v.propTypes=h;var R="1222754543";a.default=v},142:function(e,a,t){var n;e.exports=(n=t(150))&&n.default||n},148:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(4),s=t.n(i),l=t(28),c=t.n(l);t.d(a,"a",function(){return c.a});t(142),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},149:function(e,a,t){"use strict";var n=t(148),r=t(4),i=t.n(r),s=t(0),l=t.n(s),c=t(161),o=t.n(c),u=t(315),d=t(314),p=(t(162),t(163),{data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({componentPages:i.a.arrayOf(i.a.shape({path:i.a.string.isRequired,displayName:i.a.string.isRequired})).isRequired}).isRequired}).isRequired}).isRequired,location:i.a.shape({pathname:i.a.string.isRequired}).isRequired}),m=function(e){var a=e.data,t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,"React Transition Group")),l.a.createElement(u.a,{fixed:"top",bg:"dark",variant:"dark",expand:"md",collapseOnSelect:!0},l.a.createElement(u.a.Brand,{as:n.a,to:"/"},"React Transition Group"),l.a.createElement(u.a.Toggle,null),l.a.createElement(u.a.Collapse,null,l.a.createElement(d.a,{className:"mr-auto"},a.site.siteMetadata.componentPages.map(function(e){var a=e.path,t=e.displayName;return l.a.createElement(d.a.Link,{key:a,as:n.a,to:a,activeClassName:"active"},t)})),l.a.createElement(d.a,null,l.a.createElement(d.a.Link,{as:n.a,to:"/with-react-router",activeClassName:"active"},"With React Router"),l.a.createElement(d.a.Link,{as:n.a,to:"/testing",activeClassName:"active"},"Testing")))),l.a.createElement("div",{style:{paddingTop:"5rem"}},t))};m.propTypes=p,a.a=m},150:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),r=t.n(n),i=t(4),s=t.n(i),l=t(48),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},175:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(4),s=t.n(i),l=t(313),c={codeSandbox:s.a.shape({title:s.a.string.isRequired,id:s.a.string.isRequired}).isRequired},o=function(e){var a=e.codeSandbox;return r.a.createElement("div",{style:{marginBottom:"1.5rem"}},r.a.createElement(l.a,null,r.a.createElement("h2",null,"Example")),r.a.createElement("iframe",{title:a.title,src:"https://codesandbox.io/embed/"+a.id+"?fontsize=14",style:{display:"block",width:"100%",height:"500px",border:0,borderRadius:4,overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))};o.propTypes=c,a.a=o}}]);
//# sourceMappingURL=component---src-templates-component-js-3ac4690eb99b6f7b70d7.js.map