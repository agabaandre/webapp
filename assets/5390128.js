(window.webpackJsonp=window.webpackJsonp||[]).push([[3,32,33,34,36,37],{572:function(t,e,n){"use strict";var r=n(103);e.a=r.a},574:function(t,e,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2e2bc7da",content,!0,{sourceMap:!1})},575:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(18),n(70),n(6);var r=n(79),l=n(576),o=n(252),c=n(5);function d(t){t.preventDefault()}e.a=Object(c.a)(r.a,l.a,o.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},576:function(t,e,n){"use strict";var r=n(49),l=n(2);e.a=l.a.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},577:function(t,e,n){"use strict";n.r(e);var r={props:{services:{type:Array,default:null},title:{type:String,default:"Services"}},data:function(){return{search:null,headers:[{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Consultant",value:"staffName"},{text:"Is Active?",value:"isActive"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},l=n(33),o=n(47),c=n.n(o),d=n(231),v=n(570),h=n(178),f=n(233),m=n(561),_=n(103),x=n(69),y=n(565),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default "},[null==t.services.length?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("div",{attrs:{md12:""}},[n("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,width:"100%"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("h2",[n("strong",[t._v(t._s(t.$t(t.title)))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"search",label:"Enter search text ...",dense:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("div")]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VDataTable:v.a,VIcon:h.a,VProgressCircular:f.a,VSpacer:m.a,VTextField:_.a,VToolbar:x.a,VTooltip:y.a})},579:function(t,e,n){var content=n(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("12a190a6",content,!0,{sourceMap:!1})},580:function(t,e,n){var r=n(14)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=r},581:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},595:function(t,e,n){"use strict";n(10),n(8),n(6),n(11),n(9),n(12);var r=n(0),l=(n(18),n(70),n(579),n(574),n(28)),o=n(79),c=n(575);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v(v({},o.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v(v({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},618:function(t,e,n){var content=n(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("83ff91dc",content,!0,{sourceMap:!1})},619:function(t,e,n){var r=n(14)(!1);r.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=r},632:function(t,e,n){"use strict";n.r(e);var r={props:{patient:{type:Object,default:null}},data:function(){return{edit:!1,patientcp:this.patient,gender:["Male","Female","Unspecified"]}},methods:{submit:function(){var t=this;delete this.patientcp.contactsInformation,this.$store.dispatch("update_patient",this.patientcp).then((function(){t.edit=!1,t.fetchclientdata(t.$route.params.id)}))}}},l=n(33),o=n(47),c=n.n(o),d=n(140),v=n(231),h=n(86),f=n(595),m=n(566),_=n(178),x=n(569),y=n(175),w=n(322),k=n(561),C=n(103),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto default",attrs:{flat:""}},[n("v-card-text",[n("v-row",[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"12",md:"1",sm:"1"}},[n("v-btn",{staticClass:"mb-1",attrs:{color:"primary",fab:"",small:""},on:{click:function(e){t.edit=!t.edit}}},[n("v-icon",[t._v("mdi-account-edit")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[t.patient.id?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"id"}},[t._v("ID:")]),t._v(" "),n("td",[t._v(t._s(t.patient.id))])]):t._e(),t._v(" "),t.patient.name?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"name"}},[t._v("Full Name:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.name,callback:function(e){t.$set(t.patientcp,"name",e)},expression:"patientcp.name"}}):n("p",[t._v(t._s(t.patient.name))])],1)]):t._e(),t._v(" "),t.patient.gender?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"gender"}},[t._v("Gender:")]),t._v(" "),t.edit?n("td",[n("v-select",{attrs:{items:t.gender,"menu-props":{top:!0,offsetY:!0},label:"Select gender"},model:{value:t.patientcp.gender,callback:function(e){t.$set(t.patientcp,"gender",e)},expression:"patientcp.gender"}})],1):n("td",[t._v(t._s(t.patient.gender))])]):t._e(),t._v(" "),t.patient.age?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"age"}},[t._v("Age:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.age,callback:function(e){t.$set(t.patientcp,"age",e)},expression:"patientcp.age"}}):n("p",[t._v(t._s(t.patient.age))])],1)]):t._e(),t._v(" "),t.patient.phone?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"phone"}},[t._v("Phone No.")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.phone,callback:function(e){t.$set(t.patientcp,"phone",e)},expression:"patientcp.phone"}}):n("p",[t._v(t._s(t.patient.phone))])],1)]):t._e(),t._v(" "),t.patient.address?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"address"}},[t._v("Address.")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.address,callback:function(e){t.$set(t.patientcp,"address",e)},expression:"patientcp.address"}}):n("p",[t._v(t._s(t.patient.address))])],1)]):t._e(),t._v(" "),t.patient.emailAddress?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"email"}},[t._v("Email Address.")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.emailAddress,callback:function(e){t.$set(t.patientcp,"emailAddress",e)},expression:"patientcp.emailAddress"}}):n("p",[t._v(t._s(t.patient.emailAddress))])],1)]):t._e(),t._v(" "),t.patient.guardianName?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"guardian"}},[t._v("\n                  Guardian Name.\n                ")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.guardianName,callback:function(e){t.$set(t.patientcp,"guardianName",e)},expression:"patientcp.guardianName"}}):n("p",[t._v(t._s(t.patient.guardianName))])],1)]):t._e(),t._v(" "),t.patient.createdDate?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"createddate"}},[t._v("\n                  Created Date:\n                ")]),t._v(" "),n("td",[t._v(t._s(t.patient.createdDate))])]):t._e(),t._v(" "),t.patient.bloodPressure?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"bp"}},[t._v("BP:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.bloodPressure,callback:function(e){t.$set(t.patientcp,"bloodPressure",e)},expression:"patientcp.bloodPressure"}}):n("p",[t._v(t._s(t.patient.bloodPressure))])],1)]):t._e(),t._v(" "),t.patient.bloodGroup?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"bloodgroup"}},[t._v("\n                  Blood group:\n                ")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.bloodGroup,callback:function(e){t.$set(t.patientcp,"bloodGroup",e)},expression:"patientcp.bloodGroup"}}):n("p",[t._v(t._s(t.patient.bloodGroup))])],1)]):t._e(),t._v(" "),t.patient.height?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"height"}},[t._v("Height:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.height,callback:function(e){t.$set(t.patientcp,"height",e)},expression:"patientcp.height"}}):n("p",[t._v(t._s(t.patient.height))])],1)]):t._e(),t._v(" "),t.patient.weight?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"weight"}},[t._v("Weight:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.weight,callback:function(e){t.$set(t.patientcp,"weight",e)},expression:"patientcp.weight"}}):n("p",[t._v(t._s(t.patient.weight))])],1)]):t._e(),t._v(" "),t.patient.marriageStatus?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"marriage"}},[t._v("\n                  Maritial Status:\n                ")]),t._v(" "),n("td",[t._v(t._s(t.patient.marriageStatus))])]):t._e(),t._v(" "),n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"isamitted"}},[t._v("\n                  Is Admitted ?\n                ")]),t._v(" "),n("td",[n("v-checkbox",{attrs:{readonly:"",dense:""},model:{value:t.patientcp.isAdmitted,callback:function(e){t.$set(t.patientcp,"isAdmitted",e)},expression:"patientcp.isAdmitted"}})],1)]),t._v(" "),n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"isamitted"}},[t._v("\n                  Have user account ?\n                ")]),t._v(" "),n("td",[n("v-checkbox",{attrs:{readonly:"",dense:""},model:{value:t.patientcp.hasSelfServiceUserAccount,callback:function(e){t.$set(t.patientcp,"hasSelfServiceUserAccount",e)},expression:"patientcp.hasSelfServiceUserAccount"}})],1)]),t._v(" "),t.patient.allergies?n("tr",[n("td",{staticClass:"font-weight-black",attrs:{id:"allergies"}},[t._v("Allergies:")]),t._v(" "),n("td",[t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.patientcp.allergies,callback:function(e){t.$set(t.patientcp,"allergies",e)},expression:"patientcp.allergies"}}):n("p",[t._v(t._s(t.patient.allergies))])],1)]):t._e(),t._v(" "),t.edit?n("tr",[n("td"),t._v(" "),n("td",[n("v-btn",{staticClass:"primary",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.submit(e)}}},[t._v("Edit")])],1)]):t._e()])]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:h.c,VCheckbox:f.a,VCol:m.a,VIcon:_.a,VRow:x.a,VSelect:y.a,VSimpleTable:w.a,VSpacer:k.a,VTextField:C.a})},634:function(t,e,n){"use strict";n.r(e);var r={props:["type"]},l=n(33),o=n(47),c=n.n(o),d=n(234),v=n(235),h=n(141),f=n(237),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"ma-0"},[n("v-list-item",{staticClass:"ma-0 pa-0"},[n("v-list-item-avatar",{staticClass:"grey--text ma-0 mr-1 pa-1",attrs:{size:"45px"}},[n("span",{staticClass:"font-weight-regular text-caption text-uppercase black--text"},[t._v(t._s(t.type))])]),t._v(" "),n("v-divider")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VList:v.a,VListItem:h.a,VListItemAvatar:f.a})},635:function(t,e,n){"use strict";n.r(e);var r={props:["address"],data:function(){return{}},created:function(){console.log(this.address)}},l=n(33),o=n(47),c=n.n(o),d=n(140),v=n(141),h=n(34),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"ma-0 "},[n("v-list-item-title",{staticClass:"font-weight-bold"},[n("span",{staticClass:"text-subtitle-2 font-weight-bold"},[t._v(t._s(t.address.state))]),t._v("    \n        "),n("v-btn",{staticClass:"mb-1 primary--text",attrs:{small:"",depressed:"",color:"primary lighten-4"}},[t._v(t._s(t.address.zipcode))])],1),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[t._v("\n        "+t._s(t.address.city)+"\n      ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[t._v("\n        "+t._s(t.address.physical_address)+"\n      ")])],1)],1),t._v(" "),n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Contact Details")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[n("strong",[t._v("Mobile Phone: ")]),t._v("   "+t._s(t.address.work_phone)),n("br"),t._v(" "),n("strong",[t._v(" Home Phone:")]),t._v("   "+t._s(t.address.home_phone)+"\n      ")]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-light text-caption"},[n("strong",[t._v("Email Address: ")]),t._v("  "+t._s(t.address.email_address)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VListItem:v.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},636:function(t,e,n){"use strict";n.r(e);var r={components:{"service-card":n(577).default},props:{services:{type:Array,default:null}},data:function(){return{search:null,headers:[{text:"Status",value:"isActive"},{text:"ID",value:"id"},{text:"Patient Name",value:"patientName",sortable:!1},{text:"Consultant",value:"staffName"},{text:"From",value:"fromDate"},{text:"To",value:"toDate"}],body:{options:{page:1,itemsPerPage:5,sortBy:["patientName"]}}}},methods:{handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}}},l=n(33),o=n(47),c=n.n(o),d=n(559),v=n(570),h=n(178),f=n(233),m=n(565),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[null==t.services?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey",size:"24"}}):n("div",[n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.services,search:t.search,"mobile-breakpoint":"100"},on:{"click:row":t.handleClick,"update:page":t.updatePagination},scopedSlots:t._u([{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"blue lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-check-circle")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Active")])]):n("v-tooltip",{attrs:{right:"",color:"warning"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",l,!1),r),[t._v("mdi-close-circle")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Closed")])])]}},{key:"item.patientName",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.patientName)+" ( "+t._s(n.patientId)+")\n      ")]}},{key:"item.staffName",fn:function(e){var r=e.item;return[null==r.staffName?n("p",[t._v("Unassigned")]):n("p",[t._v(t._s(r.staffName)+" ( "+t._s(r.staffId)+")")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a,VDataTable:v.a,VIcon:h.a,VProgressCircular:f.a,VTooltip:m.a})},664:function(t,e,n){"use strict";n(10),n(8),n(6),n(11),n(12);var r=n(26),l=n(0),o=n(21),c=(n(17),n(35),n(39),n(29),n(24),n(104),n(9),n(42),n(618),n(572)),d=n(242),v=n(1),h=n(7),f=n(37);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(v.I)(t).every((function(t){return null!=t&&"object"===Object(o.a)(t)}))}}},computed:{classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(v.w)(e,1024===this.base))},internalArrayValue:function(){return Object(v.I)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,l=e.size,o=void 0===l?0:l,c=t.truncateText(r);return t.showSize?"".concat(c," (").concat(Object(v.w)(o,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(h.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(v.j)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(d.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(f.d)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=_(_({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(r.a)(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},671:function(t,e,n){var content=n(756);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("31fc6e97",content,!0,{sourceMap:!1})},686:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(36),n(78),n(24),n(42),n(20),n(632)),o=n(634),c=n(636),d=n(635),v={props:{userdata:{type:Object,default:null}},components:{"v-type-divider":o.default,"tb-biograph":l.default,"tb-services":c.default,"v-address-card":d.default},data:function(){return{dialog:!1,uploaddialog:!1,currentFile:void 0,rate:!1,tab:null,valid:!0,rating:2,posts:null,comments:null,admissions:null,followings:null,followers:null,selectedstaffId:null,date:(new Date).toISOString().substr(0,7),menu:!1,modal:!1,emptyIcon:"mdi-star-outline",fullIcon:"mdi-star",halfIcon:"mdi-star-half-full",address:null,staff:null,services:null,diagnoses:null,attrs:{class:"mb-6",boilerplate:!0,elevation:2}}},created:function(){this.address=this.userdata.contactsInformation,this.staff=this.userdata.staff,this.$store.dispatch("fetchAllStaffs")},computed:{entityThumbNail:function(){return this.userdata.patientPhoto},staffs:{get:function(){return this.$store.getters.staffs}}},methods:{selectFile:function(t){this.progress=0,this.currentFile=t},uploadPatientImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t.currentFile),e.next=4,t.$api.$patch("/patients/".concat(t.$route.params.id,"/images/"),n).then((function(e){null!==e&&(t.uploaddialog=!1,t.$emit("update-profile"))})).catch((function(t){console.log(t)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},deletePatientProfilePic:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.userdata.patientPhoto.split("/").pop()),e.next=3,t.$api.$delete("/patients/".concat(t.$route.params.id,"/images/").concat(t.userdata.patientPhoto.split("/").pop())).then((function(e){null!==e&&t.$emit("update-profile")})).catch((function(t){console.log(t)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},initiateServiceInstance:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("consultations/".concat(t.$route.params.id)).then((function(e){null!==e&&(t.getPatientServices(),t.$emit("update-profile"))})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getPatientServices:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/patient/".concat(t.$route.params.id)).then((function(e){null!==e&&(t.services=e.sort((function(a,b){return b.isActive-a.isActive})))})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},get_average_rgb:function(img){var t=document.createElement("canvas").getContext("2d");if("string"==typeof img){var e=img;(img=new Image).setAttribute("crossOrigin",""),img.src=e}return t.imageSmoothingEnabled=!0,t.drawImage(img,0,0,1,1),t.getImageData(1,1,1,1).data.slice(0,3)}}},h=(n(755),n(33)),f=n(47),m=n.n(f),_=n(140),x=n(231),y=n(86),w=n(242),k=n(566),C=n(559),V=n(557),S=n(234),I=n(664),$=n(567),O=n(178),P=n(184),A=n(235),j=n(141),D=n(237),N=n(34),T=n(123),z=n(233),E=n(569),L=n(561),F=n(765),M=n(828),B=n(824),R=n(762),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-row",[n("v-col",{attrs:{xs:"12",md:"3",sm:"12"}},[n("v-card",{attrs:{flat:""}},[n("v-img",{staticClass:"grey lighten-2 align-end",attrs:{src:t.filebaseUri+t.entityThumbNail,"lazy-src":"https://www.attendanceworks.org/wp-content/uploads/2020/09/img-placeholder.png","aspect-ratio":"1",height:"200px","max-height":"200px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[t._v(" "),n("v-card-title",[n("v-list",{staticClass:"default",attrs:{"three-line":"",flat:"",width:"100%"}},[n("v-list-item",[n("v-list-item-avatar",{attrs:{size:"60"}},[n("v-img",{attrs:{src:t.filebaseUri+t.entityThumbNail,"lazy-src":"https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.userdata.name))]),t._v(" "),t.userdata?n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.userdata.address)}}):n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.userdata.country)}})],1),t._v(" "),n("v-list-item-icon",[n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[null!=t.entityThumbNail?n("v-btn",{attrs:{color:"warning",fab:"","x-small":"",dark:""},on:{click:function(e){return e.stopPropagation(),t.deletePatientProfilePic()}}},[n("v-icon",[t._v("mdi-trash-can-outline")])],1):n("v-btn",t._g(t._b({attrs:{fab:"",color:"primary",dark:"","x-small":""}},"v-btn",l,!1),r),[n("v-icon",[t._v("mdi-progress-upload")])],1)]}}]),model:{value:t.uploaddialog,callback:function(e){t.uploaddialog=e},expression:"uploaddialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n                          Changing "+t._s(t.userdata.first_name)+" "+t._s(t.userdata.last_name)+"\n                          profile picture\n                        ")]),t._v(" "),n("v-card-text",[n("v-file-input",{attrs:{label:"Profile picture",accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera","show-size":""},on:{change:t.selectFile},scopedSlots:t._u([{key:"selection",fn:function(e){var text=e.text;return[n("v-chip",{attrs:{small:"",label:"",color:"primary"}},[t._v("\n                                "+t._s(text)+"\n                              ")])]}}])})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary","x-small":""},on:{click:function(e){e.stopPropagation(),t.uploaddialog=!1}}},[t._v("\n                            Cancel\n                          ")]),t._v(" "),n("v-btn",{attrs:{color:"warning","x-small":"",shaped:""},on:{click:function(e){return t.uploadPatientImage()}}},[t._v("\n                            Save\n                          ")])],1)],1)],1)],1)])],1)],1)],1)],1),t._v(" "),n("v-card-text",[n("p",{staticClass:"overline"},[t._v("Contacts")]),t._v(" "),n("v-divider"),t._v(" "),null!==t.address?n("v-flex",{staticClass:"ma-0 pa-0",attrs:{xs12:"",md12:""}},[n("v-address-card",{attrs:{address:t.address}})],1):t._e()],1),t._v(" "),n("v-card-actions",[n("v-col",[t.address?n("v-btn",{attrs:{small:"",block:"",color:"primary",to:"/patients/"+t.userdata.id+"/contacts/"}},[t._v("View contacts")]):n("v-btn",{attrs:{small:"",block:"",color:"primary",to:"/patients/"+t.userdata.id+"/contacts/add"}},[t._v("\n              Add contacts\n            ")]),t._v(" "),t.userdata.hasSelfServiceUserAccount?t._e():n("v-btn",{staticClass:"primary mt-2",attrs:{small:"",block:"",to:"/patients/"+t.userdata.id+"/selfservice"}},[t._v("\n              Create self service user\n            ")])],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{xs:"12",md:"9",sm:"12"}},[n("v-tabs",{attrs:{"slider-color":"blue","background-color":"#dcdcdc","slider-size":"3",left:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"ffont-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:"",color:"primary"}},[t._v("mdi-account-question")]),t._v("Biography")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:function(e){return e.stopPropagation(),t.getPatientServices()}}},[n("v-icon",{attrs:{small:"",left:"",color:"primary"}},[t._v("mdi-clock-check")]),t._v("\n          Consultations\n        ")],1)],1),t._v(" "),n("v-tabs-items",{attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{staticClass:"default"},[n("tb-biograph",{attrs:{patient:t.userdata}})],1),t._v(" "),n("v-tab-item",{staticClass:"default"},[n("div",{},[t.userdata.isActive?t._e():n("v-btn",{staticClass:"primary small ma-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.initiateServiceInstance()}}},[t._v("New consultation")]),t._v(" "),n("tb-services",{attrs:{services:t.services}})],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:_.a,VCard:x.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VChip:w.a,VCol:k.a,VContainer:C.a,VDialog:V.a,VDivider:S.a,VFileInput:I.a,VFlex:$.a,VIcon:O.a,VImg:P.a,VList:A.a,VListItem:j.a,VListItemAvatar:D.a,VListItemContent:N.a,VListItemIcon:T.a,VListItemSubtitle:N.b,VListItemTitle:N.c,VProgressCircular:z.a,VRow:E.a,VSpacer:L.a,VTab:F.a,VTabItem:M.a,VTabs:B.a,VTabsItems:R.a})},755:function(t,e,n){"use strict";n(671)},756:function(t,e,n){var r=n(14)(!1);r.push([t.i,".basil{background-color:#fffbe6!important}.basil--text{color:#356859!important}.v-item-group .v-window__container,.v-window,.v-window-item{width:100%}",""]),t.exports=r}}]);