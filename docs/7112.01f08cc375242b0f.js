"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7112],{7112:(L,o,s)=>{s.r(o),s.d(o,{VirtSearchPageModule:()=>Z});var l=s(6019),m=s(9133),r=s(5793),g=s(5899),t=s(865),d=s(3769),v=s(5038),c=s(4096),h=s(6054),u=s(5432),f=s(1677);function V(e,a){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-meeting-list",2),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("data",i.allVirtMeetings)}}const p=[{path:"",component:(()=>{class e{constructor(i,n,A,T,y){this.meetingListProvider=i,this.loaderCtrl=n,this.translate=A,this.iab=T,this.storage=y,this.loader=null,this.allVirtMeetings=[],this.isLoaded=!1}ngOnInit(){this.getAllVirtMeetings()}getAllVirtMeetings(){this.translate.get("FINDING_MTGS").subscribe(i=>{this.presentLoader(i)}),this.meetingListProvider.getAllVirtualMeetings().then(i=>{this.allVirtMeetings=i,this.isLoaded=!0,this.dismissLoader()})}presentLoader(i){this.loader||(this.loader=this.loaderCtrl.present(i))}dismissLoader(){this.loader&&(this.loader=this.loaderCtrl.dismiss(),this.loader=null)}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(d.g),t.Y36(v.b),t.Y36(c.sK),t.Y36(h.i),t.Y36(u.V))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-virt-search"]],decls:8,vars:1,consts:[["slot","start"],[4,"ngIf"],["meetingType","virt",3,"data"]],template:function(i,n){1&i&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-buttons",0),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5," virtual-na.org "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"ion-content"),t.YNc(7,V,2,1,"div",1),t.qZA()),2&i&&(t.xp6(7),t.Q6J("ngIf",n.isLoaded))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,l.O5,f.D],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(p)],g.Bz]}),e})();var P=s(5247),M=s(185);let Z=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[h.i,d.g,P.t,u.V],imports:[[l.ez,m.u5,r.Pc,c.aw,S,M.D]]}),e})()}}]);