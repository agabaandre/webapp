(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{578:function(t,e,r){"use strict";var o=r(0),n=(r(35),r(54),r(185),r(6),r(9),r(44),r(53),r(10),r(7),r(11),r(12),r(5)),l=r(97),c=r(111);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},647:function(t,e,r){var content=r(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("01907af4",content,!0,{sourceMap:!1})},648:function(t,e,r){var o=r(14)(!1);o.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=o},768:function(t,e,r){"use strict";r(10),r(7),r(6),r(11),r(9),r(12);var o=r(0),n=(r(647),r(152)),l=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}}),c=r(18),d=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return f(f({},l.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,f({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},790:function(t,e,r){"use strict";r.r(e);r(44);var o={data:function(){return{readonly:!0,dialog:!1,valid:!1,show1:!1,show2:!1,show3:!1,show4:!1,edit:!1,progress:!1,confirmPassword:"",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},form_data:{oldPassword:"",newPassword:""}}},beforeCreate:function(){this.$store.dispatch("retrieve_profile")},methods:{updatepasssword:function(){this.$store.dispatch("_update_user_password",this.form_data)},updateprofile:function(){var t=this;this.progress=!0,delete this.user.staff.user,delete this.user.staff.department,this.$store.dispatch("updatestaff",this.user.staff).then((function(e){setTimeout((function(){return t.closeprofileupdate()}),t.delay_seconds)}))},closeprofileupdate:function(){this.$store.dispatch("retrieve_profile"),this.edit=!1,this.progress=!1},close:function(){this.$refs.form.reset(),this.dialog=!1,this.$store.dispatch("_clear_local_storage_and_sign_out")},getColor:function(t){return"user"===t?"yellow":"admin"===t?"blue darken-3 white--text":"moderator"===t?"green":"cyan"}},computed:{user:function(){return this.$store.getters.profile},passwordConfirmationRule:function(){var t=this;return function(){return t.form_data.newPassword===t.confirmPassword||"Password must match"}}}},n=r(34),l=r(47),c=r.n(l),d=r(143),v=r(768),f=r(231),h=r(87),m=r(241),_=r(570),w=r(561),y=r(559),x=r(235),k=r(578),C=r(124),O=r(233),P=r(571),j=r(563),V=r(103),$=r(70),B=r(88),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb "},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/me"}},[t._v("Profile")])],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[t.edit?r("v-card",{staticClass:"mb-4"},[r("v-toolbar",{attrs:{dark:"",color:"primary",flat:""}},[r("v-toolbar-title",[t._v(" Edit staff profile")]),t._v(" "),r("v-spacer"),t._v(" "),t.progress?r("div",[r("a",{staticClass:"light-blue--text"},[t._v("Please wait...")]),t._v(" "),r("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e()],1),t._v(" "),r("v-card-text",[r("v-form",{staticClass:"mt-3",attrs:{id:"check-update-profile-form"},on:{submit:function(e){return e.preventDefault(),t.updateprofile(e)}}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Username",readonly:t.readonly},model:{value:t.user.staff.username,callback:function(e){t.$set(t.user.staff,"username",e)},expression:"user.staff.username"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Full name"},model:{value:t.user.staff.fullName,callback:function(e){t.$set(t.user.staff,"fullName",e)},expression:"user.staff.fullName"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Phone"},model:{value:t.user.staff.contacts,callback:function(e){t.$set(t.user.staff,"contacts",e)},expression:"user.staff.contacts"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Level"},model:{value:t.user.staff.level,callback:function(e){t.$set(t.user.staff,"level",e)},expression:"user.staff.level"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Email "},model:{value:t.user.staff.email,callback:function(e){t.$set(t.user.staff,"email",e)},expression:"user.staff.email"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Thumbnail link",readonly:""},model:{value:t.user.staff.imageUrl,callback:function(e){t.$set(t.user.staff,"imageUrl",e)},expression:"user.staff.imageUrl"}})],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"button cancel",attrs:{dark:""},on:{click:function(e){t.edit=!t.edit}}},[t._v("\n          cancel\n        ")]),t._v(" "),r("v-btn",{staticClass:"button",attrs:{type:"submit",form:"check-update-profile-form"}},[t._v("\n          save Updates\n        ")])],1)],1):t._e(),t._v(" "),t.edit?t._e():r("v-card",{staticClass:"mx-auto default"},[r("v-toolbar",{attrs:{color:"primary",flat:"",dark:""}},[r("v-toolbar-title",[t._v(" User Profile")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn-toggle",{attrs:{borderless:"",rounded:""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[t.user.isStaff?r("v-btn",{staticClass:"button cancel",attrs:{medium:"",elevation:"2"},on:{click:function(e){t.edit=!t.edit}}},[r("v-icon",[t._v("mdi-pencil")]),t._v("edit")],1):t._e(),t._v(" "),null!=t.user?r("v-btn",t._g(t._b({staticClass:"button",attrs:{medium:"",elevation:"2"}},"v-btn",n,!1),o),[r("v-icon",{attrs:{small:""}},[t._v("mdi-lock")]),t._v("\n                  Change Password")],1):t._e()],1)]}}],null,!1,3220653009),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",{attrs:{flat:""}},[r("v-toolbar",{staticClass:"primary",attrs:{dark:"",flat:""}},[r("v-toolbar-title",[r("h3",[t._v("Update password")])])],1),t._v(" "),r("v-card-text",{staticClass:"pa-4"},[r("v-form",{ref:"form",staticClass:"mt-3",attrs:{id:"check-login-form"},on:{submit:function(e){return e.preventDefault(),t.updatepasssword(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock","append-icon":t.show1?"visibility":"visibility_off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password","error-count":"8",label:"Old password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.form_data.oldPassword,callback:function(e){t.$set(t.form_data,"oldPassword",e)},expression:"form_data.oldPassword"}}),t._v(" "),r("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":t.show2?"visibility":"visibility_off",rules:[t.rules.required,t.rules.min],type:t.show2?"text":"password","error-count":"8",label:"New password",placeholder:"********",name:"input-10-1",hint:"At least 8 characters",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.form_data.newPassword,callback:function(e){t.$set(t.form_data,"newPassword",e)},expression:"form_data.newPassword"}}),t._v(" "),r("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":t.show3?"visibility":"visibility_off",rules:[t.rules.required,t.rules.min,t.passwordConfirmationRule],type:t.show3?"text":"password","error-count":"8",label:"Confirm password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show3=!t.show3}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"button cancel",attrs:{small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),r("v-btn",{staticClass:"button",attrs:{small:"",type:"submit",disabled:!t.valid,form:"check-login-form"}},[t._v("\n                Update\n              ")])],1)],1)],1)],1),t._v(" "),null!=t.user?r("v-card-text",[r("v-form",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.user.username,label:"Username",readonly:t.readonly}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.user.email,label:"Email",readonly:t.readonly}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.user.createdDate,label:"Created At",readonly:t.readonly}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{value:t.user.lastModifiedDate,label:"Last Modified",readonly:t.readonly}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("h5",[t._v("Roles:")]),t._v(" "),t._l(t.user.roles,(function(e,i){return r("v-chip",{key:i,staticClass:"pa-1 mr-1 ",attrs:{color:t.getColor(e.name.toLowerCase()),small:""}},[t._v(t._s(e.name.toLowerCase()))])}))],2)],1)],1)],1)],1):r("v-card-text",[r("v-progress-circular",{attrs:{width:2,color:"primary",size:"20",indeterminate:""}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:v.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VChip:m.a,VCol:_.a,VContainer:w.a,VDialog:y.a,VDivider:x.a,VForm:k.a,VIcon:C.a,VProgressCircular:O.a,VRow:P.a,VSpacer:j.a,VTextField:V.a,VToolbar:$.a,VToolbarTitle:B.b})}}]);