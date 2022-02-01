"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9715:(E,u,n)=>{n.d(u,{b:()=>c});var v=n(4762),t=n(9641),_=n(5548),i=n(865),c=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return(0,v.ZT)(e,r),e.prototype.getCurrentPosition=function(o){return(0,t.DM)(this,"getCurrentPosition",{callbackOrder:"reverse"},arguments)},e.prototype.watchPosition=function(o){return new _.y(function(a){var d=navigator.geolocation.watchPosition(a.next.bind(a),a.next.bind(a),o);return function(){return navigator.geolocation.clearWatch(d)}})},e.pluginName="Geolocation",e.plugin="cordova-plugin-geolocation",e.pluginRef="navigator.geolocation",e.repo="https://github.com/apache/cordova-plugin-geolocation",e.install='ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"',e.installVariables=["GEOLOCATION_USAGE_DESCRIPTION"],e.platforms=["Amazon Fire OS","Android","Browser","iOS","Windows"],e.\u0275fac=function(){var o;return function(d){return(o||(o=i.n5z(e)))(d||e)}}(),e.\u0275prov=i.Yz7({token:e,factory:function(o){return e.\u0275fac(o)}}),e}(t.On)},3620:(E,u,n)=>{n.r(u),n.d(u,{startFocusVisible:()=>i});const v="ion-focused",_=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=c=>{let r=[],e=!0;const o=c?c.shadowRoot:document,a=c||document.body,d=l=>{r.forEach(h=>h.classList.remove(v)),l.forEach(h=>h.classList.add(v)),r=l},w=()=>{e=!1,d([])},g=l=>{e=_.includes(l.key),e||d([])},p=l=>{if(e&&l.composedPath){const h=l.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));d(h)}},s=()=>{o.activeElement===a&&d([])};return o.addEventListener("keydown",g),o.addEventListener("focusin",p),o.addEventListener("focusout",s),o.addEventListener("touchstart",w),o.addEventListener("mousedown",w),{destroy:()=>{o.removeEventListener("keydown",g),o.removeEventListener("focusin",p),o.removeEventListener("focusout",s),o.removeEventListener("touchstart",w),o.removeEventListener("mousedown",w)},setFocus:d}}},8107:(E,u,n)=>{n.d(u,{a:()=>v,b:()=>o,c:()=>t,d:()=>c,e:()=>a,f:()=>e,g:()=>r,h:()=>i,i:()=>_});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"},5332:(E,u,n)=>{n.d(u,{P:()=>w});var v=n(4762),t=n(865),_=n(4096),i=n(5793),c=n(6054),r=n(9708),e=n(5432),o=n(6019),a=n(2852);function d(g,p){if(1&g&&(t.TgZ(0,"ion-list"),t._UZ(1,"app-meeting-card",3),t.qZA()),2&g){const s=p.$implicit;t.xp6(1),t.Q6J("data",s)}}let w=(()=>{class g{constructor(s,m,l,h,f,O){this.translate=s,this.navParams=m,this.modalController=l,this.iab=h,this.tomatoFormatsService=f,this.storage=O,this.formatLanguage="en",this.meetingList=this.navParams.data.data}ngOnInit(){this.storage.get("language").then(s=>{s&&(this.formatLanguage=s)}),this.tomatoFormatsService.setExplodedFormatsOnMeetingList(this.meetingList,this.formatLanguage)}dismiss(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss()})}openMapsLink(s,m){this.iab.create("https://www.google.com/maps/search/?api=1&query="+s+","+m,"_system")}openLink(s){this.iab.create(s,"_system")}dialNum(s){this.iab.create("tel:"+s,"_system")}isHybrid(s){return s.formats.match(/HY/i)?"HYBRID":"NOT-HYBRID"}isTempClosed(s){return s.formats.match(/TC/i)?"TEMPCLOSED":"NOT-TEMPCLOSED"}explodeFormats(s){console.log("exploding formats"),this.tomatoFormatsService.setExplodedFormatsOnMeetingList([s],this.formatLanguage)}}return g.\u0275fac=function(s){return new(s||g)(t.Y36(_.sK),t.Y36(i.X1),t.Y36(i.IN),t.Y36(c.i),t.Y36(r.P),t.Y36(e.V))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-modal"]],decls:10,vars:4,consts:[["slot","end"],["color","primary",3,"click"],[4,"ngFor","ngForOf"],["MeetingType","regular",3,"data"]],template:function(s,m){1&s&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-title"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"ion-buttons",0),t.TgZ(6,"ion-button",1),t.NdJ("click",function(){return m.dismiss()}),t._uU(7,"Close"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-content"),t.YNc(9,d,2,1,"ion-list",2),t.qZA()),2&s&&(t.xp6(3),t.hij(" ",t.lcZ(4,2,"MEETING_DETAILS")," "),t.xp6(6),t.Q6J("ngForOf",m.meetingList))},directives:[i.Gu,i.sr,i.wd,i.Sm,i.YG,i.W2,o.sg,i.q_,a.Q],pipes:[_.X$],styles:[""]}),g})()},551:(E,u,n)=>{n.d(u,{K:()=>c});var v=n(4762),t=n(865),_=n(4522),i=n(5247);let c=(()=>{class r{constructor(o,a){this.http=o,this.httpCors=a,this.getApiUrlServiceGroups="https://tomato.bmltenabled.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic",this.getApiUrlVirtServiceGroups="https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic"}getAllServiceGroups(){return this.http.get(this.getApiUrlServiceGroups)}getAllVirtServiceGroups(){return(0,v.mG)(this,void 0,void 0,function*(){const o=yield this.httpCors.get(this.getApiUrlVirtServiceGroups,{},{});return JSON.parse(o.data)})}}return r.\u0275fac=function(o){return new(o||r)(t.LFG(_.eN),t.LFG(i.t))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})()}}]);