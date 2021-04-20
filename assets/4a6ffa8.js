(window.webpackJsonp=window.webpackJsonp||[]).push([[69,34],{577:function(t,e,r){"use strict";r.r(e);var n={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Consultant",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},c=r(33),o=r(47),l=r.n(o),v=r(231),d=r(570),f=r(178),m=r(233),h=r(561),_=r(103),k=r(69),x=r(565),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto default "},[null==t.services.length?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):r("div",{attrs:{md12:""}},[r("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("h2",[r("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",c,!1),n),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Active")])]):r("div")]}},{key:"item.patientName",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(r.patientName)+" ( "+t._s(r.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var n=e.item;return[null==n.staffName?r("p",[t._v("Unassigned")]):r("p",[t._v(t._s(n.staffName)+" ( "+t._s(n.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VDataTable:d.a,VIcon:f.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:k.a,VTooltip:x.a})},783:function(t,e,r){"use strict";r.r(e);var n={components:{"servicescard-component":r(577).default},data:function(){return{}},created:function(){this.$store.dispatch("retrieve_active_ipd_services")},computed:{services:function(){return this.$store.getters.ipds}}},c=r(33),o=r(47),l=r.n(o),v=r(233),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb  "},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/ipd"}},[t._v("In-patient Department")])],1),t._v(" "),null==t.services?r("v-progress-circular"):r("servicescard-component",{attrs:{services:t.services,title:"Active IPD consultations"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VProgressCircular:v.a})}}]);