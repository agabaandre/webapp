(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{677:function(e,t,d){"use strict";d.r(t);var n={props:{groups:{type:Array,default:null}},data:function(){return{editedIndex:-1,editedItemId:"",dialog:!1,search:"",headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Descriptions",value:"descriptions",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:0,name:"",descriptions:""},defaultItem:{id:0,name:"",descriptions:""}}},methods:{save:function(){this.editedIndex>-1?(Object.assign(this.groups[this.editedIndex],this.editedItem),this.$store.dispatch("update_medicine_group",this.editedItem)):(this.groups.push(this.editedItem),this.$store.dispatch("add_new_medicine_group",this.editedItem),this.$emit("update")),this.close()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.editedIndex=this.groups.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},deleteItem:function(){}},computed:{formTitle:function(){return-1===this.editedIndex?"New medicine  group":"Edit medicine group"}}},o=d(33),r=d(47),l=d.n(r),c=d(140),v=d(231),m=d(86),h=d(566),f=d(559),_=d(570),I=d(557),x=d(234),k=d(178),V=d(569),w=d(561),C=d(103),y=d(69),T=d(87),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",[d("v-data-table",{staticClass:"elevation-0 ",attrs:{headers:e.headers,items:e.groups,search:e.search,"items-per-page":15,"sort-by":"id",dense:""},scopedSlots:e._u([{key:"top",fn:function(){return[d("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[d("v-toolbar-title",[d("h3",[e._v("\n            Medicine groups\n          ")])]),e._v(" "),d("v-spacer"),e._v(" "),d("v-text-field",{attrs:{label:"Search by name/company/composition","single-line":"","hide-details":"",rounded:"",filled:"",height:"40"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v("  \n        "),d("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[e.isMdAndUp?d("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"button",elevation:"1",medium:"",dark:""}},"v-btn",o,!1),n),[d("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(e._s(e.$t("label.button.addnewgroup")))],1):d("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-normal",attrs:{color:"button",fab:"",small:"",dark:""}},"v-btn",o,!1),n),[d("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),d("v-card",[d("v-card-title",[d("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),d("v-divider"),e._v(" "),d("v-card-text",[d("v-container",[d("v-row",[d("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[d("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),d("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[d("v-text-field",{attrs:{label:"Descriptions"},model:{value:e.editedItem.descriptions,callback:function(t){e.$set(e.editedItem,"descriptions",t)},expression:"editedItem.descriptions"}})],1)],1)],1)],1),e._v(" "),d("v-card-actions",[d("v-spacer"),e._v(" "),d("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),d("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[d("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),e._v(" "),d("v-icon",{attrs:{small:"",color:"indigo darken-4"},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n        mdi-delete\n      ")])]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:c.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:h.a,VContainer:f.a,VDataTable:_.a,VDialog:I.a,VDivider:x.a,VIcon:k.a,VRow:V.a,VSpacer:w.a,VTextField:C.a,VToolbar:y.a,VToolbarTitle:T.b})}}]);