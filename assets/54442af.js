(window.webpackJsonp=window.webpackJsonp||[]).push([[106,35,48],{586:function(t,e,n){"use strict";n.r(e);var r={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Consultant",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},l=n(44),o=n(49),c=n.n(o),f=n(238),v=n(576),d=n(126),m=n(240),h=n(567),_=n(106),y=n(71),x=n(572),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default "},[null==t.services.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VDataTable:v.a,VIcon:d.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:y.a,VTooltip:x.a})},703:function(t,e,n){"use strict";n.r(e);var r={props:{appointments:{type:Array,default:null}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Appointment Date",value:"appointmentDate",sortable:!0},{text:"Status",value:"status"},{text:"Patient",value:"patientId"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}}},l=n(44),o=n(49),c=n.n(o),f=n(238),v=n(576),d=n(126),m=n(240),h=n(567),_=n(106),y=n(71),x=n(572),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default "},[null==t.appointments.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.appointments,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VDataTable:v.a,VIcon:d.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:y.a,VTooltip:x.a})},835:function(t,e,n){"use strict";n.r(e);n(10),n(7),n(6),n(11),n(9),n(12);var r=n(0),l=n(2),o=(n(30),n(40),n(17),n(586)),c=n(703),f=n(77);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{"service-card":o.default,"appointment-component":c.default},data:function(){return{staffdata:null,staffpatients:[],services:[],allservices:null,tab:null}},methods:{getStaffById:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/")).then((function(e){t.staffdata=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getStaffPatinets:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/patients")).then((function(e){t.staffpatients=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAcitveAssignedServices:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?active=true")).then((function(e){null!==e&&(t.services=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getHistoricalAssignedServices:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?")).then((function(e){null!==e&&(t.allservices=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAppointments:function(){this.$store.dispatch("get_physician_appointments",this.$route.params.id)},handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}},created:function(){this.getStaffById(),this.getAcitveAssignedServices()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({desserts:{get:function(){return[{name:"Name",value:null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName},{name:"Role",value:"undefined"==this.staffdata.user?"No role":this.staffdata.user.roles[0].name.toLowerCase()},{name:"Depatment",value:null==this.staffdata.department?"Un-Assigned":this.staffdata.department.name},{name:"Work Shift",value:"6:00AM - 12:01PM"},{name:"Location",value:null==this.staffdata.department?"Not available":this.staffdata.department.extraId},{name:"Is Staff",value:"undefined"==this.staffdata.user.isStaff?"":this.staffdata.user.isStaff},{name:"Level",value:null==this.staffdata.level?"None":this.staffdata.level},{name:"Phone",value:null==this.staffdata.contacts?"None ":this.staffdata.contacts},{name:"Email",value:this.staffdata.email},{name:"Joining Date",value:(new Date).toISOString().slice(0,10)}]}},staffThumbnail:function(){return this.filebaseUri+this.staffdata.imageUrl}},Object(f.b)({appointments:"appointments"}))},m=n(44),h=n(49),_=n.n(h),y=n(241),x=n(238),k=n(87),w=n(574),C=n(565),V=n(126),O=n(187),P=n(240),S=n(575),$=n(322),A=n(782),N=n(851),j=n(847),T=n(779),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.staffdata?n("div",{staticClass:"breadcrumb "},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),n("router-link",{attrs:{to:"/staffs"}},[t._v(t._s(t.$t("label.breadcrumb.staffs")))]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/staffs/"+this.$route.params.id}},[t._v(t._s(null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName))])],1):t._e(),t._v(" "),n("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[null==t.staffdata?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("v-card",{attrs:{flat:"",tile:"",outlined:""}},[n("v-card-title",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-avatar",{attrs:{size:"82"}},[n("v-img",{attrs:{alt:"user",src:t.staffThumbnail,"lazy-src":t.thumbnil}})],1)],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-icon",{staticClass:"red--text lighten-4 mx-1"},[t._v("mdi-account-lock")]),t._v(" "),n("v-icon",{staticClass:"blue--text lighten-4 mx-1"},[t._v("mdi-camera")]),t._v(" "),n("v-icon",{staticClass:"orange--text mx-1"},[t._v("mdi-pencil")])],1),t._v(" "),n("v-card-text",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[t._l(t.desserts,(function(e){return n("tr",{key:e.name},[n("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.value))])])})),t._v(" "),n("tr")],2)]},proxy:!0}])})],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-tabs",{staticClass:"elevation-2",attrs:{"slider-color":"secondary","background-color":"primary","show-arrows":this.$vuetify.breakpoint.mobile,color:"secondary",left:"",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-account")]),t._v("Payroll")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:function(e){return e.stopPropagation(),t.getAppointments()}}},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-calendar")]),t._v(t._s(t.$t("label.tab.appointments")))],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-history")]),t._v(" Attandence")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Document")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Timeline")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:t.getHistoricalAssignedServices}},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("Consultations History")],1)])],1),t._v(" "),n("v-tabs-items",{attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("service-card",{attrs:{services:t.services}})],1),t._v(" "),n("v-tab-item",[n("appointment-component",{attrs:{appointments:t.appointments}})],1),t._v(" "),n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Attendance")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Document")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Timeline")])]),t._v(" "),n("v-tab-item",[null==t.allservices?n("v-progress-circular"):n("service-card",{attrs:{services:t.allservices}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VAvatar:y.a,VCard:x.a,VCardText:k.c,VCardTitle:k.d,VCol:w.a,VContainer:C.a,VIcon:V.a,VImg:O.a,VProgressCircular:P.a,VRow:S.a,VSimpleTable:$.a,VTab:A.a,VTabItem:N.a,VTabs:j.a,VTabsItems:T.a})}}]);