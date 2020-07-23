var e=require("fs"),t=require("electron");var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=t,o={};Object.defineProperty(o,"__esModule",{value:!0});var i=async function(e,t,n){const r=new WeakMap;switch(n.diffMethod){case"heuristic":k(()=>function(e,t,n){let r=0;!function t(n,o){let i=n.firstChild,a=o.firstChild;const s=n.childNodes.length,d=o.childNodes.length;if(s>d)for(;a&&i;){if(P(i,a)){if(i.nodeType===Node.ELEMENT_NODE){const t=r.toString(36);e.set(a,t),e.set(i,t),r++}t(i,a),a=a.nextSibling}i=i.nextSibling}else if(s<d)for(;a&&i;){if(P(i,a)){if(i.nodeType===Node.ELEMENT_NODE){const t=r.toString(36);e.set(a,t),e.set(i,t),r++}t(i,a),i=i.nextSibling}a=a.nextSibling}}(t,n)}(r,t,e));break;case"myers":{const n=k(()=>Array.from(J(e))),o=k(()=>Array.from(J(t)));let i=0,a=0;k(()=>(0,N.diff)(n,o,(e,t)=>(i++,P(e,t)),e=>{for(const[t,n]of e){const e=a.toString(36);r.set(t,e),r.set(n,e),a++}})),console.log("a:",n.length,"b:",o.length,"comp:",i);break}}try{(0,x.default)(e,t,{childrenOnly:!0,onBeforeElUpdated(e,t){if(e.isEqualNode(t))return!1;const n=R(e,t);return!n||(n[0].textContent!==n[1].textContent&&(n[0].textContent=n[1].textContent),!1)},getNodeKey:e=>r.get(e)||""})}catch(n){console.error(n),e.innerHTML=t.innerHTML}n.renderLaTeX&&await n.mjController.queueTypeset(e)};o.update=i;var a,s={};a=s,Object.defineProperty(a,"__esModule",{value:!0});var d;var l="undefined"==typeof document?void 0:document,c=!!l&&"content"in l.createElement("template"),u=!!l&&l.createRange&&"createContextualFragment"in l.createRange();function p(e){return e=e.trim(),c?function(e){var t=l.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):u?function(e){return d||(d=l.createRange()).selectNode(l.body),d.createContextualFragment(e).childNodes[0]}(e):function(e){var t=l.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function f(e,t){var n,r,o=e.nodeName,i=t.nodeName;return o===i||(n=o.charCodeAt(0),r=i.charCodeAt(0),n<=90&&r>=97?o===i.toUpperCase():r<=90&&n>=97&&i===o.toUpperCase())}function m(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var h={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}m(e,t,"selected")},INPUT:function(e,t){m(e,t,"checked"),m(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,o=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(r=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===r){if(a.hasAttribute("selected")){o=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=o}}};function y(){}function v(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var g,b=(g=function(e,t){var n,r,o,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=a.length-1;s>=0;s--)r=(n=a[s]).name,o=n.namespaceURI,i=n.value,o?(r=n.localName||r,e.getAttributeNS(o,r)!==i&&("xmlns"===n.prefix&&(r=n.name),e.setAttributeNS(o,r,i))):e.getAttribute(r)!==i&&e.setAttribute(r,i);for(var d=e.attributes,l=d.length-1;l>=0;l--)r=(n=d[l]).name,(o=n.namespaceURI)?(r=n.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r)}},function(e,t,n){if(n||(n={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var r=t;(t=l.createElement("html")).innerHTML=r}else t=p(t);var o=n.getNodeKey||v,i=n.onBeforeNodeAdded||y,a=n.onNodeAdded||y,s=n.onBeforeElUpdated||y,d=n.onElUpdated||y,c=n.onBeforeNodeDiscarded||y,u=n.onNodeDiscarded||y,m=n.onBeforeElChildrenUpdated||y,b=!0===n.childrenOnly,w=Object.create(null),x=[];function N(e){x.push(e)}function M(e,t,n){!1!==c(e)&&(t&&t.removeChild(e),u(e),function e(t,n){if(1===t.nodeType)for(var r=t.firstChild;r;){var i=void 0;n&&(i=o(r))?N(i):(u(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function E(e){a(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=o(t);if(r){var i=w[r];i&&f(t,i)?(t.parentNode.replaceChild(i,t),T(i,t)):E(t)}else E(t);t=n}}function T(e,t,n){var r=o(t);if(r&&delete w[r],!n){if(!1===s(e,t))return;if(g(e,t),d(e),!1===m(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var n,r,a,s,d,c=t.firstChild,u=e.firstChild;e:for(;c;){for(s=c.nextSibling,n=o(c);u;){if(a=u.nextSibling,c.isSameNode&&c.isSameNode(u)){c=s,u=a;continue e}r=o(u);var p=u.nodeType,m=void 0;if(p===c.nodeType&&(1===p?(n?n!==r&&((d=w[n])?a===d?m=!1:(e.insertBefore(d,u),r?N(r):M(u,e,!0),u=d):m=!1):r&&(m=!1),(m=!1!==m&&f(u,c))&&T(u,c)):3!==p&&8!=p||(m=!0,u.nodeValue!==c.nodeValue&&(u.nodeValue=c.nodeValue))),m){c=s,u=a;continue e}r?N(r):M(u,e,!0),u=a}if(n&&(d=w[n])&&f(d,c))e.appendChild(d),T(d,c);else{var y=i(c);!1!==y&&(y&&(c=y),c.actualize&&(c=c.actualize(e.ownerDocument||l)),e.appendChild(c),E(c))}c=s,u=a}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=o(t))?N(n):M(t,e,!0),t=r}}(e,u,r);var v=h[e.nodeName];v&&v(e,t)}(e,t):h.TEXTAREA(e,t)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var r=o(n);r&&(w[r]=n),e(n),n=n.nextSibling}}(e);var S,C,A=e,L=A.nodeType,R=t.nodeType;if(!b)if(1===L)1===R?f(e,t)||(u(e),A=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(e,(S=t.nodeName,(C=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==C?l.createElementNS(C,S):l.createElement(S)))):A=t;else if(3===L||8===L){if(R===L)return A.nodeValue!==t.nodeValue&&(A.nodeValue=t.nodeValue),A;A=t}if(A===t)u(e);else{if(t.isSameNode&&t.isSameNode(A))return;if(T(A,t,b),x)for(var O=0,P=x.length;O<P;O++){var J=w[x[O]];J&&M(J,J.parentNode,!1)}}return!b&&A!==e&&e.parentNode&&(A.actualize&&(A=A.actualize(e.ownerDocument||l)),e.parentNode.replaceChild(A,e)),A});s.default=b;var w,x=(w=s)&&w.__esModule?w:{default:w},N={};Object.defineProperty(N,"__esModule",{value:!0});var M=function(e,t,n,r){const o=[];(function e(t,r,i=0,a=0){const[s,d,l,c]=[t.length,r.length,t.length+r.length,2*Math.min(t.length,r.length)+2];if(s>0&&d>0){const[u,p,f]=[s-d,Array(c).fill(0),Array(c).fill(0)];for(let m=0;m<l/2+l%2+1;m++)for(let h=0;h<2;h++){const[y,v,g,b]=0===h?[p,f,1,1]:[f,p,0,-1];for(let p=-(m-2*Math.max(0,m-d));p<m-2*Math.max(0,m-s)+1;p+=2){let f=p===-m||p!==m&&y[(p-1)%c]<y[(p+1)%c]?y[(p+1)%c]:y[(p-1)%c]+1,h=f-p;const[w,x]=[f,h];for(;f<s&&h<d&&n(t[(1-g)*s+b*f+(g-1)],r[(1-g)*d+b*h+(g-1)]);)f++,h++;y[p%c]=f;const N=-(p-u);if(l%2===g&&N>=-(m-g)&&N<=m-g&&y[p%c]+v[N%c]>=s){const[n,l,c,u,p]=1===g?[2*m-1,w,x,f,h]:[2*m,s-f,d-h,s-w,d-x];if(n>1||l!==u&&c!==p)return l!==u&&c!==p&&o.push([t.slice(l,u),r.slice(c,p)]),e(t.slice(0,l),r.slice(0,c),i,a),void e(t.slice(u,s),r.slice(p,d),i+u,a+p);if(d>s)return void o.push([t.slice(0,s),r.slice(0,s)]);if(d<s)return void o.push([t.slice(0,d),r.slice(0,d)])}}}}})(Array.from(e),Array.from(t)),r(function*(e){for(const[t,n]of e)yield*(0,E.zip)(t,n)}(o))};N.diff=M;var E={};Object.defineProperty(E,"__esModule",{value:!0});var T=function(e){if(!e)return;e.catch(e=>{console.error(e)})};E.handlePromise=T;var S=function(e){return!!(0,L.existsSync)(e)&&(0,L.lstatSync)(e).isFile()};E.isFileSync=S;var C=function(e,t){let n=e;for(const e of t){const t=n.querySelectorAll(":scope > "+e.tag).item(e.index);if(!t)break;n=t}return n===e?void 0:n};E.resolveElement=C;var A=function*(e,t){const n=e[Symbol.iterator](),r=t[Symbol.iterator]();let o=n.next(),i=r.next();for(;!o.done&&!i.done;)yield[o.value,i.value],o=n.next(),i=r.next()};E.zip=A;var L=e;function R(e,t){if(!O(e)||!O(t))return!1;if("SPAN"!==e.tagName||"SPAN"!==t.tagName||!e.classList.contains("math")||!t.classList.contains("math"))return!1;const n=e.querySelector(":scope > script");if(!n)return!1;const r=t.querySelector(":scope > script");return!!r&&(n.type===r.type&&[n,r])}function O(e){return e.nodeType===Node.ELEMENT_NODE}function P(e,t){if(e.isEqualNode(t))return!0;if(function(e,t){const n=R(e,t);return n&&n[0].textContent===n[1].textContent}(e,t))return!0;if(e.nodeType!==t.nodeType)return!1;if(e.childNodes.length!==t.childNodes.length)return!1;let n=e.firstChild,r=t.firstChild;for(;n&&r;){if(!P(n,r))return!1;n=n.nextSibling,r=r.nextSibling}switch(e.nodeType){case Node.DOCUMENT_TYPE_NODE:return function(e,t){return e.name===t.name&&e.publicId===t.publicId&&e.systemId===t.systemId}(e,t);case Node.ELEMENT_NODE:return function(e,t){return e.attributes.length===t.attributes.length&&Array.from(e.attributes).every(e=>e.isEqualNode(t.attributes.getNamedItemNS(e.namespaceURI,e.localName)))}(e,t);case Node.ATTRIBUTE_NODE:return function(e,t){return e.namespaceURI===t.namespaceURI&&e.localName===t.localName&&e.value===t.value}(e,t);case Node.PROCESSING_INSTRUCTION_NODE:return function(e,t){return e.target===t.target&&e.data===t.data}(e,t);case Node.TEXT_NODE:case Node.COMMENT_NODE:return function(e,t){return e.data===t.data}(e,t);default:return!0}}function*J(e){for(const t of e.children)"SPAN"===t.tagName&&t.classList.contains("MathJax")||"SPAN"===t.tagName&&t.classList.contains("MathJax_SVG")||"SCRIPT"!==t.tagName&&("DIV"===t.tagName&&t.classList.contains("MathJax_Display")||"DIV"===t.tagName&&t.classList.contains("MathJax_SVG_Display")||(yield t,yield*J(t)))}function k(e){const t=performance.now(),n=e();return console.log(e.toString(),performance.now()-t,"ms"),n}var I={};Object.defineProperty(I,"__esModule",{value:!0});var q=function(e){const t=document.getElementById("MathJax_SVG_Hidden"),n=t&&t.parentElement;return null!==n?n.outerHTML+e.innerHTML:e.innerHTML};I.processHTMLString=q;var H=void 0;I.MathJaxController=H;class _{constructor(e,t){this.userMacros=e,this.mathJaxConfig=t,this.readyPromise=this.attachMathJax()}static async create(e,t){const n=new _(e,t);return await n.readyPromise,n}dispose(){const e=document.head.querySelector(`script[src='${_.mjSrc}']`);e&&e.remove()}jaxTeXConfig(){return{extensions:this.mathJaxConfig.texExtensions,Macros:this.userMacros,equationNumbers:this.mathJaxConfig.numberEquations?{autoNumber:"AMS",useLabelIds:!1}:{}}}async queueTypeset(e){const t=Array.from(e.querySelectorAll('span.math > script[type^="math/tex"]')),n=t.filter(e=>{const t=MathJax.Hub.getJaxFor(e);return!t||t.needsUpdate()});if(0!==n.length)return new Promise(e=>{if(MathJax.InputJax.TeX&&MathJax.Hub.Queue(["resetEquationNumbers",MathJax.InputJax.TeX]),this.mathJaxConfig.numberEquations){const{temps:e,spans:n}=this.setupTemps(t);MathJax.Hub.Queue(["PreProcess",MathJax.Hub,e]),MathJax.Hub.Queue(["Reprocess",MathJax.Hub,e]),MathJax.Hub.Queue(()=>this.cleanupTemps(e,n))}else{const{temps:e,spans:t}=this.setupTemps(n);MathJax.Hub.Queue(["Update",MathJax.Hub,e]),MathJax.Hub.Queue(()=>this.cleanupTemps(e,t))}MathJax.Hub.Queue([e])})}cleanupTemps(e,t){for(const e of t)e.remove();for(const t of e)t.style.visibility="",t.style.position="",t.style.width="",t.style.display="",t.classList.remove("temp-MathJax")}setupTemps(e){const t=[],n=[];for(const r of e){const e=r.parentElement;if(!e)continue;const o=e.parentElement;if(!o)continue;const i=r.previousElementSibling;if(i){const a=e.cloneNode(!1);a.classList.add("temp-MathJax"),a.appendChild(r.cloneNode(!0)),t.push(a),n.push(e),o.insertBefore(a,e),a.style.visibility="hidden",a.style.position="absolute",r.type.includes("display")&&(a.style.width=window.getComputedStyle(i).width,a.style.display="block")}else t.push(e)}return{temps:t,spans:n}}async attachMathJax(){await async function(e){const t=document.createElement("script");return t.src=e,t.type="text/javascript",document.head.appendChild(t),new Promise(e=>{t.addEventListener("load",()=>e())})}(_.mjSrc),MathJax.Hub.Config({jax:["input/TeX","output/"+this.mathJaxConfig.latexRenderer],extensions:[],TeX:this.jaxTeXConfig(),"HTML-CSS":{availableFonts:[],webFont:"TeX",imageFont:null,undefinedFamily:this.mathJaxConfig.undefinedFamily,mtextFontInherit:!0},messageStyle:"none",showMathMenu:!1,skipStartupTypeset:!0}),MathJax.Hub.Configured()}}H=_,I.MathJaxController=H,_.mjSrc=n.require.resolve("mathjax")+"?delayStartupUntil=configured";var j=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=V();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(E),D={};Object.defineProperty(D,"__esModule",{value:!0});var U=function(e){return e.querySelectorAll("img[src],audio[src],video[src],link[href]")};function V(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return V=function(){return e},e}let B;D.getMedia=U;let K=!1;function X(e){r.ipcRenderer.send("atom-markdown-preview-plus-ipc-uncaught-error",B,{message:e.message,name:e.name,stack:e.stack})}window.addEventListener("error",e=>{X(e.error)}),window.addEventListener("unhandledrejection",e=>{X(e.reason)});const F={mathJax:function(){let e;const t=new Promise(t=>e=t);return t.resolve=e,t}(),sourceLineMap:new Map,revSourceMap:new WeakMap};function z({firstLine:e,lastLine:t}){if(0===e)return void window.scroll({top:0});const n=F.sourceLineMap,r=Array.from(n.keys()).sort((e,t)=>e-t);let o=r.findIndex(t=>t>=e);o>0&&o--;let i=r.findIndex(e=>e>=t);-1===i?i=r.length-1:i<r.length-1&&i++;const a=r[o],s=r[i];let d=0,l=0;const c=Array.from(n.entries()).slice(o,i+1);for(const[e,t]of c){const n=e<=(s+a)/2?e-a+1:s-e+1;d+=n,l+=t.getBoundingClientRect().top*n}if(0===d)return;const u=document.documentElement.scrollTop-document.documentElement.clientHeight/2+l/d;window.scroll({top:u})}let Q,G;async function W({id:e,html:t,renderLaTeX:n,map:i,diffMethod:a,scrollSyncParams:s}){const d=document.querySelector("div.update-preview");if(!d)return;const l=(new DOMParser).parseFromString(t,"text/html"),c=document;if(c&&l.head.hasChildNodes){let e=c.head.querySelector("original-elements");e||(e=c.createElement("original-elements"),c.head.appendChild(e)),e.innerHTML="";for(const t of Array.from(l.head.childNodes))e.appendChild(t)}const u=s?void 0:Array.from(d.children).map(e=>({el:e,r:e.getBoundingClientRect()})).filter(({r:e})=>e.top<=window.innerHeight&&e.bottom>=0);if(await(0,o.update)(d,l.body,{renderLaTeX:n,diffMethod:a,mjController:await F.mathJax}),u){const e=u.filter(({el:e})=>e.offsetParent),t=e[e.length-1];t&&window.scrollBy({top:t.el.getBoundingClientRect().bottom-t.r.bottom})}if(i){const e=new Map,t=new WeakMap;for(const[n,r]of Object.entries(i)){const o=parseInt(n,10),i=j.resolveElement(d,r);if(i){e.set(o,i);const n=t.get(i);n?n.push(o):t.set(i,[o])}}F.sourceLineMap=e,F.revSourceMap=t}s&&z(s),r.ipcRenderer.send("atom-markdown-preview-plus-ipc-request-reply",B,{id:e,request:"update-preview",result:(0,I.processHTMLString)(d)})}function $(){let e;return G&&(e=W(G).then($)),G=void 0,e}r.ipcRenderer.on("set-id",(e,t)=>{B=t}),r.ipcRenderer.on("init",(e,t)=>{F.mathJax.resolve(I.MathJaxController.create(t.userMacros,t.mathJaxConfig)),document.documentElement.dataset.markdownPreviewPlusContext=t.context,"pdf-export"===t.context&&document.documentElement.style.setProperty("width",t.pdfExportOptions.width+"mm","important")}),r.ipcRenderer.on("set-native-keys",(e,t)=>{K=t}),r.ipcRenderer.on("scroll-sync",(e,t)=>{z(t)}),r.ipcRenderer.on("style",(e,{styles:t})=>{let n=document.head.querySelector("style#atom-styles");n||(n=document.createElement("style"),n.id="atom-styles",document.head.appendChild(n)),n.innerHTML=t.join("\n")}),r.ipcRenderer.on("update-images",(e,{oldsrc:t,v:n})=>{const r=(0,D.getMedia)(document);for(const e of Array.from(r)){let r,o,i;i="LINK"===e.tagName?"href":"src";let a=e.getAttribute(i);const s=a.match(/^(.*)\?v=(\d+)$/);s&&([,a,r]=s),a===t&&(void 0!==r&&(o=parseInt(r,10)),n!==o&&(e[i]=n?`${a}?v=${n}`:""+a))}}),r.ipcRenderer.on("sync",(e,{line:t,flash:n})=>{if(!document.querySelector("div.update-preview"))return;let r=F.sourceLineMap.get(t);if(!r)for(let e=t-1;e>=0&&(r=F.sourceLineMap.get(t),!r);e-=1);r&&(r.scrollIntoViewIfNeeded(!0),n&&(r.classList.add("flash"),setTimeout(()=>r.classList.remove("flash"),1e3)))}),r.ipcRenderer.on("update-preview",(e,t)=>{Q?G=t:Q=W(t).then($).catch(X).then(()=>{Q=void 0})}),r.ipcRenderer.on("await-fully-ready",async(e,{id:t})=>{"complete"!==document.readyState?document.addEventListener("load",(function e(){r.ipcRenderer.send("atom-markdown-preview-plus-ipc-request-reply",B,{id:t,request:"await-fully-ready",result:void 0}),document.removeEventListener("load",e)})):r.ipcRenderer.send("atom-markdown-preview-plus-ipc-request-reply",B,{id:t,request:"await-fully-ready",result:void 0})});const Y=document.createElement("base");function Z(e,t){if(K&&!t.altKey&&!t.ctrlKey&&!t.shiftKey&&!t.metaKey&&t.code.match(/^(Arrow.*|Page.*|Space|Home|End)$/))return;const n={type:e,altKey:t.altKey,ctrlKey:t.ctrlKey,bubbles:t.bubbles,cancelable:t.cancelable,code:t.code,composed:t.composed,detail:t.detail,isComposing:t.isComposing,key:t.key,location:t.location,metaKey:t.metaKey,repeat:t.repeat,shiftKey:t.shiftKey};r.ipcRenderer.send("atom-markdown-preview-plus-ipc-key",B,n),t.preventDefault()}let ee;document.head.appendChild(Y),r.ipcRenderer.on("set-base-path",(e,{path:t})=>{Y.href=t||""}),r.ipcRenderer.on("error",(e,{msg:t})=>{const n=document.querySelector("div.update-preview");if(!n)return;const r=document.createElement("div");r.innerHTML=`<h2>Previewing Markdown Failed</h2><h3>${t}</h3>`,n.appendChild(r)}),document.addEventListener("wheel",e=>{e.ctrlKey&&(e.deltaY>0?r.ipcRenderer.send("atom-markdown-preview-plus-ipc-zoom-in",B):e.deltaY<0&&r.ipcRenderer.send("atom-markdown-preview-plus-ipc-zoom-out",B),e.preventDefault(),e.stopPropagation())}),document.addEventListener("scroll",e=>{const t=document.documentElement.clientHeight,n=Array.from(F.sourceLineMap.entries()).filter(([e,n])=>{const{top:r,bottom:o}=n.getBoundingClientRect();return r>0&&o<t}).map(([e,t])=>e);r.ipcRenderer.send("atom-markdown-preview-plus-ipc-did-scroll-preview",B,{max:Math.max(...n),min:Math.min(...n)})}),document.addEventListener("keydown",Z.bind(void 0,"keydown")),document.addEventListener("keyup",Z.bind(void 0,"keyup")),document.addEventListener("contextmenu",e=>{ee=e.target,r.ipcRenderer.send("atom-markdown-preview-plus-ipc-show-context-menu",B)}),r.ipcRenderer.on("sync-source",(e,{id:t})=>{let n=ee;const o=F.revSourceMap;let i=o.get(n);for(;!i&&n.parentElement;)n=n.parentElement,i=o.get(n);i&&r.ipcRenderer.send("atom-markdown-preview-plus-ipc-request-reply",B,{id:t,request:"sync-source",result:Math.min(...i)})}),r.ipcRenderer.on("reload",(e,{id:t})=>{window.onbeforeunload=null,r.ipcRenderer.send("atom-markdown-preview-plus-ipc-request-reply",B,{id:t,request:"reload",result:void 0})}),window.onbeforeunload=function(){return!1},r.ipcRenderer.on("get-tex-config",async(e,{id:t})=>{r.ipcRenderer.send("atom-markdown-preview-plus-ipc-request-reply",B,{id:t,request:"get-tex-config",result:(await F.mathJax).jaxTeXConfig()})}),r.ipcRenderer.on("get-selection",async(e,{id:t})=>{const n=window.getSelection(),o=n&&n.toString(),i=n&&n.anchorNode;r.ipcRenderer.send("atom-markdown-preview-plus-ipc-request-reply",B,{id:t,request:"get-selection",result:o&&i?o:void 0})}),document.addEventListener("click",e=>{if(!e.target)return;const t=e.target;if("A"===t.tagName){const n=t.getAttribute("href");if(n&&n.startsWith("#")){e.preventDefault();const t=document.getElementById(decodeURIComponent(n).slice(1));t&&t.scrollIntoView()}}});
//# sourceMappingURL=main.js.map
