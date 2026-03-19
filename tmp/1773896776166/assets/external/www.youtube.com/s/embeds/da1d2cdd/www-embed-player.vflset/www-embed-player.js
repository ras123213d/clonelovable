(function(){'use strict';var r,aa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
var ea=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),fa;
if(typeof Object.setPrototypeOf=="function")fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=fa;
function v(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ha=b.prototype}
function ma(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:ma(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function oa(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function pa(a){return qa(a,a)}
function qa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa=typeof Object.assign=="function"?Object.assign:function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||sa});
function ta(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");}
function A(){this.Y=!1;this.J=null;this.i=void 0;this.h=1;this.G=this.P=0;this.oa=this.I=null}
function ua(a){if(a.Y)throw new TypeError("Generator is already running");a.Y=!0}
A.prototype.ja=function(a){this.i=a};
function va(a,b){a.I={exception:b,ee:!0};a.h=a.P||a.G}
A.prototype.getNextAddressJsc=function(){return this.h};
A.prototype.getYieldResultJsc=function(){return this.i};
A.prototype.return=function(a){this.I={return:a};this.h=this.G};
A.prototype["return"]=A.prototype.return;A.prototype.La=function(a){this.I={v:a};this.h=this.G};
A.prototype.jumpThroughFinallyBlocks=A.prototype.La;A.prototype.yield=function(a,b){this.h=b;return{value:a}};
A.prototype.yield=A.prototype.yield;A.prototype.Sa=function(a,b){a=z(a);var c=a.next();ta(c);if(c.done)this.i=c.value,this.h=b;else return this.J=a,this.yield(c.value,b)};
A.prototype.yieldAll=A.prototype.Sa;A.prototype.v=function(a){this.h=a};
A.prototype.jumpTo=A.prototype.v;A.prototype.u=function(){this.h=0};
A.prototype.jumpToEnd=A.prototype.u;A.prototype.o=function(a,b){this.P=a;b!=void 0&&(this.G=b)};
A.prototype.setCatchFinallyBlocks=A.prototype.o;A.prototype.Ma=function(a){this.P=0;this.G=a||0};
A.prototype.setFinallyBlock=A.prototype.Ma;A.prototype.A=function(a,b){this.h=a;this.P=b||0};
A.prototype.leaveTryBlock=A.prototype.A;A.prototype.j=function(a){this.P=a||0;a=this.I.exception;this.I=null;return a};
A.prototype.enterCatchBlock=A.prototype.j;A.prototype.aa=function(a,b,c){c?this.oa[c]=this.I:this.oa=[this.I];this.P=a||0;this.G=b||0};
A.prototype.enterFinallyBlock=A.prototype.aa;A.prototype.fa=function(a,b){b=this.oa.splice(b||0)[0];(b=this.I=this.I||b)?b.ee?this.h=this.P||this.G:b.v!=void 0&&this.G<b.v?(this.h=b.v,this.I=null):this.h=this.G:this.h=a};
A.prototype.leaveFinallyBlock=A.prototype.fa;A.prototype.Ea=function(a){return new wa(a)};
A.prototype.forIn=A.prototype.Ea;function wa(a){this.j=a;this.h=[];for(var b in a)this.h.push(b);this.h.reverse()}
wa.prototype.i=function(){for(;this.h.length>0;){var a=this.h.pop();if(a in this.j)return a}return null};
wa.prototype.getNext=wa.prototype.i;function xa(a){this.h=new A;this.i=a}
function ya(a,b){ua(a.h);var c=a.h.J;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.h.J,c);ta(e);if(!e.done)return a.h.Y=!1,e;var f=e.value}catch(g){return a.h.J=null,va(a.h,g),Aa(a)}a.h.J=null;d.call(a.h,f);return Aa(a)}
function Aa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.Y=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.Y=!1;if(a.h.I){b=a.h.I;a.h.I=null;if(b.ee)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){ua(a.h);a.h.J?b=za(a,a.h.J.next,b,a.h.ja):(a.h.ja(b),b=Aa(a));return b};
this.throw=function(b){ua(a.h);a.h.J?b=za(a,a.h.J["throw"],b,a.h.ja):(va(a.h,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ca(new Ba(new xa(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ea});
u("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return Da(ma(this))}});
return a});
function Da(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
u("Promise",function(a){function b(g){this.D=0;this.Da=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.P),reject:g(this.j)}};
b.prototype.P=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.o(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.fa(h,g):this.o(g)};
b.prototype.j=function(g){this.I(2,g)};
b.prototype.o=function(g){this.I(1,g)};
b.prototype.I=function(g,h){if(this.D!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.D);this.D=g;this.Da=h;this.D===2&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.Da)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.Da;return k(g)};
b.prototype.A=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.aa=function(g){var h=this.i();g.Fc(h.resolve,h.reject)};
b.prototype.fa=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,n){return typeof t=="function"?function(x){try{l(t(x))}catch(y){m(y)}}:n}
var l,m,p=new b(function(t,n){l=t;m=n});
this.Fc(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Fc=function(g,h){function k(){switch(l.D){case 1:g(l.Da);break;case 2:h(l.Da);break;default:throw Error("Unexpected state: "+l.D);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).Fc(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(y){t[x]=y;n--;n==0&&l(t)}}
var t=[],n=0;do t.push(void 0),n++,d(k.value).Fc(p(t.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||la});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;v(b,Error);b.prototype.name="SuppressedError";return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ra(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return Da(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ra(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
function Fa(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Fa(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
u("Math.imul",function(a){return a?a:function(b,c){b=Number(b);c=Number(c);var d=b&65535,e=c&65535;return d*e+((b>>>16&65535)*e+d*(c>>>16&65535)<<16>>>0)|0}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ia=Ia||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ja(a,b){var c=G("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function G(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ka(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ma(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(Math.random()*1E9>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a){return a}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function Za(a){var b=C.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function $a(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function ab(a){var b=a.url;a=a.Rj;this.i=b;this.o=a;this.j=(new Date).getTime()-17040672E5;this.h={};for(var c=/[?&]([^&=]+)=([^&]*)/g;a=c.exec(b);)this.h[a[1]]=a[2]}
function bb(a){a=a.o;if(!a)return"";var b=$a("uap",a.platform)+$a("uapv",a.platformVersion)+$a("uafv",a.uaFullVersion)+$a("uaa",a.architecture)+$a("uam",a.model)+$a("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function cb(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function db(a){function b(f){a.error=a.rb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.rb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.rb?Promise.reject(a.error):Promise.resolve();
if(a.rb)throw a.error;}
var d,e=0;c()}
;function eb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,eb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Ya(eb,Error);eb.prototype.name="CustomError";var fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var gb=globalThis.trustedTypes,hb;function ib(){var a=null;if(!gb)return a;try{var b=function(c){return c};
a=gb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function kb(){hb===void 0&&(hb=ib());return hb}
;function lb(a){this.h=a}
lb.prototype.toString=function(){return this.h+""};
function mb(a){var b=kb();a=b?b.createScriptURL(a):a;return new lb(a)}
function nb(a){if(a instanceof lb)return a.h;throw Error("");}
;var ob=pa([""]),pb=qa(["\x00"],["\\0"]),qb=qa(["\n"],["\\n"]),rb=qa(["\x00"],["\\u0000"]);function sb(a){return a.toString().indexOf("`")===-1}
sb(function(a){return a(ob)})||sb(function(a){return a(pb)})||sb(function(a){return a(qb)})||sb(function(a){return a(rb)});function tb(a){this.h=a}
tb.prototype.toString=function(){return this.h};
var ub=new tb("about:invalid#zClosurez");function vb(a){this.Nf=a}
function wb(a){return new vb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var xb=[wb("data"),wb("http"),wb("https"),wb("mailto"),wb("ftp"),new vb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],yb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function zb(a){if(a instanceof tb)if(a instanceof tb)a=a.h;else throw Error("");else a=yb.test(a)?a:void 0;return a}
;function Ab(a,b){b=zb(b);b!==void 0&&(a.href=b)}
;function Bb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};function Db(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};
function Fb(a){var b=kb();a=b?b.createScript(a):a;return new Eb(a)}
function Gb(a){if(a instanceof Eb)return a.h;throw Error("");}
;function Hb(a){var b=Db(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Ib(a,b){a.src=nb(b);Hb(a)}
;function Jb(){this.h=Kb[0].toLowerCase()}
Jb.prototype.toString=function(){return this.h};function Lb(a){var b="true".toString(),c=[new Jb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Jb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Mb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Nb(a,b){if(b instanceof lb)a.href=nb(b).toString(),a.rel="stylesheet";else{if(Mb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=zb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Ob=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Pb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Qb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Rb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Tb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Pb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ub(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Vb(a,b){b=Ob(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Wb(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Xb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Yb(a,b){return a>b?1:a<b?-1:0}
;function Zb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function $b(a){var b=G("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,bc[c])c=bc[c];else{c=String(c);if(!bc[c]){var f=/function\s+([^\(]+)/m.exec(c);bc[c]=f?f[1]:"[Anonymous]"}c=bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function ac(a,b){b||(b={});b[cc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[cc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=ac(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[cc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=ac(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function cc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var bc={};function dc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function ec(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hc(a){return a?decodeURI(a):a}
function ic(a){return hc(a.match(fc)[3]||null)}
function jc(a){return hc(a.match(fc)[5]||null)}
function kc(a){var b=a.match(fc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function lc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function mc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?dc(e):"")}}}
function nc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)nc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function oc(a){var b=[],c;for(c in a)nc(c,a[c],b);return b.join("&")}
function pc(a,b){b=oc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function qc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var rc=/#|$/,sc=/[?&]($|#)/;function tc(a,b){for(var c=a.search(rc),d=0,e,f=[];(e=qc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(sc,"$1")}
;function uc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function vc(a,b,c){c=c===void 0?Error():c;var d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,this.constructor.prototype)}
v(vc,Error);function wc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function xc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?xc.apply(null,d):wc(d)}}
;function H(){this.K=this.K;this.I=this.I}
H.prototype.K=!1;H.prototype.dispose=function(){this.K||(this.K=!0,this.da())};
H.prototype[Symbol.dispose]=function(){this.dispose()};
function yc(a,b){a.addOnDisposeCallback(Va(wc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.K?b!==void 0?a.call(b):a():(this.I||(this.I=[]),b&&(a=a.bind(b)),this.I.push(a))};
H.prototype.da=function(){if(this.I)for(;this.I.length;)this.I.shift()()};function zc(){var a=Ac();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:uc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Bc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Bc(f))}))})}
function Bc(a){H.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Ub=this.vm.p;this.j=this.qc.bind(this);this.addOnDisposeCallback(function(){return void Cc(b)})}
v(Bc,H);Bc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.Na&&{c:a.Na},a.hd&&{s:a.hd},a.Jd!==void 0&&{p:a.Jd}))};
Bc.prototype.qc=function(a){this.vm.e(a)};
Bc.prototype.Gc=function(a,b){return this.vm.c(a,b,!1)};
function Cc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
Bc.prototype.xc=function(){return this.vm.l()};function Dc(a){var b,c,d={Na:a.c,qd:a.e,Wf:(b=a.mc)!=null?b:!1,Xf:(c=a.me)!=null?c:!1};a.co&&(d.Dc={Td:a.co.c,Ue:a.co.a,Fg:a.co.s});return d}
function Ec(a){return function(){var b;return B(function(c){if(c.h==1)return c.yield(a(),2);b=c.i;return c.return({f:function(){return b.Tb.promise},
c:function(d){if(d>150)var e=!1;else try{b.cache=new Fc(d,b.logger),e=!0}catch(f){Gc(b,new vc(22,"GBJ:init",f)),e=!1}return e},
m:function(d){return b.nb(Dc(d))},
mws:function(d){return b.Uc(Dc(d))}})})}}
function Hc(a,b){var c=Ac();c=c===void 0?"bevasrsg":c;b={s:function(f){var g;return a.snapshot(Object.assign({},f.c&&{Na:f.c},f.s&&{hd:f.s},{Oj:(g=f.p)!=null?g:!0}))},
e:function(f){var g;return void((g=a.qc)==null?void 0:g.call(a,f))},
c:function(f,g){return a.Gc(f,g)},
p:a.Ub,l:function(){return a.xc()},
wpc:b?Ec(b):void 0};var d=window===window.top?window:uc()?window:window.top,e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(c=z(e.nqfbel),d=c.next();!d.done;d=c.next())d=d.value,d(b);e.nqfbel=void 0}else e={},e=(e.bevasrs=b,e.nqfbel=void 0,e),d[c]=e}
;function Ic(a){var b=b===void 0?53:b;var c=[];Jc(a,Kc,6).forEach(function(d){Lc(d,2)<=b&&c.push(Lc(d,1))});
return c}
function Mc(a){var b=b===void 0?53:b;var c=[];Jc(a,Kc,6).forEach(function(d){Lc(d,2)>b&&c.push(Lc(d,1))});
return c}
;function Nc(a){a.then(function(){},function(){})}
function Oc(){H.apply(this,arguments);this.i=1}
v(Oc,H);Oc.prototype.share=function(){if(this.K)throw Error("E:AD");this.i++;return this};
Oc.prototype.dispose=function(){--this.i||H.prototype.dispose.call(this)};function Pc(a){return{fieldType:2,fieldName:a}}
function Qc(a){return{fieldType:3,fieldName:a}}
;function Rc(a){this.h=a;a.ac("/client_streamz/bg/frs",Qc("mk"))}
Rc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Sc(a){this.h=a;a.ac("/client_streamz/bg/wrl",Qc("mn"),Pc("ac"),Pc("sc"),Qc("rk"),Qc("mk"))}
Sc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Tc(a){this.h=a;a.Db("/client_streamz/bg/ec",Qc("en"),Qc("mk"))}
Tc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/ec",a,b)};
function Uc(a){this.h=a;a.ac("/client_streamz/bg/el",Qc("en"),Qc("mk"))}
Uc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Vc(a){this.h=a;a.Db("/client_streamz/bg/cec",Pc("ec"),Qc("mk"))}
Vc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/cec",a,b)};
function Wc(a){this.h=a;a.Db("/client_streamz/bg/po/csc",Pc("cs"),Qc("mk"))}
Wc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/po/csc",a,b)};
function Xc(a){this.h=a;a.Db("/client_streamz/bg/po/ctav",Qc("av"),Qc("mk"))}
Xc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/po/ctav",a,b)};
function Yc(a){this.h=a;a.Db("/client_streamz/bg/po/cwsc",Qc("su"),Qc("mk"))}
Yc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/po/cwsc",a,b)};
function Zc(a){this.h=a;a.ac("/client_streamz/bg/od/p",Qc("mk"))}
Zc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/od/p",a,b)};
function $c(a){this.h=a;a.ac("/client_streamz/bg/od/n",Qc("et"),Qc("mk"))}
$c.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/od/n",a,b,c)};var ad,bd=typeof String.prototype.isWellFormed==="function",cd=typeof TextEncoder!=="undefined";
function dd(a){var b=!1;b=b===void 0?!1:b;if(cd){if(b&&(bd?!a.isWellFormed():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))throw Error("Found an unpaired surrogate");a=(ad||(ad=new TextEncoder)).encode(a)}else{for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var f=a.charCodeAt(e);if(f<128)d[c++]=f;else{if(f<2048)d[c++]=f>>6|192;else{if(f>=55296&&f<=57343){if(f<=56319&&e<a.length){var g=a.charCodeAt(++e);if(g>=56320&&g<=57343){f=(f-55296)*1024+g-56320+
65536;d[c++]=f>>18|240;d[c++]=f>>12&63|128;d[c++]=f>>6&63|128;d[c++]=f&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");f=65533}d[c++]=f>>12|224;d[c++]=f>>6&63|128}d[c++]=f&63|128}}a=c===d.length?d:d.subarray(0,c)}return a}
;function ed(a){D.setTimeout(function(){throw a;},0)}
;function fd(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var gd=Ja(610401301,!1),hd=Ja(748402147,!0);function id(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var jd,kd=D.navigator;jd=kd?kd.userAgentData||null:null;function ld(a){if(!gd||!jd)return!1;for(var b=0;b<jd.brands.length;b++){var c=jd.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function J(a){return id().indexOf(a)!=-1}
;function md(){return gd?!!jd&&jd.brands.length>0:!1}
function nd(){return md()?!1:J("Opera")}
function od(){return J("Firefox")||J("FxiOS")}
function pd(){return md()?ld("Chromium"):(J("Chrome")||J("CriOS"))&&!(md()?0:J("Edge"))||J("Silk")}
;function qd(){return gd?!!jd&&!!jd.platform:!1}
function rd(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function sd(a){sd[" "](a);return a}
sd[" "]=function(){};var td=nd(),ud=md()?!1:J("Trident")||J("MSIE"),vd=J("Edge"),wd=J("Gecko")&&!(id().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),xd=id().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");xd&&J("Mobile");qd()||J("Macintosh");qd()||J("Windows");(qd()?jd.platform==="Linux":J("Linux"))||qd()||J("CrOS");var yd=qd()?jd.platform==="Android":J("Android");rd();J("iPad");J("iPod");rd()||J("iPad")||J("iPod");id().toLowerCase().indexOf("kaios");od();var zd=rd()||J("iPod"),Ad=J("iPad");!J("Android")||pd()||od()||nd()||J("Silk");pd();var Bd=J("Safari")&&!(pd()||(md()?0:J("Coast"))||nd()||(md()?0:J("Edge"))||(md()?ld("Microsoft Edge"):J("Edg/"))||(md()?ld("Opera"):J("OPR"))||od()||J("Silk")||J("Android"))&&!(rd()||J("iPad")||J("iPod"));var Cd={},Dd=null;function Ed(a,b){La(a);b===void 0&&(b=0);Fd();b=Cd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Gd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Hd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Hd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Dd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Fd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Fd(){if(!Dd){Dd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Cd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Dd[f]===void 0&&(Dd[f]=e)}}}}
;var Id=typeof Uint8Array!=="undefined",Jd=!ud&&typeof btoa==="function",Kd=/[-_.]/g,Ld={"-":"+",_:"/",".":"="};function Md(a){return Ld[a]||""}
function Nd(a){if(!Jd)return Gd(a);a=Kd.test(a)?a.replace(Kd,Md):a;a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
var Od={};function Pd(a,b){Qd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
function Rd(){return Sd||(Sd=new Pd(null,Od))}
function Td(a){return new Uint8Array(Ud(a)||0)}
Pd.prototype.sizeBytes=function(){var a=Ud(this);return a?a.length:0};
function Ud(a){Qd(Od);var b=a.h;b==null||Id&&b!=null&&b instanceof Uint8Array||(typeof b==="string"?b=Nd(b):(Ka(b),b=null));return b==null?b:a.h=b}
var Sd;function Qd(a){if(a!==Od)throw Error("illegal external caller");}
;var Vd=void 0;function Wd(a){a=Error(a);Zb(a,"warning");return a}
function Xd(a,b){if(a!=null){var c;var d=(c=Vd)!=null?c:Vd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),Zb(a,"incident"),ed(a))}}
;function Yd(){return typeof BigInt==="function"}
;var Zd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function $d(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var ae=$d("jas",void 0,!0),ce=$d(void 0,"1oa"),de=$d(void 0,Symbol()),ee=$d(void 0,"0ub"),fe=$d(void 0,"0ubs"),ge=$d(void 0,"0ubsb"),he=$d(void 0,"0actk"),ie=$d("m_m","xj",!0),je=$d(void 0,"vps"),ke=$d();Math.max.apply(Math,oa(Object.values({Ti:1,Si:2,Ri:4,Xi:8,Zi:16,Vi:32,bh:64,Pi:128,hh:256,Yi:512,ih:1024,Qi:2048,Wi:4096,Ui:8192})));var le={Lf:{value:0,configurable:!0,writable:!0,enumerable:!1}},me=Object.defineProperties,K=Zd?ae:"Lf",ne,oe=[];pe(oe,7);ne=Object.freeze(oe);function qe(a,b){Zd||K in a||me(a,le);a[K]|=b}
function pe(a,b){Zd||K in a||me(a,le);a[K]=b}
;var re={};function se(a,b){return b===void 0?a.h!==te&&!!(2&(a.F[K]|0)):!!(2&b)&&a.h!==te}
var te={};function ue(a,b){if(a!=null)if(typeof a==="string")a=a?new Pd(a,Od):Rd();else if(a.constructor!==Pd)if(Id&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pd(new Uint8Array(a),Od):Rd();else{if(!b)throw Error();a=void 0}return a}
var ve=Object.freeze({});function we(a,b,c){var d=b&128?0:-1,e=a.length,f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;var g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(var h in a)!isNaN(h)&&c(+h,a[h])}}
var xe={};function ye(a){a.pj=!0;return a}
;var ze=ye(function(a){return typeof a==="number"}),Ae=ye(function(a){return typeof a==="string"}),Be=ye(function(a){return typeof a==="boolean"});
function Ce(){var a=De;return ye(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var Ee=ye(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"}),Fe=ye(function(a){return!!a&&(typeof a==="object"||typeof a==="function")});var Ge=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function He(a){var b=a;if(Ae(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ze(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Ge?BigInt(a):a=Be(a)?a?"1":"0":Ae(a)?a.trim()||"0":String(a)}
var Ne=ye(function(a){return Ge?a>=Ie&&a<=Je:a[0]==="-"?Ke(a,Le):Ke(a,Me)}),Le=Number.MIN_SAFE_INTEGER.toString(),Ie=Ge?BigInt(Number.MIN_SAFE_INTEGER):void 0,Me=Number.MAX_SAFE_INTEGER.toString(),Je=Ge?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Ke(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var L=0,Oe=0,Pe;function Qe(a){var b=a>>>0;L=b;Oe=(a-b)/4294967296>>>0}
function Re(a){if(a<0){Qe(0-a);var b=z(Se(L,Oe));a=b.next().value;b=b.next().value;L=a>>>0;Oe=b>>>0}else Qe(a)}
function Te(a,b){var c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Ue(a,b)}
function Ue(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Yd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Ve(c)+Ve(a));return c}
function Ve(a){a=String(a);return"0000000".slice(a.length)+a}
function We(){var a=L,b=Oe;b&2147483648?Yd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(Se(a,b)),a=b.next().value,b=b.next().value,a="-"+Ue(a,b)):a=Ue(a,b);return a}
function Xe(a){if(a.length<16)Re(Number(a));else if(Yd())a=BigInt(a),L=Number(a&BigInt(4294967295))>>>0,Oe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Oe=L=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Oe*=1E6,L=L*1E6+d,L>=4294967296&&(Oe+=Math.trunc(L/4294967296),Oe>>>=0,L>>>=0);b&&(b=z(Se(L,Oe)),a=b.next().value,b=b.next().value,L=a,Oe=b)}}
function Se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Ye(a){return Array.prototype.slice.call(a)}
;var Ze=typeof BigInt==="function"?BigInt.asIntN:void 0,$e=typeof BigInt==="function"?BigInt.asUintN:void 0,af=Number.isSafeInteger,bf=Number.isFinite,cf=Math.trunc;function df(a){if(a!=null&&typeof a!=="number")throw Error("Value of float/double field must be a number, found "+typeof a+": "+a);return a}
function ef(a){if(a==null||typeof a==="number")return a;if(a==="NaN"||a==="Infinity"||a==="-Infinity")return Number(a)}
function ff(a){return a.displayName||a.name||"unknown type name"}
function gf(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ka(a)+": "+a);return a}
var hf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function jf(a){switch(typeof a){case "bigint":return!0;case "number":return bf(a);case "string":return hf.test(a);default:return!1}}
function kf(a){if(typeof a!=="number")throw Wd("int32");if(!bf(a))throw Wd("int32");return a|0}
function lf(a){return a==null?a:kf(a)}
function mf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a|0:void 0}
function nf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a>>>0:void 0}
function of(a){var b=void 0;b!=null||(b=1024);if(!jf(a))throw Wd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return pf(a);case "bigint":return String(Ze(64,a));default:return qf(a)}case 1024:switch(c){case "string":return rf(a);case "bigint":return He(Ze(64,a));default:return sf(a)}case 0:switch(c){case "string":return pf(a);case "bigint":return He(Ze(64,a));default:return tf(a)}default:return Bb(b,"Unknown format requested type for int64")}}
function uf(a){return a==null?a:of(a)}
function vf(a){a.indexOf(".");var b=a.length;if(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")return a;Xe(a);return We()}
function tf(a){jf(a);a=cf(a);if(!af(a)){Re(a);var b=L,c=Oe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Te(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function qf(a){jf(a);a=cf(a);af(a)?a=String(a):(Re(a),a=We());return a}
function pf(a){jf(a);var b=cf(Number(a));if(af(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return vf(a)}
function rf(a){var b=cf(Number(a));if(af(b))return He(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Yd()?He(Ze(64,BigInt(a))):He(vf(a))}
function sf(a){return af(a)?He(tf(a)):He(qf(a))}
function wf(a){var b=typeof a;if(a==null)return a;if(b==="bigint")return He(Ze(64,a));if(jf(a))return b==="string"?rf(a):sf(a)}
function xf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(Ze(64,a));if(jf(a)){if(b==="string")return pf(a);if(b==="number")return tf(a)}}
function yf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String($e(64,a));if(jf(a)){if(b==="string")return jf(a),b=cf(Number(a)),af(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),a[0]==="-"?b=!1:(b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615"),b||(Xe(a),a=Ue(L,Oe))),a;if(b==="number")return jf(a),a=cf(a),a>=0&&af(a)||(Re(a),a=Te(L,Oe)),a}}
function zf(a){if(a==null||typeof a=="string"||a instanceof Pd)return a}
function Af(a){if(typeof a!=="string")throw Error();return a}
function Bf(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Cf(a){return a==null||typeof a==="string"?a:void 0}
function Df(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ff(b)+" but got "+(a&&ff(a.constructor)));}
function Ef(a,b,c){if(a!=null&&a[ie]===re)return a;if(Array.isArray(a)){var d=a[K]|0;c=d|c&32|c&2;c!==d&&pe(a,c);return new b(a)}}
;var Ff={};function Gf(a){return a}
;function Hf(a){var b=Xa(de);return b?a[b]:void 0}
var If={Gj:!0};function Jf(a,b){b<100||Xd(fe,1)}
;function Kf(a,b,c,d){var e=d!==void 0;d=!!d;var f=Xa(de),g;!e&&Zd&&f&&(g=a[f])&&g.zf(Jf);f=[];var h=a.length;g=4294967295;var k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var p=h&&a[h-1];p!=null&&typeof p==="object"&&p.constructor===Object?(h--,g=h):p=void 0;if(l&&!(b&128)&&!e){k=!0;var t;g=((t=Lf)!=null?t:Gf)(g-m,m,a,p,void 0)+m}}b=void 0;for(t=0;t<h;t++){var n=a[t];if(n!=null&&(n=c(n,d))!=null)if(l&&t>=g){var x=t-m,y=void 0;((y=b)!=null?y:b={})[x]=n}else f[t]=n}if(p)for(var w in p)h=p[w],h!=
null&&(h=c(h,d))!=null&&(t=+w,n=void 0,l&&!Number.isNaN(t)&&(n=t+m)<g?f[n]=h:(t=void 0,((t=b)!=null?t:b={})[w]=h));b&&(k?f.push(b):f[g]=b);e&&Xa(de)&&Hf(a);return f}
function Mf(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Ne(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[K]|0;return a.length===0&&b&1?void 0:Kf(a,b,Mf)}if(a!=null&&a[ie]===re)return Nf(a);if(a instanceof Pd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(Jd){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=Ed(b);a=a.h=b}return a}return}return a}
var Lf;function Of(a,b){if(b){Lf=b==null||b===Gf||b[je]!==Ff?Gf:b;try{return Nf(a)}finally{Lf=void 0}}return Nf(a)}
function Nf(a){a=a.F;return Kf(a,a[K]|0,Mf)}
;var Pf,Qf;function Rf(a){switch(typeof a){case "boolean":return Pf||(Pf=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Qf||(Qf=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function M(a,b,c){return Sf(a,b,c,2048)}
function Sf(a,b,c,d){d=d===void 0?0:d;if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[K]|0;if(hd&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Tf();if(e&256)throw Error("farr");if(e&64)return(e|d)!==e&&pe(a,e|d),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1,h=c[g];if(h!=null&&typeof h==="object"&&h.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var k in h)f=
+k,f<g&&(c[f+b]=h[k],delete h[k]);e=e&-16760833|(g&1023)<<14;break a}}if(b){k=Math.max(b,f-(e&128?0:-1));if(k>1024)throw Error("spvt");e=e&-16760833|(k&1023)<<14}}}pe(a,e|64|d);return a}
function Tf(){if(hd)throw Error("carr");Xd(he,5)}
;function Uf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[K]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Vf(a,c,!1,b&&!(c&16)):(qe(a,34),c&4&&Object.freeze(a)));return a}if(a!=null&&a[ie]===re)return b=a.F,c=b[K]|0,se(a,c)?a:Wf(a,b,c)?Xf(a,b):Vf(b,c);if(a instanceof Pd)return a}
function Xf(a,b,c){a=new a.constructor(b);c&&(a.h=te);a.i=te;return a}
function Vf(a,b,c,d){d!=null||(d=!!(34&b));a=Kf(a,b,Uf,d);d=32;c&&(d|=2);b=b&16769217|d;pe(a,b);return a}
function Yf(a){var b=a.F,c=b[K]|0;return se(a,c)?Wf(a,b,c)?Xf(a,b,!0):new a.constructor(Vf(b,c,!1)):a}
function Zf(a){if(a.h!==te)return!1;var b=a.F;b=Vf(b,b[K]|0);qe(b,2048);a.F=b;a.h=void 0;a.i=void 0;return!0}
function $f(a){if(!Zf(a)&&se(a,a.F[K]|0))throw Error();}
function ag(a,b){b===void 0&&(b=a[K]|0);b&32&&!(b&4096)&&pe(a,b|4096)}
function Wf(a,b,c){return c&2?!0:c&32&&!(c&4096)?(pe(b,c|2),a.h=te,!0):!1}
;var bg=He(0),cg={};function dg(a,b,c,d,e){Object.isExtensible(a);b=eg(a.F,b,c,e);if(b!==null||d&&a.i!==te)return b}
function eg(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function N(a,b,c,d){$f(a);var e=a.F;fg(e,e[K]|0,b,c,d);return a}
function fg(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[K]|0)>>14&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function gg(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function hg(a){return ue(a,!0)}
function ig(a){a=dg(a,1,void 0,void 0,hg);return a==null?Rd():a}
function jg(a,b,c){$f(a);var d=a.F,e=d[K]|0;if(b==null)return fg(d,e,3),a;if(!Array.isArray(b))throw Wd();var f=b===ne?7:b[K]|0,g=f,h=gg(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ye(b),g=0,f=kg(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:1024;f|=h;for(var l=0;l<b.length;l++){var m=b[l],p=c(m,h);Object.is(m,p)||(k&&(b=Ye(b),g=0,f=kg(f,e),k=!1),b[l]=p)}f!==g&&(k&&(b=Ye(b),f=kg(f,e)),pe(b,f));fg(d,e,3,b);return a}
function lg(a,b,c,d){$f(a);var e=a.F;fg(e,e[K]|0,b,c===""?void 0:c,d);return a}
function mg(a,b,c,d){$f(a);a=a.F;var e=a[K]|0;if(d==null){var f=ng(a);if(og(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=ng(a);var g=og(f,a,e,c);g!==b&&(g&&(e=fg(a,e,g)),f.set(c,b))}fg(a,e,b,d)}
function ng(a){if(Zd){var b;return(b=a[ce])!=null?b:a[ce]=new Map}if(ce in a)return a[ce];b=new Map;Object.defineProperty(a,ce,{value:b});return b}
function og(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];eg(b,g)!=null&&(e!==0&&(c=fg(b,c,e)),e=g)}a.set(d,e);return e}
function pg(a,b,c,d,e){var f=!1;d=eg(a,d,e,function(g){var h=Ef(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!se(d)&&ag(a,b),d}
function qg(a,b,c,d){var e=a.F,f=e[K]|0;b=pg(e,f,b,c,d);if(b==null)return b;f=e[K]|0;if(!se(a,f)){var g=Yf(b);g!==b&&(Zf(a)&&(e=a.F,f=e[K]|0),b=g,f=fg(e,f,c,b,d),ag(e,f))}return b}
function Jc(a,b,c){var d=void 0===ve?2:4;var e=a.F,f=e,g=e[K]|0,h=se(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Zf(a)&&(f=a.F,g=f[K]|0);a=eg(f,c);h=Array.isArray(a)?a:ne;var l=h===ne?7:h[K]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var p=h,t=g,n=!!(2&m);n&&(t|=2);for(var x=!n,y=!0,w=0,I=0;w<p.length;w++){var F=Ef(p[w],b,t);if(F instanceof b){if(!n){var T=se(F);x&&(x=!T);y&&(y=T)}p[I++]=F}}I<w&&(p.length=I);m|=4;m=y?m&-4097:m|4096;m=x?m|8:m&-9}m!==l&&(pe(h,m),2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&
(e===1||(e!==4?0:2&m||!(16&m)&&32&g)))){gg(m)&&(h=Ye(h),m=kg(m,g),g=fg(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)p=b[l],m=Yf(p),p!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;pe(h,m)}b=h;k=h=m;e===1||(e!==4?0:2&h||!(16&h)&&32&g)?gg(h)||(h|=!b.length||a&&!(4096&h)||32&g&&!(4096&h||16&h)?2:256,h!==k&&pe(b,h),Object.freeze(b)):(e===2&&gg(h)&&(b=Ye(b),k=0,h=kg(h,g),g=fg(f,g,c,b)),gg(h)||(d||(h|=16),h!==k&&pe(b,h)));2&h||!(4096&h||16&h)||ag(f,g);return b}
function rg(a,b){a!=null?Df(a,b):a=void 0;return a}
function sg(a,b,c,d,e){d=rg(d,b);N(a,c,d,e);d&&!se(d)&&ag(a.F);return a}
function tg(a,b,c,d){$f(a);var e=a.F,f=e[K]|0;if(d==null)return fg(e,f,c),a;if(!Array.isArray(d))throw Wd();for(var g=d===ne?7:d[K]|0,h=g,k=gg(g),l=k||Object.isFrozen(d),m=!0,p=!0,t=0;t<d.length;t++){var n=d[t];Df(n,b);k||(n=se(n),m&&(m=!n),p&&(p=n))}k||(g=m?13:5,g=p?g&-4097:g|4096);l&&g===h||(d=Ye(d),h=0,g=kg(g,f));g!==h&&pe(d,g);f=fg(e,f,c,d);2&g||!(4096&g||16&g)||ag(e,f);return a}
function kg(a,b){return a=(2&b?a|2:a&-3)&-273}
function Lc(a,b,c){c=c===void 0?0:c;a=mf(dg(a,b));return a!=null?a:c}
function ug(a,b){var c=c===void 0?0:c;a=nf(dg(a,b));return a!=null?a:c}
function vg(a,b,c){c=c===void 0?bg:c;a=dg(a,b,void 0,void 0,wf);return a!=null?a:c}
function wg(a,b,c,d){c=c===void 0?"":c;var e;return(e=Cf(dg(a,b,d)))!=null?e:c}
function xg(a){var b=b===void 0?0:b;a=dg(a,1);a=a==null?a:bf(a)?a|0:void 0;return a!=null?a:b}
function yg(a,b,c){return N(a,b,Bf(c))}
function zg(a,b,c){if(c!=null){if(!bf(c))throw Wd("enum");c|=0}return N(a,b,c)}
;function Ag(a,b,c){this.buffer=a;if(c&&!b)throw Error();}
function Bg(a){if(typeof a==="string")return new Ag(Nd(a),!0);if(Array.isArray(a))return new Ag(new Uint8Array(a),!0);if(a.constructor===Uint8Array)return new Ag(a,!1);if(a.constructor===ArrayBuffer)return a=new Uint8Array(a),new Ag(a,!1);if(a.constructor===Pd){var b=Ud(a)||new Uint8Array(0);return new Ag(b,!0,a)}if(a instanceof Uint8Array)return a=a.constructor===Uint8Array?a:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),new Ag(a,!1);throw Error();}
;function Cg(a,b){this.i=a>>>0;this.h=b>>>0}
function Dg(a){return a.i===0?new Cg(0,1+~a.h):new Cg(~a.i+1,~a.h)}
function Eg(a){a=BigInt.asUintN(64,a);return new Cg(Number(a&BigInt(4294967295)),Number(a>>BigInt(32)))}
function Fg(a){if(!a)return Gg||(Gg=new Cg(0,0));if(!/^\d+$/.test(a))return null;Xe(a);return new Cg(L,Oe)}
var Gg;function Hg(a,b){this.i=a>>>0;this.h=b>>>0}
function Ig(a){if(!a)return Jg||(Jg=new Hg(0,0));if(!/^-?\d+$/.test(a))return null;Xe(a);return new Hg(L,Oe)}
var Jg;function Kg(){this.h=[]}
Kg.prototype.length=function(){return this.h.length};
Kg.prototype.end=function(){var a=this.h;this.h=[];return a};
function Lg(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Mg(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
function Ng(a,b){if(b>=0)Mg(a,b);else{for(var c=0;c<9;c++)a.h.push(b&127|128),b>>=7;a.h.push(1)}}
Kg.prototype.writeUint8=function(a){this.h.push(a>>>0&255)};
function Og(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
Kg.prototype.writeInt8=function(a){this.h.push(a>>>0&255)};function Pg(){this.j=[];this.i=0;this.h=new Kg}
function Qg(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Rg(a,b){Sg(a,b,2);b=a.h.end();Qg(a,b);b.push(a.i);return b}
function Tg(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function Sg(a,b,c){Mg(a.h,b*8+c)}
function Ug(a,b,c){if(c!=null)switch(Vg(c),Sg(a,b,1),typeof c){case "number":a=a.h;Qe(c);Og(a,L);Og(a,Oe);break;case "bigint":c=Eg(c);a=a.h;b=c.h;Og(a,c.i);Og(a,b);break;default:c=Fg(c),a=a.h,b=c.h,Og(a,c.i),Og(a,b)}}
function Wg(a,b,c){c!=null&&(c=parseInt(c,10),Sg(a,b,0),Ng(a.h,c))}
function Xg(a,b,c){Sg(a,b,2);Mg(a.h,c.length);Qg(a,a.h.end());Qg(a,c)}
function Vg(a){switch(typeof a){case "string":Fg(a)}}
function Yg(a){switch(typeof a){case "string":a.length&&a[0]==="-"?Fg(a.substring(1)):Fg(a)}}
;function Zg(){function a(){throw Error();}
Object.setPrototypeOf(a,a.prototype);return a}
var $g=Zg(),ah=Zg(),bh=Zg(),ch=Zg(),dh=Zg(),eh=Zg(),fh=Zg(),gh=Zg(),hh=Zg(),ih=Zg(),jh=Zg(),kh=Zg(),lh=Zg();function O(a,b,c){this.F=M(a,b,c)}
O.prototype.toJSON=function(){return Of(this)};
O.prototype.serialize=function(a){return JSON.stringify(Of(this,a))};
function mh(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");qe(b,32);return new a(b)}
O.prototype.clone=function(){var a=this.F,b=a[K]|0;return Wf(this,a,b)?Xf(this,a,!0):new this.constructor(Vf(a,b,!1))};
O.prototype[ie]=re;O.prototype.toString=function(){return this.F.toString()};function nh(a,b){this.md=a;a=Xa($g);this.h=!!a&&b===a||!1}
function oh(a){var b=b===void 0?$g:b;return new nh(a,b)}
function ph(a,b,c,d,e){b=qh(b,d);b!=null&&(c=Rg(a,c),e(b,a),Tg(a,c))}
var rh=oh(ph),sh=oh(ph),th=Symbol(),uh=Symbol(),vh,wh;
function xh(a){var b=yh,c=zh,d=a[th];if(d)return d;d={};d.cj=a;d.he=Rf(a[0]);var e=a[1],f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Mf=!0,vh!=null||(vh=e),wh!=null||(wh=a[f+1]),e=a[f+=2]));for(var g={};e&&Ah(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);var k=void 0;if(e instanceof nh)var l=e;else l=rh,f--;e=void 0;if((e=l)==null?0:e.h){e=a[++f];k=a;var m=f;typeof e==="function"&&(e=e(),k[m]=e);k=
e}e=a[++f];m=h+1;typeof e==="number"&&e<0&&(m-=e,e=a[++f]);for(;h<m;h++){var p=g[h];k?c(d,h,l,k,p):b(d,h,l,p)}}return a[th]=d}
function Ah(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function qh(a,b){if(a instanceof O)return a.F;if(Array.isArray(a))return Sf(a,b[0],b[1])}
;function yh(a,b,c){a[b]=c.md}
function zh(a,b,c,d){var e,f,g=c.md;a[b]=function(h,k,l){return g(h,k,l,f||(f=xh(d).he),e||(e=Bh(d)))}}
function Bh(a){var b=a[uh];if(!b){var c=xh(a);b=function(d,e){return Ch(d,e,c)};
a[uh]=b}return b}
function Ch(a,b,c){we(a,a[K]|0,function(d,e){if(e!=null){var f=Dh(c,d);f?f(b,e,d):d<500||Xd(ge,3)}});
(a=Hf(a))&&a.zf(function(d,e,f){Qg(b,b.h.end());for(d=0;d<f.length;d++)Qg(b,Ud(f[d])||new Uint8Array(0))})}
function Dh(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof nh?c:[sh,c]:[c,void 0];var d=c[0].md;if(c=c[1]){var e=Bh(c),f=xh(c).he;c=a.Mf?wh(f,e):function(g,h,k){return d(g,h,k,f,e)}}else c=d;
return a[b]=c}}
;function Eh(a,b,c){if(Array.isArray(b)){var d=b[K]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){var g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);a=d|1;c&&(a=(a|4)&-1537);a!==d&&pe(b,a);c&&a&2&&Object.freeze(b);return b}}
function Fh(a,b){var c=new Pg;Ch(a.F,c,xh(b));Qg(c,c.h.end());a=new Uint8Array(c.i);b=c.j;for(var d=b.length,e=0,f=0;f<d;f++){var g=b[f];a.set(g,e);e+=g.length}c.j=[a];return a}
function Gh(a,b){return new nh(a,b)}
function Hh(a,b){return new nh(a,b)}
function Ih(a,b,c){b=ef(b);b!=null&&(Sg(a,c,1),a=a.h,c=Pe||(Pe=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),L=c.getUint32(0,!0),Oe=c.getUint32(4,!0),Og(a,L),Og(a,Oe))}
function Jh(a,b,c){b=xf(b);if(b!=null){switch(typeof b){case "string":Ig(b)}if(b!=null)switch(Sg(a,c,0),typeof b){case "number":a=a.h;Re(b);Lg(a,L,Oe);break;case "bigint":c=BigInt.asUintN(64,b);c=new Hg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));Lg(a.h,c.i,c.h);break;default:c=Ig(b),Lg(a.h,c.i,c.h)}}}
function Kh(a,b,c){b=mf(b);b!=null&&b!=null&&(Sg(a,c,0),Ng(a.h,b))}
function Lh(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Sg(a,c,0),a.h.h.push(b?1:0))}
function Mh(a,b,c){b=Cf(b);b!=null&&Xg(a,c,dd(b))}
function Nh(a,b,c,d,e){b=qh(b,d);b!=null&&(c=Rg(a,c),e(b,a),Tg(a,c))}
var Oh=Gh(Ih,jh),Ph=Gh(Ih,jh),Qh=Gh(function(a,b,c){b=ef(b);b!=null&&(Sg(a,c,5),a=a.h,c=Pe||(Pe=new DataView(new ArrayBuffer(8))),c.setFloat32(0,+b,!0),Oe=0,L=c.getUint32(0,!0),Og(a,L))},ih),Rh=Gh(Jh,fh),Sh=Gh(Jh,fh),Th=Gh(function(a,b,c){b=yf(b);
if(b!=null&&(Vg(b),b!=null))switch(Sg(a,c,0),typeof b){case "number":a=a.h;Re(b);Lg(a,L,Oe);break;case "bigint":c=Eg(b);Lg(a.h,c.i,c.h);break;default:c=Fg(b),Lg(a.h,c.i,c.h)}},gh),Uh=Gh(Kh,ch),Vh=Gh(Kh,ch),Wh=Gh(function(a,b,c){b=yf(b);
if(b!=null)switch(Yg(b),Sg(a,c,1),a=a.h,Yg(b),typeof b){case "number":b<0?(c=-b,c=Dg(new Cg(c&4294967295,c/4294967296)),b=c.h,Og(a,c.i),Og(a,b)):(Qe(b),Og(a,L),Og(a,Oe));break;case "bigint":c=b<BigInt(0)?Dg(Eg(-b)):Eg(b);b=c.h;Og(a,c.i);Og(a,b);break;default:c=b.length&&b[0]==="-"?Dg(Fg(b.substring(1))):Fg(b),b=c.h,Og(a,c.i),Og(a,b)}},hh),Xh=Gh(function(a,b,c){Ug(a,c,yf(b))},hh),Yh=Hh(function(a,b,c){b=Eh(yf,b,!1);
if(b!=null)for(var d=0;d<b.length;d++)Ug(a,c,b[d])},hh),Zh=Gh(Lh,ah),$h=Gh(Lh,ah),ai=Gh(Mh,bh),bi=Hh(function(a,b,c){b=Eh(Cf,b,!0);
if(b!=null)for(var d=0;d<b.length;d++){var e=a,f=c,g=b[d];g!=null&&Xg(e,f,dd(g))}},bh),ci=Gh(Mh,bh),di,ei=void 0;
ei=ei===void 0?$g:ei;di=new nh(function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Nh(a,b[f],c,d,e);a=b[K]|0;a&1||pe(b,a|1)}},ei);
var fi=oh(Nh),gi=Hh(function(a,b,c){b=Eh(zf,b,!1);if(b!=null)for(var d=0;d<b.length;d++){var e=a,f=c,g=b[d];g!=null&&Xg(e,f,Bg(g).buffer)}},kh),hi=Gh(function(a,b,c){b=nf(b);
b!=null&&b!=null&&(Sg(a,c,0),Mg(a.h,b))},dh),ii=Gh(function(a,b,c){Wg(a,c,mf(b))},lh),ji=Hh(function(a,b,c){b=Eh(mf,b,!0);
if(b!=null)for(var d=0;d<b.length;d++)Wg(a,c,b[d])},lh),ki=Gh(function(a,b,c){b=mf(b);
b!=null&&(Sg(a,c,5),a=a.h,a.h.push(b>>>0&255),a.h.push(b>>>8&255),a.h.push(b>>>16&255),a.h.push(b>>>24&255))},eh);function li(){var a=mi;this.ctor=ni;this.isRepeated=0;this.h=qg;this.defaultValue=void 0;this.i=a.Uf!=null?xe:void 0}
li.prototype.register=function(){sd(this)};function oi(a){return function(b){return mh(a,b)}}
;function pi(a){this.F=M(a)}
v(pi,O);function qi(a,b){return jg(a,b,kf)}
;function ri(a){this.F=M(a)}
v(ri,O);var si=[1,2,3];var ti=[0,si,ci,Vh,$h];var ui=[0,di,[0,Oh,Rh]];function vi(a){this.F=M(a)}
v(vi,O);var wi=[1,2,3];var xi=[0,wi,Sh,Ph,fi,ui];function yi(a){this.F=M(a)}
v(yi,O);var zi=[0,di,ti,xi];var Ai=[0,ai];function Bi(a){this.F=M(a)}
v(Bi,O);var Ci=[0,ai,-1,Zh];var Di=[0,ai,-1,Uh,Zh];function Ei(a){this.F=M(a)}
v(Ei,O);var Fi=[1,2,3];var Gi=[0,Fi,fi,Ci,fi,Di,fi,Ai];function Hi(a){this.F=M(a)}
v(Hi,O);Hi.prototype.j=function(a){return function(){return Fh(this,a)}}([0,
ai,Gi,bi,di,zi,Xh,Yh]);function Ii(a){this.F=M(a)}
v(Ii,O);function Ji(a){var b=new Hi;b=yg(b,1,a.i);var c=Ki(a);b=jg(b,c,Af);c=[];for(var d=[],e=z(a.h.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var g=a.o,h=a.td(f)||[],k=[],l=0;l<h.length;l++){var m=h[l],p=m&&m.h;m=new vi;switch(g){case 3:p=Number(p);Number.isFinite(p)&&mg(m,1,wi,uf(p));break;case 2:mg(m,2,wi,df(Number(p)))}k.push(m)}g=k;for(h=0;h<g.length;h++){k=g[h];l=new yi;k=sg(l,vi,2,k);l=[];m=Li(a);for(p=0;p<m.length;p++){var t=m[p],n=f[p],x=
new ri;switch(t){case 3:mg(x,1,si,Bf(String(n)));break;case 2:t=Number(n);Number.isFinite(t)&&mg(x,2,si,lf(t));break;case 1:mg(x,3,si,gf(n==="true"))}l.push(x)}tg(k,ri,1,l);c.push(k)}}tg(b,yi,4,c);return b}
;function Mi(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Ni(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,n=0;n<64;n+=4)t[n/4]=p[n]<<24|p[n+1]<<16|p[n+2]<<8|p[n+3];for(n=16;n<80;n++)p=t[n-3]^t[n-8]^t[n-14]^t[n-16],t[n]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],w=e[3],I=e[4];for(n=0;n<80;n++){if(n<40)if(n<20){var F=w^x&(y^w);var T=1518500249}else F=x^y^w,T=1859775393;else n<60?(F=x&y|w&(x|y),T=2400959708):(F=x^y^w,T=3395469782);F=((p<<5|p>>>27)&4294967295)+F+I+T+t[n]&4294967295;I=w;w=y;y=(x<<30|x>>>2)&4294967295;x=p;p=F}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+w&4294967295;e[4]=e[4]+I&4294967295}
function c(p,t){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var n=[],x=0,y=p.length;x<y;++x)n.push(p.charCodeAt(x));p=n}t||(t=p.length);n=0;if(l==0)for(;n+64<t;)b(p.slice(n,n+64)),n+=64,m+=64;for(;n<t;)if(f[l++]=p[n++],m++,l==64)for(l=0,b(f);n+64<t;)b(p.slice(n,n+64)),n+=64,m+=64}
function d(){var p=[],t=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var n=63;n>=56;n--)f[n]=t&255,t>>>=8;b(f);for(n=t=0;n<5;n++)for(var x=24;x>=0;x-=8)p[t++]=e[n]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ef:function(){for(var p=d(),t="",n=0;n<p.length;n++)t+="0123456789ABCDEF".charAt(Math.floor(p[n]/16))+"0123456789ABCDEF".charAt(p[n]%16);return t}}}
;function Oi(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Pi(Mi(d),a,c||null)].join(" "):null}
function Pi(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Pb(d,function(h){e.push(h)}),Qi(e.join(" "));
var f=[],g=[];Pb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Pb(d,function(h){e.push(h)});
a=Qi(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Qi(a){var b=Ni();b.update(a);return b.ef().toLowerCase()}
;function Ri(a){this.h=a||{cookie:""}}
r=Ri.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Tc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.sameSite;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=fb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Tc:0,path:b,domain:c});return d};
r.kc=function(){return Si(this).keys};
r.ib=function(){return Si(this).values};
r.clear=function(){for(var a=Si(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function Si(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=fb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Ti=new Ri(typeof document=="undefined"?null:document);function Ui(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Ri(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Vi(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new Ri(document)).get(b));return a?Oi(a,c,d):null}
function Wi(a){var b=Mi(D==null?void 0:D.location.href),c=[];if(Ui()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new Ri(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Oi(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Vi("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Vi("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function Xi(){}
Xi.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
Xi.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function Yi(a){this.F=M(a)}
v(Yi,O);function Zi(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Wa()};
this.i=this.h()}
Zi.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Zi.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Zi.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Zi.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function $i(a){this.F=M(a)}
v($i,O);function aj(a){this.F=M(a)}
v(aj,O);function bj(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=bj.prototype;r.clone=function(){return new bj(this.x,this.y)};
r.equals=function(a){return a instanceof bj&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function cj(a,b){this.width=a;this.height=b}
r=cj.prototype;r.clone=function(){return new cj(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function dj(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ej(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function fj(a){var b=gj,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hj(a){for(var b in a)return!1;return!0}
function ij(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jj(a){return a!==null&&"privembed"in a?a.privembed:!1}
function kj(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lj(a){var b={},c;for(c in a)b[c]=a[c];return b}
function mj(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mj(a[c]);return b}
var nj="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oj(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nj.length;f++)c=nj[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function pj(a,b){this.h=a===qj&&b||""}
pj.prototype.toString=function(){return this.h};
var qj={};new pj(qj,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function rj(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function sj(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function tj(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function uj(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function vj(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function wj(a){this.F=M(a)}
v(wj,O);wj.prototype.Kc=function(){return xg(this)};function xj(a){this.F=M(a)}
v(xj,O);function yj(a){this.F=M(a)}
v(yj,O);function zj(a){tg(Aj,xj,1,a)}
var Bj=oi(yj);function Cj(a){this.F=M(a)}
v(Cj,O);var Dj=["platform","platformVersion","architecture","model","uaFullVersion"],Aj=new yj,Ej=null;function Fj(a,b){b=b===void 0?Dj:b;if(!Ej){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));zj((a.brands||[]).map(function(e){var f=new xj;f=yg(f,1,e.brand);return yg(f,2,e.version)}));
typeof a.mobile==="boolean"&&N(Aj,2,gf(a.mobile));Ej=a.getHighEntropyValues(b)}var d=new Set(b);return Ej.then(function(e){var f=Aj.clone();d.has("platform")&&yg(f,3,e.platform);d.has("platformVersion")&&yg(f,4,e.platformVersion);d.has("architecture")&&yg(f,5,e.architecture);d.has("model")&&yg(f,6,e.model);d.has("uaFullVersion")&&yg(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return Aj.serialize()})}
;function Gj(a){this.F=M(a)}
v(Gj,O);function Hj(a){return zg(a,1,1)}
;function Ij(a){this.F=M(a,4)}
v(Ij,O);function Jj(a){this.F=M(a,37)}
v(Jj,O);function Kj(a){this.F=M(a,19)}
v(Kj,O);Kj.prototype.wc=function(a){return zg(this,2,a)};function Lj(a,b){this.Ya=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Kj;Number.isInteger(a)&&this.h.wc(a);b||(this.locale=document.documentElement.getAttribute("lang"));Mj(this,new Gj)}
Lj.prototype.wc=function(a){this.h.wc(a);return this};
function Mj(a,b){sg(a.h,Gj,1,b);xg(b)||Hj(b);a.Ya||(b=Nj(a),wg(b,5)||yg(b,5,a.locale));a.j&&(b=Nj(a),qg(b,yj,9)||sg(b,yj,9,a.j))}
function Oj(a,b){a.i=b}
function Pj(a){var b=b===void 0?Dj:b;var c=a.Ya?void 0:window;c?Fj(c,b).then(function(d){a.j=Bj(d!=null?d:"[]");d=Nj(a);sg(d,yj,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Nj(a){var b=qg(a.h,Gj,1);b||(b=new Gj,Mj(a,b));a=b;b=qg(a,Cj,11);b||(b=new Cj,sg(a,Cj,11,b));return b}
function Qj(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Ya){var h=Nj(a);var k=new wj;k=zg(k,1,a.i);k=N(k,2,gf(a.isFinal));d=N(k,3,lf(d>0?d:void 0));d=N(d,4,lf(f>0?f:void 0));d=N(d,5,lf(g>0?g:void 0));f=d.F;g=f[K]|0;d=se(d,g)?d:Wf(d,f,g)?Xf(d,f):new d.constructor(Vf(f,g,!0));sg(h,wj,10,d)}a=a.h.clone();h=Date.now().toString();a=N(a,4,uf(h));b=b.slice();b=tg(a,Jj,3,b);e&&(a=new $i,e=N(a,13,lf(e)),a=new aj,e=sg(a,$i,2,e),a=new Ij,e=sg(a,
aj,1,e),e=zg(e,2,9),sg(b,Ij,18,e));c&&N(b,14,uf(c));return b}
;var Rj=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Sj(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.I=c||0;this.A=d||2}
Sj.prototype.i=0;Sj.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
Sj.prototype.getValue=function(){return this.j};
function Tj(a){a.h=Math.min(a.u,a.h*a.A);a.j=Math.min(a.u,a.h+(a.I?Math.round(a.I*(Math.random()-.5)*2*a.h):0));a.i++}
;function mi(a){this.F=M(a,8)}
v(mi,O);var Uj=oi(mi);function ni(a){this.F=M(a)}
v(ni,O);var Vj;Vj=new li;function Wj(a){H.call(this);var b=this;this.componentId="";this.h=[];this.Ma="";this.pageId=null;this.Sa=this.ja=-1;this.G=this.experimentIds=null;this.A=this.o=0;this.P=null;this.aa=this.fa=0;this.Yb=1;this.timeoutMillis=0;this.oa=!1;this.logSource=a.logSource;this.Jb=a.Jb||function(){};
this.j=new Lj(a.logSource,a.Ya);this.network=a.network||null;this.xb=a.xb||null;this.bufferSize=1E3;this.J=a.Mg||null;this.sessionIndex=a.sessionIndex||null;this.hc=a.hc||!1;this.logger=null;this.withCredentials=!a.pd;this.Ya=a.Ya||!1;this.Y=!this.Ya&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.La=typeof URLSearchParams!=="undefined"&&!!(new URL(Xj())).searchParams&&!!(new URL(Xj())).searchParams.set;var c=Hj(new Gj);Mj(this.j,c);this.u=new Sj(1E4,3E5,.1);a=Yj(this,a.Qd);
this.i=new Zi(this.u.getValue(),a);this.Ea=new Zi(6E5,a);this.hc||this.Ea.start();this.Ya||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){Zj(b);var d;(d=b.P)==null||d.flush()}}),document.addEventListener("pagehide",function(){Zj(b);
var d;(d=b.P)==null||d.flush()}))}
v(Wj,H);function Yj(a,b){function c(){a.flush()}
return a.La?b?function(){b().then(c)}:c:function(){}}
Wj.prototype.da=function(){Zj(this);this.i.stop();this.Ea.stop();H.prototype.da.call(this)};
function ak(a){a.J||(a.J=Xj());try{return(new URL(a.J)).toString()}catch(b){return(new URL(a.J,window.location.origin)).toString()}}
function bk(a,b,c){a.P&&a.P.la(b,c)}
Wj.prototype.log=function(a){bk(this,2,1);if(this.La){a=a.clone();var b=this.Yb++;a=N(a,21,uf(b));this.componentId&&yg(a,26,this.componentId);b=a;var c=dg(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(Ze(64,c)):jf(c)?e==="string"?pf(c):d?qf(c):tf(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",N(b,1,uf(d)));d=dg(b,15,void 0,void 0,wf);d!=null&&(typeof d==="bigint"?Ne(d)?d=Number(d):(d=Ze(64,d),d=Ne(d)?Number(d):String(d)):d=jf(d)?typeof d==="number"?
tf(d):pf(d):void 0);d==null&&N(b,15,uf((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),sg(b,Yi,16,d));bk(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,bk(this,3,b));this.h.push(a);this.hc||this.i.enabled||this.i.start()}};
Wj.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.oa&&this.Y)this.j.i=3,ck(this);else{var d=Date.now();if(this.Sa>d&&this.ja<d)b&&b("throttled");else{this.network&&(typeof this.network.Kc==="function"?Oj(this.j,this.network.Kc()):this.j.i=0);var e=this.h.length,f=Qj(this.j,this.h,this.o,this.A,this.xb,this.fa,this.aa),g=this.Jb();if(g&&this.Ma===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=dk(this,d,g),l=function(t){c.u.reset();c.i.setInterval(c.u.getValue());if(t){var n=null;try{var x=JSON.stringify(JSON.parse(t.replace(")]}'\n","")));n=Uj(x)}catch(I){}if(n){t=Number(vg(n,1,He("-1")));t>0&&(c.ja=Date.now(),c.Sa=c.ja+t);t=Xa(de);var y;Zd&&t&&((y=n.F[t])==null?void 0:y[175237375])!=null&&Xd(ee,3);a:{var w=w===void 0?!1:w;if(Xa(ke)&&Xa(de)&&void 0===ke){y=n.F;t=y[de];if(!t)break a;if(t=t.Hj)try{t(y,175237375,If);break a}catch(I){ed(I)}}w&&(w=n.F,(y=Xa(de))&&
y in w&&(w=w[y])&&delete w[175237375])}w=Vj.ctor?Vj.h(n,Vj.ctor,175237375,Vj.i):Vj.h(n,175237375,null,Vj.i);if(w=w===null?void 0:w)w=Lc(w,1,-1),w!==-1&&(c.u=new Sj(w<1?1:w,3E5,.1),c.i.setInterval(c.u.getValue()))}}a&&a();c.A=0},m=function(t,n){var x=Jc(f,Jj,3);
var y=Number(vg(f,14));Tj(c.u);c.i.setInterval(c.u.getValue());t===401&&g&&(c.Ma=g);y&&(c.o+=y);n===void 0&&(n=c.isRetryable(t));n&&(c.h=x.concat(c.h),c.hc||c.i.enabled||c.i.start());bk(c,7,1);b&&b("net-send-failed",t);++c.A},p=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(t){bk(c,5,e);k.dd["Content-Encoding"]="gzip";k.dd["Content-Type"]="application/binary";k.body=t;k.We=2;p()},function(){bk(c,6,e);
p()}):p()}}}};
function dk(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(ak(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,We:1,dd:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Zj(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function ck(a){ek(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function ek(a,b){if(a.h.length!==0){var c=new URL(ak(a));c.searchParams.delete("format");var d=a.Jb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Qj(a.j,e,a.o,a.A,a.xb,a.fa,a.aa);if(!b(c.toString(),f)){++a.A;break}a.o=0;a.A=0;a.fa=0;a.aa=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
Wj.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function Xj(){return"https://play.google.com/log?format=json&hasfast=true"}
;function fk(){this.Pe=typeof AbortController!=="undefined"}
fk.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,p,t,n;return B(function(x){switch(x.h){case 1:return f=(e=d.Pe?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,x.o(2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.dd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),x.yield(fetch(a.url,g),5);case 5:h=x.i;if(h.status!==200){(k=c)==null||k(h.status);x.v(3);break}if((l=b)==null){x.v(7);break}return x.yield(h.text(),8);case 8:l(x.i);case 7:case 3:x.aa();clearTimeout(f);x.fa(0);break;case 2:m=x.j();switch((p=m)==null?void 0:p.name){case "AbortError":(t=c)==null||t(408);break;default:(n=c)==null||n(400)}x.v(3)}})};
fk.prototype.Kc=function(){return 4};function gk(a,b){b=b===void 0?"0":b;H.call(this);this.logSource=a;this.sessionIndex=b;this.hb="https://play.google.com/log?format=json&hasfast=true";this.buildLabel=null;this.j=!1;this.network=null;this.componentId="";this.h=this.xb=null;this.i=!1;this.pageId=null;this.bufferSize=void 0;this.logger=null}
v(gk,H);function hk(a,b){a.buildLabel=b;return a}
function ik(a,b){a.network=b;return a}
function jk(a,b){a.h=b}
function kk(a){a.i=!0;return a}
gk.prototype.pd=function(){this.o=!0;return this};
function lk(a){a.network||(a.network=new fk);var b=new Wj({logSource:a.logSource,Jb:a.Jb?a.Jb:Wi,sessionIndex:a.sessionIndex,Mg:a.hb,Ya:a.j,hc:!1,pd:a.o,Qd:a.Qd,network:a.network});yc(a,b);if(a.buildLabel){var c=a.buildLabel,d=Nj(b.j);yg(d,7,c)}b.G=new Xi;a.componentId&&(b.componentId=a.componentId);a.xb&&(b.xb=a.xb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new Yi),c=b.experimentIds,d=d.serialize(),yg(c,4,d)):b.experimentIds&&N(b.experimentIds,4));a.i&&(b.oa=
b.Y);Pj(b.j);a.bufferSize&&(b.bufferSize=a.bufferSize);a.network.wc&&a.network.wc(a.logSource);a.network.zg&&a.network.zg(b);return b}
;function mk(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;H.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new gk(a,"0"),a.componentId=b,yc(this,a),c!==""&&(a.hb=c),d&&(a.j=!0),e&&hk(a,e),g&&ik(a,g),b=lk(a));this.h=b}
v(mk,H);mk.prototype.flush=function(a){var b=a||[];if(b.length){a=new Ii;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=Ji(e);c.push(f);e.clear()}tg(a,Hi,1,c);b=this.h;if(a instanceof Jj)b.log(a);else try{var g=new Jj,h=a.serialize();var k=yg(g,8,h);b.log(k)}catch(l){bk(b,4,1)}this.h.flush()}};function nk(a){this.h=a}
;function ok(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function Li(a){return a.fields.map(function(b){return b.fieldType})}
function Ki(a){return a.fields.map(function(b){return b.fieldName})}
r=ok.prototype;r.Qe=function(a){var b=C.apply(1,arguments),c=this.td(b);c?c.push(new nk(a)):this.we(a,b)};
r.we=function(a){var b=this.Pd(C.apply(1,arguments));this.h.set(b,[new nk(a)])};
r.td=function(){var a=this.Pd(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.Bf=function(){var a=this.td(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.Pd=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function pk(a,b){ok.call(this,a,3,b)}
v(pk,ok);pk.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.Bf(b);d&&(c=d.h);this.we(c+a,b)};function qk(a,b){ok.call(this,a,2,b)}
v(qk,ok);qk.prototype.record=function(a){this.Qe(a,C.apply(1,arguments))};function rk(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
rk.prototype.stopPropagation=function(){this.j=!0};
rk.prototype.preventDefault=function(){this.defaultPrevented=!0};function sk(a,b){rk.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(sk,rk);
sk.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&sk.Ha.preventDefault.call(this)};
sk.prototype.stopPropagation=function(){sk.Ha.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
sk.prototype.preventDefault=function(){sk.Ha.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tk="closure_listenable_"+(Math.random()*1E6|0);var uk=0;function vk(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++uk;this.vc=this.Ec=!1}
function wk(a){a.vc=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function xk(a){this.src=a;this.listeners={};this.h=0}
xk.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=yk(a,b,d,e);g>-1?(b=a[g],c||(b.Ec=!1)):(b=new vk(b,this.src,f,!!d,e),b.Ec=c,a.push(b));return b};
xk.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=yk(e,b,c,d);return b>-1?(wk(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function zk(a,b){var c=b.type;c in a.listeners&&Vb(a.listeners[c],b)&&(wk(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function yk(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.vc&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1}
;var Ak="closure_lm_"+(Math.random()*1E6|0),Bk={},Ck=0;function Dk(a,b,c,d,e){if(d&&d.once)Ek(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Dk(a,b[f],c,d,e);else c=Fk(c),a&&a[tk]?a.listen(b,c,Ma(d)?!!d.capture:!!d,e):Gk(a,b,c,!1,d,e)}
function Gk(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=Hk(a);h||(a[Ak]=h=new xk(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ik();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Rj||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Jk(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ck++}}
function Ik(){function a(c){return b.call(a.src,a.listener,c)}
var b=Kk;return a}
function Ek(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ek(a,b[f],c,d,e);else c=Fk(c),a&&a[tk]?Lk(a,b,c,Ma(d)?!!d.capture:!!d,e):Gk(a,b,c,!0,d,e)}
function Mk(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Mk(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Fk(c),a&&a[tk])?a.i.remove(String(b),c,d,e):a&&(a=Hk(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=yk(b,c,d,e)),(c=a>-1?b[a]:null)&&Nk(c))}
function Nk(a){if(typeof a!=="number"&&a&&!a.vc){var b=a.src;if(b&&b[tk])zk(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Jk(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ck--;(c=Hk(b))?(zk(c,a),c.h==0&&(c.src=null,b[Ak]=null)):wk(a)}}}
function Jk(a){return a in Bk?Bk[a]:Bk[a]="on"+a}
function Kk(a,b){if(a.vc)a=!0;else{b=new sk(b,this);var c=a.listener,d=a.handler||a.src;a.Ec&&Nk(a);a=c.call(d,b)}return a}
function Hk(a){a=a[Ak];return a instanceof xk?a:null}
var Ok="__closure_events_fn_"+(Math.random()*1E9>>>0);function Fk(a){if(typeof a==="function")return a;a[Ok]||(a[Ok]=function(b){return a.handleEvent(b)});
return a[Ok]}
;function Pk(){H.call(this);this.i=new xk(this);this.oa=this;this.aa=null}
Ya(Pk,H);Pk.prototype[tk]=!0;r=Pk.prototype;r.addEventListener=function(a,b,c,d){Dk(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Mk(this,a,b,c,d)};
function Qk(a,b){var c=a.aa;if(c){var d=[];for(var e=1;c;c=c.aa)d.push(c),++e}a=a.oa;c=b.type||b;typeof b==="string"?b=new rk(b,a):b instanceof rk?b.target=b.target||a:(e=b,b=new rk(c,a),oj(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Rk(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Rk(g,c,!0,b)&&e,b.j||(e=Rk(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Rk(g,c,!1,b)&&e}
r.da=function(){Pk.Ha.da.call(this);this.removeAllListeners();this.aa=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Lk(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,wk(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Rk(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.vc&&g.capture==c){var h=g.listener,k=g.handler||g.src;g.Ec&&zk(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Sk=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Tk(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Tk.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Uk(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Vk(){this.i=this.h=null}
Vk.prototype.add=function(a,b){var c=Wk.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Vk.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Wk=new Tk(function(){return new Xk},function(a){return a.reset()});
function Xk(){this.next=this.scope=this.h=null}
Xk.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Xk.prototype.reset=function(){this.next=this.scope=this.h=null};var Yk,Zk=!1,$k=new Vk;function al(a,b){Yk||bl();Zk||(Yk(),Zk=!0);$k.add(a,b)}
function bl(){var a=Promise.resolve(void 0);Yk=function(){a.then(cl)}}
function cl(){for(var a;a=$k.remove();){try{a.h.call(a.scope)}catch(b){ed(b)}Uk(Wk,a)}Zk=!1}
;function dl(){}
function el(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function fl(a){this.D=0;this.Da=void 0;this.Fb=this.fb=this.parent_=null;this.Lc=this.rd=!1;if(a!=dl)try{var b=this;a.call(void 0,function(c){gl(b,2,c)},function(c){gl(b,3,c)})}catch(c){gl(this,3,c)}}
function hl(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
hl.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var il=new Tk(function(){return new hl},function(a){a.reset()});
function jl(a,b,c){var d=il.get();d.i=a;d.h=b;d.context=c;return d}
function kl(a){return new fl(function(b,c){c(a)})}
fl.prototype.then=function(a,b,c){return ll(this,Sk(typeof a==="function"?a:null),Sk(typeof b==="function"?b:null),c)};
fl.prototype.$goog_Thenable=!0;function ml(a,b,c,d){nl(a,jl(b||dl,c||null,d))}
r=fl.prototype;r.finally=function(a){var b=this;a=Sk(a);return new fl(function(c,d){ml(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.kd=function(a,b){return ll(this,null,Sk(a),b)};
r.catch=fl.prototype.kd;r.cancel=function(a){if(this.D==0){var b=new ol(a);al(function(){pl(this,b)},this)}};
function pl(a,b){if(a.D==0)if(a.parent_){var c=a.parent_;if(c.fb){for(var d=0,e=null,f=null,g=c.fb;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.D==0&&d==1?pl(c,b):(f?(d=f,d.next==c.Fb&&(c.Fb=d),d.next=d.next.next):ql(c),rl(c,e,3,b)))}a.parent_=null}else gl(a,3,b)}
function nl(a,b){a.fb||a.D!=2&&a.D!=3||sl(a);a.Fb?a.Fb.next=b:a.fb=b;a.Fb=b}
function ll(a,b,c,d){var e=jl(null,null,null);e.child=new fl(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ol?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;nl(a,e);return e.child}
r.Kg=function(a){this.D=0;gl(this,2,a)};
r.Lg=function(a){this.D=0;gl(this,3,a)};
function gl(a,b,c){if(a.D==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.D=1;a:{var d=c,e=a.Kg,f=a.Lg;if(d instanceof fl){ml(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if(typeof k==="function"){tl(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.Da=c,a.D=b,a.parent_=null,sl(a),b!=3||c instanceof ol||ul(a,c))}}
function tl(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function sl(a){a.rd||(a.rd=!0,al(a.rf,a))}
function ql(a){var b=null;a.fb&&(b=a.fb,a.fb=b.next,b.next=null);a.fb||(a.Fb=null);return b}
r.rf=function(){for(var a;a=ql(this);)rl(this,a,this.D,this.Da);this.rd=!1};
function rl(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.Lc;a=a.parent_)a.Lc=!1;if(b.child)b.child.parent_=null,vl(b,c,d);else try{b.j?b.i.call(b.context):vl(b,c,d)}catch(e){wl.call(null,e)}Uk(il,b)}
function vl(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ul(a,b){a.Lc=!0;al(function(){a.Lc&&wl.call(null,b)})}
var wl=ed;function ol(a){eb.call(this,a)}
Ya(ol,eb);ol.prototype.name="cancel";function xl(a,b){Pk.call(this);this.j=a||1;this.h=b||D;this.o=Ua(this.Hg,this);this.u=Wa()}
Ya(xl,Pk);r=xl.prototype;r.enabled=!1;r.Ka=null;r.setInterval=function(a){this.j=a;this.Ka&&this.enabled?(this.stop(),this.start()):this.Ka&&this.stop()};
r.Hg=function(){if(this.enabled){var a=Wa()-this.u;a>0&&a<this.j*.8?this.Ka=this.h.setTimeout(this.o,this.j-a):(this.Ka&&(this.h.clearTimeout(this.Ka),this.Ka=null),Qk(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ka||(this.Ka=this.h.setTimeout(this.o,this.j),this.u=Wa())};
r.stop=function(){this.enabled=!1;this.Ka&&(this.h.clearTimeout(this.Ka),this.Ka=null)};
r.da=function(){xl.Ha.da.call(this);this.stop();delete this.h};function yl(a){H.call(this);this.G=a;this.o=0;this.j=100;this.u=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new xl(this.flushInterval);this.h.listen("tick",this.jd,!1,this);yc(this,this.h)}
v(yl,H);r=yl.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.j=1};
function zl(a){a.h.enabled||a.h.start();a.o++;a.o>=a.j&&a.jd()}
r.jd=function(){var a=this.i.values();a=[].concat(oa(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Al(a);this.o=0;this.h.enabled&&this.h.stop()};
r.Db=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new pk(a,b))};
r.ac=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new qk(a,b))};
function Bl(a,b){return a.A.has(b)?void 0:a.i.get(b)}
r.Ab=function(a){this.Oe(a,1,C.apply(1,arguments))};
r.Oe=function(a,b){var c=C.apply(2,arguments),d=Bl(this,a);d&&d instanceof pk&&(d.j(b,c),zl(this))};
r.record=function(a,b){var c=C.apply(2,arguments),d=Bl(this,a);d&&d instanceof qk&&(d.record(b,c),zl(this))};
function Al(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Cl(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function Dl(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;function El(a,b,c){c=c===void 0?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c;this.name="RpcError";Object.setPrototypeOf(this,this.constructor.prototype)}
v(El,Error);El.prototype.toString=function(){var a="RpcError("+(Dl(this.code)||String(this.code))+")";this.message&&(a+=": "+this.message);return a};function Fl(){}
Fl.prototype.serialize=function(a){var b=[];Gl(this,a,b);return b.join("")};
function Gl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Gl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Hl(d,c),c.push(":"),Gl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Hl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Il={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Jl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Hl(a,b){b.push('"',a.replace(Jl,function(c){var d=Il[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Il[c]=d);return d}),'"')}
;function Kl(){Pk.call(this);this.headers=new Map;this.h=!1;this.U=null;this.o=this.Y="";this.j=this.P=this.A=this.J=!1;this.G=0;this.u=null;this.ja="";this.fa=!1}
Ya(Kl,Pk);var Ll=/^https?$/i,Ml=["POST","PUT"],Nl=[];function Ol(a,b,c,d,e,f,g){var h=new Kl;Nl.push(h);b&&h.listen("complete",b);Lk(h,"ready",h.af);f&&(h.G=Math.max(0,f));g&&(h.fa=g);h.send(a,c,d,e)}
r=Kl.prototype;r.af=function(){this.dispose();Vb(Nl,this)};
r.send=function(a,b,c,d){if(this.U)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.J=!1;this.h=!0;this.U=new XMLHttpRequest;this.U.onreadystatechange=Sk(Ua(this.ke,this));try{this.getStatus(),this.P=!0,this.U.open(b,String(a),!0),this.P=!1}catch(g){this.getStatus();Pl(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Ob(Ml,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.U.setRequestHeader(d,c);this.ja&&(this.U.responseType=this.ja);"withCredentials"in this.U&&this.U.withCredentials!==this.fa&&(this.U.withCredentials=this.fa);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.Jg.bind(this),this.G)),
this.getStatus(),this.A=!0,this.U.send(a),this.A=!1}catch(g){this.getStatus(),Pl(this,g)}};
r.Jg=function(){typeof Ia!="undefined"&&this.U&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Qk(this,"timeout"),this.abort(8))};
function Pl(a,b){a.h=!1;a.U&&(a.j=!0,a.U.abort(),a.j=!1);a.o=b;Ql(a);Rl(a)}
function Ql(a){a.J||(a.J=!0,Qk(a,"complete"),Qk(a,"error"))}
r.abort=function(){this.U&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.U.abort(),this.j=!1,Qk(this,"complete"),Qk(this,"abort"),Rl(this))};
r.da=function(){this.U&&(this.h&&(this.h=!1,this.j=!0,this.U.abort(),this.j=!1),Rl(this,!0));Kl.Ha.da.call(this)};
r.ke=function(){this.K||(this.P||this.A||this.j?Sl(this):this.ag())};
r.ag=function(){Sl(this)};
function Sl(a){if(a.h&&typeof Ia!="undefined")if(a.A&&(a.U?a.U.readyState:0)==4)setTimeout(a.ke.bind(a),0);else if(Qk(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Tl(a))Qk(a,"complete"),Qk(a,"success");else{try{var b=(a.U?a.U.readyState:0)>2?a.U.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Ql(a)}}finally{Rl(a)}}}
function Rl(a,b){if(a.U){a.u&&(clearTimeout(a.u),a.u=null);var c=a.U;a.U=null;b||Qk(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.U};
r.isComplete=function(){return(this.U?this.U.readyState:0)==4};
function Tl(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.Y).match(fc)[1]||null,!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Ll.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.U?this.U.readyState:0)>2?this.U.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Ul(){}
Ul.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Ol(a.url,function(d){d=d.target;if(Tl(d)){try{var e=d.U?d.U.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.dd,a.timeoutMillis,a.withCredentials)};
Ul.prototype.Kc=function(){return 1};function Vl(a,b){this.logger=a;this.event=b;this.startTime=Wl()}
Vl.prototype.done=function(){this.logger.lb(this.event,Wl()-this.startTime)};
function Xl(){Oc.apply(this,arguments)}
v(Xl,Oc);function Yl(a,b,c){var d=Wl();b=b();a.lb(c,Wl()-d);return b}
function Zl(){Xl.apply(this,arguments)}
v(Zl,Xl);r=Zl.prototype;r.oc=function(){};
r.Pa=function(){};
r.lb=function(){};
r.wa=function(){};
r.Qc=function(){};
r.Pc=function(){};
r.ab=function(){};
r.Sc=function(){};
r.Oc=function(){};
r.Rc=function(){};
function $l(a){Xl.call(this);var b=this;this.logger=a;this.addOnDisposeCallback(function(){return void b.logger.dispose()})}
v($l,Xl);r=$l.prototype;r.update=function(a){this.logger.dispose();this.logger=a};
r.Pa=function(a){this.logger.Pa(a)};
r.lb=function(a,b){this.logger.lb(a,b)};
r.wa=function(a){this.logger.wa(a)};
r.Qc=function(a){this.logger.Qc(a)};
r.Pc=function(a,b){this.logger.Pc(a,b)};
r.ab=function(){this.logger.ab()};
r.Sc=function(a){this.logger.Sc(a)};
r.Oc=function(a){this.logger.Oc(a)};
r.Rc=function(a){this.logger.Rc(a)};
r.oc=function(a){this.logger.oc(a)};
function am(a,b,c,d){a=kk(ik(hk(new gk(1828,"0"),a),new Ul)).pd();b.length&&jk(a,qi(new pi,b));d!==void 0&&(a.hb=d);var e=new mk(1828,"","",!1,"",lk(a));yc(e,a);var f=new yl({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.jd()}finally{e.dispose()}})});
f.j=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function bm(a,b){H.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(bm,H);function cm(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Wl());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Wl(),a.timer=void 0}},b)}}
function dm(a,b){Xl.call(this);this.metrics=a;this.na=b}
v(dm,Xl);r=dm.prototype;r.oc=function(a){this.metrics.Dg.record(a,this.na)};
r.Pa=function(a){this.metrics.eventCount.la(a,this.na)};
r.lb=function(a,b){this.metrics.qf.record(b,a,this.na)};
r.wa=function(a){this.metrics.errorCount.la(a,this.na)};
r.Sc=function(a){this.metrics.Pg.la(a,this.na)};
r.Oc=function(a){this.metrics.Xe.la(a,this.na)};
r.Rc=function(a){this.metrics.Og.la(a,this.na)};
r.Qc=function(a){this.metrics.payloadSize.record(a,this.na)};
r.Pc=function(a,b){this.metrics.Zf.record(b,a,this.na)};
function em(a,b){b=b===void 0?[]:b;var c={na:a.na||"_",sd:a.sd||[],xd:a.xd|0,hb:a.hb,Wc:a.Wc||function(){},
Wb:a.Wb||function(f,g){return am(f,g,c.Wc,c.hb)}},d=c.Wb("53",c.sd.concat(b));
dm.call(this,{Dg:new Rc(d),errorCount:new Vc(d),eventCount:new Tc(d),qf:new Uc(d),Sj:new Sc(d),Pg:new Wc(d),Xe:new Xc(d),Og:new Yc(d),payloadSize:new Zc(d),Zf:new $c(d)},c.na);var e=this;this.options=c;this.service=d;this.j=!a.Wb;this.h=new bm(function(){return void e.service.jd()},c.xd);
this.addOnDisposeCallback(function(){e.h.dispose();e.j&&e.service.dispose()});
b.slice().sort(Yb)}
v(em,dm);em.prototype.ab=function(){cm(this.h)};
function Wl(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function fm(a){this.F=M(a)}
v(fm,O);function gm(a){this.F=M(a)}
v(gm,O);function hm(a){this.F=M(a,0,"bfkj")}
v(hm,O);var im=function(a){return ye(function(b){return b instanceof a&&!se(b)})}(hm);
hm.Uf="bfkj";function Kc(a){this.F=M(a)}
v(Kc,O);function jm(a){this.F=M(a)}
v(jm,O);var km=oi(jm);function lm(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function mm(a,b){if(a.disable)return new Zl;b=b?Ic(b):[];a={na:a.na,sd:a.tf,xd:a.Vf,hb:a.hb,Wc:a.Wc,Wb:a.Wb};b=b===void 0?[]:b;return new em(a,b)}
function nm(a){function b(y,w,I,F){Promise.resolve().then(function(){k.done();h.ab();h.dispose();g.resolve({Se:y,Cg:w,fg:I,Ye:F})})}
function c(y,w,I,F){if(!d.logger.K){var T="k";w?T="h":I&&(T="u");T!=="k"?F!==0&&(d.logger.Pa(T),d.logger.lb(T,y)):d.j<=0?(d.logger.Pa(T),d.logger.lb(T,y),d.j=Math.floor(Math.random()*200)):d.j--}}
H.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.h=new jm;if("challenge"in a&&im(a.challenge)){var e=wg(a.challenge,4,void 0,xe);var f=wg(a.challenge,5,void 0,xe);wg(a.challenge,7,void 0,xe)&&(this.h=km(wg(a.challenge,7,void 0,xe)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var y,w,I;return B(function(F){if(F.h==1)return F.yield(d.i,2);y=F.i;w=y.Cg;(I=w)==null||I();F.u()})});
this.logger=mm(a.Qb||{},this.h);yc(this,this.logger);var g=new lm;this.i=g.promise;this.logger.Pa("t");var h=this.logger.share(),k=new Vl(h,"t"),l=[function(y,w){d.logger.lb(y,w)},
function(y){d.logger.wa(y)},
function(y){d.logger.Qc(y)},
function(y,w){d.logger.Pc(y,w)}];
if(!D[f])throw this.logger.wa(25),Error("EGOU");if(!D[f].a)throw this.logger.wa(26),Error("ELIU");try{var m=D[f].a;f=[];for(var p=[],t=Ic(this.h),n=0;n<t.length;n++)f.push(t[n]),p.push(1);var x=Mc(this.h);for(t=0;t<x.length;t++)f.push(x[t]),p.push(2);this.o=z(m(e,b,!0,a.Fe,c,[f,p],wg(this.h,5),!1,l)).next().value;this.Ub=g.promise.then(function(){})}catch(y){throw this.logger.wa(28),y;
}}
v(nm,H);r=nm.prototype;r.snapshot=function(a){if(this.K)throw Error("Already disposed");this.logger.Pa("n");var b=this.logger.share();return this.i.then(function(c){var d=c.Se;return new Promise(function(e){var f=new Vl(b,"n");d(function(g){f.done();b.oc(g.length);b.ab();b.dispose();e(g)},[a.Na,
a.hd,a.Je,a.Jd])})})};
r.ye=function(a){var b=this;if(this.K)throw Error("Already disposed");this.logger.Pa("n");var c=Yl(this.logger,function(){return b.o([a.Na,a.hd,a.Je,a.Jd])},"n");
this.logger.oc(c.length);this.logger.ab();return c};
r.qc=function(a){this.i.then(function(b){var c;(c=b.fg)==null||c(a)})};
r.Gc=function(a,b){return this.i.then(function(c){var d;return(d=c.Ye)==null?void 0:d(a,b,!1)})};
r.xc=function(){return this.logger.share()};function om(a){if(!a)return null;a=Cf(dg(a,4,void 0,cg));return a===null||a===void 0?null:mb(a)}
;function pm(){this.promises={};this.h=null}
function qm(){pm.instance||(pm.instance=new pm);return pm.instance}
function rm(a,b){return sm(a,qg(b,fm,1,xe),qg(b,gm,2,xe),wg(b,3,void 0,xe))}
function sm(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return tm(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){tm(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function tm(a,b){return b?um(b):a?wm(a):Promise.resolve()}
function um(a){return new Promise(function(b,c){var d=sj("SCRIPT"),e=om(a);Ib(d,e);d.onload=function(){uj(d);b()};
d.onerror=function(){uj(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function wm(a){return new Promise(function(b){var c=sj("SCRIPT");if(a){var d=Cf(dg(a,6,void 0,cg));d=d===null||d===void 0?null:Fb(d)}else d=null;c.textContent=Gb(d);Hb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);uj(c);b()})}
;function xm(a){this.F=M(a)}
v(xm,O);function ym(a,b){return lg(a,1,Bf(b))}
function zm(a,b){return lg(a,2,Bf(b))}
;function Am(a){H.call(this);var b=this;this.options=a;this.A=new lm;this.Ub=this.A.promise;this.u=new lm;this.J=1;this.j=new lm;this.o=[];this.isPaused=!1;this.Xc=a.Xc||function(){};
this.logger=new $l(mm(a.Qb||{}));Bm(this,a.Ua,a.Ff,a.Ij,a.Kj,Object.assign({},Cm,a.Xb||{}));this.addOnDisposeCallback(function(){return void Dm(b)})}
v(Am,H);r=Am.prototype;r.snapshot=function(a){var b=this;return B(function(c){switch(c.h){case 1:if(b.K)throw Error("Already disposed");if(b.i||b.G){c.v(2);break}return c.yield(b.u.promise,2);case 2:if(!b.i){c.v(4);break}return c.yield(b.i.snapshot(a),5);case 5:return c.return(c.i);case 4:throw b.G;}})};
r.pause=function(){this.K||this.isPaused||(this.isPaused=!0,this.h&&this.h.pause())};
r.resume=function(){!this.K&&this.isPaused&&(this.isPaused=!1,this.h&&this.h.resume())};
r.checkForRefresh=function(){var a=this;return B(function(b){if(a.K)throw Error("Already disposed");var c;if(c=a.h)c=a.h,c.isExpired()?(Em(c),c.ed(0),c=!0):c=!1,c=!c;return c?b.v(0):b.yield(a.j.promise,0)})};
function Fm(a){var b;return B(function(c){if(a.K)throw Error("Already disposed");(b=a.h)==null||Gm(b);return c.yield(a.j.promise,0)})}
function Dm(a){a.G=Error("Cancelled by dispose");a.u.resolve();Nc(a.A.promise);a.A.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(function(){var c;return B(function(d){(c=a.i)==null||c.dispose();a.i=void 0;d.u()})});
a.o=[];var b;(b=a.h)==null||Gm(b);Nc(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
r.qc=function(a){var b,c;(b=this.i)==null||(c=b.qc)==null||c.call(b,a)};
r.Gc=function(a,b){var c,d,e;return(e=(c=this.i)==null?void 0:(d=c.Gc)==null?void 0:d.call(c,a,b))!=null?e:Promise.resolve()};
function Hm(a,b){var c=a.Xc;a.Xc=function(){c();b()}}
function Im(a,b){a.K||(a.i=b,a.logger.update(b.xc()),a.u.resolve(),a.A.resolve(void 0),a.Xc())}
r.handleError=function(a){if(!this.K){this.G=a;this.u.resolve();var b,c;(c=(b=this.options).Vc)==null||c.call(b,a)}};
function Jm(a,b){b&&(Promise.all(a.o).then(function(){return void b.dispose()}),a.o=[])}
function Km(a,b){a.J=b;var c,d;(d=(c=a.options).Bj)==null||d.call(c,b)}
function Lm(a){a.K||(a.j.resolve(),a.j=new lm)}
function Bm(a,b,c,d,e,f){d=d===void 0?qm():d;e=e===void 0?Promise.resolve(void 0):e;var g,h,k,l,m,p,t,n,x,y,w,I;B(function(F){switch(F.h){case 1:return F.yield(0,3);case 3:h=null;if(!g){F.v(6);break}Km(a,7);F.o(7);return F.yield(Mm(g.snapshot({}),f.df,function(){return Promise.resolve("E:CTO")}),9);
case 9:h=F.i;F.A(6);break;case 7:F.j(),h="E:UCE";case 6:k=void 0,l=g?f.lf:f.mf,m=new Sj(l,f.nf,f.pf,f.kf),p=1;case 10:if(!(p<=f.maxAttempts)){F.v(12);break}if(p===1){F.v(13);break}Km(a,0);a.h=new Nm(m.getValue(),f.ld,f.Ce);return F.yield(a.h.promise,14);case 14:t=F.i,a.h=void 0,t===1?(p=1,m.reset()):Tj(m);case 13:F.o(15);n=void 0;if(c){n=c;F.v(17);break}Km(a,5);x=d.h;return F.yield(Mm(Om(b,x,h),f.xf,function(){return Promise.reject(Error("RGF:Fetch timed out"))}),18);
case 18:n=F.i;case 17:return Km(a,3),F.yield(Mm(rm(d,n),f.Pf,function(){return Promise.reject(Error("DTZ:Script timed out"))}),19);
case 19:return Km(a,8),F.yield(e,20);case 20:return y=new nm({challenge:n,Qb:a.options.Qb,Fe:a.options.Fe}),F.yield(Mm(y.Ub,f.Bg,function(){return Promise.reject(Error("QEG:Setup timed out"))}),21);
case 21:k=y;F.v(12);break;case 15:w=F.j(),a.handleError(w),Lm(a);case 11:p++;F.v(10);break;case 12:if(a.K){F.v(5);break}k&&(c=void 0,Jm(a,g),g=k,Im(a,k),Lm(a));Km(a,2);a.h=new Nm(f.qe,f.ld,f.Ce);a.isPaused&&a.h.pause();return F.yield(a.h.promise,22);case 22:a.h=void 0;if(a.K){F.v(5);break}F.v(3);break;case 5:(I=g)==null||I.dispose(),F.u()}})}
r.xc=function(){return this.logger.share()};
var Cm={qe:432E5,ld:3E5,Ce:10,df:1E4,xf:3E4,Pf:3E4,Bg:6E4,mf:1E3,lf:6E4,nf:6E5,pf:.25,kf:2,maxAttempts:10};function Mm(a,b,c){var d;c=(new Promise(function(e){d=setTimeout(e,b)})).then(c);
Nc(c);return Promise.race([a.finally(function(){return void clearTimeout(d)}),
c])}
function Nm(a,b,c){var d=this;this.endTimeMs=0;this.h=null;this.isPaused=!1;this.tick=function(){if(!d.isPaused){var e=d.endTimeMs-Date.now();e<=d.i?(d.h=null,d.ed(0)):d.h=setTimeout(d.tick,Math.min(e,d.ld))}};
this.ld=b;this.i=c;this.promise=new Promise(function(e){d.ed=e});
Pm(this,a)}
function Pm(a,b){a.endTimeMs=Date.now()+b;a.tick()}
Nm.prototype.pause=function(){this.isPaused||(this.isPaused=!0,Em(this))};
Nm.prototype.resume=function(){this.isPaused&&(this.isPaused=!1,this.tick())};
function Gm(a){Em(a);a.endTimeMs=0;a.isPaused=!1;a.ed(1)}
function Em(a){a.h&&(clearTimeout(a.h),a.h=null)}
Nm.prototype.isExpired=function(){return Date.now()>this.endTimeMs};function Qm(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
var Rm,Sm=(Rm=Math.imul)!=null?Rm:function(a,b){return a*b|0};
function Tm(a,b,c,d){b=b===void 0?0:b;c=c===void 0?a.length:c;var e=0;for(d&&(e=Tm(d));b<c;b++)d=typeof a==="string"?a.charCodeAt(b):a[b],e=Sm(31,e)+d|0;return e}
function Um(a,b){return[Tm(a,0,a.length>>1,b),Tm(a,a.length>>1)]}
var Vm=[196,200,224,18];function Wm(a){var b=z(Um(a,Vm));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)}
function Xm(a,b){var c=Um(b);a=new Uint32Array(a.buffer);b=a[0];var d=z(c);c=d.next().value;d=d.next().value;for(var e=1;e<a.length;e+=2){for(var f=b,g=e,h=c,k=d,l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[e]^=f[0];e+1<a.length&&(a[e+1]^=f[1])}}
function Ym(a,b,c,d,e){var f=(4-(Vm.length+c.length)%4)%4,g=new Uint8Array(4+f+Vm.length+4+c.length),h=new DataView(g.buffer),k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(Vm,k);k+=Vm.length;h.setUint32(k,e);g.set(c,k+4);Xm(g,d);return a.ra(b,function(l){return void globalThis.sessionStorage.removeItem(l)})?Qm(b,Ed(g))?"s":"t":"i"}
function Zm(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];try{var d=Gd(c);Xm(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<Vm.length;c++)if(d[b++]!==Vm[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function $m(a,b,c){c=c===void 0?[]:c;this.maxItems=a;this.h=b===void 0?0:b;this.i=c}
function an(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new $m(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new $m(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new $m(a)):new $m(a,c,b)}
$m.prototype.serialize=function(){return String(this.h)+","+this.i.join()};
$m.prototype.ra=function(a,b){var c=void 0;if(this.i[this.h]!==a){var d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=Qm("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a};
function Fc(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=an(a))}
function bn(a,b,c,d,e){var f=a.index?Yl(a.logger,function(){return Ym(a.index,Wm(b),c,d,e)},"W"):"u";
a.logger.Rc(f)}
function cn(a,b,c){var d=z(a.index?Yl(a.logger,function(){return Zm(Wm(b),c)},"R"):["u"]),e=d.next().value;
d=d.next().value;a.logger.Oc(e);return d}
;var dn={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function en(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=fn(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=gn(a,h),d+=gn(a,h+4),e+=gn(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return dn.toString(e)}
function fn(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function gn(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function hn(a){H.call(this);this.logger=a;this.j=new lm}
v(hn,H);function jn(a,b){var c=setTimeout(function(){a.j.resolve()},b);
a.addOnDisposeCallback(function(){return void clearTimeout(c)})}
hn.prototype.Uc=function(a,b){var c=this.nb(a);b==null||b(c);return Yl(this.logger,function(){return Ed(c,2)},this.i)};
function kn(a,b,c,d){return Yl(a.logger,function(){return c?a.Uc(b,d):a.nb(b,d)},a.h)}
function ln(a,b,c,d){hn.call(this,a);this.o=b;this.A=c;this.h="m";this.i="x";this.u=0;jn(this,d)}
v(ln,hn);ln.prototype.nb=function(a,b){var c=this;this.logger.Pa(this.h);++this.u>=this.A&&this.j.resolve();var d=a();a=Yl(this.logger,function(){return c.o(d)},"C");
if(a===void 0)throw new vc(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new vc(18,"ODM:Invalid");b==null||b(a);return a};
function mn(a,b,c){hn.call(this,a);this.o=b;this.h="f";this.i="z";jn(this,c)}
v(mn,hn);mn.prototype.nb=function(){return this.o};
function nn(a,b,c){hn.call(this,a);this.o=b;this.h="w";this.i="z";jn(this,c)}
v(nn,hn);nn.prototype.nb=function(){var a=this;return Yl(this.logger,function(){return Gd(a.o)},"d")};
nn.prototype.Uc=function(){return this.o};
function on(a,b){hn.call(this,a);this.error=b;this.h="e";this.i="y"}
v(on,hn);function pn(a,b){var c=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);b=c.length+1;c=qn(c);var d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
on.prototype.nb=function(){if(this.o)return this.o;this.o=pn(this,function(a){return"_"+en(a)});
return pn(this,function(a){return a})};
function rn(a,b,c){hn.call(this,a);this.o=b;this.clientState=c;this.h="S";this.i="q"}
v(rn,hn);rn.prototype.nb=function(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([this.o&255,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);for(var d=b=b.length;d<c.length;++d)c[d]^=c[d%b];this.logger.Sc(this.clientState);return a};
function qn(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):fd(a)}
;var sn={yf:3E4,Eg:2E4};function tn(a){H.call(this);var b=this;this.Tb=new lm;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Ua=a.Ua;this.Xb=Object.assign({},sn,a.Xb||{});this.logger=a.vm.xc();var c;this.onError=(c=a.onError)!=null?c:function(){};
this.Od=a.Od||!1;if(un(a)){var d=this.vm;this.o=function(){return Fm(d).catch(function(g){g=Gc(b,new vc(b.h?20:32,"TRG:Disposed",g));b.i=g;var h;(h=b.h)==null||h.dispose();b.h=void 0;b.Tb.reject(g)})};
Hm(d,function(){return void vn(b)});
d.J===2&&vn(this)}else this.o=a.Aj,vn(this);var e=this.logger.share();e.Pa("o");var f=new Vl(e,"o");this.Tb.promise.then(function(){f.done();e.ab();e.dispose()},function(){return void e.dispose()});
this.addOnDisposeCallback(function(){b.h?(b.h.dispose(),b.h=void 0):b.i?b.logger.ab():(b.i=Gc(b,new vc(32,"TNP:Disposed")),b.logger.ab(),b.Tb.reject(b.i))});
yc(this,this.logger)}
v(tn,H);function wn(a,b){if(!(b instanceof vc))if(b instanceof El){var c=Error(b.toString());c.stack=b.stack;b=new vc(11,"EBH:Error",c)}else b=new vc(12,"BSO:Unknown",b);return Gc(a,b)}
function vn(a){var b,c,d,e,f,g,h,k,l,m,p,t,n,x,y;return B(function(w){switch(w.h){case 1:b=void 0;a.j++;c=new lm;a.vm instanceof Am&&a.vm.o.push(c.promise);if(!a.Od){w.v(2);break}d=new lm;setTimeout(function(){return void d.resolve()});
return w.yield(d.promise,2);case 2:return e=a.logger.share(),w.o(4,5),a.state=5,f={},g=[],w.yield(Mm(a.vm.snapshot({Na:f,Je:g}),a.Xb.Eg,function(){return Promise.reject(new vc(15,"MDA:Timeout"))}),7);
case 7:h=w.i;if(a.K)throw new vc(a.h?20:32,"MDA:Disposed");k=g[0];a.state=6;return w.yield(Mm(xn(a.Ua,h),a.Xb.yf,function(){return Promise.reject(new vc(10,"BWB:Timeout"))}),8);
case 8:l=w.i;if(a.K)throw new vc(a.h?20:32,"BWB:Disposed");a.state=7;b=Yl(e,function(){var F=yn(a,l,c,k);F.j.promise.then(function(){return void a.o()});
return F},"i");
case 5:w.aa();e.dispose();w.fa(6);break;case 4:m=w.j();(p=b)==null||p.dispose();if(!a.i){t=wn(a,m);c.resolve();var I;if(I=a.vm instanceof Am&&a.j<2)a:if(m instanceof vc)I=m.code!==32&&m.code!==20&&m.code!==10;else{if(m instanceof El)switch(m.code){case 2:case 13:case 14:case 4:break;default:I=!1;break a}I=!0}if(I)return n=(1+Math.random()*.25)*(a.h?6E4:1E3),x=setTimeout(function(){return void a.o()},n),a.addOnDisposeCallback(function(){return void clearTimeout(x)}),w.return();
a.i=t}e.wa(a.h?13:14);a.Tb.reject(a.i);return w.return();case 6:a.state=8,a.j=0,(y=a.h)==null||y.dispose(),a.h=b,a.Tb.resolve(),w.u()}})}
function yn(a,b,c,d){var e=ug(b,2)*1E3;if(e<=0)throw new vc(31,"TTM:Invalid");if(wg(b,4))return new nn(a.logger,wg(b,4),e);if(!ug(b,3))return new mn(a.logger,Td(ig(b)),e);if(!d)throw new vc(4,"PMD:Undefined");d=d(Td(ig(b)));if(typeof d!=="function")throw new vc(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new ln(a.logger,d,ug(b,3),e);a.addOnDisposeCallback(function(){return void c.resolve()});
return a}
tn.prototype.nb=function(a){return zn(this,Object.assign({},a),!1)};
tn.prototype.Uc=function(a){return zn(this,Object.assign({},a),!0)};
function Gc(a,b){a.logger.wa(b.code);a.onError(b);return b}
function An(a,b){b=b instanceof vc?b:new vc(5,"TVD:error",b);return Gc(a,b)}
function zn(a,b,c){try{if(a.K)throw new vc(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;var d,e;return(e=(d=Bn(a,b,c))!=null?d:Cn(a,b,c))!=null?e:Dn(a,b,c)}catch(f){if(!b.Xf)throw An(a,f);return En(a,c,f)}}
function Bn(a,b,c){var d;return(d=a.h)==null?void 0:kn(d,function(){return Fn(a,b)},c,function(e){var f;
if(a.h instanceof ln&&((f=b.Dc)==null?0:f.Fg))try{var g;(g=a.cache)==null||bn(g,Fn(a,b),e,b.Dc.Td,a.u-120)}catch(h){Gc(a,new vc(24,"ELX:write",h))}})}
function Cn(a,b,c){var d;if((d=b.Dc)!=null&&d.Ue)try{var e,f=(e=a.cache)==null?void 0:cn(e,Fn(a,b),b.Dc.Td);return f?c?Yl(a.logger,function(){return Ed(f,2)},"a"):f:void 0}catch(g){Gc(a,new vc(23,"RXO:read",g))}}
function Dn(a,b,c){var d={stack:[],error:void 0,rb:!1};try{if(!b.Wf)throw new vc(29,"SDF:notready");return kn(cb(d,new rn(a.logger,0,a.state)),function(){return Fn(a,b)},c)}catch(e){d.error=e,d.rb=!0}finally{db(d)}}
function En(a,b,c){var d={stack:[],error:void 0,rb:!1};try{var e=An(a,c);return kn(cb(d,new on(a.logger,e)),function(){return[]},b)}catch(f){d.error=f,d.rb=!0}finally{db(d)}}
function Fn(a,b){return b.qd?b.qd:b.Na?Yl(a.logger,function(){return b.qd=qn(b.Na)},"c"):[]}
var un=function(a){return ye(function(b){if(!Fe(b))return!1;for(var c=z(Object.entries(a)),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;if(!(d in b)){if(e.qj===!0)continue;return!1}if(!e(b[d]))return!1}return!0})}({vm:function(a){return ye(function(b){return b instanceof a})}(Am)},"");function Gn(){if(!Hn){Hn=new yl(new In);var a=P("client_streamz_web_flush_count",-1);a!==-1&&(Hn.j=a)}this.h=a=Hn;a.Db("/client_streamz/youtube/aba/gac",Pc("type"),Pc("sequence"))}
Gn.prototype.la=function(a,b){this.h.Ab("/client_streamz/youtube/aba/gac",a,b)};var Jn=window;function Kn(a){var b=Ln;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Mn(){var a=[];Kn(function(b){a.push(b)});
return a}
;var Ln={Qg:"allow-forms",Rg:"allow-modals",Sg:"allow-orientation-lock",Tg:"allow-pointer-lock",Ug:"allow-popups",Vg:"allow-popups-to-escape-sandbox",Wg:"allow-presentation",Xg:"allow-same-origin",Yg:"allow-scripts",Zg:"allow-top-navigation",ah:"allow-top-navigation-by-user-activation"},Nn=el(function(){return Mn()});
function On(){var a=Pn(),b={};Pb(Nn(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Pn(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Qn(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Rn=(new Date).getTime();function Sn(a){this.F=M(a)}
v(Sn,O);var Tn=oi(Sn);function Un(a){Pk.call(this);var b=this;this.A=this.j=0;this.Ja=a!=null?a:{xa:function(e,f){return setTimeout(e,f)},
ya:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(Vn(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Wn(this)}
v(Un,Pk);function Xn(){var a=Yn;Un.instance||(Un.instance=new Un(a));return Un.instance}
Un.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ja.ya(this.A);delete Un.instance};
Un.prototype.Aa=function(){return this.h};
function Wn(a){a.A=a.Ja.xa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.v(3):c.yield(Vn(a),3):c.yield(Vn(a),3);Wn(a);c.u()})},3E4)}
function Vn(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,h.o(2,3),d&&(a.j=a.Ja.xa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.aa();a.u=void 0;a.j&&(a.Ja.ya(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Qk(a,"networkstatus-online"):Qk(a,"networkstatus-offline"));c(g);h.fa(0);break;case 2:h.j(),g=!1,h.v(3)}})})}
;function Zn(a){this.F=M(a)}
v(Zn,O);var $n=[0,ki,-1];var ao=[0,Wh,-1];var bo=[0,$n,-1];var co=[0,1,Uh,-4,Oh,[0,Qh,-1,Uh],ai,Qh,di,[0,ii,Uh],Uh,-1,ii,-2,Qh,-1,ii,Qh,ii,Uh,[0,3,Uh,-1,4,gi],Oh,hi,[0,ii,-1,ai],Zh];var eo=[0,Th,-1,hi];var fo=[0,ao,di,[0,ai,ii],Qh,ii,-1];function go(a){this.F=M(a)}
v(go,O);var ho=function(a){return function(b){return Fh(b,a)}}([0,
ii,-1,Rh,ai,$n,-1,Qh,Uh,ii,ao,ai,ii,-1,bo,Uh,Th,ao,Qh,co,ai,ji,di,fo,1,di,eo,ii,ao]);function io(){this.data=[];this.h=-1}
io.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
io.prototype.get=function(a){return!!this.data[a]};
function jo(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function ko(){this.blockSize=-1}
;function lo(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.I=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
v(lo,ko);lo.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function mo(a,b,c){c||(c=0);var d=a.I;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
lo.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)mo(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){mo(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){mo(this,e);f=0;break}}this.i=f;this.o+=b}};
lo.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;mo(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function no(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function oo(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function po(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:no(a).match(/\S+/g)||[],b=Ob(a,b)>=0);return b}
function qo(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):po(a,"inverted-hdpi")&&oo(a,Array.prototype.filter.call(a.classList?a.classList:no(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function ro(){}
ro.prototype.next=function(){return so};
var so={done:!0,value:void 0};ro.prototype.Cb=function(){return this};function to(a){if(a instanceof uo||a instanceof vo||a instanceof wo)return a;if(typeof a.next=="function")return new uo(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new uo(function(){return a[Symbol.iterator]()});
if(typeof a.Cb=="function")return new uo(function(){return a.Cb()});
throw Error("Not an iterator or iterable.");}
function uo(a){this.h=a}
uo.prototype.Cb=function(){return new vo(this.h())};
uo.prototype[Symbol.iterator]=function(){return new wo(this.h())};
uo.prototype.i=function(){return new wo(this.h())};
function vo(a){this.h=a}
v(vo,ro);vo.prototype.next=function(){return this.h.next()};
vo.prototype[Symbol.iterator]=function(){return new wo(this.h)};
vo.prototype.i=function(){return new wo(this.h)};
function wo(a){uo.call(this,function(){return a});
this.j=a}
v(wo,uo);wo.prototype.next=function(){return this.j.next()};function xo(a){return a=="\r"||a=="\n"||a==" "||a=="\t"}
;function yo(){this.A=null;this.Da=[];this.I="";this.G=[];this.i=this.h=0;this.j=!1;this.u=0;this.J=/[\\"]/g;this.D=this.o=0}
yo.prototype.done=function(){return this.o===2};
function zo(a,b,c){a.o=3;a.A="The stream is broken @"+a.i+"/"+c+". With input:\n"+b;throw Error(a.A);}
yo.prototype.parse=function(a){function b(){for(;p<a.length;)if(xo(a[p]))p++,f.i++;else break;return p<k}
function c(){for(var n;;){n=a[p++];if(!n)break;f.i++;switch(f.D){case 0:n==="{"?f.D=2:n==="["?f.D=4:xo(n)||zo(f,a,p);continue;case 7:case 2:if(xo(n))continue;if(f.D===7)g.push(8);else if(n==="}"){e("{}");f.D=d();continue}else g.push(3);n==='"'?f.D=6:zo(f,a,p);continue;case 8:case 3:if(xo(n))continue;n===":"?(f.D===3&&(g.push(3),f.h++),f.D=1):n==="}"?(f.h--,e(),f.D=d()):n===","?(f.D===3&&g.push(3),f.D=7):zo(f,a,p);continue;case 4:case 1:if(xo(n))continue;if(f.D===4)if(f.h++,f.D=1,n==="]"){f.h--;if(f.h===
0){f.D=5;return}e("[]");f.D=d();continue}else g.push(5);n==='"'?f.D=6:n==="{"?f.D=2:n==="["?f.D=4:n==="t"?f.D=9:n==="f"?f.D=12:n==="n"?f.D=16:n!=="-"&&("0123456789".indexOf(n)!==-1?f.D=20:zo(f,a,p));continue;case 5:if(n===",")g.push(5),f.D=1,f.h===1&&(m=p);else if(n==="]"){f.h--;if(f.h===0)return;e();f.D=d()}else if(xo(n))continue;else zo(f,a,p);continue;case 6:var x=p;a:for(;;){for(;f.u>0;)if(n=a[p++],f.u===4?f.u=0:f.u++,!n)break a;if(n==='"'&&!f.j){f.D=d();break}if(n==="\\"&&!f.j&&(f.j=!0,n=a[p++],
!n))break;if(f.j)if(f.j=!1,n==="u"&&(f.u=1),n=a[p++])continue;else break;h.lastIndex=p;n=h.exec(a);if(!n){p=a.length+1;break}p=n.index+1;n=a[n.index];if(!n)break}f.i+=p-x;continue;case 9:if(!n)continue;n==="r"?f.D=10:zo(f,a,p);continue;case 10:if(!n)continue;n==="u"?f.D=11:zo(f,a,p);continue;case 11:if(!n)continue;n==="e"?f.D=d():zo(f,a,p);continue;case 12:if(!n)continue;n==="a"?f.D=13:zo(f,a,p);continue;case 13:if(!n)continue;n==="l"?f.D=14:zo(f,a,p);continue;case 14:if(!n)continue;n==="s"?f.D=15:
zo(f,a,p);continue;case 15:if(!n)continue;n==="e"?f.D=d():zo(f,a,p);continue;case 16:if(!n)continue;n==="u"?f.D=17:zo(f,a,p);continue;case 17:if(!n)continue;n==="l"?f.D=18:zo(f,a,p);continue;case 18:if(!n)continue;n==="l"?f.D=d():zo(f,a,p);continue;case 19:n==="."?f.D=20:zo(f,a,p);continue;case 20:if("0123456789.eE+-".indexOf(n)!==-1)continue;else p--,f.i--,f.D=d();continue;default:zo(f,a,p)}}}
function d(){var n=g.pop();return n!=null?n:1}
function e(n){f.h>1||(n||(n=m===-1?f.I+a.substring(l,p):a.substring(m,p)),f.Da.push(JSON.parse(n)),m=p)}
for(var f=this,g=f.G,h=f.J,k=a.length,l=0,m=-1,p=0;p<k;)switch(f.o){case 3:return zo(f,a,p),null;case 2:return b()&&zo(f,a,p),null;case 0:if(b()){var t=a[p++];f.i++;if(t==="["){f.o=1;l=p;f.D=4;continue}else zo(f,a,p)}return null;case 1:return c(),f.h===0&&f.D==5?(f.o=2,f.I=a.substring(p)):f.I=m===-1?f.I+a.substring(l):a.substring(m),f.Da.length>0?(t=f.Da,f.Da=[],t):null}return null};function Ao(a){H.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
Ya(Ao,H);r=Ao.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ac(a)}return!1};
r.Ac=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Vb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.Bb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.A)for(f=0;f<c.length;f++)e=c[f],Bo(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.K;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Ac(c)}}return f!=0}return!1};
function Bo(a,b,c){al(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ac,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.da=function(){Ao.Ha.da.call(this);this.clear();this.j.length=0};function Co(a){this.h=a}
Co.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Fl).serialize(b))};
Co.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Co.prototype.remove=function(a){this.h.remove(a)};function Do(a){this.h=a}
Ya(Do,Co);function Eo(a){this.data=a}
function Fo(a){return a===void 0||a instanceof Eo?a:new Eo(a)}
Do.prototype.set=function(a,b){Do.Ha.set.call(this,a,Fo(b))};
Do.prototype.i=function(a){a=Do.Ha.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Do.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Go(a){this.h=a}
Ya(Go,Do);Go.prototype.set=function(a,b,c){if(b=Fo(b)){if(c){if(c<Wa()){Go.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Go.Ha.set.call(this,a,b)};
Go.prototype.i=function(a){var b=Go.Ha.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Go.prototype.remove.call(this,a);else return b}};function Ho(){}
;function Io(){}
Ya(Io,Ho);Io.prototype[Symbol.iterator]=function(){return to(this.Cb(!0)).i()};
Io.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Jo(a){this.h=a;this.i=null}
Ya(Jo,Io);r=Jo.prototype;r.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
r.set=function(a,b){Ko(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){Ko(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){Ko(this);this.h.removeItem(a)};
r.Cb=function(a){Ko(this);var b=0,c=this.h,d=new ro;d.next=function(){if(b>=c.length)return so;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){Ko(this);this.h.clear()};
r.key=function(a){Ko(this);return this.h.key(a)};
function Ko(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||ed(Error("Storage mechanism: Storage unavailable"))}
;function Lo(){var a=null;try{a=D.localStorage||null}catch(b){}Jo.call(this,a)}
Ya(Lo,Jo);function Mo(a,b){this.i=a;this.h=b+"::"}
Ya(Mo,Io);Mo.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Mo.prototype.get=function(a){return this.i.get(this.h+a)};
Mo.prototype.remove=function(a){this.i.remove(this.h+a)};
Mo.prototype.Cb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new ro;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function No(a){if(a.ib&&typeof a.ib=="function")return a.ib();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(La(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ej(a)}
function Oo(a){if(a.kc&&typeof a.kc=="function")return a.kc();if(!a.ib||typeof a.ib!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(La(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function Po(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(La(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=Oo(a),e=No(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function Qo(a){this.i=this.A=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof Qo?(this.o=a.o,Ro(this,a.j),this.A=a.A,this.i=a.i,So(this,a.G),this.h=a.h,To(this,a.I.clone()),this.u=a.u):a&&(b=String(a).match(fc))?(this.o=!1,Ro(this,b[1]||"",!0),this.A=Uo(b[2]||""),this.i=Uo(b[3]||"",!0),So(this,b[4]),this.h=Uo(b[5]||"",!0),To(this,b[6]||"",!0),this.u=Uo(b[7]||"")):(this.o=!1,this.I=new Vo(null,this.o))}
Qo.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Wo(b,Xo,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.A)&&a.push(Wo(b,Xo,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(Wo(c,c.charAt(0)=="/"?Yo:Zo,!0));(c=this.I.toString())&&a.push("?",c);(c=this.u)&&a.push("#",Wo(c,$o));return a.join("")};
Qo.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Ro(b,a.j):c=!!a.A;c?b.A=a.A:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)So(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.I.toString()!=="";c?To(b,a.I.clone()):c=!!a.u;c&&(b.u=a.u);return b};
Qo.prototype.clone=function(){return new Qo(this)};
function Ro(a,b,c){a.j=c?Uo(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function So(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function To(a,b,c){b instanceof Vo?(a.I=b,ap(a.I,a.o)):(c||(b=Wo(b,bp)),a.I=new Vo(b,a.o))}
function Uo(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Wo(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,cp),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function cp(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Xo=/[#\/\?@]/g,Zo=/[#\?:]/g,Yo=/[#\?]/g,bp=/[#\?@]/g,$o=/#/g;function Vo(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function dp(a){a.h||(a.h=new Map,a.i=0,a.j&&mc(a.j,function(b,c){a.add(dc(b),c)}))}
r=Vo.prototype;r.add=function(a,b){dp(this);this.j=null;a=ep(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
r.remove=function(a){dp(this);a=ep(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
r.clear=function(){this.h=this.j=null;this.i=0};
function fp(a,b){dp(a);b=ep(a,b);return a.h.has(b)}
r.forEach=function(a,b){dp(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
r.kc=function(){dp(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
r.ib=function(a){dp(this);var b=[];if(typeof a==="string")fp(this,a)&&(b=b.concat(this.h.get(ep(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
r.set=function(a,b){dp(this);this.j=null;a=ep(this,a);fp(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
r.get=function(a,b){if(!a)return b;a=this.ib(a);return a.length>0?String(a[0]):b};
r.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.ib(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
r.clone=function(){var a=new Vo;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function ep(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function ap(a,b){b&&!a.o&&(dp(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(ep(this,e),Wb(c)),this.i=this.i+c.length))},a));
a.o=b}
r.extend=function(a){for(var b=0;b<arguments.length;b++)Po(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var R={},gp=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";R.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
R.Id=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var hp={Eb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},ip={Eb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xd:function(a){return[].concat.apply([],a)}};
R.Ag=function(){gp?(R.zb=Uint8Array,R.Ra=Uint16Array,R.Ne=Int32Array,R.assign(R,hp)):(R.zb=Array,R.Ra=Array,R.Ne=Array,R.assign(R,ip))};
R.Ag();var jp=!0;try{new Uint8Array(1)}catch(a){jp=!1}
function kp(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new R.zb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var lp={};lp=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var mp={},np,op=[],pp=0;pp<256;pp++){np=pp;for(var qp=0;qp<8;qp++)np=np&1?3988292384^np>>>1:np>>>1;op[pp]=np}mp=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^op[(a^b[d])&255];return a^-1};var rp={};rp={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function sp(a){for(var b=a.length;--b>=0;)a[b]=0}
var tp=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],up=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],vp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],wp=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],xp=Array(576);sp(xp);var yp=Array(60);sp(yp);var zp=Array(512);sp(zp);var Ap=Array(256);sp(Ap);var Bp=Array(29);sp(Bp);var Cp=Array(30);sp(Cp);function Dp(a,b,c,d,e){this.ze=a;this.wf=b;this.uf=c;this.gf=d;this.Tf=e;this.be=a&&a.length}
var Ep,Fp,Gp;function Hp(a,b){this.Wd=a;this.Pb=0;this.ob=b}
function Ip(a,b){a.ga[a.pending++]=b&255;a.ga[a.pending++]=b>>>8&255}
function Jp(a,b,c){a.ma>16-c?(a.va|=b<<a.ma&65535,Ip(a,a.va),a.va=b>>16-a.ma,a.ma+=c-16):(a.va|=b<<a.ma&65535,a.ma+=c)}
function Kp(a,b,c){Jp(a,c[b*2],c[b*2+1])}
function Lp(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Mp(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Lp(d[e]++,e))}
function Np(a){var b;for(b=0;b<286;b++)a.za[b*2]=0;for(b=0;b<30;b++)a.qb[b*2]=0;for(b=0;b<19;b++)a.pa[b*2]=0;a.za[512]=1;a.Za=a.Vb=0;a.Fa=a.matches=0}
function Op(a){a.ma>8?Ip(a,a.va):a.ma>0&&(a.ga[a.pending++]=a.va);a.va=0;a.ma=0}
function Pp(a,b,c){Op(a);Ip(a,c);Ip(a,~c);R.Eb(a.ga,a.window,b,c,a.pending);a.pending+=c}
function Qp(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Rp(a,b,c){for(var d=a.ha[c],e=c<<1;e<=a.Xa;){e<a.Xa&&Qp(b,a.ha[e+1],a.ha[e],a.depth)&&e++;if(Qp(b,d,a.ha[e],a.depth))break;a.ha[c]=a.ha[e];c=e;e<<=1}a.ha[c]=d}
function Sp(a,b,c){var d=0;if(a.Fa!==0){do{var e=a.ga[a.fc+d*2]<<8|a.ga[a.fc+d*2+1];var f=a.ga[a.wd+d];d++;if(e===0)Kp(a,f,b);else{var g=Ap[f];Kp(a,g+256+1,b);var h=tp[g];h!==0&&(f-=Bp[g],Jp(a,f,h));e--;g=e<256?zp[e]:zp[256+(e>>>7)];Kp(a,g,c);h=up[g];h!==0&&(e-=Cp[g],Jp(a,e,h))}}while(d<a.Fa)}Kp(a,256,b)}
function Tp(a,b){var c=b.Wd,d=b.ob.ze,e=b.ob.be,f=b.ob.gf,g,h=-1;a.Xa=0;a.Lb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ha[++a.Xa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Xa<2;){var k=a.ha[++a.Xa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Za--;e&&(a.Vb-=d[k*2+1])}b.Pb=h;for(g=a.Xa>>1;g>=1;g--)Rp(a,c,g);k=f;do g=a.ha[1],a.ha[1]=a.ha[a.Xa--],Rp(a,c,1),d=a.ha[1],a.ha[--a.Lb]=g,a.ha[--a.Lb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ha[1]=k++,Rp(a,c,1);while(a.Xa>=
2);a.ha[--a.Lb]=a.ha[1];g=b.Wd;k=b.Pb;d=b.ob.ze;e=b.ob.be;f=b.ob.wf;var l=b.ob.uf,m=b.ob.Tf,p,t=0;for(p=0;p<=15;p++)a.Ta[p]=0;g[a.ha[a.Lb]*2+1]=0;for(b=a.Lb+1;b<573;b++){var n=a.ha[b];p=g[g[n*2+1]*2+1]+1;p>m&&(p=m,t++);g[n*2+1]=p;if(!(n>k)){a.Ta[p]++;var x=0;n>=l&&(x=f[n-l]);var y=g[n*2];a.Za+=y*(p+x);e&&(a.Vb+=y*(d[n*2+1]+x))}}if(t!==0){do{for(p=m-1;a.Ta[p]===0;)p--;a.Ta[p]--;a.Ta[p+1]+=2;a.Ta[m]--;t-=2}while(t>0);for(p=m;p!==0;p--)for(n=a.Ta[p];n!==0;)d=a.ha[--b],d>k||(g[d*2+1]!==p&&(a.Za+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),n--)}Mp(c,h,a.Ta)}
function Up(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.pa[l*2]+=g:l!==0?(l!==e&&a.pa[l*2]++,a.pa[32]++):g<=10?a.pa[34]++:a.pa[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Vp(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Kp(a,l,a.pa);while(--g!==0)}else l!==0?(l!==e&&(Kp(a,l,a.pa),g--),Kp(a,16,a.pa),Jp(a,g-3,2)):g<=10?(Kp(a,17,a.pa),Jp(a,g-3,3)):(Kp(a,18,a.pa),Jp(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Wp(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.za[c*2]!==0)return 0;if(a.za[18]!==0||a.za[20]!==0||a.za[26]!==0)return 1;for(c=32;c<256;c++)if(a.za[c*2]!==0)return 1;return 0}
var Xp=!1;function Yp(a,b,c){a.ga[a.fc+a.Fa*2]=b>>>8&255;a.ga[a.fc+a.Fa*2+1]=b&255;a.ga[a.wd+a.Fa]=c&255;a.Fa++;b===0?a.za[c*2]++:(a.matches++,b--,a.za[(Ap[c]+256+1)*2]++,a.qb[(b<256?zp[b]:zp[256+(b>>>7)])*2]++);return a.Fa===a.nc-1}
;function Zp(a,b){a.msg=rp[b];return b}
function $p(a){for(var b=a.length;--b>=0;)a[b]=0}
function aq(a){var b=a.state,c=b.pending;c>a.X&&(c=a.X);c!==0&&(R.Eb(a.output,b.ga,b.sc,c,a.Rb),a.Rb+=c,b.sc+=c,a.Kd+=c,a.X-=c,b.pending-=c,b.pending===0&&(b.sc=0))}
function bq(a,b){var c=a.Ba>=0?a.Ba:-1,d=a.B-a.Ba,e=0;if(a.level>0){a.V.od===2&&(a.V.od=Wp(a));Tp(a,a.Nc);Tp(a,a.Ic);Up(a,a.za,a.Nc.Pb);Up(a,a.qb,a.Ic.Pb);Tp(a,a.Sd);for(e=18;e>=3&&a.pa[wp[e]*2+1]===0;e--);a.Za+=3*(e+1)+5+5+4;var f=a.Za+3+7>>>3;var g=a.Vb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Jp(a,b?1:0,3),Pp(a,c,d);else if(a.strategy===4||g===f)Jp(a,2+(b?1:0),3),Sp(a,xp,yp);else{Jp(a,4+(b?1:0),3);c=a.Nc.Pb+1;d=a.Ic.Pb+1;e+=1;Jp(a,c-257,5);Jp(a,d-1,5);Jp(a,e-4,4);for(f=0;f<e;f++)Jp(a,
a.pa[wp[f]*2+1],3);Vp(a,a.za,c-1);Vp(a,a.qb,d-1);Sp(a,a.za,a.qb)}Np(a);b&&Op(a);a.Ba=a.B;aq(a.V)}
function S(a,b){a.ga[a.pending++]=b}
function cq(a,b){a.ga[a.pending++]=b>>>8&255;a.ga[a.pending++]=b&255}
function dq(a,b){var c=a.ge,d=a.B,e=a.Ca,f=a.je,g=a.B>a.sa-262?a.B-(a.sa-262):0,h=a.window,k=a.pb,l=a.Qa,m=a.B+258,p=h[d+e-1],t=h[d+e];a.Ca>=a.Zd&&(c>>=2);f>a.H&&(f=a.H);do{var n=b;if(h[n+e]===t&&h[n+e-1]===p&&h[n]===h[d]&&h[++n]===h[d+1]){d+=2;for(n++;h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&h[++d]===h[++n]&&d<m;);n=258-(m-d);d=m-258;if(n>e){a.Ob=b;e=n;if(n>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.H?e:a.H}
function eq(a){var b=a.sa,c;do{var d=a.Le-a.H-a.B;if(a.B>=b+(b-262)){R.Eb(a.window,a.window,b,b,0);a.Ob-=b;a.B-=b;a.Ba-=b;var e=c=a.Mc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Qa[--e],a.Qa[e]=f>=b?f-b:0;while(--c);d+=b}if(a.V.ta===0)break;e=a.V;c=a.window;f=a.B+a.H;var g=e.ta;g>d&&(g=d);g===0?c=0:(e.ta-=g,R.Eb(c,e.input,e.wb,g,f),e.state.wrap===1?e.S=lp(e.S,c,g,f):e.state.wrap===2&&(e.S=mp(e.S,c,g,f)),e.wb+=g,e.yb+=g,c=g);a.H+=c;if(a.H+a.ra>=3)for(d=a.B-a.ra,a.W=a.window[d],
a.W=(a.W<<a.Wa^a.window[d+1])&a.Va;a.ra&&!(a.W=(a.W<<a.Wa^a.window[d+3-1])&a.Va,a.Qa[d&a.pb]=a.head[a.W],a.head[a.W]=d,d++,a.ra--,a.H+a.ra<3););}while(a.H<262&&a.V.ta!==0)}
function fq(a,b){for(var c;;){if(a.H<262){eq(a);if(a.H<262&&b===0)return 1;if(a.H===0)break}c=0;a.H>=3&&(a.W=(a.W<<a.Wa^a.window[a.B+3-1])&a.Va,c=a.Qa[a.B&a.pb]=a.head[a.W],a.head[a.W]=a.B);c!==0&&a.B-c<=a.sa-262&&(a.Z=dq(a,c));if(a.Z>=3)if(c=Yp(a,a.B-a.Ob,a.Z-3),a.H-=a.Z,a.Z<=a.yd&&a.H>=3){a.Z--;do a.B++,a.W=(a.W<<a.Wa^a.window[a.B+3-1])&a.Va,a.Qa[a.B&a.pb]=a.head[a.W],a.head[a.W]=a.B;while(--a.Z!==0);a.B++}else a.B+=a.Z,a.Z=0,a.W=a.window[a.B],a.W=(a.W<<a.Wa^a.window[a.B+1])&a.Va;else c=Yp(a,0,
a.window[a.B]),a.H--,a.B++;if(c&&(bq(a,!1),a.V.X===0))return 1}a.ra=a.B<2?a.B:2;return b===4?(bq(a,!0),a.V.X===0?3:4):a.Fa&&(bq(a,!1),a.V.X===0)?1:2}
function gq(a,b){for(var c,d;;){if(a.H<262){eq(a);if(a.H<262&&b===0)return 1;if(a.H===0)break}c=0;a.H>=3&&(a.W=(a.W<<a.Wa^a.window[a.B+3-1])&a.Va,c=a.Qa[a.B&a.pb]=a.head[a.W],a.head[a.W]=a.B);a.Ca=a.Z;a.ne=a.Ob;a.Z=2;c!==0&&a.Ca<a.yd&&a.B-c<=a.sa-262&&(a.Z=dq(a,c),a.Z<=5&&(a.strategy===1||a.Z===3&&a.B-a.Ob>4096)&&(a.Z=2));if(a.Ca>=3&&a.Z<=a.Ca){d=a.B+a.H-3;c=Yp(a,a.B-1-a.ne,a.Ca-3);a.H-=a.Ca-1;a.Ca-=2;do++a.B<=d&&(a.W=(a.W<<a.Wa^a.window[a.B+3-1])&a.Va,a.Qa[a.B&a.pb]=a.head[a.W],a.head[a.W]=a.B);
while(--a.Ca!==0);a.tb=0;a.Z=2;a.B++;if(c&&(bq(a,!1),a.V.X===0))return 1}else if(a.tb){if((c=Yp(a,0,a.window[a.B-1]))&&bq(a,!1),a.B++,a.H--,a.V.X===0)return 1}else a.tb=1,a.B++,a.H--}a.tb&&(Yp(a,0,a.window[a.B-1]),a.tb=0);a.ra=a.B<2?a.B:2;return b===4?(bq(a,!0),a.V.X===0?3:4):a.Fa&&(bq(a,!1),a.V.X===0)?1:2}
function hq(a,b){for(var c,d,e,f=a.window;;){if(a.H<=258){eq(a);if(a.H<=258&&b===0)return 1;if(a.H===0)break}a.Z=0;if(a.H>=3&&a.B>0&&(d=a.B-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.B+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.Z=258-(e-d);a.Z>a.H&&(a.Z=a.H)}a.Z>=3?(c=Yp(a,1,a.Z-3),a.H-=a.Z,a.B+=a.Z,a.Z=0):(c=Yp(a,0,a.window[a.B]),a.H--,a.B++);if(c&&(bq(a,!1),a.V.X===0))return 1}a.ra=0;return b===4?(bq(a,!0),a.V.X===0?3:4):
a.Fa&&(bq(a,!1),a.V.X===0)?1:2}
function iq(a,b){for(var c;;){if(a.H===0&&(eq(a),a.H===0)){if(b===0)return 1;break}a.Z=0;c=Yp(a,0,a.window[a.B]);a.H--;a.B++;if(c&&(bq(a,!1),a.V.X===0))return 1}a.ra=0;return b===4?(bq(a,!0),a.V.X===0?3:4):a.Fa&&(bq(a,!1),a.V.X===0)?1:2}
function jq(a,b,c,d,e){this.Df=a;this.Sf=b;this.Yf=c;this.Rf=d;this.Af=e}
var kq;kq=[new jq(0,0,0,0,function(a,b){var c=65535;for(c>a.Ga-5&&(c=a.Ga-5);;){if(a.H<=1){eq(a);if(a.H===0&&b===0)return 1;if(a.H===0)break}a.B+=a.H;a.H=0;var d=a.Ba+c;if(a.B===0||a.B>=d)if(a.H=a.B-d,a.B=d,bq(a,!1),a.V.X===0)return 1;if(a.B-a.Ba>=a.sa-262&&(bq(a,!1),a.V.X===0))return 1}a.ra=0;if(b===4)return bq(a,!0),a.V.X===0?3:4;a.B>a.Ba&&bq(a,!1);return 1}),
new jq(4,4,8,4,fq),new jq(4,5,16,8,fq),new jq(4,6,32,32,fq),new jq(4,4,16,16,gq),new jq(8,16,32,32,gq),new jq(8,16,128,128,gq),new jq(8,32,128,256,gq),new jq(32,128,258,1024,gq),new jq(32,258,258,4096,gq)];
function lq(){this.V=null;this.status=0;this.ga=null;this.wrap=this.pending=this.sc=this.Ga=0;this.M=null;this.Ia=0;this.method=8;this.Nb=-1;this.pb=this.Nd=this.sa=0;this.window=null;this.Le=0;this.head=this.Qa=null;this.je=this.Zd=this.strategy=this.level=this.yd=this.ge=this.Ca=this.H=this.Ob=this.B=this.tb=this.ne=this.Z=this.Ba=this.Wa=this.Va=this.ud=this.Mc=this.W=0;this.za=new R.Ra(1146);this.qb=new R.Ra(122);this.pa=new R.Ra(78);$p(this.za);$p(this.qb);$p(this.pa);this.Sd=this.Ic=this.Nc=
null;this.Ta=new R.Ra(16);this.ha=new R.Ra(573);$p(this.ha);this.Lb=this.Xa=0;this.depth=new R.Ra(573);$p(this.depth);this.ma=this.va=this.ra=this.matches=this.Vb=this.Za=this.fc=this.Fa=this.nc=this.wd=0}
function mq(a,b){if(!a||!a.state||b>5||b<0)return a?Zp(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ta!==0||c.status===666&&b!==4)return Zp(a,a.X===0?-5:-2);c.V=a;var d=c.Nb;c.Nb=b;if(c.status===42)if(c.wrap===2)a.S=0,S(c,31),S(c,139),S(c,8),c.M?(S(c,(c.M.text?1:0)+(c.M.jb?2:0)+(c.M.extra?4:0)+(c.M.name?8:0)+(c.M.comment?16:0)),S(c,c.M.time&255),S(c,c.M.time>>8&255),S(c,c.M.time>>16&255),S(c,c.M.time>>24&255),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,c.M.os&255),c.M.extra&&c.M.extra.length&&
(S(c,c.M.extra.length&255),S(c,c.M.extra.length>>8&255)),c.M.jb&&(a.S=mp(a.S,c.ga,c.pending,0)),c.Ia=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,3),c.status=113);else{var e=8+(c.Nd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.B!==0&&(e|=32);c.status=113;cq(c,e+(31-e%31));c.B!==0&&(cq(c,a.S>>>16),cq(c,a.S&65535));a.S=1}if(c.status===69)if(c.M.extra){for(e=c.pending;c.Ia<(c.M.extra.length&65535)&&(c.pending!==c.Ga||
(c.M.jb&&c.pending>e&&(a.S=mp(a.S,c.ga,c.pending-e,e)),aq(a),e=c.pending,c.pending!==c.Ga));)S(c,c.M.extra[c.Ia]&255),c.Ia++;c.M.jb&&c.pending>e&&(a.S=mp(a.S,c.ga,c.pending-e,e));c.Ia===c.M.extra.length&&(c.Ia=0,c.status=73)}else c.status=73;if(c.status===73)if(c.M.name){e=c.pending;do{if(c.pending===c.Ga&&(c.M.jb&&c.pending>e&&(a.S=mp(a.S,c.ga,c.pending-e,e)),aq(a),e=c.pending,c.pending===c.Ga)){var f=1;break}f=c.Ia<c.M.name.length?c.M.name.charCodeAt(c.Ia++)&255:0;S(c,f)}while(f!==0);c.M.jb&&c.pending>
e&&(a.S=mp(a.S,c.ga,c.pending-e,e));f===0&&(c.Ia=0,c.status=91)}else c.status=91;if(c.status===91)if(c.M.comment){e=c.pending;do{if(c.pending===c.Ga&&(c.M.jb&&c.pending>e&&(a.S=mp(a.S,c.ga,c.pending-e,e)),aq(a),e=c.pending,c.pending===c.Ga)){f=1;break}f=c.Ia<c.M.comment.length?c.M.comment.charCodeAt(c.Ia++)&255:0;S(c,f)}while(f!==0);c.M.jb&&c.pending>e&&(a.S=mp(a.S,c.ga,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.M.jb?(c.pending+2>c.Ga&&aq(a),c.pending+2<=c.Ga&&(S(c,
a.S&255),S(c,a.S>>8&255),a.S=0,c.status=113)):c.status=113);if(c.pending!==0){if(aq(a),a.X===0)return c.Nb=-1,0}else if(a.ta===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Zp(a,-5);if(c.status===666&&a.ta!==0)return Zp(a,-5);if(a.ta!==0||c.H!==0||b!==0&&c.status!==666){d=c.strategy===2?iq(c,b):c.strategy===3?hq(c,b):kq[c.level].Af(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.X===0&&(c.Nb=-1),0;if(d===2&&(b===1?(Jp(c,2,3),Kp(c,256,xp),c.ma===16?(Ip(c,c.va),c.va=0,c.ma=0):c.ma>=
8&&(c.ga[c.pending++]=c.va&255,c.va>>=8,c.ma-=8)):b!==5&&(Jp(c,0,3),Pp(c,0,0),b===3&&($p(c.head),c.H===0&&(c.B=0,c.Ba=0,c.ra=0))),aq(a),a.X===0))return c.Nb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(S(c,a.S&255),S(c,a.S>>8&255),S(c,a.S>>16&255),S(c,a.S>>24&255),S(c,a.yb&255),S(c,a.yb>>8&255),S(c,a.yb>>16&255),S(c,a.yb>>24&255)):(cq(c,a.S>>>16),cq(c,a.S&65535));aq(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var nq={};nq=function(){this.input=null;this.yb=this.ta=this.wb=0;this.output=null;this.Kd=this.X=this.Rb=0;this.msg="";this.state=null;this.od=2;this.S=0};var oq=Object.prototype.toString;
function pq(a){if(!(this instanceof pq))return new pq(a);a=this.options=R.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.V=new nq;this.V.X=0;var b=this.V;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Zp(b,-2);else{e===8&&(e=9);var k=new lq;b.state=k;k.V=b;k.wrap=h;k.M=null;k.Nd=e;k.sa=1<<k.Nd;k.pb=k.sa-1;k.ud=f+7;k.Mc=1<<k.ud;k.Va=k.Mc-1;k.Wa=~~((k.ud+3-1)/3);k.window=new R.zb(k.sa*2);k.head=new R.Ra(k.Mc);k.Qa=new R.Ra(k.sa);k.nc=1<<f+6;k.Ga=k.nc*4;k.ga=new R.zb(k.Ga);k.fc=1*k.nc;k.wd=3*k.nc;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.yb=b.Kd=0;b.od=2;c=b.state;c.pending=0;c.sc=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.S=c.wrap===2?
0:1;c.Nb=0;if(!Xp){d=Array(16);for(f=g=0;f<28;f++)for(Bp[f]=g,e=0;e<1<<tp[f];e++)Ap[g++]=f;Ap[g-1]=f;for(f=g=0;f<16;f++)for(Cp[f]=g,e=0;e<1<<up[f];e++)zp[g++]=f;for(g>>=7;f<30;f++)for(Cp[f]=g<<7,e=0;e<1<<up[f]-7;e++)zp[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)xp[e*2+1]=8,e++,d[8]++;for(;e<=255;)xp[e*2+1]=9,e++,d[9]++;for(;e<=279;)xp[e*2+1]=7,e++,d[7]++;for(;e<=287;)xp[e*2+1]=8,e++,d[8]++;Mp(xp,287,d);for(e=0;e<30;e++)yp[e*2+1]=5,yp[e*2]=Lp(e,5);Ep=new Dp(xp,tp,257,286,15);Fp=new Dp(yp,
up,0,30,15);Gp=new Dp([],vp,0,19,7);Xp=!0}c.Nc=new Hp(c.za,Ep);c.Ic=new Hp(c.qb,Fp);c.Sd=new Hp(c.pa,Gp);c.va=0;c.ma=0;Np(c);c=0}else c=Zp(b,-2);c===0&&(b=b.state,b.Le=2*b.sa,$p(b.head),b.yd=kq[b.level].Sf,b.Zd=kq[b.level].Df,b.je=kq[b.level].Yf,b.ge=kq[b.level].Rf,b.B=0,b.Ba=0,b.H=0,b.ra=0,b.Z=b.Ca=2,b.tb=0,b.W=0);b=c}}else b=-2;if(b!==0)throw Error(rp[b]);a.header&&(b=this.V)&&b.state&&b.state.wrap===2&&(b.state.M=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=kp(a.dictionary):
oq.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.V;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.H)b=-2;else{b===1&&(a.S=lp(a.S,f,g,0));l.wrap=0;g>=l.sa&&(b===0&&($p(l.head),l.B=0,l.Ba=0,l.ra=0),c=new R.zb(l.sa),R.Eb(c,f,g-l.sa,l.sa,0),f=c,g=l.sa);c=a.ta;d=a.wb;e=a.input;a.ta=g;a.wb=0;a.input=f;for(eq(l);l.H>=3;){f=l.B;g=l.H-2;do l.W=(l.W<<l.Wa^l.window[f+3-1])&l.Va,l.Qa[f&l.pb]=l.head[l.W],l.head[l.W]=f,f++;while(--g);
l.B=f;l.H=2;eq(l)}l.B+=l.H;l.Ba=l.B;l.ra=l.H;l.H=0;l.Z=l.Ca=2;l.tb=0;a.wb=d;a.input=e;a.ta=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(rp[b]);this.aj=!0}}
pq.prototype.push=function(a,b){var c=this.V,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=kp(a):oq.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.wb=0;c.ta=c.input.length;do{c.X===0&&(c.output=new R.zb(d),c.Rb=0,c.X=d);a=mq(c,e);if(a!==1&&a!==0)return qq(this,a),this.ended=!0,!1;if(c.X===0||c.ta===0&&(e===4||e===2))if(this.options.to==="string"){var f=R.Id(c.output,c.Rb);b=f;f=f.length;if(f<65537&&(b.subarray&&jp||!b.subarray))b=
String.fromCharCode.apply(null,R.Id(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=R.Id(c.output,c.Rb),this.chunks.push(b)}while((c.ta>0||c.X===0)&&a!==1);if(e===4)return(c=this.V)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Zp(c,-2):(c.state=null,a=d===113?Zp(c,-3):0)):a=-2,qq(this,a),this.ended=!0,a===0;e===2&&(qq(this,0),c.X=0);return!0};
function qq(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):R.Xd(a.chunks));a.chunks=[];a.err=b;a.msg=a.V.msg}
function rq(a,b){b=b||{};b.gzip=!0;b=new pq(b);b.push(a,!0);if(b.err)throw b.msg||rp[b.err];return b.result}
;function sq(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Fb(a):null:null}
function tq(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?mb(a):null:null}
;function uq(a){return mb(a===null?"null":a===void 0?"undefined":a)}
;function vq(a){this.name=a}
;var wq=new vq("rawColdConfigGroup");var xq=new vq("rawHotConfigGroup");function yq(a){this.F=M(a)}
v(yq,O);function zq(a){this.F=M(a)}
v(zq,O);zq.prototype.setTrackingParams=function(a){return N(this,1,ue(a,!1))};var Aq=new vq("continuationCommand");var Bq=new vq("webCommandMetadata");var Cq=new vq("signalServiceEndpoint");var Dq={gh:"EMBEDDED_PLAYER_MODE_UNKNOWN",dh:"EMBEDDED_PLAYER_MODE_DEFAULT",fh:"EMBEDDED_PLAYER_MODE_PFP",eh:"EMBEDDED_PLAYER_MODE_PFL"};var Eq=new vq("feedbackEndpoint");var De={Bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",ti:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",wi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",si:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Lh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",yi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
zi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",xi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Vh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND",Ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_AUTO_ZOOM",
Th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_CONTROL",Uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_TREATMENT",th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DISABLE_PLAYER_OPEN_ON_FULLSCREEN",Rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_RECONNECT_WITH_RETRY",ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SINGLE_COLUMN_GRID_TRIGGERED",Qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_CONNECTION_TIMEOUT",Ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_GHOST_LOADING_ELIGIBLE",ri:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_STREAMED_GET_WATCH_SUPPORTED",
Ei:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WEBVIEW_CONTAINER",Ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_PIP"};var Fq=new vq("shareEndpoint"),Gq=new vq("shareEntityEndpoint"),Hq=new vq("shareEntityServiceEndpoint"),Iq=new vq("webPlayerShareEntityServiceEndpoint");var Jq=new vq("playlistEditEndpoint");var Kq=new vq("modifyChannelNotificationPreferenceEndpoint");var Lq=new vq("undoFeedbackEndpoint");var Mq=new vq("unsubscribeEndpoint");var Nq=new vq("subscribeEndpoint");function Oq(){var a=Pq;G("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Qq(a){E("yt.ads.biscotti.lastId_",a)}
;function Rq(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Sq=D.window,Tq,Uq,Vq=(Sq==null?void 0:(Tq=Sq.yt)==null?void 0:Tq.config_)||(Sq==null?void 0:(Uq=Sq.ytcfg)==null?void 0:Uq.data_)||{};E("yt.config_",Vq);function Wq(){Rq(Vq,arguments)}
function U(a,b){return a in Vq?Vq[a]:b}
function Xq(a){var b=Vq.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Yq=[];function Zq(a){Yq.forEach(function(b){return b(a)})}
function $q(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ar(b)}}:a}
function ar(a){var b=G("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Wq("ERRORS",b));Zq(a)}
function br(a,b,c,d,e){var f=G("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=U("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Wq("ERRORS",f))}
;var cr=/^[\w.]*$/,dr={q:!0,search_query:!0};function er(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=fr(f[0]||""),h=fr(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Xb(k,h):c[g]=[k,h]}else c[g]=h}catch(t){var l=t,m=f[0],p=String(er);l.args=[{key:m,value:f[1],query:a,method:gr===p?"unchanged":p}];dr.hasOwnProperty(m)||br(l)}}return c}
var gr=String(er);function hr(a){var b=[];dj(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Pb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function ir(a){a.charAt(0)==="?"&&(a=a.substring(1));return er(a,"&")}
function jr(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),ir(a.length>1?a[1]:a[0])):{}}
function kr(a,b){return lr(a,b||{},!0)}
function lr(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ir(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return pc(a,e)+d}
function mr(a){if(!b)var b=window.location.href;var c=a.match(fc)[1]||null,d=ic(a);c&&d?(a=a.match(fc),b=b.match(fc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ic(b)===d&&(Number(b.match(fc)[4]||null)||null)===(Number(a.match(fc)[4]||null)||null):!0;return a}
function fr(a){return a&&a.match(cr)?a:dc(a)}
;function nr(a){var b=or;a=a===void 0?G("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Rn;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ra){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();try{var g=Jn.history.length}catch(Ra){g=0}e.u_his=g;var h;e.u_h=(h=Jn.screen)==null?void 0:h.height;var k;e.u_w=(k=Jn.screen)==null?void 0:k.width;var l;e.u_ah=(l=Jn.screen)==null?void 0:l.availHeight;var m;e.u_aw=(m=Jn.screen)==null?
void 0:m.availWidth;var p;e.u_cd=(p=Jn.screen)==null?void 0:p.colorDepth}catch(Ra){}var t;g=b.h;try{var n=g.screenX;var x=g.screenY}catch(Ra){}try{var y=g.outerWidth;var w=g.outerHeight}catch(Ra){}try{var I=g.innerWidth;var F=g.innerHeight}catch(Ra){}try{var T=g.screenLeft;var Ga=g.screenTop}catch(Ra){}try{I=g.innerWidth,F=g.innerHeight}catch(Ra){}try{var ka=g.screen.availWidth;var be=g.screen.availTop}catch(Ra){}n=[T,Ga,n,x,ka,be,y,w,I,F];try{var Sb=(b.h.top||window).document,jb=Sb.compatMode=="CSS1Compat"?
Sb.documentElement:Sb.body;var Sa=(new cj(jb.clientWidth,jb.clientHeight)).round()}catch(Ra){Sa=new cj(-12245933,-12245933)}Sb=Sa;Sa={};var Ha=Ha===void 0?D:Ha;jb=new io;"SVGElement"in Ha&&"createElementNS"in Ha.document&&jb.set(0);x=On();x["allow-top-navigation-by-user-activation"]&&jb.set(1);x["allow-popups-to-escape-sandbox"]&&jb.set(2);Ha.crypto&&Ha.crypto.subtle&&jb.set(3);"TextDecoder"in Ha&&"TextEncoder"in Ha&&jb.set(4);Ha=jo(jb);Sa.bc=Ha;Sa.bih=Sb.height;Sa.biw=Sb.width;Sa.brdim=n.join();
b=b.i;b=b.prerendering?3:(t={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?t:0;t=(Sa.vis=b,Sa.wgl=!!Jn.WebGLRenderingContext,Sa);c=d.call(c,e,t);c.ca_type="image";a&&(c.bid=a);return c}
var or=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return hr(nr(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");var pr="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function qr(){if(!pr)return null;var a=pr();return"open"in a?a:null}
function rr(a){switch(sr(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function sr(a){return a&&"status"in a?a.status:-1}
;function tr(a,b){typeof a==="function"&&(a=$q(a));return window.setTimeout(a,b)}
;var ur="absolute_experiments client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods theme".split(" ");[].concat(oa(ur),["client_dev_set_cookie"]);function V(a){a=vr(a);return typeof a==="string"&&a==="false"?!1:!!a}
function P(a,b){a=vr(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function wr(){var a=vr("html5_web_po_experiment_ids");return Array.isArray(a)?Rb(a,function(b){return Number(b||0)}):[Number(a||0)]}
function xr(a){a=vr(a);return a!==void 0?String(a):""}
function vr(a){return U("EXPERIMENT_FLAGS",{})[a]}
function yr(){for(var a=[],b=U("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=U("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var zr={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Ar="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(oa(ur)),Br=!1;function Cr(a,b,c,d,e,f,g,h,k){function l(){(m&&"readyState"in m?m.readyState:0)===4&&b&&$q(b)(m)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var m=qr();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;V("debug_forward_web_query_parameters")&&(a=Dr(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Er(a,e))for(var p in e)m.setRequestHeader(p,e[p]),"content-type"===p.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
k&&"onprogress"in m&&(m.onprogress=function(){k(m.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{m.setAttributionReporting(a)}catch(t){br(t)}}m.send(d);return m}
function Er(a,b){b=b===void 0?{}:b;var c=mr(a),d=U("INNERTUBE_CLIENT_NAME"),e=V("web_ajax_ignore_global_headers_if_set"),f;for(f in zr){var g=U(zr[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=U("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(ic(a)?!1:!0))){k=a;var l;if(l=V("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=ic(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=jc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ic(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ic(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ic(a)||(b["X-YouTube-Ad-Signals"]=hr(nr()));return b}
function Fr(a,b){b.method="POST";b.postParams||(b.postParams={});return Gr(a,b)}
function Gr(a,b){var c=b.format||"JSON";a=Hr(a,b);var d=Ir(a,b),e=!1,f=Jr(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=rr(k),m=null,p=400<=k.status&&k.status<500,t=500<=k.status&&k.status<600;if(l||p||t)m=Kr(a,c,k,b.convertToSafeHtml);l&&(l=Lr(c,k,m));m=m||{};p=b.context||D;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=tr(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Hr(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=U("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=kr(a,b);return a}
function Ir(a,b){var c=U("XSRF_FIELD_NAME"),d=U("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=U("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ic(a)&&!b.withCredentials&&ic(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(V("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=ir(e),oj(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):oc(e));f=e||f&&!hj(f);!Br&&f&&b.method!=="POST"&&(Br=!0,ar(Error("AJAX request with postData should use POST")));return e}
function Kr(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,br(d),g;}a=c.getResponseHeader("Content-Type")||"";if(f&&a.indexOf("json")>=0){f.substring(0,5)===")]}'\n"&&(f=f.substring(5));try{e=JSON.parse(f)}catch(g){}}break;case "XML":if(a=(a=c.responseXML)?Mr(a):null)e={},Pb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nr(g)})}d&&Or(e);
return e}
function Or(a){if(Ma(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=kb();c=d?d.createHTML(c):c;a[b]=new Cb(c)}else Or(a[b])}}
function Lr(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Mr(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Nr(a){var b="";Pb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Dr(a){var b=window.location.search,c=ic(a);V("debug_handle_relative_url_for_query_forward_killswitch")||!c&&mr(a)&&(c=document.location.hostname);var d=jc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ir(b),f={};Pb(Ar,function(g){e[g]&&(f[g]=e[g])});
return lr(a,f||{},!1)}
var Jr=Cr;var Pr=[{zd:function(a){return"Cannot read property '"+a.key+"'"},
Yc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{zd:function(a){return"Cannot call '"+a.key+"'"},
Yc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{zd:function(a){return a.key+" is not defined"},
Yc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sr={mb:[],gb:[{callback:Qr,weight:500},{callback:Rr,weight:500}]};function Qr(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function Rr(a){if(!a.stack)return!0;var b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function Tr(){this.gb=[];this.mb=[]}
var Ur;function Vr(){if(!Ur){var a=Ur=new Tr;a.mb.length=0;a.gb.length=0;Wr(a,Sr)}return Ur}
function Wr(a,b){b.mb&&a.mb.unshift.apply(a.mb,b.mb);b.gb&&a.gb.unshift.apply(a.gb,b.gb)}
;var Xr=new Ao;function Yr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Zr(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Zr(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Zr(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Zr(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function $r(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=as(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Yr(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?as(f+".ve",g,h,k):0;d+=f;d+=as(e,a[e],b,c);if(d>500)break}}else c[b]=bs(a),d+=c[b].length;else c[b]=bs(a),d+=c[b].length;return d}
function as(a,b,c,d){c+="."+a;a=bs(b);d[c]=a;return c.length+a.length}
function bs(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function cs(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function ds(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function es(){this.Ae=!0}
function gs(a){var b={},c=[];"USER_SESSION_ID"in Vq&&c.push({key:"u",value:U("USER_SESSION_ID")});if(c=Wi(c))b.Authorization=c,c=a=a==null?void 0:a.sessionIndex,c===void 0&&(c=Number(U("SESSION_INDEX",0)),c=isNaN(c)?0:c),V("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Vq||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in Vq&&(b["X-Goog-PageId"]=U("DELEGATED_SESSION_ID"));return b}
;var hs={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function is(a,b,c,d,e){Ti.set(""+a,b,{Tc:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function js(a){return Ti.get(""+a,void 0)}
function ks(a,b,c){Ti.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function ls(){if(!Ti.isEnabled())return!1;if(Ti.h.cookie)return!0;Ti.set("TESTCOOKIESENABLED","1",{Tc:60});if(Ti.get("TESTCOOKIESENABLED")!=="1")return!1;Ti.remove("TESTCOOKIESENABLED");return!0}
;var ms=G("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",ms);function ns(){this.h=U("ALT_PREF_COOKIE_NAME","PREF");this.i=U("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=js(this.h);a&&this.parse(a)}
var ps;function qs(){ps||(ps=new ns);return ps}
r=ns.prototype;r.get=function(a,b){rs(a);ss(a);a=ms[a]!==void 0?ms[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){rs(a);ss(a);if(b==null)throw Error("ExpectedNotNull");ms[a]=b.toString()};
function ts(a){return!!((us("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){rs(a);ss(a);delete ms[a]};
r.clear=function(){for(var a in ms)delete ms[a]};
function ss(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function rs(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function us(a){a=ms[a]!==void 0?ms[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ms[d]=c.toString())}};var vs={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ws={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function xs(){var a=D.navigator;return a?a.connection:void 0}
function ys(){var a=xs();if(a){var b=vs[a.type||"unknown"]||"CONN_UNKNOWN";a=vs[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function zs(){var a=xs();if(a!=null&&a.effectiveType)return ws.hasOwnProperty(a.effectiveType)?ws[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function W(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(oa(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(W,Error);function As(){try{return Bs(),!0}catch(a){return!1}}
function Bs(a){if(U("DATASYNC_ID")!==void 0)return U("DATASYNC_ID");throw new W("Datasync ID not set",a===void 0?"unknown":a);}
;function Cs(){}
function Ds(a,b){return Yn.eb(a,0,b)}
Cs.prototype.xa=function(a,b){return this.eb(a,1,b)};
function Es(a,b){Yn.eb(a,2,b)}
Cs.prototype.Zb=function(a){var b=G("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Fs=P("web_emulated_idle_callback_delay",300),Gs=1E3/60-3,Hs=[8,5,4,3,2,1,0];
function Is(a){a=a===void 0?{}:a;H.call(this);this.i=[];this.j={};this.aa=this.h=0;this.Y=this.u=!1;this.J=[];this.P=this.fa=!1;for(var b=z(Hs),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.nd=a.timeout||1;this.G=Gs;this.A=0;this.Ea=this.cg.bind(this);this.Yb=this.Ig.bind(this);this.La=this.Re.bind(this);this.Ma=this.Ef.bind(this);this.Sa=this.jg.bind(this);this.oa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!V("disable_scheduler_requestIdleCallback");(this.ja=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.Ea)}
v(Is,H);r=Is.prototype;r.Zb=function(a){var b=Wa();Js(this,a);a=Wa()-b;this.u||(this.G-=a)};
r.eb=function(a,b,c){++this.aa;if(b===10)return this.Zb(a),this.aa;var d=this.aa;this.j[d]=a;this.u&&!c?this.J.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Ks(this)!==this.A&&this.stop(),this.start()));return d};
r.ya=function(a){delete this.j[a]};
function Ls(a){a.J.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Ms(a){return!a.isHidden()&&a.ja}
function Ks(a){if(a.i[8].length){if(a.P)return 4;if(Ms(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Ms(a)?3:2:1;return 0}
r.wa=function(a){var b=G("yt.logging.errors.log");b&&b(a)};
function Js(a,b){try{b()}catch(c){a.wa(c)}}
function Ns(a){for(var b=z(Hs),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.Ef=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fa=!0;Os(this,b);this.fa=!1};
r.Ig=function(){Os(this)};
r.Re=function(){Ps(this)};
r.jg=function(a){this.P=!0;var b=Ks(this);b===4&&b!==this.A&&(this.stop(),this.start());Os(this,void 0,a);this.P=!1};
r.cg=function(){this.isHidden()||Ps(this);this.h&&(this.stop(),this.start())};
function Ps(a){a.stop();a.u=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Js(a,e)}Qs(a);a.u=!1;Ns(a)&&a.start();b=Wa()-b;a.G-=b}
function Qs(a){for(var b=0,c=a.J.length;b<c;b++){var d=a.J[b];a.i[d.priority].push(d.id)}a.J.length=0}
function Os(a,b,c){a.P&&a.A===4&&a.h||a.stop();a.u=!0;b=Wa()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.wa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Js(a,f);d=a.fa?0:1;d=a.o>d?a.o:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Js(a,c)}while(c&&Wa()<b)}a.u=!1;Qs(a);a.G=Gs;Ns(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.A=Ks(this),this.A){case 1:var a=this.Ma;this.h=this.oa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Fs);break;case 2:this.h=window.setTimeout(this.Yb,this.nd);break;case 3:this.h=window.requestAnimationFrame(this.Sa);break;case 4:this.h=window.setTimeout(this.La,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.oa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.da=function(){Ls(this);this.stop();this.ja&&document.removeEventListener("visibilitychange",this.Ea);H.prototype.da.call(this)};var Rs=G("yt.scheduler.instance.timerIdMap_")||{},Ss=P("kevlar_tuner_scheduler_soft_state_timer_ms",800),Ts=0,Us=0;function Vs(){var a=G("ytglobal.schedulerInstanceInstance_");if(!a||a.K)a=new Is(U("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Ws(){Xs();var a=G("ytglobal.schedulerInstanceInstance_");a&&(wc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Xs(){Ls(Vs());for(var a in Rs)Rs.hasOwnProperty(a)&&delete Rs[Number(a)]}
function Ys(a,b,c){if(!c)return c=c===void 0,-Vs().eb(a,b,c);var d=window.setTimeout(function(){var e=Vs().eb(a,b);Rs[d]=e},c);
return d}
function Zs(a){Vs().Zb(a)}
function $s(a){var b=Vs();if(a<0)b.ya(-a);else{var c=Rs[a];c?(b.ya(c),delete Rs[a]):window.clearTimeout(a)}}
function at(){bt()}
function bt(){window.clearTimeout(Ts);Vs().start()}
function ct(){Vs().pause();window.clearTimeout(Ts);Ts=window.setTimeout(at,Ss)}
function dt(){window.clearTimeout(Us);Us=window.setTimeout(function(){et(0)},Ss)}
function et(a){dt();var b=Vs();b.o=a;b.start()}
function ft(a){dt();var b=Vs();b.o>a&&(b.o=a,b.start())}
function gt(){window.clearTimeout(Us);var a=Vs();a.o=0;a.start()}
;function ht(){Cs.apply(this,arguments)}
v(ht,Cs);function jt(){ht.instance||(ht.instance=new ht);return ht.instance}
ht.prototype.eb=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=G("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):tr(a,c||0)};
ht.prototype.ya=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=G("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
ht.prototype.start=function(){var a=G("yt.scheduler.instance.start");a&&a()};
ht.prototype.pause=function(){var a=G("yt.scheduler.instance.pause");a&&a()};
var Yn=jt();
G("yt.scheduler.initialized")||(E("yt.scheduler.instance.dispose",Ws),E("yt.scheduler.instance.addJob",Ys),E("yt.scheduler.instance.addImmediateJob",Zs),E("yt.scheduler.instance.cancelJob",$s),E("yt.scheduler.instance.cancelAllJobs",Xs),E("yt.scheduler.instance.start",bt),E("yt.scheduler.instance.pause",ct),E("yt.scheduler.instance.setPriorityThreshold",et),E("yt.scheduler.instance.enablePriorityThreshold",ft),E("yt.scheduler.instance.clearPriorityThreshold",gt),E("yt.scheduler.initialized",!0));function kt(a){var b=new Lo;this.h=(a=b.isAvailable()?a?new Mo(b,a):b:null)?new Go(a):null;this.i=document.domain||window.location.hostname}
kt.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Fl).serialize(b))}catch(f){return}else e=escape(b);is(a,e,c,this.i)};
kt.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=js(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
kt.prototype.remove=function(a){this.h&&this.h.remove(a);ks(a,"/",this.i)};var lt=function(){var a;return function(){a||(a=new kt("ytidb"));return a}}();
function mt(){var a;return(a=lt())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var nt=[],ot,pt=!1;function qt(){var a={};for(ot=new rt(a.handleError===void 0?st:a.handleError,a.logEvent===void 0?tt:a.logEvent);nt.length>0;)switch(a=nt.shift(),a.type){case "ERROR":ot.wa(a.payload);break;case "EVENT":ot.logEvent(a.eventType,a.payload)}}
function ut(a){pt||(ot?ot.wa(a):(nt.push({type:"ERROR",payload:a}),nt.length>10&&nt.shift()))}
function vt(a,b){pt||(ot?ot.logEvent(a,b):(nt.push({type:"EVENT",eventType:a,payload:b}),nt.length>10&&nt.shift()))}
;function wt(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function xt(a){return a.substr(0,a.indexOf(":"))||a}
;var zt=zd||Ad;function At(a){var b=id();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Bt={},Ct=(Bt.AUTH_INVALID="No user identifier specified.",Bt.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bt.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bt.MISSING_INDEX="Index not created.",Bt.MISSING_OBJECT_STORES="Object stores not created.",Bt.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bt.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bt.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bt.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bt.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bt.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bt.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bt),Dt={},Et=(Dt.AUTH_INVALID="ERROR",Dt.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Dt.EXPLICIT_ABORT="IGNORED",Dt.IDB_NOT_SUPPORTED="ERROR",Dt.MISSING_INDEX=
"WARNING",Dt.MISSING_OBJECT_STORES="ERROR",Dt.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Dt.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Dt.QUOTA_EXCEEDED="WARNING",Dt.QUOTA_MAYBE_EXCEEDED="WARNING",Dt.UNKNOWN_ABORT="WARNING",Dt.INCOMPATIBLE_DB_VERSION="WARNING",Dt),Ft={},Gt=(Ft.AUTH_INVALID=!1,Ft.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ft.EXPLICIT_ABORT=!1,Ft.IDB_NOT_SUPPORTED=!1,Ft.MISSING_INDEX=!1,Ft.MISSING_OBJECT_STORES=!1,Ft.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ft.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ft.QUOTA_EXCEEDED=!1,Ft.QUOTA_MAYBE_EXCEEDED=!0,Ft.UNKNOWN_ABORT=!0,Ft.INCOMPATIBLE_DB_VERSION=!1,Ft);function Ht(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Ct[a]:c;d=d===void 0?Et[a]:d;e=e===void 0?Gt[a]:e;W.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Ht.prototype)}
v(Ht,W);function It(a,b){Ht.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ct.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,It.prototype)}
v(It,Ht);function Jt(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Jt.prototype)}
v(Jt,Error);var Kt=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Lt(a,b,c,d){b=xt(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Ht)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Ht("QUOTA_EXCEEDED",a);if(Bd&&e.name==="UnknownError")return new Ht("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Jt)return new Ht("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Kt.some(function(f){return e.message.includes(f)}))return new Ht("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Ht("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",le:e.name})];e.level="WARNING";return e}
function Mt(a,b,c){var d=mt();return new Ht("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Nt(a){if(!a)throw Error();throw a;}
function Ot(a){return a}
function Pt(a){this.h=a}
function Qt(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Qt.all=function(a){return new Qt(new Pt(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Mb:0};f.Mb<a.length;f={Mb:f.Mb},++f.Mb)Qt.resolve(a[f.Mb]).then(function(g){return function(h){d[g.Mb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Qt.resolve=function(a){return new Qt(new Pt(function(b,c){a instanceof Qt?a.then(b,c):b(a)}))};
Qt.reject=function(a){return new Qt(new Pt(function(b,c){c(a)}))};
Qt.prototype.then=function(a,b){var c=this,d=a!=null?a:Ot,e=b!=null?b:Nt;return new Qt(new Pt(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Rt(c,c,d,f,g)}),c.i.push(function(){St(c,c,e,f,g)})):c.state.status==="FULFILLED"?Rt(c,c,d,f,g):c.state.status==="REJECTED"&&St(c,c,e,f,g)}))};
Qt.prototype.catch=function(a){return this.then(void 0,a)};
function Rt(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Qt?Tt(a,b,f,d,e):d(f)}catch(g){e(g)}}
function St(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Qt?Tt(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tt(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Qt?Tt(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ut(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vt(a){return new Promise(function(b,c){Ut(a,b,c)})}
function Wt(a){return new Qt(new Pt(function(b,c){Ut(a,b,c)}))}
;function Xt(a,b){return new Qt(new Pt(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Yt=window,X=Yt.ytcsi&&Yt.ytcsi.now?Yt.ytcsi.now:Yt.performance&&Yt.performance.timing&&Yt.performance.now&&Yt.performance.timing.navigationStart?function(){return Yt.performance.timing.navigationStart+Yt.performance.now()}:function(){return(new Date).getTime()};function Zt(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(X());this.i=!1}
function $t(){return V("idb_immediate_commit")}
r=Zt.prototype;r.add=function(a,b,c){return au(this,[a],{mode:"readwrite",qa:!0,commit:$t()},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return au(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return au(this,[a],{mode:"readonly",qa:!0,commit:$t()},function(c){return c.objectStore(a).count(b)})};
function bu(a,b,c){a=a.h.createObjectStore(b,c);return new cu(a)}
r.delete=function(a,b){return au(this,[a],{mode:"readwrite",qa:!0,commit:$t()&&!(b instanceof IDBKeyRange)},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return au(this,[a],{mode:"readonly",qa:!0,commit:$t()},function(c){return c.objectStore(a).get(b)})};
function du(a,b,c){return au(a,[b],{mode:"readwrite",qa:!0,commit:$t()},function(d){d=d.objectStore(b);return Wt(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function au(a,b,c,d){var e,f,g,h,k,l,m,p,t,n,x,y;return B(function(w){switch(w.h){case 1:var I={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?I.mode=c:Object.assign(I,c);e=I;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){w.v(4);break}g++;k=Math.round(X());w.o(5);l=a.h.transaction(b,e.mode);I=w.yield;var F=!!e.commit;var T=new eu(l);F=fu(T,d,F);return I.call(w,F,7);case 7:return m=w.i,p=Math.round(X()),gu(a,k,p,g,void 0,b.join(),e),w.return(m);case 5:t=w.j();n=Math.round(X());
x=Lt(t,a.h.name,b.join(),a.h.version);if((y=x instanceof Ht&&!x.h)||g>=f)gu(a,k,n,g,x,b.join(),e),h=x;w.v(2);break;case 4:return w.return(Promise.reject(h))}})}
function gu(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Ht&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&vt("QUOTA_EXCEEDED",{dbName:xt(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Ht&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),vt("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),hu(a,!1,d,f,b,g.tag),ut(e)):hu(a,!0,d,f,b,g.tag)}
function hu(a,b,c,d,e,f){vt("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function cu(a){this.h=a}
r=cu.prototype;r.add=function(a,b){return Wt(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Wt(this.h.clear()).then(function(){})};
function iu(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Wt(this.h.count(a))};
function ju(a,b){return ku(a,{query:b},function(c){return c.delete().then(function(){return lu(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?ju(this,a):Wt(this.h.delete(a))};
r.get=function(a){return Wt(this.h.get(a))};
r.index=function(a){try{return new mu(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Jt(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function ku(a,b,c){a=a.h.openCursor(b.query,b.direction);return nu(a).then(function(d){return Xt(d,c)})}
function eu(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Ht;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function fu(a,b,c){var d=new Promise(function(e,f){try{var g=b(a);c&&a.commit();g.then(function(h){e(h)}).catch(f)}catch(h){f(h),a.abort()}});
return Promise.all([d,a.done]).then(function(e){return z(e).next().value})}
eu.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Ht("EXPLICIT_ABORT");};
eu.prototype.commit=function(){if(!this.aborted){var a,b;(b=(a=this.h).commit)==null||b.call(a)}};
eu.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new cu(a),this.i.set(a,b));return b};
function mu(a){this.h=a}
r=mu.prototype;r.count=function(a){return Wt(this.h.count(a))};
r.delete=function(a){return ou(this,{query:a},function(b){return b.delete().then(function(){return lu(b)})})};
r.get=function(a){return Wt(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function ou(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return nu(a).then(function(d){return Xt(d,c)})}
function pu(a,b){this.request=a;this.cursor=b}
function nu(a){return Wt(a).then(function(b){return b?new pu(a,b):null})}
function lu(a){a.cursor.continue(void 0);return nu(a.request)}
pu.prototype.delete=function(){return Wt(this.cursor.delete()).then(function(){})};
pu.prototype.getValue=function(){return this.cursor.value};
pu.prototype.update=function(a){return Wt(this.cursor.update(a))};function qu(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Zt(g.result,{closed:p}));return t}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ve,k=c.blocking,l=c.Gg,m=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(n){try{if(n.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");n.dataLoss&&n.dataLoss!=="none"&&vt("IDB_DATA_CORRUPTED",{reason:n.dataLossMessage||"unknown reason",dbName:xt(a)});var x=f(),y=new eu(g.transaction);
m&&m(x,function(w){return n.oldVersion<w&&n.newVersion>=w},y);
y.done.catch(function(w){e(w)})}catch(w){e(w)}});
g.addEventListener("success",function(){var n=g.result;k&&n.addEventListener("versionchange",function(){k(f())});
n.addEventListener("close",function(){vt("IDB_UNEXPECTEDLY_CLOSED",{dbName:xt(a),dbVersion:n.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ru(a,b,c){c=c===void 0?{}:c;return qu(a,b,c)}
function su(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return g.o(2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ve)&&c.addEventListener("blocked",function(){e()}),g.yield(Vt(c),4);
if(g.h!=2)return g.A(0);f=g.j();throw Lt(f,a,"",-1);})}
;function tu(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
tu.prototype.i=function(a,b,c){c=c===void 0?{}:c;return ru(a,b,c)};
tu.prototype.delete=function(a){a=a===void 0?{}:a;return su(this.name,a)};
function uu(a,b){return new Ht("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vu(a,b){if(!b)throw Mt("openWithToken",xt(a.name));return a.open()}
tu.prototype.open=function(){function a(){var f,g,h,k,l,m,p,t,n,x;return B(function(y){switch(y.h){case 1:return g=(f=Error().stack)!=null?f:"",y.o(2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var w=h=y.i,I=c.options,F=[],T=z(Object.keys(I.Sb)),Ga=T.next();!Ga.done;Ga=T.next()){Ga=Ga.value;var ka=I.Sb[Ga],be=ka.kg===void 0?Number.MAX_VALUE:ka.kg;!(w.h.version>=ka.cc)||w.h.version>=be||w.h.objectStoreNames.contains(Ga)||F.push(Ga)}k=F;if(k.length===0){y.v(5);break}l=Object.keys(c.options.Sb);
m=h.objectStoreNames();if(c.u<P("ytidb_reopen_db_retries",0))return c.u++,h.close(),ut(new Ht("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());if(!(c.o<P("ytidb_remake_db_retries",1))){y.v(6);break}c.o++;return y.yield(c.delete(),7);case 7:return ut(new Ht("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());case 6:throw new It(m,l);case 5:return y.return(h);case 2:p=y.j();
if(p instanceof DOMException?p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;n=t.h.version;if(c.options.version!==void 0&&n>c.options.version+1)throw t.close(),c.j=!1,uu(c,n);return y.return(t);case 8:throw b(),p instanceof
Error&&!V("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Lt(p,c.name,"",(x=c.options.version)!=null?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw uu(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Gg:b,upgrade:this.options.upgrade};return this.h=d=a()};var wu=new tu("YtIdbMeta",{Sb:{databases:{cc:1}},upgrade:function(a,b){b(1)&&bu(a,"databases",{keyPath:"actualName"})}});
function xu(a,b){var c;return B(function(d){if(d.h==1)return d.yield(vu(wu,b),2);c=d.i;return d.return(au(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wt(f.h.put(a,void 0)).then(function(){})})}))})}
function yu(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(vu(wu,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function zu(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(vu(wu,b),2)):e.h!=3?(d=e.i,e.yield(au(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return ku(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return lu(g)})}),3)):e.return(c)})}
function Au(a){return zu(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Bu(a,b,c){return zu(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Cu(a){var b,c;return B(function(d){if(d.h==1)return b=Bs("YtIdbMeta hasAnyMeta other"),d.yield(zu(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Du,Eu=new function(){}(new function(){});
function Fu(){var a,b,c;return B(function(d){switch(d.h){case 1:a=mt();if((b=a)==null?0:b.hasSucceededOnce)return d.return(!0);var e;if(e=zt)e=/WebKit\/([0-9]+)/.exec(id()),e=!!(e&&parseInt(e[1],10)>=600);e&&(e=/WebKit\/([0-9]+)/.exec(id()),e=!(e&&parseInt(e[1],10)>=602));if(!(e=e||vd)){try{e=self;var f=!!(e.indexedDB&&e.IDBIndex&&e.IDBKeyRange&&e.IDBObjectStore)}catch(g){f=!1}e=!f}if(e||!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);d.o(2);c={actualName:"yt-idb-test-do-not-use",
publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return d.yield(xu(c,Eu),4);case 4:return d.yield(yu("yt-idb-test-do-not-use",Eu),5);case 5:return d.return(!0);case 2:return d.j(),d.return(!1)}})}
function Gu(){if(Du!==void 0)return Du;pt=!0;return Du=Fu().then(function(a){pt=!1;var b;if((b=lt())!=null&&b.h){var c;b={hasSucceededOnce:((c=mt())==null?void 0:c.hasSucceededOnce)||a};var d;(d=lt())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Hu(){return G("ytglobal.idbToken_")||void 0}
function Iu(){var a=Hu();return a?Promise.resolve(a):Gu().then(function(b){b?(E("ytglobal.idbToken_",Eu),b=Eu):b=void 0;return b})}
;var Ju=0;function Ku(a,b){Ju||(Ju=Yn.xa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Iu(),2);case 2:c=h.i;if(!c)return h.return();d=!0;h.o(3);return h.yield(Bu(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(su(f.actualName),7);case 7:return h.yield(yu(f.actualName,c),6);case 6:h.A(4);break;case 3:g=h.j(),ut(g),d=!1;case 4:Yn.ya(Ju),Ju=0,d&&Ku(a,b),h.u()}})}))}
function Lu(){var a;return B(function(b){return b.h==1?b.yield(Iu(),2):(a=b.i)?b.return(Cu(a)):b.return(!1)})}
new lm;function Mu(a){if(!As())throw a=new Ht("AUTH_INVALID",{dbName:a}),ut(a),a;var b=Bs();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Nu(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Iu(),2);case 2:g=m.i;if(!g)throw h=Mt("openDbImpl",a,b),V("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ut(h),h;wt(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Mu(a);m.o(3);return m.yield(xu(k,g),5);case 5:return m.yield(ru(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=m.j(),m.o(7),m.yield(yu(k.actualName,
g),9);case 9:m.A(8);break;case 7:m.j();case 8:throw l;}})}
function Ou(a,b,c){c=c===void 0?{}:c;return Nu(a,b,!1,c)}
function Pu(a,b,c){c=c===void 0?{}:c;return Nu(a,b,!0,c)}
function Qu(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Iu(),2);if(e.h!=3){c=e.i;if(!c)return e.return();wt(a);d=Mu(a);return e.yield(su(d.actualName,b),3)}return e.yield(yu(d.actualName,c),0)})}
function Ru(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(su(d.actualName,b),2):e.yield(yu(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Su(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Iu(),2);if(d.h!=3){b=d.i;if(!b)return d.return();wt("LogsDatabaseV2");return d.yield(Au(b),3)}c=d.i;return d.yield(Ru(c,a,b),0)})}
function Tu(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Iu(),2);if(d.h!=3){c=d.i;if(!c)return d.return();wt(a);return d.yield(su(a,b),3)}return d.yield(yu(a,c),0)})}
;function Uu(a,b){tu.call(this,a,b);this.options=b;wt(a)}
v(Uu,tu);function Vu(a,b){var c;return function(){c||(c=new Uu(a,b));return c}}
Uu.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Pu:Ou)(a,b,Object.assign({},c))};
Uu.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Tu:Qu)(this.name,a)};
function Wu(a,b){return Vu(a,b)}
;var Xu={},Yu=Wu("ytGcfConfig",{Sb:(Xu.coldConfigStore={cc:1},Xu.hotConfigStore={cc:1},Xu),shared:!1,upgrade:function(a,b){b(1)&&(iu(bu(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),iu(bu(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Zu(a){return vu(Yu(),a)}
function $u(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:X()},g.yield(Zu(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(du(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function av(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},h.yield(Zu(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(du(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function bv(a){var b,c;return B(function(d){return d.h==1?d.yield(Zu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(au(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return ou(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function cv(a){var b,c;return B(function(d){return d.h==1?d.yield(Zu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(au(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return ou(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function dv(){H.call(this);this.i=[];this.h=[];var a=G("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(oa(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(dv,H);dv.prototype.da=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;H.prototype.da.call(this)};function ev(){this.h=0;this.i=new dv}
function fv(){var a;return(a=G("yt.gcf.config.hotConfigGroup"))!=null?a:U("RAW_HOT_CONFIG_GROUP")}
function gv(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!V("start_client_gcf")){g.v(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Hu();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(cv(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield($u(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.u()}})}
function hv(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!V("start_client_gcf"))return h.v(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Hu())?c?h.v(4):h.yield(bv(d),5):h.v(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(av(c,b,g,d),0)})}
function iv(){if(!ev.instance){var a=new ev;ev.instance=a}a=ev.instance;var b=X()-a.h;if(!(a.h!==0&&b<P("send_config_hash_timer"))){b=G("yt.gcf.config.coldConfigData");var c=G("yt.gcf.config.hotHashData"),d=G("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=X());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
ev.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function jv(){return"INNERTUBE_API_KEY"in Vq&&"INNERTUBE_API_VERSION"in Vq}
function kv(){return{innertubeApiKey:U("INNERTUBE_API_KEY"),innertubeApiVersion:U("INNERTUBE_API_VERSION"),Gf:U("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),de:U("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),nj:U("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:U("INNERTUBE_CONTEXT_CLIENT_VERSION"),If:U("INNERTUBE_CONTEXT_HL"),Hf:U("INNERTUBE_CONTEXT_GL"),Jf:U("INNERTUBE_HOST_OVERRIDE")||"",Kf:!!U("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oj:!!U("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:U("SERIALIZED_CLIENT_CONFIG_DATA")}}
function lv(a){var b={client:{hl:a.If,gl:a.Hf,clientName:a.de,clientVersion:a.innertubeContextClientVersion,configInfo:a.Gf}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=U("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=yr();c.length>0&&(b.request={internalExperimentFlags:c});c=a.de;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=ds()}(d=G("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(V("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=ys())&&b&&(b.client.connectionType=a);V("web_log_effective_connection_type")&&
(a=zs())&&b&&(b.client.effectiveConnectionType=a);V("start_client_gcf")&&(e=iv())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));U("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&(b.user={onBehalfOfUser:U("DELEGATED_SESSION_ID")});!V("fill_delegate_context_in_gel_killswitch")&&(a=U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=U("INNERTUBE_CONTEXT");var g;if(V("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(ir(U("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function mv(a,b,c){c=c===void 0?{}:c;var d={};U("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":U("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||U("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||U("AUTHORIZATION");b||(a?b="Bearer "+G("gapi.auth.getToken")().bj:(es.instance||(es.instance=new es),a=gs(),V("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var nv=typeof TextEncoder!=="undefined"?new TextEncoder:null,ov=nv?function(a){return nv.encode(a)}:function(a){a=fd(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};var pv={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},qv={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function rv(a,b){this.version=a;this.args=b}
rv.prototype.serialize=function(){return{version:this.version,args:this.args}};function sv(a,b){this.topic=a;this.h=b}
sv.prototype.toString=function(){return this.topic};var tv=G("ytPubsub2Pubsub2Instance")||new Ao;Ao.prototype.subscribe=Ao.prototype.subscribe;Ao.prototype.unsubscribeByKey=Ao.prototype.Ac;Ao.prototype.publish=Ao.prototype.Bb;Ao.prototype.clear=Ao.prototype.clear;E("ytPubsub2Pubsub2Instance",tv);var uv=G("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",uv);var vv=G("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",vv);var wv=G("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",wv);
E("ytPubsub2Pubsub2SkipSubKey",null);function xv(a,b){var c=yv();c&&c.publish.call(c,a.toString(),a,b)}
function zv(a){var b=Av,c=yv();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=G("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(uv[d])try{if(f&&b instanceof sv&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ge){var l=new h;h.Ge=l.version}var m=h.Ge}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Wb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){ar(p)}},wv[b.toString()]?G("yt.scheduler.instance")?Yn.xa(g):tr(g,0):g())});
uv[d]=!0;vv[b.toString()]||(vv[b.toString()]=[]);vv[b.toString()].push(d);return d}
function Bv(){var a=Cv,b=zv(function(c){a.apply(void 0,arguments);Dv(b)});
return b}
function Dv(a){var b=yv();b&&(typeof a==="number"&&(a=[a]),Pb(a,function(c){b.unsubscribeByKey(c);delete uv[c]}))}
function yv(){return G("ytPubsub2Pubsub2Instance")}
;function Ev(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&xv("meta_logging_csi_event",{timerName:a,timelineData:b})}
;var Fv=P("max_body_size_to_compress",5E5),Gv=P("min_body_size_to_compress",500),Hv=!0,Iv=0,Jv=0,Kv=P("compression_performance_threshold_lr",250),Lv=P("slow_compressions_before_abandon_count",4);function Mv(a,b,c,d){var e={startTime:X(),ticks:{},infos:{}};if(Hv)try{var f=Nv(b);if(f==null||!(f>Fv||f<Gv)){var g=rq(ov(b)),h=X();e.ticks.gelc=h;Jv++;Ov(e);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=g;c.postParams=void 0}d(a,c)}catch(k){br(k),d(a,c)}else d(a,c)}
function Pv(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=X(),e={startTime:d,ticks:{},infos:{}},f=b?G("yt.logging.gzipForFetch",!1):!0;if(Hv&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Nv(g);if(h!=null&&(h>Fv||h<Gv))return a;c=b?{level:1}:void 0;f=rq(ov(g),c);var k=X();e.ticks.gelc=k;if(b){Jv++;if(V("disable_compression_due_to_performance_degradation_lr")&&k-d>=Kv)if(Iv++,V("abandon_compression_after_N_slow_zips_lr")){b=
Iv/Jv;var l=Lv/P("compression_disable_point");Jv>0&&Jv%P("compression_disable_point")===0&&b>=l&&(Hv=!1)}else Hv=!1;Ov(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return br(m),a}}else return a}
function Nv(a){try{return(new Blob(a.split(""))).size}catch(b){return br(b),null}}
function Ov(a){V("gel_compression_csi_killswitch")||!V("log_gel_compression_latency")&&!V("log_gel_compression_latency_lr")||Ev("gel_compression",a,{sampleRate:.1})}
;function Qv(a){a=Object.assign({},a);delete a.Authorization;var b=Wi();if(b){var c=new lo;c.update(U("INNERTUBE_API_KEY"));c.update(b);a.hash=Ed(c.digest(),3)}return a}
;var Rv;function Sv(){Rv||(Rv=new kt("yt.innertube"));return Rv}
function Tv(a,b,c,d){if(d)return null;d=Sv().get("nextId",!0)||1;var e=Sv().get("requests",!0)||{};e[d]={method:a,request:b,authState:Qv(c),requestTime:Math.round(X())};Sv().set("nextId",d+1,86400,!0);Sv().set("requests",e,86400,!0);return d}
function Uv(a){var b=Sv().get("requests",!0)||{};delete b[a];Sv().set("requests",b,86400,!0)}
function Zv(a){var b=Sv().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(X())-d.requestTime<6E4)){var e=d.authState,f=Qv(mv(!1));kj(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),$v(a,d.method,e,{}));delete b[c]}}Sv().set("requests",b,86400,!0)}}
;function aw(a){this.Cc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Kb=function(){};
this.now=Date.now;this.jc=!1;var b;this.Be=(b=a.Be)!=null?b:100;var c;this.ue=(c=a.ue)!=null?c:1;var d;this.se=(d=a.se)!=null?d:2592E6;var e;this.oe=(e=a.oe)!=null?e:12E4;var f;this.te=(f=a.te)!=null?f:5E3;var g;this.ba=(g=a.ba)!=null?g:void 0;this.Jc=!!a.Jc;var h;this.Hc=(h=a.Hc)!=null?h:.1;var k;this.bd=(k=a.bd)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.Kb&&(this.Kb=a.Kb);a.jc&&(this.jc=a.jc);a.Cc&&(this.Cc=a.Cc);this.ea=a.ea;this.Ja=a.Ja;this.ka=a.ka;this.ia=a.ia;this.cb=a.cb;
this.Fd=a.Fd;this.Cd=a.Cd;bw(this)&&(!this.ea||this.ea("networkless_logging"))&&cw(this)}
function cw(a){bw(a)&&!a.jc&&(a.h=!0,a.Jc&&Math.random()<=a.Hc&&a.ka.Ze(a.ba),dw(a),a.ia.Aa()&&a.zc(),a.ia.listen(a.Fd,a.zc.bind(a)),a.ia.listen(a.Cd,a.Ud.bind(a)))}
r=aw.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(bw(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ka.set(d,this.ba).then(function(e){d.id=e;c.ia.Aa()&&ew(c,d)}).catch(function(e){ew(c,d);
fw(c,e)})}else this.cb(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(bw(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ea&&this.ea("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.Aa()||this.ea&&this.ea("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ka.set(e,d.ba).catch(function(l){fw(d,l)}),2);
f(g,h);k.u()})}}this.cb(a,b,e.skipRetry)}else this.ka.set(e,this.ba).catch(function(g){d.cb(a,b,e.skipRetry);
fw(d,g)})}else this.cb(a,b,this.ea&&this.ea("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(bw(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ka.Hb(d.id,c.ba):e=!0;c.ia.ub&&c.ea&&c.ea("vss_network_hint")&&c.ia.ub(!0);f(g,h)};
this.cb(d.url,d.options,void 0,!0);this.ka.set(d,this.ba).then(function(g){d.id=g;e&&c.ka.Hb(d.id,c.ba)}).catch(function(g){fw(c,g)})}else this.cb(a,b,void 0,!0)};
r.zc=function(){var a=this;if(!bw(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ja.xa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ka.Yd("NEW",a.ba),2);if(c.h!=3)return b=c.i,b?c.yield(ew(a,b),3):(a.Ud(),c.return());a.i&&(a.i=0,a.zc());c.u()})},this.Be))};
r.Ud=function(){this.Ja.ya(this.i);this.i=0};
function ew(a,b){var c;return B(function(d){switch(d.h){case 1:if(!bw(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.v(2);break}return d.yield(a.ka.Qf(b.id,a.ba),3);case 3:(c=d.i)||a.Kb(Error("The request cannot be found in the database."));case 2:if(gw(a,b,a.se)){d.v(4);break}a.Kb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.v(5);break}return d.yield(a.ka.Hb(b.id,a.ba),5);case 5:return d.return();case 4:b.skipRetry||(b=
hw(a,b));if(!b){d.v(0);break}if(!b.skipRetry||b.id===void 0){d.v(8);break}return d.yield(a.ka.Hb(b.id,a.ba),8);case 8:a.cb(b.url,b.options,!!b.skipRetry),d.u()}})}
function hw(a,b){if(!bw(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=iw(f);(h=jw(f))&&a.ea&&a.ea("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.ea&&a.ea("nwl_consider_error_code")&&g||a.ea&&!a.ea("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.bd)){m.v(2);break}if(!a.ia.gd){m.v(3);break}return m.yield(a.ia.gd(),3);case 3:if(a.ia.Aa()){m.v(2);break}c(e,f);if(!a.ea||!a.ea("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===
void 0){m.v(6);break}return m.yield(a.ka.Gd(b.id,a.ba,!1),6);case 6:return m.return();case 2:if(a.ea&&a.ea("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.bd)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.v(8);break}return b.sendCount<a.ue?m.yield(a.ka.Gd(b.id,a.ba,!0,h?!1:void 0),12):m.yield(a.ka.Hb(b.id,a.ba),8);case 12:a.Ja.xa(function(){a.ia.Aa()&&a.zc()},a.te);
case 8:c(e,f),m.u()}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.v(2):h.yield(a.ka.Hb(b.id,a.ba),2);a.ia.ub&&a.ea&&a.ea("vss_network_hint")&&a.ia.ub(!0);d(e,f);h.u()})};
return b}
function gw(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function dw(a){if(!bw(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ka.Yd("QUEUED",a.ba).then(function(b){b&&!gw(a,b,a.oe)?a.Ja.xa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.v(2):c.yield(a.ka.Gd(b.id,a.ba),2);dw(a);c.u()})}):a.ia.Aa()&&a.zc()})}
function fw(a,b){a.Me&&!a.ia.Aa()?a.Me(b):a.handleError(b)}
function bw(a){return!!a.ba||a.Cc}
function iw(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function jw(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var kw;
function lw(){if(kw)return kw();var a={};kw=Wu("LogsDatabaseV2",{Sb:(a.LogsRequestsStore={cc:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&bu(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),iu(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return kw()}
;function mw(a){return vu(lw(),a)}
function nw(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(mw(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:U("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(du(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=X();ow(c);return g.return(f)})}
function pw(a,b){var c,d,e,f,g,h,k,l,m;return B(function(p){if(p.h==1)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},p.yield(mw(b),2);if(p.h!=3)return d=p.i,e=U("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),k="prev",V("use_fifo_for_networkless")&&(k="next"),l=void 0,m=a==="NEW"?"readwrite":"readonly",V("use_readonly_for_get_most_recent_by_status_killswitch")&&(m="readwrite"),p.yield(au(d,["LogsRequestsStore"],{mode:m,qa:!0},
function(t){return ou(t.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(n){n.getValue()&&(l=n.getValue(),a==="NEW"&&(l.status="QUEUED",n.update(l)))})}),3);
c.ticks.tc=X();ow(c);return p.return(l)})}
function qw(a,b){var c;return B(function(d){if(d.h==1)return d.yield(mw(b),2);c=d.i;return d.return(au(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wt(f.h.put(g,void 0)).then(function(){return g})})}))})}
function rw(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(mw(b),2);e=f.i;return f.return(au(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Wt(h.h.put(k,void 0)).then(function(){return k})):Qt.resolve(void 0)})}))})}
function sw(a,b){var c;return B(function(d){if(d.h==1)return d.yield(mw(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function tw(a){var b,c;return B(function(d){if(d.h==1)return d.yield(mw(a),2);b=d.i;c=X()-2592E6;return d.yield(au(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return ku(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lu(f)})})}),0)})}
function uw(){B(function(a){return a.yield(Su(),0)})}
function ow(a){V("nwl_csi_killswitch")||Ev("networkless_performance",a,{sampleRate:1})}
;var vw={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,offlineSystemFailure:546,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationPlayablesMetrics:533,liveCreationStreamWebrtcStats:288,liveCreationWebrtcError:526,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,
mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,
spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,
vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,
kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,
gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,
transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,
outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,
ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,
watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,
deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,
ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,
watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,
tvhtml5UnexpectedRestart:319,tvhtml5DeviceStorageStats:535,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,
appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,
webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,
parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,
prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,
sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,
parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,
biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,
youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,
crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,
embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527,watchZoomStateChange:528,metadataEditorEvent:529,kidsPrismaDeeplinksEvent:530,creationOrchestrationEvent:531,coordinatedSamplingTriggered:532,dnaRecapScreenshotEvent:534,
mdxLocalNetworkPermissionRequestEvent:536,mdxLocalNetworkPermissionResponseEvent:537,sessionReplayEvent:538,sessionReplayStatusEvent:539,loggingReliabilityProbe:540,keyValueStoreStatsEvent:541,deviceLocationPermissionEvent:542,remoteControlStarted:543,remoteControlCompleted:544,reelsAdsEvents:545,ytlrLoaderTestHarnessEvent:547,biometricAuthenticationEvent:548};var ww={},xw=Wu("ServiceWorkerLogsDatabase",{Sb:(ww.SWHealthLog={cc:1},ww),shared:!0,upgrade:function(a,b){b(1)&&iu(bu(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function yw(a){return vu(xw(),a)}
function zw(a){var b,c;B(function(d){if(d.h==1)return d.yield(yw(a),2);b=d.i;c=X()-2592E6;return d.yield(au(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return ku(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lu(f)})})}),0)})}
function Aw(a){var b;return B(function(c){if(c.h==1)return c.yield(yw(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Bw={},Cw=0;function Dw(a){var b=b===void 0?{}:b;var c=new Image,d=""+Cw++;Bw[d]=c;c.onload=c.onerror=function(){delete Bw[d]};
b.Jj&&(c.referrerPolicy="no-referrer");c.src=a}
;var Ew;function Fw(){Ew||(Ew=new kt("yt.offline"));return Ew}
function Gw(a){if(V("offline_error_handling")){var b=Fw().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Fw().set("errors",b,2592E3,!0)}}
;function Hw(){this.h=new Map;this.i=!1}
function Iw(){if(!Hw.instance){var a=G("yt.networkRequestMonitor.instance")||new Hw;E("yt.networkRequestMonitor.instance",a);Hw.instance=a}return Hw.instance}
Hw.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Hw.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Hw.prototype.removeParams=function(a){return a.split("?")[0]};
Hw.prototype.removeParams=Hw.prototype.removeParams;Hw.prototype.isEndpointCFR=Hw.prototype.isEndpointCFR;Hw.prototype.requestComplete=Hw.prototype.requestComplete;Hw.getInstance=Iw;function Jw(){Pk.call(this);var a=this;this.j=!1;this.h=Xn();this.h.listen("networkstatus-online",function(){if(a.j&&V("offline_error_handling")){var b=Fw().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new W(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ar(d)}Fw().set("errors",{},2592E3,!0)}}})}
v(Jw,Pk);function Kw(){if(!Jw.instance){var a=G("yt.networkStatusManager.instance")||new Jw;E("yt.networkStatusManager.instance",a);Jw.instance=a}return Jw.instance}
r=Jw.prototype;r.Aa=function(){return this.h.Aa()};
r.ub=function(a){this.h.h=a};
r.Cf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.hf=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.gd=function(a){return Vn(this.h,a)};
Jw.prototype.sendNetworkCheckRequest=Jw.prototype.gd;Jw.prototype.listen=Jw.prototype.listen;Jw.prototype.enableErrorFlushing=Jw.prototype.hf;Jw.prototype.getWindowStatus=Jw.prototype.Cf;Jw.prototype.networkStatusHint=Jw.prototype.ub;Jw.prototype.isNetworkAvailable=Jw.prototype.Aa;Jw.getInstance=Kw;function Lw(a){a=a===void 0?{}:a;Pk.call(this);var b=this;this.h=this.u=0;this.j=Kw();var c=G("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Mw(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Mw(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Qk(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qk(b,"publicytnetworkstatus-offline")})))}
v(Lw,Pk);Lw.prototype.Aa=function(){var a=G("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Lw.prototype.ub=function(a){var b=G("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Lw.prototype.gd=function(a){var b=this,c;return B(function(d){c=G("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return V("skip_network_check_if_cfr")&&Iw().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ub(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.Aa())})):c?d.return(c(a)):d.return(!0)})};
function Mw(a,b){a.rateLimit?a.h?(Yn.ya(a.u),a.u=Yn.xa(function(){a.o!==b&&(Qk(a,b),a.o=b,a.h=X())},a.rateLimit-(X()-a.h))):(Qk(a,b),a.o=b,a.h=X()):Qk(a,b)}
;var Nw;function Ow(){var a=aw.call;Nw||(Nw=new Lw({uj:!0,jj:!0}));a.call(aw,this,{ka:{Ze:tw,Hb:sw,Yd:pw,Qf:qw,Gd:rw,set:nw},ia:Nw,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new W(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);br(b,void 0,void 0,void 0,!0)}else ar(b)},
Kb:br,cb:Pw,now:X,Me:Gw,Ja:jt(),Fd:"publicytnetworkstatus-online",Cd:"publicytnetworkstatus-offline",Jc:!0,Hc:.1,bd:P("potential_esf_error_limit",10),ea:V,jc:!(As()&&Qw())});this.j=new lm;V("networkless_immediately_drop_all_requests")&&uw();Tu("LogsDatabaseV2")}
v(Ow,aw);function Rw(){var a=G("yt.networklessRequestController.instance");a||(a=new Ow,E("yt.networklessRequestController.instance",a),V("networkless_logging")&&Iu().then(function(b){a.ba=b;cw(a);a.j.resolve();a.Jc&&Math.random()<=a.Hc&&a.ba&&zw(a.ba);V("networkless_immediately_drop_sw_health_store")&&Sw(a)}));
return a}
Ow.prototype.writeThenSend=function(a,b){b||(b={});b=Tw(a,b);As()||(this.h=!1);aw.prototype.writeThenSend.call(this,a,b)};
Ow.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Tw(a,b);As()||(this.h=!1);aw.prototype.sendThenWrite.call(this,a,b,c)};
Ow.prototype.sendAndWrite=function(a,b){b||(b={});b=Tw(a,b);As()||(this.h=!1);aw.prototype.sendAndWrite.call(this,a,b)};
Ow.prototype.awaitInitialization=function(){return this.j.promise};
function Sw(a){var b;B(function(c){if(!a.ba)throw b=Mt("clearSWHealthLogsDb"),b;return c.return(Aw(a.ba).catch(function(d){a.handleError(d)}))})}
function Pw(a,b,c){b=V("web_fp_via_jspb")?Object.assign({},b):b;if(V("use_request_time_ms_header"))b.headers&&mr(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var d;if((d=b.postParams)==null?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&Object.keys(b).length===0){var e=e===void 0?"":e;var f=f===void 0?!1:f;var g=g===void 0?!1:g;if(a)if(e)Cr(a,void 0,"POST",e,void 0);else if(U("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||g)Cr(a,void 0,"GET","",void 0,void 0,
f,g);else{b:{try{c:{var h=new ab({url:a});if(h.h.dsh==="1")var k=null;else{var l=h.h.ae;if(l==="1"){var m=h.h.adurl;if(m)try{k={version:3,ff:decodeURIComponent(m),Te:Za(h.i,"act=1","ri=1",bb(h))};break c}catch(T){}}k=l==="2"?{version:4,ff:Za(h.i,"dct=1","suid="+h.j,"ri=1"),Te:Za(h.i,"act=1","ri=1","suid="+h.j)}:null}}if(k){var p=jc(a),t;if(!(t=!p||!p.endsWith("/aclk"))){var n=a.search(rc),x=qc(a,0,"ri",n);if(x<0)var y=null;else{var w=a.indexOf("&",x);if(w<0||w>n)w=n;y=dc(a.slice(x+3,w!==-1?w:0))}t=
y!=="1"}var I=!t;break b}}catch(T){}I=!1}if(I){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var F=!0;break b}}catch(T){}F=!1}c=F?!0:!1}else c=!1;c||Dw(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Mv(a,b.postBody,b,Gr)):Mv(a,JSON.stringify(b.postParams),b,Fr):Gr(a,b)}
function Tw(a,b){V("use_event_time_ms_header")&&mr(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(X())));return b}
function Qw(){return ic(document.location.toString())!=="www.youtube-nocookie.com"}
;var Uw=!1,Vw=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Uw};E("ytNetworklessLoggingInitializationOptions",Vw);function Ww(){var a;B(function(b){if(b.h==1)return b.yield(Iu(),2);a=b.i;if(!a||!As()&&!V("nwl_init_require_datasync_id_killswitch")||!Qw())return b.v(0);Uw=!0;Vw.isNwlInitialized=Uw;return b.yield(Rw().awaitInitialization(),0)})}
;function Xw(a){var b=this;this.config_=null;a?this.config_=a:jv()&&(this.config_=kv());Ds(function(){Zv(b)},5E3)}
Xw.prototype.isReady=function(){!this.config_&&jv()&&(this.config_=kv());return!!this.config_};
function $v(a,b,c,d){function e(p){p=p===void 0?!1:p;var t;if(d.retry&&h!="www.youtube-nocookie.com"&&(p||V("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(t=Tv(b,c,l,k)),t)){var n=g.onSuccess,x=g.onFetchSuccess;g.onSuccess=function(w,I){Uv(t);n(w,I)};
c.onFetchSuccess=function(w,I){Uv(t);x(w,I)}}try{if(p&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Rw().writeThenSend(m,g):Rw().sendAndWrite(m,g);
else if(d.compress)if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Mv(m,y,g,Gr)}else Mv(m,JSON.stringify(g.postParams),g,Fr);else Fr(m,g)}catch(w){if(w.name==="InvalidAccessError")t&&(Uv(t),t=0),br(Error("An extension is blocking network request."));else throw w;}t&&Ds(function(){Zv(a)},5E3)}
!U("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&br(new W("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new W("innertube xhrclient not ready",b,c,d);ar(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,t){if(d.onSuccess)d.onSuccess(t)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onProgress:function(p){if(d.onProgress)d.onProgress(p)},
onError:function(p,t){if(d.onError)d.onError(t)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Jf)&&(h=f);var k=a.config_.Kf||!1,l=mv(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=kr(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(G("ytNetworklessLoggingInitializationOptions")?Vw.isNwlInitialized:Uw)?Gu().then(function(p){e(p)}):e(!1)}
;var Yw=0,Zw=xd?"webkit":wd?"moz":ud?"ms":td?"o":"";E("ytDomDomGetNextId",G("ytDomDomGetNextId")||function(){return++Yw});var $w={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ax(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in $w||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function bx(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ax.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ax.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ax.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gj=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",gj);var cx=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",cx);
function dx(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fj(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&kj(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ex(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=dx(a,b,c,d);if(e)return e;e=++cx.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ax(h);if(!vj(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ax(h);
h.currentTarget=a;return c.call(a,h)};
g=$q(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),fx()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gj[e]=[a,b,c,g,d];return e}
function gx(a){a&&(typeof a=="string"&&(a=[a]),Pb(a,function(b){if(b in gj){var c=gj[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?fx()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gj[b]}}))}
var fx=el(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function hx(a){this.G=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.P=ex(window,"mousemove",Ua(this.Y,this));a=Ua(this.J,this);typeof a==="function"&&(a=$q(a));this.aa=window.setInterval(a,25)}
Ya(hx,H);hx.prototype.Y=function(a){a.h===void 0&&bx(a);var b=a.h;a.i===void 0&&bx(a);this.h=new bj(b,a.i)};
hx.prototype.J=function(){if(this.h){var a=X();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
hx.prototype.da=function(){window.clearInterval(this.aa);gx(this.P)};var ix={};function jx(a){var b=a===void 0?{}:a;a=b.hg===void 0?!1:b.hg;b=b.jf===void 0?!0:b.jf;if(G("_lact",window)==null){var c=parseInt(U("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&kx();lx(a,b);new hx(function(){mx("mouse",100)})}}
function lx(a,b){var c=window;a=a===void 0?!1:a;b=b===void 0?!0:b;ex(c.document,"keydown",kx);ex(c.document,"keyup",kx);ex(c.document,"mousedown",kx);ex(c.document,"mouseup",kx);a?ex(c,"touchmove",function(){mx("touchmove",200)},{passive:!0}):(ex(c,"resize",function(){mx("resize",200)}),b&&ex(c,"scroll",function(){mx("scroll",200)}));
ex(c.document,"touchstart",kx,{passive:!0});ex(c.document,"touchend",kx,{passive:!0})}
function mx(a,b){ix[a]||(ix[a]=!0,Yn.xa(function(){kx();ix[a]=!1},b))}
function kx(){G("_lact",window)==null&&jx();var a=Date.now();E("_lact",a,window);G("_fact",window)==-1&&E("_fact",a,window);(a=G("ytglobal.ytUtilActivityCallback_"))&&a()}
function nx(){var a=G("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ox=D.ytPubsubPubsubInstance||new Ao,px=D.ytPubsubPubsubSubscribedKeys||{},qx=D.ytPubsubPubsubTopicToKeys||{},rx=D.ytPubsubPubsubIsSynchronous||{};function sx(a,b){var c=tx();if(c&&b){var d=c.subscribe(a,function(){function e(){px[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{rx[a]?e():tr(e,0)}catch(g){ar(g)}},void 0);
px[d]=!0;qx[a]||(qx[a]=[]);qx[a].push(d);return d}return 0}
function ux(a){var b=tx();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Pb(a,function(c){b.unsubscribeByKey(c);delete px[c]}))}
function vx(a,b){var c=tx();c&&c.publish.apply(c,arguments)}
function wx(a){var b=tx();if(b)if(b.clear(a),a)xx(a);else for(var c in qx)xx(c)}
function tx(){return D.ytPubsubPubsubInstance}
function xx(a){qx[a]&&(a=qx[a],Pb(a,function(b){px[b]&&delete px[b]}),a.length=0)}
Ao.prototype.subscribe=Ao.prototype.subscribe;Ao.prototype.unsubscribeByKey=Ao.prototype.Ac;Ao.prototype.publish=Ao.prototype.Bb;Ao.prototype.clear=Ao.prototype.clear;E("ytPubsubPubsubInstance",ox);E("ytPubsubPubsubTopicToKeys",qx);E("ytPubsubPubsubIsSynchronous",rx);E("ytPubsubPubsubSubscribedKeys",px);var yx=Symbol("injectionDeps");function zx(a){this.name=a}
zx.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ax(a){this.key=a}
function Bx(){this.i=new Map;this.j=new Map;this.h=new Map}
function Cx(a,b){a.i.set(b.uc,b);var c=a.j.get(b.uc);if(c)try{c.ed(a.resolve(b.uc))}catch(d){c.Fj(d)}}
Bx.prototype.resolve=function(a){return a instanceof Ax?Dx(this,a.key,[],!0):Dx(this,a,[])};
function Dx(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Ee!==void 0)var e=d.Ee;else if(d.Ng)e=d[yx]?Ex(a,d[yx],c):[],e=d.Ng.apply(d,oa(e));else if(d.Ld){e=d.Ld;var f=e[yx]?Ex(a,e[yx],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(oa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Nj||a.h.set(b,e);return e}
function Ex(a,b,c){return b?b.map(function(d){return d instanceof Ax?Dx(a,d.key,c,!0):Dx(a,d,c)}):[]}
;var Fx;function Gx(){Fx||(Fx=new Bx);return Fx}
;var Hx=window;function Ix(){var a,b;return"h5vcc"in Hx&&((a=Hx.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Hx.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Hx&&Hx.performance.mark&&Hx.performance.measure?2:0}
function Jx(a){var b=Ix();switch(b){case 1:Hx.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Hx.performance.mark(a+"-start");break;case 0:break;default:Bb(b,"unknown trace type")}}
function Kx(a){var b=Ix();switch(b){case 1:Hx.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Hx.performance.mark(c);Hx.performance.measure(a,b,c);break;case 0:break;default:Bb(b,"unknown trace type")}}
;var Lx=V("web_enable_lifecycle_monitoring")&&Ix()!==0,Mx=V("web_enable_lifecycle_monitoring");function Nx(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ox(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?jt():d;this.j=c;this.scheduler=d;this.i=new lm;this.h=a;for(a={sb:0};a.sb<this.h.length;a={Zc:void 0,sb:a.sb},a.sb++)a.Zc=this.h[a.sb],c=function(e){return function(){e.Zc.vd();b.h[e.sb].cd=!0;b.h.every(function(f){return f.cd===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Zc),d=this.scheduler.eb(c,d),this.h[a.sb]=Object.assign({},a.Zc,{vd:c,
jobId:d})}
function Px(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.cd||(a.scheduler.ya(c.jobId),a.scheduler.eb(c.vd,10))}
Ox.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.cd||this.scheduler.ya(b.jobId),b.cd=!0;this.i.resolve()};
Ox.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Qx(a){this.state=a;this.plugins=[];this.o=void 0;this.A={};Lx&&Jx(this.state)}
r=Qx.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Lx&&Kx(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Px(this.j),this.j=void 0);Rx(this,a,b);this.state=a;Lx&&Jx(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Sx(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Sx(a,b){var c=b.filter(function(e){return Tx(a,e)===10}),d=b.filter(function(e){return Tx(a,e)!==10});
return a.A.Mj?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.ng.apply(a,[c].concat(oa(e))),2);a.xe.apply(a,[d].concat(oa(e)));f.u()})}:function(){var e=C.apply(0,arguments);
a.og.apply(a,[c].concat(oa(e)));a.xe.apply(a,[d].concat(oa(e)))}}
r.og=function(a){for(var b=C.apply(1,arguments),c=jt(),d=z(a),e=d.next(),f={};!e.done;f={lc:void 0},e=d.next())f.lc=e.value,c.Zb(function(g){return function(){Ux(g.lc.name);Vx(function(){return g.lc.callback.apply(g.lc,oa(b))});
Wx(g.lc.name)}}(f))};
r.ng=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=jt(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.v(0);f.kb=e.value;f.Bc=void 0;g=function(k){return function(){Ux(k.kb.name);var l=Vx(function(){return k.kb.callback.apply(k.kb,oa(b))});
Ee(l)?k.Bc=V("web_lifecycle_error_handling_killswitch")?l.then(function(){Wx(k.kb.name)}):l.then(function(){Wx(k.kb.name)},function(m){Nx(m);
Wx(k.kb.name)}):Wx(k.kb.name)}}(f);
c.Zb(g);return f.Bc?h.yield(f.Bc,3):h.v(3)}f={kb:void 0,Bc:void 0};e=d.next();return h.v(2)})};
r.xe=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{vd:function(){Ux(e.name);Vx(function(){return e.callback.apply(e,oa(b))});
Wx(e.name)},
priority:Tx(c,e)}});
d.length&&(this.j=new Ox(d))};
function Tx(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Ux(a){Lx&&a&&Jx(a)}
function Wx(a){Lx&&a&&Kx(a)}
function Rx(a,b,c){Mx&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Qx.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function Vx(a){if(V("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Nx(b)}}
;function Xx(a){Qx.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Yx;v(Xx,Qx);Xx.prototype.i=function(a,b){var c=this;this.h=Ds(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Xx.prototype.u=function(a,b){this.h&&(Yn.ya(this.h),this.h=null);a(b==null?void 0:b.event)};
function Zx(){Yx||(Yx=new Xx);return Yx}
;var $x=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return $x});function ay(){this.store={};this.h={}}
ay.prototype.storePayload=function(a,b){a=by(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);V("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ay.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=cy(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,oa(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,oa(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,oa(this.smartExtractMatchingEntries(a))));return c};
ay.prototype.extractMatchingEntries=function(a){a=cy(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,oa(this.store[a[c]])),delete this.store[a[c]]);return b};
ay.prototype.getSequenceCount=function(a){a=cy(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function cy(a,b){var c=by(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&by(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(dy(b.auth,g[0])){var h=b.isJspb;dy(h===void 0?"undefined":h?"true":"false",g[1])&&dy(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),dy(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function dy(a,b){return a===void 0||a==="undefined"?!0:a===b}
ay.prototype.getSequenceCount=ay.prototype.getSequenceCount;ay.prototype.extractMatchingEntries=ay.prototype.extractMatchingEntries;ay.prototype.smartExtractMatchingEntries=ay.prototype.smartExtractMatchingEntries;ay.prototype.storePayload=ay.prototype.storePayload;function by(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function ey(a,b){if(a)return a[b.name]}
;var fy=new zx("FinchConfigManagerService");var gy=P("initial_gel_batch_timeout",2E3),hy=P("gel_queue_timeout_max_ms",6E4),iy=P("gel_min_batch_size",5),jy=void 0;function ky(){this.o=this.h=this.i=0;this.j=!1}
var ly=new ky,my=new ky,ny=new ky,oy=new ky,py,qy=!0,ry=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",ry);var sy={};function ty(){var a=G("yt.logging.ims");a||(a=new ay,E("yt.logging.ims",a));return a}
function uy(a,b){if(a.endpoint==="log_event"){vy(a);var c=wy(a),d=xy(a.payload)||"";a:{if(V("enable_web_tiered_gel")){var e=vw[d||""];var f,g,h,k=Gx().resolve(new Ax(ev))==null?void 0:(f=fv())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!V("web_payload_policy_disabled_killswitch"))return;k=yy(e.tier);if(k===400){zy(a,b);return}}sy[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};ty().storePayload(c,a.payload);Ay(b,c,d==="gelDebuggingEvent")}}
function Ay(a,b,c){function d(k){By(k,{writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(jy=new a);a=P("tvhtml5_logging_max_batch_ads_fork")||P("tvhtml5_logging_max_batch")||P("web_logging_max_batch")||100;var f=X(),g=Cy(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=ty().getSequenceCount(b));c>=1E3?d("CODE_SECTION_FLUSH_LOGS_ON_HARD_MAX_QUEUE_SIZE"):c>=a?py||(py=Dy(function(){d("CODE_SECTION_FLUSH_LOGS_ON_MAX_QUEUE_SIZE");py=void 0},0)):f-h>=10&&(Ey(e,b.tier),g.o=f)}
function zy(a,b){if(a.endpoint==="log_event"){V("more_accurate_gel_parser")&&ty().storePayload({isJspb:!1},a.payload);vy(a);var c=wy(a),d=new Map;d.set(c,[a.payload]);var e=xy(a.payload)||"";b&&(jy=new b);return new fl(function(f,g){jy&&jy.isReady()?Fy(d,jy,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function wy(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ry[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function By(a,b,c,d,e){b=b===void 0?{}:b;d=d===void 0?!1:d;if(V("enable_flush_logs_call_source_trace")){var f=a;a===void 0&&(f=qy?"CODE_SECTION_FLUSH_LOGS_ON_THE_FIRST_TIME_AFTER_STARTUP":"CODE_SECTION_UNSPECIFIED");sy[""]=!0;ty().storePayload({cttAuthInfo:"",isJspb:!1,tier:200},{eventTimeMs:Math.round(X()),context:{lastActivityMs:String(nx())},tvhtml5StabilityTraceEvent:{codeSection:f}})}new fl(function(g,h){var k=Cy(d,e),l=k.j;k.j=!1;Gy(k.i);Gy(k.h);k.h=0;jy&&jy.isReady()?e===void 0&&V("enable_web_tiered_gel")?
Hy(g,h,b,c,d,300,l):Hy(g,h,b,c,d,e,l):(Ey(d,e),g())})}
function Hy(a,b,c,d,e,f,g){var h=jy;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=V("enable_web_tiered_gel")?ty().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ty().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(sy)),l=d.next();!l.done;l=d.next())l=l.value,e=V("enable_web_tiered_gel")?ty().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ty().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(V("web_fp_via_jspb_and_json")&&c.writeThenSend||!V("web_fp_via_jspb_and_json"))&&delete sy[l];Fy(k,h,a,b,c,!1,g)}
function Ey(a,b){function c(){By("CODE_SECTION_FLUSH_LOGS_ON_DEBOUNCE_LOGS_QUEUE",{writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Cy(a,b),e=d===oy||d===ny?5E3:hy;V("web_gel_timeout_cap")&&!d.h&&(e=Dy(function(){c()},e),d.h=e);
Gy(d.i);e=U("LOGGING_BATCH_TIMEOUT",P("web_gel_debounce_ms",1E4));V("shorten_initial_gel_batch_timeout")&&qy&&(e=gy);e=Dy(function(){P("gel_min_batch_size")>0?ty().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=iy&&c():c()},e);
d.i=e}
function Fy(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(X()),k=a.size,l=(g===void 0?0:g)&&V("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={Ad:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Ed:void 0,Dd:void 0},m=a.next()){var p=z(m.value);m=p.next().value;p=p.next().value;g.batchRequest=mj({context:lv(b.config_||kv())});if(!La(p)&&!V("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=ry[m])&&
Iy(g.batchRequest,m,p);delete ry[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Jy(g.batchRequest,h,g.dangerousLogToVisitorSession);V("always_send_and_write")&&(e.writeThenSend=!1);g.Ed=function(t){V("start_client_gcf")&&Yn.xa(function(){return B(function(n){return n.yield(Ky(t),0)})});
k--;k||c()};
g.Ad=0;g.Dd=function(t){return function(){t.Ad++;if(e.bypassNetworkless&&t.Ad===1)try{$v(b,l,t.batchRequest,Ly({writeThenSend:!0},t.dangerousLogToVisitorSession,t.Ed,t.Dd,f)),qy=!1}catch(n){ar(n),d()}k--;k||c()}}(g);
try{$v(b,l,g.batchRequest,Ly(e,g.dangerousLogToVisitorSession,g.Ed,g.Dd,f)),qy=!1}catch(t){ar(t),d()}}}
function Ly(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,dj:!!e,headers:{},postBodyFormat:"",postBody:"",compress:V("compress_gel")||V("compress_gel_lr")};My()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function Jy(a,b,c){My()||(a.requestTimeMs=String(b));V("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=U("EVENT_ID"))&&((c=U("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Wq("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Iy(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function vy(a){var b=xr("il_payload_scraping")==="enable_il_payload_scraping";if(!G("yt.logging.transport.enableScrapingForTest"))if(b)$x=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",$x),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),E("yt.logging.transport.scrapeClientEvent",
!0);else return;b=G("yt.logging.transport.scrapedPayloadsForTesting");var c=G("yt.logging.transport.payloadToScrape"),d=G("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",b)}
function My(){return V("use_request_time_ms_header")||V("lr_use_request_time_ms_header")}
function Dy(a,b){return V("transport_use_scheduler")===!1?tr(a,b):V("logging_avoid_blocking_during_navigation")||V("lr_logging_avoid_blocking_during_navigation")?Ds(function(){if(Zx().currentState==="none")a();else{var c={};Zx().install((c.none={callback:a},c))}},b):Ds(a,b)}
function Gy(a){V("transport_use_scheduler")?Yn.ya(a):window.clearTimeout(a)}
function Ky(a){var b,c,d,e,f,g,h,k,l,m,p,t,n,x,y;return B(function(w){if(w.h==1)return d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=ey(d,xq),g=(f=d)==null?void 0:f.hotHashData,h=ey(d,wq),l=(k=d)==null?void 0:k.coldHashData,(m=Gx().resolve(new Ax(ev)))?g?e?w.yield(gv(m,g,e),3):w.yield(gv(m,g),3):w.v(3):w.v(2);if(w.h!=2)return l?h?w.yield(hv(m,l,h),2):w.yield(hv(m,l),2):w.v(2);t=(p=d)==null?void 0:p.rawFinchStaticConfigGroup;x=(n=d)==null?void 0:n.finchStaticHashData;
if(!x)return t&&br(new W("Finch config data is present, but hash is missing.")),w.return();y=Gx().resolve(new Ax(fy));return y?w.yield(y.Cj({config:t||{},fj:x||""}),0):((t||x)&&br(new W("FinchConfigManagerService is not present, but Finch config data is present.")),w.v(0))})}
function Cy(a,b){b=b===void 0?200:b;return a?b===300?oy:my:b===300?ny:ly}
function xy(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,vw[b])return b}
function yy(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ny=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Ny);
function Oy(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=nx();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!V("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ny[b]=b in Ny?Ny[b]+1:0,a.sequence={index:Ny[b],groupKey:b},d.endOfSequence&&delete Ny[d.sequenceGroup]);V("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
zy:uy)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function tt(a,b,c){c=c===void 0?{}:c;var d=Xw;U("ytLoggingEventsDefaultDisabled",!1)&&Xw===Xw&&(d=null);Oy(a,b,d,c)}
;var Py=new Set,Qy=0,Ry=0,Sy=0,Ty=[],Uy=[],Vy=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Wy(){Pb(U("ERRORS")||[],function(a){Xy.apply(null,a)});
Wq("ERRORS",[])}
function st(a){Xy(a)}
function Yy(a){Xy(a,"WARNING")}
function Zy(a){a instanceof Error?Xy(a):(a=Ma(a)?JSON.stringify(a):String(a),a=new W(a),a.name="RejectedPromiseError",Yy(a))}
function $y(a,b,c,d,e,f){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Xq("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new W(h),e.name="UnhandledWindowError",e.message=h,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!V("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.bf)f||(f={}),f.componentStack=m}f&&az(e,f);g?Xy(e):Yy(e)}}
function Xy(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||U("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||U("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a){a.hasOwnProperty("level")&&a.level&&(b=a.level);if(V("console_log_js_exceptions")||["test","dev","autopush","staging"].includes(U("SERVER_VERSION")))d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),
a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a);if(!(Qy>=5)){d=[];e=z(Uy);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(w){}}d=[].concat(oa(Ty),oa(d));var k=$b(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";
k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=$r(a.args[t],"params."+t,c,p),p>=500);t++);else if(a.hasOwnProperty("params")&&a.params){var n=a.params;if(typeof a.params==="object")for(t in n){if(n[t]){var x="params."+t,y=bs(n[t]);c[x]=y;p+=x.length+y.length;if(p>500)break}}else c.params=bs(n)}if(d.length)for(t=0;t<d.length&&!(p=$r(d[t],"params.context."+t,c,p),p>=500);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=
navigator.vendor);t={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=t.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Vr();c=z(a.mb);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.yj)){a=d.weight;break a}a=z(a.gb);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=z(Pr);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Yc[t.name])for(e=
z(c.Yc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],t.params["params.error."+e[m]]=d[m+1];t.message=c.zd(f);break}t.params||(t.params={});a=Vr();t.params["params.errorServiceSignature"]="msg="+a.mb.length+"&cb="+a.gb.length;t.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
(new pj(qj,"sample")).constructor!==pj&&(t.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(t);if(t.sampleWeight!==0&&!Py.has(t.message)){if(g)bz(b===void 0?"ERROR":b,t);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Xr.Bb("handleError",t),V("record_app_crashed_web")&&Sy===0&&t.sampleWeight===1&&(Sy++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},V("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),
tt("appCrashed",g)),Ry++):b==="WARNING"&&Xr.Bb("handleWarning",t);if(V("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=z(Vy);for(c=a.next();!c.done;c=a.next())if(At(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=
Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];U("FEXP_EXPERIMENTS")&&(h.experimentIds=U("FEXP_EXPERIMENTS"));d=U("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Xq("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=
e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=t.params)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=U("SERVER_NAME");e=U("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));(d=U("PLAYER_CLIENT_VERSION"))&&h.kvPairs.push({key:"client.player.version",value:d});h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(tt("clientError",
h),(g==="ERROR"||V("errors_flush_gel_always_killswitch"))&&By("CODE_SECTION_UNSPECIFIED",void 0,void 0,!1))}V("suppress_error_204_logging")||bz(b,t)}try{Py.add(t.message)}catch(w){}Qy++}}}}
function bz(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:U("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=U("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=U("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=U("SERVER_NAME");b=U("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b);(c=U("PLAYER_CLIENT_VERSION"))&&(a.postParams["client.player.version"]=c)}Gr(U("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function az(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,oa(b))}
;function cz(){this.register=new Map}
function dz(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.pe("ABORTED")}
cz.prototype.clear=function(){dz(this);this.register.clear()};
var ez=new cz;var fz=Date.now().toString();
function gz(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(fz)for(a=1,b=0;b<fz.length;b++)d[a%16]^=d[(a-1)%16]/4^fz.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var hz,iz=D.ytLoggingDocDocumentNonce_;iz||(iz=gz(),E("ytLoggingDocDocumentNonce_",iz));hz=iz;function jz(a){this.h=a}
r=jz.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new zq;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&N(a,2,lf(this.h.veType)),this.h.veCounter!==void 0&&N(a,6,lf(this.h.veCounter)),this.h.elementIndex!==void 0&&N(a,3,lf(this.h.elementIndex)),this.h.isCounterfactual&&N(a,5,gf(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();sg(a,zq,7,b)}this.h.youtubeData!==void 0&&sg(a,yq,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function kz(a){return U("client-screen-nonce-store",{})[a===void 0?0:a]}
function lz(a,b){b=b===void 0?0:b;var c=U("client-screen-nonce-store");c||(c={},Wq("client-screen-nonce-store",c));c[b]=a}
function mz(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function nz(a){return U(mz(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",nz);function oz(){var a=U("csn-to-ctt-auth-info");a||(a={},Wq("csn-to-ctt-auth-info",a));return a}
function pz(){return Object.values(U("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function qz(a){a=kz(a===void 0?0:a);if(!a&&!U("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",qz);function rz(a,b,c){var d=oz();(c=qz(c))&&delete d[c];b&&(d[a]=b)}
function sz(a){return oz()[a]}
E("yt_logging_screen.getCttAuthInfo",sz);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==kz(c)||b!==U(mz(c)))if(rz(a,d,c),lz(a,c),Wq(mz(c),b),b=function(){setTimeout(function(){a&&tt("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:hz,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function tz(){var a=lj(uz),b;return(new fl(function(c,d){a.onSuccess=function(e){rr(e)?c(new vz(e)):d(new wz("Request failed, status="+sr(e),"net.badstatus",e))};
a.onError=function(e){d(new wz("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new wz("Request timed out","net.timeout",e))};
b=Gr("//googleads.g.doubleclick.net/pagead/id",a)})).kd(function(c){if(c instanceof ol){var d;
(d=b)==null||d.abort()}return kl(c)})}
function wz(a,b,c){eb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(wz,eb);function vz(a){this.xhr=a}
;function xz(){this.D=0;this.h=null}
xz.prototype.then=function(a,b,c){return this.D===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:yz(a):this.D===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:zz(a):this};
xz.prototype.getValue=function(){return this.h};
xz.prototype.isRejected=function(){return this.D==2};
xz.prototype.$goog_Thenable=!0;function zz(a){var b=new xz;a=a===void 0?null:a;b.D=2;b.h=a===void 0?null:a;return b}
function yz(a){var b=new xz;a=a===void 0?null:a;b.D=1;b.h=a===void 0?null:a;return b}
;function Az(a){var b=U("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(kc(a)));return a}
function Bz(a){var b={};V("json_condensed_response")&&(b.prettyPrint="false");return a=lr(a,b||{},!1)}
function Cz(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:mr(a)?"same-origin":"cors",credentials:mr(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Dz(){return Ui()||(zd||Ad)&&At("applewebkit")&&!At("version")&&(!At("safari")||At("gsa/"))||yd&&At("version/")?!0:U("EOM_VISITOR_DATA")?!1:!0}
;function Ez(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Fz(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Dq)if(Dq[d]==c.embeddedPlayerMode){b=Dq[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Gz(a){eb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Hz;this.isTimeout=a instanceof wz&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ol}
v(Gz,eb);Gz.prototype.name="BiscottiError";function Hz(){eb.call(this,"Biscotti ID is missing from server")}
v(Hz,eb);Hz.prototype.name="BiscottiMissingError";var uz={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Iz=null;function Jz(){if(V("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Dz())return Error("User has not consented - not fetching biscotti id.");var a=U("PLAYER_VARS",{});if(jj(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Fz(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Pq(){var a=Jz();if(a!==void 0)return kl(a);Iz||(Iz=tz().then(Kz).kd(function(b){return Lz(2,b)}));
return Iz}
function Kz(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Hz;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Hz;a=a.id;Qq(a);Iz=yz(a);Mz(18E5,2);return a}
function Lz(a,b){b=new Gz(b);Qq("");Iz=zz(b);a>0&&Mz(12E4,a-1);throw b;}
function Mz(a,b){tr(function(){tz().then(Kz,function(c){return Lz(b,c)}).kd(dl)},a)}
function Nz(){try{var a=G("yt.ads.biscotti.getId_");return a?a():Pq()}catch(b){return kl(b)}}
;var Kb=pa(["data-"]);function Oz(a){a&&(a.dataset?a.dataset[Pz()]="true":Lb(a))}
function Qz(a){return a?a.dataset?a.dataset[Pz()]:a.getAttribute("data-loaded"):null}
var Rz={};function Pz(){return Rz.loaded||(Rz.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Sz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||lj(b);this.assets=a.assets||{};this.attrs=a.attrs||lj(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Sz.prototype.clone=function(){var a=new Sz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ka(c)=="object"?a[b]=lj(c):a[b]=c}return a};var Tz=["att/get"],Uz=["share/get_share_panel"],Vz=["share/get_web_player_share_panel"],Wz=["feedback"],Xz=["notification/modify_channel_preference"],Yz=["browse/edit_playlist"],Zz=["subscription/subscribe"],$z=["subscription/unsubscribe"];var aA=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",aA);function bA(a){Rq(aA,arguments)}
;function cA(a,b,c){dA(a,b,c===void 0?null:c)}
function eA(a){a=fA(a);var b=document.getElementById(a);b&&(wx(a),b.parentNode.removeChild(b))}
function gA(a,b){a&&b&&(a=""+Na(b),(a=hA[a])&&ux(a))}
function dA(a,b,c){c=c===void 0?null:c;var d=fA(typeof a==="string"?a:a.toString()),e=document.getElementById(d),f=e&&Qz(e),g=e&&!f;f?b&&b():(b&&(f=sx(d,b),b=""+Na(b),hA[b]=f),g||(e=iA(a,d,function(){Qz(e)||(Oz(e),vx(d),tr(function(){wx(d)},0))},c)))}
function iA(a,b,c,d){d=d===void 0?null:d;var e=sj("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ib(e,typeof a==="string"?uq(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function fA(a){var b=document.createElement("a");Ab(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ec(a)}
var hA={};function jA(a){var b=kA(a),c=document.getElementById(b),d=c&&Qz(c);d||c&&!d||(c=lA(a,b,function(){if(!Qz(c)){Oz(c);vx(b);var e=Va(wx,b);tr(e,0)}}))}
function lA(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=uq(a);Nb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kA(a){var b=sj("A");Ab(b,new tb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ec(a)}
;function mA(a){var b=C.apply(1,arguments);if(!nA(a)||b.some(function(d){return!nA(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())oA(a,c.value)}
function oA(a,b){for(var c in b)if(nA(b[c])){if(c in a&&!nA(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});oA(a[c],b[c])}else if(pA(b[c])){if(c in a&&!pA(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);qA(a[c],b[c])}else a[c]=b[c];return a}
function qA(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,nA(c)?a.push(oA({},c)):pA(c)?a.push(qA([],c)):a.push(c);return a}
function nA(a){return typeof a==="object"&&!Array.isArray(a)}
function pA(a){return typeof a==="object"&&Array.isArray(a)}
;var rA="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function sA(a,b){var c=c===void 0?!0:c;var d=U("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ic(window.location.href);e&&d.push(e);e=ic(a);if(Ob(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Ab(d,a),a=d.href)if(a=kc(a),a=lc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:qz()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&tA(a,b,f)}else tA(a,b)}
function tA(a,b,c){a=uA(a);b=b?oc(b):"";c=c||5;Dz()&&is(a,b,c)}
function uA(a){for(var b=z(rA),c=b.next();!c.done;c=b.next())a=tc(a,c.value);return"ST-"+ec(a).toString(36)}
;Date.now();function vA(a){for(var b=0,c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;function wA(a){rv.call(this,1,arguments);this.csn=a}
v(wA,rv);var Av=new sv("screen-created",wA),xA=[],yA=0,zA=new Map,AA=new Map,BA=new Map;
function CA(a,b,c,d,e,f){e=e===void 0?!1:e;f=f===void 0?{}:f;Object.assign(f,DA({cttAuthInfo:sz(b)||void 0},b));for(var g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(hj(k)||!k.trackingParams&&!k.veType)&&Yy(Error("Child VE logged with no data"));if(V("no_client_ve_attach_unless_shown")){var l=EA(h,b);if(k.veType&&!AA.has(l)&&!BA.has(l)&&!e){if(!V("il_attach_cache_limit")||zA.size<1E3){zA.set(l,[a,b,c,h]);return}V("il_attach_cache_limit")&&zA.size>1E3&&Yy(new W("IL Attach cache exceeded limit"))}h=
EA(c,b);zA.has(h)?FA(c,b):BA.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Rb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?GA("visualElementAttached",f,c):a?Oy("visualElementAttached",c,a,f):tt("visualElementAttached",c,f)}
function GA(a,b,c){xA.push({gg:a,payload:c,rj:void 0,options:b});yA||(yA=Bv())}
function Cv(a){if(xA){for(var b=z(xA),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,tt(c.gg,c.payload,c.options));xA.length=0}yA=0}
function EA(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function FA(a,b){a=EA(a,b);if(zA.has(a)){b=zA.get(a)||[];var c=c===void 0?{}:c;CA(b[0],b[1],b[2],[b[3]],!0,c);zA.delete(a)}}
function DA(a,b){V("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function HA(){}
HA.prototype.flush=function(a,b){a=a===void 0?[]:a;b=b===void 0?!1:b;if(V("enable_client_streamz_web")){a=z(a);for(var c=a.next();!c.done;c=a.next())c=Ji(c.value),this.h&&sg(c,Ei,2,this.h),c={serializedIncrementBatch:Ed(c.j())},tt("streamzIncremented",c,{sendIsolatedPayload:b})}};
function In(){}
v(In,HA);function IA(a){var b=new Ei;var c=new Bi;c=yg(c,1,"botguard");a=yg(c,2,a);a=rg(a,Bi);mg(b,1,Fi,a);a&&!se(a)&&ag(b.F);this.h=b}
v(IA,HA);var Hn,JA=new Map;function KA(){try{return!!self.localStorage}catch(a){return!1}}
;function LA(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function MA(a){if(KA()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=LA(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function NA(){if(!KA())return!1;var a=Bs(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=LA(c.value),c!==void 0&&c!==a)return!0;return!1}
;function OA(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(U("INNERTUBE_CLIENT_NAME")==="WEB"||U("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function PA(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");Wq("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=QA;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function RA(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))PA();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))PA();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof Qo?a.clone():new Qo(a)).h.endsWith("/youtubeoptions");b&&PA()}if(U("LOGGED_IN",!0)&&OA()){b=U("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=ic(window.location.href);c&&b.push(c);c=ic(a);Ob(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=kc(a),(b=lc(b))?(b=uA(b),b=(b=js(b)||null)?ir(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;OA()?(d||(d=U("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&sA(a,b)}}
var QA=null;function SA(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=U("EVENT_ID");d&&(b.ei||(b.ei=d));b&&sA(a,b);if(c)return!1;RA(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=pc(a,e);RA(b);a=void 0;a=a===void 0?xb:a;a:if(f=b+f,a=a===void 0?xb:a,!(f instanceof tb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof vb&&c.Nf(f)){f=new tb(f);break a}f=void 0}g=g.location;f=zb(f||ub);f!==void 0&&(g.href=f);return!0}
;function TA(a){if(jj(U("PLAYER_VARS",{}))!="1"){a&&Oq();try{Nz().then(function(){},function(){}),tr(TA,18E5)}catch(b){ar(b)}}}
;function UA(){this.h={}}
r=UA.prototype;r.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
r.get=function(a){if(this.contains(a))return this.h[a]};
r.set=function(a,b){this.h[a]=b};
r.kc=function(){return Object.keys(this.h)};
r.remove=function(a){delete this.h[a]};function VA(){this.mappings=new UA}
VA.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
VA.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Bb(b)}}return a};
new VA;var WA=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function XA(){var a=a===void 0?window.location.href:a;if(V("kevlar_disable_theme_param"))return null;jc(a);try{var b=jr(a).theme;return WA.get(b)||null}catch(c){}return null}
;function YA(a){var b=new hm;if(a.interpreterJavascript){var c=sq(a.interpreterJavascript);c=Gb(c).toString();var d=new fm;yg(d,6,c);sg(b,fm,1,d,xe)}else a.interpreterUrl&&(c=tq(a.interpreterUrl),c=nb(c).toString(),d=new gm,yg(d,4,c),sg(b,gm,2,d,xe));a.interpreterHash&&lg(b,3,Bf(a.interpreterHash),xe);a.program&&lg(b,4,Bf(a.program),xe);a.globalName&&lg(b,5,Bf(a.globalName),xe);a.clientExperimentsStateBlob&&lg(b,7,Bf(a.clientExperimentsStateBlob),xe);return b}
function ZA(a){var b={};a=z(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
function $A(a){return Number(a.t)||7200}
;function aB(){var a=a===void 0?window:a;var b,c;return B(function(d){if(d.h==1)return d.yield(zc(),2);b=a;c=b.bgevmc;if(!c)throw Error("BGE Controls not exposed");return d.return({pause:function(){c.p()},
resume:function(){c.r()},
checkForRefresh:function(){return c.cr()}})})}
function Ac(){if(V("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=globalThis.performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function bB(a){window.bgens=a}
function cB(a){this.h=a}
cB.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
cB.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
cB.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function dB(){return new Promise(function(a){var b=window;b.ntpevasrs!==void 0?a(new cB(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new cB(c))}))})}
;var eB=pa(["https://static.doubleclick.net/instream/ad_status.js"]),fB=[],gB=function(a){var b=C.apply(1,arguments);if(b.length===0)return mb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return mb(c)}(eB),hB=!1;
function iB(){if(Dz()){var a=U("PLAYER_VARS",{});if(jj(a)!="1"&&!Fz(a)){var b=function(){hB=!0;"google_ad_status"in window?Wq("DCLKSTAT",1):Wq("DCLKSTAT",2)};
try{var c=Db(document);cA(gB,b,c)}catch(d){}fB.push(Yn.xa(function(){if(!(hB||"google_ad_status"in window)){try{gA(gB.toString(),b)}catch(d){}hB=!0;Wq("DCLKSTAT",3)}},5E3))}}}
function jB(){var a=Number(U("DCLKSTAT",0));return isNaN(a)?0:a}
;function kB(a){this.h=a}
[new kB("b.f_"),new kB("j.s_"),new kB("r.s_"),new kB("e.h_"),new kB("i.s_"),new kB("s.t_"),new kB("p.h_"),new kB("s.i_"),new kB("f.i_"),new kB("a.b_"),new kB("a.o_"),new kB("g.o_"),new kB("p.i_"),new kB("p.m_"),new kB("n.k_"),new kB("i.f_"),new kB("a.s_"),new kB("m.c_"),new kB("n.h_"),new kB("o.p_"),new kB("m.p_"),new kB("o.a_"),new kB("d.p_"),new kB("e.i_")].reduce(function(a,b){a[b.h]=b;return a},{});function lB(a){return G("ytcsi."+(a||"")+"data_")||mB(a)}
function nB(){var a=lB();a.info||(a.info={});return a.info}
function oB(a){a=lB(a);a.metadata||(a.metadata={});return a.metadata}
function pB(a){a=lB(a);a.tick||(a.tick={});return a.tick}
function qB(a){a=lB(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function rB(a){a=qB(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function sB(a){var b=lB(a).nonce;b||(b=gz(),lB(a).nonce=b);return b}
function mB(a){var b={tick:{},info:{}};E("ytcsi."+(a||"")+"data_",b);return b}
;var tB=P("ytcsi_debug_max_size",100);function uB(){var a=G("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function vB(a){var b=uB();b.push(a);V("limit_ytcsi_debug_array_size")&&b.length>tB&&b.splice(0,b.length-tB)}
function wB(a){a=a||"";var b=xB();if(b[a])return b[a];var c={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};vB(c);return b[a]=c}
function xB(){var a=G("ytcsi.reference");if(a)return a;uB();return G("ytcsi.reference")}
;var Y={},yB=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.call_to_cast="LATENCY_ACTION_CALL_TO_CAST",Y.channel_activity="LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",Y.channels="LATENCY_ACTION_CHANNELS",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",Y.editor="LATENCY_ACTION_EDITOR",Y.embed="LATENCY_ACTION_EMBED",Y.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.favorites="LATENCY_ACTION_FAVORITES",Y.home="LATENCY_ACTION_HOME",Y.inboarding="LATENCY_ACTION_INBOARDING",Y.landing="LATENCY_ACTION_LANDING",Y.learning="LATENCY_ACTION_LEARNING",
Y.learning_journey_browse="LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",Y.learning_journey_watch="LATENCY_ACTION_LEARNING_JOURNEY_WATCH",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.management="LATENCY_ACTION_MANAGEMENT",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.notification_settings="LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",Y.onboarding="LATENCY_ACTION_ONBOARDING",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
Y.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",Y.prebuffer="LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.projects="LATENCY_ACTION_PROJECTS",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",
Y.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.premium_lite_upsell="LATENCY_ACTION_PREMIUM_LITE_UPSELL",Y.privacy_policy="LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",Y.review="LATENCY_ACTION_REVIEW",Y.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.switchplan="LATENCY_ACTION_UNPLUGGED_SWITCH_PLAN",
Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",Y.store="LATENCY_ACTION_STORE",Y.supervision_dashboard="LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",Y.bedtime_reminder_settings="LATENCY_ACTION_FAMILY_CENTER_BEDTIME_REMINDER_SETTINGS",Y.break_reminder_settings="LATENCY_ACTION_FAMILY_CENTER_BREAK_REMINDER_SETTINGS",Y.supervision_settings_dashboard="LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",Y.time_management="LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",
Y.update_profile="LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",Y.viewing_permissions="LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",Y.shorts_settings="LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",Y.privacy_settings="LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",Y.tenx="LATENCY_ACTION_TENX",Y.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]="LATENCY_ACTION_WATCH",
Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
Y.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",Y);function zB(a){return yB[a]||"LATENCY_ACTION_UNKNOWN"}
;function AB(a,b){rv.call(this,1,arguments);this.timer=b}
v(AB,rv);var BB=new sv("aft-recorded",AB);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var CB=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",CB);function DB(){this.h=0}
function EB(){DB.instance||(DB.instance=new DB);return DB.instance}
DB.prototype.tick=function(a,b,c,d){FB(this,"tick_"+a+"_"+b)||tt("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
DB.prototype.info=function(a,b,c){var d=Object.keys(a).join("");FB(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,tt("latencyActionInfo",a,{cttAuthInfo:c}))};
DB.prototype.jspbInfo=function(){};
DB.prototype.span=function(a,b,c){var d=Object.keys(a).join("");FB(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,tt("latencyActionSpan",a,{cttAuthInfo:c}))};
function FB(a,b){CB[b]=CB[b]||{count:0};var c=CB[b];c.count++;c.time=X();a.h||(a.h=Ds(function(){var d=X(),e;for(e in CB)CB[e]&&d-CB[e].time>6E4&&delete CB[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new W("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||Yy(c)),!0):!1}
;var GB=window;function HB(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function IB(){var a;if(V("csi_use_performance_navigation_timing")){var b,c,d,e=Z==null?void 0:(a=Z.getEntriesByType)==null?void 0:(b=a.call(Z,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=JB(e.requestStart),e.responseEnd=JB(e.responseEnd),e.redirectStart=JB(e.redirectStart),e.redirectEnd=JB(e.redirectEnd),e.domainLookupEnd=JB(e.domainLookupEnd),e.connectStart=JB(e.connectStart),e.connectEnd=JB(e.connectEnd),e.responseStart=JB(e.responseStart),
e.secureConnectionStart=JB(e.secureConnectionStart),e.domainLookupStart=JB(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=V("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Z.timing)):Z.timing;return a}
function JB(a){return Math.round(KB()+a)}
function KB(){return(V("csi_use_time_origin")||V("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=GB.performance||GB.mozPerformance||GB.msPerformance||GB.webkitPerformance||new HB;var LB=!1,MB=!1,NB={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},OB=Ua(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||dl,Z);function PB(a,b){QB("_start",a,b)}
function RB(a,b){if(!V("web_csi_action_sampling_enabled")||!lB(b).actionDisabled){var c=wB(b||"");mA(c.info,a);a.loadType&&(c=a.loadType,oB(b).loadType=c);mA(rB(b),a);c=sB(b);b=lB(b).cttAuthInfo;EB().info(a,c,b)}}
function SB(){var a,b,c,d;return((d=Gx().resolve(new Ax(ev))==null?void 0:(a=fv())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function QB(a,b,c){if(!V("web_csi_action_sampling_enabled")||!lB(c).actionDisabled){var d=sB(c),e;if(e=V("web_csi_debug_sample_enabled")&&d){(Gx().resolve(new Ax(ev))==null?0:fv())&&!MB&&(MB=!0,QB("gcfl",X(),c));var f,g,h;e=(Gx().resolve(new Ax(ev))==null?void 0:(f=fv())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=SB();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}f?(e=vA(d)%e!==0,lB(c).debugTicksExcludedLogged||
(f={},f.debugTicksExcluded=e,RB(f,c)),lB(c).debugTicksExcludedLogged=!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Z.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||V("web_csi_disable_alt_time_performance_mark"))Z.mark(e);else{f=V("csi_use_performance_navigation_timing")?f-Z.timeOrigin:f-(Z.timeOrigin||Z.timing.navigationStart);try{Z.mark(e,{startTime:f})}catch(k){}}e=wB(c||"");e.tick[a]=b||X();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=
f.value,f();e=qB(c);e.gelTicks&&(e.gelTicks[a]=!0);f=pB(c);e=b||X();f[a]=e;f=lB(c).cttAuthInfo;a==="_start"?(a=EB(),FB(a,"baseline_"+d)||tt("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):EB().tick(a,d,b,f);TB(c);return e}}}
function UB(){var a,b=(a=Z.getEntriesByType)==null?void 0:a.call(Z,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;(d=Z.clearMarks)==null||d.call(Z,c.name)}})}
function VB(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Zw+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function WB(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(U("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function XB(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Db(document)&&a.setAttribute("nonce",Db(document));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=KB(),QB("rsf_"+b,c+Math.round(a.fetchStart)),QB("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function YB(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=Qb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Tb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(QB("wffs",JB(b.startTime)),QB("wffe",JB(b.responseEnd)))}
function ZB(a){var b=$B("aft",a);if(b)return b;b=U((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=$B(b[d],a);if(e)return e}return NaN}
function aC(a){E("ytglobal.timing"+(a||"")+"ready_",!0)}
function $B(a,b){if(a=pB(b)[a])return typeof a==="number"?a:a[a.length-1]}
function TB(a){var b=$B("_start",a),c=ZB(a),d=!LB;b&&c&&d&&(xv(BB,new AB(Math.round(c-b),a)),LB=!0)}
function bC(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=Ub(a,function(c){return c.name==="first-paint"}))return JB(a.startTime)}var b;
V("csi_use_performance_navigation_timing")?b=Z.getEntriesByType("first-paint")[0].startTime:b=Z.timing.zj;return b?Math.max(0,b):0}
;function cC(a,b){$q(function(){wB("").info.actionType=a;b&&Wq("TIMING_AFT_KEYS",b);Wq("TIMING_ACTION",a);var c=WB();Object.keys(c).length>0&&RB(c);c={isNavigation:!0,actionType:zB(U("TIMING_ACTION"))};var d=U("PREVIOUS_ACTION");d&&(c.previousAction=zB(d));if(d=U("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=U("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=qz())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=VB();if(d===1||d===-1)c.isVisible=!0;oB();nB();c.loadType="cold";d=nB();var e=IB(),f=KB(),g=U("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!V("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(QB("srt",e.responseStart),d.prerender!==1&&PB(f));d=bC();d>0&&QB("fpt",d);d=IB();d.isPerformanceNavigationTiming&&RB({performanceNavigationTiming:!0},void 0);QB("nreqs",d.requestStart,void 0);QB("nress",d.responseStart,void 0);QB("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(QB("nrs",d.redirectStart,void 0),QB("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(QB("ndnss",d.domainLookupStart,
void 0),QB("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(QB("ntcps",d.connectStart,void 0),QB("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=KB()&&d.connectEnd-d.secureConnectionStart>0&&(QB("nstcps",d.secureConnectionStart,void 0),QB("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&YB();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in NB)NB.hasOwnProperty(h)&&(e=NB[h],XB(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=
h.next())c.resourceInfo.push({resourceCache:d.value});RB(c);c=qB();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=rB();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(oB().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=pB();e=qB();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)k in e||typeof d[k]==="number"&&QB(k,$B(k));k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,mA(c,d),mA(k,d),d=!0;d&&RB(k)}aC();k=U("TIMING_ACTION");
G("ytglobal.timingready_")&&k&&dC()&&ZB()&&TB()})()}
function eC(){var a=a===void 0?{}:a;$q(function(){fC();var b=a.sampleRate;if(!V("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=sB("attestation_challenge_fetch");b=vA(c)%b!==0}b&&(lB("attestation_challenge_fetch").actionDisabled=!0);wB("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(lB("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);Wq("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");$q(PB)(a.startTime,
"attestation_challenge_fetch");b={actionType:zB("attestation_challenge_fetch")};a.vj&&(b.previousAction=zB(U("TIMING_ACTION")));(c=qz())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);gC(b,"attestation_challenge_fetch");aC("attestation_challenge_fetch")})()}
function fC(){$q(function(){dC("attestation_challenge_fetch")&&hC("aa",void 0,"attestation_challenge_fetch");var a=xB();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;var b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};vB(b);a.attestation_challenge_fetch=b;mB("attestation_challenge_fetch");OB();UB()})()}
function dC(a){return $q(function(){return iC("_start",a)})()}
function gC(a,b,c){$q(RB)(a,b,c===void 0?!1:c)}
function hC(a,b,c){return $q(QB)(a,b,c)}
function iC(a,b){return $q(function(){var c=pB(b);return a in c})()}
function jC(a){if(!V("universal_csi_network_ticks"))return"";a=jc(a)||"";for(var b=Object.keys(pv),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function kC(a){if(!V("universal_csi_network_ticks"))return function(){};
var b=pv[a];return b?(lC(b),function(){var c=V("universal_csi_network_ticks")?(c=qv[a])?lC(c):!1:!1;return c}):function(){}}
function lC(a){return $q(function(){if(iC(a))return!1;hC(a,void 0,void 0);return!0})()}
function mC(a){$q(function(){if(!dC("attestation_challenge_fetch")||iC(a,"attestation_challenge_fetch"))return!1;hC(a,void 0,"attestation_challenge_fetch");return!0})()}
function nC(){$q(function(){var a=sB();requestAnimationFrame(function(){setTimeout(function(){a===sB()&&hC("ol",void 0,void 0)},0)})})()}
var oC=window;oC.ytcsi&&(oC.ytcsi.infoGel=gC,oC.ytcsi.tick=hC);function pC(a,b,c){var d=this;this.network=a;this.options=b;this.I=c;this.j=0;this.h=null;this.i=new Gn;b.De?qC(this,rC(this)):b.preload&&qC(this,new Promise(function(e){Ds(function(){e(sC(d))},0)}))}
function rC(a){var b,c,d,e,f,g,h,k,l,m,p,t;return B(function(n){switch(n.h){case 1:b=D;if(!b.ytAtP||V("ytatp_ks")){b.ytAtRC?(d=P("att_init_delay",0),Es(function(){var x,y;return B(function(w){if(w.h==1){c=b.ytAtT;delete b.ytAtT;if(!b.ytAtRC)return a.i.la(6,a.j++),w.return();a.i.la(2,a.j++);x=tC(c,null);return w.yield(a.Ib(x),2)}y=w.i;b.ytAtRC&&b.ytAtRC(JSON.stringify(y));w.u()})},d)):(c=b.ytAtT,delete b.ytAtT,a.i.la(1,a.j++));
n.v(2);break}return n.yield(b.ytAtP,3);case 3:e=n.i;delete b.ytAtP;g=(f=e)==null?void 0:f.R;c=(h=e)==null?void 0:h.T;if(g){a.i.la(1,a.j++);n.v(4);break}a.i.la(2,a.j++);return n.yield(a.Ib(tC(c,null)),5);case 5:k=n.i,g=JSON.stringify(k);case 4:b.ytAtRC?b.ytAtRC(g):Yy(Error("ytAtRC not defined for ytAtP."));case 2:return n.yield(dB(),6);case 6:return l=n.i,l.bindInnertubeChallengeFetcher(function(x){a.i.la(3,a.j++);return a.Ib(tC(c,x))}),l.registerChallengeFetchedCallback(function(x){x=x.challenge;
if(!x)throw Error("BGE_MACR");x={challenge:x,Gb:ZA(x),vm:m,bgChallenge:new hm};x=Promise.resolve(x);a.h=x}),n.yield(zc(),7);
case 7:m=n.i;p=l.getLatestChallengeResponse();t=p.challenge;if(!t)throw Error("BGE_MACIL");return n.return({challenge:t,Gb:ZA(t),vm:m,bgChallenge:new hm})}})}
pC.prototype.u=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
pC.prototype.o=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&qC(d,sC(d));e=!1;f={};g=function(){var k,l,m,p,t;return B(function(n){switch(n.h){case 1:if(!d.options.kj||!d.options.De){n.v(2);break}return n.yield(aB(),3);case 3:return k=n.i,n.yield((l=k)==null?void 0:l.checkForRefresh(),2);case 2:return n.yield(d.h,5);case 5:m=n.i;f.challenge=m.challenge;if(!m.vm){"c1a"in m.Gb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.v(6);break}p=Object.assign({},{c:m.challenge,e:a},b);
n.o(7);e=!0;return n.yield(m.vm.snapshot({Na:p}),9);case 9:(t=n.i)?f.webResponse=t:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";n.A(6);break;case 7:n.j(),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 6:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var x=m.Gb,y={};x.c6a&&(y.reportingStatus=String(Number(x.c)^jB()));x.c6b&&(y.broadSpectrumDetectionResult=String(Number(x.c)^Number(U("CATSTAT",0))));f.adblockReporting=y}return n.return(f)}})};
return h.return(Promise.race([g(),uC(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function sC(a){var b,c,d,e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return b=tC(void 0,qm().h),m.o(2),m.yield(vC(a,b),4);case 4:c=m.i;m.A(3);break;case 2:return m.j(),Yy(Error("Failed to fetch attestation challenge after 5 attempts; not retrying for 24h.")),wC(a,864E5),m.return({challenge:"",Gb:{},vm:void 0,bgChallenge:void 0});case 3:d=c.dg;e=c.eg;f=$A(e);wC(a,f*1E3);g=void 0;if(!("c1a"in e&&c.bgChallenge)){m.v(5);break}h=YA(c.bgChallenge);m.o(6);return m.yield(rm(qm(),h),8);case 8:m.A(7);
break;case 6:return k=m.j(),Yy(k),m.return({challenge:d,Gb:e,vm:g,bgChallenge:h});case 7:return m.o(9),g=new nm({challenge:h,Qb:{na:"aGIf"}}),m.yield(g.Ub,11);case 11:m.A(5);break;case 9:l=m.j(),Yy(l),g=void 0;case 5:return m.return({challenge:d,Gb:e,vm:g,bgChallenge:h})}})}
function xC(a,b){var c;return B(function(d){if(d.h==1)return bB(2),d.o(2),d.yield(a.network.Ib(b),4);if(d.h!=2)return(c=d.i)?c.challenge&&!c.bgChallenge?bB(1):bB(4):bB(3),d.return(c);d.j();bB(3);return d.return(void 0)})}
pC.prototype.Ib=function(a){var b=this,c;return B(function(d){c=b.I;if(!c||c.Aa())return d.return(xC(b,a));mC("att_pna");return d.return(new Promise(function(e){Lk(c,"publicytnetworkstatus-online",function(){xC(b,a).then(e)})}))})};
function yC(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=ZA(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{dg:b,eg:c})}
function vC(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.v(4);break}if(!(d>0)){h.v(5);break}e.Rd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Ds(function(){l(void 0)},k.Rd)}}(e)),5);
case 5:return h.o(7),a.i.la(4,a.j++),h.yield(a.Ib(b),9);case 9:return f=h.i,h.return(yC(f));case 7:c=g=h.j(),g instanceof Error&&Yy(g);case 8:d++;e={Rd:void 0};h.v(2);break;case 4:throw c;}})}
function qC(a,b){a.h=b}
function zC(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=sC(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.u()})}
function wC(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(zC(a),0):(Ds(c,Math.min(e,6E4)),f.v(0))})}
var d=Date.now()+b;c()}
function uC(a,b){return new Promise(function(c){Ds(function(){c(b())},a)})}
function tC(a,b){var c={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(c.eacrToken=a);b&&(c.interpreterHash=b);return c}
;var AC={},BC=(AC.WEB_UNPLUGGED="^unplugged/",AC.WEB_UNPLUGGED_ONBOARDING="^unplugged/",AC.WEB_UNPLUGGED_OPS="^unplugged/",AC.WEB_UNPLUGGED_PUBLIC="^unplugged/",AC.WEB_CREATOR="^creator/",AC.WEB_KIDS="^kids/",AC.WEB_EXPERIMENTS="^experiments/",AC.WEB_MUSIC="^music/",AC.WEB_REMIX="^music/",AC.WEB_MUSIC_EMBEDDED_PLAYER="^music/",AC.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",AC);
function CC(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=BC[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(BC).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function DC(){this.h=EC.instance}
DC.prototype.Ib=function(a){mC("att_fsr");return FC(this.h,a).then(function(b){mC("att_frr");return b})};var GC=new zx("INNERTUBE_TRANSPORT_TOKEN");function HC(){var a,b,c;return B(function(d){if(d.h==1)return a=Gx().resolve(GC),a?d.yield(IC(a),2):(Yy(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Yy(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.gj;return d.return(c)}Yy(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function JC(){this.h={};if(this.i=ls()){var a=js("CONSISTENCY");a&&KC(this,{encryptedTokenJarContents:a})}}
JC.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Oa.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];KC(this,a)}};
function KC(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&is("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var LC=window.location.hostname.split(".").slice(-2).join(".");function MC(){this.j=-1;var a=U("LOCATION_PLAYABILITY_TOKEN");U("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=NC(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=this.h=void 0)}
var OC;function PC(){OC=G("yt.clientLocationService.instance");OC||(OC=new MC,E("yt.clientLocationService.instance",OC));return OC}
r=MC.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.getXGeoHeader=function(){if(this.i){var a=this.i;var b=Math.floor(a.coords.longitude*1E7);var c=Math.floor(a.coords.latitude*1E7);var d=new Zn;c=N(d,1,lf(c));b=N(c,2,lf(b));c=new go;c=zg(c,1,1);c=zg(c,2,12);c=zg(c,9,8);c=N(c,3,uf(a.timestamp*1E3));a=N(c,7,df(a.coords.accuracy*1E3));a=zg(a,25,2);a=sg(a,Zn,5,b);a="w "+Ed(ho(a),4)}else a=null;return a};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=this.h=void 0,U("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=NC(this))&&this.localStorage.set("yt-location-playability-token",a,15552E3):is("YT_CL",JSON.stringify({loctok:a}),15552E3,LC,!0))};
function NC(a){return a.localStorage===void 0?new kt("yt-client-location"):a.localStorage}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.localStorage=NC(this))&&this.localStorage.remove("yt-location-playability-token"):ks("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.clearCurrentPosition=function(){this.i=this.h=void 0};
r.getCurrentPositionFromGeolocation=function(a){var b=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var c=!1,d=1E4;U("INNERTUBE_CLIENT_NAME")==="MWEB"&&(c=!0,d=15E3);return new Promise(function(e,f){navigator.geolocation.getCurrentPosition(function(g){b.i=(a==null?0:a.addToHeaders)?g:void 0;b.h=g;e(g)},function(g){f(g)},{enableHighAccuracy:c,
maximumAge:0,timeout:d})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function QC(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=U("INNERTUBE_CONTEXT");if(!d)return Xy(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=mj(d);V("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=U("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;qs();var g="USER_INTERFACE_THEME_LIGHT";ts(165)?g="USER_INTERFACE_THEME_DARK":ts(174)?g="USER_INTERFACE_THEME_LIGHT":!V("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:XA()||g;e.userInterfaceTheme=f;if(!b){if(f=ys())e.connectionType=f;V("web_log_effective_connection_type")&&(f=zs())&&(d.client.effectiveConnectionType=f)}var h;if(V("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}V("web_gcf_hashes_innertube")&&(f=iv())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=jr(D.location.href);!V("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=D.location.href,V("kevlar_woffle")&&cs.instance&&(k=cs.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),
e.mainAppWebInfo.webDisplayMode=ds(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!V("web_lr_app_quality_killswitch")&&(k=U("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=U("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!V("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;
break a}catch(Ga){}l=void 0}l&&(e.timeZone=l)}(l=U("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=yr();JC.instance||(JC.instance=new JC);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:ej(JC.instance.h)});!V("web_prequest_context_killswitch")&&(l=U("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=qs();l=ts(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=
!0);V("warm_op_csn_cleanup")?c&&(b=qz())&&(d.clientScreenNonce=b):!b&&(b=qz())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=G("yt.mdx.remote.remoteClient_"))d.remoteClient=a;PC().setLocationOnInnerTubeContext(d);try{var m=nr(),p=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:p};for(var t=z(Object.entries(m)),n=t.next();!n.done;n=t.next()){var x=z(n.value),y=x.next().value,w=x.next().value;m=y;p=w;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+p})}var I,
F;if(((I=d.client)==null?void 0:I.clientName)==="TVHTML5"||((F=d.client)==null?void 0:F.clientName)==="TVHTML5_UNPLUGGED"){var T=U("INNERTUBE_CONTEXT");T.adSignalsInfo&&(d.adSignalsInfo.advertisingId=T.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=T.adSignalsInfo.limitAdTracking)}}catch(Ga){Xy(Ga)}return d}
;function RC(a){var b={"Content-Type":"application/json"};U("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=U("EOM_VISITOR_DATA"):U("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=U("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=U("LOGGED_IN",!1);U("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=U("DEBUG_SETTINGS_METADATA"));if(a!=="cors"){(a=U("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a);(a=U("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a);(a=
U("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a);(a=U("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a);var c,d;(a=(d=(c=PC()).getXGeoHeader)==null?void 0:d.call(c))&&(b["X-Geo"]=a)}(c=U("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=c);return b}
;function SC(a){return function(){return new a}}
;function TC(){}
TC.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?hs:c;var d={context:QC(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;e="/youtubei/v1/"+CC(this.j());var g=(f=ey(a.commandMetadata,Bq))==null?void 0:f.apiUrl;g&&(e=g);f=Bz(Az(e));a=Object.assign({},{command:a},void 0);d={input:f,bb:Cz(f),Oa:d,config:a};d.config.dc?d.config.dc.identity=c:d.config.dc={identity:c};b.abortSignal&&(d.bb.signal=b.abortSignal);return d}b=new W("Error: Failed to create Request from Command.",
a);Xy(b)};
da.Object.defineProperties(TC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function UC(){}
v(UC,TC);function VC(){}
v(VC,UC);VC.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",bb:Cz("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
VC.prototype.j=function(){return[]};
VC.prototype.i=function(){};
VC.prototype.h=function(){};var WC={},XC=(WC.GET_DATASYNC_IDS=SC(VC),WC);var YC="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store manifest player_preload shorts_prefetch resolve_url_prefetch".split(" "),ZC=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PanelResponse"];
function EC(a,b,c,d){this.u=a;this.ia=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.yc||(a.yc={});a.yc=Object.assign({},XC,a.yc)}
function $C(a,b,c){var d=aD;if(EC.instance!==void 0){if(c=EC.instance,a=[d!==c.u,a!==c.ia,b!==c.j,!1,!1,!1,void 0!==c.i],a.some(function(e){return e}))throw new W("InnerTubeTransportService is already initialized",a);
}else EC.instance=new EC(d,a,b,c)}
function IC(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?hs:c;var d=bD(a,b);return d?new fl(function(e,f){var g,h,k,l,m;return B(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.u(b,void 0,c);if(!h){f(new W("Error: Failed to build request for command.",b));p.v(0);break}RA(h.input);l=((k=h.bb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ae){m=cD(h.config,l);p.v(4);break}return p.yield(dD(h.config,l),5);case 5:m=p.i;case 4:e(eD(a,h,m)),p.u()}})}):
kl(new W("Error: No request builder found for command.",b))}
function FC(a,b){function c(){}
var d="/youtubei/v1/"+CC(Tz);var e=e===void 0?{dc:{identity:hs}}:e;var f=f===void 0?!0:f;c=kC(jC(d));b.context||(b.context=QC(void 0,f));return new fl(function(g){var h,k,l,m,p;return B(function(t){if(t.h==1)return h=Az(d),k=mr(h)?"same-origin":"cors",a.j.Ae?(l=cD(e,k),t.v(2)):t.yield(dD(e,k),3);t.h!=2&&(l=t.i);m=Bz(Az(d));p={input:m,bb:Cz(m),Oa:b,config:e};g(eD(a,p,l,c));t.u()})})}
function fD(a){var b,c,d,e,f,g;return B(function(h){switch(h.h){case 1:if(!((b=a)==null?0:(c=b.Oa)==null?0:c.context)){h.v(0);break}d=a.Oa.context;h.v(3);break;case 3:e=z([]),f=e.next();case 6:if(f.done){h.v(0);break}g=f.value;return h.yield(g.Dj(d),7);case 7:f=e.next(),h.v(6)}})}
function gD(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=z(YC);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function eD(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,p,t,n,x,y,w,I,F,T,Ga,ka,be,Sb,jb,Sa,Ha,Ra,Vv,Wv,Xv,Yv;return B(function(na){switch(na.h){case 1:g=(e=b.config)==null?void 0:(f=e.Qj)==null?void 0:f.Pj;na.v(2);break;case 3:h=na.i;if(!h||h.isExpired()){na.v(2);break}k=h.h();if(!V("web_process_response_store_responses")||h.isProcessed()){na.v(5);break}gD(a,k,b);return na.yield((void 0).wj(g),5);case 5:return na.return(Promise.resolve(k));case 2:if((l=a.i)==null||!l.Lj(b.input,b.Oa)){na.v(7);break}return na.yield(a.i.tj(b.input,b.Oa),
8);case 8:return m=na.i,gD(a,m,b),na.return(m);case 7:return na.yield(fD(b),9);case 9:return(n=(t=b.config)==null?void 0:t.requestKey)&&a.h.has(n)?p=a.h.get(n):(x=JSON.stringify(b.Oa),I=(w=(y=b.bb)==null?void 0:y.headers)!=null?w:{},b.bb=Object.assign({},b.bb,{headers:Object.assign({},I,c)}),F=Object.assign({},b.bb),b.bb.method==="POST"&&(F=Object.assign({},F,{body:x})),((T=b.config)==null?0:T.lg)&&hC(b.config.lg),Ga=function(){return a.ia.fetch(b.input,F,b.config)},p=Ga(),n&&a.h.set(n,p)),na.yield(p,
10);
case 10:(ka=na.i)&&V("web_streaming_player")&&Array.isArray(ka)&&(ka=ka[0].playerResponse);if(ka&&"error"in ka&&((be=ka)==null?0:(Sb=be.error)==null?0:Sb.details))for(jb=ka.error.details,Sa=z(jb),Ha=Sa.next();!Ha.done;Ha=Sa.next())Ra=Ha.value,(Vv=Ra["@type"])&&ZC.indexOf(Vv)>-1&&(delete Ra["@type"],ka=Ra);n&&a.h.has(n)&&a.h.delete(n);((Wv=b.config)==null?0:Wv.mg)&&hC(b.config.mg);if(ka||(Xv=a.i)==null||!Xv.ej(b.input,b.Oa)){na.v(11);break}return na.yield(a.i.sj(b.input,b.Oa),12);case 12:ka=na.i;case 11:return gD(a,
ka,b),((Yv=b.config)==null?0:Yv.ig)&&hC(b.config.ig),d(),na.return(ka||void 0)}})}
function bD(a,b){a:{a=a.u;var c,d=(c=ey(b,Cq))==null?void 0:c.signal;if(d&&a.yc&&(c=a.yc[d])){var e=c();break a}var f;if((c=(f=ey(b,Aq))==null?void 0:f.request)&&a.cf&&(f=a.cf[c])){e=f();break a}for(e in b)if(a.Vd[e]&&(b=a.Vd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function dD(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.dc)==null?void 0:d.sessionIndex;var h=g.yield;var k=gs({sessionIndex:e});if(!(k instanceof fl)){var l=new fl(dl);gl(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},RC(b),f)))})}
function cD(a,b){var c;a=a==null?void 0:(c=a.dc)==null?void 0:c.sessionIndex;c=gs({sessionIndex:a});return Object.assign({},RC(b),c)}
;function hD(){}
v(hD,UC);hD.prototype.j=function(){return Zz};
hD.prototype.i=function(a){return ey(a,Nq)||void 0};
hD.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(hD.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function iD(){}
v(iD,UC);iD.prototype.j=function(){return $z};
iD.prototype.i=function(a){return ey(a,Mq)||void 0};
iD.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(iD.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var jD=new zx("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function kD(a){this.I=a}
v(kD,UC);kD.prototype.j=function(){return Uz};
kD.prototype.i=function(a){return ey(a,Gq)||ey(a,Hq)||ey(a,Fq)};
kD.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.I)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.I.i(b.clientParamIdentifier)}};
kD[yx]=[jD];function lD(){}
v(lD,UC);lD.prototype.j=function(){return Wz};
lD.prototype.i=function(a){return ey(a,Eq)||void 0};
lD.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(lD.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function mD(){}
v(mD,UC);mD.prototype.j=function(){return Wz};
mD.prototype.i=function(a){return ey(a,Lq)};
mD.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(mD.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function nD(){}
v(nD,UC);nD.prototype.j=function(){return Xz};
nD.prototype.i=function(a){return ey(a,Kq)||void 0};
nD.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function oD(){}
v(oD,UC);oD.prototype.j=function(){return Yz};
oD.prototype.i=function(a){return ey(a,Jq)||void 0};
oD.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function pD(){}
v(pD,UC);pD.prototype.j=function(){return Vz};
pD.prototype.i=function(a){return ey(a,Iq)};
pD.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function qD(){var a;return(a=U("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var rD=D.caches,sD;function tD(a){var b=a.indexOf(":");return b===-1?{le:a}:{le:a.substring(0,b),datasyncId:a.substring(b+1)}}
function uD(){return B(function(a){if(sD!==void 0)return a.return(sD);sD=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return d.o(2),d.yield(rD.open("test-only"),4);case 4:return d.yield(rD.delete("test-only"),5);case 5:d.A(3);break;case 2:if(c=d.j(),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.u()}})});
return a.return(sD)})}
function vD(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(uD(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(rD.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=tD(f),h=g.datasyncId,!h||a.includes(h)||b.push(rD.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function wD(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(uD(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Bs("cache contains other");return h.yield(rD.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=tD(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function xD(){try{return!!self.sessionStorage}catch(a){return!1}}
;function yD(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function zD(a){if(xD()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=yD(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function AD(){if(!xD())return!1;var a=Bs(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=yD(c.value),c!==void 0&&c!==a)return!0;return!1}
;function BD(){HC().then(function(a){a&&(Ku(a),vD(a),MA(a),zD(a))})}
function CD(){var a=new Lw;Yn.xa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(V("ytidb_clear_optimizations_killswitch")){g.v(2);break}b=Bs("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Ku(h);vD(h);MA(h);zD(h);return g.return()}c=NA();d=AD();return g.yield(wD(),3);case 3:return e=g.i,g.yield(Lu(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.Aa()?BD():Lk(a,"publicytnetworkstatus-online",BD),g.u()}})})}
;function DD(a){return new Promise(function(b){window.setTimeout(b,a)})}
function ED(a,b,c){this.requestKey=a;this.o=b;this.i=c;this.u=function(){return new XMLHttpRequest};
this.h=void 0;this.j=[]}
ED.prototype.getLatestChallengeResponse=function(){return this.i};
function Om(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){eC();hC("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new El(9,"Missing fetcher");return h.yield(a.h(b,c),2)}d=h.i;f=(e=d)==null?void 0:e.bgChallenge;if(!f)throw new El(15,"Missing field");a.i=d;a.j.forEach(function(k){k(d)});
g=YA(f);hC("att_fc",void 0,"attestation_challenge_fetch");fC();return h.return(g)})}
function xn(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=new Sj(100,3E5,.25,2),d=void 0;case 2:if(!(c.i<10)){h.v(4);break}h.o(5);if(!(c.i>0)){h.v(7);break}return h.yield(DD(c.getValue()),7);case 7:return h.yield(FD(a,b),9);case 9:return e=h.i,h.return(e);case 5:f=h.j();f instanceof El?d=f:(g=f instanceof Error?f.message:"Unknown",d=new El(9,g));Tj(c);h.v(2);break;case 4:if(d)throw d;throw new El(9,"Unknown error");}})}
function FD(a,b){b=ym(zm(new xm,b),a.requestKey);var c=new lm,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=function(){if(rr(d)){var e=Tn(d.responseText);c.resolve(e)}else c.reject(new El(Cl(sr(d)),d.statusText))};
d.onerror=function(){c.reject(new El(Cl(sr(d)),d.statusText))};
d.send(b.serialize());return c.promise}
function GD(a){var b={bicf:function(f){a.h=f},
blc:function(){return a.getLatestChallengeResponse()},
bcr:function(f){a.j.push(f)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(var d=z(c.ntpqfbel),e=d.next();!e.done;e=d.next())e=e.value,e(b);c.ntpqfbel=void 0}
;function HD(a){var b,c;(b=a.ytcsi)==null||(c=b.tick)==null||c.call(b,"pot_ist")}
function ID(a){if(a instanceof Error){var b=G("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function JD(a,b){var c=this;this.h=0;var d;this.ec=(d=b==null?void 0:b.ec)!=null?d:window;this.Bd=b==null?void 0:b.Bd;var e;this.requestKey=(e=b==null?void 0:b.requestKey)!=null?e:xr("par_bir_key")||"O43z0dpjhgX20SCx4KAo";var f;this.He=(f=b==null?void 0:b.He)!=null?f:function(k){return new Am(k)};
var g;d=(g=b==null?void 0:b.mj)!=null?g:function(k,l,m){return new ED(k,l,m)};
this.bgChallenge=YA(a.bgChallenge);this.ttlSeconds=$A(ZA(a.challenge||""));this.Ua=d(this.requestKey,V("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(D.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);this.Ke=b==null?void 0:b.Ke;GD(this.Ua);var h;this.re=(h=b==null?void 0:b.re)!=null?h:function(k){Dk(c.ec.document,"visibilitychange",function(){c.ec.document.visibilityState===
"visible"&&k()})}}
function KD(a){if(!a.vm){var b={maxAttempts:5,qe:a.ttlSeconds*1E3};HD(a.ec);a.vm=a.He({Ua:a.Ua,Qb:{disable:V("html5_web_po_disable_remote_logging"),na:"aGIf",tf:wr(),Vf:V("wpo_dis_lfdms")?0:1E3,Wb:function(d){var e=JA.get(d);e||(e=new IA(d),e=new yl(e),JA.set(d,e));return e}},
Xb:b,Ff:a.bgChallenge,Vc:ID});a.h=Date.now();Hm(a.vm,function(){a.h=Date.now()});
a.ec.bgevmc={p:function(){var d;(d=a.vm)==null||d.pause()},
r:function(){var d;(d=a.vm)==null||d.resume()},
cr:function(){var d,e;return(e=(d=a.vm)==null?void 0:d.checkForRefresh())!=null?e:Promise.resolve()}};
Hc(a.vm,function(){return B(function(d){return d.return(LD(a))})});
var c=a.j.bind(a);a.Bd&&a.ttlSeconds>0&&a.Bd.then(function(d){d.listen("publicytnetworkstatus-online",c)});
a.re(c)}}
JD.prototype.j=function(){if(Date.now()>this.h+this.ttlSeconds*1E3){var a;(a=this.vm)==null||Fm(a)}};
function LD(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new tn({vm:a.vm,Ua:a.Ua,Od:!0,onError:ID,Xb:a.Ke});return a.i}
function MD(a,b){a=new JD(a,b);KD(a);(b==null?0:b.ij)||LD(a)}
function ND(a){try{var b=JSON.parse(a);if(b.bgChallenge)return b}catch(c){}}
function OD(){var a=window,b={};a=a===void 0?window:a;var c=a.ytAtR,d;b==null||(d=b.ce)==null||d.Ej();if(c){if(c=ND(c)){var e;b==null||(e=b.ce)==null||e.pe("SUCCESS");MD(c,b)}a.ytAtR=void 0}else a.ytAtRC=function(f){if(f=ND(f)){var g;b==null||(g=b.ce)==null||g.pe("SUCCESS");MD(f,b);a.ytAtRC=void 0}}}
;var PD=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function QD(){this.state=1;this.vm=null;this.h=void 0}
r=QD.prototype;r.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=sq(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=tq(a.interpreterSafeUrl).toString());RD(this,e,d,a.program,b,c)}else Yy(Error("BL:CIP"))};
function RD(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,cA(uq(c),function(){window[g]?SD(a,d,g,e):(a.state=3,eA(c),Yy(new W("BL:ULB",""+c)))},f)):b?(f=sj("SCRIPT"),b instanceof Eb?(f.textContent=Gb(b),Hb(f)):f.textContent=b,f.nonce=Db(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?SD(a,d,g,e):(a.state=4,Yy(new W("BL:ULBJ")))):Yy(new W("BL:ULV"))}
r.isLoading=function(){return this.state===2};
function SD(a,b,c,d){a.state=5;var e=!!a.h&&PD.includes(ic(a.h)||"");try{var f=new nm({program:b,globalName:c,Qb:{disable:!V("att_web_record_metrics")||!V("att_skip_metrics_for_cookieless_domains_ks")&&e,na:"aGIf"}});f.Ub.then(function(){a.state=6;d&&d(b)});
a.Hd(f)}catch(g){a.state=7,g instanceof Error&&Yy(g)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.Md()?this.Ie({Na:a}):null};
r.dispose=function(){this.Hd(null);this.state=8};
r.Md=function(){return!!this.vm};
r.Ie=function(a){return this.vm.ye(a)};
r.Hd=function(a){wc(this.vm);this.vm=a};function TD(){var a=G("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function UD(){QD.apply(this,arguments)}
v(UD,QD);UD.prototype.Hd=function(a){var b;(b=TD())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ye.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
UD.prototype.Md=function(){return!!TD()};
UD.prototype.Ie=function(a){return TD().bgvmc(a)};var VD=new zx("AUTH_SERVICE_TOKEN");function WD(a){Qx.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.I},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.I},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c});c.persisted===!1&&(b.h=new Map)});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(WD,Qx);WD.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
WD.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
WD.prototype.I=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
WD.prototype.i=function(){this.h=new Map};function XD(a){Qx.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.I},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.I},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.I},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
V("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(XD,Qx);XD.prototype.i=function(a,b){a(b==null?void 0:b.event);V("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
XD.prototype.h=function(a,b){a(b==null?void 0:b.event);V("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
XD.prototype.u=function(a,b){a(b==null?void 0:b.event)};
XD.prototype.I=function(a,b){a(b==null?void 0:b.event)};function YD(){this.o=new WD;this.u=new XD}
YD.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function ZD(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
ZD.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=qz(c===void 0?0:c)){a=this.client;d=new jz({trackingParams:d});var e=void 0;if(V("no_client_ve_attach_unless_shown")){var f=EA(d,c);AA.set(f,!0);FA(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=DA({cttAuthInfo:sz(c)||void 0,automatedLogEventSource:void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?GA("visualElementGestured",f,d):a?Oy("visualElementGestured",
d,a,f):tt("visualElementGestured",d,f);b=!0}else b=!1;else b=!1;return b};
ZD.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new jz({trackingParams:a}),b,c===void 0?0:c)};
ZD.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=qz(d);a||(a=(a=nz(d===void 0?0:d))?new jz({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=DA({cttAuthInfo:sz(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?GA("visualElementStateChanged",d,b):a?Oy("visualElementStateChanged",b,a,d):tt("visualElementStateChanged",b,d))}};
function $D(a,b){if(b===void 0)for(var c=pz(),d=0;d<c.length;d++)c[d]!==void 0&&$D(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&CA(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function aE(){YD.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));V("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));V("web_log_cfg_cee_ks")||Ds(bE)}
v(aE,YD);aE.prototype.j=function(){tt("finalPayload",{csn:qz()})};
aE.prototype.h=function(){dz(ez)};
aE.prototype.i=function(){var a=$D;ZD.instance||(ZD.instance=new ZD);a(ZD.instance)};
function bE(){var a=U("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Ce();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&tt("genericClientExperimentEvent",{eventType:c});delete Vq.CLIENT_EXPERIMENT_EVENTS}}
;function cE(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;W.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(cE,W);var dE=new zx("NETWORK_SLI_TOKEN");function eE(a){this.h=a}
eE.prototype.fetch=function(a,b,c,d){var e=this,f,g,h,k,l,m,p,t,n,x,y;return B(function(w){switch(w.h){case 1:return f=fE(e,a,b),w.o(2),w.yield(fetch(f),4);case 4:g=w.i;if(!(V("web_unified_fetch")&&d&&g.ok&&g.body&&typeof g.body.getReader==="function")){w.v(5);break}h=g.clone();k=h.body.getReader();return w.yield(k.read(),6);case 6:if(l=w.i,m=l.value,k.cancel().catch(function(){}),m&&m[0]===91)return p=[],t=g.body.pipeThrough(new TextDecoderStream).getReader(),n=new yo,w.return(gE(e,t,n,p,d));
case 5:return w.yield(e.handleResponse(g,c),7);case 7:return w.return(w.i);case 2:x=w.j();Yy(x);if(((y=c)==null?0:y.sf)&&x instanceof cE&&x.errorType===1)throw x;return w.return(void 0)}})};
function fE(a,b,c){if(a.h){var d=jc(tc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}a=c;V("wug_networking_gzip_request")&&(a=Pv(c));return new window.Request(b,a)}
function gE(a,b,c,d,e){var f,g,h,k,l,m,p,t,n;return B(function(x){if(x.h==1)return x.yield(b.read(),2);f=x.i;g=f.value;if(h=f.done)return(k=a.h)==null||k.success(),x.return(d);try{l=c.parse(g)}catch(y){throw new cE(1,"Failed to parse streaming response",g);}if(l!=null)for(m=z(l),p=m.next();!p.done;p=m.next())t=p.value,d.push(t),n=void 0,(n=e)==null||n(t);return x.return(gE(a,b,c,d,e))})}
eE.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.Of)&&a.ok)return mh(b.Of,d);d=d.replace(")]}'","");if((b==null?0:b.sf)&&d)try{var e=JSON.parse(d)}catch(g){throw new cE(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.lj(),c=c.then(function(d){Yy(new W("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
eE[yx]=[new Ax(dE)];var hE=new zx("NETWORK_MANAGER_TOKEN");function iE(){}
function jE(){var a=G("ytglobal.storage_");a||(a=new iE,E("ytglobal.storage_",a));return a}
iE.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(kE()):d.return()})};
function kE(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",iE);function rt(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
rt.prototype.wa=function(a){this.handleError(a)};
rt.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":V("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":V("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":lE(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function lE(a,b){jE().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:mE(c==null?void 0:c.usage),deviceStorageQuotaMbytes:mE(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function mE(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var aD={Vd:{feedbackEndpoint:SC(lD),modifyChannelNotificationPreferenceEndpoint:SC(nD),playlistEditEndpoint:SC(oD),shareEntityEndpoint:SC(kD),subscribeEndpoint:SC(hD),undoFeedbackEndpoint:SC(mD),unsubscribeEndpoint:SC(iD),webPlayerShareEntityServiceEndpoint:SC(pD)}};function nE(){var a=Gx();Cx(a,{uc:hE,Ld:eE});Cx(a,{uc:VD,Ld:es});var b=PC(),c=a.resolve(VD),d=a.resolve(hE),e={};b&&(e.client_location=b);$C(d,c,e);Cx(a,{uc:GC,Ee:EC.instance})}
;var oE=new Map;function pE(a,b,c,d,e){b=new qE(a,b,c,d===void 0?function(){}:d,e===void 0?null:e);
oE.set(a,b)}
function rE(a){if(!a.onReadyPatchApplied){var b=a.addEventListener;a.addEventListener=function(c,d){c==="onReady"?Promise.resolve().then(function(){d(a)}):b.call(a,c,d)};
a.onReadyPatchApplied=!0}}
function qE(a,b,c,d,e){H.call(this);this.container=a;this.webPlayerContextConfig=b;this.h=c;this.Vc=d;this.playerVars=e;sE(this)}
v(qE,H);function sE(a){if(G("yt.player.Application.create"))Promise.resolve().then(function(){tE(a)});
else{uE(tq(a.webPlayerContextConfig.trustedJsUrl),function(){tE(a)},function(){a.K||a.Vc()});
var b=a.webPlayerContextConfig.trustedCssUrl;b&&vE(tq(b))}}
function tE(a){if(!a.K){var b=G("yt.player.Application.create");try{a.api=b(a.container,{args:a.playerVars},a.webPlayerContextConfig,void 0).getInternalApi(),rE(a.api),a.api.isReady=function(){return!0},a.h(a.api)}catch(c){throw a.Vc(),c;
}}}
qE.prototype.da=function(){this.api&&this.api.destroy();tj(this.container);H.prototype.da.call(this)};
function vE(a){var b="ytp-"+a.toString();if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;Nb(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function uE(a,b,c){var d="ytp-"+a.toString(),e=document.getElementById(d);if(e)e.dataset.failed?c():e.dataset.loaded?b():(e.addEventListener("error",function(){c()}),e.addEventListener("load",function(){b()}));
else{var f=document.createElement("script");f.id=d;f.addEventListener("error",function(){f.dataset.failed="true";c()});
f.addEventListener("load",function(){f.dataset.loaded="true";b()});
Ib(f,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(f,a.firstChild)}}
;function wE(a){U("ENABLE_WEBVIEW_API")&&window.ytwebviewplayer&&(window.addEventListener("message",function(b){try{var c=JSON.parse(b.data),d=c.methodName,e=c.args||[];a:{for(var f=z(e),g=f.next();!g.done;g=f.next())if(String(g.value).includes("javascript:")){var h=!0;break a}h=!1}if(h)throw Error('Dangerous call to "'+d+'" with ['+e+"].");if(d&&typeof a[d]==="function")a[d].apply(a,oa(e));else throw Error('Unknown API method: "'+d+'".');}catch(k){Xy(k)}}),a.addEventListener("onReady",function(){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onPlayerReady"}))}),
a.addEventListener("onStateChange",function(b){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onStateChange",
state:b}))}),a.addEventListener("onError",function(b){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onError",
errorCode:b}))}))}
;var xE={},yE=(xE["api.invalidparam"]=2,xE.auth=150,xE["drm.auth"]=150,xE["heartbeat.net"]=150,xE["heartbeat.servererror"]=150,xE["heartbeat.stop"]=150,xE["html5.unsupportedads"]=5,xE["fmt.noneavailable"]=5,xE["fmt.decode"]=5,xE["fmt.unplayable"]=5,xE["html5.missingapi"]=5,xE["html5.unsupportedlive"]=5,xE["drm.unavailable"]=5,xE["mrm.blocked"]=151,xE["embedder.identity.denied"]=152,xE["embedder.identity.missing.referrer"]=153,xE);var zE=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function AE(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function BE(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(zE);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config){a:if(typeof a==="string")var e=a;else{if(Ma(a))try{e=JSON.stringify(a);break a}catch(f){console.error("Invalid embedConfig JSON",f)}e=void 0}b.embed_config=e}return b}
function CE(a,b,c,d){if(Ma(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function DE(a,b){H.call(this);var c=this;this.api=a;this.j=this.G=!1;this.J=[];this.P={};this.o=[];this.i=[];this.aa=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.Y=V("web_player_split_event_bus_iframe");this.A=U("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.u=function(d){c.onMessage(d)};
EE.addEventListener("message",this.u);if(a=U("WIDGET_ID"))this.sessionId=a;b&&this.u(b);FE(this,"onReady",function(){c.G=!0;var d=c.api.getVideoData();if(!d.isPlayable){c.aa=!0;d=d.errorCode;var e=e===void 0?5:e;c.errorCode=d?yE[d]||e:e;c.sendMessage("onError",Number(c.errorCode))}GE(c);c.h||c.j||window.parent===window||!c.sessionId||HE(c,{event:"readyToListen"},window.parent)});
FE(this,"onVideoProgress",this.wg.bind(this));FE(this,"onVolumeChange",this.xg.bind(this));FE(this,"onApiChange",this.pg.bind(this));FE(this,"onPlaybackQualityChange",this.tg.bind(this));FE(this,"onPlaybackRateChange",this.ug.bind(this));FE(this,"onStateChange",this.vg.bind(this));FE(this,"onWebglSettingsChanged",this.yg.bind(this));FE(this,"onCaptionsTrackListChanged",this.qg.bind(this));FE(this,"captionssettingschanged",this.rg.bind(this))}
v(DE,H);function GE(a){if(a.h)if(a.j)a.sendMessage("alreadyInitialized");else if(a.G){a.j=!0;a.G=!1;a.sendMessage("initialDelivery",IE(a));a.sendMessage("onReady");hC("ep_init_ar");for(var b=z(a.J),c=b.next();!c.done;c=b.next())HE(a,c.value);a.J=[]}}
function JE(a,b){a.sendMessage("infoDelivery",b)}
r=DE.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.j?HE(this,a):this.J.push(a)};
function KE(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function FE(a,b,c){a.o.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function IE(a){if(!a.api)return null;var b=a.api.getApiInterface();Vb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.vg=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());JE(this,a)};
r.tg=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());JE(this,a)};
r.ug=function(a){JE(this,{playbackRate:a})};
r.pg=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.xg=function(){JE(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.wg=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());JE(this,a)};
r.yg=function(){JE(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.qg=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};JE(this,a)}};
r.rg=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};JE(this,a)}};
r.onMessage=function(a){if(!(this.A!=="*"&&a.origin!==this.A||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.A=this.targetOrigin=a);this.h=c;this.sessionId=b;GE(this);break;case "command":if(c=b.func,b=b.args,c==="addEventListener"&&b)c=b[0],b=a.origin,c==="onReady"?this.api.logApiCall(c+" invocation",b):c==="onError"&&this.aa&&(this.api.logApiCall(c+" invocation",
b,this.errorCode),this.errorCode=void 0),this.api.logApiCall(c+" registration",b),this.P[c]||c==="onReady"||(a=KE(this,c,b),this.i.push({eventType:c,listener:a,origin:b}),this.Y?this.api.handleExternalCall("addEventListener",[c,a],b):this.api.addEventListener(c,a),this.P[c]=!0);else if(a=a.origin,this.api.isExternalMethodAvailable(c,a)){b=b||[];if(b.length>0&&AE(c)){var d=b;if(Ma(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},c){case "loadVideoById":case "cueVideoById":e=BE(d[0],d[1]!==void 0?
Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];typeof e==="string"&&(e={mediaContentUrl:e,startSeconds:d[1]!==void 0?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=BE(e);break;case "loadPlaylist":case "cuePlaylist":e=CE(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(c,b,a);AE(c)&&JE(this,IE(this))}}}};
function HE(a,b,c){if(c=c===void 0?a.h:c){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var d=JSON.stringify(b);c.postMessage(d,a.targetOrigin)}catch(e){Yy(e)}}}
r.da=function(){H.prototype.da.call(this);EE.removeEventListener("message",this.u);for(var a=0;a<this.o.length;a++){var b=this.o[a];this.api.removeEventListener(b.eventType,b.listener)}this.o=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.Y?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var EE=window;function LE(a,b,c){H.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=V("web_player_split_event_bus_iframe");this.i=function(e){d.onMessage(e)};
ME.addEventListener("message",this.i);NE(this,"RECEIVING")}
v(LE,H);r=LE.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.sg.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.sg=function(a,b){this.K||NE(this,a,OE(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function PE(a,b){switch(a){case "loadVideoById":return[BE(b)];case "cueVideoById":return[BE(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[CE(b)];case "cuePlaylist":return[CE(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function QE(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function OE(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function NE(a,b,c){a.K||(b={id:a.id,command:b},c&&(b.data=c),RE.postMessage(JSON.stringify(b),a.origin))}
r.onMessage=function(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.K){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=PE(c,b||{}),b=this.api.handleExternalCall(c,
b,a||null),(b=QE(c,b))&&NE(this,c,b))}}}}}};
r.da=function(){ME.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.da.call(this)};
var ME=window,RE=window.parent;var SE=new UD;function TE(){return SE.Md()}
function UE(a){a=a===void 0?{}:a;return SE.invoke(a)}
;function VE(a,b,c,d,e){H.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Yb=e;this.La=!1;this.api={};this.ja=this.u=null;this.P=new Ao;this.h={};this.aa=this.oa=this.elementId=this.Ma=this.config=null;this.Y=!1;this.j=this.G=null;this.Ea={};this.nd=["onReady"];this.lastError=null;this.Sa=NaN;this.J={};this.fa=0;this.i=this.o=a;yc(this,this.P);WE(this);c?this.fa=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(XE(this),YE(this))}
v(VE,H);r=VE.prototype;r.getId=function(){return this.A};
r.loadNewVideoConfig=function(a){if(!this.K){this.fa&&(clearTimeout(this.fa),this.fa=0);var b=a||{};b instanceof Sz||(b=new Sz(b));this.config=b;this.setConfig(a);YE(this);this.isReady()&&ZE(this)}};
function XE(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Ma=a;this.config=$E(a);XE(this);if(!this.oa){var b;this.oa=aF(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Qn(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Qn(Number(a)||a))};
function ZE(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function bF(a){var b=!0,c=cF(a);c&&a.config&&(b=c.dataset.version===dF(a));return b&&!!G("yt.player.Application.create")}
function YE(a){if(!a.K&&!a.Y){var b=bF(a);if(b&&(cF(a)?"html5":null)==="html5")a.aa="html5",a.isReady()||eF(a);else if(fF(a),a.aa="html5",b&&a.j&&a.o)a.o.appendChild(a.j),eF(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=gF(a,"player_bootstrap_method")?G("yt.player.Application.createAlternate")||G("yt.player.Application.create"):G("yt.player.Application.create");var e=a.config?$E(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Yb);eF(a)};
a.Y=!0;b?a.G():(cA(dF(a),a.G),(b=hF(a))&&jA(b||""),iF(a)&&!c&&E("yt.player.Application.create",null))}}}
function cF(a){var b=rj(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function eF(a){if(!a.K){var b=cF(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!gF(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}jF(a)}else a.Sa=setTimeout(function(){eF(a)},50)}}
function jF(a){WE(a);a.La=!0;var b=cF(a);if(b){a.u=kF(a,b,"addEventListener");a.ja=kF(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=kF(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);ZE(a);a.oa&&a.oa(a.api);a.P.Bb("onReady",a.api)}
function kF(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new W("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function WE(a){a.La=!1;if(a.ja)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ja(b,a.h[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&clearTimeout(Number(c));a.J={};a.u=null;a.ja=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ma};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.La};
r.addEventListener=function(a,b){var c=this,d=aF(this,b);d&&(Ob(this.nd,a)>=0||this.h[a]||(b=lF(this,a),this.u&&this.u(a,b)),this.P.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.K||(b=aF(this,b))&&this.P.unsubscribe(a,b)};
function aF(a,b){var c=b;if(typeof b==="string"){if(a.Ea[b])return a.Ea[b];c=function(){var d=C.apply(0,arguments),e=G(b);if(e)try{e.apply(D,d)}catch(f){throw d=new W("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ea[b]=c}return c?c:null}
function lF(a,b){function c(d){function e(){if(!a.K)try{a.P.Bb(b,d!=null?d:void 0)}catch(h){var g=new W("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack,componentStack:h.bf});g.level="WARNING";throw g;}}
if(gF(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.J,h=String(f);h in g&&delete g[h]},0);
ij(a.J,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.aa||(cF(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function fF(a){a.cancel();WE(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=cF(a);b&&(bF(a)||!iF(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));a.o&&tj(a.o)}
r.cancel=function(){this.G&&gA(dF(this),this.G);clearTimeout(this.Sa);this.Y=!1};
r.da=function(){fF(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new W("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ea=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ma=this.config=this.api=null;delete this.o;delete this.i;H.prototype.da.call(this)};
function iF(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function dF(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function hF(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function gF(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function $E(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?lj(e):e}return b}
;var mF={},nF="player_uid_"+(Math.random()*1E9>>>0);function oF(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?rj(c):c;var e=nF+"_"+Na(c),f=mF[e];if(f&&d)return pF(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new VE(c,e,a,b,void 0);mF[e]=f;f.addOnDisposeCallback(function(){delete mF[f.getId()]});
return f.api}
function pF(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var qF=null,rF=null,sF;function tF(a){qF=a;qF.addEventListener("onVideoDataChange",uF);qF.addEventListener("onReady",vF);a=U("POST_MESSAGE_ID","player");var b=U("POST_MESSAGE_ORIGIN");U("ENABLE_JS_API")?rF=new DE(qF,sF):U("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(rF=new LE(qF,a,b));sF=void 0}
function wF(){iB();V("ytidb_create_logger_embed_killswitch")||qt();var a={};aE.h||(aE.h=new aE);aE.h.install((a.flush_logs={callback:function(){By()}},a));
zt||Ww();nE();Yn.xa(function(){CD()});
a=P("att_init_delay",200);V("enable_rta_manager")&&setTimeout(function(){V("attmusi")&&OD();var b=new DC;var c={preload:!V("enable_rta_npi"),De:V("attmusi")},d;c=(d=c)!=null?d:{preload:!0};d=c.hj?void 0:new Lw;pC.instance=new pC(b,c,d);b=pC.instance;if((V("attmusi")||V("attmusiw"))&&V("attmusi_ue")){b={s:b.o.bind(b),ir:b.u.bind(b)};c=window;c.attmp=b;if(c.attmq!==void 0){d=z(c.attmq);for(var e=d.next();!e.done;e=d.next())e=e.value,e(b)}c.attmq=void 0}else c=b.o.bind(b),E("yt.aba.att",c),b=b.u.bind(b),
E("yt.aba.att2",b)},a);
Ds(function(){if(V("enable_zw_ping")){var b=U("INNERTUBE_CLIENT_NAME","UNKNOWN_INTERFACE"),c="/establish_zw";b==="WEB_EMBEDDED_PLAYER"?c="/embed/establish_zw":b==="TVHTML5"&&(c="https://www.youtube.com/tv/establish_zw");U("COOKIELESS",!1)&&b==="WEB_EMBEDDED_PLAYER"?(b=new Headers,b.set("X-Goog-Visitor-Id",U("VISITOR_DATA")),fetch(c,{method:"GET",mode:"no-cors",headers:b})):fetch(c,{method:"GET",mode:"no-cors",credentials:"include"})}})}
function xF(){nC();var a=qs(),b=ts(119),c=window.devicePixelRatio>1;if(document.body&&po(document.body,"exp-invert-logo"))if(c&&!po(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!po(d,"inverted-hdpi")){var e=no(d);oo(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&po(document.body,"inverted-hdpi")&&qo();if(b!=c){b="f"+(Math.floor(119/31)+1);d=us(b)||0;d=c?d|67108864:d&-67108865;d===0?delete ms[b]:(c=d.toString(16),ms[b]=c.toString());
c=!0;V("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in ms)ms.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(ms[f])));var f=d.join("&");is(b,f,63072E3,a.i,c)}}
function uF(){yF()}
function vF(){hC("ep_init_pr");yF()}
function yF(){var a=qF.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function zF(){qF&&qF.sendAbandonmentPing&&qF.sendAbandonmentPing();U("PL_ATT")&&SE.dispose();for(var a=Yn,b=0,c=fB.length;b<c;b++)a.ya(fB[b]);fB.length=0;eA(gB.toString());hB=!1;Wq("DCLKSTAT",0);xc(rF);qF&&(qF.removeEventListener("onVideoDataChange",uF),qF.destroy(),qF=null)}
;hC("ep_init_eps");E("yt.setConfig",Wq);E("yt.config.set",Wq);E("yt.setMsg",bA);E("yt.msgs.set",bA);E("yt.logging.errors.log",Xy);
E("writeEmbed",function(){hC("ep_init_wes");var a=U("PLAYER_CONFIG");if(!a){var b=U("PLAYER_VARS");b&&(a={args:b})}TA(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});b=document.referrer;window!==window.top&&b&&b!==document.URL&&(a.args.loaderUrl=b);b=qD();if(!b.serializedForcedExperimentIds){var c=jr(window.location.href);c.forced_experiments&&(b.serializedForcedExperimentIds=c.forced_experiments)}var d;((d=
a.args)==null?0:d.autoplay)?cC("watch",["pbs","pbu","pbp"]):a.args&&Ez(a.args)?cC("video_preview",["ol"]):cC("embed_no_video",["ep_init_ar"]);V("embeds_use_player_instances_library")||U("ENABLE_WEBVIEW_API")?(pE(document.getElementById("player"),b,function(e){U("ENABLE_WEBVIEW_API")?(e=e.getTrustedApi(),rE(e),wE(e)):tF(e)},function(){throw Error("Unable to load player JS");
},a.args),U("ENABLE_WEBVIEW_API")||wF()):(a=oF(a,b),tF(a),wF());
hC("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",G("yt.abuse.player.botguardInitialized")||TE);E("yt.abuse.player.invokeBotguard",G("yt.abuse.player.invokeBotguard")||UE);E("yt.abuse.dclkstatus.checkDclkStatus",G("yt.abuse.dclkstatus.checkDclkStatus")||jB);E("yt.player.exports.navigate",G("yt.player.exports.navigate")||SA);E("yt.util.activity.init",G("yt.util.activity.init")||jx);E("yt.util.activity.getTimeSinceActive",G("yt.util.activity.getTimeSinceActive")||nx);
E("yt.util.activity.setTimestamp",G("yt.util.activity.setTimestamp")||kx);window.addEventListener("load",$q(function(){xF()}));
window.addEventListener("pageshow",$q(function(a){a.persisted||xF()}));
window.addEventListener("pagehide",$q(function(a){V("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?zF():a.persisted||zF()}));
(function(){var a=a===void 0?$y:a;var b=b===void 0?{}:b;E("yt.logging.errors.log",Xy);Wy();Wr(Vr(),b);window.onerror=a;wl=Zy;window.addEventListener("unhandledrejection",function(c){if(c.reason instanceof Error){var d=c.reason;az(d,{source:"unhandledrejection"});d.name==="AbortError"&&(d.level="WARNING")}Zy(c.reason);c.preventDefault()})})();
(function(){if(U("ENABLE_JS_API")){var a=function(b){sF=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
hC("ep_init_epe");}).call(this);
