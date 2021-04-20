(window.webpackJsonp=window.webpackJsonp||[]).push([[54,44],{585:function(t,e,r){"use strict";r.r(e);var n={props:{staff:{type:Object,default:null}}},l=r(33),o=r(47),c=r.n(o),m=r(140),d=r(231),f=r(86),v=r(566),_=r(178),h=r(184),C=r(141),w=r(237),V=r(34),k=r(569),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-1 pa-0",attrs:{flat:"",elevation:"1",color:"grey lighten-4"}},[r("v-list-item",{attrs:{ripple:"staff.id",to:"/staffs/"+t.staff.id}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:" font-weight-black ",domProps:{innerHTML:t._s(null==t.staff.fullName?t.staff.username:t.staff.fullName)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"light-blue--text font-italic",domProps:{innerHTML:t._s(t.staff.email)}})],1),t._v(" "),r("v-list-item-avatar",{attrs:{size:"60"}},[r("v-img",{attrs:{src:null==t.staff.imageUrl?t.thumbnail:t.staff.imageUrl}})],1)],1),t._v(" "),r("v-card-text",{staticClass:"ma-0 pa-0"},[r("v-row",{staticClass:"ma-0 pa-0",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mt-0 pa-0",attrs:{cols:"12",sm:"12",md:"7",align:"center"}},[r("v-btn",{attrs:{small:"",fab:"",text:""}},[r("v-icon",{attrs:{color:"blue",small:""}},[t._v("mdi-facebook")])],1),t._v(" "),r("v-btn",{attrs:{small:"",fab:"",text:""}},[r("v-icon",{attrs:{color:"purple darken-4",small:""}},[t._v("mdi-instagram")])],1),t._v(" "),r("v-btn",{attrs:{small:"",fab:"",text:""}},[r("v-icon",{attrs:{color:"blue",small:""}},[t._v("mdi-twitter")])],1)],1),t._v(" "),r("v-col",{staticClass:"mt-2 ",attrs:{cols:"12",sm:"12",align:"center",md:"5"}},[r("v-icon",{staticClass:"ml-4",attrs:{color:"blue","x-small":""}},[t._v("mdi-check-circle")]),t._v(" "),r("v-icon",{attrs:{color:"green","x-small":""}},[t._v("mdi-close-circle-outline")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:d.a,VCardText:f.c,VCol:v.a,VIcon:_.a,VImg:h.a,VListItem:C.a,VListItemAvatar:w.a,VListItemContent:V.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VRow:k.a})},808:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(29),r(20),r(585)),o={components:{"card-info":r(686).default,StaffCard:l.default},data:function(){return{department:null,staffs:null}},methods:{fetchdepartmentdata:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("departments/".concat(t.$route.params.id,"/")).then((function(e){t.department=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},fetchdepartmentstaffs:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/dep/".concat(t.$route.params.id,"/")).then((function(e){t.staffs=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},reUpdateProfile:function(){this.fetchdepartmentdata(),this.fetchdepartmentstaffs()}},created:function(){this.reUpdateProfile()},computed:{username:function(){return null==this.department?"":this.department.name}}},c=r(33),m=r(47),d=r.n(m),f=r(562),v=r(231),_=r(86),h=r(566),C=r(559),w=r(184),V=r(141),k=r(237),x=r(34),y=r(233),L=r(569),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.department?r("div",{staticClass:"breadcrumb"},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{attrs:{to:"/departments"}},[t._v("Departments")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/departments/"+this.$route.params.id}},[t._v(t._s(t.department.name))])],1):t._e(),t._v(" "),r("v-container",{attrs:{fluid:""}},[null==t.staffs||null==t.department?r("v-progress-circular",{attrs:{indeterminate:"",size:"50",color:"indigo"}}):r("v-card",{staticClass:"pa-2"},[r("v-card-title",[r("div",[null!=t.department?r("table",{staticClass:"pa-0",staticStyle:{width:"100%","text-align":"start"},attrs:{summary:"Patient infos"}},[t.department.id?r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"name"}},[t._v("\n                Department name:  \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.name))])])]):t._e(),t._v(" "),null!=t.department.parent?r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"parentname"}},[t._v("\n                Child of : \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.parent.name))])])]):t._e(),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"date"}},[t._v("\n                Opening date:  \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.openingDate)+" ")])])]),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"info"}},[t._v("\n                Descriptions:  \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.descriptions)+" ")])])])]):t._e()])]),t._v(" "),r("v-card-text",[r("h3",[r("strong",[t._v("Members:")])]),t._v(" "),t.staffs.length>0?r("v-row",{attrs:{"no-gutters":""}},t._l(t.staffs,(function(e,n){return r("v-col",{key:n,attrs:{cols:"12",sm:"12",md:"2"}},[r("v-card",{staticClass:"ma-1",attrs:{outlined:"",flat:"",to:"/staffs/"+e.id}},[r("v-list-item",{key:e.id},[r("v-list-item-avatar",[r("v-img",{attrs:{src:null==e.imageUrl?"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light":e.imageUrl}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:" font-weight-medium light-blue--text",domProps:{innerHTML:t._s(null==e.fullName?e.username:e.fullName)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"font-italic",domProps:{innerHTML:t._s(e.user.roles[0].name.toLowerCase())}})],1)],1)],1)],1)})),1):r("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v("\n          No staff is assigned in this department\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:f.a,VCard:v.a,VCardText:_.c,VCardTitle:_.d,VCol:h.a,VContainer:C.a,VImg:w.a,VListItem:V.a,VListItemAvatar:k.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VProgressCircular:y.a,VRow:L.a})}}]);