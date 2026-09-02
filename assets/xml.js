class xls{constructor(e="defaultStore",t="TpicsaStore"){this.s=e,this.d=t,this.db=null}static open(e,t){const s=new xls(e,t);return new Proxy(s,{get:(e,t)=>"function"==typeof e[t]?(...s)=>e[t](...s):e[t]})}async _p(){try{const e=await new Promise((e,t)=>{const s=indexedDB.open(this.d);s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error)});const t={v:e.version,e:e.objectStoreNames.contains(this.s)};return e.close(),t}catch(e){return{v:1,e:!0}}}async open(){if(this.db&&this.db.objectStoreNames.contains(this.s))return this.db;const{v:e,e:t}=await this._p(),s=t?e:e+1;return new Promise((e,t)=>{const r=indexedDB.open(this.d,s);r.onupgradeneeded=e=>{const t=e.target.result;t.objectStoreNames.contains(this.s)||t.createObjectStore(this.s)},r.onsuccess=t=>{(this.db=t.target.result).onclose=()=>this.db=null,e(this.db)},r.onerror=e=>t(e.target.error),r.onblocked=()=>t(new Error("Blocked"))})}async _tx(e,t){const s=await this.open();return new Promise((r,n)=>{const c=s.transaction(this.s,e),i=t(c.objectStore(this.s));c.oncomplete=()=>r(i?.result??!0),c.onerror=e=>n(e.target.error),c.onabort=e=>n(e.target.error)})}async get(e){return this._tx("readonly",t=>t.get(e))}async set(e,t){return this._tx("readwrite",s=>s.put(t,e))}async remove(e){return this._tx("readwrite",t=>t.delete(e))}async clear(){return this._tx("readwrite",e=>e.clear())}async delete(){this.close();const{v:e,e:t}=await this._p();return!t||new Promise((t,s)=>{const r=indexedDB.open(this.d,e+1);r.onupgradeneeded=e=>{const t=e.target.result;t.objectStoreNames.contains(this.s)&&t.deleteObjectStore(this.s)},r.onsuccess=e=>{e.target.result.close(),t(!0)},r.onerror=e=>s(e.target.error),r.onblocked=()=>s(new Error("Blocked"))})}static async reset(e="TpicsaStore"){return new Promise((t,s)=>{const r=indexedDB.deleteDatabase(e);r.onsuccess=()=>t(!0),r.onerror=e=>s(e.target.error),r.onblocked=()=>s(new Error("Blocked"))})}close(){this.db&&(this.db.close(),this.db=null)}}
!async function(){const e=xls.open("fonts"),t={hindi:"https://fonts.gstatic.com/s/notosansdevanagari/v30/TuG7UUFzXI5FBtUq5a8bjKYTZjtRU6Sgv3NaV_SNmI0b8QQCQmHN5TV_9qo.woff2",english:"https://fonts.gstatic.com/s/googlesans/v67/4UaRrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iq2vgCI.woff2",code:"https://fonts.gstatic.com/s/googlesanscode/v17/pxiSyogzv91QhV44Z_GQBHsGf5PuckJMZfIVTPZaiXEp_jF58LQ.woff2",flex:"https://fonts.gstatic.com/s/googlesansflex/v22/t5svIQcYNIWbFgDgAAzZ34auoVyXkJCOvp3SFWJbN5hF8Ju1x6sKCyp0l9sI40swNJwGpVd4AZzz0v6lJ4qFXNZhGjLvDSkV4W6GGn8.woff2"},r={hindi:{weight:"100 900",style:"normal",display:"swap"},english:{weight:"400 700",style:"normal",display:"swap"},code:{weight:"300 800",style:"normal",display:"swap"},flex:{weight:"1 1000",stretch:"100%",style:"normal",display:"swap"}};await Promise.allSettled(Object.entries(t).map((async([t,s])=>{try{if([...document.fonts].some((e=>e.family===t&&"loaded"===e.status)))return;let o=await e.get(t).catch((()=>null));if(!o){const e=await fetch(s);if(!e.ok)throw 0;o=await e.arrayBuffer(),e.set(t,o).catch((()=>{}))}const n=new FontFace(t,o,r[t]);await n.load(),document.fonts.add(n)}catch(e){}})))}();
const exam = xls.open("exam");
exam.set("0",{name:"Manoj kumar",isActive:false});
exam.get("0").then(x=>{console.log(x)});


