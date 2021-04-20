(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{685:function(t,e,n){"use strict";n.r(e);var o=n(3),l=(n(20),n(24),{props:{files:{type:Array,default:null}},data:function(){return{select:[],dialog:!1,viewdialog:!1,deletedialog:!1,loading:!1,file:void 0,currentFile:void 0,selectedfile:null,location:null,width:300,permissions:"ALL_FUNCTIONS, UPDATE_CONSULTATION",accepted:"image/*,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,.pdf,.doc,.xml,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"}},methods:{selectFile:function(t){this.progress=0,this.currentFile=t,this.loading=!1},deletefile:function(t){this.deletedialog=!0,this.file=t},uploadimagefile:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,(n=new FormData).append("file",t.currentFile),e.next=5,t.$api.$patch("/consultations/".concat(t.$route.params.id,"/").concat(t.location,"/"),n).then((function(e){null!==e&&(t.loading=!1,t.dialog=!1,t.currentFile=void 0),t.$emit("update-report")})).catch((function(t){console.log(t)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},toggle:function(){this.$refs.alert.toggle(),this.deletedialog=!1},viewfile:function(t){this.selectedfile=t,this.viewdialog=!0,console.log(t)},deleteimagefile:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$api.$delete("/consultations/".concat(t.$route.params.id,"/").concat(t.file.location,"/").concat(t.file.id)).then((function(e){t.loading=!1,t.deletedialog=!1,t.$emit("update-report")})).catch((function(t){console.log(t)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()}}}),r=n(33),c=n(47),d=n.n(c),v=n(562),f=n(140),m=n(231),_=n(86),h=n(566),w=n(559),y=n(557),x=n(664),k=n(178),C=n(184),V=n(766),T=n(767),F=n(569),S=n(768),$=n(561),R=n(69),U=n(87),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[t.deletedialog?n("v-alert",{ref:"alert",attrs:{color:"warning",border:"left",elevation:"1","colored-border":"",type:"warning",prominent:"",dismissible:"",transition:"scale-transition"},scopedSlots:t._u([{key:"close",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:t.toggle}},[n("v-icon",{attrs:{size:"32",color:"red"}},[t._v("mdi-close-circle")])],1)]},proxy:!0}],null,!1,4238499713)},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow"},[n("h3",[t._v("\n          Do you real want to delete this report file ?\n          "),n("strong",[t._v(t._s(t.file.name))])]),t._v("\n        Remember: This process will parmanently delete this file and you can\n        not undo after that\n      ")]),t._v(" "),n("v-col",{staticClass:"shrink"},[n("v-btn",{staticClass:"primary",attrs:{color:"primary",loading:t.loading,disabled:t.loading},on:{click:function(e){return e.stopPropagation(),t.deleteimagefile(e)}},scopedSlots:t._u([{key:"loader",fn:function(){return[n("span",{staticClass:"white--text"},[t._v("Deleting...")])]},proxy:!0}],null,!1,3155693433)},[t._v("Yes Delete")])],1)],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"mx-2 pt-2"},[n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[t.hasPermission(t.permissions)?n("v-btn",t._g(t._b({attrs:{color:"primary",small:"",outlined:""}},"v-btn",l,!1),o),[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-file-document\n          ")]),t._v("\n          Upload new report file")],1):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"pa-0 mb-4"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[t._v("Upload new patient medical examination report")])],1),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(t.location||"null"))]),t._v(" "),n("v-radio-group",{attrs:{row:"",mandatory:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}},[n("v-radio",{attrs:{label:"Laboratory",value:"laboratory"}}),t._v(" "),n("v-radio",{attrs:{label:"Radiology",value:"radiology"}})],1),t._v(" "),n("v-file-input",{attrs:{counter:"","show-size":"","small-chips":"",accept:t.accepted,label:"Medical examination report file","truncate-length":"27"},on:{change:t.selectFile}})],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(e){t.dialog=!1}}},[t._v("Deny")]),t._v(" "),n("v-btn",{staticClass:"primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:function(e){return t.uploadimagefile()}},scopedSlots:t._u([{key:"loader",fn:function(){return[n("span",[t._v("Uploading...")])]},proxy:!0}])},[t._v("Upload\n            "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n              mdi-cloud-upload\n            ")])],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.viewdialog,callback:function(e){t.viewdialog=e},expression:"viewdialog"}},[n("v-card",{attrs:{dark:""}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.viewdialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(null==t.selectedfile?"":t.selectedfile.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.viewdialog=!1}}},[t._v("\n              Save\n            ")])],1)],1),t._v(" "),null!=t.selectedfile?n("div",{staticClass:"pa-4 "},[t.selectedfile.type.startsWith("image/")?n("div",{staticClass:"d-flex flex-column justify-space-between align-center"},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"12",md:"2"}},[n("strong",[t._v("Image size : "+t._s(t.width))]),t._v(" "),n("v-slider",{staticClass:"align-self-stretch",attrs:{hint:"Height",min:"200",max:"1500",step:"1"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4",md:"9"}},[n("v-img",{attrs:{width:t.width,src:t.filebaseUri+t.selectedfile.url,"lazy-src":"https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png"}})],1)],1)],1)],1):"application/pdf"==t.selectedfile.type?n("div",[n("div",[n("v-pdf",{attrs:{src:t.selectedfile.url}})],1)]):t._e()]):t._e()],1)],1)],1),t._v(" "),n("v-row",t._l(t.files,(function(e,i){return n("v-col",{key:i,attrs:{md:"2",sm:"6"}},[n("v-card",{attrs:{outlined:""}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-text",[n("ul",[n("li",[t._v("File: "+t._s(e.type))]),t._v(" "),n("li",[t._v("Size: "+t._s(e.size))]),t._v(" "),n("li",[t._v("Unit: "+t._s(e.location))])])]),t._v(" "),n("v-card-actions",[n("v-container",{attrs:{fluid:""}},[n("v-btn",{attrs:{fab:"",elevation:"1",color:"warning","x-small":""},on:{click:function(n){return t.deletefile(e)}}},[n("v-icon",[t._v("\n                    mdi-trash-can-outline\n                  ")])],1)],1)],1)],1),t._v(" "),n("div",{class:"ma-3 fi fi-size-xl fi-round-md fi-"+e.type.split("/")[1],on:{click:function(n){return t.viewfile(e)}}},[n("div",{staticClass:"fi-content"},[t._v(t._s(e.type.split("/")[1]))])])])])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:v.a,VBtn:f.a,VCard:m.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCol:h.a,VContainer:w.a,VDialog:y.a,VFileInput:x.a,VIcon:k.a,VImg:C.a,VRadio:V.a,VRadioGroup:T.a,VRow:F.a,VSlider:S.a,VSpacer:$.a,VToolbar:R.a,VToolbarItems:U.a,VToolbarTitle:U.b})}}]);