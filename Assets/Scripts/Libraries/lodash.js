/*!
 Lo-Dash 0.10.0 (Custom Build) lodash.com/license
 Build: `lodash backbone plus="unique"`
 Underscore.js 1.4.2 underscorejs.org/LICENSE
*/
;(function(e,t){function s(e){if(e&&e.__wrapped__)return e;if(!(this instanceof s))return new s(e);this.__wrapped__=e}function o(e){var t=e.length,n=20<=t-1;if(n)for(var r={},i=0;++i<t;){var s=e[i]+"";(G.call(r,s)?r[s]:r[s]=[]).push(e[i])}return function(t){if(n){var i=t+"";return G.call(r,i)&&-1<D(r[i],t)}return-1<D(e,t,1)}}function u(e){return e.charCodeAt(0)}function a(e,n){var r=e.b,i=n.b,e=e.a,n=n.a;if(e!==n){if(e>n||e===t)return 1;if(e<n||n===t)return-1}return r<i?-1:1}function f(e,t,n){function r
(){var u=arguments,a=s?this:t;return i||(e=t[o]),n.length&&(u=u.length?n.concat(et.call(u)):n),this instanceof r?(p.prototype=e.prototype,a=new p,u=e.apply(a,u),E(u)?u:a):e.apply(a,u)}var i=w(e),s=!n,o=t;return s&&(n=t),i||(t=e),r}function l(e,n){return e?"function"!=typeof e?function(t){return t[e]}:n!==t?function(t,r,i){return e.call(n,t,r,i)}:e:F}function c(){for(var e={b:"",c:"",e:mt,f:Ct,g:"",h:bt,i:St,j:$,k:"",l:n},t,r=0;t=arguments[r];r++)for(var i in t)e[i]=t[i];t=e.a,e.d=/^[^,]+/.exec(t)
[0],r="var i,x,l="+e.d+",t="+e.d+";if(!"+e.d+")return t;"+e.k+";",e.b?(r+="var m=l.length;i=-1;if(typeof m=='number'){",e.i&&(r+="if(k(l)){l=l.split('')}"),r+="while(++i<m){x=l[i];"+e.b+"}}else {"):e.h&&(r+="var m=l.length;i=-1;if(m&&j(l)){while(++i<m){x=l[i+=''];"+e.g+"}}else {"),e.e||(r+="var u=typeof l=='function'&&s.call(l,'prototype');");if(e.f&&e.l)r+="var q=-1,r=p[typeof l]?n(l):[],m=r.length;while(++q<m){i=r[q];",e.e||(r+="if(!(u&&i=='prototype')){"),r+="x=l[i];"+e.g+"",e.e||(r+="}");else{
r+="for(i in l){";if(!e.e||e.l)r+="if(",e.e||(r+="!(u&&i=='prototype')"),!e.e&&e.l&&(r+="&&"),e.l&&(r+="h.call(l,i)"),r+="){";r+="x=l[i];"+e.g+";";if(!e.e||e.l)r+="}"}r+="}";if(e.e){r+="var f=l.constructor;";for(i=0;7>i;i++)r+="i='"+e.j[i]+"';if(","constructor"==e.j[i]&&(r+="!(f&&f.prototype===l)&&"),r+="h.call(l,i)){x=l[i];"+e.g+"}"}if(e.b||e.h)r+="}";return r+=e.c+";return t",Function("e,h,j,k,p,n,s","return function("+t+"){"+r+"}")(l,G,d,S,Lt,it,Z)}function h(e){return Dt[e]}function p(){}function d
(e){return tt.call(e)==at}function v(e){var t=i;if(!e||"object"!=typeof e||d(e))return t;var n=e.constructor;return(!xt||"function"==typeof e.toString||"string"!=typeof (e+""))&&(!w(n)||n instanceof n)?gt?(Mt(e,function(e,n,r){return t=!G.call(r,n),i}),t===i):(Mt(e,function(e,n){t=n}),t===i||G.call(e,t)):t}function m(e){var t=[];return _t(e,function(e,n){t.push(n)}),t}function g(e,t,n,s,o){if(e==r)return e;n&&(t=i);if(n=E(e)){var u=tt.call(e);if(!kt[u]||wt&&d(e))return e;var a=u==ft,n=a||(u==pt?Ht
(e):n)}if(!n||!t)return n?a?et.call(e):Ot({},e):e;n=e.constructor;switch(u){case lt:case ct:return new n(+e);case ht:case vt:return new n(e);case dt:return n(e.source,W.exec(e))}s||(s=[]),o||(o=[]);for(u=s.length;u--;)if(s[u]==e)return o[u];var f=a?n(e.length):{};return s.push(e),o.push(f),(a?jt:_t)(e,function(e,n){f[n]=g(e,t,r,s,o)}),f}function y(e){var t=[];return Mt(e,function(e,n){w(e)&&t.push(n)}),t.sort()}function b(e,t,s,o){if(e===t)return 0!==e||1/e==1/t;if(e==r||t==r)return e===t;var u=tt
.call(e);if(u!=tt.call(t))return i;switch(u){case lt:case ct:return+e==+t;case ht:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case dt:case vt:return e==t+""}var a=u==ft||u==at;if(wt&&!a&&(a=d(e))&&!d(t))return i;if(!a){if(e.__wrapped__||t.__wrapped__)return b(e.__wrapped__||e,t.__wrapped__||t);if(u!=pt||xt&&("function"!=typeof e.toString&&"string"==typeof (e+"")||"function"!=typeof t.toString&&"string"==typeof (t+"")))return i;var u=e.constructor,f=t.constructor;if(u!=f&&(!w(u)||!(u instanceof u&&w(f)&&
f instanceof f)))return i}s||(s=[]),o||(o=[]);for(u=s.length;u--;)if(s[u]==e)return o[u]==t;var u=-1,f=n,l=0;s.push(e),o.push(t);if(a){l=e.length;if(f=l==t.length)for(;l--&&(f=b(e[l],t[l],s,o)););return f}for(var c in e)if(G.call(e,c)&&(l++,!G.call(t,c)||!b(e[c],t[c],s,o)))return i;for(c in t)if(G.call(t,c)&&!(l--))return i;if(mt)for(;7>++u;)if(c=$[u],G.call(e,c)&&(!G.call(t,c)||!b(e[c],t[c],s,o)))return i;return n}function w(e){return"function"==typeof e}function E(e){return e?Lt[typeof e]:i}function S
(e){return tt.call(e)==vt}function x(e){var t=[];return _t(e,function(e){t.push(e)}),t}function T(e,t,n){var r=-1,s=e?e.length:0,o=i,n=(0>n?st(0,s+n):n)||0;return"number"==typeof s?o=-1<(S(e)?e.indexOf(t,n):D(e,t,n)):jt(e,function(e){if(++r>=n)return!(o=e===t)}),o}function N(e,t,r){var i=n,t=l(t,r);if(Pt(e))for(var r=-1,s=e.length;++r<s&&(i=!!t(e[r],r,e)););else jt(e,function(e,n,r){return i=!!t(e,n,r)});return i}function C(e,t,n){var r=[],t=l(t,n);if(Pt(e))for(var n=-1,i=e.length;++n<i;){var s=e
[n];t(s,n,e)&&r.push(s)}else jt(e,function(e,n,i){t(e,n,i)&&r.push(e)});return r}function k(e,t,n){var r,t=l(t,n);return jt(e,function(e,n,s){if(t(e,n,s))return r=e,i}),r}function L(e,t,n){var r=-1,i=e?e.length:0,s=Array("number"==typeof i?i:0),t=l(t,n);if(Pt(e))for(;++r<i;)s[r]=t(e[r],r,e);else jt(e,function(e,n,i){s[++r]=t(e,n,i)});return s}function A(e,t,n,r){var s=3>arguments.length,t=l(t,r);return jt(e,function(e,r,o){n=s?(s=i,e):t(n,e,r,o)}),n}function O(e,t,n,r){var s=e,o=e?e.length:0,u=3>
arguments.length;if("number"!=typeof o)var a=Bt(e),o=a.length;else St&&S(e)&&(s=e.split(""));return jt(e,function(e,f,l){f=a?a[--o]:--o,n=u?(u=i,s[f]):t.call(r,n,s[f],f,l)}),n}function M(e,t,n){var r,t=l(t,n);if(Pt(e))for(var n=-1,i=e.length;++n<i&&!(r=t(e[n],n,e)););else jt(e,function(e,n,i){return!(r=t(e,n,i))});return!!r}function _(e,t,n){if(e)return t==r||n?e[0]:et.call(e,0,t)}function D(e,t,n){var r=-1,i=e?e.length:0;if("number"==typeof n)r=(0>n?st(0,i+n):n||0)-1;else if(n)return r=H(e,t),e[
r]===t?r:-1;for(;++r<i;)if(e[r]===t)return r;return-1}function P(e,t,n){return e?et.call(e,t==r||n?1:t):[]}function H(e,t,n,r){for(var i=0,s=e?e.length:i,n=n?l(n,r):F,t=n(t);i<s;)r=i+s>>>1,n(e[r])<t?i=r+1:s=r;return i}function B(e,t,n,r){var s=-1,o=e?e.length:0,u=[],a=u;"function"==typeof t&&(r=n,n=t,t=i);var f=!t&&74<o;if(f)var c={};n&&(a=[],n=l(n,r));for(;++s<o;){var r=e[s],h=n?n(r,s,e):r;f&&(a=G.call(c,h+"")?c[h]:c[h]=[]);if(t?!s||a[a.length-1]!==h:0>D(a,h))(n||f)&&a.push(h),u.push(r)}return u
}function j(e,t){return Nt||nt&&2<arguments.length?nt.call.apply(nt,arguments):f(e,t,et.call(arguments,2))}function F(e){return e}function I(e){jt(y(e),function(t){var r=s[t]=e[t];s.prototype[t]=function(){var e=[this.__wrapped__];return Y.apply(e,arguments),e=r.apply(s,e),this.__chain__&&(e=new s(e),e.__chain__=n),e}})}var n=!0,r=null,i=!1,q="object"==typeof exports&&exports,R="object"==typeof global&&global;R.global===R&&(e=R);var U=[],R=new function(){},z=0,W=/\w*$/,X=RegExp("^"+(R.valueOf+"")
.replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),V=/[&<>"']/g,$="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),J=U.concat,K=Math.floor,Q=X.test(Q=Object.getPrototypeOf)&&Q,G=R.hasOwnProperty,Y=U.push,Z=R.propertyIsEnumerable,et=U.slice,tt=R.toString,nt=X.test(nt=et.bind)&&nt,rt=X.test(rt=Array.isArray)&&rt,it=X.test(it=Object.keys)&&it,st=Math.max,ot=Math.min,ut=Math.random,at="[object Arguments]",ft="[object Array]"
,lt="[object Boolean]",ct="[object Date]",ht="[object Number]",pt="[object Object]",dt="[object RegExp]",vt="[object String]",mt,gt,yt=(yt={0:1,length:1},U.splice.call(yt,0,1),yt[0]),bt=n;(function(){function e(){this.x=1}var t=[];e.prototype={valueOf:1,y:1};for(var n in new e)t.push(n);for(n in arguments)bt=!n;mt=!/valueOf/.test(t),gt="x"!=t[0]})(1);var wt=!d(arguments),Et="x"!=et.call("x")[0],St="xx"!="x"[0]+Object("x")[0];try{var xt=("[object Object]",tt.call(e.document||0)==pt)}catch(Tt){}var Nt=
nt&&/\n|Opera/.test(nt+tt.call(e.opera)),Ct=it&&/^.+$|true/.test(it+!!e.attachEvent),kt={};kt[at]=kt["[object Function]"]=i,kt[ft]=kt[lt]=kt[ct]=kt[ht]=kt[pt]=kt[dt]=kt[vt]=n;var Lt={"boolean":i,"function":n,object:n,number:i,string:i,"undefined":i},X={a:"o,v,g",k:"for(var a=1,b=typeof g=='number'?2:arguments.length;a<b;a++){if((l=arguments[a])){",g:"t[i]=x",c:"}}"},R={a:"d,c,w",k:"c=e(c,w)",b:"if(c(x,i,d)===false)return t",g:"if(c(x,i,d)===false)return t"},At={b:r},Ot=c(X);wt&&(d=function(e){return e?
G.call(e,"callee"):i});var Mt=c(R,At,{l:i}),_t=c(R,At),Dt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"},X=c(X,{g:"if(t[i]==null)"+X.g}),Pt=rt||function(e){return tt.call(e)==ft};w(/x/)&&(w=function(e){return"[object Function]"==tt.call(e)});var Ht=Q?function(e){if(!e||"object"!=typeof e)return i;var t=e.valueOf,n="function"==typeof t&&(n=Q(t))&&Q(n);return n?e==n||Q(e)==n&&!d(e):v(e)}:v,Bt=it?function(e){return"function"==typeof e&&Z.call(e,"prototype")?m(e):E(e)?it(e):[]}:m,jt=c(
R);s.VERSION="0.10.0",s.assign=Ot,s.bind=j,s.bindAll=function(e){for(var t=arguments,n=1<t.length?0:(t=y(e),-1),r=t.length;++n<r;){var i=t[n];e[i]=j(e[i],e)}return e},s.chain=function(e){return e=new s(e),e.__chain__=n,e},s.clone=g,s.contains=T,s.countBy=function(e,t,n){var r={},t=l(t,n);return jt(e,function(e,n,i){n=t(e,n,i),G.call(r,n)?r[n]++:r[n]=1}),r},s.defaults=X,s.escape=function(e){return e==r?"":(e+"").replace(V,h)},s.every=N,s.filter=C,s.find=k,s.first=_,s.forEach=jt,s.forIn=Mt,s.forOwn=
_t,s.functions=y,s.groupBy=function(e,t,n){var r={},t=l(t,n);return jt(e,function(e,n,i){n=t(e,n,i),(G.call(r,n)?r[n]:r[n]=[]).push(e)}),r},s.has=function(e,t){return e?G.call(e,t):i},s.identity=F,s.indexOf=D,s.initial=function(e,t,n){return e?et.call(e,0,-(t==r||n?1:t)):[]},s.invoke=function(e,t){var n=et.call(arguments,2),r="function"==typeof t,i=[];return jt(e,function(e){i.push((r?t:e[t]).apply(e,n))}),i},s.isArguments=d,s.isArray=Pt,s.isEmpty=function(e){var t=n;if(!e)return t;var r=tt.call(
e),s=e.length;return r==ft||r==vt||r==at||wt&&d(e)||r==pt&&"number"==typeof s&&w(e.splice)?!s:(_t(e,function(){return t=i}),t)},s.isEqual=b,s.isFunction=w,s.isObject=E,s.isPlainObject=Ht,s.isRegExp=function(e){return tt.call(e)==dt},s.isString=S,s.keys=Bt,s.last=function(e,t,n){if(e){var i=e.length;return t==r||n?e[i-1]:et.call(e,-t||i)}},s.lastIndexOf=function(e,t,n){var r=e?e.length:0;for("number"==typeof n&&(r=(0>n?st(0,r+n):ot(n,r-1))+1);r--;)if(e[r]===t)return r;return-1},s.map=L,s.max=function(
e,t,n){var r=-Infinity,i=-1,s=e?e.length:0,o=r;if(t||!Pt(e))t=!t&&S(e)?u:l(t,n),jt(e,function(e,n,i){n=t(e,n,i),n>r&&(r=n,o=e)});else for(;++i<s;)e[i]>o&&(o=e[i]);return o},s.min=function(e,t,n){var r=Infinity,i=-1,s=e?e.length:0,o=r;if(t||!Pt(e))t=!t&&S(e)?u:l(t,n),jt(e,function(e,n,i){n=t(e,n,i),n<r&&(r=n,o=e)});else for(;++i<s;)e[i]<o&&(o=e[i]);return o},s.mixin=I,s.pick=function(e,t,n){var r={};if("function"!=typeof t)for(var i=0,s=J.apply(U,arguments),o=s.length;++i<o;){var u=s[i];u in e&&(r
[u]=e[u])}else t=l(t,n),Mt(e,function(e,n,i){t(e,n,i)&&(r[n]=e)});return r},s.reduce=A,s.reduceRight=O,s.reject=function(e,t,n){return t=l(t,n),C(e,function(e,n,r){return!t(e,n,r)})},s.rest=P,s.result=function(e,t){var n=e?e[t]:r;return w(n)?e[t]():n},s.shuffle=function(e){var t=-1,n=Array(e?e.length:0);return jt(e,function(e){var r=K(ut()*(++t+1));n[t]=n[r],n[r]=e}),n},s.size=function(e){var t=e?e.length:0;return"number"==typeof t?t:Bt(e).length},s.some=M,s.sortBy=function(e,t,n){var r=[],t=l(t,
n);jt(e,function(e,n,i){r.push({a:t(e,n,i),b:n,c:e})}),e=r.length;for(r.sort(a);e--;)r[e]=r[e].c;return r},s.sortedIndex=H,s.toArray=function(e){return e&&"number"==typeof e.length?(Et?S(e):"string"==typeof e)?e.split(""):et.call(e):x(e)},s.uniq=B,s.uniqueId=function(e){var t=z++;return e?e+t:t},s.values=x,s.without=function(e){for(var t=-1,n=e?e.length:0,r=o(arguments),i=[];++t<n;){var s=e[t];r(s)||i.push(s)}return i},s.all=N,s.any=M,s.collect=L,s.detect=k,s.drop=P,s.each=jt,s.extend=Ot,s.foldl=
A,s.foldr=O,s.head=_,s.include=T,s.inject=A,s.methods=y,s.select=C,s.tail=P,s.take=_,s.unique=B,I(s),s.prototype.chain=function(){return this.__chain__=n,this},s.prototype.value=function(){return this.__wrapped__},jt("pop push reverse shift sort splice unshift".split(" "),function(e){var t=U[e];s.prototype[e]=function(){var e=this.__wrapped__;return t.apply(e,arguments),yt&&e.length===0&&delete e[0],this.__chain__&&(e=new s(e),e.__chain__=n),e}}),jt(["concat","join","slice"],function(e){var t=U[e
];s.prototype[e]=function(){var e=t.apply(this.__wrapped__,arguments);return this.__chain__&&(e=new s(e),e.__chain__=n),e}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e._=s,define(function(){return s})):q?"object"==typeof module&&module&&module.exports==q?(module.exports=s)._=s:q._=s:e._=s})(this);