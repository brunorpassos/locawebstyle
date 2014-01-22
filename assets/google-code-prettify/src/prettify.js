// Copyright (C) 2006 Google Inc.
var IN_GLOBAL_SCOPE=!0;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;!function(){function e(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var i=e.charAt(1);return t=u[i],t?t:i>="0"&&"7">=i?parseInt(e.substring(1),8):"u"===i||"x"===i?parseInt(e.substring(2),16):e.charCodeAt(1)}function i(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function n(e){var n=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),s=[],r="^"===n[0],a=["["];r&&a.push("^");for(var o=r?1:0,l=n.length;l>o;++o){var c=n[o];if(/\\[bdsw]/i.test(c))a.push(c);else{var d,u=t(c);l>o+2&&"-"===n[o+1]?(d=t(n[o+2]),o+=2):d=u,s.push([u,d]),65>d||u>122||(65>d||u>90||s.push([32|Math.max(65,u),32|Math.min(d,90)]),97>d||u>122||s.push([-33&Math.max(97,u),-33&Math.min(d,122)]))}}s.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});for(var p=[],h=[],o=0;o<s.length;++o){var m=s[o];m[0]<=h[1]+1?h[1]=Math.max(h[1],m[1]):p.push(h=m)}for(var o=0;o<p.length;++o){var m=p[o];a.push(i(m[0])),m[1]>m[0]&&(m[1]+1>m[0]&&a.push("-"),a.push(i(m[1])))}return a.push("]"),a.join("")}function s(e){for(var t=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),s=t.length,o=[],l=0,c=0;s>l;++l){var d=t[l];if("("===d)++c;else if("\\"===d.charAt(0)){var u=+d.substring(1);u&&(c>=u?o[u]=-1:t[l]=i(u))}}for(var l=1;l<o.length;++l)-1===o[l]&&(o[l]=++r);for(var l=0,c=0;s>l;++l){var d=t[l];if("("===d)++c,o[c]||(t[l]="(?:");else if("\\"===d.charAt(0)){var u=+d.substring(1);u&&c>=u&&(t[l]="\\"+o[u])}}for(var l=0;s>l;++l)"^"===t[l]&&"^"!==t[l+1]&&(t[l]="");if(e.ignoreCase&&a)for(var l=0;s>l;++l){var d=t[l],p=d.charAt(0);d.length>=2&&"["===p?t[l]=n(d):"\\"!==p&&(t[l]=d.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(-33&t,32|t)+"]"}))}return t.join("")}for(var r=0,a=!1,o=!1,l=0,c=e.length;c>l;++l){var d=e[l];if(d.ignoreCase)o=!0;else if(/[a-z]/i.test(d.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){a=!0,o=!1;break}}for(var u={b:8,t:9,n:10,v:11,f:12,r:13},p=[],l=0,c=e.length;c>l;++l){var d=e[l];if(d.global||d.multiline)throw new Error(""+d);p.push("(?:"+s(d)+")")}return new RegExp(p.join("|"),o?"gi":"g")}function t(e,t){function i(e){var l=e.nodeType;if(1==l){if(n.test(e.className))return;for(var c=e.firstChild;c;c=c.nextSibling)i(c);var d=e.nodeName.toLowerCase();("br"===d||"li"===d)&&(s[o]="\n",a[o<<1]=r++,a[1|o++<<1]=e)}else if(3==l||4==l){var u=e.nodeValue;u.length&&(u=t?u.replace(/\r\n?/g,"\n"):u.replace(/[ \t\r\n]+/g," "),s[o]=u,a[o<<1]=r,r+=u.length,a[1|o++<<1]=e)}}var n=/(?:^|\s)nocode(?:\s|$)/,s=[],r=0,a=[],o=0;return i(e),{sourceCode:s.join("").replace(/\n$/,""),spans:a}}function i(e,t,i,n){if(t){var s={sourceCode:t,basePos:e};i(s),n.push.apply(n,s.decorations)}}function n(e){for(var t=void 0,i=e.firstChild;i;i=i.nextSibling){var n=i.nodeType;t=1===n?t?e:i:3===n?j.test(i.nodeValue)?e:t:t}return t===e?void 0:t}function s(t,n){var s,r={};!function(){for(var i=t.concat(n),a=[],o={},l=0,c=i.length;c>l;++l){var d=i[l],u=d[3];if(u)for(var p=u.length;--p>=0;)r[u.charAt(p)]=d;var h=d[1],m=""+h;o.hasOwnProperty(m)||(a.push(h),o[m]=null)}a.push(/[\0-\uffff]/),s=e(a)}();var a=n.length,o=function(e){for(var t=e.sourceCode,l=e.basePos,d=[l,$],u=0,p=t.match(s)||[],h={},m=0,f=p.length;f>m;++m){var g,v=p[m],b=h[v],y=void 0;if("string"==typeof b)g=!1;else{var w=r[v.charAt(0)];if(w)y=v.match(w[1]),b=w[0];else{for(var x=0;a>x;++x)if(w=n[x],y=v.match(w[1])){b=w[0];break}y||(b=$)}g=b.length>=5&&"lang-"===b.substring(0,5),!g||y&&"string"==typeof y[1]||(g=!1,b=M),g||(h[v]=b)}var _=u;if(u+=v.length,g){var k=y[1],S=v.indexOf(k),C=S+k.length;y[2]&&(C=v.length-y[2].length,S=C-k.length);var R=b.substring(5);i(l+_,v.substring(0,S),o,d),i(l+_+S,k,c(R,k),d),i(l+_+C,v.substring(C),o,d)}else d.push(l+_,b)}e.decorations=d};return o}function r(e){var t=[],i=[];e.tripleQuotedStrings?t.push([E,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([E,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([E,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&i.push([E,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var n=e.hashComments;n&&(e.cStyleComments?(n>1?t.push([N,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([N,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),i.push([E,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([N,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(i.push([N,/^\/\/[^\r\n]*/,null]),i.push([N,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var r=e.regexLiterals;if(r){var a=r>1?"":"\n\r",o=a?".":"[\\S\\s]",l="/(?=[^/*"+a+"])"+"(?:[^/\\x5B\\x5C"+a+"]"+"|\\x5C"+o+"|\\x5B(?:[^\\x5C\\x5D"+a+"]"+"|\\x5C"+o+")*(?:\\x5D|$))+"+"/";i.push(["lang-regex",RegExp("^"+F+"("+l+")")])}var c=e.types;c&&i.push([D,c]);var d=(""+e.keywords).replace(/^ | $/g,"");d.length&&i.push([A,new RegExp("^(?:"+d.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([$,/^\s+/,null," \r\n	 "]);var u="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(u+="(?!s*/)"),i.push([I,/^@[a-z_$][a-z_$@0-9]*/i,null],[D,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[$,/^[a-z_$][a-z_$@0-9]*/i,null],[I,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[$,/^\\[\s\S]?/,null],[L,new RegExp(u),null]),s(t,i)}function a(e,t,i){function n(e){var t=e.nodeType;if(1!=t||r.test(e.className)){if((3==t||4==t)&&i){var l=e.nodeValue,c=l.match(a);if(c){var d=l.substring(0,c.index);e.nodeValue=d;var u=l.substring(c.index+c[0].length);if(u){var p=e.parentNode;p.insertBefore(o.createTextNode(u),e.nextSibling)}s(e),d||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)s(e),e.parentNode&&e.parentNode.removeChild(e);else for(var h=e.firstChild;h;h=h.nextSibling)n(h)}function s(e){function t(e,i){var n=i?e.cloneNode(!1):e,s=e.parentNode;if(s){var r=t(s,1),a=e.nextSibling;r.appendChild(n);for(var o=a;o;o=a)a=o.nextSibling,r.appendChild(o)}return n}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var i,n=t(e.nextSibling,0);(i=n.parentNode)&&1===i.nodeType;)n=i;c.push(n)}for(var r=/(?:^|\s)nocode(?:\s|$)/,a=/\r\n?|\n/,o=e.ownerDocument,l=o.createElement("li");e.firstChild;)l.appendChild(e.firstChild);for(var c=[l],d=0;d<c.length;++d)n(c[d]);t===(0|t)&&c[0].setAttribute("value",t);var u=o.createElement("ol");u.className="linenums";for(var p=Math.max(0,0|t-1)||0,d=0,h=c.length;h>d;++d)l=c[d],l.className="L"+(d+p)%10,l.firstChild||l.appendChild(o.createTextNode(" ")),u.appendChild(l);e.appendChild(u)}function o(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var i=/\n/g,n=e.sourceCode,s=n.length,r=0,a=e.spans,o=a.length,l=0,c=e.decorations,d=c.length,u=0;c[d]=s;var p,h;for(h=p=0;d>h;)c[h]!==c[h+2]?(c[p++]=c[h++],c[p++]=c[h++]):h+=2;for(d=p,h=p=0;d>h;){for(var m=c[h],f=c[h+1],g=h+2;d>=g+2&&c[g+1]===f;)g+=2;c[p++]=m,c[p++]=f,h=g}d=c.length=p;var v,b=e.sourceNode;b&&(v=b.style.display,b.style.display="none");try{for(;o>l;){a[l];var y,w=a[l+2]||s,x=c[u+2]||s,g=Math.min(w,x),_=a[l+1];if(1!==_.nodeType&&(y=n.substring(r,g))){t&&(y=y.replace(i,"\r")),_.nodeValue=y;var k=_.ownerDocument,S=k.createElement("span");S.className=c[u+1];var C=_.parentNode;C.replaceChild(S,_),S.appendChild(_),w>r&&(a[l+1]=_=k.createTextNode(n.substring(g,w)),C.insertBefore(_,S.nextSibling))}r=g,r>=w&&(l+=2),r>=x&&(u+=2)}}finally{b&&(b.style.display=v)}}function l(e,t){for(var i=t.length;--i>=0;){var n=t[i];V.hasOwnProperty(n)?h.console&&console.warn("cannot override language handler %s",n):V[n]=e}}function c(e,t){return e&&V.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),V[e]}function d(e){var i=e.langExtension;try{var n=t(e.sourceNode,e.pre),s=n.sourceCode;e.sourceCode=s,e.spans=n.spans,e.basePos=0,c(i,s)(e),o(e)}catch(r){h.console&&console.log(r&&r.stack||r)}}function u(e,t,i){var n=document.createElement("div");n.innerHTML="<pre>"+e+"</pre>",n=n.firstChild,i&&a(n,i,!0);var s={langExtension:t,numberLines:i,sourceNode:n,pre:1};return d(s),n.innerHTML}function p(e,t){function i(e){return r.getElementsByTagName(e)}function s(){for(var t=h.PR_SHOULD_USE_CONTINUATION?f.now()+250:1/0;v<c.length&&f.now()<t;v++){for(var i=c[v],r=S,l=i;l=l.previousSibling;){var u=l.nodeType,p=(7===u||8===u)&&l.nodeValue;if(p?!/^\??prettify\b/.test(p):3!==u||/\S/.test(l.nodeValue))break;if(p){r={},p.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,i){r[t]=i});break}}var m=i.className;if((r!==S||y.test(m))&&!w.test(m)){for(var C=!1,R=i.parentNode;R;R=R.parentNode){var T=R.tagName;if(k.test(T)&&R.className&&y.test(R.className)){C=!0;break}}if(!C){i.className+=" prettyprinted";var P=r.lang;if(!P){P=m.match(b);var E;!P&&(E=n(i))&&_.test(E.tagName)&&(P=E.className.match(b)),P&&(P=P[1])}var A;if(x.test(i.tagName))A=1;else{var N=i.currentStyle,D=o.defaultView,I=N?N.whiteSpace:D&&D.getComputedStyle?D.getComputedStyle(i,null).getPropertyValue("white-space"):0;A=I&&"pre"===I.substring(0,3)}var L=r.linenums;(L="true"===L||+L)||(L=m.match(/\blinenums\b(?::(\d+))?/),L=L?L[1]&&L[1].length?+L[1]:!0:!1),L&&a(i,L,A),g={langExtension:P,sourceNode:i,numberLines:L,pre:A},d(g)}}}v<c.length?setTimeout(s,250):"function"==typeof e&&e()}for(var r=t||document.body,o=r.ownerDocument||document,l=[i("pre"),i("code"),i("xmp")],c=[],u=0;u<l.length;++u)for(var p=0,m=l[u].length;m>p;++p)c.push(l[u][p]);l=null;var f=Date;f.now||(f={now:function(){return+new Date}});var g,v=0,b=/\blang(?:uage)?-([\w.]+)(?!\S)/,y=/\bprettyprint\b/,w=/\bprettyprinted\b/,x=/pre|xmp/i,_=/^code$/i,k=/^(?:pre|code|xmp)$/i,S={};s()}var h=window,m=["break,continue,do,else,for,if,return,while"],f=[m,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],g=[f,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],v=[g,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],b=[g,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],y=[b,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],w="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",x=[g,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],_="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",k=[m,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],S=[m,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],C=[m,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],R=[m,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],T=[v,y,x,_,k,S,R],P=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,E="str",A="kwd",N="com",D="typ",I="lit",L="pun",$="pln",O="tag",q="dec",M="src",z="atn",B="atv",U="nocode",F="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",j=/\S/,H=r({keywords:T,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),V={};l(H,["default-code"]),l(s([],[[$,/^[^<?]+/],[q,/^<!\w[^>]*(?:>|$)/],[N,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[L,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),l(s([[$,/^[\s]+/,null," 	\r\n"],[B,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[O,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[z,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[L,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),l(s([],[[B,/^[\s\S]+/]]),["uq.val"]),l(r({keywords:v,hashComments:!0,cStyleComments:!0,types:P}),["c","cc","cpp","cxx","cyc","m"]),l(r({keywords:"null,true,false"}),["json"]),l(r({keywords:y,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:P}),["cs"]),l(r({keywords:b,cStyleComments:!0}),["java"]),l(r({keywords:R,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),l(r({keywords:k,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),l(r({keywords:_,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),l(r({keywords:S,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),l(r({keywords:x,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),l(r({keywords:w,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),l(r({keywords:C,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),l(s([],[[E,/^[\s\S]+/]]),["regex"]);var W=h.PR={createSimpleLexer:s,registerLangHandler:l,sourceDecorator:r,PR_ATTRIB_NAME:z,PR_ATTRIB_VALUE:B,PR_COMMENT:N,PR_DECLARATION:q,PR_KEYWORD:A,PR_LITERAL:I,PR_NOCODE:U,PR_PLAIN:$,PR_PUNCTUATION:L,PR_SOURCE:M,PR_STRING:E,PR_TAG:O,PR_TYPE:D,prettyPrintOne:IN_GLOBAL_SCOPE?h.prettyPrintOne=u:prettyPrintOne=u,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?h.prettyPrint=p:prettyPrint=p};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return W})}();