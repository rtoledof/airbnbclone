(function(w,C){function v(){var e=D.elements;
return"string"==typeof e?e.split(" "):e
}function z(f){var e=u[f[d]];
e||(e={},A++,f[d]=A,u[A]=e);
return e
}function c(f,e,g){e||(e=C);
if(B){return e.createElement(f)
}g||(g=z(e));
e=g.cache[f]?g.cache[f].cloneNode():a.test(f)?(g.cache[f]=g.createElem(f)).cloneNode():g.createElem(f);
return e.canHaveChildren&&!F.test(f)?g.frag.appendChild(e):e
}function E(f,e){if(!e.cache){e.cache={},e.createElem=f.createElement,e.createFrag=f.createDocumentFragment,e.frag=e.createFrag()
}f.createElement=function(g){return !D.shivMethods?e.createElem(g):c(g,f,e)
};
f.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+v().join().replace(/\w+/g,function(g){e.createElem(g);
e.frag.createElement(g);
return'c("'+g+'")'
})+");return n}")(D,e.frag)
}function b(f){f||(f=C);
var e=z(f);
if(D.shivCSS&&!y&&!e.hasCSS){var h,g=f;
h=g.createElement("p");
g=g.getElementsByTagName("head")[0]||g.documentElement;
h.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
h=g.insertBefore(h.lastChild,g.firstChild);
e.hasCSS=!!h
}B||E(f,e);
return f
}var x=w.html5||{},F=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,y,d="_html5shiv",A=0,u={},B;
(function(){try{var f=C.createElement("a");
f.innerHTML="<xyz></xyz>";
y="hidden" in f;
var e;
if(!(e=1==f.childNodes.length)){C.createElement("a");
var h=C.createDocumentFragment();
e="undefined"==typeof h.cloneNode||"undefined"==typeof h.createDocumentFragment||"undefined"==typeof h.createElement
}B=e
}catch(g){B=y=!0
}})();
var D={elements:x.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==x.shivCSS,supportsUnknownElements:B,shivMethods:!1!==x.shivMethods,type:"default",shivDocument:b,createElement:c,createDocumentFragment:function(g,f){g||(g=C);
if(B){return g.createDocumentFragment()
}for(var f=f||z(g),l=f.frag.cloneNode(),k=0,j=v(),i=j.length;
k<i;
k++){l.createElement(j[k])
}return l
}};
w.html5=D;
b(C)
})(this,document);
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
(function(a){a.matchMedia=a.matchMedia||function(f,g){var d,b=f.documentElement,c=b.firstElementChild||b.firstChild,e=f.createElement("body"),h=f.createElement("div");
h.id="mq-test-1";
h.style.cssText="position:absolute;top:-100em";
e.style.background="none";
e.appendChild(h);
return function(i){h.innerHTML='&shy;<style media="'+i+'"> #mq-test-1 { width: 42px; }</style>';
b.insertBefore(e,c);
d=h.offsetWidth===42;
b.removeChild(e);
return{matches:d,media:i}
}
}(a.document)
})(this);
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(b){if(b.matchMedia&&b.matchMedia("all").addListener){return false
}var f=b.matchMedia,a=f("only all").matches,e=false,g=0,d=[],c=function(h){b.clearTimeout(g);
g=b.setTimeout(function(){for(var o=0,l=d.length;
o<l;
o++){var k=d[o].mql,p=d[o].listeners||[],q=f(k.media).matches;
if(q!==k.matches){k.matches=q;
for(var m=0,n=p.length;
m<n;
m++){p[m].call(b,k)
}}}},30)
};
b.matchMedia=function(k){var h=f(k),j=[],i=0;
h.addListener=function(l){if(!a){return
}if(!e){e=true;
b.addEventListener("resize",c,true)
}if(i===0){i=d.push({mql:h,listeners:j})
}j.push(l)
};
h.removeListener=function(n){for(var m=0,l=j.length;
m<l;
m++){if(j[m]===n){j.splice(m,1)
}}};
return h
}
})(this);
(function(k){var u={};
k.respond=u;
u.update=function(){};
var c=[],d=function(){var w=false;
try{w=new k.XMLHttpRequest()
}catch(A){w=new k.ActiveXObject("Microsoft.XMLHTTP")
}return function(){return w
}
}(),n=function(w,B){var A=d();
if(!A){return
}A.open("GET",w,true);
A.onreadystatechange=function(){if(A.readyState!==4||A.status!==200&&A.status!==304){return
}B(A.responseText)
};
if(A.readyState===4){return
}A.send(null)
},r=function(w){return w.replace(u.regex.minmaxwh,"").match(u.regex.other)
};
u.ajax=n;
u.queue=c;
u.unsupportedmq=r;
u.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g};
u.mediaQueriesSupported=k.matchMedia&&k.matchMedia("only all")!==null&&k.matchMedia("only all").matches;
if(u.mediaQueriesSupported){return
}var z=k.document,t=z.documentElement,h=[],j=[],q=[],o={},g=30,e=z.getElementsByTagName("head")[0]||t,f=z.getElementsByTagName("base")[0],b=e.getElementsByTagName("link"),l,s,p,y=function(){var B,E=z.createElement("div"),w=z.body,D=t.style.fontSize,C=w&&w.style.fontSize,A=false;
E.style.cssText="position:absolute;font-size:1em;width:1em";
if(!w){w=A=z.createElement("body");
w.style.background="none"
}t.style.fontSize="100%";
w.style.fontSize="100%";
w.appendChild(E);
if(A){t.insertBefore(w,t.firstChild)
}B=E.offsetWidth;
if(A){t.removeChild(w)
}else{w.removeChild(E)
}t.style.fontSize=D;
if(C){w.style.fontSize=C
}B=p=parseFloat(B);
return B
},i=function(L){var Q="clientWidth",C=t[Q],A=z.compatMode==="CSS1Compat"&&C||z.body[Q]||C,O={},P=b[b.length-1],B=new Date().getTime();
if(L&&l&&B-l<g){k.clearTimeout(s);
s=k.setTimeout(i,g);
return
}else{l=B
}for(var J in h){if(h.hasOwnProperty(J)){var M=h[J],F=M.minw,I=M.maxw,K=F===null,N=I===null,w="em";
if(!!F){F=parseFloat(F)*(F.indexOf(w)>-1?p||y():1)
}if(!!I){I=parseFloat(I)*(I.indexOf(w)>-1?p||y():1)
}if(!M.hasquery||(!K||!N)&&(K||A>=F)&&(N||A<=I)){if(!O[M.media]){O[M.media]=[]
}O[M.media].push(j[M.rules])
}}}for(var H in q){if(q.hasOwnProperty(H)){if(q[H]&&q[H].parentNode===e){e.removeChild(q[H])
}}}q.length=0;
for(var G in O){if(O.hasOwnProperty(G)){var E=z.createElement("style"),D=O[G].join("\n");
E.type="text/css";
E.media=G;
e.insertBefore(E,P.nextSibling);
if(E.styleSheet){E.styleSheet.cssText=D
}else{E.appendChild(z.createTextNode(D))
}q.push(E)
}}},m=function(K,w,B){var I=K.replace(u.regex.comments,"").replace(u.regex.keyframes,"").match(u.regex.media),L=I&&I.length||0;
w=w.substring(0,w.lastIndexOf("/"));
var A=function(M){return M.replace(u.regex.urls,"$1"+w+"$2$3")
},C=!L&&B;
if(w.length){w+="/"
}if(C){L=1
}for(var F=0;
F<L;
F++){var G,H,D,J;
if(C){G=B;
j.push(A(K))
}else{G=I[F].match(u.regex.findStyles)&&RegExp.$1;
j.push(RegExp.$2&&A(RegExp.$2))
}D=G.split(",");
J=D.length;
for(var E=0;
E<J;
E++){H=D[E];
if(r(H)){continue
}h.push({media:H.split("(")[0].match(u.regex.only)&&RegExp.$2||"all",rules:j.length-1,hasquery:H.indexOf("(")>-1,minw:H.match(u.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:H.match(u.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})
}}i()
},x=function(){if(c.length){var w=c.shift();
n(w.href,function(A){m(A,w.href,w.media);
o[w.href]=true;
k.setTimeout(function(){x()
},0)
})
}},a=function(){for(var C=0;
C<b.length;
C++){var B=b[C],A=B.href,D=B.media,w=B.rel&&B.rel.toLowerCase()==="stylesheet";
if(!!A&&w&&!o[A]){if(B.styleSheet&&B.styleSheet.rawCssText){m(B.styleSheet.rawCssText,A,D);
o[A]=true
}else{if(!/^([a-zA-Z:]*\/\/)/.test(A)&&!f||A.replace(RegExp.$1,"").split("/")[0]===k.location.host){if(A.substring(0,2)==="//"){A=k.location.protocol+A
}c.push({href:A,media:D})
}}}}x()
};
a();
u.update=a;
u.getEmValue=y;
function v(){i(true)
}if(k.addEventListener){k.addEventListener("resize",v,false)
}else{if(k.attachEvent){k.attachEvent("onresize",v)
}}})(this);