(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)
}if(a){return a(m,!0)
}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k
}var h=g[m]={exports:{}};
b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)
},h,h.exports,e,b,g,d)
}return g[m].exports
}var a=typeof require=="function"&&require;
for(var f=0;
f<d.length;
f++){c(d[f])
}return c
})({1:[function(c,g,a){var b=c("react");
var h=BootstrapData.get("captcha_data").captchaPublicKey;
var f="https://www.google.com/recaptcha/api.js";
var d=b.createClass({displayName:"NoCaptcha",render:function(){return b.createElement("div",{className:"g-recaptcha","data-sitekey":h})
},componentDidMount:function(){var i={hl:Airbnb.options.language};
$.getScript(f+"?"+$.param(i))
}});
g.exports=d
},{react:"react"}],2:[function(c,d,b){var a,g,h=function(l,j){for(var i in j){if(f.call(j,i)){l[i]=j[i]
}}function k(){this.constructor=l
}k.prototype=j.prototype;
l.prototype=new k();
l.__super__=j.prototype;
return l
},f={}.hasOwnProperty;
g=c("../../../../templates/page3/preview_bar.hbs");
a=(function(j){h(i,j);
function i(){return i.__super__.constructor.apply(this,arguments)
}i.prototype.template=g;
i.prototype.postInitialize=function(){return this.render()
};
i.prototype.getRenderData=function(){return _.extend(this.model.toJSON(),{editUrl:this.editUrl(),headline:this.headline(),showEditLink:this.showEditLink(),suspended:this.suspended()})
};
i.prototype.headline=function(){if(this.cameFromMLFinishModal()){return t("ml.preview.your_space_is_listed_edit_calendar",{link_start:"<a href='/manage-listing/"+this.model.id+"/calendar'>",link_end:"</a>"})
}else{if(this.suspended()){return t("host_standards.rooms.deactivated_flash",{reactivate_link_start:'<a href="/rooms/deactivated">',reactivate_link_end:"</a>",smart_count:1})
}else{if(this.isListed()){return t("ml.preview.this_is_a_preview_of_your_listing")
}else{return t("ml.preview.your_space_is_unlisted")
}}}};
i.prototype.suspended=function(){return BootstrapData.get("owner_suspended")
};
i.prototype.editUrl=function(){return"/manage-listing/"+(this.model.get("id"))
};
i.prototype.isListed=function(){return this.model.get("has_availability")
};
i.prototype.cameFromMLFinishModal=function(){return window.location.search.indexOf("preview-finish-modal")!==-1
};
i.prototype.cameFromML=function(){return window.location.search.match(/preview/)
};
i.prototype.isVRPlatformPoweredHost=function(){return Airbnb.userAttributes.is_vr_platform_powered_host
};
i.prototype.showEditLink=function(){return !this.cameFromML()&&!this.isVRPlatformPoweredHost()&&!this.suspended()
};
return i
})(AIR.Views.BaseView);
d.exports=a
},{"../../../../templates/page3/preview_bar.hbs":54}],3:[function(c,d,b){var g=c("jquery");
var a=[];
if(typeof window!=="undefined"){window.__insp=a;
a.push(["wid",965988720])
}var f=function(i){g(window).on("load",function h(){var k=document.createElement("script");
k.async=true;
k.id="inspsync";
k.src="https://cdn.inspectlet.com/inspectlet.js";
var j=document.getElementsByTagName("script")[0];
j.parentNode.insertBefore(k,j)
});
f.push(["tagSession",i])
};
f.push=function(h){return a.push(h)
};
d.exports=f
},{jquery:"jquery"}],4:[function(b,c,a){!(function(j){var h=b("underscore");
var i=1.5;
function g(n){var m=j(n),o,l;
o=m.clone().css({position:"absolute",visibility:"hidden",height:"auto","z-index":"-1"}).appendTo(m.parent());
l=o.height();
o.remove();
return l
}function f(l){var n=j(document),m=n.find(".expandable");
l=l||{};
m.find(".expandable-content").each(function(){var q=j(this);
var o=q.data("threshold")||q.height()*i;
var p;
p=g(q);
if(p<=o){q.closest(".expandable").addClass("expanded")
}else{q.closest(".expandable").data("fullHeight",p)
}});
m.find(".expandable-content-full").each(function(){var p=j(this),o=p.closest(".expandable");
o.data("fullHeight",g(p));
p.css("height",o.find(".expandable-content-summary").height())
});
n.on("click",".expandable-trigger-more",function(p){var o=j(this).closest(".expandable");
if(o.hasClass("expanded")){return
}o.addClass("expanded").find(".expandable-content, .expandable-content-full").css("height",o.data("fullHeight")).afterTransition(function(){j(this).css({transition:"none",height:""});
d(j(this));
if(l.callback){l.callback()
}},200);
p.preventDefault()
})
}function d(l){var m=l.closest(".row");
if(m.hasClass("amenities")){k("amenities")
}else{if(m.hasClass("description")){k("description")
}}}function k(l){Airbnb.Tracking.logEvent({event_name:"listing_view",event_data:{operation:"click",page:"p3",section:l,listing_id:window.AirbnbRooms.hostingId,expanded:true}})
}if(typeof c!=="undefined"){c.exports=f
}else{window.provide("expandable",f)
}})(window.jQuery)
},{underscore:"underscore"}],5:[function(c,d,b){var a=16;
d.exports=f;
function f(g){this.id=0;
this.$el=g
}f.prototype.start=function(){var g=this;
clearTimeout(this.id);
this.id=setTimeout(function(){g.$el.datepicker("option","loading",true)
},a)
};
f.prototype.stop=function(){var g=this;
clearTimeout(this.id);
this.id=setTimeout(function(){g.$el.datepicker("option","loading",false)
},a)
}
},{}],6:[function(g,b,i){function q(x,w){if(Array.isArray(x)){return x
}else{if(Symbol.iterator in Object(x)){var A=[];
var s=true;
var z=false;
var y=undefined;
try{for(var v=x[Symbol.iterator](),B;
!(s=(B=v.next()).done);
s=true){A.push(B.value);
if(w&&A.length===w){break
}}}catch(u){z=true;
y=u
}finally{try{if(!s&&v["return"]){v["return"]()
}}finally{if(z){throw y
}}}return A
}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")
}}}var p=g("underscore");
var j=g("./util");
var r="/v2/calendar_months";
var a=3;
var m={};
b.exports={getDataForMonth:function(s,u){return f(s,u)
},clearCache:function(){m={}
}};
function f(v,A){var s=new $.Deferred();
var z=v.getMonth()+1;
var w=v.getFullYear();
var y=l(z,w);
if(y){return s.resolve(y)
}var x=d(z,w);
var u=q(x,2);
z=u[0];
w=u[1];
n(A,z,w).then(function(B){B.calendar_months.forEach(h);
s.resolve(l(z,w))
}).fail(function(){return s.reject()
});
return s
}function h(s){m[""+s.year+"-"+s.month]=c(s)
}function l(u,s){return m[""+s+"-"+u]
}function c(s){s=p.clone(s);
s.condition_range_map=o(s.condition_ranges||[]);
return s
}function o(s){return s.reduce(function(A,w){var B=new Date(w.start_date);
var u=new Date(w.end_date);
for(var y=B.getUTCDate();
y<=u.getUTCDate();
y++){var v=k(y);
var z=k(B.getUTCMonth()+1);
var x=""+B.getUTCFullYear()+"-"+z+"-"+v;
A[x]=w.conditions
}return A
},{})
}function k(s){var u=s.toString();
if(s<10){u="0"+u
}return u
}function d(w,u){var v=new Date(u,w,1);
var y=new Date(u,w-2,1);
var z=new Date(u,w-a,1);
var s=l(v.getMonth()+1,v.getFullYear());
var x=l(y.getMonth()+1,y.getFullYear());
if(s!=null&&x==null){return[z.getMonth()+1,z.getFullYear()]
}return[w,u]
}function n(w,u,s){var v={listing_id:w,month:u,year:s,count:a,_format:"with_conditions"};
return Airbnb.Api.get(r,{data:v})
}},{"./util":13,underscore:"underscore"}],7:[function(g,d,R){function Z(ac){return ac&&ac.__esModule?ac:{"default":ac}
}var D=g("./datePickerExperiment");
var c=Z(D);
"use strict";
g("../../vendor/polyfills/modernizr-touch");
var ab=g("underscore");
var A=g("./async-spinner");
var z=g("./tooltip-manager");
var m=g("./util");
var X=g("./data");
var O=g("moment");
var u=window.fakeQuery.ui.locale.data().firstDay;
var Y=O.localeData().firstDayOfWeek();
var P=Y-u;
var H="ui-busy-date";
var S="ui-condition-not-met";
var B={};
var F={};
$.fn.calendarDateSpan=function J(ak,ad,aj){var al=this.is("form")?this:this.find("form:first");
if(ak==="option"){return q(al,ad,aj)
}var ae;
var ah=ak.checkin||".checkin";
var af=ak.checkout||".checkout";
var ag=al.find(ah);
var ac=al.find(af);
var ai=ak.listingId;
U(al,"checkin",ag);
U(al,"checkout",ac);
U(al,"options",ak);
Q(ag);
ae=al.airbnbInputDateSpan(ab.extend({},ak,{getNextDate:M(ai),defaults:ab.extend(ak.defaults||{},{showButtonPanel:true,additionalInfo:y(al,ak)})}));
o(ag,ai);
h(ac,ai);
return ae
};
function q(ae,af,ag){var ac=W(ae,"checkin");
var ad=W(ae,"checkout");
ac.datepicker("option",af,ag);
ad.datepicker("option",af,ag);
if(af==="fixed"){N(ac,ag);
N(ad,ag)
}}function M(ad){return function ac(ag){var af=new $.Deferred();
var ah=new Date(ag);
var ae=m.isoDate(ag);
X.getDataForMonth(ag,ad).then(function(aj){var ai=aj.condition_range_map[ae];
ah.setDate(ag.getDate()+ai.min_nights);
af.resolve(ah)
});
return af
}
}function N(ac,ae){var ad=ac.data("tooltip-manager");
if(!ad){return
}if(ae){ad.fix()
}else{ad.unfix()
}}function Q(ac){var ad=$.datepicker.parseDate(ac.val());
U(ac,"month",ad.getMonth()+1);
U(ac,"year",ad.getFullYear())
}function y(ae,ad){var ah=null;
var ac=m.cleanDate(new Date());
var ag=[];
var af=W(ae,"year");
var ai=W(ae,"month");
if(ad.lastUpdated){ah=m.fromIsoDate(ad.lastUpdated)
}ag.push(v(ad.minNights,ad.condition_ranges,af,ai));
ag.push(m.lastUpdated(ac,ah));
return ag.join("<br>")
}function v(ag,af,ac,ad){var ae;
if(af==null){ae=I18n.t("datepicker_min_nights",{smart_count:ag})
}else{if(af.length===1){if(af[0].conditions.min_nights===ag){ae=I18n.t("datepicker_min_nights",{smart_count:ag})
}else{ae=I18n.t("datepicker_min_nights_this_month",{smart_count:ag})
}}else{ae=I18n.t("datepicker_min_nights_varies")
}}return ae
}function j(ac){return ac.closest("form")
}function W(ad,ac){return j(ad).data("cds-"+ac)
}function U(ad,ac,ae){return j(ad).data("cds-"+ac,ae)
}function n(ac,ad){return W(ac,ad).data("fqUIDatepicker")
}function l(ac){var ad=n(ac,"checkin");
return $.datepicker.parseDate(ad.$target.val())
}$.calendarDateSpan={reset:function(){X.clearCache()
}};
function o(ac,ad){E(ac,ad,"checkin",C(ac))
}function h(ac,ad){E(ac,ad,"checkout",I(ac))
}function E(ad,ah,af,ae){var ac=0,ag=new A(ad);
f(ad,"beforeShow",function(){var ai=m.cleanDate($.datepicker.parseDate(ad.val())),aj=++ac;
ag.start();
X.getDataForMonth(ai,ah).then(function(ak){if(ac===aj){ae(ak)
}}).always(function(){return ag.stop()
})
});
f(ad,"onChangeMonthYear",function(aj,ak){var ai=m.cleanDate(new Date()),al=++ac;
ai.setDate(1);
ai.setYear(aj);
ai.setMonth(ak-1);
U(ad,"year",aj);
U(ad,"month",ak);
ag.start();
X.getDataForMonth(ai,ah).then(function(am){if(ac===al){ae(am)
}}).always(function(){return ag.stop()
})
});
f(ad,"onSelect",function(){var ak=(0,c["default"])();
if(!ak){return
}var al=ad.attr("id");
if(al!="checkin"||!ad.val()){return
}var aj=$.datepicker.parseDate(ad.val());
var ai=$.datepicker.formatDate("yy-mm-dd",aj);
X.getDataForMonth(aj,ah).then(function(an){var am=an.condition_range_map;
F[aj]=1;
if(am[ai]!=null&&am[ai].min_nights!=null){F[aj]=am[ai].min_nights
}B={};
an.days.forEach(function(ao){var ap=am[ao.date];
V(ap,aj,ao.date,ak)
})
})
});
f(ad,"onReset",function(){var ai=(0,c["default"])();
if(!ai){return
}B={};
F={}
});
if(!window.Modernizr.touch){w(ad,ah,af)
}}function w(ad,ag,af){var ac=0,ae=new z();
ad.data("tooltip-manager",ae);
f(ad,"onDateMouseEnter",function(ah,aj){var ai=++ac;
X.getDataForMonth(ah,ag).then(function(ao){if(ai!==ac){return
}var ak;
var am=m.isoDate(ah);
var al=ab.find(ao.days,function(ap){return ap.date===am
});
var an;
if(al.price){ak=I18n.priceString(al.price.local_price,al.price.local_currency);
an=ae.add(am,ak,aj);
an.appendTo($("body"))
}})
});
f(ad,"onDisabledDateMouseEnter",function(ai,ak){var aj=++ac;
var ah=W(ad,"options");
X.getDataForMonth(ai,ag).then(function(an){if(aj!==ac){return
}if(af==="checkout"){an=i(an)
}var al=m.isoDate(ai);
var at=m.isoDate(new Date());
var aq=ab.find(an.days,function(ay){return ay.date===al
});
var ar=an.condition_range_map[al];
var ax=l(ad);
var am=al===m.isoDate(ax);
var aw=al<at;
var ap;
var av;
var ao;
if(aq.available&&!aw){if(af==="checkin"){if(!G(ar,al)){ao=K(ar.start_day_of_week);
ap=I18n.t("calendar.host_requires_start_day_of_week",{host_name:ah.hostFirstName,day_of_week_plural:ao,line_break:"<br>"})
}else{if(!r(ar)){ap=I18n.t("calendar.host_requires_no_arrival",{host_name:ah.hostFirstName,line_break:"<br>"})
}}}else{if(af==="checkout"){if(am){ap=I18n.t("checkin_noun")
}else{if(!s(ar,al,ax)){var au=(0,c["default"])()?"calendar.host_requires_minimum_nights":"calendar.host_requires_minimum_nights.original";
ap=I18n.t(au,{host_name:ah.hostFirstName,smart_count:b(ar,al),line_break:"<br>"})
}else{if(!p(ar)){ap=I18n.t("calendar.host_requires_no_departure",{host_name:ah.hostFirstName,line_break:"<br>"})
}}}}}}if(ap){av=ae.add(al,ap,ak);
av.appendTo($("body"))
}})
});
f(ad,"onDateMouseLeave",function(ah){ac++;
ae.clear()
});
f(ad,"onDisabledDateMouseLeave",function(ah){ac++;
ae.clear()
});
f(ad,"onClose",function(){ac++;
ae.clear()
})
}function C(ac){return function(ad){a(ac,ad,"checkin");
x(ac,ad)
}
}function I(ac){return function(ad){a(ac,i(ad),"checkout");
x(ac,ad)
}
}function f(ae,ac,af){var ad=ae.datepicker("option",ac);
ae.datepicker("option",ac,function(){if(typeof ad==="function"){ad.apply(this,arguments)
}af.apply(this,arguments)
})
}function k(ad){var ac=false;
return ad.map(function(ae){var af=ab.clone(ae);
if(af.available){ac=true
}else{if(ac){af.available=true;
ac=false
}}return af
})
}function i(ac){var ac=ab.clone(ac);
ac.days=k(ac.days);
return ac
}function s(ag,ad,ac){if(ag==null){return true
}var ai=b(ag,ad);
if(ai){var ah=O(ad);
var ae=O(m.cleanDate(ac));
var af=ae.clone().add(ai-1,"days");
return ah.isBefore(ae)||ah.isAfter(af)
}return true
}function V(ah,ae,ad,af){if(!af||ah==null){return ah
}if(!F[ae]&&!ah.min_nights){return ah
}var ag=O(ad);
var ac=O(m.cleanDate(ae));
if(ac>ag){delete B[ad];
return ah
}if(!B[ad]){B[ad]=B[ad]||{};
B[ad].min_nights=F[ae]
}F[ae]=Math.max(ah.min_nights||0,F[ae]||0);
return B[ad]
}function b(ad,ac){if(B[ac]){return B[ac].min_nights
}else{return ad.min_nights
}}function G(af,ac){if(af==null){return true
}var ae=af.start_day_of_week;
if(ae){var ag=O(ac);
var ad=ag.weekday()+u+P;
return ad===ae
}return true
}function r(ad,ac){if(T(ac)){return true
}return ad==null?true:!ad.closed_to_arrival
}function p(ad,ac){if(T(ac)){return true
}return ad==null?true:!ad.closed_to_departure
}function T(ad){var ac=O(m.cleanDate(new Date()));
var ae=O(ad);
return ac>ae
}function a(ag,ai,ah){var af=(0,c["default"])();
if(af){H="ui-busy-date-exp";
S="ui-condition-not-met-exp"
}var aj={};
var ac={};
var ae=ai.condition_range_map;
var ad=l(ag);
ai.days.forEach(function(al){var ao=ae[al.date];
var ak=!al.available;
var am;
if(ah==="checkin"){am=G(ao,al.date)&&r(ao,al.date)
}else{if(ah==="checkout"){var an=V(ao,ad,al.date,af);
am=s(an,al.date,ad)&&p(ao,al.date)
}}if(ak||!am){ac[al.date]=true
}if(ak){aj[al.date]=[H]
}else{if(!am){aj[al.date]=[S]
}}});
ag.datepicker("option","dateClasses",aj);
ag.datepicker("option","blockedDates",ac);
if(af){if(ah=="checkout"){ag.datepicker("option","checkinDate",ad)
}ag.datepicker("option","pastDateClasses",[H])
}}function aa(){return(0,c["default"])()
}function x(ad,ae){var ac=ab.extend({condition_ranges:ae.condition_ranges},W(ad,"options"));
ad.datepicker("option","additionalInfo",y(ad,ac))
}function K(ad){var ac;
switch(ad){case 0:ac=I18n.t("Sundays");
break;
case 1:ac=I18n.t("Mondays");
break;
case 2:ac=I18n.t("Tuesdays");
break;
case 3:ac=I18n.t("Wednesdays");
break;
case 4:ac=I18n.t("Thursdays");
break;
case 5:ac=I18n.t("Fridays");
break;
case 6:ac=I18n.t("Saturdays");
break
}return ac
}},{"../../vendor/polyfills/modernizr-touch":45,"./async-spinner":5,"./data":6,"./datePickerExperiment":8,"./tooltip-manager":10,"./util":13,moment:"moment",underscore:"underscore"}],8:[function(b,d,a){Object.defineProperty(a,"__esModule",{value:true});
a["default"]=f;
"use strict";
var g=b("../../trebuchet");
var c;
function f(){if(c!=null){return c
}if(g.getBootstrap("launch_p3_date_picker_experiment")){c=Airbnb.ERF.deliverExperiment("p3_date_picker_experiment",{control:function(){return false
},experiment:function(){return true
},treatment_unknown:function(){return false
}})
}else{c=Airbnb.userAttributes.can_see_availability_rules
}return c
}d.exports=a["default"]
},{"../../trebuchet":42}],9:[function(b,c,a){c.exports=b("./date-span")
},{"./date-span":7}],10:[function(d,f,a){var g=d("./tooltip");
var c=d("underscore");
var b=0;
f.exports=h;
function h(){this.tooltips={};
this.fixed=false;
this.id=b++
}h.prototype.add=function(j,l,i){var k=new g(i,l,this.id);
this.tooltips[j]=k;
if(this.fixed){k.fix()
}return k
};
h.prototype.remove=function(i){var j=this.tooltips[i];
delete this.tooltips[i];
j.remove();
return j
};
h.prototype.fix=function(){this.fixed=true;
c.each(this.tooltips,function(i){i.fix()
})
};
h.prototype.unfix=function(){this.fixed=false;
c.each(this.tooltips,function(i){i.unfix()
})
};
h.prototype.clear=function(){for(var i in this.tooltips){if(this.tooltips.hasOwnProperty(i)){this.remove(i)
}}$(".datepicker-tooltip-"+this.id).remove()
}
},{"./tooltip":12,underscore:"underscore"}],11:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(h,o,g,n,m){this.compilerInfo=[4,">= 1.0.0"];
g=this.merge(g,h.helpers);
m=m||{};
var k="",f,i,j="function",l=this.escapeExpression;
k+='<div class="tooltip ';
if(i=g.position){f=i.call(o,{hash:{},data:m})
}else{i=(o&&o.position);
f=typeof i===j?i.call(o,{hash:{},data:m}):i
}k+=l(f)+" datepicker-tooltip datepicker-tooltip-";
if(i=g.managerId){f=i.call(o,{hash:{},data:m})
}else{i=(o&&o.managerId);
f=typeof i===j?i.call(o,{hash:{},data:m}):i
}k+=l(f)+'"\n  aria-hidden="false">\n  <p class="panel-body text-center">';
if(i=g.text){f=i.call(o,{hash:{},data:m})
}else{i=(o&&o.text);
f=typeof i===j?i.call(o,{hash:{},data:m}):i
}if(f||f===0){k+=f
}k+="</p>\n</div>\n";
return k
})
},{"hbsfy/runtime":60}],12:[function(c,d,b){var h=c("o2");
var g=c("./tooltip.hbs");
d.exports=f;
function f(i,j,k){this.$target=i;
this.removed=false;
this.$el=$(g({position:"tooltip-bottom-middle",text:j,managerId:k}))
}f.prototype.appendTo=function(i){if(this.removed){return
}i.append(this.$el);
a(this)
};
f.prototype.fix=function(){if(!this._fixed){this._fixed=true;
a(this)
}};
f.prototype.unfix=function(){if(this._fixed){this._fixed=false;
a(this)
}};
f.prototype.remove=function(){this.removed=true;
this.$el.remove()
};
function a(l){var j=l.$target,k=l.$el,n=j.offset(),i="absolute",m=n.top-(k.height()+11);
l.fix();
if(l._fixed){m-=$(window).scrollTop();
i="fixed"
}k.css({position:i,top:m,left:n.left-k.outerWidth()/2+j.width()/2})
}},{"./tooltip.hbs":11,o2:"o2"}],13:[function(c,d,b){var f=c("moment");
var a={isoDate:function(g){return $.datepicker.formatDate("yy-mm-dd",g)
},fromIsoDate:function(g){return $.datepicker.parseDate("yy-mm-dd",g)
},cleanDate:function(g){return a.fromIsoDate(a.isoDate(g))
},lastUpdated:function(l,k){if(!k){return I18n.t("datepicker_never_updated")
}var g=f(l),h=g.diff(k,"days"),i=g.diff(k,"months"),j=g.diff(k,"years");
if(j>0){return I18n.t("datepicker_updated_years_ago",{smart_count:j})
}if(i>0){return I18n.t("datepicker_updated_months_ago",{smart_count:i})
}if(h>0){return I18n.t("datepicker_updated_days_ago",{smart_count:h})
}return I18n.t("datepicker_updated_today")
}};
d.exports=a
},{moment:"moment"}],14:[function(c,f,b){var d=(function(){function i(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(l,j,k){if(j){i(l.prototype,j)
}if(k){i(l,k)
}return l
}
})();
function g(i,j){if(!(i instanceof j)){throw new TypeError("Cannot call a class as a function")
}}var a=c("../pausable_timer");
var h=(function(){function m(p){g(this,m);
this.timestamp=new Date().toISOString();
this.localTime=new Date().toLocaleString();
this.airEventData=p.airEventData;
this.timeIntervals=p.timeIntervals;
this.logInitialImpression();
this.initTimers();
this.initVisiblityChangeEvent()
}d(m,[{key:"logInitialImpression",value:function j(){$.extend(this.airEventData.event_data,{duration_uuid:this.timestamp,local_time:this.localTime,is_new_tab_or_window:this.isNewTab()});
Airbnb.Tracking.logEvent(this.airEventData)
}},{key:"initTimers",value:function l(){var p=this;
this.timers=this.timeIntervals.map(function(q){return new a(q*1000,function(){Airbnb.Tracking.logEvent({event_name:p.airEventData.event_name,event_data:{operation:"duration",page:p.airEventData.event_data.page,duration_uuid:p.timestamp,page_view_duration:q}})
})
});
this.timers.forEach(function(q){return q.start()
})
}},{key:"initVisiblityChangeEvent",value:function o(){$(window).on("blur",this.onHide.bind(this));
$(window).on("focus",this.onShow.bind(this))
}},{key:"onShow",value:function n(){this.timers.forEach(function(p){return p.resume()
})
}},{key:"onHide",value:function i(){this.timers.forEach(function(p){return p.pause()
})
}},{key:"isNewTab",value:function k(){if(!document.referrer){return false
}if(window.history.length===0){return true
}return window.history.length===1&&!$("html").hasClass("ie")
}}]);
return m
})();
f.exports=h
},{"../pausable_timer":40}],15:[function(c,d,a){var g=c("backbone"),b="/locations/api/neighborhood_tiles.json?",f=g.Model.extend({parse:function(h){return this.id?h[this.id]:h
},url:function(){var h=b;
return[h,"ids[]=",this.id].join("")
},hasThumbnails:function(){return this.get("thumbnails")&&this.get("thumbnails").length>0
}});
d.exports=f
},{backbone:"backbone"}],16:[function(b,c,a){var f=window.jQuery;
var d=window.Airbnb;
var g=b("../trebuchet");
c.exports={init:function(){var h=this;
this.bookItBtnClass="btn-primary";
this.hasOffer=false;
if(g.getBootstrap("book_it_color_experiment_v2")){this.bookItBtnClass=d.ERF.deliverExperiment("book_it_color_experiment_v2",{control:function(){return"btn-primary"
},babu:function(){return"book-it-btn-experiment-babu"
},lima:function(){return"book-it-btn-experiment-lima"
},kazan:function(){return"book-it-btn-experiment-kazan"
},treatment_unknown:function(){return"btn-primary"
}})
}f(".js-book-it-btn").on("click",function(i){d.Tracking.queueEvent({event_name:"book_it_color_experiment_v2",event_data:{section:"book_it_color_experiment_v2",page:"p3",operation:"click",treatment:h.bookItBtnClass,hostingId:AirbnbRooms.hostingId}})
});
f(this.updateButton());
d.mediator.on("p3::personalize",this.updateButton.bind(this));
d.mediator.on("p3::refreshSubtotal",this.updateButton.bind(this));
d.mediator.on("p3::receivedOfferState",this.removeButtonColor.bind(this))
},updateButton:function(){if(!this.hasOffer){f(".js-book-it-btn").removeClass("btn-primary");
f(".js-book-it-btn").addClass(this.bookItBtnClass)
}},removeButtonColor:function(){this.hasOffer=true;
f(".js-book-it-btn").removeClass(this.bookItBtnClass)
}}
},{"../trebuchet":42}],17:[function(b,c,a){var f=window.jQuery;
var d=window.Airbnb;
c.exports={init:function(){var g=this;
d.ERF.deliverExperiment("p3_safety_features_section",{control:function(){},treatment1:function(){return g.isT1=true
},treatment2:function(){return g.isT2=true
},treatment_unknown:function(){}});
f(function(){return g.updateUiForExperiment()
})
},updateUiForExperiment:function(){var g=f(".js-p3-safety-features-section");
if(this.isT1||this.isT2){f(".js-safety-feature").addClass("hide");
if(this.isT1){g.find("del").remove();
if(g.find(".js-present-safety-feature").length===0){g.find(".js-no-safety-features-text").removeClass("hide")
}}g.removeClass("hide")
}}}
},{}],18:[function(b,c,a){function d(i){if(!Airbnb.Utils.isAdmin()){return
}var h=$('<div id="admin-placeholder"></div>'),g=false;
$("#room").after(h);
$(document).one("keypress",function(j){if(j.target.type==="textarea"||j.target.type==="password"||j.target.type==="text"){return
}if(g){return
}switch(j.which){case 49:case 50:case 51:$("body").animate({scrollTop:$("#admin-placeholder").offset().top});
break
}});
var f=function(){$.get("/rooms/ajax_admin_footer",{hosting_id:i},function(k,j){if(j==="success"){h.fadeOut(200,function(){h.replaceWith(k.footer);
$("#admin_area").hide().slideToggle(500);
g=true
})
}})
};
window._.defer(f)
}c.exports={init:d}
},{}],19:[function(d,b,f){var a,h,j,c,g,i=d("underscore");
g={init:function(){this.hasPushState=typeof window.history.pushState==="function";
if(this.hasPushState){window.addEventListener("popstate",function(k){if(k.state){window.location=window.location
}});
window.history.replaceState({},null,window.location)
}Airbnb.mediator.on("p3::updateSubtotal",this.refresh.bind(this));
return this.refresh
},firstTimeSubtotalDisplay:true,refresh:function(x){var p=$(".js-subtotal-container"),y=$("#checkin").val(),q=$("#checkout").val(),w=$("#number_of_guests").val(),u=$.query.load(window.location.href).keys,r={},l;
if(a===y&&h===q&&j===w){if(!x){return
}if(c){window.setTimeout(function(){x(null,c)
},0)
}else{x("no data")
}return
}a=y;
h=q;
j=w;
function v(z){Airbnb.mediator.emit("p3::refreshSubtotal",z);
AirbnbRooms.updateAirEvent({avg_price:z.price_per_night_usd,native_avg_price:z.price_per_night_native,total_price:z.total_price_usd,native_total_price:z.total_price_native,service_fee:z.service_fee_usd,include_service_fee:z.include_service_fee,tax_amount:z.tax_amount,tax_descriptions:z.tax_descriptions,available:z.available,instant_book_possible:z.can_instant_book,currency:z.currency,checkin_date:$.datepicker.formatDate("yy-mm-dd",$.datepicker.parseDate(y)),checkout_date:$.datepicker.formatDate("yy-mm-dd",$.datepicker.parseDate(q)),nights:z.nights,guests:w});
AirbnbRooms.sendAirEvent();
i.extend(AirbnbRooms.ibData,{is_instant_bookable:z.can_instant_book});
$("#view_other_listings_button").data("reasonCode",z.unavailable_reason_code);
c=z;
if(x){x(null,z)
}}if(y&&q){r.checkin=y;
r.checkout=q
}if(w&&w!=="1"){r.guests=w
}if(u.s){r.s=u.s
}l=window.location.pathname;
if(!$.isEmptyObject(r)){l+="?"+$.param(r)
}if(u.guests!==r.guests||u.checkin!==r.checkin||u.checkout!==r.checkout){if(g.hasPushState){var o=function(){window.history.pushState({},null,l)
};
var n=function(){window.history.replaceState({},null,l)
};
Airbnb.ERF.deliverExperiment("p3_history_replace_state",{control:o,use_replace_state:n,treatment_unknown:o,not_in_experiment:o})
}}Airbnb.mediator.emit("p3::dateGuestChange",r);
if(y&&q){$(".js-book-it-btn").removeAttr("disabled");
$(".js-book-it-status").addClass("loading");
var m=$("#book_it_form").serializeArray();
if(this.firstTimeSubtotalDisplay&&u.s&&u.checkin&&u.checkout){var s=$.datepicker.formatDate("yy-mm-dd",$.datepicker.parseDate(u.checkin));
var k=$.datepicker.formatDate("yy-mm-dd",$.datepicker.parseDate(u.checkout));
m.push({name:"from_search_checkin",value:s});
m.push({name:"from_search_checkout",value:k})
}this.firstTimeSubtotalDisplay=false;
$.getJSON("/rooms/ajax_refresh_subtotal",m,v)
}else{Airbnb.mediator.emit("p3::refreshSubtotal")
}}};
b.exports=g
},{underscore:"underscore"}],20:[function(b,c,a){(function(m,i,h){var k=undefined;
var d=undefined;
var j=undefined;
var f=undefined;
var l=undefined;
if(typeof c!=="undefined"){k=b("../../simple_iterator");
d=b("../../views/shared/social/social_share_widget");
l={template:b("../../../templates/page3/slideshow_image.hbs"),preloadTemplate:b("../../../templates/page3/slideshow_image_preload.hbs")}
}else{k=enderRequire("simple_iterator");
d=enderRequire("views/shared/social/social_share_widget");
l={template:JST["page3/slideshow_image"],preloadTemplate:JST["page3/slideshow_image_preload"]}
}j=function(n,o,p){this._viewport=n;
this._panel=o;
this._options=m.extend({},this._options,p)
};
m.extend(j.prototype,{_viewport:null,_panel:null,_currentLeft:0,_options:{extraSpacing:{left:0,right:0}},showInViewport:function(s){var n=s.position(),v=this._options.thumbnailWidth||s.width(),p=this._viewport.width(),u=this._panel.width(),r=n.left+(v-p)/2+10,o=0,q=u-p;
if(p>=u){return
}if(r>=0&&r<=q){this._currentLeft=r
}else{if(r<0){this._currentLeft=0
}else{this._currentLeft=q
}}this._panel.css("left",-this._currentLeft)
}});
f=function(v,x){var p,r,u,q,s,o,w=this;
var n=undefined;
if(i("#photo-social-share-widget").length>0&&i(".hide-sm").is(":visible")&&Airbnb.ERF.deliverExperiment("p3_photo_sharing",{sharing_above_photos:function(){return true
},no_photo_sharing:function(){return false
},treatment_unknown:function(){return false
}})){n=true
}this._options=m.extend({},this._options,x);
this._$slideshow=v;
this._$thumbnails=v.find(".slideshow-thumbnails");
p=v.find(".slideshow-images");
r=v.find(".slideshow-caption");
u=v.find(".slideshow-preload");
q=g("template",this._options);
s=g("preloadTemplate",this._options);
this._slidingPanel=new j(v.find(".thumbnails-viewport"),v.find(".thumbnails-slide-panel"),{thumbnailWidth:this._options.thumbnailWidth});
o=i.makeArray(this._$thumbnails.find("li a").map(function(y){var z=i(this);
return{url:z.attr("href"),caption:z.attr("title"),index:y}
}));
this._list=new k(o,{onChange:function(D,F,G){var H=p.find(".active"),B=w._$thumbnails.find(".active"),I,C=w._$slideshow.data("preload-size")||1,E,A,y=[];
p.find("li:not(.active)").html(q(m.extend({},D,w._options.size))).addClass("active").insertBefore(H);
H.removeClass("active");
if(n){i(".img-contain .social-share-widget").remove();
var z=i("#photo-social-share-widget div:nth-child("+(F+1)+")").clone();
new d({el:z,page:"P3-Photos-"+F});
p.find("li.active .img-contain").prepend(z)
}B.removeClass("active");
I=w._$thumbnails.find("li").eq(F);
I.find("a").addClass("active");
w._slidingPanel.showInViewport(I);
r.toggleClass("hidden",!D.caption).text(D.caption||"");
if(u.length&&s){for(E=0;
E<C;
++E){A=(F+E+1)%o.length;
if(!i("#slideshow-preload-"+A).length){y.push(this.peek(A))
}}if(y.length){u.append(s({images:y}))
}}if(w._options.onChange){w._options.onChange(D,F,G)
}}});
this.toIndex(0);
this._attachClickHandlers();
this._attachKeyboardHandlers()
};
m.extend(f.prototype,{_$slideshow:null,_$thumbnails:null,_list:null,_slidingPanel:null,_options:{size:{},template:null,preloadTemplate:null},_attachClickHandlers:function(){var n=this;
this._$thumbnails.on("click","li a",function(p){p.preventDefault();
var o=n._$thumbnails.find("li").index(i(this).parent());
n.toIndex(o,this)
});
this._$slideshow.on("click","[data-slideshow-prev]",function(o){o.preventDefault();
n.previous(this)
});
this._$slideshow.on("click","[data-slideshow-next]",function(o){o.preventDefault();
if(i(o.target).parents(".p3-photo-social-share-widget").length===0){n.next(this)
}})
},_attachTouchHandlers:function(){},_attachKeyboardHandlers:function(){var o=this,n=function(p){switch(p.which){case 37:o.previous("keyboardLeft");
break;
case 39:o.next("keyboardRight");
break
}};
i(document).on("keydown",n)
},next:function(n){this._list.next(n)
},previous:function(n){this._list.previous(n)
},toIndex:function(n,o){this._list.toIndex(n,o)
}});
function g(o,n){var p=n[o];
if(typeof p==="string"){return JST[p]
}else{if(typeof p==="function"){return p
}else{return l[o]
}}}if(typeof c!=="undefined"){c.exports=f
}else{provide("slideshow",f)
}})(_,jQuery,window)
},{"../../../templates/page3/slideshow_image.hbs":55,"../../../templates/page3/slideshow_image_preload.hbs":56,"../../simple_iterator":41,"../../views/shared/social/social_share_widget":49}],21:[function(b,c,a){c.exports=d;
function d(){this.deliverExperiment()
}d.prototype.deliverExperiment=function(){var f=this.getTreatment();
if(f==="hide_contact_me"){this.hideContactHost()
}this.logImpression(f)
};
d.prototype.getTreatment=function(){return Airbnb.ERF.deliverExperiment("hca_contact_me",{control:f("control"),hide_contact_me:f("hide_contact_me"),treatment_unknown:f("treatment_unknown")});
function f(g){return function(){return g
}
}};
d.prototype.logImpression=function(f){Airbnb.Tracking.logEvent({event_name:"listing_view",event_data:{page:"p3",operation:"impression",section:"hca_contact_me_experiment",hca_contact_me_treatment:f}})
};
d.prototype.hideContactHost=function(){$("#contact-host-link").addClass("invisible")
}
},{}],22:[function(c,d,a){var b=c("underscore");
var f={staggered:false,init:function(o){var k=this;
var n=c("./admin"),h=$.query.load(window.location.href).keys,i=$("#room").data("contactHostSignupModalOrderLaunched");
this.$book_it_form=$("#book_it_form");
this.$book_it_btn_container=$(".js-book-it-btn-container");
n.init(o.hostingId);
this.options=o=o||{};
this.airEventData=o.airEventData||{};
f.hostingId=o.hostingId;
f.staggered=o.staggered;
var m=[];
$("#reviews").find(".review-text").each(function(q,p){m.push($(p).data("review-id"))
});
$.getJSON("/rooms/"+o.hostingId+"/personalization.json",{review_ids:m},function(p){$.extend(p,h);
b.extend(k.ibData,{is_instant_bookable:p.is_instant_bookable});
k._instantBookable=p.is_instant_bookable&&(!p.checkin||!p.checkout);
if(!p.checkin||!p.checkout){f.sendAirEvent()
}enderRequire("o2-flash").display();
Airbnb.mediator.emit("p3::personalize",p)
});
this.initWLButton();
function j(){if(window.FB&&FB.Event&&FB.Event.subscribe){FB.Event.subscribe("edge.create",function(p){ga("send","social","Facebook","Like",p)
});
FB.Event.subscribe("edge.remove",function(p){ga("send","social","Facebook","Unlike",p)
})
}}if(window.FB){j()
}else{Airbnb.mediator.on("fbInit",j)
}var l=[[".photos > a","p3_photos_click"],[".maps > a","p3_maps_click"],[".calendar > a","p3_calendar_click"],["#description_link","p3_description_click"],["#amenity_link","p3_amenity_click"],["#house_rules_link","p3_house_rules_click"]];
l.map(function(p){$(p[0]).on("click",function(){Airbnb.Tracking.logEvent({event_name:p[1],event_data:{action:"click",hosting_id:AirbnbRooms.hostingId}})
})
});
this.$book_it_form.on("submit",f.bookItFormSubmitHandler);
if(document.location.hash){$("a[href='"+encodeURIComponent(document.location.hash)+"']").parent().click()
}var g=c("../lib/airbnb/expandable");
f.initOpenGraphWishlist();
f.initTranslateButton(o.locale)
},initWLButton:function(){Airbnb.WishListButton.init({placement:"page3",tooltipOptions:{showLimit:2}})
},isInstantBookable:function(){return this._instantBookable
},setInstantBookable:function(g){this._instantBookable=g;
if(g){this.showInstantBookButton()
}else{this.showBookItButton()
}},initOpenGraphWishlist:function(){Airbnb.OpenGraph.init(Airbnb.OpenGraph.sendWishlistToFacebook,AirbnbRooms.hostingId);
if(Airbnb.userAttributes.og_publish){Airbnb.mediator.on("fbLoginStatus",Airbnb.Utils.fbInitHasPublishAction)
}},initTranslateButton:function(h){var k=$("#new_translate_button_wrapper");
if(k){var j=$("#description_text_wrapper"),g=k.find(".translate_button_label"),i=k.find(".gBrandingText"),m=j.html(),l=false;
k.click(function(){if(l){l=false;
g.html(I18n.t("translate_this_description"));
i.removeClass("translated");
j.html(m);
$("#disclaimer_text").html("")
}else{l=true;
window.P3.Utils.translate(h)
}})
}},bookItFormSubmitHandler:function(j){var h=$(this),i=h.find("button"),g;
if(!window.P3.Utils.check_inputs()){j.preventDefault()
}else{i.attr("disabled","disabled");
i.css("cursor","progress");
$("#instant_book_arrow").addClass("gray_arrow");
g=f.getP3ClickEventData(f.isInstantBookable()?"INSTANT_BOOK":"BOOK_IT");
Airbnb.Tracking.queueEvent(g)
}},showInstantBookButton:function(){this.$book_it_btn_container.addClass("instant-book")
},showBookItButton:function(){this.$book_it_btn_container.removeClass("instant-book")
},sendAirEvent:function(){if(this.airEventData.status){this.airEventData.status="update";
this.airEventData.operation="update";
Airbnb.Tracking.logEvent({event_name:"listing_view",event_data:this.airEventData})
}else{this.airEventData.status="initial";
this.airEventData.operation="impression";
Airbnb.mediator.emit("pageImpression::initialData",{event_name:"listing_view",event_data:this.airEventData})
}},updateAirEvent:function(g){$.extend(this.airEventData,g)
},getP3ClickEventData:function(g){return{event_name:"P3",event_data:{page:"LISTING_PAGE",section:g,action:"CLICK",listing_id:f.hostingId,is_instant_bookable:this.ibData.is_instant_bookable}}
},ibData:{}};
d.exports=f
},{"../lib/airbnb/expandable":4,"./admin":18,underscore:"underscore"}],23:[function(l,d,y){function a(z){return z&&z.__esModule?z:{"default":z}
}var r=l("../../templates/page3/interaction.hbs");
var u=a(r);
var x=l("underscore");
var b=l("backbone");
var c=l("o2").matchMedia;
var i=l("./views/photos");
var o=l("./views/similar_listings");
var j=l("./views/book_it");
var h=l("./views/location");
var m=l("./views/details");
var s=l("./views/host_profile");
var n=l("./views/reviews");
var q=l("../apps/manage_listing/views/preview_bar");
var p=l("../lib/airbnb/expandable");
var f=l("../views/shared/social/social_share_widget");
var w=l("./hca_contact_me");
var k=l("../logging/page_impression_logger");
var v=l("./utils");
function g(z){var A=this;
function B(C){C.preventDefault();
Airbnb.mediator.emit("p3::viewCalendar")
}this.initialize=function(C){x.extend(this,b.Events);
if(window.navigator.userAgent.indexOf("iPad")>=0){$(".webkit-render-fix").removeClass("webkit-render-fix")
}this.options=C;
Airbnb.mediator.on("pageImpression::initialData",this.setUpTimeSpentOnPage);
this.photosView=new i({el:$("#photos"),photoData:C.photoData});
this.bookItView=new j({el:$("#book_it_form"),hostingId:C.hostingId,minNights:C.minNights,calendarLastUpdated:C.calendarLastUpdated,nightly_price:C.nightly_price,staggered_price:C.staggered_price,isMonthly:C.isMonthly,hostFirstName:C.hostFirstName});
this.similarListingsView=new o({el:$("#similar-listings"),hostingId:C.hostingId});
this.locationView=new h({el:$("#neighborhood")});
this.detailsView=new m({el:$("#details")});
this.hostProfileView=new s({el:$("#host-profile")});
this.reviewsView=new n({el:$("#reviews"),locale:C.locale});
$("#sticky-md-book-it-btn").on("click",(function(D){B(D);
Airbnb.Tracking.logEvent(this.getP3ContactHostEventData("sticky_md_book_it_btn","click"))
}).bind(this));
this.setupBindings();
this.initLazyLoadSections();
Airbnb.WishListButton.init({placement:"p3"});
this.initShareWidget();
new w()
};
this.initShareWidget=function(){var C=$(".p3-share-widget");
var E=4;
if($("#p3-sharing-module").length>0){var D=Airbnb.ERF.deliverExperiment("p3_sharing_module",{control:function(){return"control"
},rounded_icons:function(){return"rounded_icons"
},boxed_icons:function(){return"boxed_icons"
},treatment_unknown:function(){return"control"
}});
if(D==="rounded_icons"){E=3;
C.addClass("rounded-icons").find(".share-title").hide();
if(Airbnb.Utils.isUserLoggedIn){C.addClass("pull-left");
$("#book_it .other-actions").addClass("clearfix").find(".flag-trigger").removeClass("space-top-1").addClass("row-space-top-3 pull-left inline-flag-trigger").before('<span class="vertical-list-divider pull-left row-space-top-3">\n                      </span>').find("a").html("<span>"+I18n.t("Report, as in report a listing")+"</span>")
}}else{if(D==="boxed_icons"){E=2;
C.hide();
$("#box-social-share-widget-container").removeClass("hide");
C=$(".p3-box-share-widget");
C.addClass("boxed-icons").find(".share-title").hide();
$("#book_it").find(".flag-trigger").removeClass("space-top-1").addClass("row-space-top-3");
C.find(".share-triggers").replaceWith(function(){return $("<div/>",{"class":"share-triggers btn-group",html:this.innerHTML})
});
C.find("a").slice(0,2).addClass("text-center btn").each(function(G,F){var H=$(F);
H.append(H.attr("title"))
});
C.find(".more-btn").addClass("btn").append(I18n.t("More"))
}}}new f({el:C,page:"P3",maxSharingOptions:E})
};
this.setupBindings=function(){var C=this;
$("#view-calendar").on("click",B);
$("#view_other_listings_button").on("click",v.viewOtherListings.bind(v));
p({callback:function(){Airbnb.mediator.emit("p3::updateStickyCalculations")
}});
Airbnb.mediator.on("p3::personalize",this.doPersonalization.bind(this));
Airbnb.mediator.on("p3::contactHostLogging",this.contactHostLogging.bind(this));
$("#host-profile-contact-btn, #contact-host-link").on("click",function(E){var D=$(C).is("#contact-host-link")?"CONTACT_HOST_LINK":"CONTACT_HOST";
if(!Airbnb.Utils.isUserLoggedIn){C.contactHostLogging({section:D,step:"clicked_contact",action:"click"});
Airbnb.mediator.emit("p3::contactHostLogging",{section:"signup_login_modal",step:"signup_login_launched",action:"impression"});
C.launchSignupOrLoginModal("signup",D,E);
E.preventDefault()
}else{C.contactHostHandler(D,E)
}});
$(window).on("load",function(){$("img.lazy").lazyload()
});
Airbnb.WishListButton.init({placement:"p3"});
$(window).on("load",v.trackResourceTiming)
};
this.launchSignupOrLoginModal=function(C,E,D){var F=function(){A.contactHostLogging({section:"signup_login_modal",step:"logged_in",action:"submit"});
A.contactHostHandler(E,D)
};
if(C==="login"){Airbnb.SignupLoginModal.launchLogin({callback:F,flow:"contact-host"})
}else{if(C==="signup"){Airbnb.SignupLoginModal.launchSignup({callback:F,flow:"contact-host"})
}}};
this.doPersonalization=function(F){var C;
var D;
var E;
var H;
if(F.is_owned_by_user){$(".superhost-tooltip-other, .superhost-tooltip-self").toggleClass("hide");
$(".response-details").toggleClass("hide")
}else{if(Airbnb.Utils.isUserLoggedIn){var G=$("#flag-modal-container");
new window.UserFlag(F.flag_info,G)
}}if(F.listing_attributes){$("#list-your-space").hide();
I18n.extend(F.preview_bar_phrases);
C=F.listing_attributes.listing;
D=new b.Model(C);
E=new q({model:D});
E.$el.insertAfter("#header");
H=$("#edit-summary a");
H.attr("href",H.data("href"));
$("#edit-summary").removeClass("hide");
Airbnb.mediator.emit("p3::updateStickyCalculations")
}this.initPreviouslyMessaged(F.interaction)
};
this.initPreviouslyMessaged=function(C){var D;
if(C){C.message=C.replied_last?t("interactionContacted",{date:C.date}):t("interactionReceived",{date:C.date});
C.viewMessage=I18n.t("interactionViewMessage");
C.completeBooking=I18n.t("completeBooking");
C.hasOffer=!!C.offer_url;
D=$((0,u["default"])(C));
$("#details-column").prepend(D);
if(C.hasOffer){$(".js-book-it-btn").removeClass("btn-primary");
Airbnb.mediator.emit("p3::receivedOfferState")
}}};
this.contactHostHandler=function(D,C){this.loadContactHostModal();
Airbnb.Tracking.logEvent(AirbnbRooms.getP3ClickEventData(D));
if(C){C.preventDefault()
}};
this.contactHostLogging=function(D){var C=this.getP3ContactHostEventData(D.section,D.action);
if(D.step){$.extend(C.event_data,{step:D.step})
}Airbnb.Tracking.logEvent(C)
};
this.loadContactHostModal=function(){var C=l("./views/contact_host_modal");
if(!this.contactHostModal){this.contactHostModal=new C({url:this.options.ajaxLwlbContact,listing:this.options,el:$("#contact-modal")})
}this.contactHostModal.open()
};
this.initLazyLoadSections=function(){var C=$("#details");
var D=C.position().top+C.height()/2;
var F;
var E="scroll load";
F=x.debounce(function(){if($(window).scrollTop()>=D){Airbnb.mediator.emit("p3::lazyLoadSections");
$(window).off(E,F)
}},200,false);
$(window).on(E,F)
};
this.getP3ContactHostEventData=function(D,C){return{event_name:"booking_flow",event_data:{page:"p3",section:D,action:C,listing_id:A.options.hostingId,is_instant_bookable:AirbnbRooms.ibData.is_instant_bookable}}
};
this.setUpTimeSpentOnPage=function(C){var D=new k({airEventData:C,timeIntervals:[1,5,10,30,60,120,240,300,600,1800,3600]})
};
this.initialize(z)
}d.exports=g
},{"../../templates/page3/interaction.hbs":51,"../apps/manage_listing/views/preview_bar":2,"../lib/airbnb/expandable":4,"../logging/page_impression_logger":14,"../views/shared/social/social_share_widget":49,"./hca_contact_me":21,"./utils":27,"./views/book_it":28,"./views/contact_host_modal":31,"./views/details":32,"./views/host_profile":33,"./views/location":34,"./views/photos":36,"./views/reviews":37,"./views/similar_listings":38,backbone:"backbone",o2:"o2",underscore:"underscore"}],24:[function(c,d,a){var b=c("underscore");
function f(g){this.options=g||{};
this.addTrackingContext();
this.logEvent({action:"IMPRESSION"});
this.bindings()
}f.prototype.bindings=function(){$(".js-submit-book-it").on("click",this.onClickBookIt.bind(this))
};
f.prototype.onClickBookIt=function(g){$("#book_it_form").submit()
};
f.prototype.addTrackingContext=function(){var g=b.extend({listing_id:AirbnbRooms.options.hostingId},this.options.tracking_context);
Airbnb.Tracking.addContext(g)
};
f.prototype.logEvent=function(g){Airbnb.Tracking.logEvent({event_name:"P3",event_data:b.extend({page:"LISTING_PAGE",section:"CONTACT_ME_UPSELL",instant_book:this.isInstantBookable(),reservation_treatment:this.shouldShowReservationTreatment(),ib_treatment:this.shouldShowIBTreatment()},g)})
};
f.prototype.shouldShowReservationTreatment=function(){return this.options.upsell_type==="reservation_upsell"
};
f.prototype.shouldShowIBTreatment=function(){return this.options.upsell_type==="ib_upsell"
};
f.prototype.isInstantBookable=function(){return AirbnbRooms.isInstantBookable()
};
d.exports=f
},{underscore:"underscore"}],25:[function(g,i,d){var c="p3/question_saver/question";
var h=2000;
var f=g("underscore");
var b=window.amplify;
function a(){}a.prototype.onChangeQuestion=f.debounce(function(j){this.saveQuestion(j.currentTarget.value)
},100);
a.prototype.saveQuestion=function(j){if(j.length>h){j=j.slice(0,h)
}b.store(c,j)
};
a.prototype.clearSavedQuestion=function(){b.store(c,null)
};
a.prototype.getSavedQuestion=function(){return b.store(c)
};
i.exports=a
},{underscore:"underscore"}],26:[function(d,b,j){var c=d("o2");
function f(u){var s=0,p=0,w=0,r="",v,q;
for(s=0;
s<u.length;
++s){v=u[s][0];
q=u[s][1];
r+=i(p,w,v,q);
p=v;
w=q
}r+=i(p,w,u[0][0],u[0][1]);
return r
}function i(s,u,x,y){var p=Math.round(x*100000),r=Math.round(s*100000),z=Math.round(y*100000),q=Math.round(u*100000),w=z-q,v=p-r;
return l(v)+l(w)
}function l(p){var q=p<<1;
if(p<0){q=~q
}return n(q)
}function n(q){var p="";
while(q>=32){p+=String.fromCharCode((32|q&31)+63);
q>>=5
}p+=String.fromCharCode(q+63);
return p
}function h(p){return p*Math.PI/180
}function o(p){return p*180/Math.PI
}function a(p,q,y){var w=y/6371,x=h(q),s=h(p.lat),v=h(p.lng),r=Math.asin(Math.sin(s)*Math.cos(w)+Math.cos(s)*Math.sin(w)*Math.cos(x)),u=v+Math.atan2(Math.sin(x)*Math.sin(w)*Math.cos(s),Math.cos(w)-Math.sin(s)*Math.sin(r));
if(isNaN(r)||isNaN(u)){return null
}return{lat:o(r),lng:o(u)}
}function g(p){return p.lat+","+p.lng
}function k(u){var s=[],q=u.length,r,p;
for(p=0;
p<q;
p++){r=u[p];
s.push([r.lat,r.lng])
}return s
}function m(){return{createCircleAroundPoint:function(p,q){var r=[],s;
for(s=0;
s<=360;
s+=5){r.push(a(p,s,q))
}return r
},createEncodedPath:function(u,w){var v="|",q=[],s=k(u),p=f(s),r;
for(r in w){q.push(r+":"+w[r])
}q.push("enc:"+p);
return"&path="+q.join(v)
},getOffsetCenterParams:function(r,q){var p;
if(c.matchMedia.is("sm")){p=r
}else{p=a(r,270,q*3)
}return"&center="+g(p)
}}
}b.exports=m
},{o2:"o2"}],27:[function(b,c,a){var d={translate:function(g){var j=$("#description_text_wrapper"),i=j.attr("data-machine-translation"),l=$("#new_translate_button_wrapper"),f=l.find(".translate_button_label"),h=l.find(".gBrandingText"),m=j.attr("data-display-lang");
Airbnb.Tracking.logEvent({event_name:"google_translate_hosting_description_click",event_data:{user_lang:g,display_lang:m,hosting_id:AirbnbRooms.hostingId,new_translation_created:i==null,shown_review_translate_opt:$("#review-translate-button-wrapper")!=null}});
if(i){j.html(i);
f.html(I18n.t("show_original_description"));
h.addClass("translated")
}else{var k=l.find("#new_translate_button");
k.attr("disabled",true);
f.html(I18n.t("translating"));
$(".trans").each(function(n,p){var o=$(p);
$.getJSON("/rooms/ajax_google_translate_description",{target_lang:g,hosting_id:AirbnbRooms.hostingId,purpose:"rooms.js"},function(q){if(q&&q.translated_text){o.html(q.translated_text);
k.attr("disabled",false);
f.html(I18n.t("show_original_description"));
h.addClass("translated")
}})
})
}$("#disclaimer_text").html(I18n.t("translate_disclaimer"))
},translate_reviews:function(g,k){var j=$("#review-translate-button-wrapper"),f=j.find(".review_translate_button_label"),h=j.find(".gBrandingText");
var i=j.find("#review-translate-button");
i.attr("disabled",true);
f.html(I18n.t("translating"));
f.data("translate-review-text",f.innerHTML);
Airbnb.Tracking.logEvent({event_name:"google_translate_reviews_click",event_data:{user_lang:g,hosting_id:AirbnbRooms.hostingId}});
$.getJSON("/rooms/ajax_google_translate_reviews",{target_lang:g,hosting_id:AirbnbRooms.hostingId,purpose:"rooms.js",review_ids:k},function(l){if(l){$(".review-text").each(function(m,p){var n=$(p);
var o=n.data("review-id");
n.data("original-text",p.innerHTML);
if(l[o]&&l[o]["comments"]){n.html(l[o]["comments"]["text"])
}});
$(".review-translation-language").each(function(m,p){var n=$(p);
var o=n.data("review-id");
if(l[o]&&l[o]["comments"]&&l[o]["comments"]["language_code"]!=g){n.html(l[o]["comments"]["disclaimer"])
}});
$(".review-response-text").each(function(m,p){var n=$(p);
var o=n.data("review-id");
n.data("original-text",p.innerHTML);
if(l[o]&&l[o]["response"]){n.html(l[o]["response"]["text"])
}});
$(".review-response-language").each(function(m,p){var n=$(p);
var o=n.data("review-id");
if(l[o]&&l[o]["response"]&&l[o]["response"]["language_code"]!=g){n.html(l[o]["response"]["disclaimer"])
}});
i.attr("disabled",false);
f.html(I18n.t("show_original_reviews"));
h.addClass("translated")
}})
},redo_search:function(g){var i=["/s/"],h=$("#display-address"),f;
if(h.length){f=Airbnb.SearchUtils.location_to_url_parameter(h.data("location"));
if(f){i.push(f)
}}i.push("?",$.param({checkin:$("#checkin").val(),checkout:$("#checkout").val(),guests:$("#number_of_guests").val()}));
window.location=i.join("")
},check_inputs:function(g,h,f){g=typeof g!="undefined"?g:true;
h=typeof h!="undefined"?h:"checkin";
f=typeof f!="undefined"?f:"checkout";
if(this.calendar_is_not_set_date(h)){if(g){this.calendar_show_cal(h)
}return false
}if(this.calendar_is_not_set_date(f)){if(g){this.calendar_show_cal(f)
}return false
}return true
},viewOtherListings:function(g){var f=this.formatDate($("#checkin").val()),i=this.formatDate($("#checkout").val()),j=$("#view_other_listings_button").data("reasonCode"),h={event_name:"listing_view",event_data:{operation:"click",page:"p3",section:"view_other_listings",hosting_id:AirbnbRooms.hostingId,reason_code:j,checkin_date:f,checkout_date:i}};
if(this.check_inputs()){Airbnb.Tracking.queueEvent(h);
this.redo_search()
}else{Airbnb.Tracking.logEvent(h)
}g.preventDefault()
},formatDate:function(f){if(!f){return null
}return $.datepicker.formatDate($.datepicker.parseDate(f))
},calendar_is_not_set_date:function(g){var f,h;
if(typeof g==="string"){f=$("#"+g)
}else{f=$(g)
}h=f.val();
return $.trim(h)===""||f.hasClass("placeholder")&&h===f.attr("placeholder")
},calendar_show_cal:function(i,f,h){if(arguments.length<3){h="checkout"
}f=typeof f!="undefined"?f:"absolute";
var g=0;
if(h!="one_calendar_override"){if(this.calendar_is_not_set_date(i)){if(typeof i==="string"){$("#"+i).datepicker("show")
}else{$(i).datepicker("show")
}}else{if(this.calendar_is_not_set_date(h)){$("#"+h).datepicker("show")
}}}},trackResourceTiming:function(){try{var j=[];
var g=Airbnb.Utils.selectJavascriptResources();
var q=Airbnb.Utils.selectCSSResources();
var r=Airbnb.Utils.computeAggregatesForResources(/.*muscache.com\/.*pictures.*_original.jpg/);
var n=Airbnb.Utils.computeAggregatesPayload(r,"listing_image_stats","listing_image_failure");
var s=Airbnb.Utils.computeAggregatesForResources(/.*muscache.com\/.*pictures.*small.jpg/);
var i=Airbnb.Utils.computeAggregatesPayload(r,"small_image_stats","small_image_failure");
var p=Airbnb.Utils.computeAggregatesForResources(/.*muscache.com\/ic\/.*pictures.*_original.jpg/);
var f=Airbnb.Utils.computeAggregatesPayload(p,"ic_listing_image_stats","ic_listing_image_failure");
var o=Airbnb.Utils.computeAggregatesForResources(/.*muscache.com\/im\/.*pictures.*_original.jpg/);
var m=Airbnb.Utils.computeAggregatesPayload(o,"im_listing_image_stats","im_listing_image_failure");
var l=Airbnb.Utils.computeAggregatesForResources(/.*muscache.com\/ac\/.*pictures.*_original.jpg/);
var h=Airbnb.Utils.computeAggregatesPayload(l,"ac_listing_image_stats","ac_listing_image_failure");
j=j.concat(g,q,n,i,f,m,h);
if(j.length>0){Airbnb.Tracking.logEvent({event_name:"resource_timing",event_data:{page:"p3",payload:j}})
}}catch(k){}}};
c.exports=d
},{}],28:[function(f,b,k){var n=f("backbone"),g=f("o2-flash"),o=f("underscore"),c=f("o2"),m=f("./book_it/price_refresher"),d=f("../globals/refresh_subtotal"),l,a,p,i=[];
var h=f("./book_it_messaging_view");
l={initialize:function(q){c.matchMedia.on("lg",(function(r){if(r.matches&&!this.stickyCTAInitialized){this.setupStickyCTA();
this.stickyCTAInitialized=true
}}).bind(this));
this.setupMediaQueryListeners();
this._calendarFixed=false;
Airbnb.mediator.on("p3::refreshSubtotal",this.onSubtotalRefresh.bind(this));
Airbnb.mediator.on("p3::personalize",this.onPersonalization.bind(this));
Airbnb.mediator.on("p3::dateGuestChange",this.onDatesChanged.bind(this));
Airbnb.mediator.on("p3::viewCalendar",function(){if(c.matchMedia.is("sm")){$("#book-it-sm-trigger").click()
}else{document.getElementById("book_it_form").scrollIntoView();
$("#checkin").focus()
}});
this.initializeExperiments();
this.subtotalRefresher=d;
this.subtotalRefresher.init();
this.initParams();
this.initDatepicker(q.hostingId,q.minNights,q.calendarLastUpdated,q.hostFirstName);
this.isMonthly=q.isMonthly;
this.defaultNightlyPrice=q.nightly_price;
this.defaultStaggeredPrice=q.staggered_price;
this.setPriceFromData(q);
this.initResponsiveBookit();
this.P3BookItMessagingView=new h({el:$(".book-it-message-container")})
},initializeExperiments:function(){var q=this;
Airbnb.ERF.deliverExperiment("p2_p3_encourage_dates_messaging_v2",{control:function(){},simple_message:function(){q.showSimpleDatesMessage=true
},illustration_and_message:function(){q.showIllustrationDatesMessage=true
},treatment_unknown:function(){}})
},initResponsiveBookit:function(){var q=this.$el;
var u=this.$el.parent();
var s=new c.Modal("#book-it-sm-modal",{trigger:"#book-it-sm-trigger"});
var v=$(".mobile-bookit-btn-container").removeClass("hide");
var r=s.$element.find(".modal-content");
c.matchMedia.on("sm",function(w){if(w.matches){q.show().appendTo(r)
}else{q.appendTo(u);
s.close()
}})
},showEncourageDatesMessage:function(q){if(this.showSimpleDatesMessage){$(".simple-dates-message-container").toggleClass("hide",q!==undefined)
}else{if(this.showIllustrationDatesMessage){$(".fancy-dates-message-container").toggleClass("hide",q!==undefined)
}}},onDatesChanged:function(r){var q=$.query.load(window.location.href).keys.checkin;
this.showEncourageDatesMessage(q)
},onPersonalization:function(v){var r=$.query.load(window.location.href).keys,u=r.checkin,s=r.checkout;
this.showEncourageDatesMessage(u);
if(u&&s){this.refreshSubtotal()
}this.defaultNightlyPrice=v.nightly_price;
this.defaultStaggeredPrice=v.staggered_price;
this.setPriceFromData(v);
if(v.should_hide_action_buttons){$(".js-book-it-status").addClass("hide");
g.notice(t("not_licensed_to_provide_booking_service"),{no_fade_out:true})
}var q=v.is_instant_bookable&&(!v.checkin||!v.checkout);
this.setInstantBookable(q)
},events:{"change #number_of_guests":"refreshSubtotal"},setInstantBookable:function(q){$("#book_it_form").toggleClass("book-it--instant",q);
if(typeof this.inP3FriendlierIbCta==="undefined"){this.inP3FriendlierIbCta=Airbnb.ERF.deliverExperiment("p3_friendlier_ib_cta",{control:function(){return false
},friendlier_ib_cta:function(){return true
},treatment_unknown:function(){return false
},not_in_experiment:function(){return false
}})
}$("#book_it_form").toggleClass("book-it--instant-alt",this.inP3FriendlierIbCta)
},initParams:function(){var s=$.query.load(window.location.href).keys,v=s.checkin,u=s.checkout,x=s.guests,w;
if(v){var q=$("#checkin").val(v).blur();
this.withDatepicker(function(){q.datepicker("minDate","+0d")
})
}if(u){w=$.datepicker.parseDate(v);
w=fakeQuery.ui.date.relative(w,"+1d");
var r=$("#checkout").val(u).blur();
this.withDatepicker(function(){r.datepicker("minDate",w)
})
}this.updateFormAction(s);
if(x){$("#number_of_guests").val(x)
}},updateFormAction:function(q){var r=$("#book_it_form").attr("action");
if(q.s){r+="&s="+q.s
}$("#book_it_form").attr("action",r)
},withDatepicker:function(q){i.push(q)
},setupStickyCTA:function(){var K=this.$el,M=$("#summary"),N=$("#host-profile"),E=$(window),I=$("#book_it"),G=$("#pricing"),O=$("#checkin"),x=$("#checkout"),J=this.$(".other-actions"),B=$(".flag-trigger"),s=40,C,y,w,u,F=false,r=false,q=false,v,D,A,z;
window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
Airbnb.mediator.on("p3::updateStickyCalculations",function(){C=M.position().top;
y=C-s;
w=N.position().top+N.height();
u=I.height();
if(window.requestAnimationFrame&&!q){q=true;
window.requestAnimationFrame(z)
}});
v=(function(){D=E.scrollTop();
if(window.requestAnimationFrame&&!q){q=true;
window.requestAnimationFrame(z)
}else{z()
}}).bind(this);
function H(){J.addClass("hide-visually")
}z=(function(){var P=D-C,R=D+s+u,Q=false;
if(P>=s*-1){G.addClass("fixed");
if(R>w){if(!I.hasClass("bottom")){I.addClass("bottom").removeClass("fixed").css("top",w-C-u);
O.blur();
x.blur()
}}else{if(!I.hasClass("fixed")){I.addClass("fixed").removeClass("bottom").css("top",s);
if(!B.hasClass("hide")&&$(".p3-share-widget.rounded-icons").length===0){B.hide()
}}}Airbnb.mediator.emit("p3::updateStickyCalculations")
}else{if(I.hasClass("fixed")||I.hasClass("bottom")){j(I,G,B)
}}Q=I.hasClass("fixed");
if(Q&&!this._calendarFixed){K.calendarDateSpan("option","fixed",true);
K.calendarDateSpan("option","fixed",true);
this._calendarFixed=true
}else{if(!Q&&this._calendarFixed){K.calendarDateSpan("option","fixed",false);
K.calendarDateSpan("option","fixed",false);
this._calendarFixed=false
}}q=false
}).bind(this);
A=function(){if(r){return
}r=true;
if(E.width()<=1045){if(F){E.off("scroll.airbnb",v);
j(I,G,B)
}F=false
}else{if(!F){Airbnb.mediator.emit("p3::updateStickyCalculations");
E.on("scroll.airbnb",v);
v()
}F=true
}window.setTimeout(function(){r=false
},200)
};
$(document).ready(A);
E.on("load",Airbnb.mediator.emit.bind(Airbnb.mediator,"p3::updateStickyCalculations"));
E.resize(A)
},setupMediaQueryListeners:function(){function q(){window.setTimeout(function(){Airbnb.mediator.emit("p3::updateStickyCalculations")
},500)
}if(window.matchMedia){window.matchMedia("(min-height: 700px)").addListener(q);
window.matchMedia("(min-height: 850px)").addListener(q);
window.matchMedia("(min-height: 1000px)").addListener(q)
}},initDatepicker:function(s,v,r,u){var q=this.subtotalRefresher.refresh.bind(this.subtotalRefresher);
$("#book_it_form").calendarDateSpan({listingId:s,minNights:v,lastUpdated:r,hostFirstName:u,onCheckinClose:q,onCheckoutClose:q});
i.forEach(function(w){return w()
})
}};
a=o.extend({},m,l),p=n.View.extend(a);
function j(s,q,r){s.removeClass("fixed bottom").css("top",0);
q.removeClass("fixed");
if(!r.hasClass("hide")){r.show()
}Airbnb.mediator.emit("p3::updateStickyCalculations")
}b.exports=p
},{"../globals/refresh_subtotal":19,"./book_it/price_refresher":29,"./book_it_messaging_view":30,backbone:"backbone",o2:"o2","o2-flash":"o2-flash",underscore:"underscore"}],29:[function(c,b,f){Object.defineProperty(f,"__esModule",{value:true});
function i(k){return k&&k.__esModule?k:{"default":k}
}var h=c("o2");
var j=c("../../../../templates/page3/subtotal.hbs");
var d=i(j);
var a={refreshSubtotal:function(){this.subtotalRefresher.refresh()
},setPrice:function(k,l){$(".book-it-price-amount").html(k);
$(".js-subtotal-container").toggleClass("hide",!l);
$(".per-night").toggleClass("hide",!l);
$(".per-month").toggleClass("hide",l)
},setPriceFromData:function(m){var k=$("#price_amount"),l,n;
if(m.staggered||this.isMonthly){l=m.staggered_price;
n=false
}else{l=m.price_per_night||m.nightly_price;
n=true
}this.setPrice(l,n);
$("#per_month .icon").toggleClass("hide",n||!m.available)
},resetPrice:function(){var k=this.isMonthly?this.defaultStaggeredPrice:this.defaultNightlyPrice;
this.setPrice(k,!this.isMonthly)
},onSubtotalRefresh:function(n){var p=$("#tax-descriptions-tip"),k=!$("#checkin").val()||!$("#checkout").val(),m=n&&!!n.available,o=n&&n.tax_amount_native>0,l=$(".js-book-it-status");
$("#book_it_disabled").toggleClass("hide",k||m);
$(".js-book-it-enabled").toggleClass("hide",!(k||m));
if(k){this.resetPrice();
$(".js-subtotal-container").addClass("hide");
$("#price-info-tooltip").addClass("hide");
l.removeClass("loading");
return
}if(n.available){this.setPriceFromData(n);
if(n.staggered){$(".js-subtotal-container").addClass("hide");
$("#monthly-breakdown").html(JST["p4/partials/monthly_billing_breakdown"]({tax_descriptions:n.tax_descriptions,subtotal:n.accommodations,guest_pays_vat:n.guest_pays_vat,service_fee:n.service_fee,taxes:I18n.priceString(n.tax_amount_native),show_tax_data:o}))
}else{l.removeClass("panel-body");
g(n);
if(o){p.html(JST["p4/partials/tax_descriptions"]({tax_descriptions:n.tax_descriptions}))
}}this.setInstantBookable(n.can_instant_book);
AirbnbRooms.setInstantBookable(n.can_instant_book)
}else{this.resetPrice();
$("#book_it_disabled_message").html(n.reason_message)
}l.removeClass("loading");
$("#book_it").toggleClass("display-subtotal",!!n.available&&!n.staggered);
$("#summary .page-container > .row").toggleClass("row-space-6",!n.available&&!!n.reason_message);
Airbnb.mediator.emit("p3::updateStickyCalculations")
}};
f["default"]=a;
function g(m){var n=$("#tax-descriptions-tip"),k=$("#service-fee-tip"),l;
l=[{description:I18n.t("Price per night x nights",{basePricePerNight:m.price_per_night,smart_count:m.nights}),value:m.subtotal}];
if(m.extras_price){l.push({description:I18n.t("Cleaning fee"),value:m.extras_price})
}if(m.service_fee){if(m.guest_pays_vat){$(".fee-no-vat-tooltip").addClass("hide");
$(".fee-vat-tooltip").removeClass("hide")
}else{if(m.service_tooltip_experiment){$(".fee-no-vat-tooltip").addClass("hide");
$(".fee-no-vat-experiment-tooltip").removeClass("hide")
}}l.push({description:I18n.t("Service fee"),tooltip:{id:"service-fee-tooltip"},value:m.service_fee});
if(k&&k.data()){k.data()["o2-tooltip"]=undefined
}}if(m.tax_amount_native>0){l.push({description:I18n.t("occupancy_taxes"),tooltip:{id:"tax-descriptions-tooltip"},value:I18n.priceString(m.tax_amount_native)});
if(n&&n.data()){n.data()["o2-tooltip"]=undefined
}}$(".js-subtotal-container").addClass("panel-padding-fit").removeClass("hide").html((0,d["default"])({components:l,total:{description:I18n.t("Total"),value:m.total_price_with_fees}}));
h.Tooltip.bind()
}b.exports=f["default"]
},{"../../../../templates/page3/subtotal.hbs":59,o2:"o2"}],30:[function(d,f,b){var g=d("backbone");
var c=d("underscore");
var a=g.View.extend({initialize:function(h){this.hasDates=false;
this.$window=$(window);
this._animFrameRequested=false;
this.calculateAnimationScrollPosition();
this.sentNotification=false;
Airbnb.mediator.on("p3::refreshSubtotal",this.onPriceChange.bind(this));
Airbnb.mediator.on("p3::dateGuestChange",this.onDatesChanged.bind(this))
},calculateAnimationScrollPosition:function(){if(this.$el.offset().top>0){this.animationScrollPosition=this.$el.offset().top+window.innerHeight/3
}},toggleMessageView:function(){if(this.animationScrollPosition&&this.animationScrollPosition<this.scrollBottom){this.$el.addClass("expanded");
if(!this.sentNotification){Airbnb.Tracking.logEvent({event_name:"p3_uc_message",event_data:{operation:"impression",message_type:this.messageData.message_type}});
this.sentNotification=true
}}else{if(this.$el.offset().top>this.scrollBottom){this.$el.removeClass("expanded")
}}this._animFrameRequested=false
},handleScroll:function(){this.calculateAnimationScrollPosition();
this.scrollBottom=this.$window.scrollTop()+this.$window.height();
if(!this._animFrameRequested){this._animFrameRequested=true;
if(window.requestAnimationFrame){window.requestAnimationFrame(this.toggleMessageView.bind(this))
}else{this.toggleMessageView.call(this)
}}},showMessaging:function(){this.calculateAnimationScrollPosition();
this.$el.removeClass("hide");
var i=$(".listing-desirability");
i.addClass("hide");
if(this.messageData.message_type==="dated_views"){$('[data-behavior="dated_views_body"]').text(this.messageData.dated_views_body_text)
}var h=$('[data-behavior="'+this.messageData.message_type+'"]');
h.removeClass("hide");
this.handleScroll()
},deliverExperiment:function(){if(this.hasDates&&this.messageData){if(this.shouldShowMessaging){this.showMessaging()
}else{if(this.shouldShowMessaging===undefined){this.shouldShowMessaging=true;
this.$window.on("scroll",c.debounce(this.handleScroll).bind(this));
this.$window.on("resize",this.calculateAnimationScrollPosition.bind(this));
this.showMessaging()
}}}else{this.$el.addClass("hide")
}},onDatesChanged:function(h){if(h){this.hasDates=!!h.checkin&&!!h.checkout;
this.deliverExperiment()
}},onPriceChange:function(h){if(h){if(h.p3_message_data){this.messageData=h.p3_message_data
}this.deliverExperiment()
}}});
f.exports=a
},{backbone:"backbone",underscore:"underscore"}],31:[function(l,b,D){var w=l("o2"),c=w.Tabs,a=w.Modal,C=l("../utils"),q=l("../shared/p3_upsell"),z=l("../shared/question_saver"),r=l("react");
l("../../verification_flow.js");
function i(E){this.url=E.url;
this.listing=E.listing;
this.$el=E.el;
this.$content=this.$el.find(".modal-content");
this.modal=this.initializeModal();
this.questionSaver=new z();
this.bindings()
}i.prototype.bindings=function(){this.$el.on("submit","form",v);
this.$el.on("submit","form",k.bind(this));
this.$el.on("keyup","#question",this.onChangeQuestion.bind(this));
this.$el.on("change","select",x);
this.$el.on("submit","form",x)
};
i.prototype.initializeModal=function(){var E="#contact-modal",F=$(E).data("o2-modal");
if(F===undefined){F=new a(E)
}F.on("close",d);
return F
};
i.prototype.open=function(){this.modal.open();
this.loadContent().then(this.insertContent.bind(this))
};
i.prototype.close=function(){this.modal.close()
};
i.prototype.loadContent=function(){this.setLoading(true);
return $.get(this.url).always(this.setLoading.bind(this,false))
};
i.prototype.insertContent=function(E){this.$content.html(E);
this.$content.find("[placeholder]").placeholder();
this.initSavedQuestion();
this.initDateFields();
this.initCaptcha();
if($("#contact-host-panel").hasClass("new")){$("#contact-modal").addClass("new")
}};
i.prototype.initCaptcha=function(){var F=r.createFactory(l("../../NoCaptcha.jsx"));
var E=this.$content.find("#captcha");
if(E.length){r.render(F(),E[0])
}w.Tooltip.bind(this.$content)
};
i.prototype.initDateFields=function(){var E={minDate:0,maxDate:"+3Y",nextText:"",prevText:"",numberOfMonths:1,showButtonPanel:true,closeText:I18n.t("clear_dates","Clear Dates"),fixed:true};
this.$content.calendarDateSpan({listingId:this.listing.hostingId,minNights:this.listing.minNights,lastUpdated:this.listing.calendarLastUpdated,onCheckinClose:x,onCheckoutClose:x,defaultsCheckin:E,defaultsCheckout:E});
y()
};
i.prototype.setLoading=function(E){this.$content.toggleClass("loading",E)
};
i.prototype.initSavedQuestion=function(){var E=this.questionSaver.getSavedQuestion();
if(E){$("#question").val(E)
}};
i.prototype.onChangeQuestion=function(E){this.questionSaver.onChangeQuestion(E)
};
function f(E){alert(E)
}function v(){Airbnb.mediator.emit("p3::contactHostLogging",{section:"contact_host_modal",step:"clicked_send",action:"click"})
}function k(K){if(K){K.preventDefault()
}var N,F,G;
var E=$.datepicker._defaults.dateFormat;
var M=$.trim($("#message_checkin").val());
var I=$.trim($("#message_checkout").val());
var J=new Date();
J.setDate(J.getDate()-1);
if(M===E||M===""||I===E||I===""){f(t("complete_dates"));
return
}if($("#question").is(":disabled")){f(t("cannot_message_unavailable_dates"));
return
}N=$.datepicker.parseDate(M);
if(!h(N)||J>N){f(t("please_enter_valid_start_date"));
return
}F=$.datepicker.parseDate(I);
if(F.getTime()-N.getTime()>32000000000){f(t("please_enter_valid_date_range"));
return
}G=$.trim($("#question").val());
if(G===""){f(t("enter_message"));
return
}if(Airbnb.Utils.isUserLoggedIn){if(!AirbnbRooms.needsVerifications){A(this)
}else{var H=this;
B("#contact_requirements");
$(".verification-flow-container").verificationFlow({onComplete:function(){A(H)
},metaData:{page:"page3_contact_me"}})
}}else{this.modal.off("close",d);
this.modal.close();
Airbnb.SignupLoginModal.launchLogin();
Airbnb.mediator.emit("p3::contactHostLogging",{section:"signup_login_modal",step:"signup_login_launched",action:"impression"});
Airbnb.SignInUp.addLoginCallback((function(){this.modal.open();
Airbnb.mediator.emit("p3::contactHostLogging",{section:"signup_login_modal",step:"logged_in",action:"submit"});
k.call(this)
}).bind(this))
}}function p(){$("#question").attr("disabled","disabled");
$("#message_button").attr("disabled","disabled");
$("#question_holder").css("opacity","0.5")
}function s(E){if(E){o(E);
$("#messaging-errors").addClass("other").removeClass("not-available")
}else{$("#messaging-errors").addClass("not-available").removeClass("other")
}}function n(){var E=$("#question").removeAttr("disabled");
$("#message_button").removeAttr("disabled");
if(E.val().length===0){E.val(" ");
E.val("")
}$("#question_holder").css("opacity","1.0");
$("#messaging-errors").removeClass("not-available").removeClass("other")
}function x(){var E=$.datepicker._defaults.dateFormat,G=$("#message_checkin").val(),F=$("#message_checkout").val(),I=$("#message_number_of_guests").val(),H;
Flash.clear();
j();
if(G===E||F===E){return false
}H={checkin:G,checkout:F,number_of_guests:I};
Airbnb.mediator.emit("p3::updateSubtotal");
$.getJSON(check_dates_url,H,function(J){p();
if(J.available){n()
}else{s(J.error_message)
}})
}function h(E){if(Object.prototype.toString.call(E)!=="[object Date]"){return false
}return !isNaN(E.getTime())
}function j(){$("#checkin").val($("#message_checkin").val());
$("#checkout").val($("#message_checkout").val());
$("#number_of_guests").val($("#message_number_of_guests").val())
}function y(){if(C.check_inputs(false)){$("#message_checkin").val($("#checkin").val());
$("#message_checkout").val($("#checkout").val());
$("#message_number_of_guests").val($("#number_of_guests").val());
x()
}}function o(F,E){$("#dates_other_error").html("<strong>"+F+"</strong> "+(E||""))
}function A(H){var J=$("#message_form");
var I=J.attr("action");
var G=$("#question").val(),F=$("#message_checkin").val(),E=$("#message_checkout").val();
H.setLoading(true);
$.post(I,J.serialize(),function(M){var K=new q(M.upsell_presenter);
if(M.is_logged_in){Airbnb.SignInUp.broadcastLogin({refresh:false})
}if(M.message===""){Airbnb.doConversions();
H.questionSaver.clearSavedQuestion();
m();
if(M.show_verified_id_upsell){B("#verified-id-container")
}else{if(M.show_profile_pic_upsell){H.close();
u(M)
}else{if(K.shouldShowIBTreatment()){B("#p3-upsell-treatment")
}else{if(K.shouldShowReservationTreatment()){B("#p3-reservation-upsell-treatment")
}else{if(M.has_contacted_host){B("#invite-friends")
}else{B("#multi-messaging")
}}}}}Airbnb.mediator.emit("p3::contactHostLogging",{section:"contact_host",step:"delivered_message",action:"sent"})
}else{g(M.frictions,M.message)
}},"json").always(function(){H.setLoading(false)
});
return false
}function g(E,F){if($.inArray("captcha",E)==0){$("#messaging-errors").addClass("friction-error-captcha")
}else{$("#messaging-errors").addClass("friction-error-generic");
$("#friction_error_generic").html(F)
}}function m(){$("#messaging-errors").removeClass("friction-error-generic friction-error-captcha");
$("#friction_error_generic").empty()
}function B(E){$(".contact-host-panel").addClass("hide").filter(E).removeClass("hide")
}function u(E){Airbnb.mediator.emit("guestOnboarding::profilePicUpsell",function(){var G=window.enderRequire("profile_pic_upsell/upsell_modal");
var F=new G({tracking_event_name:"contact_host_profile_pic_upsell_modal",flow:"contact_host_profile_pic_upsell",isNewbie:E.is_newbie,showWeiboButton:E.show_weibo_button,showFacebookButton:E.show_facebook_button,showGoogleButton:E.show_google_button,didUploadTextBelow:[I18n.t("profile_pic_upsell.recommend_booking_before_first_stay"),I18n.t("profile_pic_upsell.easier_to_book")].join(" "),didNotUploadTextBelow:[I18n.t("profile_pic_upsell.recommend_booking_before_first_stay"),I18n.t("profile_pic_upsell.easier_to_book")].join(" ")});
F.render()
})
}function d(){Airbnb.mediator.emit("p3::contactHostLogging",{section:"contact_host_modal",action:"close"})
}b.exports=i
},{"../../NoCaptcha.jsx":1,"../../verification_flow.js":46,"../shared/p3_upsell":24,"../shared/question_saver":25,"../utils":27,o2:"o2",react:"react"}],32:[function(b,d,a){var g=["extras_price","localized_people_pricing_description","monthly_price","security_deposit","weekly_price"];
var f=b("backbone"),c;
c=f.View.extend({initialize:function(){Airbnb.mediator.on("p3::personalize",this.onPersonalization.bind(this))
},onPersonalization:function(h){if(h.should_hide_action_buttons){$("#contact-host-link").addClass("hide")
}$.each(g,(function(k,l){var j;
if(h[l]){j=this.$el.find("#"+l+"_string");
if(j.length){j.html(h[l])
}}}).bind(this))
}});
d.exports=c
},{backbone:"backbone"}],33:[function(c,a,d){Object.defineProperty(d,"__esModule",{value:true});
function j(k){return k&&k.__esModule?k:{"default":k}
}var b=c("backbone");
var h=j(b);
var g=c("../../../templates/page3/social_connection.hbs");
var i=j(g);
var f=h["default"].View.extend({initialize:function(){var k=this;
Airbnb.mediator.on("p3::personalize",function(l){k.initSocialConnections(l.social_connections,l.show_fb_cta);
if(l.should_hide_action_buttons){$("#contact_wrapper").addClass("hide")
}})
},initSocialConnections:function(p,n){var k=2,u=p.relationships,l=u&&u.length,o=p.connected,s=this.$(".social-connections-section"),q,r,v,m;
if(!o&&n){s.find(".facebook-button-wrapper").addBack().removeClass("hide");
s.find(".fb-button").click(function(w){var x=$(this);
ga("send","event","Authenticate","FacebookClick","Page3SocialConnections");
FB.login(function(y){if(y.authResponse){ga("send","event","Authenticate","FacebookLogin","Page3SocialConnections");
window.location.href=x.data("redirect_uri")
}else{ga("send","event","Authenticate","FacebookDeny","Page3SocialConnections")
}},{scope:Airbnb.FACEBOOK_PERMS});
w.preventDefault()
})
}if(l){r=s.find(".social-connections-list");
for(q=0;
q<Math.min(k,l);
q++){r.append((0,i["default"])(u[q]))
}if(l>k){v=s.find(".more-connections-link").removeClass("hide");
m=s.find("#more-count").html(l-k);
v.one("click",function(w){for(q=k;
q<l;
q++){r.append((0,i["default"])(u[q]))
}v.remove();
w.preventDefault()
})
}s.find(".social-connections").addBack().removeClass("hide")
}}});
d["default"]=f;
a.exports=d["default"]
},{"../../../templates/page3/social_connection.hbs":58,backbone:"backbone"}],34:[function(d,a,g){function o(p){return p&&p.__esModule?p:{"default":p}
}var h=d("../../../templates/page3/location_card.hbs");
var j=o(h);
var b=d("o2"),m=d("underscore"),l=d("backbone"),c=d("../../views/shared/sliding_carousel"),f=d("../../neighborhoods/neighborhoods_popover"),i=d("../shared/static_map_helpers"),k=d("./location/map"),n;
n=l.View.extend({initialize:function(){m.bindAll(this,"handleItemChange","initNeighborhood");
Airbnb.mediator.on("p3::lazyLoadSections",(function(){var q=this;
var p=Airbnb.Utils;
this.$map=$("#map");
this.$neighborhoodElem=this.$("[data-neighborhood-id]");
this.containsNeighborhood=this.$neighborhoodElem.length;
this.mapProvider=$("#map").data("provider");
this.isOpenStreetMap=this.mapProvider==="Mapbox";
this.isAlternateMapProvider=this.isOpenStreetMap;
this.isTabletOrPhone=b.matchMedia.is("sm")||b.matchMedia.is("md");
this.mapDeferred=$.Deferred();
this.neighborhoodDeferred=$.Deferred();
if(this.isTabletOrPhone&&!this.isAlternateMapProvider){this.initStaticMap()
}else{this.initInteractiveMap()
}this.initNeighborhood();
$.when(this.mapDeferred,this.neighborhoodDeferred).then(function(){q.addNeighborhoodPolygonToMap();
if(q.isTabletOrPhone&&!q.isAlternateMapProvider){$(window).on("resize",m.debounce(q.addNeighborhoodPolygonToMap.bind(q),500))
}},function(){q.mapDeferred.done(function(){if(q.isTabletOrPhone&&!q.isAlternateMapProvider){q.addStaticGoogleMap();
$(window).on("resize",m.debounce(q.addStaticGoogleMap.bind(q),500))
}})
})
}).bind(this))
},handleItemChange:function(p){var q=this.$(".dot");
q.removeClass("dot-ebisu");
q.eq(p.index).addClass("dot-ebisu")
},initInteractiveMap:function(){var p;
if(this.isOpenStreetMap){Airbnb.Utils.withOpenStreetMap((function(){k.initOpenStreetMap();
this.mapDeferred.resolve()
}).bind(this));
p=Airbnb.Utils.loadOpenStreetMap.bind(Airbnb.Utils,"p3")
}else{Airbnb.Utils.withGooglePlaces((function(){k.initGoogleMap();
this.mapDeferred.resolve()
}).bind(this));
p=Airbnb.Utils.loadGooglePlaces.bind(Airbnb.Utils)
}if(document.readyState==="complete"){p()
}else{$(window).on("load",p)
}},generateStaticMapUrl:function(){var p=this.$map.height();
var r=this.$map.width();
var q=this.$map.data("staticMapUrl");
q=q.replace("size=","size="+r+"x"+p);
q+=this.getHostingEncodedPolyline();
return q
},initStaticMap:function(){this.staticMapHelpers=new i();
this.staticMapUrl=this.generateStaticMapUrl();
this.mapDeferred.resolve()
},initNeighborhood:function(){if(this.containsNeighborhood){this.model=new f({id:this.$neighborhoodElem.data("neighborhood-id")});
this.model.fetch({success:(function(p){this.$neighborhoodElem.attr("href",p.get("url"));
this.neighborhoodDeferred.resolve();
this.render()
}).bind(this),error:(function(){this.neighborhoodDeferred.reject()
}).bind(this)})
}else{this.neighborhoodDeferred.reject()
}},render:function(){var r=" &middot; ";
var q=this.model;
var p=[];
if(q.hasThumbnails()){$.each(this.model.get("tags"),function(u,v){p.push(v.name)
});
$("#neighborhood-seo-link").remove();
$("#hover-card").prepend((0,j["default"])({tags:p.join(r),name:q.get("name"),topline:q.get("topline"),url:q.get("url"),thumbnails:q.get("thumbnails"),launched:q.get("launched")}));
var s=new c({el:this.$(".neighborhood-sliding-carousel"),shouldLoop:true});
this.listenTo(s,"change:item",this.handleItemChange)
}else{if(!q.get("launched")){$("#neighborhood-seo-link").addClass("not-launched")
}}return this
},addNeighborhoodPolygonToMap:function(){if(this.isOpenStreetMap){Airbnb.Utils.withOpenStreetMap((function(){this.addNeighborhoodPolygonToOpenStreetMap()
}).bind(this))
}else{if(!this.isTabletOrPhone){Airbnb.Utils.withGooglePlaces((function(){this.renderInteractiveNeighborhoodGoogle()
}).bind(this))
}else{this.staticMapUrl+=this.getNeighborhoodEncodedPolyline();
this.addStaticGoogleMap({includeNeighborhoodPolygon:true})
}}},getNeighborhoodPolygonToGoogle:function(){var q=this.model.get("bounds"),r=[],p={};
if(q&&q.coordinates&&q.coordinates[0]&&q.coordinates[0][0]){m.each(q.coordinates[0][0],function(u,s){r.push({lat:u[1],lng:u[0]})
});
p={paths:r,strokeColor:"#FFAA91",strokeWeight:2,fillColor:"#FFAA91",fillOpacity:0.2}
}return p
},renderInteractiveNeighborhoodGoogle:function(){var s=[],r,q,p;
q=this.getNeighborhoodPolygonToGoogle();
m.each(q.coords,function(u){s.push(new google.maps.LatLng(u.lat,u.lng))
});
r=new google.maps.Polygon(q);
p=this.$map.airbnbGoogleMap().map;
r.setMap(p)
},getNeighborhoodEncodedPolyline:function(){var q=this.getNeighborhoodPolygonToGoogle();
var w={color:q.strokeColor.replace("#","0x"),fillcolor:q.fillColor.replace("#","0x")+"33",weight:q.strokeWeight},v=this.staticMapHelpers.createEncodedPath(q.paths,w),u=encodeURIComponent(this.staticMapUrl).length+encodeURIComponent(v).length,r=2048,s=30,p=54;
if(u+p+s<r){return v
}return""
},getHostingEncodedPolyline:function(){var v={lat:this.$map.data("lat"),lng:this.$map.data("lng")},q=window.AirbnbConstants.MapCircleSizes[14]/1000,p=this.staticMapHelpers.getOffsetCenterParams(v,q),s=[],u=this.staticMapHelpers.createCircleAroundPoint(v,q),w={color:window.AirbnbConstants.GoogleMapCircleStyles.strokeColor.replace("#","0x"),fillcolor:"0x00D1C133",weight:window.AirbnbConstants.GoogleMapCircleStyles.strokeWeight},r=this.staticMapHelpers.createEncodedPath(u,w);
return p+r
},addStaticGoogleMap:function(p){var r=this;
if(this.isRequestingStaticMap){return
}this.isRequestingStaticMap=true;
var q=this.generateStaticMapUrl();
if(p&&p.includeNeighborhoodPolygon){q+=this.getNeighborhoodEncodedPolyline()
}$.ajax({url:"/rooms/ajax_signed_image_url",data:{unsigned_url:q},dataType:"json",success:function(s){r.$map.remove("img").prepend('<img src="'+s.signed_url+"\" alt='"+I18n.t("location_map")+"' />")
}}).always(function(){r.isRequestingStaticMap=false
})
},addNeighborhoodPolygonToOpenStreetMap:function(){var r=[],q=this.model.get("bounds"),p;
if(q&&q.coordinates&&q.coordinates[0]&&q.coordinates[0][0]){m.each(q.coordinates[0][0],function(u,s){r.push(L.latLng(u[1],u[0]))
});
p=L.polygon(r,{color:"#FFAA91",weight:2,fillColor:"#FFAA91",opacity:0.2});
p.addTo($("#map").airbnbOpenStreetMap().map)
}}});
a.exports=n
},{"../../../templates/page3/location_card.hbs":52,"../../neighborhoods/neighborhoods_popover":15,"../../views/shared/sliding_carousel":48,"../shared/static_map_helpers":26,"./location/map":35,backbone:"backbone",o2:"o2",underscore:"underscore"}],35:[function(d,f,c){function h(i){return i&&i.__esModule?i:{"default":i}
}var b=d("../../../../templates/page3/location_infobox.hbs");
var a=h(b);
var g={initGoogleMap:function(){var z=14,v=11,p={cafe:"cup",wifi:"wifi",other:"flag",kid:"group-alt",store:"shopping-bag",bar:"wine-glasses",restaurant:"meal",groceries:"meal",art:"balloons"};
var x=[],m=[],k=$("#map"),q=new google.maps.LatLng(k.data("lat"),k.data("lng")),B,w,s;
k.airbnbGoogleMap({position:q,isFuzzy:true,accuracy:8,showSmallControls:true});
var j=k.airbnbGoogleMap(),u=j.map,i=350,n=new window.InfoBox({closeBoxURL:"",pane:"floatPane",alignBottom:true,infoBoxClearance:new google.maps.Size(15,50),enableEventPropagation:true,pixelOffset:new google.maps.Size(-1*(i/2-40),-50),zIndex:2,boxStyle:{width:i+"px"}});
google.maps.event.addListener(u,"click",function(){n.close()
});
k.on("click",function(C){if($(C.target).hasClass("close-box")){n.close()
}});
var A=false,r=$("#guidebook-recommendations li.user-image a"),o=r.find("img"),y={profileUrl:r.attr("href"),name:o.attr("alt"),profileImgUrl:o.attr("src")};
var l=new google.maps.LatLngBounds();
$("#guidebook-recommendations li.recommendation").each(function(E,H){A=true;
var D=$(H),G=$("span.location",D).html(),C=new google.maps.LatLng(D.data("lat"),D.data("lng")),F=new google.maps.Marker({clickable:true,position:C,map:u,icon:new google.maps.MarkerImage(D.data("img"),null,null,new google.maps.Point(11,37))});
google.maps.event.addListener(F,"click",function(){var I=$("div.description",D);
I.children().css("margin-bottom","0");
n.setContent((0,a["default"])({title:$("h2 a",D).html(),titleLink:$("h2 a",D).attr("href"),hasLocation:G!=="",location:G,type:D.data("type"),desc:I.html().trim(),icon:p[D.data("type")],user:y,hideCloseBox:false,hostRecommendation:I18n.t("host_recommendation")}));
n.open(u,F)
});
x.push(F);
l.extend(C)
});
if(A){s=j.marker.getBounds();
l.extend(s.getNorthEast());
l.extend(s.getSouthWest());
u.fitBounds(l);
google.maps.event.addListenerOnce(u,"bounds_changed",function(){if(this.getZoom()>14){this.setZoom(14)
}})
}if(q.lng()<=l.getCenter().lng()){u.panBy(-200,0)
}google.maps.event.addListenerOnce(u,"idle",this.logGoogleMapBoundsChanged.bind(this))
},logGoogleMapBoundsChanged:function(){var j=$("#map").airbnbGoogleMap().map;
var i=this;
google.maps.event.addListener(j,"dragend",function(){i.logGoogleMapEventData(this,"drag")
});
google.maps.event.addListener(j,"zoom_changed",function(){i.logGoogleMapEventData(this,"zoom")
})
},logGoogleMapEventData:function(n,l){var m=n.getBounds();
var k=m.getNorthEast();
var j=m.getSouthWest();
var i=m.getCenter();
Airbnb.Tracking.logEvent({event_name:"listing_view",event_data:{operation:"move",page:"p3",section:"location",ne_lat:k.lat(),ne_lng:k.lng(),sw_lat:j.lat(),sw_lng:j.lng(),center_lat:i.lat(),center_lng:i.lng(),zoom:n.getZoom(),map_provider:"google",map_event:l}})
},initBingMap:function(){var z=14,l=11,m={cafe:"cup",wifi:"wifi",other:"flag",kid:"group-alt",store:"shopping-bag",bar:"wine-glasses",restaurant:"meal",groceries:"meal",art:"balloons"};
var i,w,x=[],p=[],s=$("#map"),q=new Microsoft.Maps.Location(s.data("lat"),s.data("lng"));
s.airbnbBingMap({position:q,isFuzzy:true,accuracy:8,streetViewControl:false,showSmallControls:true});
var r=s.airbnbBingMap().map,k=350,u=new Microsoft.Maps.Infobox(q,{offset:new Microsoft.Maps.Point(-1*k/2-30,30),typeName:Microsoft.Maps.InfoboxType.mini,showPointer:false,showCloseButton:true,zIndex:2,width:k+"px",visible:false});
r.entities.push(u);
Microsoft.Maps.Events.addHandler(r,"click",function(){u.setOptions({visible:false})
});
Microsoft.Maps.Events.addHandler(u,"click",function(A){if($(A.originalEvent.target).hasClass("close-box")){u.setOptions({visible:false})
}});
var o=false,n=$("#guidebook-recommendations li.user-image a"),j=n.find("img"),y={profileUrl:n.attr("href"),name:j.attr("alt"),profileImgUrl:j.attr("src")},v=[q];
$("#guidebook-recommendations li.recommendation").each(function(C,E){o=true;
var B=$(E),A=new Microsoft.Maps.Location(B.data("lat"),B.data("lng")),D=new Microsoft.Maps.Pushpin(A,{icon:B.data("img")});
Microsoft.Maps.Events.addHandler(D,"click",function(){var F=$("div.description",B);
F.children().css("margin-bottom","0");
u.setLocation(A);
u.setHtmlContent((0,a["default"])({title:$("h2 a",B).html(),titleLink:$("h2 a",B).attr("href"),location:$("span.location",B).html(),type:B.data("type"),desc:F.html().trim(),icon:m[B.data("type")],user:y,hideCloseBox:false,mapProvider:"bing",hostRecommendation:I18n.t("host_recommendation")}));
u.setOptions({pushpin:D,visible:true});
D.setOptions({infobox:u})
});
Microsoft.Maps.Events.addHandler(D,"mouseover",function(F){r.getRootElement().style.cursor="pointer"
});
Microsoft.Maps.Events.addHandler(D,"mouseout",function(F){r.getRootElement().style.cursor="default"
});
r.entities.push(D);
v.push(A)
});
if(o){r.setView({bounds:Microsoft.Maps.LocationRect.fromLocations(v)});
Microsoft.Maps.Events.addHandler(r,"viewchangeend",function(A){if(r.getZoom()>16){r.setView({zoom:16})
}})
}},initOpenStreetMap:function(){var C=new $.Deferred();
var z=14,u=11,p={cafe:"cup",wifi:"wifi",other:"flag",kid:"group-alt",store:"shopping-bag",bar:"wine-glasses",restaurant:"meal",groceries:"meal",art:"balloons"};
var B,w,x=[],l=[],k=$("#map"),q=L.latLng(k.data("lat"),k.data("lng"));
k.airbnbOpenStreetMap({position:q,isFuzzy:true,accuracy:8,showSmallControls:true});
var v=k.airbnbOpenStreetMap(),j=v.map,i=350,n=L.popup({offset:L.point(15,8),closeButton:false,maxWidth:i});
k.on("click",function(D){if($(D.target).hasClass("close-box")){j.closePopup(n)
}});
var A=false,o=L.latLngBounds([]),r=$("#guidebook-recommendations li.user-image a"),m=r.find("img"),s,y={profileUrl:r.attr("href"),name:m.attr("alt"),profileImgUrl:m.attr("src")};
$("#guidebook-recommendations li.recommendation").each(function(F,I){A=true;
var E=$(I),H=$("span.location",E).html(),D=L.latLng(E.data("lat"),E.data("lng")),G=L.marker(D,{clickable:true,icon:L.icon({iconUrl:E.data("img")})});
G.addTo(j);
G.on("click",function(){var J=$("div.description",E);
J.children().css("margin-bottom","0");
n.setLatLng(G.getLatLng()).setContent((0,a["default"])({title:$("h2 a",E).html(),titleLink:$("h2 a",E).attr("href"),hasLocation:H!=="",location:H,type:E.data("type"),desc:J.html().trim(),icon:p[E.data("type")],user:y,hideCloseBox:false,hostRecommendation:I18n.t("host_recommendation")})).openOn(j)
});
x.push(G);
o.extend(D)
});
if(A){s=v.marker.getBounds();
o.extend(s.getNorthEast());
o.extend(s.getSouthWest());
j.fitBounds(o);
j.addOneTimeEventListener("load",(function(){if(j.getZoom()>14){j.setZoom(14)
}}).bind(this))
}if(o.isValid()&&q.lng<=o.getCenter().lng){j.panBy(L.point(-200,0))
}j.addOneTimeEventListener("focus",this.logOpenStreetMapBoundsChanged.bind(this))
},logOpenStreetMapBoundsChanged:function(){var j=$("#map").airbnbOpenStreetMap().map;
var i=this;
j.on("dragend",function(){i.logOpenStreetMapEventData(this,"drag")
});
j.on("zoomend",function(){i.logOpenStreetMapEventData(this,"zoom")
})
},logOpenStreetMapEventData:function(n,l){var m=n.getBounds();
var k=m.getNorthEast();
var j=m.getSouthWest();
var i=m.getCenter();
Airbnb.Tracking.logEvent({event_name:"listing_view",event_data:{operation:"move",page:"p3",section:"location",ne_lat:k.lat,ne_lng:k.lng,sw_lat:j.lat,sw_lng:j.lng,center_lat:i.lat,center_lng:i.lng,zoom:n.getZoom(),map_provider:"mapbox",map_event:l}})
}};
f.exports=g
},{"../../../../templates/page3/location_infobox.hbs":53}],36:[function(c,a,h){Object.defineProperty(h,"__esModule",{value:true});
function m(n){return n&&n.__esModule?n:{"default":n}
}var l=c("o2");
var b=c("backbone");
var i=m(b);
var j=c("../globals/slideshow");
var f=m(j);
var d=c("../../../templates/page3/slideshow_thumbnails.hbs");
var k=m(d);
var g=i["default"].View.extend({resizeCooldown:200,cooldownActive:false,slideshowLoaded:false,initialize:function(p){this.options=p||{};
if(this.options.photoData.length>1){this.initModal();
$(window).on("load",this.initSlideshow.bind(this))
}if(!window.matchMedia&&this.$el.hasClass("with-photos")){$(window).on("resize",this.handleWindowResize.bind(this));
this.handleWindowResize()
}var o=$('[data-hook="cover-img-container"]');
var n=o.find('[data-hook="img-sm"]');
var r=o.find('[data-hook="img-lg"]').css("background-image");
try{r=r.replace(/^url\(["']?/,"").replace(/["']?\)$/,"")
}catch(q){r=null
}if(r){$('<img style="display:none;">').on("load",function(){n.css("background-image",'url("'+r+'")')
}).attr("src",r)
}},initModal:function(){this.photoModal=new l.Modal("#photo-modal");
$(".photo-trigger").on("click",(function(o){var n=$(o.currentTarget);
var p=n.data("index");
var q=n.hasClass("photo-grid-photo")?"PHOTO_GRID":"INLINE_IMAGE";
o.preventDefault();
this.slideshow.toIndex(p);
this.photoModal.open();
this.logEvent({action:"CLICK",target:q,index:p})
}).bind(this));
this.photoModal.on("close",(function(){this.$(".slideshow-caption-container").removeClass("collapsed");
this.logEvent({action:"CLICK",target:"SLIDESHOW_CLOSE"})
}).bind(this));
this.$(".slideshow-media-caption").hover(this.onThumbnailsMouseover.bind(this),this.collapseThumbnailViewport.bind(this,true))
},initSlideshow:function(){var r;
var n;
var o;
var q={photoData:this.options.photoData};
var p;
var s=this;
if(this.slideshowLoaded){return
}this.slideshowLoaded=true;
r=this.$(".slideshow-thumbnails");
n=$('<ul class="slideshow-thumbnails thumbnails-slide-panel">');
n.html((0,k["default"])(q));
o=n.find("img");
p=o.length;
o.on("load",function(){if(--p===0){s.slideshow=new f["default"]($("#photo-modal"),{thumbnailWidth:r.find("li:nth-child(2)").width()+10,onChange:function(w,v,x){var u={index:v};
s.addVerifiedLabel(w,v);
if(typeof x==="string"){u.action="KEYPRESS";
if(x==="keyboardLeft"){u.target="KEYBOARD_LEFT"
}else{u.target="KEYBOARD_RIGHT"
}}else{u.action="CLICK";
x=$(x);
if(x.attr("data-slideshow-prev")){u.target="PREV_BUTTON"
}else{if(x.attr("data-slideshow-next")){u.target="NEXT_BUTTON"
}else{if(x.hasClass("slideshow-images")){u.target="SLIDESHOW_IMAGE"
}else{if(x.hasClass("media-slideshow")){u.target="THUMBNAIL"
}}}}}s.logEvent(u)
}})
}});
r.replaceWith(n)
},events:{"click .cover-img":"openCarousel","click .slideshow-images":"onSlideshowClick","click .slideshow-images img":"carouselPhotoClick"},logEvent:function(n){Airbnb.Tracking.logEvent({event_name:"P3",event_data:$.extend({page:"LISTING_PAGE",section:"PHOTO_SLIDESHOW"},n||{})})
},openCarousel:function(){if(!this.slideshowLoaded){this.initSlideshow();
this.slideshowLoaded=true
}if(this.photoModal){this.photoModal.open();
this.collapseThumbnailTimeout=window.setTimeout(this.collapseThumbnailViewport.bind(this,true),2000);
this.logEvent({action:"CLICK",target:"HEADER_IMAGE"})
}},onSlideshowClick:function(n){var o=$(n.target);
if(this.photoModal&&!o.is(".img-contain")&&o.parents(".p3-photo-social-share-widget").length===0){this.photoModal.close();
this.logEvent({action:"CLICK",target:"CAROUSEL_OVERLAY"})
}},addVerifiedLabel:function(p,n){var o=$(".slideshow-thumbnails li").eq(n),q=o.find("a").data("professional");
this.$(".slideshow-professional").toggleClass("hide",!q)
},carouselPhotoClick:function(n){this.slideshow.next(n.currentTarget)
},handleWindowResize:function(n){var q,p,o="";
if(this.cooldownActive){return
}this.cooldownActive=true;
q=$(window);
p=q.height();
this.$el.removeClass("medium large xlarge");
if(p>=1000){o="xlarge"
}else{if(p>=850){o="large"
}else{if(q.height()>=700){o="medium"
}}}this.$el.addClass(o);
window.setTimeout((function(){this.cooldownActive=false
}).bind(this),this.resizeCooldown)
},onThumbnailsMouseover:function(){if(this.collapseThumbnailTimeout){window.clearTimeout(this.collapseThumbnailTimeout);
this.collapseThumbnailTimeout=null
}this.collapseThumbnailViewport(false)
},collapseThumbnailViewport:function(n){this.$(".slideshow-caption-container").toggleClass("collapsed",n)
}});
h["default"]=g;
a.exports=h["default"]
},{"../../../templates/page3/slideshow_thumbnails.hbs":57,"../globals/slideshow":20,backbone:"backbone",o2:"o2"}],37:[function(f,g,b){var i=f("backbone");
var a=f("../../lib/airbnb/expandable");
var h=f("../utils");
var d=f("underscore");
var c=i.View.extend({initialize:function(j){Airbnb.mediator.on("p3::personalize",this.doPersonalization);
this.initReviewTranslateButton(j.locale)
},events:{"click .pagination a":"handlePagination"},handlePagination:function(k){var j=$(k.currentTarget),l=$(".review-content");
l.addClass("loading");
$.ajax({url:j.data("href"),success:function(m){l.removeClass("loading");
j.closest(".review-content").html(m).find("img.lazy").lazyload();
$("html, body").animate({scrollTop:l.offset().top-40},"fast");
a();
l.attr("tabindex",-1).focus()
}});
return false
},doPersonalization:function(k){if(k.should_show_review_translations){$("#review-translate-button-wrapper").removeClass("hide").addClass("show")
}else{$("#review-translate-button-wrapper").removeClass("show").addClass("hide")
}if(k.review_highlights&&k.review_highlights.length>0){var j=$(".js-review-highlights-wrapper");
j.removeClass("hide");
k.review_highlights.forEach(function(l){var m=l.highlight.replace(l.keyword,"<strong>"+l.keyword+"</strong>");
j.append("<div>"+d.escape(m)+"</div>")
})
}},initReviewTranslateButton:function(k){var n=$("#review-translate-button-wrapper"),m=$("#review-translate-button");
if(n.length){var j=n.find(".review_translate_button_label"),l=n.find(".gBrandingText");
j.html(I18n.t("translate_reviews"));
$(document).on("click","#review-translate-button",function(){if($("#review-translate-button-wrapper").data("is-translated")){$("#review-translate-button-wrapper").data("is-translated",false);
j.html(I18n.t("translate_reviews"));
l.removeClass("translated");
$(".review-text").each(function(p,r){var q=$(r);
q.html(q.data("original-text"))
});
$(".review-translation-language").each(function(p,r){var q=$(r);
q.html("")
});
$(".review-response-text").each(function(p,r){var q=$(r);
q.html(q.data("original-text"))
});
$(".review-response-language").each(function(p,r){var q=$(r);
q.html("")
})
}else{$("#review-translate-button-wrapper").data("is-translated",true);
var o=[];
$(".review-text").each(function(p,q){o.push($(q).data("review-id"))
});
h.translate_reviews(k,o)
}})
}}});
g.exports=c
},{"../../lib/airbnb/expandable":4,"../utils":27,backbone:"backbone",underscore:"underscore"}],38:[function(d,f,b){var c=d("underscore"),h=d("o2"),i=d("backbone"),a=d("../../views/shared/sliding_carousel"),g;
g=i.View.extend({initialize:function(j){this.options=j;
Airbnb.mediator.on("p3::dateGuestChange",this.update.bind(this));
Airbnb.mediator.on("p3::lazyLoadSections",this.lazyInitialize.bind(this))
},lazyInitialize:function(){var j=$.query.load(window.location.href).keys;
this.loggedImpression=false;
this.scrollIndex=0;
if(!j.checkin||!j.checkout){this.update(j)
}this.pageScrollTracker()
},events:{"click .carousel-chevron":"scroll","click .listing":"logClick"},update:function(j){this.params=c.defaults(j,{checkin:"",checkout:"",guests:""});
if(h.matchMedia.is("sm")){this.params.num_results=3
}$.getJSON("/rooms/"+this.options.hostingId+"/similar_listings",this.params,this.handleResults.bind(this))
},logClick:function(m){var j=$(m.target),k=$(m.currentTarget);
if(j.hasClass("icon-heart-alt")||j.hasClass("wish_list_button")){var l="similar_listings_wishlist"
}else{if(!j.hasClass("host-img")){var l="similar_listings_listing"
}}this.eventLogger(l,"click",k.attr("data-id"))
},scroll:function(l){var k=$(l.currentTarget);
if(k.hasClass("left")){var j="similar_listings_scroll_left"
}else{var j="similar_listings_scroll_right"
}this.eventLogger(j,"click",null)
},pageScrollTracker:function(){var k=this;
var j=false;
$(window).scroll(function(){if(!j){k.logImpression();
j=true;
window.setTimeout(function(){j=false
},500)
}});
Airbnb.mediator.on("p3::refreshSubtotal",function(l){k.loggedImpression=false
})
},logImpression:function(){var l=this;
var j=200,k=$(document).height()-$("#footer").height()-$(window).height();
if($(window).scrollTop()>=k-j&&this.loggedImpression==false){this.$el.find(".carousel-item:first .listing").each(function(m,o){var n=o.getAttribute("data-id");
l.eventLogger("similar_listings_impression","impression",n)
})
}},eventLogger:function(m,j,k){var l={event_name:"similar listings",event_data:{page:"p3",section:m,operation:j,hosting_id:AirbnbRooms.hostingId,recommendation_id:k,checkin:this.params.checkin,checkout:this.params.checkout,guests:this.params.guests}};
Airbnb.Tracking.logEvent(l);
this.loggedImpression=true
},handleResults:function(o){var p=o&&o.properties,j=o&&o.debug,u={groups:[]},q,l,k,m,n,s;
if(!p||!p.length){this.$el.addClass("hide");
return
}this.$el.removeClass("hide");
n=0;
s=p.length;
while(n<s){q={index:n/3,cards:p.slice(n,n+3)};
u.groups.push(q);
n+=3
}if(this.carousel){this.carousel.undelegateEvents()
}l=JST["p3/similar_listings"]({cardGroups:u},{partials:JST});
this.$el.find(".similar-listings-results").html(l);
if(j){m=JSON.stringify(j,null,2);
k=[];
k.push('<div class="page-container-responsive">');
k.push("<pre>");
k.push(m);
k.push("</pre>");
k.push("</div>");
this.$el.append(k.join(""))
}this.carousel=new a({el:this.$el.find(".sliding-carousel")});
var r=this;
this.listenTo(this.carousel,"change:item",function(w){var v=w.idx;
var x=$(w.item);
x.find(".listing").each(function(y,z){var A=z.getAttribute("data-id");
r.eventLogger("similar_listings_impression","impression",A)
})
});
Airbnb.WishListButton.update()
}});
f.exports=g
},{"../../views/shared/sliding_carousel":48,backbone:"backbone",o2:"o2",underscore:"underscore"}],39:[function(d,f,c){d("../lib/calendar-date-span");
d("../views/shared/user_flag");
d("../views/shared/social/social_share_widget");
d("../vendor/infobox_packed");
d("../vendor/embedly");
var a=BootstrapData.get("room_options");
window.P3={Room:d("../p3/room"),Utils:d("../p3/utils")};
window.AirbnbRooms=d("../p3/legacy_room");
window.AirbnbRooms.init(a);
window.roomObj=new window.P3.Room(a);
var h=d("../inspectlet");
Airbnb.ERF.deliverExperiment("inspectlet_on_p3",{inspectlet_active:function(){h({user_id:Airbnb.userAttributes.id})
},control:function(){},treatment_unknown:function(){}});
var b=d("../p3/P3SafetyFeaturesSection");
b.init();
var i=d("../p3/P3BookItButtonExperiment");
i.init();
var g=d("o2");
if(!g.matchMedia.is("sm")){Airbnb.Tracking.registerScrollDepthTracking()
}},{"../inspectlet":3,"../lib/calendar-date-span":9,"../p3/P3BookItButtonExperiment":16,"../p3/P3SafetyFeaturesSection":17,"../p3/legacy_room":22,"../p3/room":23,"../p3/utils":27,"../vendor/embedly":43,"../vendor/infobox_packed":44,"../views/shared/social/social_share_widget":49,"../views/shared/user_flag":50,o2:"o2"}],40:[function(c,f,b){var d=(function(){function h(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}return function(k,i,j){if(i){h(k.prototype,i)
}if(j){h(k,j)
}return k
}
})();
function g(h,i){if(!(h instanceof i)){throw new TypeError("Cannot call a class as a function")
}}var a=(function(){function h(n,p){var o=this;
g(this,h);
this.callback=p;
this.targetTime=n;
this.spentWaiting=0;
this.startedAt=NaN;
this.finished=false;
this.timeoutId=null;
this.done=function(){o.stop();
o.finished=true;
o.callback()
}
}d(h,[{key:"start",value:function m(){if(this.finished){throw new Error("Timer finished! Reset to run again")
}if(this.timeoutId){throw new Error("Timer has already started!")
}this.startedAt=Date.now();
this.timeoutId=setTimeout(this.done,this.targetTime-this.spentWaiting)
}},{key:"pause",value:function l(){if(this.finished){return false
}if(!this.timeoutId){return false
}this.stop();
return true
}},{key:"resume",value:function k(){if(this.finished){return false
}if(this.timeoutId){return false
}this.start();
return true
}},{key:"stop",value:function i(){if(!this.timeoutId){throw new Error("Timer has not started")
}clearTimeout(this.timeoutId);
this.timeoutId=null;
this.spentWaiting+=Date.now()-this.startedAt;
this.startedAt=NaN
}},{key:"reset",value:function j(){if(this.timeoutId){this.stop()
}this.spentWaiting=0;
this.finished=false
}}]);
return h
})();
f.exports=a
},{}],41:[function(c,d,a){var b=c("underscore");
function f(h,g){this._collection=h;
this._options=b.extend({},this._options,g)
}b.extend(f.prototype,{_index:0,_collection:null,_options:{onChange:false,shouldLoop:true},_nextIndex:function(){var g=this._index+1;
return this._options.shouldLoop?g%this._collection.length:g
},_prevIndex:function(){var h=this._index-1,g=this._collection.length;
return this._options.shouldLoop?(h+g)%g:h
},peek:function(g){g=typeof g!=="undefined"?g:this._nextIndex();
return this._collection[g]
},hasNext:function(){return this._options.shouldLoop||this._index+1<this._collection.length
},hasPrevious:function(){return this._options.shouldLoop||this._index>0
},next:function(g){return this.toIndex(this._nextIndex(),g)
},previous:function(g){return this.toIndex(this._prevIndex(),g)
},curr:function(){return this._collection[this._index]
},toIndex:function(g,h){if(!this._collection||this._collection.length===0){return null
}if(!this._options.shouldLoop&&(g<0||g>=this._collection.length)){throw"Index out of bounds."
}this._index=g;
if(typeof this._options.onChange==="function"){this._options.onChange.call(this,this._collection[this._index],this._index,h)
}return this.curr()
}});
if(typeof d!=="undefined"){d.exports=f
}else{if(provide){provide("simple_iterator",f)
}}},{underscore:"underscore"}],42:[function(c,d,b){var f=null;
var a=function(i,h){h.forEach(function(j){i[j.feature]=j.launch
});
return i
};
var g={getBootstrap:function(h){f=f||BootstrapData.get("trebuchet");
if(Object.hasOwnProperty.call(f,h)){return f[h]
}else{throw new ReferenceError(""+h+" was not bootstrapped")
}},fetch:function(j,h){if(!Array.isArray(j)){j=[j]
}var i=j.reduce(function(l,k){return(l[k]=false,l)
},{});
Airbnb.Api.get("/v1/trebuchet/multi",{data:{features:j},success:function(k){return h(a(i,k.features))
},error:function(){return h(i)
}})
}};
if(typeof d!=="undefined"){d.exports=g
}else{window.provide("trebuchet",g)
}},{}],43:[function(b,c,a){!(function(d){$(window).on("load",function(){LazyLoad.js("https://cdn.embedly.com/widgets/platform.js",function(){$("body").on("click","a.embedly-btn",function(g){var f=$(g.currentTarget);
var h={lang:f.data("embedly-locale")};
if(f.data("url")){h.url=f.data("url")
}embedly.modal(h);
g.preventDefault()
})
})
})
})()
},{}],44:[function(require,module,exports){Airbnb.Utils.withGooglePlaces(function(){eval((function(p,a,c,k,e,r){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))
};
if(!"".replace(/^/,String)){while(c--){r[e(c)]=k[c]||e(c)
}k=[function(e){return r[e]
}];
e=function(){return"\\w+"
};
c=1
}while(c--){if(k[c]){p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c])
}}return p
})('6 8(a){a=a||{};r.s.1P.2j(2,36);2.M=a.1y||"";2.1z=a.1q||J;2.U=a.1H||0;2.G=a.1B||1g r.s.1Y(0,0);2.E=a.Y||1g r.s.2B(0,0);2.X=a.V||t;2.1p=a.1s||"2g";2.1m=a.F||{};2.1G=a.1E||"39";2.N=a.1j||"34://31.r.2W/2Q/2O/2K/1u.2I";3(a.1j===""){2.N=""}2.19=a.1A||1g r.s.1Y(1,1);3(p a.A==="q"){3(p a.18==="q"){a.A=L}v{a.A=!a.18}}2.w=!a.A;2.17=a.1n||J;2.1I=a.2f||"2d";2.15=a.1l||J;2.4=t;2.z=t;2.14=t;2.T=t;2.B=t;2.R=t}8.9=1g r.s.1P();8.9.24=6(){5 i;5 f;5 a;5 d=2;5 c=6(e){e.20=L;3(e.1i){e.1i()}};5 b=6(e){e.2T=J;3(e.1Z){e.1Z()}3(!d.15){c(e)}};3(!2.4){2.4=16.2N("2M");2.1d();3(p 2.M.1v==="q"){2.4.Q=2.I()+2.M}v{2.4.Q=2.I();2.4.1e(2.M)}2.2F()[2.1I].1e(2.4);2.1t();3(2.4.7.C){2.R=L}v{3(2.U!==0&&2.4.Z>2.U){2.4.7.C=2.U;2.4.7.2A="2x";2.R=L}v{a=2.22();2.4.7.C=(2.4.Z-a.13-a.12)+"11";2.R=J}}2.1r(2.1z);3(!2.15){2.B=[];f=["2q","1N","2p","2o","1M","2n","2m","2l","2k"];1o(i=0;i<f.1L;i++){2.B.1K(r.s.u.1c(2.4,f[i],c))}2.B.1K(r.s.u.1c(2.4,"1N",6(e){2.7.1J="2i"}))}2.T=r.s.u.1c(2.4,"2h",b);r.s.u.S(2,"2e")}};8.9.I=6(){5 a="";3(2.N!==""){a="<2c";a+=" 2b=\'"+2.N+"\'";a+=" 2a=12";a+=" 7=\'";a+=" Y: 29;";a+=" 1J: 28;";a+=" 27: "+2.1G+";";a+="\'>"}K a};8.9.1t=6(){5 a;3(2.N!==""){a=2.4.3f;2.z=r.s.u.1c(a,"1M",2.26())}v{2.z=t}};8.9.26=6(){5 a=2;K 6(e){e.20=L;3(e.1i){e.1i()}r.s.u.S(a,"3e");a.1u()}};8.9.1r=6(d){5 m;5 n;5 e=0,H=0;3(!d){m=2.1F();3(m 3d r.s.3c){3(!m.25().3a(2.E)){m.38(2.E)}n=m.25();5 a=m.37();5 h=a.Z;5 f=a.23;5 k=2.G.C;5 l=2.G.1k;5 g=2.4.Z;5 b=2.4.23;5 i=2.19.C;5 j=2.19.1k;5 o=2.21().35(2.E);3(o.x<(-k+i)){e=o.x+k-i}v 3((o.x+g+k+i)>h){e=o.x+g+k+i-h}3(2.17){3(o.y<(-l+j+b)){H=o.y+l-j-b}v 3((o.y+l+j)>f){H=o.y+l+j-f}}v{3(o.y<(-l+j)){H=o.y+l-j}v 3((o.y+b+l+j)>f){H=o.y+b+l+j-f}}3(!(e===0&&H===0)){5 c=m.33();m.32(e,H)}}}};8.9.1d=6(){5 i,F;3(2.4){2.4.30=2.1p;2.4.7.2Z="";F=2.1m;1o(i 2Y F){3(F.2X(i)){2.4.7[i]=F[i]}}3(p 2.4.7.1f!=="q"&&2.4.7.1f!==""){2.4.7.2V="2S(1f="+(2.4.7.1f*2R)+")"}2.4.7.Y="2P";2.4.7.P=\'1b\';3(2.X!==t){2.4.7.V=2.X}}};8.9.22=6(){5 c;5 a={1a:0,1h:0,13:0,12:0};5 b=2.4;3(16.1w&&16.1w.1X){c=b.2L.1w.1X(b,"");3(c){a.1a=D(c.1W,10)||0;a.1h=D(c.1V,10)||0;a.13=D(c.1U,10)||0;a.12=D(c.1T,10)||0}}v 3(16.2J.O){3(b.O){a.1a=D(b.O.1W,10)||0;a.1h=D(b.O.1V,10)||0;a.13=D(b.O.1U,10)||0;a.12=D(b.O.1T,10)||0}}K a};8.9.2H=6(){3(2.4){2.4.2G.2U(2.4);2.4=t}};8.9.1x=6(){2.24();5 a=2.21().2E(2.E);2.4.7.13=(a.x+2.G.C)+"11";3(2.17){2.4.7.1h=-(a.y+2.G.1k)+"11"}v{2.4.7.1a=(a.y+2.G.1k)+"11"}3(2.w){2.4.7.P=\'1b\'}v{2.4.7.P="A"}};8.9.2D=6(a){3(p a.1s!=="q"){2.1p=a.1s;2.1d()}3(p a.F!=="q"){2.1m=a.F;2.1d()}3(p a.1y!=="q"){2.1S(a.1y)}3(p a.1q!=="q"){2.1z=a.1q}3(p a.1H!=="q"){2.U=a.1H}3(p a.1B!=="q"){2.G=a.1B}3(p a.1n!=="q"){2.17=a.1n}3(p a.Y!=="q"){2.1D(a.Y)}3(p a.V!=="q"){2.1R(a.V)}3(p a.1E!=="q"){2.1G=a.1E}3(p a.1j!=="q"){2.N=a.1j}3(p a.1A!=="q"){2.19=a.1A}3(p a.18!=="q"){2.w=a.18}3(p a.A!=="q"){2.w=!a.A}3(p a.1l!=="q"){2.15=a.1l}3(2.4){2.1x()}};8.9.1S=6(a){2.M=a;3(2.4){3(2.z){r.s.u.W(2.z);2.z=t}3(!2.R){2.4.7.C=""}3(p a.1v==="q"){2.4.Q=2.I()+a}v{2.4.Q=2.I();2.4.1e(a)}3(!2.R){2.4.7.C=2.4.Z+"11";3(p a.1v==="q"){2.4.Q=2.I()+a}v{2.4.Q=2.I();2.4.1e(a)}}2.1t()}r.s.u.S(2,"2C")};8.9.1D=6(a){2.E=a;3(2.4){2.1x()}r.s.u.S(2,"1Q")};8.9.1R=6(a){2.X=a;3(2.4){2.4.7.V=a}r.s.u.S(2,"2z")};8.9.2y=6(a){2.w=!a;3(2.4){2.4.7.P=(2.w?"1b":"A")}};8.9.2w=6(){K 2.M};8.9.1C=6(){K 2.E};8.9.2v=6(){K 2.X};8.9.2u=6(){5 a;3((p 2.1F()==="q")||(2.1F()===t)){a=J}v{a=!2.w}K a};8.9.2t=6(){2.w=J;3(2.4){2.4.7.P="A"}};8.9.3b=6(){2.w=L;3(2.4){2.4.7.P="1b"}};8.9.2s=6(c,b){5 a=2;3(b){2.E=b.1C();2.14=r.s.u.2r(b,"1Q",6(){a.1D(2.1C())})}2.1O(c);3(2.4){2.1r()}};8.9.1u=6(){5 i;3(2.z){r.s.u.W(2.z);2.z=t}3(2.B){1o(i=0;i<2.B.1L;i++){r.s.u.W(2.B[i])}2.B=t}3(2.14){r.s.u.W(2.14);2.14=t}3(2.T){r.s.u.W(2.T);2.T=t}2.1O(t)};',62,202,"||this|if|div_|var|function|style|InfoBox|prototype||||||||||||||||typeof|undefined|google|maps|null|event|else|isHidden_|||closeListener_|visible|eventListeners_|width|parseInt|position_|boxStyle|pixelOffset_|yOffset|getCloseBoxImg_|false|return|true|content_|closeBoxURL_|currentStyle|visibility|innerHTML|fixedWidthSet_|trigger|contextListener_|maxWidth_|zIndex|removeListener|zIndex_|position|offsetWidth||px|right|left|moveListener_|enableEventPropagation_|document|alignBottom_|isHidden|infoBoxClearance_|top|hidden|addDomListener|setBoxStyle_|appendChild|opacity|new|bottom|stopPropagation|closeBoxURL|height|enableEventPropagation|boxStyle_|alignBottom|for|boxClass_|disableAutoPan|panBox_|boxClass|addClickHandler_|close|nodeType|defaultView|draw|content|disableAutoPan_|infoBoxClearance|pixelOffset|getPosition|setPosition|closeBoxMargin|getMap|closeBoxMargin_|maxWidth|pane_|cursor|push|length|click|mouseover|setMap|OverlayView|position_changed|setZIndex|setContent|borderRightWidth|borderLeftWidth|borderBottomWidth|borderTopWidth|getComputedStyle|Size|preventDefault|cancelBubble|getProjection|getBoxWidths_|offsetHeight|createInfoBoxDiv_|getBounds|getCloseClickHandler_|margin|pointer|relative|align|src|img|floatPane|domready|pane|infoBox|contextmenu|default|apply|touchmove|touchend|touchstart|dblclick|mouseup|mouseout|mousedown|addListener|open|show|getVisible|getZIndex|getContent|auto|setVisible|zindex_changed|overflow|LatLng|content_changed|setOptions|fromLatLngToDivPixel|getPanes|parentNode|onRemove|gif|documentElement|mapfiles|ownerDocument|div|createElement|en_us|absolute|intl|100|alpha|returnValue|removeChild|filter|com|hasOwnProperty|in|cssText|className|www|panBy|getCenter|http|fromLatLngToContainerPixel|arguments|getDiv|setCenter|2px|contains|hide|Map|instanceof|closeclick|firstChild".split("|"),0,{}));
window.InfoBox=InfoBox
})
},{}],45:[function(b,c,a){window.Modernizr=(function(ac,ab,aa){function F(d){U.cssText=d
}function E(f,d){return F(R.join(f+";")+(d||""))
}function D(f,d){return typeof f===d
}function C(f,d){return !!~(""+f).indexOf(d)
}function B(h,g,k){for(var j in h){var i=g[h[j]];
if(i!==aa){return k===!1?h[j]:D(i,"function")?i.bind(k||g):i
}}return !1
}var Z="2.8.3",Y={},X=ab.documentElement,W="modernizr",V=ab.createElement(W),U=V.style,T,S=({}).toString,R=" -webkit- -moz- -o- -ms- ".split(" "),Q={},P={},O={},N=[],K=N.slice,J,I=function(x,w,v,u){var s,r,q,p,o=ab.createElement("div"),g=ab.body,f=g||ab.createElement("body");
if(parseInt(v,10)){while(v--){q=ab.createElement("div"),q.id=u?u[v]:W+(v+1),o.appendChild(q)
}}return(s=["&#173;",'<style id="s',W,'">',x,"</style>"].join(""),o.id=W,(g?o:f).innerHTML+=s,f.appendChild(o),g||(f.style.background="",f.style.overflow="hidden",p=X.style.overflow,X.style.overflow="hidden",X.appendChild(f)),r=w(o,x),g?o.parentNode.removeChild(o):(f.parentNode.removeChild(f),X.style.overflow=p),!!r)
},H=({}).hasOwnProperty,G;
!D(H,"undefined")&&!D(H.call,"undefined")?G=function(f,d){return H.call(f,d)
}:G=function(f,d){return d in f&&D(f.constructor.prototype[d],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(f){var i=this;
if(typeof i!="function"){throw new TypeError()
}var h=K.call(arguments,1),g=function(){if(this instanceof g){var d=function(){};
d.prototype=i.prototype;
var k=new d(),j=i.apply(k,h.concat(K.call(arguments)));
return Object(j)===j?j:k
}return i.apply(f,h.concat(K.call(arguments)))
};
return g
}),Q.touch=function(){var d;
return("ontouchstart" in ac||ac.DocumentTouch&&ab instanceof DocumentTouch?d=!0:I(["@media (",R.join("touch-enabled),("),W,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(f){d=f.offsetTop===9
}),d)
};
for(var M in Q){G(Q,M)&&(J=M.toLowerCase(),Y[J]=Q[M](),N.push((Y[J]?"":"no-")+J))
}return(Y.addTest=function(g,f){if(typeof g=="object"){for(var h in g){G(g,h)&&Y.addTest(h,g[h])
}}else{g=g.toLowerCase();
if(Y[g]!==aa){return Y
}f=typeof f=="function"?f():f,typeof enableClasses!="undefined"&&enableClasses&&(X.className+=" "+(f?"":"no-")+g),Y[g]=f
}return Y
},F(""),V=T=null,Y._version=Z,Y._prefixes=R,Y.testStyles=I,Y)
})(window,window.document);
c.exports=window.Modernizr
},{}],46:[function(b,c,a){(function(g,i,h){var f=g._,d;
d=h.VerificationFlow=function(j){this.options=i.extend({element:null,showIntro:false,onComplete:function(){},metaData:{}},j);
this.init()
};
d.prototype={states:{basic_profile:1,profile_photo:2,phone_verification:3,real_name:4,full_profile:5,confirmed_email:6},eventPrefix:"verification_flow.",statesFlipped:{},numStates:0,currentState:0,init:function(){var j=this,l,n,k,m;
this.element=i(this.options.element);
this.$continue=i(".button-bar a.continue");
this.steps=[];
this.$(".verification-flow-panel").each(function(){j.steps.push(i(this).data("step"))
});
if(this.element.length===0||this.steps.length===0){return
}i.each(this.states,function(p,o){j.statesFlipped[o]=p;
j.numStates++
});
this.sm=new g.SimpleStateMachine(this.states,{context:this});
i.each(this.transitionHandlers,function(o,p){var q=j.states[o];
j.sm.addTransitionHandler(q,p)
});
for(l=this.currentState;
l<=this.numStates;
l++){if(this.$panel(this.statesFlipped[this.currentState]).length){break
}this.currentState++
}if(this.currentState===this.numStates+1){this.finish();
return
}this.sm.transitionTo(this.currentState);
this.$continue.click(function(){j.nextState()
});
if(this.options.showIntro){n=this.element.next(".content-row");
k=this.$(".verification-flow-intro").show();
m=this.$(".verification-flow-panels").hide();
this.$("a.start").click(function(){k.hide();
m.show();
j.start();
n.show()
});
j.trackEvent("show_intro",{numSteps:j.steps.length,steps:j.steps});
n.hide()
}else{j.start()
}if(this.steps.length>1){this.$(".verification-flow-step span:eq(1)").text(this.steps.length)
}else{this.$(".verification-flow-step").hide()
}},start:function(){var j=this;
this.trackEvent("start",{numSteps:j.steps.length,steps:j.steps});
this.updateStep()
},transitionHandlers:{basic_profile:function(){this.$(".verification-flow-panel").hide();
this.$panel("basic_profile").show();
this.$continue.show()
},phone_verification:function(){var j=this;
this.$(".verification-flow-panel").hide();
this.$panel("phone_verification").show();
this.$continue.hide();
i.phoneNumberWidget({showAddNumberInitially:true,onVerifyComplete:function(){j.hasVerifiedPhoneNumber=true;
j.nextState();
return false
},resoCode:this.options.resoCode})
},profile_photo:function(){this.$(".verification-flow-panel").hide();
this.$panel("profile_photo").show();
if(this.options.profilePhotoOptions){window.ProfilePicWidget.init(this.options.profilePhotoOptions)
}this.$continue.show()
},real_name:function(){this.$(".verification-flow-panel").hide();
this.$panel("real_name").show();
this.$(".button-bar").hide();
this.$continue.show()
},full_profile:function(){this.$(".verification-flow-panel").hide();
this.$panel("full_profile").show();
this.$continue.show()
},confirmed_email:function(){var k=this;
this.trackEvent("confirm_email.start");
this.$(".verification-flow-panel").hide();
var o=this.$panel("confirmed_email");
o.show();
function j(){i.getJSON("/users/request_new_confirm_email?dead_end=true");
k.trackEvent("confirm_email.request_new_email")
}j();
var n=setInterval(function(){i.getJSON("/verification/has_confirmed_email",function(p){if(p.has_confirmed_email){l()
}})
},5000);
function l(){k.trackEvent("confirm_email.email_confirmed");
clearInterval(n);
o.off(".confirmed_email");
k.nextState()
}this.$continue.hide();
var m=o.find(".not-there");
o.on("click.confirmed_email",".resend-link",function(p){p.preventDefault();
i(this).hide();
m.show()
});
o.on("click.confirmed_email",".sendEmail",function(p){p.preventDefault();
j();
m.hide();
o.find(".did-resend").show()
})
}},submitHandlers:{basic_profile:function(l){if(i.trim(i("#user_profile_info_about").val())===""){this.showError("You need to enter a profile description!");
h.mediator.emit("track:additional_desc_continue_click_error",{});
h.mediator.emit("track:additional_desc_continue_click_error_type",{label:"You need to enter a profile description!"})
}else{var k=this.$panel("basic_profile").find("textarea"),j={};
j[k.attr("name")]=k.val();
j.authenticity_token=i("#authenticity-token").data("authenticity-token");
i.ajax({type:"POST",url:k.attr("data-url"),data:j,error:function(m){h.mediator.emit("track:additional_desc_continue_click_error",{});
h.Utils.followRedirectIfPresent(m);
window.location=""
},dataType:"JSON"});
h.mediator.emit("track:additional_desc_continue_click_success",{});
l.call(this)
}},phone_verification:function(j){if(!this.hasVerifiedPhoneNumber){this.showError("You need to verify your phone number before continuing.")
}else{j.call(this)
}},profile_photo:function(k){var j=this;
j.setLoading(true);
i.getJSON("/users/has_profile_pic",function(l){j.setLoading(false);
if(l.has_profile_pic){h.mediator.emit("track:additional_photo_continue_click_success",{});
k.call(j)
}else{h.mediator.emit("track:additional_photo_continue_click_error",{});
h.mediator.emit("track:additional_photo_continue_click_error_type",{label:"You need to add a profile photo before continuing."});
j.showError("You need to add a profile photo before continuing.")
}})
},real_name:function(j){if(!this.hasCompletedRealName){this.showError("You need to confirm your real name before continuing.")
}else{j.call(this)
}},full_profile:function(o){var m=i('select[name="user[sex]"]');
var l=m.val();
var j=i.trim(i("#user_profile_info_current_city").val());
if(l===""){this.showError("You need to tell us your gender before continuing.")
}else{if(j===""){this.showError("You need to tell us your location before continuing.")
}else{var n={"user[sex]":l,"user_profile_info[current_city]":j};
i("#user-birthdate-container select").each(function(q,r){var p=i(r);
n[p.attr("name")]=p.val()
});
var k=i(".verification-flow-panel.full_profile").data("url");
i.post(k,n);
o.call(this)
}}},confirmed_email:function(j){j.call(this)
}},showError:function(j){alert(j)
},setLoading:function(j){if(j){this.element.addClass("loading");
this.$continue.attr("disabled","disabled")
}else{this.element.removeClass("loading");
this.$continue.removeAttr("disabled")
}},nextState:function(){var j=this,m=this.statesFlipped[this.currentState],n=this.submitHandlers[m],l;
for(var k=this.currentState;
k<=this.numStates;
k++){l=k+1;
if(this.$panel(this.statesFlipped[l]).length){break
}}if(this.$panel(m).length){n.call(this,o)
}else{o()
}function o(){j.trackEvent("step_completed."+m);
if(l===j.numStates+1){j.finish()
}else{j.currentState=l;
j.sm.transitionTo(j.currentState);
j.updateStep()
}}},updateStep:function(){var l=this.$(".verification-flow-panel:visible"),k=l.index()===-1?1:l.index()+1,j=this.statesFlipped[this.currentState];
this.$(".verification-flow-step span:first").text(k);
if(k===this.$(".verification-flow-panel").length){this.$continue.text(I18n.t("finish"))
}this.trackEvent("step_start."+j)
},$:function(j){return this.element.find(j)
},$panel:function(j){return this.$(".verification-flow-panel."+j)
},finish:function(){this.element.addClass("complete");
if(this.options.showIntro){this.$(".verification-flow-panels").hide();
this.$(".verification-flow-complete").show()
}this.options.onComplete.call(this);
this.trackEvent("completed")
},trackEvent:function(m,l){var k=this.eventPrefix+m,j=i.extend({},this.options.metaData,l,{action:m});
h.Tracking.logEvent({event_name:"verification_flow",event_data:j});
this.element.trigger(k)
},bind:function(k,l){var j=this.eventPrefix+k;
this.element.bind(j,l)
}};
i.fn.verificationFlow=function(k){k=i.extend({},k||{},{element:this});
var j=new h.VerificationFlow(k);
i(this).data("verificationFlow",j);
return this
}
})(this,jQuery,Airbnb)
},{}],47:[function(b,c,a){!(function(f){var d=window.Backbone.View.extend({initialize:function(){window._.bindAll(this,"onSubmit","itemClick");
this.$form=this.$("form");
this.$modal=this.$(".flag-modal");
this.$modalContent=this.$modal.find(".modal-content");
if(typeof this.options.afterFlagging==="function"){this.afterFlagging=this.options.afterFlagging
}f(this.el).removeClass("hide");
f(this.options.triggerEl).removeClass("hide")
},events:{"submit form":"onSubmit","click .flag-modal .flag-thank-you .btn":"afterThankYou","click .flag-modal .flag-form .btn":"itemClick"},onSubmit:function(j){var g;
j.preventDefault();
if(this.$form.find('input[name="user_flag[name]"]').val()==="Other"){g=this.$form.find('[name="user_flag[other_note]"]').val();
if(typeof g==="undefined"||g.trim()===""){return
}}this.$modalContent.addClass("loading");
f.post(this.$form.attr("action"),this.$form.serialize(),(function(l){if(l.flag_id!=undefined){this.$form.find("#user_flag_id").val(l.flag_id)
}this.afterFlagging&&this.afterFlagging()
}).bind(this));
window.setTimeout((function(){this.$modalContent.removeClass("loading");
this.$modal.find(".other-container").addClass("hide").end().find(".panel-footer").addClass("hide").end().find(".panel-body.flag-form").addClass("hide")
}).bind(this),400);
var i=this.$modal.find(".flag-thank-you");
var h=this.$modal.find(".panel-header.main-header");
var k=this.$modal.find(".panel-header.thanks-header");
h.addClass("hide");
k.removeClass("hide");
i.removeClass("hide")
},afterThankYou:function(g){g.preventDefault();
this.$modal.data("o2-modal").close()
},itemClick:function(j){var h=f(j.currentTarget),i=h.parent(),g;
this.$form.find('input[name="user_flag[name]"]').val(h.data("reason-id"));
if(i.hasClass("other")){g=i.find("textarea");
g.val("");
i.addClass("clicked");
i.find(".other-container").removeClass("hide");
this.$modal.find(".panel-footer").removeClass("hide")
}else{i.find("textarea").val("");
this.$form.submit()
}j.preventDefault()
}});
if(typeof c!=="undefined"){c.exports=d
}else{window.provide("views/shared/flag_widget",d)
}})(jQuery)
},{}],48:[function(d,f,b){var c=d("underscore"),h=d("backbone"),g,a;
if(typeof f!=="undefined"){g=d("../../simple_iterator")
}else{g=window.enderRequire("simple_iterator")
}a=h.View.extend({initialize:function(i){var k=this.$el.find(".carousel-item");
var j=k.first().outerWidth()*k.length;
c.bindAll(this,"onChange");
this.iterator=new g(k,{onChange:this.onChange,shouldLoop:this.options.shouldLoop||false});
this.$itemList=this.$el.find(".carousel-item-list");
this.options=i;
this.itemWidth=k.first().outerWidth();
this.$el.find(".carousel-item-list").width(j);
if(!this.iterator.hasNext()){this.$el.find(".carousel-chevron.right").addClass("hide")
}if(this.options.advanceOnItemClick){this.$el.on("click",".carousel-item",this.doScroll.bind(this))
}},events:{"click .carousel-chevron":"doScroll"},onChange:function(j,i){this.$itemList.css("left",i*this.itemWidth*-1);
this.$el.find(".carousel-chevron.left").toggleClass("hide",!this.iterator.hasPrevious());
this.$el.find(".carousel-chevron.right").toggleClass("hide",!this.iterator.hasNext());
this.trigger("change:item",{index:i,item:j})
},doScroll:function(i){i.preventDefault();
if($(i.currentTarget).hasClass("left")){if(this.iterator.hasPrevious()){this.iterator.previous()
}}else{if(this.iterator.hasNext()){this.iterator.next()
}}}});
if(typeof f!=="undefined"){f.exports=a
}else{window.provide("shared/sliding_carousel",a)
}},{"../../simple_iterator":41,backbone:"backbone",underscore:"underscore"}],49:[function(b,c,a){!(function(f){var d=window.Backbone.View.extend({networks:{twitter:["Twitter","Tweet"],vkontakte:["VK"],qzone:["Qzone"],weibo:["Sina Weibo"],pinterest:["Pinterest","Pin"],facebook:["Facebook"],googlePlus:["Google"],email:["Email"],embedly:["Embedly"]},newWin:null,sharedViaEmail:false,events:{"click .share-btn":"btnClick"},initialize:function(){this.page=this.options.page;
this.truncateOptions()
},truncateOptions:function(j){var g=this.$el.find(".share-btn"),i=g.length,h=this.$el.find(".more-social-options"),k=this.options.maxSharingOptions||4;
if(i>k+1){f.each(g.slice(k,i),function(m,n){var o=f(n),l=o.removeAttr("data-behavior").html(o.attr("title"));
h.append(f("<li>").append(l))
});
this.$el.find(".more-btn").removeClass("hide");
h.find("a").on("click",this.btnClick.bind(this))
}},btnClick:function(i){i.preventDefault();
var h=f(i.currentTarget),j=h.attr("href"),g=h.data("network");
if(g==="email"){i.preventDefault();
this.shareViaEmail(h.data("email-share-link"))
}else{if(g!=="embedly"){this.popup(j,335,500)
}}this.socialTracking(g)
},socialTracking:function(g){var j="social",i=this.networks[g],h=i[0],l=i[1]||"Share",k=this.page?this.page:location.pathname;
window.ga("send",j,h,l,k);
Airbnb.Tracking.logEvent({event_name:j,event_data:{category:h,action:l,page:k}})
},popup:function(j,g,i){var h="resizable,location,height="+g+",width="+i;
if(this.newWin&&!this.newWin.closed){this.newWin.close()
}this.newWin=window.open(j,"newSocialShare",h);
this.newWin.focus()
},shareViaEmail:function(g){if(Airbnb.Utils.isUserLoggedIn){this.showEmailShareModal(g)
}else{Airbnb.SignupLoginModal.launchSignup();
Airbnb.mediator.on("login",(function(){this.showEmailShareModal(g)
}).bind(this))
}},showEmailShareModal:function(g){if(g){f.get(g,(function(k){var l=f("#share-via-email");
if(l.length>0){l.remove()
}var j=f("<div>").html(k),h=b("o2").Modal.bind(j),i=f("#share-via-email").data("o2-modal");
i.open();
this.handleEmailShareSubmit(i)
}).bind(this))
}},handleEmailShareSubmit:function(h){var g=f("#share-via-email form"),i=f(".share-error");
g.on("submit",function(j){j.preventDefault();
j.stopPropagation();
f.post(g.attr("action"),g.serialize(),function(k){var l=k.email_share_error;
if(l){i.html(l)
}else{i.html("");
h.close();
f("#send_to").val("")
}},"json")
})
}});
if(typeof c!=="undefined"){c.exports=d
}else{window.provide("views/shared/social/social_share_widget",d)
}})(jQuery)
},{o2:"o2"}],50:[function(b,c,a){!(function(f){var d;
if(typeof c!=="undefined"){d=b("./flag_widget")
}else{d=window.enderRequire("views/shared/flag_widget")
}window.UserFlag=function(g,h){this.init(g,h)
};
f.extend(window.UserFlag.prototype,{init:function(g,i){var j=i.parent(),h=this;
this.flagLink=j.find(".flag-trigger");
this.mainHeader=j.find(".panel-header.main-header");
this.thanksHeader=j.find(".panel-header.thanks-header");
this.formBody=j.find(".panel-body.flag-form");
this.formThanks=j.find(".panel-body.flag-thank-you");
this.submitButton=j.find("#user_flag_submit");
this.afterFlagged=j.find(".already-flagged");
this.message=j.find(".message-text");
this.hasMessage=this.message.length>0;
this.flagIdHolder=j.find("#user_flag_id");
this.showMessage=this.afterFlagged.find(".show-message");
this.hideMessage=this.afterFlagged.find(".hide-message");
new d({el:i,triggerEl:this.flagLink,afterFlagging:function(){h.markAsFlagged()
}});
this.bindLinks();
if(g.id!=undefined){this.flagIdHolder.val(g.id);
if(!g.redacted){this.markAsFlagged()
}}},undoFlag:function(g){g.preventDefault();
f.ajax({type:"POST",url:"/user_flags/undo",data:{id:this.flagIdHolder.val()},success:(function(h){this.flagLink.removeClass("hide")
}).bind(this)});
this.afterFlagged.addClass("hide");
if(this.hasMessage){this.message.removeClass("hide").removeClass("row-space-top-2")
}},resetModal:function(g){this.formBody.removeClass("hide");
this.formThanks.addClass("hide");
this.thanksHeader.addClass("hide");
this.mainHeader.removeClass("hide");
this.submitButton.removeAttr("disabled")
},markAsFlagged:function(){if(this.hasMessage){this.message.addClass("hide");
this.afterFlagged.removeClass("hide");
this.hideMessage.addClass("hide");
this.showMessage.removeClass("hide")
}else{this.afterFlagged.removeClass("hide")
}this.flagLink.addClass("hide")
},toggleMessageStatus:function(g){g.preventDefault();
this.showMessage.toggleClass("hide");
this.hideMessage.toggleClass("hide");
this.message.toggleClass("hide").toggleClass("row-space-top-2")
},bindLinks:function(){if(this.hasMessage){this.showMessage.on("click",this.toggleMessageStatus.bind(this));
this.hideMessage.on("click",this.toggleMessageStatus.bind(this))
}this.flagLink.on("click",this.resetModal.bind(this));
this.afterFlagged.find(".undo_flag").on("click",this.undoFlag.bind(this))
}})
})(jQuery)
},{"./flag_widget":47}],51:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(j,q,i,p,o){this.compilerInfo=[4,">= 1.0.0"];
i=this.merge(i,j.helpers);
o=o||{};
var m="",g,k,v,l="function",n=this.escapeExpression,u=this,r=i.blockHelperMissing;
function h(x,w){return"alert-success"
}function f(A,z){var w="",x,y;
w+='\n      <div class="h5 row-space-2">';
if(y=i.offer_message){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.offer_message);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+'</div>\n      <a href="';
if(y=i.offer_url){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.offer_url);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+'" id="complete-booking" class="btn btn-primary">\n        ';
if(y=i.completeBooking){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.completeBooking);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+'\n      </a>\n      <a href="';
if(y=i.url){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.url);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+'" class="btn">';
if(y=i.viewMessage){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.viewMessage);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+"</a>\n    ";
return w
}function s(A,z){var w="",x,y;
w+="\n      <strong>";
if(y=i.message){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.message);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+'</strong><br/>\n      <a href="';
if(y=i.url){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.url);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+'" class="alert-link">';
if(y=i.viewMessage){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.viewMessage);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+"</a> - ";
if(y=i.status_message){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.status_message);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+"\n    ";
return w
}m+='<div class="row-space-top-4">\n  <div class="alert alert-block alert-with-icon ';
v={hash:{},inverse:u.noop,fn:u.program(1,h,o),data:o};
if(k=i.hasOffer){g=k.call(q,v)
}else{k=(q&&q.hasOffer);
g=typeof k===l?k.call(q,v):k
}if(!i.hasOffer){g=r.call(q,g,{hash:{},inverse:u.noop,fn:u.program(1,h,o),data:o})
}if(g||g===0){m+=g
}m+='">\n    <i class="icon icon-star-circled alert-icon"></i>\n    ';
v={hash:{},inverse:u.noop,fn:u.program(3,f,o),data:o};
if(k=i.hasOffer){g=k.call(q,v)
}else{k=(q&&q.hasOffer);
g=typeof k===l?k.call(q,v):k
}if(!i.hasOffer){g=r.call(q,g,{hash:{},inverse:u.noop,fn:u.program(3,f,o),data:o})
}if(g||g===0){m+=g
}m+="\n    ";
v={hash:{},inverse:u.program(5,s,o),fn:u.noop,data:o};
if(k=i.hasOffer){g=k.call(q,v)
}else{k=(q&&q.hasOffer);
g=typeof k===l?k.call(q,v):k
}if(!i.hasOffer){g=r.call(q,g,{hash:{},inverse:u.program(5,s,o),fn:u.noop,data:o})
}if(g||g===0){m+=g
}m+="\n  </div>\n</div>\n";
return m
})
},{"hbsfy/runtime":60}],52:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(k,w,u,p,z){this.compilerInfo=[4,">= 1.0.0"];
u=this.merge(u,k.helpers);
z=z||{};
var v="",m,f,j,i="function",h=this.escapeExpression,s=this,g=u.blockHelperMissing;
function r(E,D){var A="",B,C;
A+='\n                  <a href="';
if(C=u.url){B=C.call(E,{hash:{},data:D})
}else{C=(E&&E.url);
B=typeof C===i?C.call(E,{hash:{},data:D}):C
}A+=h(B)+'" target="_blank" class="link-reset"> ';
if(C=u.name){B=C.call(E,{hash:{},data:D})
}else{C=(E&&E.name);
B=typeof C===i?C.call(E,{hash:{},data:D}):C
}A+=h(B)+" </a>\n                ";
return A
}function q(E,D){var A="",B,C;
A+="\n                  ";
if(C=u.name){B=C.call(E,{hash:{},data:D})
}else{C=(E&&E.name);
B=typeof C===i?C.call(E,{hash:{},data:D}):C
}A+=h(B)+"\n                ";
return A
}function o(B,A){return"neighborhood_singular"
}function n(D,C){var A="",B;
A+="\n      ";
B=u["if"].call(D,(C==null||C===false?C:C.index),{hash:{},inverse:s.noop,fn:s.program(8,l,C),data:C});
if(B||B===0){A+=B
}A+="\n      ";
return A
}function l(C,B){var A="";
A+='\n          <li class="carousel-item">\n            <div class="carousel-image media-photo media-photo-block">\n              <div class="media-cover" style="background-image:url(\''+h((typeof C===i?C.apply(C):C))+"')\"></div>\n            </div>\n          </li>\n        ";
return A
}function y(D,C){var A="",B;
A+='\n      <i class="dot icon-size-1 ';
B=u.unless.call(D,(C==null||C===false?C:C.index),{hash:{},inverse:s.noop,fn:s.program(11,x,C),data:C});
if(B||B===0){A+=B
}A+='"></i>\n      ';
return A
}function x(B,A){return" dot-ebisu "
}v+='<div class="sliding-carousel neighborhood-sliding-carousel">\n  <div class="carousel-view">\n    <ul class="carousel-item-list list-unstyled">\n      <li class="carousel-item">\n        <div class="carousel-image media-photo media-photo-block">\n          <div class="media-cover media-cover-dark" style="background-image:url(\''+h(((m=((m=(w&&w.thumbnails)),m==null||m===false?m:m[0])),typeof m===i?m.apply(w):m))+'\')"></div>\n          <div class="title text-center row row-table text-contrast row-space-top-3">\n            <div class="col-8 col-offset-2 col-middle">\n              <div class="h3">\n                ';
j={hash:{},inverse:s.noop,fn:s.program(1,r,z),data:z};
if(f=u.launched){m=f.call(w,j)
}else{f=(w&&w.launched);
m=typeof f===i?f.call(w,j):f
}if(!u.launched){m=g.call(w,m,{hash:{},inverse:s.noop,fn:s.program(1,r,z),data:z})
}if(m||m===0){v+=m
}v+="\n                ";
j={hash:{},inverse:s.program(3,q,z),fn:s.noop,data:z};
if(f=u.launched){m=f.call(w,j)
}else{f=(w&&w.launched);
m=typeof f===i?f.call(w,j):f
}if(!u.launched){m=g.call(w,m,{hash:{},inverse:s.program(3,q,z),fn:s.noop,data:z})
}if(m||m===0){v+=m
}v+="\n              </div>\n              <p>";
if(f=u.topline){m=f.call(w,{hash:{},data:z})
}else{f=(w&&w.topline);
m=typeof f===i?f.call(w,{hash:{},data:z}):f
}v+=h(m)+'</p>\n            </div>\n          </div>\n          <div class="header row row-table text-center text-contrast">\n            <div class="col-12 col-center">\n              <div class="h6 text-contrast">\n                ';
j={hash:{},inverse:s.noop,fn:s.program(5,o,z),data:z};
if(f=u.t){m=f.call(w,j)
}else{f=(w&&w.t);
m=typeof f===i?f.call(w,j):f
}if(!u.t){m=g.call(w,m,{hash:{},inverse:s.noop,fn:s.program(5,o,z),data:z})
}if(m||m===0){v+=m
}v+="\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n\n      ";
m=u.each.call(w,(w&&w.thumbnails),{hash:{},inverse:s.noop,fn:s.program(7,n,z),data:z});
if(m||m===0){v+=m
}v+='\n\n    </ul>\n  </div>\n\n  <div class="carousel-chevron left hide">\n    <i class="icon icon-chevron-left icon-white icon-size-2"></i>\n  </div>\n  <div class="carousel-chevron right">\n    <i class="icon icon-chevron-right icon-white icon-size-2"></i>\n  </div>\n\n</div>\n\n<div class="panel-body">\n  <div class="row row-space-2">\n    <div class="col-12 text-center">\n      ';
m=u.each.call(w,(w&&w.thumbnails),{hash:{},inverse:s.noop,fn:s.program(10,y,z),data:z});
if(m||m===0){v+=m
}v+='\n    </div>\n  </div>\n  <div class="tags text-center">';
if(f=u.tags){m=f.call(w,{hash:{},data:z})
}else{f=(w&&w.tags);
m=typeof f===i?f.call(w,{hash:{},data:z}):f
}if(m||m===0){v+=m
}v+="</div>\n</div>\n";
return v
})
},{"hbsfy/runtime":60}],53:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(j,q,i,p,o){this.compilerInfo=[4,">= 1.0.0"];
i=this.merge(i,j.helpers);
o=o||{};
var m="",g,k,u,l="function",n=this.escapeExpression,s=this,r=i.blockHelperMissing;
function h(w,v){return"hide"
}function f(z,y){var v="",w,x;
v+="\n             &middot; ";
if(x=i.location){w=x.call(z,{hash:{},data:y})
}else{x=(z&&z.location);
w=typeof x===l?x.call(z,{hash:{},data:y}):x
}v+=n(w)+"\n          ";
return v
}m+='<div class="neighborhood-infobox ';
if(k=i.mapProvider){g=k.call(q,{hash:{},data:o})
}else{k=(q&&q.mapProvider);
g=typeof k===l?k.call(q,{hash:{},data:o}):k
}m+=n(g)+'">\n  <div class="panel-header">\n    <i class="close-box pull-right icon icon-remove ';
u={hash:{},inverse:s.noop,fn:s.program(1,h,o),data:o};
if(k=i.hideCloseBox){g=k.call(q,u)
}else{k=(q&&q.hideCloseBox);
g=typeof k===l?k.call(q,u):k
}if(!i.hideCloseBox){g=r.call(q,g,{hash:{},inverse:s.noop,fn:s.program(1,h,o),data:o})
}if(g||g===0){m+=g
}m+='"></i>\n    <div class="media">\n      <i class="icon icon-';
if(k=i.icon){g=k.call(q,{hash:{},data:o})
}else{k=(q&&q.icon);
g=typeof k===l?k.call(q,{hash:{},data:o}):k
}m+=n(g)+' icon-ebisu pull-left icon-size-2"></i>\n      <div class="media-body">\n        <div class="h6">\n          <a class="link-reset" target="_blank" href="';
if(k=i.titleLink){g=k.call(q,{hash:{},data:o})
}else{k=(q&&q.titleLink);
g=typeof k===l?k.call(q,{hash:{},data:o}):k
}m+=n(g)+'">\n            ';
if(k=i.title){g=k.call(q,{hash:{},data:o})
}else{k=(q&&q.title);
g=typeof k===l?k.call(q,{hash:{},data:o}):k
}if(g||g===0){m+=g
}m+="\n          </a>\n        </div>\n        <small>";
if(k=i.type){g=k.call(q,{hash:{},data:o})
}else{k=(q&&q.type);
g=typeof k===l?k.call(q,{hash:{},data:o}):k
}m+=n(g)+"\n          ";
u={hash:{},inverse:s.noop,fn:s.program(3,f,o),data:o};
if(k=i.hasLocation){g=k.call(q,u)
}else{k=(q&&q.hasLocation);
g=typeof k===l?k.call(q,u):k
}if(!i.hasLocation){g=r.call(q,g,{hash:{},inverse:s.noop,fn:s.program(3,f,o),data:o})
}if(g||g===0){m+=g
}m+='\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class="panel-body">\n    <div class="media">\n      <a href="'+n(((g=((g=(q&&q.user)),g==null||g===false?g:g.profileUrl)),typeof g===l?g.apply(q):g))+'" class="pull-left media-photo media-round">\n        <img alt="'+n(((g=((g=(q&&q.user)),g==null||g===false?g:g.name)),typeof g===l?g.apply(q):g))+'" data-pin-nopin="true" src="'+n(((g=((g=(q&&q.user)),g==null||g===false?g:g.profileImgUrl)),typeof g===l?g.apply(q):g))+'" title="'+n(((g=((g=(q&&q.user)),g==null||g===false?g:g.name)),typeof g===l?g.apply(q):g))+'" width="35" height="35">\n      </a>\n      <div class="media-body">\n        <div class="h6">';
if(k=i.hostRecommendation){g=k.call(q,{hash:{},data:o})
}else{k=(q&&q.hostRecommendation);
g=typeof k===l?k.call(q,{hash:{},data:o}):k
}m+=n(g)+'</div>\n        <div>"';
if(k=i.desc){g=k.call(q,{hash:{},data:o})
}else{k=(q&&q.desc);
g=typeof k===l?k.call(q,{hash:{},data:o}):k
}m+=n(g)+'"</div>\n        <em class="text-muted">- '+n(((g=((g=(q&&q.user)),g==null||g===false?g:g.name)),typeof g===l?g.apply(q):g))+"</em>\n      </div>\n    </div>\n  </div>\n</div>\n";
return m
})
},{"hbsfy/runtime":60}],54:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(k,w,u,o,x){this.compilerInfo=[4,">= 1.0.0"];
u=this.merge(u,k.helpers);
x=x||{};
var v="",l,f,j,i="function",h=this.escapeExpression,s=u.helperMissing,r=this,g=u.blockHelperMissing;
function q(z,y){return" alert-danger "
}function p(z,y){return" icon-alert-alt "
}function n(z,y){return" icon-comment "
}function m(D,C){var y="",A,B,z;
y+='\n    <a href="';
if(B=u.editUrl){A=B.call(D,{hash:{},data:C})
}else{B=(D&&D.editUrl);
A=typeof B===i?B.call(D,{hash:{},data:C}):B
}y+=h(A)+'" class="link-reset pull-right">\n      <i class="icon icon-arrow-right"></i>\n      '+h((B=u.t||(D&&D.t),z={hash:{},data:C},B?B.call(D,"ml.preview.edit_preview",z):s.call(D,"t","ml.preview.edit_preview",z)))+"\n    </a>\n  ";
return y
}v+='<div class="';
j={hash:{},inverse:r.noop,fn:r.program(1,q,x),data:x};
if(f=u.suspended){l=f.call(w,j)
}else{f=(w&&w.suspended);
l=typeof f===i?f.call(w,j):f
}if(!u.suspended){l=g.call(w,l,{hash:{},inverse:r.noop,fn:r.program(1,q,x),data:x})
}if(l||l===0){v+=l
}v+=' alert webkit-render-fix">\n  <i class="icon alert-icon \n	  ';
j={hash:{},inverse:r.noop,fn:r.program(3,p,x),data:x};
if(f=u.suspended){l=f.call(w,j)
}else{f=(w&&w.suspended);
l=typeof f===i?f.call(w,j):f
}if(!u.suspended){l=g.call(w,l,{hash:{},inverse:r.noop,fn:r.program(3,p,x),data:x})
}if(l||l===0){v+=l
}v+="\n	  ";
j={hash:{},inverse:r.program(5,n,x),fn:r.noop,data:x};
if(f=u.suspended){l=f.call(w,j)
}else{f=(w&&w.suspended);
l=typeof f===i?f.call(w,j):f
}if(!u.suspended){l=g.call(w,l,{hash:{},inverse:r.program(5,n,x),fn:r.noop,data:x})
}if(l||l===0){v+=l
}v+='"></i>\n  ';
if(f=u.headline){l=f.call(w,{hash:{},data:x})
}else{f=(w&&w.headline);
l=typeof f===i?f.call(w,{hash:{},data:x}):f
}if(l||l===0){v+=l
}v+="\n  ";
j={hash:{},inverse:r.noop,fn:r.program(7,m,x),data:x};
if(f=u.showEditLink){l=f.call(w,j)
}else{f=(w&&w.showEditLink);
l=typeof f===i?f.call(w,j):f
}if(!u.showEditLink){l=g.call(w,l,{hash:{},inverse:r.noop,fn:r.program(7,m,x),data:x})
}if(l||l===0){v+=l
}v+="\n</div>\n";
return v
})
},{"hbsfy/runtime":60}],55:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(h,o,g,n,m){this.compilerInfo=[4,">= 1.0.0"];
g=this.merge(g,h.helpers);
m=m||{};
var k="",f,i,j="function",l=this.escapeExpression;
k+='<div class="img-contain"\n     data-slideshow-next="true"\n     style="background-image: url(';
if(i=g.url){f=i.call(o,{hash:{},data:m})
}else{i=(o&&o.url);
f=typeof i===j?i.call(o,{hash:{},data:m}):i
}k+=l(f)+')">\n</div>\n';
return k
})
},{"hbsfy/runtime":60}],56:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(i,p,h,o,n){this.compilerInfo=[4,">= 1.0.0"];
h=this.merge(h,i.helpers);
n=n||{};
var l="",f,j,s,k="function",m=this.escapeExpression,r=this,q=h.blockHelperMissing;
function g(y,x){var u="",v,w;
u+='\n<img id="slideshow-preload-';
if(w=h.index){v=w.call(y,{hash:{},data:x})
}else{w=(y&&y.index);
v=typeof w===k?w.call(y,{hash:{},data:x}):w
}u+=m(v)+'" src="';
if(w=h.url){v=w.call(y,{hash:{},data:x})
}else{w=(y&&y.url);
v=typeof w===k?w.call(y,{hash:{},data:x}):w
}u+=m(v)+'" alt="">\n';
return u
}s={hash:{},inverse:r.noop,fn:r.program(1,g,n),data:n};
if(j=h.images){f=j.call(p,s)
}else{j=(p&&p.images);
f=typeof j===k?j.call(p,s):j
}if(!h.images){f=q.call(p,f,{hash:{},inverse:r.noop,fn:r.program(1,g,n),data:n})
}if(f||f===0){l+=f
}l+="\n";
return l
})
},{"hbsfy/runtime":60}],57:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(j,q,i,p,o){this.compilerInfo=[4,">= 1.0.0"];
i=this.merge(i,j.helpers);
o=o||{};
var m="",f,k,u,s=this,l="function",r=i.blockHelperMissing,n=this.escapeExpression;
function h(A,z){var v="",x,y,w;
v+='\n<li class="pull-left">\n  <a class="';
w={hash:{},inverse:s.noop,fn:s.program(2,g,z),data:z};
if(y=i.first){x=y.call(A,w)
}else{y=(A&&A.first);
x=typeof y===l?y.call(A,w):y
}if(!i.first){x=r.call(A,x,{hash:{},inverse:s.noop,fn:s.program(2,g,z),data:z})
}if(x||x===0){v+=x
}v+='media-photo media-slideshow"\n    href="';
if(y=i.url){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.url);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}v+=n(x)+'"\n    data-professional="';
if(y=i.professional){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.professional);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}v+=n(x)+'"\n    title="';
if(y=i.caption_formatted){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.caption_formatted);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}v+=n(x)+'">\n\n    <img alt="';
if(y=i.caption){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.caption);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}v+=n(x)+'" src="';
if(y=i.thumbnail_url){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.thumbnail_url);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}v+=n(x)+'" />\n  </a>\n</li>\n';
return v
}function g(w,v){return"active "
}u={hash:{},inverse:s.noop,fn:s.program(1,h,o),data:o};
if(k=i.photoData){f=k.call(q,u)
}else{k=(q&&q.photoData);
f=typeof k===l?k.call(q,u):k
}if(!i.photoData){f=r.call(q,f,{hash:{},inverse:s.noop,fn:s.program(1,h,o),data:o})
}if(f||f===0){m+=f
}m+="\n";
return m
})
},{"hbsfy/runtime":60}],58:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(h,o,g,n,m){this.compilerInfo=[4,">= 1.0.0"];
g=this.merge(g,h.helpers);
m=m||{};
var k="",f,i,j="function",l=this.escapeExpression;
k+='<div class="media col-6 row-space-2">\n  <div class="pull-left media-photo media-round">\n    <img height="38" width="38" alt="';
if(i=g.caption){f=i.call(o,{hash:{},data:m})
}else{i=(o&&o.caption);
f=typeof i===j?i.call(o,{hash:{},data:m}):i
}k+=l(f)+'" src="';
if(i=g.pic_url_small){f=i.call(o,{hash:{},data:m})
}else{i=(o&&o.pic_url_small);
f=typeof i===j?i.call(o,{hash:{},data:m}):i
}k+=l(f)+'" />\n  </div>\n  <div class="media-body">\n    ';
if(i=g.caption){f=i.call(o,{hash:{},data:m})
}else{i=(o&&o.caption);
f=typeof i===j?i.call(o,{hash:{},data:m}):i
}k+=l(f)+"\n  </div>\n</div>\n";
return k
})
},{"hbsfy/runtime":60}],59:[function(c,d,a){var b=c("hbsfy/runtime");
d.exports=b.template(function(j,q,i,p,o){this.compilerInfo=[4,">= 1.0.0"];
i=this.merge(i,j.helpers);
o=o||{};
var m="",f,k,v,l="function",s=this,r=i.blockHelperMissing,n=this.escapeExpression;
function h(B,A){var w="",y,z,x;
w+="\n    <tr>\n      <td>\n        ";
if(z=i.description){y=z.call(B,{hash:{},data:A})
}else{z=(B&&B.description);
y=typeof z===l?z.call(B,{hash:{},data:A}):z
}if(y||y===0){w+=y
}w+="\n        ";
x={hash:{},inverse:s.noop,fn:s.program(2,g,A),data:A};
if(z=i.tooltip){y=z.call(B,x)
}else{z=(B&&B.tooltip);
y=typeof z===l?z.call(B,x):z
}if(!i.tooltip){y=r.call(B,y,{hash:{},inverse:s.noop,fn:s.program(2,g,A),data:A})
}if(y||y===0){w+=y
}w+="\n      </td>\n      <td>";
if(z=i.value){y=z.call(B,{hash:{},data:A})
}else{z=(B&&B.value);
y=typeof z===l?z.call(B,{hash:{},data:A}):z
}if(y||y===0){w+=y
}w+="</td>\n    </tr>\n  ";
return w
}function g(A,z){var w="",x,y;
w+='\n          <i id="';
if(y=i.id){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.id);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}if(x||x===0){w+=x
}w+='" class="icon icon-question"></i>\n        ';
return w
}function u(A,z){var w="",x,y;
w+="\n    <tr>\n      <td>";
if(y=i.description){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.description);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}w+=n(x)+"</td>\n      <td>";
if(y=i.value){x=y.call(A,{hash:{},data:z})
}else{y=(A&&A.value);
x=typeof y===l?y.call(A,{hash:{},data:z}):y
}if(x||x===0){w+=x
}w+="</td>\n    </tr>\n  ";
return w
}m+='<table class="table table-bordered">\n  ';
v={hash:{},inverse:s.noop,fn:s.program(1,h,o),data:o};
if(k=i.components){f=k.call(q,v)
}else{k=(q&&q.components);
f=typeof k===l?k.call(q,v):k
}if(!i.components){f=r.call(q,f,{hash:{},inverse:s.noop,fn:s.program(1,h,o),data:o})
}if(f||f===0){m+=f
}m+="\n  ";
v={hash:{},inverse:s.noop,fn:s.program(4,u,o),data:o};
if(k=i.total){f=k.call(q,v)
}else{k=(q&&q.total);
f=typeof k===l?k.call(q,v):k
}if(!i.total){f=r.call(q,f,{hash:{},inverse:s.noop,fn:s.program(4,u,o),data:o})
}if(f||f===0){m+=f
}m+="\n</table>\n";
return m
})
},{"hbsfy/runtime":60}],60:[function(b,c,a){c.exports=b("handlebars/runtime")["default"]
},{"handlebars/runtime":"handlebars/runtime"}]},{},[39]);