"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5901],{5901:(f,p,i)=>{i.r(p),i.d(p,{DoIHaveTheBmltPageModule:()=>I});var l=i(6814),_=i(6223),a=i(451),L=i(6800),o=i(5897),m=i(7838),e=i(9212),t=i(6687),r=i(3510),c=i(2548),d=i(3704),v=i(9140);function M(s,g){if(1&s&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"h1"),e._uU(3),e.ALo(4,"translate"),e._UZ(5,"ion-icon",8),e.qZA(),e.TgZ(6,"h2"),e._uU(7),e.ALo(8,"translate"),e.ALo(9,"number"),e.ALo(10,"translate"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"number"),e.ALo(14,"translate"),e.qZA(),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"h2"),e._uU(18),e.ALo(19,"translate"),e.TgZ(20,"i"),e._uU(21),e.qZA(),e._uU(22),e.ALo(23,"translate"),e.qZA()()),2&s){const u=e.oxw();e.xp6(3),e.hij("",e.lcZ(4,10,"YES"),"! "),e.xp6(4),e.lnq("",e.lcZ(8,12,"IS_BMLT_YES_1")," ",e.xi3(9,14,u.nearestMeeting[0].distance_in_miles,"1.1-1")," ",e.lcZ(10,17,"MILES")," ("),e.xp6(5),e.AsE("",e.xi3(13,19,u.nearestMeeting[0].distance_in_km,"1.1-1")," ",e.lcZ(14,22,"KMS"),""),e.xp6(3),e.hij(") ",e.lcZ(16,24,"AWAY"),""),e.xp6(3),e.hij("",e.lcZ(19,26,"IS_BMLT_YES_2")," ("),e.xp6(3),e.Oqu(u.nearestMeeting[0].service_body_bigint),e.xp6(),e.hij(") ",e.lcZ(23,28,"IS_BMLT_YES_3"),"")}}function S(s,g){if(1&s&&(e.TgZ(0,"div"),e._UZ(1,"br"),e.TgZ(2,"h1"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"h2"),e._uU(6),e.ALo(7,"translate"),e.ALo(8,"number"),e.ALo(9,"translate"),e.TgZ(10,"i"),e._uU(11),e.ALo(12,"number"),e.ALo(13,"translate"),e.qZA(),e._uU(14,") {{'AWAY' | translate}"),e.qZA(),e.TgZ(15,"h2"),e._uU(16),e.ALo(17,"translate"),e.qZA()()),2&s){const u=e.oxw();e.xp6(3),e.hij("",e.lcZ(4,7,"NO")," "),e.xp6(3),e.lnq("",e.lcZ(7,9,"IS_BMLT_NO_1")," ",e.xi3(8,11,u.nearestMeeting[0].distance_in_miles,"1.1-1")," ",e.lcZ(9,14,"MILES")," ("),e.xp6(5),e.AsE("",e.xi3(12,16,u.nearestMeeting[0].distance_in_km,"1.1-1")," ",e.lcZ(13,19,"KMS"),""),e.xp6(5),e.Oqu(e.lcZ(17,21,"IS_BMLT_NO_2"))}}function y(s,g){1&s&&(e.TgZ(0,"div")(1,"h1"),e._uU(2,"Checking..."),e.qZA()())}const B=[{path:"",component:(()=>{var s;class g{constructor(n,h,A,U,E){this.MeetingLists=n,this.ServiceGroups=h,this.loaderCtrl=A,this.translate=U,this.storage=E,this.currentAddress="",this.addressLatitude=0,this.addressLongitude=0,this.nearestMeeting=[],this.serviceGroupNames=[],this.bmltEnabled="maybe",this.ServiceGroups.getAllServiceGroups().then(P=>{this.serviceGroupNames=P.data,this.storage.get("savedAddressLat").then(T=>{T?(this.addressLatitude=T,this.storage.get("savedAddressLng").then(Z=>{Z?(this.addressLongitude=Z,this.findNearestMeeting()):this.locatePhone()})):this.locatePhone()})})}getServiceNameFromID(n){return this.serviceGroupNames.find(function(A){return A.id===n}).name}findNearestMeeting(){this.translate.get("LOCATING").subscribe(n=>{this.presentLoader(n)}),this.MeetingLists.getNearestMeeting(this.addressLatitude,this.addressLongitude).then(n=>{this.nearestMeeting=n.data,this.nearestMeeting=this.nearestMeeting.filter(h=>h.service_body_bigint=this.getServiceNameFromID(h.service_body_bigint)),this.dismissLoader(),this.bmltEnabled=this.nearestMeeting[0].distance_in_miles<100?"true":"false"})}presentLoader(n){this.loader||(this.loader=this.loaderCtrl.present(n))}dismissLoader(){this.loader&&(this.loader=this.loaderCtrl.dismiss(),this.loader=null)}locatePhone(){this.translate.get("LOCATING").subscribe(n=>{this.presentLoader(n)}),m.b.getCurrentPosition({timeout:1e4}).then(n=>{this.addressLatitude=n.coords.latitude,this.addressLongitude=n.coords.longitude,this.storage.set("savedAddressLat",this.addressLatitude),this.storage.set("savedAddressLng",this.addressLongitude),this.findNearestMeeting()}).catch(n=>{this.currentAddress="Location not found",this.dismissLoader()})}openLink(n){o.A.open({url:n})}}return(s=g).\u0275fac=function(n){return new(n||s)(e.Y36(t.q),e.Y36(r.S),e.Y36(c.b),e.Y36(d.sK),e.Y36(v.V))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-do-i-have-the-bmlt"]],decls:37,vars:18,consts:[["color","primary"],["slot","start"],["name","information-circle","item-left",""],["text-wrap","","lines","none"],[4,"ngIf"],["name","logo-facebook","item-left",""],[3,"click"],["name","globe","item-left",""],["name","happy-outline"]],template:function(n,h){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"ion-content")(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),e._UZ(11,"ion-icon",2),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e.TgZ(14,"ion-card-content")(15,"ion-list")(16,"ion-item",3),e.YNc(17,M,24,30,"div",4)(18,S,18,23,"div",4)(19,y,3,0,"div",4),e.qZA()()()(),e.TgZ(20,"ion-card")(21,"ion-card-header")(22,"ion-card-title"),e._uU(23),e.ALo(24,"translate"),e.qZA()(),e.TgZ(25,"ion-card-content")(26,"ion-list")(27,"ion-item",3),e._UZ(28,"ion-icon",5),e.TgZ(29,"ion-button",6),e.NdJ("click",function(){return h.openLink("https://www.facebook.com/groups/149214049107349/")}),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e.TgZ(32,"ion-item",3),e._UZ(33,"ion-icon",7),e.TgZ(34,"ion-button",6),e.NdJ("click",function(){return h.openLink("https://bmlt.app/")}),e._uU(35),e.ALo(36,"translate"),e.qZA()()()()()()),2&n&&(e.xp6(5),e.hij(" ",e.lcZ(6,8,"DOIHAVETHEBMLT")," "),e.xp6(7),e.hij(" ",e.lcZ(13,10,"IS_BMLT")," "),e.xp6(5),e.Q6J("ngIf","true"==h.bmltEnabled),e.xp6(),e.Q6J("ngIf","false"==h.bmltEnabled),e.xp6(),e.Q6J("ngIf","maybe"==h.bmltEnabled),e.xp6(4),e.Oqu(e.lcZ(24,12,"FIND_OUT_MORE")),e.xp6(7),e.Oqu(e.lcZ(31,14,"JOIN_FB_GROUP")),e.xp6(5),e.Oqu(e.lcZ(36,16,"VISIT_WEBSITE")))},dependencies:[l.O5,a.YG,a.Sm,a.PM,a.FN,a.Zi,a.Dq,a.W2,a.Gu,a.gu,a.Ie,a.q_,a.fG,a.wd,a.sr,l.JJ,d.X$],styles:["ion-icon[_ngcontent-%COMP%]{color:#0a61ad}ion-item[_ngcontent-%COMP%]{--padding-start: 0}ion-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}"]}),g})()}];let b=(()=>{var s;class g{}return(s=g).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[L.Bz.forChild(B),L.Bz]}),g})(),I=(()=>{var s;class g{}return(s=g).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[t.q,r.S,v.V],imports:[l.ez,_.u5,a.Pc,d.aw,b]}),g})()},2548:(f,p,i)=>{i.d(p,{b:()=>L});var l=i(5861),_=i(9212),a=i(451);let L=(()=>{var o;class m{constructor(t){this.loadingController=t,this.isLoading=!1}present(t){var r=this;return(0,l.Z)(function*(){return r.isLoading=!0,yield r.loadingController.create({spinner:"circles",backdropDismiss:!0,message:t}).then(c=>{c.present().then(()=>{r.isLoading||c.dismiss()})})})()}dismiss(){var t=this;return(0,l.Z)(function*(){return t.isLoading=!1,yield t.loadingController.dismiss()})()}}return(o=m).\u0275fac=function(t){return new(t||o)(_.LFG(a.HT))},o.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),m})()},6687:(f,p,i)=>{i.d(p,{q:()=>L});var l=i(5861),_=i(2726),a=i(9212);let L=(()=>{var o;class m{constructor(){this.tomatoBMLT="https://aggregator.bmltenabled.org/main_server/client_interface/json/",this.virtualBMLT="https://bmlt.virtual-na.org/main_server/client_interface/json/",this.getApiUrlVirt="https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time",this.getAllVirtMtgs="https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=location_postal_code_1,duration_time,start_time,time_zone,weekday_tinyint,service_body_bigint,longitude,latitude,location_province,location_municipality,location_street,location_info,location_text,location_neighborhood,formats,format_shared_id_list,comments,meeting_name,location_sub_province,worldid_mixed,root_server_uri,id_bigint,meeting_name,location_text,formatted_address,formatted_location_info,formatted_comments,contact_name_1,contact_phone_1,contact_email_1,contact_name_2,contact_phone_2,contact_email_2,virtual_meeting_link&services[]=4&recursive=1&sort_keys=start_time"}getVirtualMeetings(){var t=this;return(0,l.Z)(function*(){return(yield _.kv.get({url:t.getApiUrlVirt})).data})()}getAllVirtualMeetings(){var t=this;return(0,l.Z)(function*(){return(yield _.kv.get({url:t.getAllVirtMtgs})).data})()}getAutoRadiusMeetings(t,r,c){var d=this;return(0,l.Z)(function*(){const v=d.tomatoBMLT+"?switcher=GetSearchResults&geo_width_km=-"+c+"&long_val="+r+"&lat_val="+t+"&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic";return yield _.kv.get({url:v})})()}getRadiusMeetings(t,r,c){var d=this;return(0,l.Z)(function*(){const v=d.tomatoBMLT+"?switcher=GetSearchResults&data_field_key=longitude,latitude,id_bigint&geo_width_km="+c+"&long_val="+r+"&lat_val="+t+"&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic";return yield _.kv.get({url:v})})()}getAddressMeetings(t,r,c){var d=this;return(0,l.Z)(function*(){const v=d.tomatoBMLT+"?switcher=GetSearchResults&geo_width_km=-"+c+"&long_val="+r+"&lat_val="+t+"&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic";return yield _.kv.get({url:v})})()}getNearestMeeting(t,r){var c=this;return(0,l.Z)(function*(){const d=c.tomatoBMLT+"?switcher=GetSearchResults&geo_width_km=-1&long_val="+r+"&lat_val="+t+"&sort_keys=longitude,latitude&callingApp=bmlt_search_3_ionic";return yield _.kv.get({url:d})})()}getMeetingsByArea(t){var r=this;return(0,l.Z)(function*(){const c=r.tomatoBMLT+"?switcher=GetSearchResults&services="+t+"&sort_keys=weekday_tinyint,start_time&callingApp=bmlt_search_3_ionic";return yield _.kv.get({url:c})})()}getMeetingsByVirtArea(t){var r=this;return(0,l.Z)(function*(){const c=r.virtualBMLT+"?switcher=GetSearchResults&services="+t+"&sort_keys=weekday_tinyint,start_time&callingApp=bmlt_search_3_ionic";return(yield _.kv.get({url:c})).data})()}getMeetingsByIDs(t){var r=this;return(0,l.Z)(function*(){const c=r.tomatoBMLT+"?switcher=GetSearchResults&meeting_ids[]="+t;return yield _.kv.get({url:c})})()}}return(o=m).\u0275fac=function(t){return new(t||o)},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac}),m})()},3510:(f,p,i)=>{i.d(p,{S:()=>L});var l=i(5861),_=i(2726),a=i(9212);let L=(()=>{var o;class m{constructor(){this.getApiUrlServiceGroups="https://aggregator.bmltenabled.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic",this.getApiUrlVirtServiceGroups="https://bmlt.virtual-na.org/main_server/client_interface/json/?switcher=GetServiceBodies&callingApp=bmlt_search_3_ionic"}getAllServiceGroups(){var t=this;return(0,l.Z)(function*(){return yield _.kv.get({url:t.getApiUrlServiceGroups})})()}getAllVirtServiceGroups(){var t=this;return(0,l.Z)(function*(){return(yield _.kv.get({url:t.getApiUrlVirtServiceGroups})).data})()}}return(o=m).\u0275fac=function(t){return new(t||o)},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac}),m})()}}]);