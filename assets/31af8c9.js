(window.webpackJsonp=window.webpackJsonp||[]).push([[80,35],{601:function(e,t,r){"use strict";r.r(t);var n={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Consultant",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(e){this.$router.push("/consultations/"+e.id)},updatePagination:function(e){console.log(e)}}},o=r(36),c=r(48),l=r.n(c),d=r(235),v=r(591),f=r(125),m=r(237),h=r(582),_=r(106),k=r(72),x=r(587),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto default "},[null==e.services.length?r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):r("div",{attrs:{md12:""}},[r("v-data-table",{attrs:{dense:"",headers:e.headers,items:e.services,search:e.search,width:"100%"},on:{"click:row":e.handleClick,"update:page":e.updatePagination},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("h2",[r("strong",[e._v(e._s(e.$t(e.title)))])]),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(t){return[t.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-icon",e._g(e._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",o,!1),n),[e._v("mdi-check")])]}}],null,!0)},[e._v(" "),r("span",[e._v("Active")])]):r("div")]}},{key:"item.patientName",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(r.patientName)+" ( "+e._s(r.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(t){var n=t.item;return[null==n.staffName?r("p",[e._v("Unassigned")]):r("p",[e._v(e._s(n.staffName)+" ( "+e._s(n.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:d.a,VDataTable:v.a,VIcon:f.a,VProgressCircular:m.a,VSpacer:h.a,VTextField:_.a,VToolbar:k.a,VTooltip:x.a})},819:function(e,t,r){"use strict";r.r(t);var n={components:{"servicescard-component":r(601).default},data:function(){return{}},created:function(){this.$store.dispatch("retrieve_active_opd_services")},computed:{services:function(){return this.$store.getters.opds}}},o=r(36),c=r(48),l=r.n(c),d=r(237),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"breadcrumb  "},[r("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("label.breadcrumb.dashboard")))]),e._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/opd"}},[e._v(e._s(e.$t("label.breadcrumb.opd")))])],1),e._v(" "),null==e.services?r("v-progress-circular"):r("servicescard-component",{attrs:{services:e.services,title:"Active OPD consultations"}})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VProgressCircular:d.a})}}]);