(()=>{"use strict";const r={primary:"#1a73e8",primaryHover:"#1557b0",primaryActive:"#0d47a1",link:"#1a0dab",linkVisited:"#681da8",linkHover:"#0b0080",success:"#137333",successBox:"#e6f4ea",info:"#8e24aa",infoBox:"#e8f0fe",warning:"#b06000",warningBox:"#fef7e0",error:"#c5221f",errorBox:"#fce8e6",card:"#f8f9fa",dialog:"rgba(32, 33, 36, 0.6)",text:"#202124",secondary:"#5f6368",disabled:"#80868b",border:"#dadce0",borderHover:"#bdc1c6",borderFocus:"#1a73e8",divider:"#e8eaed",gray25:"#fcfcfd",gray50:"#f8f9fa",gray100:"#f1f3f4",gray200:"#e8eaed",gray300:"#dadce0",gray400:"#bdc1c6",gray500:"#80868b",gray600:"#5f6368",gray700:"#3c4043",gray800:"#202124",purple:"#673ab7",teal:"#00796b",cyan:"#007b99",indigo:"#3949ab",orange:"#e65100",pink:"#d81b60",fill:"-webkit-fill-available"};window.color=e=>{if("string"!=typeof e)return e;const a=e=>r[e]??e;return e.includes(" ")?e.split(" ").map(a).join(" "):a(e)}})();
(()=>{"use strict";const t={ai:"align-items",ac:"align-content",as:"align-self",ax:"animation",aspr:"aspect-ratio",att:"attachment",ap:"appearance",acc:"accent-color",bd:"border",bm:"blend-mode",bg:"background",bk:"border-block",bb:"border-bottom",bt:"border-top",br:"border-right",bl:"border-left",bbl:"border-bottom-left",bbr:"border-bottom-right",btl:"border-top-left",btr:"border-top-right",bdi:"border-image",bi:"border-inline",bx:"box",bxs:"box-shadow",bsz:"box-sizing",bdr:"border-radius",bdc:"border-color",bds:"border-style",bdw:"border-width",bcs:"border-collapse",cc:"caret-color",cp:"clip-path",col:"column",cols:"columns",cl:"color",clr:"clear",cg:"column-gap",cur:"cursor",cnt:"content",del:"delay",dir:"direction",dur:"duration",d:"display",dis:"display",ec:"empty-cells",fs:"font-size",ff:"font-family",fw:"font-weight",fst:"font-style",func:"timing-function",fl:"float",fx:"flex",fxd:"flex-direction",fxw:"flex-wrap",fxg:"flex-grow",fxs:"flex-shrink",fxb:"flex-basis",flt:"filter",gp:"gap",g:"grid",gtc:"grid-template-columns",gtr:"grid-template-rows",gta:"grid-template-areas",gc:"grid-column",gr:"grid-row",ga:"grid-area",rg:"row-gap",ht:"height",hyp:"hyphens",itc:"iteration-count",img:"image",ins:"inset",iso:"isolation",jc:"justify-content",ji:"justify-items",js:"justify-self",kf:"keyframes",ls:"letter-spacing",lb:"line-break",lh:"line-height",lst:"list-style",lstt:"list-style-type",lstp:"list-style-position",l:"left",mg:"margin",mk:"margin-block",mi:"margin-inline",mb:"margin-bottom",mt:"margin-top",ml:"margin-left",mr:"margin-right",mxh:"max-height",mxw:"max-width",mnh:"min-height",mnw:"min-width",mix:"mix-blend-mode",nav:"navigation",os:"offset",op:"opacity",ol:"outline",of:"overflow",ofx:"overflow-x",ofy:"overflow-y",osb:"overscroll-behavior",osx:"overscroll-behavior-x",osy:"overscroll-behavior-y",fit:"object-fit",opos:"object-position",ord:"order",olc:"outline-color",ols:"outline-style",olw:"outline-width",pos:"position",pd:"padding",pk:"padding-block",pi:"padding-inline",pb:"padding-bottom",pt:"padding-top",pl:"padding-left",pr:"padding-right",pc:"place-content",pitems:"place-items",ps:"place-self",pe:"pointer-events",q:"quotes",r:"right",rsz:"resize",scr:"scroll",sb:"scrollbar",sz:"size",scb:"scroll-behavior",sm:"scroll-margin",sp:"scroll-padding",tl:"timeline",tx:"text",tb:"text-box",tc:"text-combination",td:"text-decoration",tt:"text-transform",tu:"text-underline",txm:"transform",txn:"transition",tsl:"translate",ta:"text-align",ti:"text-indent",to:"text-overflow",ts:"text-shadow",t:"top",tfo:"transform-origin",us:"user-select",vis:"visibility",va:"vertical-align",vt:"view-timeline",wd:"width",ws:"word-spacing",ww:"word-wrap",wb:"word-break",wsp:"white-space",wkc:"web-kit-appearance",zi:"z-index"};window.props=o=>{if("string"!=typeof o)return o;const i=o=>t[o]?t[o]:o.includes("-")?o.split("-").map(o=>t[o]??o).join("-"):o;return o.includes(" ")?o.split(" ").map(i).join(" "):i(o)}})();
(()=>{"use strict";const e={a:HTMLAnchorElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,details:HTMLDetailsElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,dd:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,progress:HTMLProgressElement,q:HTMLQuoteElement,script:HTMLScriptElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,video:HTMLVideoElement};window.element=t=>"string"==typeof t?e[t.toLowerCase()]:void 0})();
(()=>{'use strict';const e=['@media print{}','@media (min-width:576px){}','@media (min-width:680px){}','@media (min-width:799px){}','@media (min-width:992px){}','@media (min-width:1366px){}'],t=['html{scrollbar-width:thin;scroll-behavior:smooth;}','*{box-sizing:border-box}',".rupee::before{content:'\\20B9';margin-right:2px}",'@keyframes spin {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',".loading::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.7);z-index:10;}",".loading::after{content:'';position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #1a73e8;border-radius:50%;z-index:11;animation:spin 1s linear infinite}",'.clamp{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}',"body{margin:0px !important;font-size:15px !important;font-optical-sizing:auto !important;font-style:normal;font-family:'english' !important;font-size-adjust:none !important}",'b{font-weight:550 !important;color:black !important}','.tab-active{color:#1967d2 !important;padding:6px 4px 4px 4px !important;margin:0px 30px 0px 0px}','.page-active{display:block !important}','.show{display:block !important}','.hide{display:none !important}','.disable{pointer-events:none !important}','.skip{display:none !important}','.swipe{left:0 !important}','.noscroll{position:relative;overflow:hidden}','.rotate-90{transform:rotate(90deg) !important}','.active-link{color:#174ea6 !important;border-bottom:1.8px solid #174ea6 !important;font-weight:500 !important}','.pager{color:white !important;background-color:#185abc !important}','.popup{display:inline-block !important}','.flex{display:flex !important}'],n='tpicsa',o=()=>Array.from(document.styleSheets).find(e=>e.title===n)||null;window.sheet=()=>{let r=o();if(!r){const s=document.createElement('style');s.title=n,document.head.append(s),r=s.sheet,[...e,...t].forEach(e=>r.insertRule(e,r.cssRules.length))}return r}})();
(()=>{'use strict';let ctr = 0;window.getCounter=()=>{ctr++;return ctr.toString(16);};window.styleMap=s=>{const e=s=>"function"!=typeof window.props?s:s.includes("-")?s.split("-").map((s=>window.props(s))).join("-"):window.props(s),r=(t,o,n=!1)=>{if(s&&"function"==typeof s.setProperty&&"string"==typeof t&&"string"==typeof o){o.includes("!important")&&(n=!0,o=o.replace("!important","").trim());const i=e(t.trim()),c="function"==typeof window.color?window.color(o.trim()):o.trim(),p=n?"important":"";["","-ms-","-webkit-"].forEach((e=>s.setProperty(e+i,c,p)))}},t=(e,s=!1)=>{if(!e||!e.includes(":"))return;const t=e.indexOf(":"),o=e.slice(0,t),n=e.slice(t+1);o&&n&&r(o,n,s)};return{style:s,add:r,range:(e,s=!1)=>{e&&"string"==typeof e&&e.split(";").forEach((e=>{e.trim()&&t(e,s)}))}}}})();
(function () {
  "use strict";
  const svgs = {
    default: { type: "d", v: "0 0 1024 1024", d: "M384 192v640l384-320.064z" },
    globe: { type: "d", v: "0 0 24 24", d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" },
    plus: { type: "d", v: "0 0 124 124", d: "M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z" },
    at: { type: "d", v: "0 0 497 512", d: "M497 227.28c0 29.39-4.56 56.35-13.58 80.75-9.13 24.51-22.07 43.5-38.62 56.98-16.56 13.47-35.66 20.16-57.2 20.16-17.82 0-32.78-5.41-45.09-16.13-12.2-10.82-19.42-24.62-21.75-41.38h-2.44c-8.28 18.04-20.16 32.15-35.66 42.34-15.38 10.07-33.73 15.17-54.85 15.17-31.09 0-55.39-10.62-72.9-31.83-17.5-21.23-26.21-50.08-26.21-86.59 0-42.23 12.21-76.61 36.61-103.03 24.51-26.42 56.66-39.58 96.45-39.58 14.01 0 30.03 1.28 47.86 3.93 17.82 2.55 33.85 6.16 48.17 10.72l-7.75 146v6.79c0 36.92 13.8 55.39 41.28 55.39 18.89 0 34.27-11.14 46.05-33.43 11.78-22.28 17.72-51.24 17.72-86.89 0-37.57-7.64-70.35-23.03-98.58-15.28-28.22-37.13-49.87-65.47-65.15-28.22-15.17-60.69-22.81-97.4-22.81-46.26 0-86.48 9.55-120.64 28.75-34.17 19.21-60.27 46.59-78.31 82.13-18.04 35.54-27.05 76.61-27.05 123.29 0 63.25 16.65 111.84 50.08 145.9 33.32 33.96 81.38 50.93 144.19 50.93 43.51 0 88.71-8.91 135.5-26.74v41.38c-39.79 17.41-84.89 26.11-135.5 26.11-75.23 0-133.58-20.7-175.18-62.08C20.69 408.51 0 350.68 0 276.41c0-53.9 11.04-101.86 33.21-143.99 22.18-42.01 53.8-74.59 94.86-97.72C169.03 11.57 216.14 0 269.19 0c44.56 0 84.14 9.34 118.95 28.12 34.69 18.78 61.53 45.41 80.42 79.9 19 34.48 28.44 74.27 28.44 119.26zm-321.4 40.75c0 52.62 20.17 78.94 60.59 78.94 42.97 0 66.21-32.47 69.93-97.3l4.45-81.07c-14.96-4.14-31.19-6.26-48.81-6.26-26.95 0-48.06 9.34-63.34 28.02-15.18 18.56-22.82 44.56-22.82 77.67z" },
    message: { type: "d", v: "0 0 124 90", d: "M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z" },
    back: { type: "d", v: "0 0 512 410", d: "m28.94 205.45 169.28 165.24v-68.24c0-6.17 4.7-11.26 10.72-11.87 60.27-11.97 115.03-12.11 164.86 3.05 40.12 12.21 76.8 34.22 110.31 67.83-10.57-65.33-37.77-119.98-78.64-160.47-47.84-47.36-114.68-75.56-195.78-78.99-6.41-.25-11.43-5.53-11.43-11.89l-.04-69.89L28.94 205.45zM201.86 407.5 3.37 213.75c-4.58-4.71-4.48-12.25.23-16.83L201.22 4.04A11.87 11.87 0 0 1 210.16 0c6.58 0 11.93 5.35 11.93 11.94v86.93c82.19 5.79 150.41 35.99 200.16 85.25 52.41 51.9 84.08 124.76 89.73 212.34.22 3.73-1.3 7.51-4.43 10.02-5.13 4.12-12.62 3.31-16.74-1.82-36.96-45.99-78.09-74.33-123.91-88.27-43.54-13.25-91.69-13.7-144.81-4.11v86.69c-.03 2.99-1.15 5.99-3.4 8.3-4.59 4.71-12.13 4.81-16.83.23z" },
    computer: { type: "d", v: "0 0 122 95", d: "M90.37,26.48h25.48c1.94,0,3.71,0.79,4.97,2.06c1.28,1.28,2.06,3.04,2.06,4.97v53.82 c0,1.94-0.79,3.71-2.06,4.97c-1.28,1.28-3.04,2.06-4.97,2.06H90.37c-1.94,0-3.71-0.79-4.97-2.06c-1.28-1.28-2.06-3.04-2.06-4.97 V33.5c0-1.94,0.79-3.71,2.06-4.97C86.68,27.25,88.43,26.48,90.37,26.48L90.37,26.48z M3.05,0h106.12c1.68,0,3.05,1.37,3.05,3.05 v18.44h-6.48V8.44c0-1.48-1.21-2.7-2.7-2.7H9.17v0c-1.48,0-2.7,1.21-2.7,2.7v52.53c0,1.48,1.21,2.7,2.7,2.7H76.7V76.4H3.05 C1.37,76.4,0,75.03,0,73.35V3.05C0,1.37,1.37,0,3.05,0L3.05,0L3.05,0z M42.27,80.61h27.67c0.07,4.79,2.04,9.07,7.39,12.45H34.89 C39.16,89.96,42.29,86.19,42.27,80.61L42.27,80.61L42.27,80.61z M56.11,66.12c2.16,0,3.92,1.75,3.92,3.92 c0,2.16-1.76,3.92-3.92,3.92c-2.16,0-3.92-1.75-3.92-3.92C52.19,67.88,53.94,66.12,56.11,66.12L56.11,66.12z M103.1,85.72 c1.59,0,2.89,1.28,2.89,2.89c0,1.59-1.28,2.89-2.89,2.89c-1.59,0-2.89-1.28-2.89-2.89C100.21,87.02,101.49,85.72,103.1,85.72 L103.1,85.72z M86.3,83.52h33.61V37.37H86.3V83.52L86.3,83.52z" },
    arrowLeft: { type: "d", v: "0 0 1024 1024", d: "M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" },
    arrowRight: { type: "d", v: "0 0 1024 1024", d: "M338.752 104.704a64 64 0 000 90.496l316.8 316.8-316.8 316.8a64 64 0 0090.496 90.496l362.048-362.048a64 64 0 000-90.496L429.248 104.704a64 64 0 00-90.496 0z" },
    caretDown: { type: "d", v: "0 0 1024 1024", d: "m192 384 320 384 320-384z" },
    caretRight: { type: "d", v: "0 0 1024 1024", d: "M384 192v640l384-320.064z" },
    caretLeft: { type: "d", v: "0 0 1024 1024", d: "M672 192 288 511.936 672 832z" },
    dot: { type: "d", v: "5 3 10 14", d: "M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" },
    verticalLine: { type: "d", v: "0 -1 16 16", d: "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" },
    cart: { type: "d", v: "0 40 960 960", d: "M829.698 276.726c24.627 13.655 46.3 31.51 64.032 53.567 14.776 18.906 26.598 39.913 35.464 63.02C938.06 417.47 942 442.678 942 468.937c0 6.302 0 12.603-.985 18.905-.985 6.302-.985 12.604-1.97 17.856l-52.211 309.847v2.1c-7.881 49.366-29.553 90.329-66.002 123.94-36.45 33.61-79.794 50.415-129.05 50.415H328.277c-49.255 0-92.6-16.805-129.05-51.466-36.448-34.66-59.106-76.674-66.001-128.14l-48.27-309.847v1.05c-.986-5.251-1.97-11.553-1.97-17.855C82 480.49 82 474.188 82 467.886c0-26.258 3.94-51.466 12.806-75.623 8.866-24.158 20.688-45.165 35.464-64.07 17.732-22.057 39.405-38.863 64.032-52.517 24.628-13.654 52.211-19.956 80.78-19.956v-2.1c3.94-30.46 12.806-59.87 26.597-87.178 12.807-27.309 30.539-51.466 51.226-71.422 20.687-19.957 45.315-34.661 72.898-46.215C452.401 37.252 480.969 32 511.507 32c30.539 0 59.107 5.252 85.705 16.805 27.583 11.554 52.21 27.309 72.898 47.265 20.687 19.956 38.42 44.114 51.226 71.422 13.791 26.259 22.657 55.668 26.598 88.228 29.553 1.05 57.136 7.352 81.764 21.006ZM624.795 142.284c-32.509-29.409-69.943-44.113-113.288-45.164-43.344 1.05-80.778 15.755-113.287 45.164-32.509 29.41-52.21 66.171-59.107 111.335h344.788v-1.05c-6.895-44.114-26.597-80.875-59.106-110.285Zm198.992 661.707 52.21-309.847v1.05c.986-5.25.986-9.452 1.97-14.704.986-5.251.986-9.453.986-14.704 0-17.856-2.955-35.712-7.88-51.467-5.911-15.754-13.792-29.409-23.643-42.013-12.807-15.755-27.583-28.359-45.315-37.811-17.732-9.453-36.45-13.655-57.137-13.655H280.007c-20.687 0-39.404 4.202-57.136 13.655-17.732 9.452-32.509 21.006-45.315 36.761a187.831 187.831 0 0 0-23.643 44.114c-5.91 16.805-8.866 34.66-8.866 52.516 0 4.202 0 8.403.985 11.554 0 4.201 0 8.402.985 12.604l47.285 309.847v1.05c4.926 34.66 20.688 63.02 45.315 86.127 24.628 24.157 54.181 35.711 87.675 35.711h363.505c33.494 0 63.047-11.554 87.675-34.66 24.628-23.108 39.404-51.467 45.315-86.128Zm-489.6-311.947c7.882-8.403 11.822-18.906 11.822-31.51 0-11.554-3.94-22.057-11.821-31.51-8.866-8.403-18.717-12.604-29.553-12.604-11.822 0-21.673 4.201-29.554 12.604-8.866 9.453-12.806 19.956-12.806 31.51 0 12.604 3.94 23.107 12.806 31.51 7.881 9.453 17.732 13.654 29.554 13.654 10.836 0 20.687-4.201 29.553-13.654Zm413.747 0c7.88-8.403 11.82-18.906 11.82-31.51 0-11.554-3.94-22.057-11.82-31.51-8.866-8.403-18.718-12.604-30.539-12.604-10.836 0-20.687 4.201-28.568 12.604-8.866 9.453-12.806 19.956-12.806 31.51 0 12.604 3.94 23.107 12.806 31.51 7.88 9.453 17.732 13.654 28.568 13.654 11.821 0 21.673-4.201 30.539-13.654Z" },
    bell: { type: "d", v: "0 0 960 960", d: "m879.267 613.424 32.422 46.644c7.827 10.847 13.417 22.78 17.889 34.712 3.354 11.932 5.59 24.949 5.59 39.05 0 36.882-13.416 68.34-40.249 94.373-26.832 27.119-59.254 40.136-97.267 41.22h-157.64v16.272c-4.472 29.288-19.006 54.237-42.484 74.847C572.932 981.152 544.981 992 512.559 992s-61.49-10.847-84.969-31.458c-24.596-20.61-39.13-45.559-42.484-75.932v-15.186h-157.64c-38.013 0-70.435-13.017-96.15-39.051C104.485 804.339 91.069 772.88 91.069 736c0-14.102 2.236-28.203 6.708-42.305 4.472-13.017 11.18-24.95 20.125-35.797l31.304-42.305c21.242-27.118 38.012-58.576 50.31-93.288 12.299-33.627 17.889-69.424 17.889-107.39v-9.762c0-59.661 16.77-112.814 51.428-160.543 33.54-46.644 77.143-81.356 130.808-103.05h-2.236c12.298-4.34 24.596-8.679 38.012-11.933 13.416-3.254 26.832-6.508 41.367-7.593V66.712c0-9.763 3.354-18.44 11.18-24.95C494.67 35.255 502.497 32 512.559 32s17.888 3.254 25.714 9.763c6.708 6.508 10.062 15.186 10.062 24.949v53.152l1.118 1.085c38.013 3.254 73.79 14.102 106.212 30.373 33.54 16.271 62.608 37.966 87.205 64 23.478 26.034 42.484 55.322 57.018 88.95 14.534 33.626 21.242 69.423 21.242 107.389v7.593-1.085 7.594c0 34.712 5.59 68.339 15.653 99.796 10.062 31.458 23.478 60.746 42.484 87.865ZM568.46 877.017v-7.593H456.658v7.593c2.236 13.017 8.944 23.864 19.007 32.542 10.062 8.678 22.36 13.017 36.894 13.017 14.534 0 26.832-4.339 36.894-13.017 10.063-8.678 16.77-19.525 19.007-32.542ZM227.466 800h570.186c17.888 0 33.54-6.508 45.839-18.44 12.298-11.933 19.006-27.12 19.006-45.56v-3.254c0-7.593-1.118-14.102-2.236-19.526-2.236-5.423-4.472-10.847-7.826-16.27l-32.423-46.645 1.118 1.085c-22.36-31.458-40.248-67.254-52.546-106.305-12.298-37.966-19.006-78.102-19.006-120.407v-13.017c0-31.458-5.59-59.661-17.889-86.78-12.298-27.118-27.95-49.898-48.074-70.508-21.242-20.61-45.839-35.797-73.789-47.729-27.95-11.932-57.019-17.356-88.323-17.356h-2.236c-16.77 0-32.422 1.085-48.074 4.34-16.77 3.253-31.305 7.592-45.839 13.016h-1.118c-39.13 16.271-71.553 42.305-97.267 78.102-25.714 35.796-38.012 75.932-38.012 120.407v3.254-1.085 9.763c0 44.474-6.709 87.864-21.243 128-14.534 41.22-33.54 78.101-58.136 111.729l-32.423 42.305c-4.472 5.423-7.826 10.847-10.062 16.27-3.354 6.51-4.472 13.018-4.472 20.611 0 18.44 6.708 33.627 19.006 45.56 12.298 11.932 27.95 18.44 45.839 18.44ZM105.602 447.458l-4.472 1.084h-1.118c-8.944 0-16.77-3.254-22.36-8.678-6.708-5.423-11.18-13.017-12.298-20.61v1.085c-1.118-7.593-1.118-16.271-2.236-23.864C62 388.88 62 380.203 62 372.61c0-49.898 11.18-96.542 33.54-138.847 22.36-42.305 52.547-77.017 90.56-106.305 3.353-1.085 5.59-3.255 8.943-4.34 3.355-1.084 6.709-1.084 10.063-1.084 5.59 0 11.18 1.085 16.77 3.254 4.472 3.254 8.944 6.509 12.298 10.848 1.118 3.254 3.354 5.423 4.472 8.678 1.118 3.254 1.118 6.508 1.118 9.762 0 5.424-1.118 10.848-3.354 15.187-3.354 5.423-6.708 9.762-11.18 13.017-27.95 21.695-50.31 48.813-67.08 81.356-16.771 32.542-25.715 67.254-25.715 105.22 0 6.508 0 13.017 1.118 19.525 1.118 7.594 1.118 14.102 2.236 19.526l1.118 2.17v2.169c0 9.762-3.354 17.356-8.944 22.78-5.59 6.508-13.416 10.847-22.36 11.932ZM828.957 118.78l10.062 6.508v1.085c36.894 28.203 67.08 62.915 89.44 105.22S962 320.543 962 369.356c0 8.678 0 17.356-1.118 24.95-1.118 8.677-2.236 16.27-3.354 23.863-1.118 7.594-5.59 15.187-11.18 20.61-6.708 5.424-14.534 8.679-23.478 8.679h-5.59c-8.945-1.085-16.77-5.424-22.36-11.933-5.59-5.423-8.945-13.017-8.945-22.78l1.118-2.169v-2.17 1.086c1.118-6.509 1.118-13.017 2.236-19.526 1.118-6.508 1.118-13.017 1.118-20.61 0-37.966-7.826-72.678-24.596-105.22-16.77-32.543-40.249-59.661-68.199-82.441-5.59-3.254-8.944-7.593-12.298-13.017-3.354-5.424-5.59-10.847-5.59-17.356 0-9.763 3.354-17.356 11.18-24.95 6.708-6.508 14.534-9.762 24.596-9.762 4.472 0 8.944 1.085 13.417 2.17Z" },
    close: { type: "d", v: "0 0 19 19", d: "M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" },
    code: { type: "d", v: "0 0 122 102", d: "M44.97,12.84h-17.2L0,49.37L27.77,85.9h17.2L17.2,49.37L44.97,12.84L44.97,12.84z M77.91,12.84h17.2l27.77,36.53 L95.11,85.9h-17.2l27.77-36.53L77.91,12.84L77.91,12.84z M70.17,0.04l5.96,1.39c0.94,0.22,1.52,1.16,1.31,2.1l-22.5,96.69 c-0.22,0.93-1.16,1.52-2.1,1.31l-5.95-1.39c-0.94-0.22-1.52-1.16-1.31-2.1l22.5-96.69C68.3,0.42,69.24-0.17,70.17,0.04L70.17,0.04 L70.17,0.04z" },
    mic: { type: "d", v: "0 0 19 19", d: "M11.665 7.915v1.31a5.257 5.257 0 0 1-1.514 3.694 5.174 5.174 0 0 1-1.641 1.126 5.04 5.04 0 0 1-1.456.384v1.899h2.312a.554.554 0 0 1 0 1.108H3.634a.554.554 0 0 1 0-1.108h2.312v-1.899a5.045 5.045 0 0 1-1.456-.384 5.174 5.174 0 0 1-1.641-1.126 5.257 5.257 0 0 1-1.514-3.695v-1.31a.554.554 0 1 1 1.109 0v1.31a4.131 4.131 0 0 0 1.195 2.917 3.989 3.989 0 0 0 5.722 0 4.133 4.133 0 0 0 1.195-2.917v-1.31a.554.554 0 1 1 1.109 0zM3.77 10.37a2.875 2.875 0 0 1-.233-1.146V4.738A2.905 2.905 0 0 1 3.77 3.58a3 3 0 0 1 1.59-1.59 2.902 2.902 0 0 1 1.158-.233 2.865 2.865 0 0 1 1.152.233 2.977 2.977 0 0 1 1.793 2.748l-.012 4.487a2.958 2.958 0 0 1-.856 2.09 3.025 3.025 0 0 1-.937.634 2.865 2.865 0 0 1-1.152.233 2.905 2.905 0 0 1-1.158-.233A2.957 2.957 0 0 1 3.77 10.37z" },
    tpicsa: { type: "d", v: "60 4 960 960", d: "M0,0M466.17372368,644.52884915 C468.42084439,606.54360087,473.76628836,530.27668957,474.88984872,465.47832486 C568.14535816,420.78979748,626.57049661,392.85946786,626.57049661,392.85946786 C626.57049661,392.85946786,709.8990106,313.39671422,799.78383898,332.38933836 C798.66027863,329.03817022,861.39461076,214.10535833,940.0438356,179.47154687 C956.89723363,181.70617598,946.78519773,163.83076502,933.30247347,169.41683095 C933.30247347,169.41683095,934.42603383,169.41683095,934.42603383,169.41683095 C896.22498176,185.05785316,764.76842025,250.97339342,764.76842025,250.97339342 C756.90349777,282.25536259,735.55585103,278.90372304,726.56736819,266.61437801 C717.57888535,254.32503298,722.07312677,233.09798247,756.90349777,239.80126158 C756.90349777,239.80126158,927.6846717,160.47912547,927.6846717,160.47912547 C945.66163737,154.89305955,934.42603383,137.01764859,924.31399063,152.65863318 C806.34015338,186.17502872,707.46684216,176.12011005,705.21972145,172.7684705 C638.92966052,274.4348703,550.16839249,267.73159119,550.16839249,267.73159119 C550.16839249,267.73159119,519.83226291,283.37257578,473.76628836,306.83405265 C473.76628836,163.83076502,470.3956073,31.99960924,470.3956073,31.99960924 C470.3956073,31.99960924,295.12019195,43.17174109,295.12019195,43.17174109 C295.12019195,43.17174109,299.61443337,226.39470336,301.86155408,396.21110742 C224.3358896,435.31356888,137.82174228,478.88488308,53.5649809,516.87013135 C10.07540388,588.37177517,30.94759727,630.82587618,129.10524249,630.82587618 C180.38112445,605.12997294,240.33809237,576.08243014,298.76323082,547.03488734 C298.76323082,547.03488734,298.76323082,630.64585183,298.76323082,630.64585183 C298.76323082,1093.95837679,942.56331411,1144.16521701,992,590.90261629 C977.39368511,630.2471521,882.77511971,667.9908987,775.15282125,664.63868647 C770.65857983,1033.31903739,484.15068936,1056.78051426,466.17372368,644.52884915Z M533.46378461,276.31735097 C533.46378461,276.31735097,550.37672639,267.61779089,550.37672639,267.61779089 C550.37672639,267.61779089,624.47217335,393.82801096,624.47217335,393.82801096 C624.47217335,393.82801096,604.55854492,403.37554323,604.55854492,403.37554323 C604.55854492,403.37554323,533.46378461,276.31735097,533.46378461,276.31735097Z " },
    youtube: { type: "d", v: "0 0 32 32", d: "M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z" },
    whatsapp: { type: "d", v: "0 0 32 32", d: "M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z" },
    media: { type: "d", v: "0 0 122.88 95.04", d: "M93.22,33.05a9.46,9.46,0,1,1-9.47,9.46,9.45,9.45,0,0,1,9.47-9.46Zm7.49-22.22v-3H7.86V74.32h4.43v7.86H6.89a6.87,6.87,0,0,1-4.86-2,6.81,6.81,0,0,1-2-4.85V6.89A6.9,6.9,0,0,1,6.89,0h94.79a6.9,6.9,0,0,1,6.89,6.89v3.94Zm9.16,76.36L93.47,61a3.76,3.76,0,0,0-6.37,0L79.36,73.47l8.42,13.72H84.32l-23-36.68a4.37,4.37,0,0,0-7.4,0L31.47,87.19H28.32V26.83H115V87.19ZM116,95H27.35a6.91,6.91,0,0,1-6.89-6.88V25.86A6.91,6.91,0,0,1,27.35,19H116a6.9,6.9,0,0,1,6.88,6.88v62.3A6.91,6.91,0,0,1,116,95Z" },
    playStore: { type: "s", v: "-80 0 466.9 466.9", d: '<style>.st0{fill:url(#SVGID_1_)}.st1{fill:url(#SVGID_2_)}.st2{fill:url(#SVGID_3_)}.st3{fill:url(#SVGID_4_)}</style><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" y1="112.094" x2="261.746" y2="112.094"><stop offset="0" stop-color="#63be6b"/><stop offset=".506" stop-color="#5bbc6a"/><stop offset="1" stop-color="#4ab96a"/></linearGradient><path class="st0" d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7 81.8-81.8z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1=".152" y1="223.393" x2="179.896" y2="223.393"><stop offset="0" stop-color="#3ec6f2"/><stop offset="1" stop-color="#45afe3"/></linearGradient><path class="st1" d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1.2 44.4z"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="179.896" y1="229.464" x2="407.976" y2="229.464"><stop offset="0" stop-color="#faa51a"/><stop offset=".387" stop-color="#fab716"/><stop offset=".741" stop-color="#fac412"/><stop offset="1" stop-color="#fac80f"/></linearGradient><path class="st2" d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="1.744" y1="345.521" x2="272.296" y2="345.521"><stop offset="0" stop-color="#ec3b50"/><stop offset="1" stop-color="#e7515b"/></linearGradient><path class="st3" d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4L1.7 402.3z"/>' }
  };

  window.icon = (key) => {
    return svgs[key] || svgs.default;
  };
})();

class xmln{#e;#t={media:{},pseudo:{}};constructor(t){if(!t||!(t instanceof HTMLElement))throw new Error("window.css requires a valid HTMLElement.");if(this.sheet=window.sheet(),!this.sheet)throw new Error("window.sheet is missing.");this.root=t;this.selector="x"+window.getCounter(),t.classList.add(this.selector),this.#e=t,this.default("")}#r(t,e=!1,s=this.sheet){const i=e?`@keyframes a${t}`:`.${t}`,r=s.cssRules.length;return s.insertRule(`${i}{}`,r),s.cssRules.item(r)}#s(t,e=this.sheet){return window.styleMap(this.#r(t,!1,e).style)}#i(t,e){return this.#t.pseudo[t]||=this.#s(this.selector+e)}#o(t,e){return this.#t.media[t]||=window.styleMap(this.#r(this.selector,!1,this.sheet.cssRules.item(e)).style)}#l(){return this.#t.design||=this.#s(this.selector)}get style(){return this.#l().style}default(t){return this.#l().range(t),this}animation(t){return this.#l().range(`animation:a${this.selector} ${t}`),this}frames(t){const e=this.#t.animation||=this.#r(this.selector,!0);"function"==typeof e.appendRule?e.appendRule(t):e.insertRule(t,e.cssRules.length)}print(t){return this.#o("print",0).range(t,!0),this}sm(t){return this.#o("sm",1).range(t,!0),this}md(t){return this.#o("md",2).range(t,!0),this}lg(t){return this.#o("lg",3).range(t,!0),this}xl(t){return this.#o("xl",4).range(t,!0),this}wd(t){return this.#o("wd",5).range(t,!0),this}active(t){return this.#i("active",":active").range(t),this}hover(t){return this.#i("hover",":hover").range(t),this}focus(t){return this.#i("focus",":focus").range(t),this}blur(t){return this.#i("blur",":not(:focus)").range(t),this}focusWithin(t){return this.#i("focusWithin",":focus-within").range(t),this}focusVisible(t){return this.#i("focusVisible",":focus-visible").range(t),this}after(t){return this.#i("after","::after").range(t),this}before(t){return this.#i("before","::before").range(t),this}ph(t){return this.#i("ph","::placeholder").range(t),this}selection(t){return this.#i("selection","::selection").range(t),this}target(t){return this.#i("target",":target").range(t),this}visited(t){return this.#i("visited",":visited").range(t),this}link(t){return this.#i("link",":link").range(t),this}checked(t){return this.#i("checked",":checked").range(t),this}disabled(t){return this.#i("disabled",":disabled").range(t),this}enabled(t){return this.#i("enabled",":enabled").range(t),this}valid(t){return this.#i("valid",":valid").range(t),this}invalid(t){return this.#i("invalid",":invalid").range(t),this}required(t){return this.#i("required",":required").range(t),this}optional(t){return this.#i("optional",":optional").range(t),this}readOnly(t){return this.#i("readOnly",":read-only").range(t),this}firstChild(t){return this.#i("firstChild",":first-child").range(t),this}lastChild(t){return this.#i("lastChild",":last-child").range(t),this}empty(t){return this.#i("empty",":empty").range(t),this}nthChild(t,e){return this.#s(`${this.selector}:nth-child(${t})`).range(e),this}custom(t,e){return this.#s(this.selector+t).range(e),this}invalidate(){const t=this.#e;return["props","animation","frames","sm","md","lg","xl","wd","print","hover","focus","active","blur","after","before","ph","selection","disabled","checked","target"].forEach((e=>{if(t.hasAttribute(e)){const s=t.getAttribute(e);"props"===e?this.default(s):"frames"===e?s.includes(";")?s.split(";").forEach((t=>this.frames(t))):this.frames(s):this[e]?.(s),t.removeAttribute(e)}})),this}}
class xe{static #h=new Map;static #e=new Set;static #i(t){if(this.#e.has(t))return;let u=t=="focus"||t=="blur",a=t=="mouseenter"?"mouseover":t=="mouseleave"?"mouseout":t;document.addEventListener(a,e=>this.#d(t,e),u);this.#e.add(t)}static register(t,n,c){this.#i(t);this.#h.has(t)||this.#h.set(t,new Map);let m=this.#h.get(t);m.has(n)||m.set(n,new Set);m.get(n).add(c)}static #d(t,e){let m=this.#h.get(t);if(m)for(let[n,s]of m){let m=e.target.closest?.(n);m&&s.forEach(c=>c(e,m))}}}
class swal{
  constructor(){

  }
  static handle(r){
    if(r!==undefined){
      if(!r.interactive){
        if(r.action === "reload"){window.location.reload()}
        if(r.action === "redirect"){window.location = window.location.origin+r.href;}
        if(r.action === "eval"){eval(r.message)}
        if(r.action === "render"){}
        if(r.action === "reset"){}
      }
    }
  }
}
class xml {
  #e;
  static _ro = null;
  static _cb = new WeakMap();

  constructor(e) {
    if (e instanceof HTMLElement || e instanceof SVGElement) {
      this.#e = e;
      this.root = e;
      this.ui = new xmln(e);
      this.ui.default((this.get("lang") === "hi") ? "ff:hindi" : "ff:english");
      if(["INPUT", "A", "BUTTON", "TEXTAREA", "SELECT"].indexOf(this.root.nodeName) > -1) { this.set("aria-label", this.uid) }
      this.define("xml", () => { return this });
      this.ui.default?.(""); 
    }
  }

  get uid() { return this.ui?.selector; } 
  get sheet() { return this.ui?.sheet; }
  static get ref() { return new xml(); } 
  get isNull() { return !(this.#e instanceof HTMLElement || this.#e instanceof SVGElement); }
  get is() { return this.get("is"); } set is(v) { this.set("is", v); }
  get id() { return this.#e?.id ?? ""; } set id(v) { if (!this.isNull) this.#e.id = v; }
  get name() { return this.#e?.name ?? ""; } set name(v) { if (!this.isNull) this.#e.name = v; }
  get type() { return this.#e?.type ?? ""; } set type(v) { if (!this.isNull) this.#e.type = v; }
  get href() { return this.#e?.href ?? ""; } set href(v) { if (!this.isNull) this.#e.href = v; }
  get value() { return this.#e?.value ?? ""; } set value(v) { if (!this.isNull) this.#e.value = v; }
  get placeholder() { return this.#e?.placeholder ?? ""; } set placeholder(v) { if (!this.isNull) this.#e.placeholder = v; }
  get text() { return this.#e?.textContent ?? ""; } set text(v) { if (!this.isNull) this.#e.innerText = v; }
  get inner() { return this.#e?.innerHTML ?? ""; } set inner(v) { if (!this.isNull) this.#e.innerHTML = v; }
  get outer() { return this.#e?.outerHTML ?? ""; } set outer(v) { if (!this.isNull) this.#e.outerHTML = v; }

  set size(v) { this.set("height", v); this.set("width", v); }
  set icon(name) {
    if (typeof window.icon !== "function") return;
    const s = window.icon(name); if (!s) return;
    this.set("viewBox", s.v);
    const svgContent = s.type === "d"
      ? `<path stroke="inherit" stroke-width="inherit" stroke-linecap="inherit" stroke-linejoin="inherit" d="${s.d}" />`
      : s.d;
    this.adjacent("beforeend", svgContent);
  }

  set style(v)        { this.ui?.default?.(v); }
  set animation(v)    { this.ui?.animation?.(v); }
  set frames(v)       { this.ui?.frames?.(v); }
  set print(v)        { this.ui?.print?.(v); }
  set sm(v)           { this.ui?.sm?.(v); }
  set md(v)           { this.ui?.md?.(v); }
  set lg(v)           { this.ui?.lg?.(v); }
  set xl(v)           { this.ui?.xl?.(v); }
  set wd(v)           { this.ui?.wd?.(v); }
  set custom(v)       { this.ui?.custom?.(v[0], v[1]); }
  set active(v)       { this.ui?.active?.(v); }
  set after(v)        { this.ui?.after?.(v); }
  set before(v)       { this.ui?.before?.(v); }
  set blur(v)         { this.ui?.blur?.(v); }
  set checked(v)      { this.ui?.checked?.(v); }
  set disabled(v)     { this.ui?.disabled?.(v); }
  set empty(v)        { this.ui?.empty?.(); }
  set enabled(v)      { this.ui?.enabled?.(v); }
  set firstChild(v)   { this.ui?.firstChild?.(v); }
  set focusStyle(v)   { this.ui?.focus?.(v); }
  set focusWithin(v)  { this.ui?.focusWithin?.(v); }
  set focusVisible(v) { this.ui?.focusVisible?.(v); }
  set holder(v)       { this.ui?.ph?.(v); }
  set hover(v)        { this.ui?.hover?.(v); }
  set invalid(v)      { this.ui?.invalid?.(v); }
  set lastChild(v)    { this.ui?.lastChild?.(v); }
  set link(v)         { this.ui?.link?.(v); }
  set nthChild(v)     { this.ui?.nthChild?.(v[0], v[1]); }
  set optional(v)     { this.ui?.optional?.(v); }
  set readOnly(v)     { this.ui?.readOnly?.(v); }
  set required(v)     { this.ui?.required?.(v); }
  set selection(v)    { this.ui?.selection?.(v); }
  set target(v)       { this.ui?.target?.(v); }
  set valid(v)        { this.ui?.valid?.(v); }
  set visited(v)      { this.ui?.visited?.(v); }
  set scale(v)        { this.ui?.default?.(`transform:scale(${v})`); }

  show(state = true) { this.toggle("show",state);this.toggle("hide",!state)}
  has(attr) { return !this.isNull && this.#e.hasAttribute(attr); }
  get(attr) { return this.has(attr) ? this.#e.getAttribute(attr) : undefined; }
  set(attr, val) { this.remove(attr); if (!this.isNull) this.#e.setAttribute(attr, val); }
  remove(attr) { if (this.has(attr)) this.#e.removeAttribute(attr); }
  toggle(cls, force) { xml.toggle(this.#e, cls, force); }
  query(selector) { return this.#e?.querySelector(selector); }
  queryAll(selector) { return this.isNull ? [] : this.#e.querySelectorAll(selector) }
  delete() { this.unobserve(); if (!this.isNull) this.#e.remove(); }
  append(tag, callback) {
    if (this.isNull) return null;
    const child = xml.create(tag);
    if (typeof callback === "function") callback(child);
    this.#e.insertAdjacentElement("beforeend", child.root);
    child.invalidate?.();
    return child;
  }
  adjacent(position, html) { if (!this.isNull) this.root.insertAdjacentHTML(position, html); }
  bind(propName, getter, setter) {
    if (this.isNull) return;
    Object.defineProperty(this.#e, propName, {
      get: xml.isNull(getter) ? () => "hidden" : getter,
      set: xml.isNull(setter) ? () => {} : setter,
      configurable: true,
      enumerable: true,
    });
  }
  define(propName, value) {
    if (this.isNull) return;
    Object.defineProperty(this.root, propName, {
      value,
      writable: true,
      configurable: true,
      enumerable: true,
    });
  }
  animate(keyframes = [], duration = 200, iterations = 1, easing = "ease-out") {
    if (this.isNull) return;
    this.root.animate(keyframes, { duration, iterations, easing, fill: "forwards" });
  }

  listen(eventType, handler) {
    if (!this.isNull && typeof handler === "function") {
      if (typeof xe !== "undefined" && typeof xe.register === "function") {
        xe.register(eventType, `.${this.uid}`, handler);
      } else {
        this.#e.addEventListener(eventType, handler);
      }
    }
  }
  click(handler)      { this.listen("click", handler); }
  focus(handler)      { this.listen("focus", handler); }
  blur(handler)       { this.listen("blur", handler); }
  change(handler)     { this.listen("change", handler); }
  submit(handler)     { this.listen("submit", handler); }
  keyup(handler)      { this.listen("keyup", handler); }
  mouseenter(handler) { this.listen("mouseenter", handler); }
  mouseleave(handler) { this.listen("mouseleave", handler); }
  load(handler)       { this.listen("load", handler); }

  ready(handler) { 
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handler, { once: true });
    } else { handler(); }
  }

  resize(handler) {
    if (this.isNull) return;
    if (!xml._ro) {
      xml._ro = new ResizeObserver((entries) => {
        for (let i = 0; i < entries.length; i++) {
          const cb = xml._cb.get(entries[i].target);
          if (cb) cb(entries[i]);
        }
      });
    }
    xml._cb.set(this.#e, handler);
    xml._ro.observe(this.#e);
  }
  unobserve() {
    if (!this.isNull && xml._ro) {
      xml._ro.unobserve(this.#e);
      xml._cb.delete(this.#e);
    }
  }

  #visual() {
    if (!this.ui?.style) return;
    const fs = this.ui.style.fontSize || "";
    const fw = parseInt(this.ui.style.fontWeight || "400", 10);
    const isEnglish = this.ui.style.fontFamily === "english";

    if (fs.includes("px")) {
      const baseFs = parseFloat(fs);
      const fwOffset = isEnglish ? 25 : 50;
      const targetFw = Math.max(100, fw - fwOffset);
      
      this.sm = this.has("sm-font")?`fw:${targetFw} !important`: `fs:${baseFs + (isEnglish ? 0.5 : 0.75)}px !important;fw:${targetFw} !important`;
      this.md = this.has("md-font")?`fw:${targetFw} !important`:`fs:${baseFs + (isEnglish ? 0.5 : 1.25)}px !important;fw:${targetFw} !important`;
      this.lg = this.has("lg-font")?`fw:${targetFw} !important`:`fs:${baseFs + (isEnglish ? 0.25 : 1.0)}px !important;fw:${targetFw} !important`;
      this.xl = this.has("xl-font")?`fw:${targetFw} !important`:`fs:${baseFs + (isEnglish ? 0.25 : 0.75)}px !important;fw:${targetFw} !important`;

      if (!isEnglish) this.style = "ls:0px";
      if (this.has("wd-font")) this.wd = 'fs:'+this.get("wd-font")+ '!important';
      if (this.has("xl-font")) this.xl = 'fs:'+this.get("xl-font")+ '!important';
      if (this.has("lg-font")) this.lg = 'fs:'+this.get("lg-font")+ '!important';
      if (this.has("md-font")) this.md = 'fs:'+this.get("md-font")+ '!important';
      if (this.has("sm-font")) this.sm = 'fs:'+this.get("sm-font")+ '!important';
    }
  }

  invalidate() {
    if (this.isNull) return;
    this.ui?.invalidate?.();
    const node = this.root.nodeName;

    if (this.has("clamp")) {
      this.toggle("clamp");
      this.style = `line-clamp:${this.get("clamp") ?? "1"}`;
    }
    if (this.has("eval")) {
      const e = this.get("eval") ?? "";
      this.click(() => { eval(e); });
    }
    if (this.has("toggle")) {
      const t = (this.get("toggle") ?? "").trim();
      const parts = t.split(/\s+/);
      const el = xml.id(parts[0]);
      if (el) {
        const action = parts.slice(1).join(" ") || "show";
        this.click(() => xml.toggle(el, action));
      }
    }
    if (this.has("href") && node !== "A") {
      this.hover = "cursor:pointer";
      this.click(() => { window.location.href = this.get("href") ?? window.location.href; });
    }
    if (node !== "IMG" && this.has("src") && this.has("page")) {
      this.click(() => {
        const p = xml.id(this.get("page"));
        if (p) {
          const s = this.get("server");
          if (s !== undefined) p.server = s;
          p.src = this.get("src") ?? "";
        }
      });
    }
    this.#visual();
  }

  static get ua() { return navigator.userAgent.toLowerCase(); }
  static get isMobile() {
    return ["mobile", "phone", "tablet", "android", "kfapwi", "ipad"].some((t) => this.ua.includes(t)) ||
      (this.ua.includes("mac") && navigator.maxTouchPoints > 1);
  }

  static get csrfName() { return "__RequestVerificationToken"; }
  static get csrfToken() { return document.head.querySelector("[name*=nonce]")?.getAttribute("content") ?? ""; }
  static get mobileView() { return window.matchMedia("(max-width:786px)").matches; }

  static id(id) { return document.getElementById(id); }

  static hide(id) {
    const el = typeof id === "string" ? xml.id(id) : id;
    if (el) { xml.toggle(el, "show", false); xml.toggle(el, "hide", true); }
  }
  static alert(title, msg) { if (window.swal) window.swal.alert(title, msg); }
  static fire(title, msg, actionName) { return window.swal?.fire(title, msg, actionName); }
  
  static isNull(val) { return val === null || val === undefined; }
  
  static hasClass(el, cls) { 
    const target = el instanceof xml ? el.root : el;
    return target && target.classList ? target.classList.contains(cls) : false; 
  }
  
  static listen(event, handler) { document.addEventListener(event, handler); }
  
  static ready(handler) { 
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handler, { once: true });
    } else { handler(); }
  }

  static toggle(el, cls = "show", force) {
    if (!el) return;
    const target = el instanceof xml ? el.root : el;
    if (target && target.classList && cls) {
      const tokens = cls.split(/\s+/).filter(Boolean);
      tokens.forEach(c => {
        const state = force !== undefined ? force : !target.classList.contains(c);
        target.classList.toggle(c, state);
      });
    }
  }

  static disable(el, force) { xml.toggle(el, "disable", force); }
  static query(selector) { return document.querySelector(selector); }
  static queryAll(selector) { return document.querySelectorAll(selector); }

  static create(tag) {
    const isSvg = ["svg", "path", "circle", "rect", "g", "polygon", "polyline", "use", "line", "ellipse", "text"].includes(tag);
    const el = isSvg
      ? document.createElementNS("http://www.w3.org/2000/svg", tag)
      : document.createElement(tag);

    const instance = new xml(el);
    if (tag === "svg") {
      instance.set("xmlns", "http://www.w3.org/2000/svg");
      instance.set("fill", "currentcolor");
    }
    return instance;
  }

  static define(obj, prop, val) { Object.defineProperty(obj, prop, { value: val, writable: true, configurable: true, enumerable: true }); }

  static reg(tag, node, callback) {
    let e = window.element?.(node) ?? HTMLElement;
    customElements.define(tag, class extends e {
      #i = null;
      connectedCallback() {
        if (!this.#i) {
          this.#i = new xml(this);
          if (typeof callback === "function") callback(this.#i);
          this.#i.invalidate();
        }
      }
      disconnectedCallback() {
        this.#i?.unobserve();
        this.#i = null;
      }
    }, { extends: node });
  }

  static removeQuery(key) {
    const url = new URL(window.location.href);
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }

  static async get(endpoint) {
    const path = window.location.origin + xml.apiPath(endpoint);
    try {
      const res = await fetch(path, {
        method: "GET",
        credentials: "same-origin",
        headers: { Accept: "text/html; charset=utf-8" },
        signal: AbortSignal.timeout(15000)
      });
      if (res.ok) return await res.text();
    } catch (e) {
      return null;
    }
  }

  static async post(endpoint, bodyBuilder) {
    const path = window.location.origin + xml.apiPath(endpoint);
    const form = new FormData();
    if (typeof bodyBuilder === "function") {
      bodyBuilder({ append: (k, v) => { if (!form.has(k)) form.append(k, v); } });
    }
    form.append("handler", "api");
    new URLSearchParams(window.location.search).forEach((v, k) => form.append(k, v));
    form.append(xml.csrfName, xml.csrfToken);

    try {
      const res = await fetch(path, {
        method: "POST",
        credentials: "same-origin",
        headers: { Accept: "application/json; charset=utf-8" },
        body: form,
        signal: AbortSignal.timeout(15000)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      return null;
    }
  }

  static apiPath(endpoint) {
    if (endpoint !== undefined) {
      if (endpoint === "lang") return "/language";
      if (endpoint === "location") return "/location";
      if (endpoint.startsWith("/")) return endpoint;
      const apiMeta = document.head.querySelector("[name*=api]");
      if (apiMeta) {
        const content = apiMeta.getAttribute("content");
        if (content) return "/" + content.replaceAll(".", "/") + "/" + endpoint;
      }
      return "/" + endpoint;
    }
    return window.location.pathname;
  }

  static get client_id() { return "690715221525-p11aofvnh9qv7o67ouie087tjp0090i2.apps.googleusercontent.com"; }

  static redirect(url) {
    if (!url) return;
    if (!url.startsWith("http") && !url.startsWith("/")) url = "/" + url;
    window.location.href = url.includes("http") ? url : window.location.origin + url;
  }

  static decode(jwtToken) {
    const base64Url = jwtToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(json);
  }

  static gAuth(targetElement) {
    const initGAuth = () => {
      if (!window.google?.accounts?.id) return;
      google.accounts.id.initialize({
        client_id: xml.client_id,
        callback: (res) => {
          const payload = xml.decode(res.credential);
          xml.post("/credentials", (d) => {
            d.append("id", payload.sub);
            d.append("name", payload.name);
            d.append("img", payload.picture);
            d.append("email", payload.email);
          }).then((r) => {
            if (r?.response?.action === "Redirect") {
              window.location.href = window.location.origin + r.response.href;
            }
          });
        }
      });
      google.accounts.id.renderButton(targetElement, { type: "icon", size: "medium", shape: "circle" });
    };

    if (document.readyState === "complete") {
      initGAuth();
    } else {
      window.addEventListener("load", initGAuth, { once: true });
    }
  }
}
class xmls{
  static init(){
    this.defaultComponents();
    this.headerComponents();
    this.navComponents();
    this.viewComponents()
    this.mediaComponents()
  }
  static defaultComponents(){
    xml.reg("xml-body","body",(b=xml.ref)=>{b.ui.default("mg:0px;pd:0px;bg-color:white;us:none").print("d:none")});
    xml.reg("xml-stack","div",(b=xml.ref)=>{b.ui.default("d:block,pd:0px;bd-radius:4px;sb-width:thin;sb-color:gray25 gray25")});
    xml.reg("xml-row","div",(b=xml.ref)=>{b.ui.default("d:flex;fxw:wrap;wd:fill;jc:space-between").custom("> *","flex-shrink:0")});
    xml.reg("xml-col","div",(b=xml.ref)=>{b.ui.default("fx:0 0 auto;sb-width:thin;sb-color:gray25 gray25")});
    xml.reg("xml-divider","div",(b=xml.ref)=>b.ui.default(b.get("type")==="h"?"d:flex;wd:100%;jc:center;bt:1px solid divider":"d:block;wd:0px;ht:auto;br:1px solid divider"));
    
  }
  static headerComponents(){
    xml.reg("app-header","div",(b=xml.ref)=>{
      b.set("role","main");
      b.ui.default("d:flex;fxw:wrap;ai:center;jc:space-between;bg-color:white;bb:1.5px solid gray300;pd:20px 15px 0px 15px")
      .custom("> *","flex-shrink:0").sm("pd:25px 15px 0px 15px").md("pd:25px 25px 0px 25px").lg("pd:25px 30px 0px 30px").xl("pd:25px 35px 0px 35px")
      .md("").lg("").xl("").wd("")
    });
    xml.reg("web-logo", "a", (e = xml.ref) => {
        e.style = "td:none;d:flex;flex:0 0 auto;ai:center;ht:35px;order:1"; e.sm = "wd:auto;order:1;mr:5px"; 

        e.append("img", (i = xml.ref) => {
            i.root.alt = "logo"; i.style = "ht:30px;ai:end;ml:8px;mr:5px;cursor:pointer";
            i.root.src = "title.webp";

            i.sm = "ht:26px;ml:6px;mt:0px"; i.md = "ht:25px"; i.lg = "ht:26px"; i.xl = "ht:26px"; i.click((e) => { window.location = window.location.origin + "/"; });
        });
    });
    xml.reg("web-search","div",(e=xml.ref)=>{
      e.ui.default("d:flex;flex:0 0 auto;ai:center;ht:40px;mg:20px 0px 0px 0px;wd:-webkit-fill-available;order:4;bd:1px solid gray200;bd-radius:26px;box-shadow:0px 3px 10px 0px rgba(31, 31, 31, 0.08)")
      .sm("order:2;width:60%;mt:0px").md("ht:42px").lg("ht:44px");
      e.append("form", (f = xml.ref) => {
        f.id = "search_engine";
        f.style = "d:flex;ai:center;width:100%;height:-webkit-fill-available;mg:0px;"; let tb = null;
        f.root.method = "get"; f.root.enctype = "multipart/form-data"; f.root.action = e.has("path") ? e.get("path") : window.location.pathname;
        f.append("input", (i = xml.ref) => {
            tb = i;i.holder="color:gray600;fs:16px;ff:english";
            i.style = "fs:16px;fw:450;ls:.2px;color:gray800 !important;bg-color:transparent;bd:none !important;ol:none !important;width:inherit; ml:20px";
            i.name = "q"; i.placeholder = e.get("placeholder") ?? "Search with Tpicsa"; i.value = e.get("value") ? e.get("value") : "";
            i.focus(() => { e.style = "bd:1px solid gray400"; }); i.blur(() => { e.style = "bd:1px solid gray200" });
            f.define("searchValue", (v) => { i.value = v; }); f.define("execute", () => { if (i.value !== "") { f.root.submit(); } });
        });

        f.append("div", (c = xml.ref) => {
            c.style = "stroke:gray600;stroke-wd:2;wd:20px;ht:20px;mi:12px;"; c.hover = "stroke:gray900";
            c.inner=`<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="inherit" stroke="inherit" stroke-width="inherit">
                  <path d="M6 6L18 18" stroke="inherit" stroke-width="inherit" stroke-linecap="round"/>
                  <path d="M18 6L6 18" stroke="inherit" stroke-width="inherit" stroke-linecap="round"/>
                  </svg>`;
            c.click(()=>{tb.value="";})
        })
        f.append("div", (b = xml.ref) => { b.style = "ht:60%;ai:center;wd:1.5px;bg-color:gray400" });
        f.append("div", (c = xml.ref) => {
            c.style = "mg:0px 20px 0px 12px;fill:gray600"; c.hover = "fill:gray900";
            c.inner=`<svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="inherit">
                      <path d="M8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V5Z" fill="inherit"/>
                      <path d="M6.25 11.8438V12C6.25 13.525 6.8558 14.9875 7.93414 16.0659C9.01247 17.1442 10.475 17.75 12 17.75C13.525 17.75 14.9875 17.1442 16.0659 16.0659C17.1442 14.9875 17.75 13.525 17.75 12V11.8438C17.75 11.2915 18.1977 10.8438 18.75 10.8438H19.25C19.8023 10.8438 20.25 11.2915 20.25 11.8437V12C20.25 14.188 19.3808 16.2865 17.8336 17.8336C16.5842 19.0831 14.9753 19.8903 13.25 20.1548V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V20.1548C9.02471 19.8903 7.41579 19.0831 6.16637 17.8336C4.61919 16.2865 3.75 14.188 3.75 12V11.8438C3.75 11.2915 4.19772 10.8438 4.75 10.8438H5.25C5.80228 10.8438 6.25 11.2915 6.25 11.8438Z" fill="inherit"/>
                      </svg>`;
            try {
                  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                  recognition.lang = 'en-US'; recognition.interimResults = false;
                  recognition.onresult = (ev) => {
                      tb.value = ev.results[0][0].transcript;
                      c.style = "color:gray700"; c.root.disable = false;
                      f.root.submit();
                  };
                  recognition.onerror = (event) => {
                      xml.query("[name*=q]").value = ""; c.style = "color:gray700"; c.root.disable = false;
                  };
                  c.click(() => {
                      c.style = "color:blue800"; c.root.disable = true; recognition.start();
                  });
                }
                catch { xml.alert("Speech-To-Text feature is not supporting on your device. We are disabling this feature to avoid unwanted disturbances"); b.root.disable = true; }
        })

        f.submit((x) => { if (tb.value === "") { x.preventDefault(); } });

    })

    })
  }
  static navComponents(){
    xml.reg("xml-nav", "div", (n = xml.ref) => {
        n.style = "d:flex;flex:0 0 auto;ai:end;wd:100%;ht:35px;mt:20px;order:4";
        n.append("div", (s = xml.ref) => {
            let i = parseInt(n.get("active-link") ?? "0");
            let c = 0; s.style = "-webkit-overflow-scrolling:touch;overflow-x:auto;overflow-y:auto;min-width:0px;display:grid;grid-auto-flow:column;overscroll-behavior:contain;white-space:nowrap;scrollbar-width:none";
            let m = [{ t: "All", p: "/" }, { t: "Study", p: "/study/view" }, { t: "Media", p: "/media/view" }, { t: "Store", p: "/store/view" }, { t: "Courses", p: "/courses/view" }, { t: "Exams", p: "/exams/view" }, { t: "News", p: "/news/view" }];
            if (n.get("layout") === "secondary") { m = [{ t: "All", p: "/" }, { t: "Web", p: "/web/view" }, { t: "Store", p: "/store/view" }, { t: "Courses", p: "/courses/view" }, { t: "Exams", p: "/exams/view" }, { t: "Materials", p: "/materials/view" }, { t: "Accounts", p: "/accounts/view" }, { t: "Finance", p: "/finance/view" }] }
            m.forEach(x => {
                s.append("a", (z = xml.ref) => {
                    z.style = "td:none;bb:3px solid;bb-color:transparent;color:gray800;ls:-.2px;pd:5px 5px;mr:15px;fs:14.5px;fw:475;ff:english";
                    z.sm = "mr:7px;color:gray800"; z.xl = "color:gray600"; z.lg = "fw:525;;color:gray600;pi:8px"; z.set("xl-font", "14px");  z.set("lg-font", "14px");
                    z.hover = "color:black;"; z.text = x.t; z.href = x.p; if (i === c) { z.toggle("active-link", true); } c++;
                });
            });
        });
    });
}
  static viewComponents(){
    xml.reg("app-view","div",(b=xml.ref)=>{})
    xml.reg("left-view","div",(b=xml.ref)=>{})
    xml.reg("right-view","div",(b=xml.ref)=>{})
    xml.reg("partial-view","div",(b=xml.ref)=>{})
    xml.reg("msg-view","div",(b=xml.ref)=>{})
    xml.reg("card-view","div",(b=xml.ref)=>{})
  }
  static fetchComponents(){

  }
  static formComponents(){

  }
  static buttonComponents(){

  }
  static inputComponents(){

  }
  static linkComponents(){

  }
  static listComponents(){

  }
  static popupComponents(){

  }
  static tableComponents(){

  }
  static mediaComponents(){
    console.log("accessed");
   xml.reg("xml-image", "img", (e = xml.ref) => { e.style = "bd:1px solid border;object-fit:cover;wd:-webkit-fill-available;bg-color:gray50"; e.root.alt = "image"; });
    
  }
  static searchComponents(){

  }
  static adsComponents(){

  }
  static chartComponents(){
    
  }
}
xmls.init()

xml.reg("xml-button","button",(btn=xml.ref)=>{
  btn.inner="Hello Button2 ";
  btn.style="bd:none;color:white;pd:8px 18px;bd-radius:4px;bg-color:primary;ff:english";
  btn.sm="wd:100px";btn.md="wd:120px";btn.lg="wd:140px";btn.xl="wd:150px"
  btn.set("clamp",1);
  btn.click(()=>{console.log("Clicked")})
  btn.mouseenter(()=>{btn.style="bg-color:primaryHover"});
  btn.mouseleave(()=>{btn.style="bg-color:primary"})
  console.log(window.sheet())
});



