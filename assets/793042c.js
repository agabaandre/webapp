(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{703:function(t,e,n){"use strict";n.r(e);var r={props:{appointments:{type:Array,default:null}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Appointment Date",value:"appointmentDate",sortable:!0},{text:"Status",value:"status"},{text:"Patient",value:"patientId"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}}},l=n(44),o=n(49),c=n.n(o),d=n(238),v=n(576),f=n(126),m=n(240),h=n(567),_=n(106),y=n(71),k=n(572),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default "},[null==t.appointments.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.appointments,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VDataTable:v.a,VIcon:f.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:y.a,VTooltip:k.a})}}]);