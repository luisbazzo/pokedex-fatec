"use strict";(self.webpackChunkpokedex_fatec=self.webpackChunkpokedex_fatec||[]).push([[8592],{6022:(C,m,d)=>{d.d(m,{c:()=>i});var c=d(9816),h=d(7864),l=d(1898);const i=(s,n)=>{let e,t;const r=(g,f,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(g,f);E&&n(E)?E!==e&&(v(),a(E,p)):v()},a=(g,f)=>{e=g,t||(t=e);const p=e;(0,c.w)(()=>p.classList.add("ion-activated")),f()},v=(g=!1)=>{if(!e)return;const f=e;(0,c.w)(()=>f.classList.remove("ion-activated")),g&&t!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>r(g.currentX,g.currentY,h.a),onMove:g=>r(g.currentX,g.currentY,h.b),onEnd:()=>{v(!0),(0,h.h)(),t=void 0}})}},2225:(C,m,d)=>{d.d(m,{g:()=>c});const c=(n,e,t,r,a)=>l(n[1],e[1],t[1],r[1],a).map(v=>h(n[0],e[0],t[0],r[0],v)),h=(n,e,t,r,a)=>a*(3*e*Math.pow(a-1,2)+a*(-3*t*a+3*t+r*a))-n*Math.pow(a-1,3),l=(n,e,t,r,a)=>s((r-=a)-3*(t-=a)+3*(e-=a)-(n-=a),3*t-6*e+3*n,3*e-3*n,n).filter(g=>g>=0&&g<=1),s=(n,e,t,r)=>{if(0===n)return((n,e,t)=>{const r=e*e-4*n*t;return r<0?[]:[(-e+Math.sqrt(r))/(2*n),(-e-Math.sqrt(r))/(2*n)]})(e,t,r);const a=(3*(t/=n)-(e/=n)*e)/3,v=(2*e*e*e-9*e*t+27*(r/=n))/27;if(0===a)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-a),-Math.sqrt(-a)];const g=Math.pow(v/2,2)+Math.pow(a/3,3);if(0===g)return[Math.pow(v/2,.5)-e/3];if(g>0)return[Math.pow(-v/2+Math.sqrt(g),1/3)-Math.pow(v/2+Math.sqrt(g),1/3)-e/3];const f=Math.sqrt(Math.pow(-a/3,3)),p=Math.acos(-v/(2*Math.sqrt(Math.pow(-a/3,3)))),E=2*Math.pow(f,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5062:(C,m,d)=>{d.d(m,{i:()=>c});const c=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(C,m,d)=>{d.r(m),d.d(m,{startFocusVisible:()=>i});const c="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,r=s||document.body,a=y=>{n.forEach(u=>u.classList.remove(c)),y.forEach(u=>u.classList.add(c)),n=y},v=()=>{e=!1,a([])},g=y=>{e=l.includes(y.key),e||a([])},f=y=>{if(e&&void 0!==y.composedPath){const u=y.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));a(u)}},p=()=>{t.activeElement===r&&a([])};return t.addEventListener("keydown",g),t.addEventListener("focusin",f),t.addEventListener("focusout",p),t.addEventListener("touchstart",v),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",g),t.removeEventListener("focusin",f),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:a}}},8689:(C,m,d)=>{d.d(m,{c:()=>h});var c=d(3577);const h=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const a=void 0!==e.label||l(e),v=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,g=(0,c.h)(e);t=!0===e.legacy||!a&&!v&&null!==g}return t}}},l=n=>null!==n.shadowRoot&&!!(i.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||s.includes(n.tagName)&&""!==n.textContent),i=["ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(C,m,d)=>{d.d(m,{a:()=>i,b:()=>s,c:()=>l,d:()=>e,h:()=>n});const c={getEngine(){var t;const r=window;return r.TapticEngine||(null===(t=r.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&r.Capacitor.Plugins.Haptics},available(){var t;const r=window;return!!this.getEngine()&&("web"!==(null===(t=r.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const r=this.getEngine();if(!r)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;r.impact({style:a})},notification(t){const r=this.getEngine();if(!r)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;r.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},h=()=>c.available(),l=()=>{h()&&c.selection()},i=()=>{h()&&c.selectionStart()},s=()=>{h()&&c.selectionChanged()},n=()=>{h()&&c.selectionEnd()},e=t=>{h()&&c.impact(t)}},7366:(C,m,d)=>{d.d(m,{a:()=>c,b:()=>f,c:()=>e,d:()=>p,e:()=>x,f:()=>n,g:()=>E,h:()=>l,i:()=>h,j:()=>_,k:()=>M,l:()=>t,m:()=>v,n:()=>y,o:()=>a,p:()=>s,q:()=>i,r:()=>o,s:()=>O,t:()=>g,u:()=>u,v:()=>w,w:()=>r});const c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(C,m,d)=>{d.d(m,{I:()=>n,a:()=>a,b:()=>s,c:()=>f,d:()=>E,f:()=>v,g:()=>r,i:()=>t,p:()=>p,r:()=>y,s:()=>g});var c=d(5861),h=d(3577),l=d(1178);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=u=>"ION-CONTENT"===u.tagName,r=function(){var u=(0,c.Z)(function*(w){return t(w)?(yield new Promise(o=>(0,h.c)(w,o)),w.getScrollElement()):w});return function(o){return u.apply(this,arguments)}}(),a=u=>u.querySelector(n)||u.querySelector(e),v=u=>u.closest(e),g=(u,w)=>t(u)?u.scrollToTop(w):Promise.resolve(u.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),f=(u,w,o,_)=>t(u)?u.scrollByPoint(w,o,_):Promise.resolve(u.scrollBy({top:o,left:w,behavior:_>0?"smooth":"auto"})),p=u=>(0,l.b)(u,s),E=u=>{if(t(u)){const o=u.scrollY;return u.scrollY=!1,o}return u.style.setProperty("overflow","hidden"),!0},y=(u,w)=>{t(u)?u.scrollY=w:u.style.removeProperty("overflow")}},9240:(C,m,d)=>{d.d(m,{g:()=>h});var c=d(1178);const h=(i,s,n)=>{const e=null==i?0:i.toString().length,t=l(e,s);if(void 0===n)return t;try{return n(e,s)}catch(r){return(0,c.a)("Exception in provided `counterFormatter`.",r),t}},l=(i,s)=>`${i} / ${s}`},5234:(C,m,d)=>{d.r(m),d.d(m,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>w,keyboardDidClose:()=>p,keyboardDidOpen:()=>g,keyboardDidResize:()=>f,resetKeyboardAssist:()=>e,setKeyboardClose:()=>v,setKeyboardOpen:()=>a,startKeyboardAssist:()=>t,trackViewportChanges:()=>u});const c="ionKeyboardDidShow",h="ionKeyboardDidHide";let i={},s={},n=!1;const e=()=>{i={},s={},n=!1},t=o=>{r(o),o.visualViewport&&(s=w(o.visualViewport),o.visualViewport.onresize=()=>{u(o),g()||f(o)?a(o):p(o)&&v(o)})},r=o=>{o.addEventListener("keyboardDidShow",_=>a(o,_)),o.addEventListener("keyboardDidHide",()=>v(o))},a=(o,_)=>{E(o,_),n=!0},v=o=>{y(o),n=!1},g=()=>!n&&i.width===s.width&&(i.height-s.height)*s.scale>150,f=o=>n&&!p(o),p=o=>n&&s.height===o.innerHeight,E=(o,_)=>{const O=new CustomEvent(c,{detail:{keyboardHeight:_?_.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(O)},y=o=>{const _=new CustomEvent(h);o.dispatchEvent(_)},u=o=>{i=Object.assign({},s),s=w(o.visualViewport)},w=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(C,m,d)=>{d.d(m,{c:()=>h});var c=d(3457);const h=l=>{let i,s,n;const e=()=>{i=()=>{n=!0,l&&l(!0)},s=()=>{n=!1,l&&l(!1)},null==c.w||c.w.addEventListener("keyboardWillShow",i),null==c.w||c.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",i),null==c.w||c.w.removeEventListener("keyboardWillHide",s),i=s=void 0},isKeyboardVisible:()=>n}}},7741:(C,m,d)=>{d.d(m,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(l,i,s)=>{const n=l*i/s-l+"ms",e=2*Math.PI*i/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(l,i,s)=>{const n=i/s,e=l*n-l+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,i,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":l*i/s-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":l*i/s-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,i,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/s-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/s-l+"ms"}})}}},7539:(C,m,d)=>{d.r(m),d.d(m,{createSwipeBackGesture:()=>s});var c=d(3577),h=d(5062),l=d(1898);d(4349);const s=(n,e,t,r,a)=>{const v=n.ownerDocument.defaultView;let g=(0,h.i)(n);const p=o=>g?-o.deltaX:o.deltaX;return(0,l.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(g=(0,h.i)(n),(o=>{const{startX:M}=o;return g?M>=v.innerWidth-50:M<=50})(o)&&e()),onStart:t,onMove:o=>{const M=p(o)/v.innerWidth;r(M)},onEnd:o=>{const _=p(o),M=v.innerWidth,O=_/M,x=(o=>g?-o.velocityX:o.velocityX)(o),L=x>=0&&(x>.2||_>M/2),k=(L?1-O:O)*M;let D=0;if(k>5){const S=k/Math.abs(x);D=Math.min(S,540)}a(L,O<=0?.01:(0,c.l)(0,O,.9999),D)}})}}}]);