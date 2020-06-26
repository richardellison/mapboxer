!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="MAPBOXER"},function(e,t,n){"use strict";var r=n(3),o=n(0);t.a={addControl:function(e){const t=new mapboxgl[props.controlName](e.options);this.addControl(t,e.pos)},addSource:function(e){const t=this;t.on("load",()=>t.addSource(e.id,e.source))},addLayer:function(e){const t=this;e.style.source=e.style.source||o.a,t.on("load",()=>t.addLayer(e.style))},addPopup:function(e){const t=this;t.on("load",()=>{const n=e.layer;t.on("click",n,n=>{const o=Object.values(n.lngLat),a=n.features[0],i=Object(r.render)(e.popup,a.properties);(new mapboxgl.Popup).setLngLat(o).setHTML(i).addTo(t)}),t.on("mouseenter",n,()=>t.getCanvas().style.cursor="pointer"),t.on("mouseleave",n,()=>t.getCanvas().style.cursor="")})},addMarker:function(e){const t=this,n=(new mapboxgl.Marker).setLngLat([e.lng,e.lat]);n.getElement().style.cursor="pointer",e.popup&&n.setPopup((new mapboxgl.Popup).setHTML(e.popup)),t.on("load",()=>n.addTo(t))}}},function(e,t,n){"use strict";(function(e){var r=n(1),o=n(0);e.mapboxer={methods:r.a},t.a=function(t,n,a){let i=null;return{renderValue:function(n){console.log("mapboxgl",mapboxgl.version),console.log(n);const a=n.mapProps.style;"object"==typeof a&&(a.sources=a.sources||{},Object.values(a.sources).forEach(e=>{e.hasOwnProperty("tiles")&!Array.isArray(e.tiles)&&(e.tiles=Array(e.tiles))})),mapboxgl.accessToken=n.accessToken||null,n.mapProps.container=t.id,i=e.mapboxer.map=new mapboxgl.Map(n.mapProps),n.source&&r.a.addSource.call(i,{id:o.a,source:n.source}),n.calls.forEach(({methodName:e,args:t})=>r.a[e].call(i,t))},resize:function(e,t){}}}}).call(this,n(5))},function(e,t,n){e.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}var a=RegExp.prototype.test,i=/\S/;function s(e){return!function(e,t){return a.call(e,t)}(i,e)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},u=/\s*/,l=/\s+/,p=/\s*=/,f=/\s*\}/,h=/#|\^|\/|>|\{|&|=|!/;function d(e){this.string=e,this.tail=e,this.pos=0}function g(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function v(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},d.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},g.prototype.push=function(e){return new g(e,this)},g.prototype.lookup=function(e){var t,r,a,i=this.cache;if(i.hasOwnProperty(e))t=i[e];else{for(var s,c,u,l=this,p=!1;l;){if(e.indexOf(".")>0)for(s=l.view,c=e.split("."),u=0;null!=s&&u<c.length;)u===c.length-1&&(p=o(s,c[u])||(r=s,a=c[u],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(a))),s=s[c[u++]];else s=l.view[e],p=o(l.view,e);if(p){t=s;break}l=l.parent}i[e]=t}return n(t)&&(t=t.call(this.view)),t},v.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},v.prototype.parse=function(e,n){var o=this.templateCache,a=e+":"+(n||y.tags).join(":"),i=void 0!==o,c=i?o.get(a):void 0;return null==c&&(c=function(e,n){if(!e)return[];var o,a,i,c=!1,g=[],v=[],m=[],w=!1,b=!1,x="",k=0;function P(){if(w&&!b)for(;m.length;)delete v[m.pop()];else m=[];w=!1,b=!1}function j(e){if("string"==typeof e&&(e=e.split(l,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(r(e[0])+"\\s*"),a=new RegExp("\\s*"+r(e[1])),i=new RegExp("\\s*"+r("}"+e[1]))}j(n||y.tags);for(var C,T,O,E,S,M,U=new d(e);!U.eos();){if(C=U.pos,O=U.scanUntil(o))for(var L=0,_=O.length;L<_;++L)s(E=O.charAt(L))?(m.push(v.length),x+=E):(b=!0,c=!0,x+=" "),v.push(["text",E,C,C+1]),C+=1,"\n"===E&&(P(),x="",k=0,c=!1);if(!U.scan(o))break;if(w=!0,T=U.scan(h)||"name",U.scan(u),"="===T?(O=U.scanUntil(p),U.scan(p),U.scanUntil(a)):"{"===T?(O=U.scanUntil(i),U.scan(f),U.scanUntil(a),T="&"):O=U.scanUntil(a),!U.scan(a))throw new Error("Unclosed tag at "+U.pos);if(S=">"==T?[T,O,C,U.pos,x,k,c]:[T,O,C,U.pos],k++,v.push(S),"#"===T||"^"===T)g.push(S);else if("/"===T){if(!(M=g.pop()))throw new Error('Unopened section "'+O+'" at '+C);if(M[1]!==O)throw new Error('Unclosed section "'+M[1]+'" at '+C)}else"name"===T||"{"===T||"&"===T?b=!0:"="===T&&j(O)}if(P(),M=g.pop())throw new Error('Unclosed section "'+M[1]+'" at '+U.pos);return function(e){for(var t,n=[],r=n,o=[],a=0,i=e.length;a<i;++a)switch((t=e[a])[0]){case"#":case"^":r.push(t),o.push(t),r=t[4]=[];break;case"/":o.pop()[5]=t[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],o=0,a=e.length;o<a;++o)(t=e[o])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(v))}(e,n),i&&o.set(a,c)),c},v.prototype.render=function(e,t,n,r){var o=this.parse(e,r),a=t instanceof g?t:new g(t,void 0);return this.renderTokens(o,a,n,e,r)},v.prototype.renderTokens=function(e,t,n,r,o){for(var a,i,s,c="",u=0,l=e.length;u<l;++u)s=void 0,"#"===(i=(a=e[u])[0])?s=this.renderSection(a,t,n,r):"^"===i?s=this.renderInverted(a,t,n,r):">"===i?s=this.renderPartial(a,t,n,o):"&"===i?s=this.unescapedValue(a,t):"name"===i?s=this.escapedValue(a,t):"text"===i&&(s=this.rawValue(a)),void 0!==s&&(c+=s);return c},v.prototype.renderSection=function(e,r,o,a){var i=this,s="",c=r.lookup(e[1]);if(c){if(t(c))for(var u=0,l=c.length;u<l;++u)s+=this.renderTokens(e[4],r.push(c[u]),o,a);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)s+=this.renderTokens(e[4],r.push(c),o,a);else if(n(c)){if("string"!=typeof a)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(r.view,a.slice(e[3],e[5]),(function(e){return i.render(e,r,o)})))&&(s+=c)}else s+=this.renderTokens(e[4],r,o,a);return s}},v.prototype.renderInverted=function(e,n,r,o){var a=n.lookup(e[1]);if(!a||t(a)&&0===a.length)return this.renderTokens(e[4],n,r,o)},v.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),o=e.split("\n"),a=0;a<o.length;a++)o[a].length&&(a>0||!n)&&(o[a]=r+o[a]);return o.join("\n")},v.prototype.renderPartial=function(e,t,r,o){if(r){var a=n(r)?r(e[1]):r[e[1]];if(null!=a){var i=e[6],s=e[5],c=e[4],u=a;return 0==s&&c&&(u=this.indentPartial(a,c,i)),this.renderTokens(this.parse(u,o),t,r,u,o)}}},v.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},v.prototype.escapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return y.escape(n)},v.prototype.rawValue=function(e){return e[1]};var y={name:"mustache.js",version:"4.0.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){m.templateCache=e},get templateCache(){return m.templateCache}},m=new v;return y.clearCache=function(){return m.clearCache()},y.parse=function(e,t){return m.parse(e,t)},y.render=function(e,n,r,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(a=e)?"array":typeof a)+'" was given as the first argument for mustache#render(template, view, partials)');var a;return m.render(e,n,r,o)},y.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return c[e]}))},y.Scanner=d,y.Context=g,y.Writer=v,y}()},function(e,t,n){"use strict";n.r(t);var r=n(2);HTMLWidgets.widget({name:"mapboxer",type:"output",factory:r.a})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);