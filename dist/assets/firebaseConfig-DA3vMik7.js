import{L as fc,_ as Pa,C as Va,r as ar,b as Sa,F as Ca,d as jt,g as ba,e as Na,f as Da,i as yr,p as ka,h as Oa,j as dc,k as xa,l as qt,m as mc,n as pc,S as Ma,q as gc,t as _c}from"./vendor-DAUOFwH1.js";var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,La;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.F=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(I,y,w){for(var g=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)g[wt-2]=arguments[wt];return p.prototype[y].apply(I,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,_){_||(_=0);const I=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)I[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;y<16;++y)I[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],y=E.g[2];let w=E.g[3],g;g=p+(w^_&(y^w))+I[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[2]+606105819&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+I[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[6]+2821735955&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+I[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[10]+4294925233&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+I[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[14]+2792965006&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^w&(_^y))+I[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[11]+643717713&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+I[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[15]+3634488961&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+I[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[3]+4107603335&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+I[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[7]+1735328473&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^w)+I[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[11]+1839030562&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+I[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[7]+4139469664&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+I[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[3]+3572445317&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+I[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[15]+530742520&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~w))+I[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[14]+2878612391&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+I[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[10]+4293915773&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+I[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[6]+2734768916&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+I[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[2]+718787259&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.v=function(E,p){p===void 0&&(p=E.length);const _=p-this.blockSize,I=this.C;let y=this.h,w=0;for(;w<p;){if(y==0)for(;w<=_;)s(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<p;)if(I[y++]=E.charCodeAt(w++),y==this.blockSize){s(this,I),y=0;break}}else for(;w<p;)if(I[y++]=E[w++],y==this.blockSize){s(this,I),y=0;break}}this.h=y,this.o+=p},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)E[p++]=this.g[_]>>>I&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;const _=[];let I=!0;for(let y=E.length-1;y>=0;y--){const w=E[y]|0;I&&w==p||(_[y]=w,I=!1)}this.g=_}var c={};function h(E){return-128<=E&&E<128?o(E,function(p){return new a([p|0],p<0?-1:0)}):new a([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return T;if(E<0)return C(f(-E));const p=[];let _=1;for(let I=0;E>=_;I++)p[I]=E/_|0,_*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return C(m(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(p,8));let I=T;for(let w=0;w<E.length;w+=8){var y=Math.min(8,E.length-w);const g=parseInt(E.substring(w,w+y),p);y<8?(y=f(Math.pow(p,y)),I=I.j(y).add(f(g))):(I=I.j(_),I=I.add(f(g)))}return I}var T=h(0),R=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-C(this).m();let E=0,p=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);E+=(I>=0?I:4294967296+I)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(O(this))return"-"+C(this).toString(E);const p=f(Math.pow(E,6));var _=this;let I="";for(;;){const y=K(_,p).g;_=G(_,y.j(p));let w=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=y,k(_))return w+I;for(;w.length<6;)w="0"+w;I=w+I}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=G(this,E),O(E)?-1:k(E)?0:1};function C(E){const p=E.g.length,_=[];for(let I=0;I<p;I++)_[I]=~E.g[I];return new a(_,~E.h).add(R)}n.abs=function(){return O(this)?C(this):this},n.add=function(E){const p=Math.max(this.g.length,E.g.length),_=[];let I=0;for(let y=0;y<=p;y++){let w=I+(this.i(y)&65535)+(E.i(y)&65535),g=(w>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);I=g>>>16,w&=65535,g&=65535,_[y]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(E,p){return E.add(C(p))}n.j=function(E){if(k(this)||k(E))return T;if(O(this))return O(E)?C(this).j(C(E)):C(C(this).j(E));if(O(E))return C(this.j(C(E)));if(this.l(S)<0&&E.l(S)<0)return f(this.m()*E.m());const p=this.g.length+E.g.length,_=[];for(var I=0;I<2*p;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let y=0;y<E.g.length;y++){const w=this.i(I)>>>16,g=this.i(I)&65535,wt=E.i(y)>>>16,le=E.i(y)&65535;_[2*I+2*y]+=g*le,q(_,2*I+2*y),_[2*I+2*y+1]+=w*le,q(_,2*I+2*y+1),_[2*I+2*y+1]+=g*wt,q(_,2*I+2*y+1),_[2*I+2*y+2]+=w*wt,q(_,2*I+2*y+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function q(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function B(E,p){this.g=E,this.h=p}function K(E,p){if(k(p))throw Error("division by zero");if(k(E))return new B(T,T);if(O(E))return p=K(C(E),p),new B(C(p.g),C(p.h));if(O(p))return p=K(E,C(p)),new B(C(p.g),p.h);if(E.g.length>30){if(O(E)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,I=p;I.l(E)<=0;)_=ct(_),I=ct(I);var y=J(_,1),w=J(I,1);for(I=J(I,2),_=J(_,2);!k(I);){var g=w.add(I);g.l(E)<=0&&(y=y.add(_),w=g),I=J(I,1),_=J(_,1)}return p=G(E,y.j(p)),new B(y,p)}for(y=T;E.l(p)>=0;){for(_=Math.max(1,Math.floor(E.m()/p.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),w=f(_),g=w.j(p);O(g)||g.l(E)>0;)_-=I,w=f(_),g=w.j(p);k(w)&&(w=R),y=y.add(w),E=G(E,g)}return new B(y,E)}n.B=function(E){return K(this,E).h},n.and=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)&E.i(I);return new a(_,this.h&E.h)},n.or=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)|E.i(I);return new a(_,this.h|E.h)},n.xor=function(E){const p=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)^E.i(I);return new a(_,this.h^E.h)};function ct(E){const p=E.g.length+1,_=[];for(let I=0;I<p;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(_,E.h)}function J(E,p){const _=p>>5;p%=32;const I=E.g.length-_,y=[];for(let w=0;w<I;w++)y[w]=p>0?E.i(w+_)>>>p|E.i(w+_+1)<<32-p:E.i(w+_);return new a(y,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,La=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ee=a}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});var Wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,hn,Ua,er,hs,qa,Ba,ja;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wn=="object"&&Wn];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var A=i[d];if(!(A in l))break t;l=l[A]}i=i[i.length-1],d=l[i],u=u(d),u!=d&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var l=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&l.push([d,u[d]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,l){return i.call.apply(i.bind,arguments)}function f(i,u,l){return f=h,f.apply(null,arguments)}function m(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function T(i,u){function l(){}l.prototype=u.prototype,i.Z=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(d,A,v){for(var b=Array(arguments.length-2),U=2;U<arguments.length;U++)b[U-2]=arguments[U];return u.prototype[A].apply(d,b)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function S(i){const u=i.length;if(u>0){const l=Array(u);for(let d=0;d<u;d++)l[d]=i[d];return l}return[]}function k(i,u){for(let d=1;d<arguments.length;d++){const A=arguments[d];var l=typeof A;if(l=l!="object"?l:A?Array.isArray(A)?"array":l:"null",l=="array"||l=="object"&&typeof A.length=="number"){l=i.length||0;const v=A.length||0;i.length=l+v;for(let b=0;b<v;b++)i[l+b]=A[b]}else i.push(A)}}class O{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function C(i){a.setTimeout(()=>{throw i},0)}function G(){var i=E;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class q{constructor(){this.h=this.g=null}add(u,l){const d=B.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var B=new O(()=>new K,i=>i.reset());class K{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,J=!1,E=new q,p=()=>{const i=Promise.resolve(void 0);ct=()=>{i.then(_)}};function _(){for(var i;i=G();){try{i.h.call(i.g)}catch(l){C(l)}var u=B;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}J=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,u),a.removeEventListener("test",l,u)}catch{}return i}();function g(i){return/^[\s\xa0]*$/.test(i)}function wt(i,u){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}T(wt,y),wt.prototype.init=function(i,u){const l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&wt.Z.h.call(this)},wt.prototype.h=function(){wt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var le="closure_listenable_"+(Math.random()*1e6|0),Ol=0;function xl(i,u,l,d,A){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=A,this.key=++Ol,this.da=this.fa=!1}function kn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function On(i,u,l){for(const d in i)u.call(l,i[d],d,i)}function Ml(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function Ei(i){const u={};for(const l in i)u[l]=i[l];return u}const Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ai(i,u){let l,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(l in d)i[l]=d[l];for(let v=0;v<Ii.length;v++)l=Ii[v],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function xn(i){this.src=i,this.g={},this.h=0}xn.prototype.add=function(i,u,l,d,A){const v=i.toString();i=this.g[v],i||(i=this.g[v]=[],this.h++);const b=xr(i,u,d,A);return b>-1?(u=i[b],l||(u.fa=!1)):(u=new xl(u,this.src,v,!!d,A),u.fa=l,i.push(u)),u};function Or(i,u){const l=u.type;if(l in i.g){var d=i.g[l],A=Array.prototype.indexOf.call(d,u,void 0),v;(v=A>=0)&&Array.prototype.splice.call(d,A,1),v&&(kn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function xr(i,u,l,d){for(let A=0;A<i.length;++A){const v=i[A];if(!v.da&&v.listener==u&&v.capture==!!l&&v.ha==d)return A}return-1}var Mr="closure_lm_"+(Math.random()*1e6|0),Lr={};function wi(i,u,l,d,A){if(Array.isArray(u)){for(let v=0;v<u.length;v++)wi(i,u[v],l,d,A);return null}return l=Pi(l),i&&i[le]?i.J(u,l,c(d)?!!d.capture:!1,A):Ll(i,u,l,!1,d,A)}function Ll(i,u,l,d,A,v){if(!u)throw Error("Invalid event type");const b=c(A)?!!A.capture:!!A;let U=Ur(i);if(U||(i[Mr]=U=new xn(i)),l=U.add(u,l,d,b,v),l.proxy)return l;if(d=Fl(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)w||(A=b),A===void 0&&(A=!1),i.addEventListener(u.toString(),d,A);else if(i.attachEvent)i.attachEvent(Ri(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Fl(){function i(l){return u.call(i.src,i.listener,l)}const u=Ul;return i}function vi(i,u,l,d,A){if(Array.isArray(u))for(var v=0;v<u.length;v++)vi(i,u[v],l,d,A);else d=c(d)?!!d.capture:!!d,l=Pi(l),i&&i[le]?(i=i.i,v=String(u).toString(),v in i.g&&(u=i.g[v],l=xr(u,l,d,A),l>-1&&(kn(u[l]),Array.prototype.splice.call(u,l,1),u.length==0&&(delete i.g[v],i.h--)))):i&&(i=Ur(i))&&(u=i.g[u.toString()],i=-1,u&&(i=xr(u,l,d,A)),(l=i>-1?u[i]:null)&&Fr(l))}function Fr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[le])Or(u.i,i);else{var l=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(l,d,i.capture):u.detachEvent?u.detachEvent(Ri(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=Ur(u))?(Or(l,i),l.h==0&&(l.src=null,u[Mr]=null)):kn(i)}}}function Ri(i){return i in Lr?Lr[i]:Lr[i]="on"+i}function Ul(i,u){if(i.da)i=!0;else{u=new wt(u,this);const l=i.listener,d=i.ha||i.src;i.fa&&Fr(i),i=l.call(d,u)}return i}function Ur(i){return i=i[Mr],i instanceof xn?i:null}var qr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pi(i){return typeof i=="function"?i:(i[qr]||(i[qr]=function(u){return i.handleEvent(u)}),i[qr])}function gt(){I.call(this),this.i=new xn(this),this.M=this,this.G=null}T(gt,I),gt.prototype[le]=!0,gt.prototype.removeEventListener=function(i,u,l,d){vi(this,i,u,l,d)};function Et(i,u){var l,d=i.G;if(d)for(l=[];d;d=d.G)l.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new y(u,i);else if(u instanceof y)u.target=u.target||i;else{var A=u;u=new y(d,i),Ai(u,A)}A=!0;let v,b;if(l)for(b=l.length-1;b>=0;b--)v=u.g=l[b],A=Mn(v,d,!0,u)&&A;if(v=u.g=i,A=Mn(v,d,!0,u)&&A,A=Mn(v,d,!1,u)&&A,l)for(b=0;b<l.length;b++)v=u.g=l[b],A=Mn(v,d,!1,u)&&A}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const l=i.g[u];for(let d=0;d<l.length;d++)kn(l[d]);delete i.g[u],i.h--}}this.G=null},gt.prototype.J=function(i,u,l,d){return this.i.add(String(i),u,!1,l,d)},gt.prototype.K=function(i,u,l,d){return this.i.add(String(i),u,!0,l,d)};function Mn(i,u,l,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let v=0;v<u.length;++v){const b=u[v];if(b&&!b.da&&b.capture==l){const U=b.listener,ut=b.ha||b.src;b.fa&&Or(i.i,b),A=U.call(ut,d)!==!1&&A}}return A&&!d.defaultPrevented}function ql(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function Vi(i){i.g=ql(()=>{i.g=null,i.i&&(i.i=!1,Vi(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Bl extends I{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(i){I.call(this),this.h=i,this.g={}}T(Qe,I);var Si=[];function Ci(i){On(i.g,function(u,l){this.g.hasOwnProperty(l)&&Fr(u)},i),i.g={}}Qe.prototype.N=function(){Qe.Z.N.call(this),Ci(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Br=a.JSON.stringify,jl=a.JSON.parse,zl=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function bi(){}function Ni(){}var We={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jr(){y.call(this,"d")}T(jr,y);function zr(){y.call(this,"c")}T(zr,y);var ce={},Di=null;function Ln(){return Di=Di||new gt}ce.Ia="serverreachability";function ki(i){y.call(this,ce.Ia,i)}T(ki,y);function He(i){const u=Ln();Et(u,new ki(u))}ce.STAT_EVENT="statevent";function Oi(i,u){y.call(this,ce.STAT_EVENT,i),this.stat=u}T(Oi,y);function It(i){const u=Ln();Et(u,new Oi(u,i))}ce.Ja="timingevent";function xi(i,u){y.call(this,ce.Ja,i),this.size=u}T(xi,y);function Xe(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function Ye(){this.g=!0}Ye.prototype.ua=function(){this.g=!1};function $l(i,u,l,d,A,v){i.info(function(){if(i.g)if(v){var b="",U=v.split("&");for(let W=0;W<U.length;W++){var ut=U[W].split("=");if(ut.length>1){const ht=ut[0];ut=ut[1];const kt=ht.split("_");b=kt.length>=2&&kt[1]=="type"?b+(ht+"="+ut+"&"):b+(ht+"=redacted&")}}}else b=null;else b=v;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+u+`
`+l+`
`+b})}function Gl(i,u,l,d,A,v,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+u+`
`+l+`
`+v+" "+b})}function Pe(i,u,l,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ql(i,l)+(d?" "+d:"")})}function Kl(i,u){i.info(function(){return"TIMEOUT: "+u})}Ye.prototype.info=function(){};function Ql(i,u){if(!i.g)return u;if(!u)return null;try{const v=JSON.parse(u);if(v){for(i=0;i<v.length;i++)if(Array.isArray(v[i])){var l=v[i];if(!(l.length<2)){var d=l[1];if(Array.isArray(d)&&!(d.length<1)){var A=d[0];if(A!="noop"&&A!="stop"&&A!="close")for(let b=1;b<d.length;b++)d[b]=""}}}}return Br(v)}catch{return u}}var Fn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Mi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Li;function $r(){}T($r,bi),$r.prototype.g=function(){return new XMLHttpRequest},Li=new $r;function Je(i){return encodeURIComponent(String(i))}function Wl(i){var u=1;i=i.split(":");const l=[];for(;u>0&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function Qt(i,u,l,d){this.j=i,this.i=u,this.l=l,this.S=d||1,this.V=new Qe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fi}function Fi(){this.i=null,this.g="",this.h=!1}var Ui={},Gr={};function Kr(i,u,l){i.M=1,i.A=qn(Dt(u)),i.u=l,i.R=!0,qi(i,null)}function qi(i,u){i.F=Date.now(),Un(i),i.B=Dt(i.A);var l=i.B,d=i.S;Array.isArray(d)||(d=[String(d)]),Zi(l.i,"t",d),i.C=0,l=i.j.L,i.h=new Fi,i.g=yo(i.j,l?u:null,!i.u),i.P>0&&(i.O=new Bl(f(i.Y,i,i.g),i.P)),u=i.V,l=i.g,d=i.ba;var A="readystatechange";Array.isArray(A)||(A&&(Si[0]=A.toString()),A=Si);for(let v=0;v<A.length;v++){const b=wi(l,A[v],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=i.J?Ei(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),He(),$l(i.i,i.v,i.B,i.l,i.S,i.u)}Qt.prototype.ba=function(i){i=i.target;const u=this.O;u&&Xt(i)==3?u.j():this.Y(i)},Qt.prototype.Y=function(i){try{if(i==this.g)t:{const U=Xt(this.g),ut=this.g.ya(),W=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||oo(this.g)))){this.K||U!=4||ut==7||(ut==8||W<=0?He(3):He(2)),Qr(this);var u=this.g.ca();this.X=u;var l=Hl(this);if(this.o=u==200,Gl(this.i,this.v,this.B,this.l,this.S,U,u),this.o){if(this.U&&!this.L){e:{if(this.g){var d,A=this.g;if((d=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(d)){var v=d;break e}}v=null}if(i=v)Pe(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wr(this,i);else{this.o=!1,this.m=3,It(12),he(this),Ze(this);break t}}if(this.R){i=!0;let ht;for(;!this.K&&this.C<l.length;)if(ht=Xl(this,l),ht==Gr){U==4&&(this.m=4,It(14),i=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Ui){this.m=4,It(15),Pe(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else Pe(this.i,this.l,ht,null),Wr(this,ht);if(Bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||l.length!=0||this.h.h||(this.m=1,It(16),i=!1),this.o=this.o&&i,!i)Pe(this.i,this.l,l,"[Invalid Chunked Response]"),he(this),Ze(this);else if(l.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),ns(b),b.P=!0,It(11))}}else Pe(this.i,this.l,l,null),Wr(this,l);U==4&&he(this),this.o&&!this.K&&(U==4?mo(this.j,this):(this.o=!1,Un(this)))}else cc(this.g),u==400&&l.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),he(this),Ze(this)}}}catch{}finally{}};function Hl(i){if(!Bi(i))return i.g.la();const u=oo(i.g);if(u==="")return"";let l="";const d=u.length,A=Xt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return he(i),Ze(i),"";i.h.i=new a.TextDecoder}for(let v=0;v<d;v++)i.h.h=!0,l+=i.h.i.decode(u[v],{stream:!(A&&v==d-1)});return u.length=0,i.h.g+=l,i.C=0,i.h.g}function Bi(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Xl(i,u){var l=i.C,d=u.indexOf(`
`,l);return d==-1?Gr:(l=Number(u.substring(l,d)),isNaN(l)?Ui:(d+=1,d+l>u.length?Gr:(u=u.slice(d,d+l),i.C=d+l,u)))}Qt.prototype.cancel=function(){this.K=!0,he(this)};function Un(i){i.T=Date.now()+i.H,ji(i,i.H)}function ji(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Xe(f(i.aa,i),u)}function Qr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Qt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Kl(this.i,this.B),this.M!=2&&(He(),It(17)),he(this),this.m=2,Ze(this)):ji(this,this.T-i)};function Ze(i){i.j.I==0||i.K||mo(i.j,i)}function he(i){Qr(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,Ci(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function Wr(i,u){try{var l=i.j;if(l.I!=0&&(l.g==i||Hr(l.h,i))){if(!i.L&&Hr(l.h,i)&&l.I==3){try{var d=l.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Gn(l),zn(l);else break t;es(l),It(18)}}else l.xa=A[1],0<l.xa-l.K&&A[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Xe(f(l.Va,l),6e3));Gi(l.h)<=1&&l.ta&&(l.ta=void 0)}else de(l,11)}else if((i.L||l.g==i)&&Gn(l),!g(u))for(A=l.Ba.g.parse(u),u=0;u<A.length;u++){let W=A[u];const ht=W[0];if(!(ht<=l.K))if(l.K=ht,W=W[1],l.I==2)if(W[0]=="c"){l.M=W[1],l.ba=W[2];const kt=W[3];kt!=null&&(l.ka=kt,l.j.info("VER="+l.ka));const me=W[4];me!=null&&(l.za=me,l.j.info("SVER="+l.za));const Yt=W[5];Yt!=null&&typeof Yt=="number"&&Yt>0&&(d=1.5*Yt,l.O=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Jt=i.g;if(Jt){const Qn=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qn){var v=d.h;v.g||Qn.indexOf("spdy")==-1&&Qn.indexOf("quic")==-1&&Qn.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Xr(v,v.h),v.h=null))}if(d.G){const rs=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;rs&&(d.wa=rs,X(d.J,d.G,rs))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),d=l;var b=i;if(d.na=_o(d,d.L?d.ba:null,d.W),b.L){Ki(d.h,b);var U=b,ut=d.O;ut&&(U.H=ut),U.D&&(Qr(U),Un(U)),d.g=b}else ho(d);l.i.length>0&&$n(l)}else W[0]!="stop"&&W[0]!="close"||de(l,7);else l.I==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?de(l,7):ts(l):W[0]!="noop"&&l.l&&l.l.qa(W),l.A=0)}}He(4)}catch{}}var Yl=class{constructor(i,u){this.g=i,this.map=u}};function zi(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $i(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Gi(i){return i.h?1:i.g?i.g.size:0}function Hr(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Xr(i,u){i.g?i.g.add(u):i.h=u}function Ki(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}zi.prototype.cancel=function(){if(this.i=Qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Qi(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.G);return u}return S(i.i)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jl(i,u){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const d=i[l].indexOf("=");let A,v=null;d>=0?(A=i[l].substring(0,d),v=i[l].substring(d+1)):A=i[l],u(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Wt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof Wt?(this.l=i.l,tn(this,i.j),this.o=i.o,this.g=i.g,en(this,i.u),this.h=i.h,Yr(this,to(i.i)),this.m=i.m):i&&(u=String(i).match(Wi))?(this.l=!1,tn(this,u[1]||"",!0),this.o=nn(u[2]||""),this.g=nn(u[3]||"",!0),en(this,u[4]),this.h=nn(u[5]||"",!0),Yr(this,u[6]||"",!0),this.m=nn(u[7]||"")):(this.l=!1,this.i=new sn(null,this.l))}Wt.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(rn(u,Hi,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(rn(u,Hi,!0),"@"),i.push(Je(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(rn(l,l.charAt(0)=="/"?ec:tc,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",rn(l,rc)),i.join("")},Wt.prototype.resolve=function(i){const u=Dt(this);let l=!!i.j;l?tn(u,i.j):l=!!i.o,l?u.o=i.o:l=!!i.g,l?u.g=i.g:l=i.u!=null;var d=i.h;if(l)en(u,i.u);else if(l=!!i.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var A=u.h.lastIndexOf("/");A!=-1&&(d=u.h.slice(0,A+1)+d)}if(A=d,A==".."||A==".")d="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){d=A.lastIndexOf("/",0)==0,A=A.split("/");const v=[];for(let b=0;b<A.length;){const U=A[b++];U=="."?d&&b==A.length&&v.push(""):U==".."?((v.length>1||v.length==1&&v[0]!="")&&v.pop(),d&&b==A.length&&v.push("")):(v.push(U),d=!0)}d=v.join("/")}else d=A}return l?u.h=d:l=i.i.toString()!=="",l?Yr(u,to(i.i)):l=!!i.m,l&&(u.m=i.m),u};function Dt(i){return new Wt(i)}function tn(i,u,l){i.j=l?nn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function en(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function Yr(i,u,l){u instanceof sn?(i.i=u,sc(i.i,i.l)):(l||(u=rn(u,nc)),i.i=new sn(u,i.l))}function X(i,u,l){i.i.set(u,l)}function qn(i){return X(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function nn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function rn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Zl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Zl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Hi=/[#\/\?@]/g,tc=/[#\?:]/g,ec=/[#\?]/g,nc=/[#\?@]/g,rc=/#/g;function sn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function fe(i){i.g||(i.g=new Map,i.h=0,i.i&&Jl(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=sn.prototype,n.add=function(i,u){fe(this),this.i=null,i=Ve(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function Xi(i,u){fe(i),u=Ve(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Yi(i,u){return fe(i),u=Ve(i,u),i.g.has(u)}n.forEach=function(i,u){fe(this),this.g.forEach(function(l,d){l.forEach(function(A){i.call(u,A,d,this)},this)},this)};function Ji(i,u){fe(i);let l=[];if(typeof u=="string")Yi(i,u)&&(l=l.concat(i.g.get(Ve(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)l=l.concat(i[u]);return l}n.set=function(i,u){return fe(this),this.i=null,i=Ve(this,i),Yi(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=Ji(this,i),i.length>0?String(i[0]):u):u};function Zi(i,u,l){Xi(i,u),l.length>0&&(i.i=null,i.g.set(Ve(i,u),S(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var l=u[d];const A=Je(l);l=Ji(this,l);for(let v=0;v<l.length;v++){let b=A;l[v]!==""&&(b+="="+Je(l[v])),i.push(b)}}return this.i=i.join("&")};function to(i){const u=new sn;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function Ve(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function sc(i,u){u&&!i.j&&(fe(i),i.i=null,i.g.forEach(function(l,d){const A=d.toLowerCase();d!=A&&(Xi(this,d),Zi(this,A,l))},i)),i.j=u}function ic(i,u){const l=new Ye;if(a.Image){const d=new Image;d.onload=m(Ht,l,"TestLoadImage: loaded",!0,u,d),d.onerror=m(Ht,l,"TestLoadImage: error",!1,u,d),d.onabort=m(Ht,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=m(Ht,l,"TestLoadImage: timeout",!1,u,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function oc(i,u){const l=new Ye,d=new AbortController,A=setTimeout(()=>{d.abort(),Ht(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(v=>{clearTimeout(A),v.ok?Ht(l,"TestPingServer: ok",!0,u):Ht(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Ht(l,"TestPingServer: error",!1,u)})}function Ht(i,u,l,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(l)}catch{}}function ac(){this.g=new zl}function Jr(i){this.i=i.Sb||null,this.h=i.ab||!1}T(Jr,bi),Jr.prototype.g=function(){return new Bn(this.i,this.h)};function Bn(i,u){gt.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Bn,gt),n=Bn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,an(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,on(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;eo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function eo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?on(this):an(this),this.readyState==3&&eo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,on(this))},n.Na=function(i){this.g&&(this.response=i,on(this))},n.ga=function(){this.g&&on(this)};function on(i){i.readyState=4,i.l=null,i.j=null,i.B=null,an(i)}n.setRequestHeader=function(i,u){this.A.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function an(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function no(i){let u="";return On(i,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function Zr(i,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=no(l),typeof i=="string"?l!=null&&Je(l):X(i,u,l))}function tt(i){gt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(tt,gt);var uc=/^https?$/i,lc=["POST","PUT"];n=tt.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Li.g(),this.g.onreadystatechange=R(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(v){ro(this,v);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)l.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const v of d.keys())l.set(v,d.get(v));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(v=>v.toLowerCase()=="content-type"),A=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(lc,u,void 0)>=0)||d||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,b]of l)this.g.setRequestHeader(v,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(v){ro(this,v)}};function ro(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,so(i),jn(i)}function so(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Et(this,"complete"),Et(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),tt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?io(this):this.Xa())},n.Xa=function(){io(this)};function io(i){if(i.h&&typeof o<"u"){if(i.v&&Xt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Et(i,"readystatechange"),Xt(i)==4){i.h=!1;try{const v=i.ca();t:switch(v){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=v===0){let b=String(i.D).match(Wi)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),d=!uc.test(b?b.toLowerCase():"")}l=d}if(l)Et(i,"complete"),Et(i,"success");else{i.o=6;try{var A=Xt(i)>2?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.ca()+"]",so(i)}}finally{jn(i)}}}}function jn(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,u||Et(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Xt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Xt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),jl(u)}};function oo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function cc(i){const u={};i=(i.g&&Xt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(g(i[d]))continue;var l=Wl(i[d]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const v=u[A]||[];u[A]=v,v.push(l)}Ml(u,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function un(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function ao(i){this.za=0,this.i=[],this.j=new Ye,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=un("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=un("baseRetryDelayMs",5e3,i),this.Za=un("retryDelaySeedMs",1e4,i),this.Ta=un("forwardChannelMaxRetries",2,i),this.va=un("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new zi(i&&i.concurrentRequestLimit),this.Ba=new ac,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ao.prototype,n.ka=8,n.I=1,n.connect=function(i,u,l,d){It(0),this.W=i,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.J=_o(this,null,this.W),$n(this)};function ts(i){if(uo(i),i.I==3){var u=i.V++,l=Dt(i.J);if(X(l,"SID",i.M),X(l,"RID",u),X(l,"TYPE","terminate"),ln(i,l),u=new Qt(i,i.j,u),u.M=2,u.A=qn(Dt(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=u.A,l=!0),l||(u.g=yo(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Un(u)}go(i)}function zn(i){i.g&&(ns(i),i.g.cancel(),i.g=null)}function uo(i){zn(i),i.v&&(a.clearTimeout(i.v),i.v=null),Gn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function $n(i){if(!$i(i.h)&&!i.m){i.m=!0;var u=i.Ea;ct||p(),J||(ct(),J=!0),E.add(u,i),i.D=0}}function hc(i,u){return Gi(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Xe(f(i.Ea,i,u),po(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const A=new Qt(this,this.j,i);let v=this.o;if(this.U&&(v?(v=Ei(v),Ai(v,this.U)):v=this.U),this.u!==null||this.R||(A.J=v,v=null),this.S)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=co(this,A,u),l=Dt(this.J),X(l,"RID",i),X(l,"CVER",22),this.G&&X(l,"X-HTTP-Session-Id",this.G),ln(this,l),v&&(this.R?u="headers="+Je(no(v))+"&"+u:this.u&&Zr(l,this.u,v)),Xr(this.h,A),this.Ra&&X(l,"TYPE","init"),this.S?(X(l,"$req",u),X(l,"SID","null"),A.U=!0,Kr(A,l,null)):Kr(A,l,u),this.I=2}}else this.I==3&&(i?lo(this,i):this.i.length==0||$i(this.h)||lo(this))};function lo(i,u){var l;u?l=u.l:l=i.V++;const d=Dt(i.J);X(d,"SID",i.M),X(d,"RID",l),X(d,"AID",i.K),ln(i,d),i.u&&i.o&&Zr(d,i.u,i.o),l=new Qt(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),u&&(i.i=u.G.concat(i.i)),u=co(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Xr(i.h,l),Kr(l,d,u)}function ln(i,u){i.H&&On(i.H,function(l,d){X(u,d,l)}),i.l&&On({},function(l,d){X(u,d,l)})}function co(i,u,l){l=Math.min(i.i.length,l);const d=i.l?f(i.l.Ka,i.l,i):null;t:{var A=i.i;let U=-1;for(;;){const ut=["count="+l];U==-1?l>0?(U=A[0].g,ut.push("ofs="+U)):U=0:ut.push("ofs="+U);let W=!0;for(let ht=0;ht<l;ht++){var v=A[ht].g;const kt=A[ht].map;if(v-=U,v<0)U=Math.max(0,A[ht].g-100),W=!1;else try{v="req"+v+"_"||"";try{var b=kt instanceof Map?kt:Object.entries(kt);for(const[me,Yt]of b){let Jt=Yt;c(Yt)&&(Jt=Br(Yt)),ut.push(v+me+"="+encodeURIComponent(Jt))}}catch(me){throw ut.push(v+"type="+encodeURIComponent("_badmap")),me}}catch{d&&d(kt)}}if(W){b=ut.join("&");break t}}b=void 0}return i=i.i.splice(0,l),u.G=i,b}function ho(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;ct||p(),J||(ct(),J=!0),E.add(u,i),i.A=0}}function es(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Xe(f(i.Da,i),po(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,fo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Xe(f(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),zn(this),fo(this))};function ns(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function fo(i){i.g=new Qt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=Dt(i.na);X(u,"RID","rpc"),X(u,"SID",i.M),X(u,"AID",i.K),X(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&X(u,"TO",i.ia),X(u,"TYPE","xmlhttp"),ln(i,u),i.u&&i.o&&Zr(u,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=qn(Dt(u)),l.u=null,l.R=!0,qi(l,i)}n.Va=function(){this.C!=null&&(this.C=null,zn(this),es(this),It(19))};function Gn(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function mo(i,u){var l=null;if(i.g==u){Gn(i),ns(i),i.g=null;var d=2}else if(Hr(i.h,u))l=u.G,Ki(i.h,u),d=1;else return;if(i.I!=0){if(u.o)if(d==1){l=u.u?u.u.length:0,u=Date.now()-u.F;var A=i.D;d=Ln(),Et(d,new xi(d,l)),$n(i)}else ho(i);else if(A=u.m,A==3||A==0&&u.X>0||!(d==1&&hc(i,u)||d==2&&es(i)))switch(l&&l.length>0&&(u=i.h,u.i=u.i.concat(l)),A){case 1:de(i,5);break;case 4:de(i,10);break;case 3:de(i,6);break;default:de(i,2)}}}function po(i,u){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*u}function de(i,u){if(i.j.info("Error code "+u),u==2){var l=f(i.bb,i),d=i.Ua;const A=!d;d=new Wt(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||tn(d,"https"),qn(d),A?ic(d.toString(),l):oc(d.toString(),l)}else It(2);i.I=0,i.l&&i.l.pa(u),go(i),uo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function go(i){if(i.I=0,i.ja=[],i.l){const u=Qi(i.h);(u.length!=0||i.i.length!=0)&&(k(i.ja,u),k(i.ja,i.i),i.h.i.length=0,S(i.i),i.i.length=0),i.l.oa()}}function _o(i,u,l){var d=l instanceof Wt?Dt(l):new Wt(l);if(d.g!="")u&&(d.g=u+"."+d.g),en(d,d.u);else{var A=a.location;d=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const v=new Wt(null);d&&tn(v,d),u&&(v.g=u),A&&en(v,A),l&&(v.h=l),d=v}return l=i.G,u=i.wa,l&&u&&X(d,l,u),X(d,"VER",i.ka),ln(i,d),d}function yo(i,u,l){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new tt(new Jr({ab:l})):new tt(i.ma),u.Fa(i.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function To(){}n=To.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Kn(){}Kn.prototype.g=function(i,u){return new Rt(i,u)};function Rt(i,u){gt.call(this),this.g=new ao(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!g(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Se(this)}T(Rt,gt),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){ts(this.g)},Rt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=Br(i),i=l);u.i.push(new Yl(u.Ya++,i)),u.I==3&&$n(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,ts(this.g),delete this.g,Rt.Z.N.call(this)};function Eo(i){jr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}T(Eo,jr);function Io(){zr.call(this),this.status=1}T(Io,zr);function Se(i){this.g=i}T(Se,To),Se.prototype.ra=function(){Et(this.g,"a")},Se.prototype.qa=function(i){Et(this.g,new Eo(i))},Se.prototype.pa=function(i){Et(this.g,new Io)},Se.prototype.oa=function(){Et(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,ja=function(){return new Kn},Ba=function(){return Ln()},qa=ce,hs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fn.NO_ERROR=0,Fn.TIMEOUT=8,Fn.HTTP_ERROR=6,er=Fn,Mi.COMPLETE="complete",Ua=Mi,Ni.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",gt.prototype.listen=gt.prototype.J,hn=Ni,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,Fa=tt}).apply(typeof Wn<"u"?Wn:typeof self<"u"?self:typeof window<"u"?window:{});const wo="@firebase/firestore",vo="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new fc("@firebase/firestore");function Ce(){return ye.logLevel}function D(n,...t){if(ye.logLevel<=jt.DEBUG){const e=t.map(Ns);ye.debug(`Firestore (${Be}): ${n}`,...e)}}function $t(n,...t){if(ye.logLevel<=jt.ERROR){const e=t.map(Ns);ye.error(`Firestore (${Be}): ${n}`,...e)}}function xe(n,...t){if(ye.logLevel<=jt.WARN){const e=t.map(Ns);ye.warn(`Firestore (${Be}): ${n}`,...e)}}function Ns(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,za(n,r,e)}function za(n,t,e){let r=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw $t(r),new Error(r)}function Q(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||za(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ca{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class Tc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ec{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new $a(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class Ic{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ac{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Ic(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ro{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wc{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sa(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ro(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ro(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function fs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return ss(s)===ss(o)?j(s,o):ss(s)?1:-1}return j(n.length,t.length)}const Rc=55296,Pc=57343;function ss(n){const t=n.charCodeAt(0);return t>=Rc&&t<=Pc}function Me(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="__name__";class Ot{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ot.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ot?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ot.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Ot.isNumericId(t),s=Ot.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ot.extractNumericId(t).compare(Ot.extractNumericId(e)):fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class H extends Ot{construct(t,e,r){return new H(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Vc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Ot{construct(t,e,r){return new mt(t,e,r)}static isValidIdentifier(t){return Vc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Po}static keyField(){return new mt([Po])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(H.fromString(t))}static fromName(t){return new x(H.fromString(t).popFirst(5))}static empty(){return new x(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new H(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Sc(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Vo(n){if(!x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function So(n){if(x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ka(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Tr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Gt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Tr(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,t){const e={typeString:n};return t&&(e.value=t),e}function Sn(n,t){if(!Ka(n))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=-62135596800,bo=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*bo);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Co)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bo}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Sn(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Co;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ot("string",Y._jsonSchemaVersion),seconds:ot("number"),nanoseconds:ot("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new Y(0,0))}static max(){return new L(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=-1;function Cc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new re(s,x.empty(),t)}function bc(n){return new re(n.readTime,n.key,En)}class re{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new re(L.min(),x.empty(),En)}static max(){return new re(L.max(),x.empty(),En)}}function Nc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Dc)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new V((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Oc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ze(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Er.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=-1;function Ir(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function xc(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="";function Mc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=No(t)),t=Lc(n.get(e),t);return No(t)}function Lc(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Qa:e+="";break;default:e+=o}}return e}function No(n){return n+Qa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ie(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hn(this.root,t,this.comparator,!0)}}class Hn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new dt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ko(this.data.getIterator())}getIteratorFrom(t){return new ko(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class ko{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new lt(mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ha("Invalid base64 string: "+o):o}}(t);return new pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Fc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(n){if(Q(!!n,39018),typeof n=="string"){let t=0;const e=Fc.exec(n);if(Q(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ie(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="server_timestamp",Ya="__type__",Ja="__previous_value__",Za="__local_write_time__";function Os(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ya])==null?void 0:r.stringValue)===Xa}function Ar(n){const t=n.mapValue.fields[Ja];return Os(t)?Ar(t):t}function In(n){const t=se(n.mapValue.fields[Za].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e,r,s,o,a,c,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const lr="(default)";class An{constructor(t,e){this.projectId=t,this.database=e||lr}static empty(){return new An("","")}get isDefaultDatabase(){return this.database===lr}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="__type__",qc="__max__",Xn={mapValue:{}},eu="__vector__",cr="value";function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Os(n)?4:jc(n)?9007199254740991:Bc(n)?10:11:M(28295,{value:n})}function Bt(n,t){if(n===t)return!0;const e=oe(n);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return In(n).isEqual(In(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=se(s.timestampValue),c=se(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ie(s.bytesValue).isEqual(ie(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),c=rt(o.doubleValue);return a===c?ur(a)===ur(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Me(n.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Do(a)!==Do(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Bt(a[h],c[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function wn(n,t){return(n.values||[]).find(e=>Bt(e,t))!==void 0}function Le(n,t){if(n===t)return 0;const e=oe(n),r=oe(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Oo(n.timestampValue,t.timestampValue);case 4:return Oo(In(n),In(t));case 5:return fs(n.stringValue,t.stringValue);case 6:return function(o,a){const c=ie(o),h=ie(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=j(c[f],h[f]);if(m!==0)return m}return j(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=j(rt(o.latitude),rt(a.latitude));return c!==0?c:j(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return xo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var R,S,k,O;const c=o.fields||{},h=a.fields||{},f=(R=c[cr])==null?void 0:R.arrayValue,m=(S=h[cr])==null?void 0:S.arrayValue,T=j(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((O=m==null?void 0:m.values)==null?void 0:O.length)||0);return T!==0?T:xo(f,m)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Xn.mapValue&&a===Xn.mapValue)return 0;if(o===Xn.mapValue)return 1;if(a===Xn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const R=fs(h[T],m[T]);if(R!==0)return R;const S=Le(c[h[T]],f[m[T]]);if(S!==0)return S}return j(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function Oo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=se(n),r=se(t),s=j(e.seconds,r.seconds);return s!==0?s:j(e.nanos,r.nanos)}function xo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Le(e[s],r[s]);if(o)return o}return j(e.length,r.length)}function Fe(n){return ds(n)}function ds(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=se(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ie(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ds(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ds(e.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function nr(n){switch(oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ar(n);return t?16+nr(t):16;case 5:return 2*n.stringValue.length;case 6:return ie(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+nr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ie(r.fields,(o,a)=>{s+=o.length+nr(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function Mo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ms(n){return!!n&&"integerValue"in n}function xs(n){return!!n&&"arrayValue"in n}function Lo(n){return!!n&&"nullValue"in n}function Fo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rr(n){return!!n&&"mapValue"in n}function Bc(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[tu])==null?void 0:r.stringValue)===eu}function pn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ie(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=pn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=pn(n.arrayValue.values[e]);return t}return{...n}}function jc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===qc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(e)}setAll(t){let e=mt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=pn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ie(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Vt(pn(this.value))}}function nu(n){const t=[];return Ie(n.fields,(e,r)=>{const s=new mt([e]);if(rr(r)){const o=nu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,L.min(),L.min(),L.min(),Vt.empty(),0)}static newFoundDocument(t,e,r,s){return new Tt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,L.min(),L.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,L.min(),L.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Uo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Le(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e="asc"){this.field=t,this.dir=e}}function zc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{}class it extends ru{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Gc(t,e,r):e==="array-contains"?new Wc(t,r):e==="in"?new Hc(t,r):e==="not-in"?new Xc(t,r):e==="array-contains-any"?new Yc(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Kc(t,r):new Qc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Le(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends ru{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Nt(t,e)}matches(t){return su(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function su(n){return n.op==="and"}function iu(n){return $c(n)&&su(n)}function $c(n){for(const t of n.filters)if(t instanceof Nt)return!1;return!0}function ps(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Fe(n.value);if(iu(n))return n.filters.map(t=>ps(t)).join(",");{const t=n.filters.map(e=>ps(e)).join(",");return`${n.op}(${t})`}}function ou(n,t){return n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&Bt(r.value,s.value)}(n,t):n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&ou(a,s.filters[c]),!0):!1}(n,t):void M(19439)}function au(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Fe(e.value)}`}(n):n instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(au).join(" ,")+"}"}(n):"Filter"}class Gc extends it{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Kc extends it{constructor(t,e){super(t,"in",e),this.keys=uu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Qc extends it{constructor(t,e){super(t,"not-in",e),this.keys=uu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function uu(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class Wc extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xs(e)&&wn(e.arrayValue,this.value)}}class Hc extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wn(this.value.arrayValue,e)}}class Xc extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!wn(this.value.arrayValue,e)}}class Yc extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>wn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function Bo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Jc(n,t,e,r,s,o,a)}function Ms(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ps(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ir(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Fe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Fe(r)).join(",")),t.Te=e}return t.Te}function Ls(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!zc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ou(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qo(n.startAt,t.startAt)&&qo(n.endAt,t.endAt)}function gs(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Zc(n,t,e,r,s,o,a,c){return new $e(n,t,e,r,s,o,a,c)}function Fs(n){return new $e(n)}function jo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lu(n){return n.collectionGroup!==null}function gn(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new lt(mt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new vn(o,r))}),e.has(mt.keyField().canonicalString())||t.Ie.push(new vn(mt.keyField(),r))}return t.Ie}function Mt(n){const t=F(n);return t.Ee||(t.Ee=th(t,gn(n))),t.Ee}function th(n,t){if(n.limitType==="F")return Bo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new vn(s.field,o)});const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return Bo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function _s(n,t){const e=n.filters.concat([t]);return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ys(n,t,e){return new $e(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function wr(n,t){return Ls(Mt(n),Mt(t))&&n.limitType===t.limitType}function cu(n){return`${Ms(Mt(n))}|lt:${n.limitType}`}function be(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>au(s)).join(", ")}]`),Ir(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Fe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Fe(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function vr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of gn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const f=Uo(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,gn(r),s)||r.endAt&&!function(a,c,h){const f=Uo(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,gn(r),s))}(n,t)}function eh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hu(n){return(t,e)=>{let r=!1;for(const s of gn(n)){const o=nh(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function nh(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Le(h,f):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ie(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Wa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Z(x.comparator);function Kt(){return rh}const fu=new Z(x.comparator);function fn(...n){let t=fu;for(const e of n)t=t.insert(e.key,e);return t}function du(n){let t=fu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function pe(){return _n()}function mu(){return _n()}function _n(){return new Ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const sh=new Z(x.comparator),ih=new lt(x.comparator);function z(...n){let t=ih;for(const e of n)t=t.add(e);return t}const oh=new lt(j);function ah(){return oh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function pu(n){return{integerValue:""+n}}function uh(n,t){return xc(t)?pu(t):Us(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this._=void 0}}function lh(n,t,e){return n instanceof Rn?function(s,o){const a={fields:{[Ya]:{stringValue:Xa},[Za]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Os(o)&&(o=Ar(o)),o&&(a.fields[Ja]=o),{mapValue:a}}(e,t):n instanceof Pn?_u(n,t):n instanceof Vn?yu(n,t):function(s,o){const a=gu(s,o),c=zo(a)+zo(s.Ae);return ms(a)&&ms(s.Ae)?pu(c):Us(s.serializer,c)}(n,t)}function ch(n,t,e){return n instanceof Pn?_u(n,t):n instanceof Vn?yu(n,t):e}function gu(n,t){return n instanceof fr?function(r){return ms(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Rn extends Rr{}class Pn extends Rr{constructor(t){super(),this.elements=t}}function _u(n,t){const e=Tu(t);for(const r of n.elements)e.some(s=>Bt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Vn extends Rr{constructor(t){super(),this.elements=t}}function yu(n,t){let e=Tu(t);for(const r of n.elements)e=e.filter(s=>!Bt(s,r));return{arrayValue:{values:e}}}class fr extends Rr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function zo(n){return rt(n.integerValue||n.doubleValue)}function Tu(n){return xs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.field=t,this.transform=e}}function fh(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Pn&&s instanceof Pn||r instanceof Vn&&s instanceof Vn?Me(r.elements,s.elements,Bt):r instanceof fr&&s instanceof fr?Bt(r.Ae,s.Ae):r instanceof Rn&&s instanceof Rn}(n.transform,t.transform)}class dh{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pr{}function Eu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new qs(n.key,bt.none()):new Cn(n.key,n.data,bt.none());{const e=n.data,r=Vt.empty();let s=new lt(mt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new we(n.key,r,new Ct(s.toArray()),bt.none())}}function mh(n,t,e){n instanceof Cn?function(s,o,a){const c=s.value.clone(),h=Go(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof we?function(s,o,a){if(!sr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Go(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Iu(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function yn(n,t,e,r){return n instanceof Cn?function(o,a,c,h){if(!sr(o.precondition,a))return c;const f=o.value.clone(),m=Ko(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof we?function(o,a,c,h){if(!sr(o.precondition,a))return c;const f=Ko(o.fieldTransforms,h,a),m=a.data;return m.setAll(Iu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,c){return sr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function ph(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=gu(r.transform,s||null);o!=null&&(e===null&&(e=Vt.empty()),e.set(r.field,o))}return e||null}function $o(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Me(r,s,(o,a)=>fh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Cn extends Pr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class we extends Pr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Iu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Go(n,t,e){const r=new Map;Q(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,ch(a,c,e[s]))}return r}function Ko(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,lh(o,a,t))}return r}class qs extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gh extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&mh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=mu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Eu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,(e,r)=>$o(e,r))&&Me(this.baseMutations,t.baseMutations,(e,r)=>$o(e,r))}}class Bs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return sh}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Bs(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,$;function Eh(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Au(n){if(n===void 0)return $t("GRPC error has no .code"),P.UNKNOWN;switch(n){case st.OK:return P.OK;case st.CANCELLED:return P.CANCELLED;case st.UNKNOWN:return P.UNKNOWN;case st.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case st.INTERNAL:return P.INTERNAL;case st.UNAVAILABLE:return P.UNAVAILABLE;case st.UNAUTHENTICATED:return P.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case st.NOT_FOUND:return P.NOT_FOUND;case st.ALREADY_EXISTS:return P.ALREADY_EXISTS;case st.PERMISSION_DENIED:return P.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case st.ABORTED:return P.ABORTED;case st.OUT_OF_RANGE:return P.OUT_OF_RANGE;case st.UNIMPLEMENTED:return P.UNIMPLEMENTED;case st.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}($=st||(st={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=new ee([4294967295,4294967295],0);function Qo(n){const t=Ih().encode(n),e=new La;return e.update(t),new Uint8Array(e.digest())}function Wo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,r],0),new ee([s,o],0)]}class js{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new dn(`Invalid padding: ${e}`);if(r<0)throw new dn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new dn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new dn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ee.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ee.fromNumber(r)));return s.compare(Ah)===1&&(s=new ee([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Qo(t),[r,s]=Wo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new js(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=Qo(t),[r,s]=Wo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vr(L.min(),s,new Z(j),Kt(),z())}}class bn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new bn(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class wu{constructor(t,e){this.targetId=t,this.Ce=e}}class vu{constructor(t,e,r=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ho{constructor(){this.ve=0,this.Fe=Xo(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=z(),e=z(),r=z();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new bn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Xo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class wh{constructor(t){this.Ge=t,this.ze=new Map,this.je=Kt(),this.Je=Yn(),this.He=Yn(),this.Ye=new Z(j)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(gs(o))if(r===0){const a=new x(o.path);this.et(e,a,Tt.newNoDocument(a,L.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),h=c?this.ct(c,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=ie(r).toUint8Array()}catch(h){if(h instanceof Ha)return xe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new js(a,s,o)}catch(h){return xe(h instanceof dn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const c=this.ot(a);if(c){if(o.current&&gs(c.target)){const h=new x(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Tt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let r=z();this.He.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new Vr(t,e,this.Ye,this.je,r);return this.je=Kt(),this.Je=Yn(),this.He=Yn(),this.Ye=new Z(j),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Ho,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new lt(j),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new lt(j),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ho),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Yn(){return new Z(x.comparator)}function Xo(){return new Z(x.comparator)}const vh={asc:"ASCENDING",desc:"DESCENDING"},Rh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ph={and:"AND",or:"OR"};class Vh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ts(n,t){return n.useProto3Json||Ir(t)?t:{value:t}}function dr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ru(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Sh(n,t){return dr(n,t.toTimestamp())}function Lt(n){return Q(!!n,49232),L.fromTimestamp(function(e){const r=se(e);return new Y(r.seconds,r.nanos)}(n))}function zs(n,t){return Es(n,t).canonicalString()}function Es(n,t){const e=function(s){return new H(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Pu(n){const t=H.fromString(n);return Q(Nu(t),10190,{key:t.toString()}),t}function Is(n,t){return zs(n.databaseId,t.path)}function is(n,t){const e=Pu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Su(e))}function Vu(n,t){return zs(n.databaseId,t)}function Ch(n){const t=Pu(n);return t.length===4?H.emptyPath():Su(t)}function As(n){return new H(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Su(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yo(n,t,e){return{name:Is(n,t),fields:e.value.mapValue.fields}}function bh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(Q(m===void 0||typeof m=="string",58123),pt.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),pt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const m=f.code===void 0?P.UNKNOWN:Au(f.code);return new N(m,f.message||"")}(a);e=new vu(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=is(n,r.document.name),o=Lt(r.document.updateTime),a=r.document.createTime?Lt(r.document.createTime):L.min(),c=new Vt({mapValue:{fields:r.document.fields}}),h=Tt.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];e=new ir(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=is(n,r.document),o=r.readTime?Lt(r.readTime):L.min(),a=Tt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ir([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=is(n,r.document),o=r.removedTargetIds||[];e=new ir([],o,s,null)}else{if(!("filter"in t))return M(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Th(s,o),c=r.targetId;e=new wu(c,a)}}return e}function Nh(n,t){let e;if(t instanceof Cn)e={update:Yo(n,t.key,t.value)};else if(t instanceof qs)e={delete:Is(n,t.key)};else if(t instanceof we)e={update:Yo(n,t.key,t.data),updateMask:qh(t.fieldMask)};else{if(!(t instanceof gh))return M(16599,{Vt:t.type});e={verify:Is(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw M(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Sh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function Dh(n,t){return n&&n.length>0?(Q(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Lt(s.updateTime):Lt(o);return a.isEqual(L.min())&&(a=Lt(o)),new dh(a,s.transformResults||[])}(e,t))):[]}function kh(n,t){return{documents:[Vu(n,t.path)]}}function Oh(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Vu(n,s);const o=function(f){if(f.length!==0)return bu(Nt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:Ne(R.field),direction:Lh(R.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ts(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ft:e,parent:s}}function xh(n){let t=Ch(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const R=Cu(T);return R instanceof Nt&&iu(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(R=>function(k){return new vn(De(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(T){let R;return R=typeof T=="object"?T.value:T,Ir(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(T){const R=!!T.before,S=T.values||[];return new hr(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const R=!T.before,S=T.values||[];return new hr(S,R)}(e.endAt)),Zc(t,s,a,o,c,"F",h,f)}function Mh(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=De(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=De(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=De(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=De(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return it.create(De(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(r=>Cu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function Lh(n){return vh[n]}function Fh(n){return Rh[n]}function Uh(n){return Ph[n]}function Ne(n){return{fieldPath:n.canonicalString()}}function De(n){return mt.fromServerFormat(n.fieldPath)}function bu(n){return n instanceof it?function(e){if(e.op==="=="){if(Fo(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NAN"}};if(Lo(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fo(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NOT_NAN"}};if(Lo(e.value))return{unaryFilter:{field:Ne(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ne(e.field),op:Fh(e.op),value:e.value}}}(n):n instanceof Nt?function(e){const r=e.getFilters().map(s=>bu(s));return r.length===1?r[0]:{compositeFilter:{op:Uh(e.op),filters:r}}}(n):M(54877,{filter:n})}function qh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e,r,s,o=L.min(),a=L.min(),c=pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.yt=t}}function jh(n){const t=xh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ys(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.Cn=new $h}addToCollectionParentIndex(t,e){return this.Cn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(re.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class $h{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new lt(H.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new lt(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Du=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Du,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ue(0)}static cr(){return new Ue(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="LruGarbageCollector",Gh=1048576;function ta([n,t],[e,r]){const s=j(n,e);return s===0?j(t,r):s}class Kh{constructor(t){this.Ir=t,this.buffer=new lt(ta),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ta(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Qh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(Zo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ze(e)?D(Zo,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Vr(3e5)})}}class Wh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return V.resolve(Er.ce);const r=new Kh(e);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Jo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jo):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,o,a,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,c=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(f=Date.now(),Ce()<=jt.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function Hh(n,t){return new Wh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.changes=new Ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&yn(r.mutation,s,Ct.empty(),Y.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const s=pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=fn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=Kt();const a=_n(),c=function(){return _n()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof we)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),yn(m.mutation,f,m.mutation.getFieldMask(),Y.now())):a.set(f.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>c.set(f,new Yh(m,a.get(f)??null))),c))}recalculateAndSaveOverlays(t,e){const r=_n();let s=new Z((a,c)=>a-c),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Ct.empty();m=c.applyToLocalView(f,m),r.set(h,m);const T=(s.get(c.batchId)||z()).add(h);s=s.insert(c.batchId,T)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,T=mu();m.forEach(R=>{if(!o.has(R)){const S=Eu(e.get(R),r.get(R));S!==null&&T.set(R,S),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,T))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):V.resolve(pe());let c=En,h=o;return a.next(f=>V.forEach(f,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,z())).next(m=>({batchId:c,changes:du(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=fn();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const f=function(T,R){return new $e(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((T,R)=>{a=a.insert(T,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Tt.newInvalidDocument(m)))});let c=fn();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&yn(m.mutation,f,Ct.empty(),Y.now()),vr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return V.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:jh(s.bundledQuery),readTime:Lt(s.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.overlays=new Z(x.comparator),this.qr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pe();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=pe(),o=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Z((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=pe(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return V.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yh(e,r));let o=this.qr.get(e);o===void 0&&(o=z(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.Qr=new lt(ft.$r),this.Ur=new lt(ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new ft(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new x(new H([])),r=new ft(e,t),s=new ft(e,t+1),o=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new x(new H([])),r=new ft(e,t),s=new ft(e,t+1);let o=z();return this.Ur.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ft(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return x.comparator(t.key,e.key)||j(t.Yr,e.Yr)}static Kr(t,e){return j(t.Yr,e.Yr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new lt(ft.$r)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _h(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ft(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?ks:this.tr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(j);return e.forEach(s=>{const o=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],c=>{r=r.add(c.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new ft(new x(o),0);let c=new lt(j);return this.Zr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Yr)),!0)},a),V.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Q(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(e.mutations,s=>{const o=new ft(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new ft(e,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.ri=t,this.docs=function(){return new Z(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=Kt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Kt();const a=e.path,c=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Nc(bc(m),r)<=0||(s.has(m.key)||vr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}ii(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sf(this)}getSize(t){return V.resolve(this.size)}}class sf extends Xh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.persistence=t,this.si=new Ae(e=>Ms(e),Ls),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new $s,this.targetCount=0,this.ai=Ue.ur()}forEachTarget(t,e){return this.si.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),V.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Ue(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Pr(e),V.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e){this.ui={},this.overlays={},this.ci=new Er(0),this.li=!1,this.li=!0,this.hi=new ef,this.referenceDelegate=t(this),this.Pi=new of(this),this.indexManager=new zh,this.remoteDocumentCache=function(s){return new rf(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Bh(e),this.Ii=new Zh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new nf(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new af(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ai(t,e){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class af extends kc{constructor(t){super(),this.currentSequenceNumber=t}}class Gs{constructor(t){this.persistence=t,this.Ri=new $s,this.Vi=null}static mi(t){return new Gs(t)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=x.fromPath(r);return this.gi(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return V.or([()=>V.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class mr{constructor(t,e){this.persistence=t,this.pi=new Ae(r=>Mc(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Hh(this,e)}static mi(t,e){return new mr(t,e)}Ei(){}di(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return V.forEach(this.pi,(r,s)=>this.br(t,r,s).next(o=>o?V.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),V.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=nr(t.data.value)),e}br(t,e,r){return V.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=z(),s=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ks(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return mc()?8:Oc(pc())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ys(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new uf;return this.Ss(t,e,a).next(c=>{if(o.result=c,this.Vs)return this.bs(t,e,a,c.size)})}).next(()=>o.result)}bs(t,e,r,s){return r.documentReadCount<this.fs?(Ce()<=jt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",be(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(Ce()<=jt.DEBUG&&D("QueryEngine","Query:",be(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ce()<=jt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",be(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):V.resolve())}ys(t,e){if(jo(e))return V.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ys(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=z(...o);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Ds(e,c);return this.Cs(e,f,a,h.readTime)?this.ys(t,ys(e,null,"F")):this.vs(t,f,e,h)}))})))}ws(t,e,r,s){return jo(e)||s.isEqual(L.min())?V.resolve(null):this.ps.getDocuments(t,r).next(o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,s)?V.resolve(null):(Ce()<=jt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),be(e)),this.vs(t,a,e,Cc(s,En)).next(c=>c))})}Ds(t,e){let r=new lt(hu(t));return e.forEach((s,o)=>{vr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return Ce()<=jt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",be(e)),this.ps.getDocumentsMatchingQuery(t,e,re.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="LocalStore",cf=3e8;class hf{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new Z(j),this.xs=new Ae(o=>Ms(o),Ls),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function ff(n,t,e,r){return new hf(n,t,e,r)}async function Ou(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=z();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ls:f,removedBatchIds:a,addedBatchIds:c}))})})}function df(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const T=f.batch,R=T.keys();let S=V.resolve();return R.forEach(k=>{S=S.next(()=>m.getEntry(h,k)).next(O=>{const C=f.docVersions.get(k);Q(C!==null,48541),O.version.compareTo(C)<0&&(T.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),m.addEntry(O)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=z();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function xu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function mf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach((m,T)=>{const R=s.get(T);if(!R)return;c.push(e.Pi.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Pi.addMatchingKeys(o,m.addedDocuments,T)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?S=S.withResumeToken(pt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(T,S),function(O,C,G){return O.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=cf?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(R,S,m)&&c.push(e.Pi.updateTargetData(o,S))});let h=Kt(),f=z();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(pf(o,a,t.documentUpdates).next(m=>{h=m.ks,f=m.qs})),!r.isEqual(L.min())){const m=e.Pi.getLastRemoteSnapshotVersion(o).next(T=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return V.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ms=s,o))}function pf(n,t,e){let r=z(),s=z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Kt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):D(Qs,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{ks:a,qs:s}})}function gf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ks),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function _f(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Pi.getTargetData(r,t).next(o=>o?(s=o,V.resolve(s)):e.Pi.allocateTargetId(r).next(a=>(s=new te(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r})}async function ws(n,t,e){const r=F(n),s=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ze(a))throw a;D(Qs,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function ea(n,t,e){const r=F(n);let s=L.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const T=F(h),R=T.xs.get(m);return R!==void 0?V.resolve(T.Ms.get(R)):T.Pi.getTargetData(f,m)}(r,a,Mt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:z())).next(c=>(yf(r,eh(t),c),{documents:c,Qs:o})))}function yf(n,t,e){let r=n.Os.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(t,r)}class na{constructor(){this.activeTargetIds=ah()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tf{constructor(){this.Mo=new na,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new na,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="ConnectivityMonitor";class sa{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(ra,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(ra,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn=null;function vs(){return Jn===null?Jn=function(){return 268435456+Math.round(2147483648*Math.random())}():Jn++,"0x"+Jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="RestConnection",If={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Af{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===lr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,o){const a=vs(),c=this.zo(t,e.toUriEncodedString());D(os,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,o);const{host:f}=new URL(c),m=yr(f);return this.Jo(t,c,h,r,m).then(T=>(D(os,`Received RPC '${t}' ${a}: `,T),T),T=>{throw xe(os,`RPC '${t}' ${a} failed with error: `,T,"url: ",c,"request:",r),T})}Ho(t,e,r,s,o,a){return this.Go(t,e,r,s,o)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Be}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}zo(t,e){const r=If[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class vf extends Af{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=vs();return new Promise((c,h)=>{const f=new Fa;f.setWithCredentials(!0),f.listenOnce(Ua.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case er.NO_ERROR:const T=f.getResponseJson();D(_t,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),c(T);break;case er.TIMEOUT:D(_t,`RPC '${t}' ${a} timed out`),h(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case er.HTTP_ERROR:const R=f.getStatus();if(D(_t,`RPC '${t}' ${a} failed with status:`,R,"response text:",f.getResponseText()),R>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const O=function(G){const q=G.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(k.status);h(new N(O,k.message))}else h(new N(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(_t,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);D(_t,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,r,15)})}T_(t,e,r){const s=vs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ja(),c=Ba(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");D(_t,`Creating RPC '${t}' stream ${s}: ${m}`,h);const T=a.createWebChannel(m,h);this.I_(T);let R=!1,S=!1;const k=new wf({Yo:C=>{S?D(_t,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(R||(D(_t,`Opening RPC '${t}' stream ${s} transport.`),T.open(),R=!0),D(_t,`RPC '${t}' stream ${s} sending:`,C),T.send(C))},Zo:()=>T.close()}),O=(C,G,q)=>{C.listen(G,B=>{try{q(B)}catch(K){setTimeout(()=>{throw K},0)}})};return O(T,hn.EventType.OPEN,()=>{S||(D(_t,`RPC '${t}' stream ${s} transport opened.`),k.o_())}),O(T,hn.EventType.CLOSE,()=>{S||(S=!0,D(_t,`RPC '${t}' stream ${s} transport closed`),k.a_(),this.E_(T))}),O(T,hn.EventType.ERROR,C=>{S||(S=!0,xe(_t,`RPC '${t}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),k.a_(new N(P.UNAVAILABLE,"The operation could not be completed")))}),O(T,hn.EventType.MESSAGE,C=>{var G;if(!S){const q=C.data[0];Q(!!q,16349);const B=q,K=(B==null?void 0:B.error)||((G=B[0])==null?void 0:G.error);if(K){D(_t,`RPC '${t}' stream ${s} received error:`,K);const ct=K.status;let J=function(_){const I=st[_];if(I!==void 0)return Au(I)}(ct),E=K.message;J===void 0&&(J=P.INTERNAL,E="Unknown error status: "+ct+" with message "+K.message),S=!0,k.a_(new N(J,E)),T.close()}else D(_t,`RPC '${t}' stream ${s} received:`,q),k.u_(q)}}),O(c,qa.STAT_EVENT,C=>{C.stat===hs.PROXY?D(_t,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===hs.NOPROXY&&D(_t,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function as(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){return new Vh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="PersistentStream";class Lu{constructor(t,e,r,s,o,a,c,h){this.Mi=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return D(ia,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(D(ia,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rf extends Lu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=bh(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Lt(a.readTime):L.min()}(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=As(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=gs(h)?{documents:kh(o,h)}:{query:Oh(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ru(o,a.resumeToken);const f=Ts(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=dr(o,a.snapshotVersion.toTimestamp());const f=Ts(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Mh(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.q_(e)}}class Pf extends Lu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Q(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Q(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Dh(t.writeResults,t.commitTime),r=Lt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=As(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Nh(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{}class Sf extends Vf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(t,Es(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Ho(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,Es(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Cf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($t(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="RemoteStore";class bf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{ve(this)&&(D(Te,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.Ea.add(4),await Nn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await Cr(f)}(this))})}),this.Ra=new Cf(r,s)}}async function Cr(n){if(ve(n))for(const t of n.da)await t(!0)}async function Nn(n){for(const t of n.da)await t(!1)}function Fu(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ys(e)?Xs(e):Ge(e).O_()&&Hs(e,t))}function Ws(n,t){const e=F(n),r=Ge(e);e.Ia.delete(t),r.O_()&&Uu(e,t),e.Ia.size===0&&(r.O_()?r.L_():ve(e)&&e.Ra.set("Unknown"))}function Hs(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ge(n).Y_(t)}function Uu(n,t){n.Va.Ue(t),Ge(n).Z_(t)}function Xs(n){n.Va=new wh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ge(n).start(),n.Ra.ua()}function Ys(n){return ve(n)&&!Ge(n).x_()&&n.Ia.size>0}function ve(n){return F(n).Ea.size===0}function qu(n){n.Va=void 0}async function Nf(n){n.Ra.set("Online")}async function Df(n){n.Ia.forEach((t,e)=>{Hs(n,t)})}async function kf(n,t){qu(n),Ys(n)?(n.Ra.ha(t),Xs(n)):n.Ra.set("Unknown")}async function Of(n,t,e){if(n.Ra.set("Online"),t instanceof vu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,t)}catch(r){D(Te,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await pr(n,r)}else if(t instanceof ir?n.Va.Ze(t):t instanceof wu?n.Va.st(t):n.Va.tt(t),!e.isEqual(L.min()))try{const r=await xu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Va.Tt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(f);m&&o.Ia.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),Uu(o,h);const T=new te(m.target,h,f,m.sequenceNumber);Hs(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){D(Te,"Failed to raise snapshot:",r),await pr(n,r)}}async function pr(n,t,e){if(!ze(t))throw t;n.Ea.add(1),await Nn(n),n.Ra.set("Offline"),e||(e=()=>xu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(Te,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Cr(n)})}function Bu(n,t){return t().catch(e=>pr(n,e,t))}async function br(n){const t=F(n),e=ae(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ks;for(;xf(t);)try{const s=await gf(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Mf(t,s)}catch(s){await pr(t,s)}ju(t)&&zu(t)}function xf(n){return ve(n)&&n.Ta.length<10}function Mf(n,t){n.Ta.push(t);const e=ae(n);e.O_()&&e.X_&&e.ea(t.mutations)}function ju(n){return ve(n)&&!ae(n).x_()&&n.Ta.length>0}function zu(n){ae(n).start()}async function Lf(n){ae(n).ra()}async function Ff(n){const t=ae(n);for(const e of n.Ta)t.ea(e.mutations)}async function Uf(n,t,e){const r=n.Ta.shift(),s=Bs.from(r,t,e);await Bu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await br(n)}async function qf(n,t){t&&ae(n).X_&&await async function(r,s){if(function(a){return Eh(a)&&a!==P.ABORTED}(s.code)){const o=r.Ta.shift();ae(r).B_(),await Bu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await br(r)}}(n,t),ju(n)&&zu(n)}async function oa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(Te,"RemoteStore received new credentials");const r=ve(e);e.Ea.add(3),await Nn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Cr(e)}async function Bf(n,t){const e=F(n);t?(e.Ea.delete(2),await Cr(e)):t||(e.Ea.add(2),await Nn(e),e.Ra.set("Unknown"))}function Ge(n){return n.ma||(n.ma=function(e,r,s){const o=F(e);return o.sa(),new Rf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Nf.bind(null,n),t_:Df.bind(null,n),r_:kf.bind(null,n),H_:Of.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),Ys(n)?Xs(n):n.Ra.set("Unknown")):(await n.ma.stop(),qu(n))})),n.ma}function ae(n){return n.fa||(n.fa=function(e,r,s){const o=F(e);return o.sa(),new Pf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Lf.bind(null,n),r_:qf.bind(null,n),ta:Ff.bind(null,n),na:Uf.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await br(n)):(await n.fa.stop(),n.Ta.length>0&&(D(Te,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new Js(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(n,t){if($t("AsyncQueue",`${t}: ${n}`),ze(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static emptySet(t){return new ke(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=fn(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ke)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ke;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.ga=new Z(x.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):M(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class qe{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new qe(t,e,ke.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class zf{constructor(){this.queries=ua(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=ua(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function ua(){return new Ae(n=>cu(n),wr)}async function $u(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.ba()&&t.Da()&&(r=2):(o=new jf,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Zs(a,`Initialization of query '${be(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ti(e)}async function Gu(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.Da()?0:1:!o.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function $f(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&ti(e)}function Gf(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function ti(n){n.Ca.forEach(t=>{t.next()})}var Rs,la;(la=Rs||(Rs={})).Ma="default",la.Cache="cache";class Ku{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Rs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t){this.key=t}}class Wu{constructor(t){this.key=t}}class Kf{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=hu(t),this.tu=new ke(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new aa,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const R=s.get(m),S=vr(this.query,T)?T:null,k=!!R&&this.mutatedKeys.has(R.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;R&&S?R.data.isEqual(S.data)?k!==O&&(r.track({type:3,doc:S}),C=!0):this.su(R,S)||(r.track({type:2,doc:S}),C=!0,(h&&this.eu(S,h)>0||f&&this.eu(S,f)<0)&&(c=!0)):!R&&S?(r.track({type:0,doc:S}),C=!0):R&&!S&&(r.track({type:1,doc:R}),C=!0,(h||f)&&(c=!0)),C&&(S?(a=a.add(S),o=O?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,T)=>function(S,k){const O=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:C})}};return O(S)-O(k)}(m.type,T.type)||this.eu(m.doc,T.doc)),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new qe(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new aa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const e=[];return t.forEach(r=>{this.Xa.has(r)||e.push(new Wu(r))}),this.Xa.forEach(r=>{t.has(r)||e.push(new Qu(r))}),e}cu(t){this.Ya=t.Qs,this.Xa=z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return qe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ei="SyncEngine";class Qf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Wf{constructor(t){this.key=t,this.hu=!1}}class Hf{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ae(c=>cu(c),wr),this.Iu=new Map,this.Eu=new Set,this.du=new Z(x.comparator),this.Au=new Map,this.Ru=new $s,this.Vu={},this.mu=new Map,this.fu=Ue.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xf(n,t,e=!0){const r=tl(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Hu(r,t,e,!0),s}async function Yf(n,t){const e=tl(n);await Hu(e,t,!0,!1)}async function Hu(n,t,e,r){const s=await _f(n.localStore,Mt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Jf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Fu(n.remoteStore,s),c}async function Jf(n,t,e,r,s){n.pu=(T,R,S)=>async function(O,C,G,q){let B=C.view.ru(G);B.Cs&&(B=await ea(O.localStore,C.query,!1).then(({documents:E})=>C.view.ru(E,B)));const K=q&&q.targetChanges.get(C.targetId),ct=q&&q.targetMismatches.get(C.targetId)!=null,J=C.view.applyChanges(B,O.isPrimaryClient,K,ct);return ha(O,C.targetId,J.au),J.snapshot}(n,T,R,S);const o=await ea(n.localStore,t,!0),a=new Kf(t,o.Qs),c=a.ru(o.documents),h=bn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);ha(n,e,f.au);const m=new Qf(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),f.snapshot}async function Zf(n,t,e){const r=F(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!wr(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ws(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ws(r.remoteStore,s.targetId),Ps(r,s.targetId)}).catch(je)):(Ps(r,s.targetId),await ws(r.localStore,s.targetId,!0))}async function td(n,t){const e=F(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ws(e.remoteStore,r.targetId))}async function ed(n,t,e){const r=ud(n);try{const s=await function(a,c){const h=F(a),f=Y.now(),m=c.reduce((S,k)=>S.add(k.key),z());let T,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=Kt(),O=z();return h.Ns.getEntries(S,m).next(C=>{k=C,k.forEach((G,q)=>{q.isValidDocument()||(O=O.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,k)).next(C=>{T=C;const G=[];for(const q of c){const B=ph(q,T.get(q.key).overlayedDocument);B!=null&&G.push(new we(q.key,B,nu(B.value.mapValue),bt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,G,c)}).next(C=>{R=C;const G=C.applyToLocalDocumentSet(T,O);return h.documentOverlayCache.saveOverlays(S,C.batchId,G)})}).then(()=>({batchId:R.batchId,changes:du(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new Z(j)),f=f.insert(c,h),a.Vu[a.currentUser.toKey()]=f}(r,s.batchId,e),await Dn(r,s.changes),await br(r.remoteStore)}catch(s){const o=Zs(s,"Failed to persist write");e.reject(o)}}async function Xu(n,t){const e=F(n);try{const r=await mf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Q(a.hu,14607):s.removedDocuments.size>0&&(Q(a.hu,42227),a.hu=!1))}),await Dn(e,r,t)}catch(r){await je(r)}}function ca(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let f=!1;h.queries.forEach((m,T)=>{for(const R of T.Sa)R.va(c)&&(f=!0)}),f&&ti(h)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function nd(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new Z(x.comparator);a=a.insert(o,Tt.newNoDocument(o,L.min()));const c=z().add(o),h=new Vr(L.min(),new Map,new Z(j),a,c);await Xu(r,h),r.du=r.du.remove(o),r.Au.delete(t),ni(r)}else await ws(r.localStore,t,!1).then(()=>Ps(r,t,e)).catch(je)}async function rd(n,t){const e=F(n),r=t.batch.batchId;try{const s=await df(e.localStore,t);Ju(e,r,null),Yu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Dn(e,s)}catch(s){await je(s)}}async function sd(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(T=>(Q(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(f,T))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);Ju(r,t,e),Yu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Dn(r,s)}catch(s){await je(s)}}function Yu(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Ju(n,t,e){const r=F(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Ps(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(r=>{n.Ru.containsKey(r)||Zu(n,r)})}function Zu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ws(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),ni(n))}function ha(n,t,e){for(const r of e)r instanceof Qu?(n.Ru.addReference(r.key,t),id(n,r)):r instanceof Wu?(D(ei,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Zu(n,r.key)):M(19791,{wu:r})}function id(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(D(ei,"New document in limbo: "+e),n.Eu.add(r),ni(n))}function ni(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new x(H.fromString(t)),r=n.fu.next();n.Au.set(r,new Wf(e)),n.du=n.du.insert(e,r),Fu(n.remoteStore,new te(Mt(Fs(e.path)),r,"TargetPurposeLimboResolution",Er.ce))}}async function Dn(n,t,e){const r=F(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,h)=>{a.push(r.pu(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){s.push(f);const T=Ks.As(h.targetId,f);o.push(T)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>V.forEach(f,R=>V.forEach(R.Es,S=>m.persistence.referenceDelegate.addReference(T,R.targetId,S)).next(()=>V.forEach(R.ds,S=>m.persistence.referenceDelegate.removeReference(T,R.targetId,S)))))}catch(T){if(!ze(T))throw T;D(Qs,"Failed to update sequence numbers: "+T)}for(const T of f){const R=T.targetId;if(!T.fromCache){const S=m.Ms.get(R),k=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(k);m.Ms=m.Ms.insert(R,O)}}}(r.localStore,o))}async function od(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(ei,"User change. New user:",t.toKey());const r=await Ou(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dn(e,r.Ls)}}function ad(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return z().add(r.key);{let s=z();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function tl(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ad.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nd.bind(null,t),t.Pu.H_=$f.bind(null,t.eventManager),t.Pu.yu=Gf.bind(null,t.eventManager),t}function ud(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sd.bind(null,t),t}class gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return ff(this.persistence,new lf,t.initialUser,this.serializer)}Cu(t){return new ku(Gs.mi,this.serializer)}Du(t){return new Tf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gr.provider={build:()=>new gr};class ld extends gr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Q(this.persistence.referenceDelegate instanceof mr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new ku(r=>mr.mi(r,e),this.serializer)}}class Vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ca(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=od.bind(null,this.syncEngine),await Bf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zf}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),r=function(o){return new vf(o)}(t.databaseInfo);return function(o,a,c,h){return new Sf(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new bf(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ca(this.syncEngine,e,0),function(){return sa.v()?new sa:new Ef}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,m){const T=new Hf(s,o,a,c,h,f);return m&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);D(Te,"RemoteStore shutting down."),o.Ea.add(5),await Nn(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Vs.provider={build:()=>new Vs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="FirestoreClient";class cd{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Ds.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(ue,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(ue,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Zs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function us(n,t){n.asyncQueue.verifyOperationInProgress(),D(ue,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ou(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function fa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await hd(n);D(ue,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>oa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>oa(t.remoteStore,s)),n._onlineComponents=t}async function hd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ue,"Using user provided OfflineComponentProvider");try{await us(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;xe("Error using user provided cache. Falling back to memory cache: "+e),await us(n,new gr)}}else D(ue,"Using default OfflineComponentProvider"),await us(n,new ld(void 0));return n._offlineComponents}async function nl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ue,"Using user provided OnlineComponentProvider"),await fa(n,n._uninitializedComponentsProvider._online)):(D(ue,"Using default OnlineComponentProvider"),await fa(n,new Vs))),n._onlineComponents}function fd(n){return nl(n).then(t=>t.syncEngine)}async function rl(n){const t=await nl(n),e=t.eventManager;return e.onListen=Xf.bind(null,t.syncEngine),e.onUnlisten=Zf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Yf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=td.bind(null,t.syncEngine),e}function dd(n,t,e={}){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new el({next:R=>{m.Nu(),a.enqueueAndForget(()=>Gu(o,T));const S=R.docs.has(c);!S&&R.fromCache?f.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&h&&h.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),T=new Ku(Fs(c.path),m,{includeMetadataChanges:!0,qa:!0});return $u(o,T)}(await rl(n),n.asyncQueue,t,e,r)),r.promise}function md(n,t,e={}){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new el({next:R=>{m.Nu(),a.enqueueAndForget(()=>Gu(o,T)),R.fromCache&&h.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),T=new Ku(c,m,{includeMetadataChanges:!0,qa:!0});return $u(o,T)}(await rl(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="firestore.googleapis.com",ma=!0;class pa{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=il,this.ssl=ma}else this.host=t.host,this.ssl=t.ssl??ma;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Du;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Gh)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sl(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Nr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yc;switch(r.type){case"firstParty":return new Ac(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=da.get(e);r&&(D("ComponentProvider","Removing Datastore"),da.delete(e),r.terminate())}(this),Promise.resolve()}}function pd(n,t,e,r={}){var f;n=Gt(n,Nr);const s=yr(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(ka(`https://${c}`),Oa("Firestore",!0)),o.host!==il&&o.host!==c&&xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:s,emulatorOptions:r};if(!dc(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=yt.MOCK_USER;else{m=xa(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new yt(R)}n._authCredentials=new Tc(new $a(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Re(this.firestore,t,this._query)}}class at{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new at(this.firestore,t,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Sn(e,at._jsonSchema))return new at(t,r||null,new x(H.fromString(e.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:ot("string",at._jsonSchemaVersion),referencePath:ot("string")};class ne extends Re{constructor(t,e,r){super(t,e,Fs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new at(this.firestore,null,new x(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Km(n,t,...e){if(n=qt(n),Ga("collection","path",t),n instanceof Nr){const r=H.fromString(t,...e);return So(r),new ne(n,null,r)}{if(!(n instanceof at||n instanceof ne))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(H.fromString(t,...e));return So(r),new ne(n.firestore,null,r)}}function gd(n,t,...e){if(n=qt(n),arguments.length===1&&(t=Ds.newId()),Ga("doc","path",t),n instanceof Nr){const r=H.fromString(t,...e);return Vo(r),new at(n,null,new x(r))}{if(!(n instanceof at||n instanceof ne))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(H.fromString(t,...e));return Vo(r),new at(n.firestore,n instanceof ne?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="AsyncQueue";class _a{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mu(this,"async_queue_retry"),this._c=()=>{const r=as();r&&D(ga,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=as();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=as();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new zt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ze(t))throw t;D(ga,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,$t("INTERNAL UNHANDLED ERROR: ",ya(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Js.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:ya(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ya(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ke extends Nr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new _a,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _a(t),this._firestoreClient=void 0,await t}}}function _d(n,t){const e=typeof n=="object"?n:ba(),r=typeof n=="string"?n:lr,s=Na(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Da("firestore");o&&pd(s,...o)}return s}function ri(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yd(n),n._firestoreClient}function yd(n){var r,s,o;const t=n._freezeSettings(),e=function(c,h,f,m){return new Uc(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,sl(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new cd(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(pt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Sn(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:ot("string",St._jsonSchemaVersion),bytes:ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(t){if(Sn(t,Ft._jsonSchema))return new Ft(t.latitude,t.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:ot("string",Ft._jsonSchemaVersion),latitude:ot("number"),longitude:ot("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Sn(t,Ut._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ut(t.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ut._jsonSchemaVersion="firestore/vectorValue/1.0",Ut._jsonSchema={type:ot("string",Ut._jsonSchemaVersion),vectorValues:ot("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=/^__.*__$/;class Ed{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new we(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cn(t,this.data,e,this.fieldTransforms)}}function ol(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:n})}}class oi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new oi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return _r(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(ol(this.Ac)&&Td.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Id{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Sr(t)}Cc(t,e,r,s=!1){return new oi({Ac:t,methodName:e,Dc:r,path:mt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ai(n){const t=n._freezeSettings(),e=Sr(n._databaseId);return new Id(n._databaseId,!!t.ignoreUndefinedProperties,e)}function al(n,t,e,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,s);cl("Data must be an object, but it was:",a,r);const c=ul(r,a);let h,f;if(o.merge)h=new Ct(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const R=wd(t,T,e);if(!a.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Rd(m,R)||m.push(R)}h=new Ct(m),f=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,f=a.fieldTransforms;return new Ed(new Vt(c),h,f)}class ui extends ii{_toFieldTransform(t){return new hh(t.path,new Rn)}isEqual(t){return t instanceof ui}}function Ad(n,t,e,r=!1){return li(e,n.Cc(r?4:3,t))}function li(n,t){if(ll(n=qt(n)))return cl("Unsupported field value:",t,n),ul(n,t);if(n instanceof ii)return function(r,s){if(!ol(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=li(c,s.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:dr(s.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dr(s.serializer,o)}}if(r instanceof Ft)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Ru(s.serializer,r._byteString)};if(r instanceof at){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:zs(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ut)return function(a,c){return{mapValue:{fields:{[tu]:{stringValue:eu},[cr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw c.Sc("VectorValues must only contain numeric values.");return Us(c.serializer,f)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Tr(r)}`)}(n,t)}function ul(n,t){const e={};return Wa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(n,(r,s)=>{const o=li(s,t.mc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ll(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Ft||n instanceof St||n instanceof at||n instanceof ii||n instanceof Ut)}function cl(n,t,e){if(!ll(e)||!Ka(e)){const r=Tr(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function wd(n,t,e){if((t=qt(t))instanceof si)return t._internalPath;if(typeof t=="string")return hl(n,t);throw _r("Field path arguments must be of type string or ",n,!1,void 0,e)}const vd=new RegExp("[~\\*/\\[\\]]");function hl(n,t,e){if(t.search(vd)>=0)throw _r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new si(...t.split("."))._internalPath}catch{throw _r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function _r(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(P.INVALID_ARGUMENT,c+n+h)}function Rd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Pd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Dr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Pd extends fl{data(){return super.data()}}function Dr(n,t){return typeof t=="string"?hl(n,t):t instanceof si?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ci{}class dl extends ci{}function Qm(n,t,...e){let r=[];t instanceof ci&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof hi).length,c=o.filter(h=>h instanceof kr).length;if(a>1||a>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class kr extends dl{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new kr(t,e,r)}_apply(t){const e=this._parse(t);return ml(t._query,e),new Re(t.firestore,t.converter,_s(t._query,e))}_parse(t){const e=ai(t.firestore);return function(o,a,c,h,f,m,T){let R;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ea(T,m);const k=[];for(const O of T)k.push(Ta(h,o,O));R={arrayValue:{values:k}}}else R=Ta(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ea(T,m),R=Ad(c,a,T,m==="in"||m==="not-in");return it.create(f,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Wm(n,t,e){const r=t,s=Dr("where",n);return kr._create(s,r,e)}class hi extends ci{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new hi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Nt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)ml(a,h),a=_s(a,h)}(t._query,e),new Re(t.firestore,t.converter,_s(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fi extends dl{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new fi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vn(o,a)}(t._query,this._field,this._direction);return new Re(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new $e(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Hm(n,t="asc"){const e=t,r=Dr("orderBy",n);return fi._create(r,e)}function Ta(n,t,e){if(typeof(e=qt(e))=="string"){if(e==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lu(t)&&e.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(H.fromString(e));if(!x.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mo(n,new x(r))}if(e instanceof at)return Mo(n,e._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tr(e)}.`)}function Ea(n,t){if(!Array.isArray(n)||n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ml(n,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Sd{convertValue(t,e="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ie(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[cr].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>rt(a.doubleValue));return new Ut(e)}convertGeoPoint(t){return new Ft(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ar(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const e=se(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=H.fromString(t);Q(Nu(r),9688,{name:t});const s=new An(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ge extends fl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Dr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ge._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ge._jsonSchemaVersion="firestore/documentSnapshot/1.0",ge._jsonSchema={type:ot("string",ge._jsonSchemaVersion),bundleSource:ot("string","DocumentSnapshot"),bundleName:ot("string"),bundle:ot("string")};class or extends ge{data(t={}){return super.data(t)}}class Oe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new or(this._firestore,this._userDataWriter,r.key,r,new mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new or(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new or(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Cd(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Oe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ds.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Cd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n){n=Gt(n,at);const t=Gt(n.firestore,Ke);return dd(ri(t),n._key).then(e=>bd(t,n,e))}Oe._jsonSchemaVersion="firestore/querySnapshot/1.0",Oe._jsonSchema={type:ot("string",Oe._jsonSchemaVersion),bundleSource:ot("string","QuerySnapshot"),bundleName:ot("string"),bundle:ot("string")};class gl extends Sd{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new at(this.firestore,null,e)}}function Ym(n){n=Gt(n,Re);const t=Gt(n.firestore,Ke),e=ri(t),r=new gl(t);return Vd(n._query),md(e,n._query).then(s=>new Oe(t,r,n,s))}function Jm(n,t,e){n=Gt(n,at);const r=Gt(n.firestore,Ke),s=pl(n.converter,t,e);return di(r,[al(ai(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,bt.none())])}function Zm(n){return di(Gt(n.firestore,Ke),[new qs(n._key,bt.none())])}function tp(n,t){const e=Gt(n.firestore,Ke),r=gd(n),s=pl(n.converter,t);return di(e,[al(ai(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function di(n,t){return function(r,s){const o=new zt;return r.asyncQueue.enqueueAndForget(async()=>ed(await fd(r),s,o)),o.promise}(ri(n),t)}function bd(n,t,e){const r=e.docs.get(t._key),s=new gl(n);return new ge(n,s,t._key,r,new mn(e.hasPendingWrites,e.fromCache),t.converter)}function ep(){return new ui("serverTimestamp")}(function(t,e=!0){(function(s){Be=s})(Ma),Pa(new Va("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ke(new Ec(r.getProvider("auth-internal")),new wc(a,r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(f.options.projectId,m)}(a,s),a);return o={useFetchStreams:e,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ar(wo,vo,t),ar(wo,vo,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="firebasestorage.googleapis.com",yl="storageBucket",Nd=2*60*1e3,Dd=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Ca{constructor(t,e,r=0){super(ls(t),`Firebase Storage: ${e} (${ls(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ls(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function ls(n){return"storage/"+n}function mi(){const n="An unknown error occurred, please check the error payload for server response.";return new nt(et.UNKNOWN,n)}function kd(n){return new nt(et.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Od(n){return new nt(et.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xd(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(et.UNAUTHENTICATED,n)}function Md(){return new nt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ld(n){return new nt(et.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Fd(){return new nt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ud(){return new nt(et.CANCELED,"User canceled the upload/download.")}function qd(n){return new nt(et.INVALID_URL,"Invalid URL '"+n+"'.")}function Bd(n){return new nt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jd(){return new nt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yl+"' property when initializing the app?")}function zd(){return new nt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $d(){return new nt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gd(n){return new nt(et.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ss(n){return new nt(et.INVALID_ARGUMENT,n)}function Tl(){return new nt(et.APP_DELETED,"The Firebase app was deleted.")}function Kd(n){return new nt(et.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tn(n,t){return new nt(et.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function cn(n){throw new nt(et.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=Pt.makeFromUrl(t,e)}catch{return new Pt(t,"")}if(r.path==="")return r;throw Bd(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function f(K){K.path_=decodeURIComponent(K.path)}const m="v[A-Za-z0-9_]+",T=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",S=new RegExp(`^https?://${T}/${m}/b/${s}/o${R}`,"i"),k={bucket:1,path:3},O=e===_l?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",G=new RegExp(`^https?://${O}/${s}/${C}`,"i"),B=[{regex:c,indices:h,postModify:o},{regex:S,indices:k,postModify:f},{regex:G,indices:{bucket:1,path:2},postModify:f}];for(let K=0;K<B.length;K++){const ct=B[K],J=ct.regex.exec(t);if(J){const E=J[ct.indices.bucket];let p=J[ct.indices.path];p||(p=""),r=new Pt(E,p),ct.postModify(r);break}}if(r==null)throw qd(t);return r}}class Qd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n,t,e){let r=1,s=null,o=null,a=!1,c=0;function h(){return c===2}let f=!1;function m(...C){f||(f=!0,t.apply(null,C))}function T(C){s=setTimeout(()=>{s=null,n(S,h())},C)}function R(){o&&clearTimeout(o)}function S(C,...G){if(f){R();return}if(C){R(),m.call(null,C,...G);return}if(h()||a){R(),m.call(null,C,...G);return}r<64&&(r*=2);let B;c===1?(c=2,B=0):B=(r+Math.random())*1e3,T(B)}let k=!1;function O(C){k||(k=!0,R(),!f&&(s!==null?(C||(c=2),clearTimeout(s),T(0)):C||(c=1)))}return T(0),o=setTimeout(()=>{a=!0,O(!0)},e),O}function Hd(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){return n!==void 0}function Yd(n){return typeof n=="object"&&!Array.isArray(n)}function pi(n){return typeof n=="string"||n instanceof String}function Ia(n){return gi()&&n instanceof Blob}function gi(){return typeof Blob<"u"}function Aa(n,t,e,r){if(r<t)throw Ss(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Ss(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function El(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}var _e;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(_e||(_e={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,e,r,s,o,a,c,h,f,m,T,R=!0,S=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=T,this.retry=R,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,O)=>{this.resolve_=k,this.reject_=O,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new Zn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const h=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===_e.NO_ERROR,h=o.getStatus();if(!c||Jd(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===_e.ABORT;r(!1,new Zn(!1,null,m));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new Zn(f,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());Xd(h)?o(h):o()}catch(h){a(h)}else if(c!==null){const h=mi();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(s.canceled){const h=this.appDelete_?Tl():Ud();a(h)}else{const h=Fd();a(h)}};this.canceled_?e(!1,new Zn(!1,null,!0)):this.backoffId_=Wd(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Hd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function tm(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function em(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function nm(n,t){t&&(n["X-Firebase-GMPID"]=t)}function rm(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function sm(n,t,e,r,s,o,a=!0,c=!1){const h=El(n.urlParams),f=n.url+h,m=Object.assign({},n.headers);return nm(m,t),tm(m,e),em(m,o),rm(m,r),new Zd(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function om(...n){const t=im();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(gi())return new Blob(n);throw new nt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function am(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){if(typeof atob>"u")throw Gd("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cs{constructor(t,e){this.data=t,this.contentType=e||null}}function lm(n,t){switch(n){case xt.RAW:return new cs(Il(t));case xt.BASE64:case xt.BASE64URL:return new cs(Al(n,t));case xt.DATA_URL:return new cs(hm(t),fm(t))}throw mi()}function Il(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function cm(n){let t;try{t=decodeURIComponent(n)}catch{throw Tn(xt.DATA_URL,"Malformed data URL.")}return Il(t)}function Al(n,t){switch(n){case xt.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw Tn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw Tn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=um(t)}catch(s){throw s.message.includes("polyfill")?s:Tn(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}class wl{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Tn(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=dm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function hm(n){const t=new wl(n);return t.base64?Al(xt.BASE64,t.rest):cm(t.rest)}function fm(n){return new wl(n).contentType}function dm(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e){let r=0,s="";Ia(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(Ia(this.data_)){const r=this.data_,s=am(r,t,e);return s===null?null:new Zt(s)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Zt(r,!0)}}static getBlob(...t){if(gi()){const e=t.map(r=>r instanceof Zt?r.data_:r);return new Zt(om.apply(null,e))}else{const e=t.map(a=>pi(a)?lm(xt.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let c=0;c<a.length;c++)s[o++]=a[c]}),new Zt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){let t;try{t=JSON.parse(n)}catch{return null}return Yd(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function pm(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function Rl(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n,t){return t}class At{constructor(t,e,r,s){this.server=t,this.local=e||t,this.writable=!!r,this.xform=s||gm}}let tr=null;function _m(n){return!pi(n)||n.length<2?n:Rl(n)}function Pl(){if(tr)return tr;const n=[];n.push(new At("bucket")),n.push(new At("generation")),n.push(new At("metageneration")),n.push(new At("name","fullPath",!0));function t(o,a){return _m(a)}const e=new At("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const s=new At("size");return s.xform=r,n.push(s),n.push(new At("timeCreated")),n.push(new At("updated")),n.push(new At("md5Hash",null,!0)),n.push(new At("cacheControl",null,!0)),n.push(new At("contentDisposition",null,!0)),n.push(new At("contentEncoding",null,!0)),n.push(new At("contentLanguage",null,!0)),n.push(new At("contentType",null,!0)),n.push(new At("metadata","customMetadata",!0)),tr=n,tr}function ym(n,t){function e(){const r=n.bucket,s=n.fullPath,o=new Pt(r,s);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function Tm(n,t,e){const r={};r.type="file";const s=e.length;for(let o=0;o<s;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return ym(r,n),r}function Vl(n,t,e){const r=vl(t);return r===null?null:Tm(n,r,e)}function Em(n,t,e,r){const s=vl(t);if(s===null||!pi(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const m=n.bucket,T=n.fullPath,R="/b/"+a(m)+"/o/"+a(T),S=_i(R,e,r),k=El({alt:"media",token:f});return S+k})[0]}function Im(n,t){const e={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Sl{constructor(t,e,r,s){this.url=t,this.method=e,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){if(!n)throw mi()}function Am(n,t){function e(r,s){const o=Vl(n,s,t);return Cl(o!==null),o}return e}function wm(n,t){function e(r,s){const o=Vl(n,s,t);return Cl(o!==null),Em(o,s,n.host,n._protocol)}return e}function bl(n){function t(e,r){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=Md():s=xd():e.getStatus()===402?s=Od(n.bucket):e.getStatus()===403?s=Ld(n.path):s=r,s.status=e.getStatus(),s.serverResponse=r.serverResponse,s}return t}function vm(n){const t=bl(n);function e(r,s){let o=t(r,s);return r.getStatus()===404&&(o=kd(n.path)),o.serverResponse=s.serverResponse,o}return e}function Rm(n,t,e){const r=t.fullServerUrl(),s=_i(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,c=new Sl(s,o,wm(n,e),a);return c.errorHandler=vm(t),c}function Pm(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Vm(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=Pm(null,t)),r}function Sm(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let B="";for(let K=0;K<2;K++)B=B+Math.random().toString().slice(2);return B}const h=c();a["Content-Type"]="multipart/related; boundary="+h;const f=Vm(t,r,s),m=Im(f,e),T="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+h+"--",S=Zt.getBlob(T,r,R);if(S===null)throw zd();const k={name:f.fullPath},O=_i(o,n.host,n._protocol),C="POST",G=n.maxUploadRetryTime,q=new Sl(O,C,Am(n,e),G);return q.urlParams=k,q.headers=a,q.body=S.uploadData(),q.errorHandler=bl(t),q}class Cm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_e.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_e.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_e.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,s,o){if(this.sent_)throw cn("cannot .send() more than once");if(yr(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class bm extends Cm{initXhr(){this.xhr_.responseType="text"}}function Nl(){return new bm}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e){this._service=t,e instanceof Pt?this._location=e:this._location=Pt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ee(t,e)}get root(){const t=new Pt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rl(this._location.path)}get storage(){return this._service}get parent(){const t=mm(this._location.path);if(t===null)return null;const e=new Pt(this._location.bucket,t);return new Ee(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Kd(t)}}function Nm(n,t,e){n._throwIfRoot("uploadBytes");const r=Sm(n.storage,n._location,Pl(),new Zt(t,!0),e);return n.storage.makeRequestWithTokens(r,Nl).then(s=>({metadata:s,ref:n}))}function Dm(n){n._throwIfRoot("getDownloadURL");const t=Rm(n.storage,n._location,Pl());return n.storage.makeRequestWithTokens(t,Nl).then(e=>{if(e===null)throw $d();return e})}function km(n,t){const e=pm(n._location.path,t),r=new Pt(n._location.bucket,e);return new Ee(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n){return/^[A-Za-z]+:\/\//.test(n)}function xm(n,t){return new Ee(n,t)}function Dl(n,t){if(n instanceof yi){const e=n;if(e._bucket==null)throw jd();const r=new Ee(e,e._bucket);return t!=null?Dl(r,t):r}else return t!==void 0?km(n,t):n}function Mm(n,t){if(t&&Om(t)){if(n instanceof yi)return xm(n,t);throw Ss("To use ref(service, url), the first argument must be a Storage instance.")}else return Dl(n,t)}function wa(n,t){const e=t==null?void 0:t[yl];return e==null?null:Pt.makeFromBucketSpec(e,n)}function Lm(n,t,e,r={}){n.host=`${t}:${e}`;const s=yr(t);s&&(ka(`https://${n.host}/b`),Oa("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:xa(o,n.app.options.projectId))}class yi{constructor(t,e,r,s,o,a=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=_l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nd,this._maxUploadRetryTime=Dd,this._requests=new Set,s!=null?this._bucket=Pt.makeFromBucketSpec(s,this._host):this._bucket=wa(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,t):this._bucket=wa(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Aa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Aa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Sa(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ee(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new Qd(Tl());{const a=sm(t,this._appId,r,s,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const va="@firebase/storage",Ra="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="storage";function np(n,t,e){return n=qt(n),Nm(n,t,e)}function rp(n){return n=qt(n),Dm(n)}function sp(n,t){return n=qt(n),Mm(n,t)}function Fm(n=ba(),t){n=qt(n);const r=Na(n,kl).getImmediate({identifier:t}),s=Da("storage");return s&&Um(r,...s),r}function Um(n,t,e,r={}){Lm(n,t,e,r)}function qm(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new yi(e,r,s,t,Ma)}function Bm(){Pa(new Va(kl,qm,"PUBLIC").setMultipleInstances(!0)),ar(va,Ra,""),ar(va,Ra,"esm2020")}Bm();const Cs={apiKey:"AIzaSyBgobrW_SzqAVxxQI-GP-xibMJUz4Znz3E",authDomain:"bby05project.firebaseapp.com",projectId:"bby05project",storageBucket:"bby05project.firebasestorage.app",messagingSenderId:"454132391937",appId:"1:454132391937:web:2ea558df68c80d106c2000",databaseURL:"https://bby05project-default-rtdb.firebaseio.com/"};console.log("Firebase config:",{...Cs,apiKey:Cs.apiKey.substring(0,10)+"..."});const Ti=_c(Cs),jm=gc(Ti);let bs;try{bs=_d(Ti),console.log("Firebase Firestore initialized successfully")}catch(n){console.error("Failed to initialize Firebase Firestore:",n),bs=null}const zm=Fm(Ti),ip=Object.freeze(Object.defineProperty({__proto__:null,auth:jm,get db(){return bs},storage:zm},Symbol.toStringTag,{value:"Module"}));export{jm as a,Zm as b,Km as c,bs as d,gd as e,tp as f,Ym as g,Xm as h,zm as i,rp as j,Jm as k,ip as l,Hm as o,Qm as q,sp as r,ep as s,np as u,Wm as w};
