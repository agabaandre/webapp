(window.webpackJsonp=window.webpackJsonp||[]).push([[61,10,11,12,13,14,45],{622:function(t,e,r){var content=r(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("175fbffc",content,!0,{sourceMap:!1})},625:function(t,e,r){"use strict";var o=r(112),n=r(38),l=r(5),c=r(7);e.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},654:function(t,e,r){"use strict";r(622)},655:function(t,e,r){var o=r(14)(!1);o.push([t.i,".outlined[data-v-286909d6]{color:#00f!important;border-color:#00f!important}",""]),t.exports=o},688:function(t,e,r){"use strict";r.r(e);r(17);var o={props:{height:{type:Number,default:350},data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,width:"100%",type:"pie",background:"transparent",toolbar:{show:!0},animation:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},stroke:{width:0},labels:this.data.chartOptions.labels,dataLabels:{enabled:!0,dropShadow:{blur:0,opacity:0}},fill:{colors:["#44FF07","#00A756"],type:"solid"},plotOptions:{pie:{customScale:.8,startAngle:-45,donut:{labels:{show:!0,total:{showAlways:!0,show:!1}}}}},legend:{position:"bottom",show:!1,markers:{fillColors:["#00897B","#ED1C23"]}},title:{text:this.data.title,align:"left",margin:0,offsetX:0,offsetY:0,floating:!0,style:{fontSize:"10px",color:"#263238",fontWeight:"12"}}}}}},n=r(33),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexchart",{attrs:{height:t.height,width:"90%",options:t.options,series:t.data.series}})}),[],!1,null,null,null);e.default=component.exports},689:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,type:"bar",toolbar:{show:!0,offsetY:25}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0},title:{text:"Services issued on Date",align:"center",margin:10,offsetX:0,offsetY:2,floating:!1,style:{fontSize:"16px",fontWeight:"18"}},xaxis:{categories:this.data.categories,title:{text:"Date"},labels:{show:!0,otate:180},crosshairs:{show:!1}},yaxis:{title:{text:"No. of issued services"},subtitle:{text:"No of issued services"},min:0},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5,itemMargin:{horizontal:5,vertical:15}}}}},created:function(){console.log(this.$vuetify.theme.dark)},computed:{dark:function(){return this.$vuetify.theme.dark}}},n=r(33),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{fluid:""}},[r("apexchart",{attrs:{height:"350",width:"98%",options:t.options,series:t.data.series}})],1)}),[],!1,null,null,null);e.default=component.exports},690:function(t,e,r){"use strict";r.r(e);var o={props:{item:{type:Object,default:null}},data:function(){return{}}},n=(r(654),r(33)),l=r(47),c=r.n(l),d=r(238),h=r(231),f=r(566),m=r(625),v=r(178),y=r(141),w=r(34),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"pa-1",attrs:{xs:"6",sm:"6",md:"2",xl:"1"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{staticClass:"default",attrs:{elevation:o?3:2}},[r("v-list-item",[r("v-avatar",{staticClass:"ml-0 mr-3",attrs:{color:t.item.color,size:"48"}},[r("v-icon",{attrs:{color:"white"},domProps:{textContent:t._s(t.item.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"font-weight-normal",domProps:{innerHTML:t._s(t.item.title)}}),t._v(" "),r("v-list-item-title",{staticClass:"text-h6 font-weight-black my-1",domProps:{innerHTML:t._s(t.item.value)}})],1)],1)],1)]}}])})],1)}),[],!1,null,"286909d6",null);e.default=component.exports;c()(component,{VAvatar:d.a,VCard:h.a,VCol:f.a,VHover:m.a,VIcon:v.a,VListItem:y.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c})},691:function(t,e,r){"use strict";r.r(e);r(17);var o={props:{height:{type:Number,default:350},data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,width:"100%",type:"donut",background:"transparent",toolbar:{show:!0},animation:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},stroke:{width:0},labels:this.data.chartOptions.labels,dataLabels:{enabled:!0,dropShadow:{}},fill:{type:"solid",colors:["#44FF07","#58508D","#BC5090","#FF6361","#FFA600"]},plotOptions:{pie:{customScale:.8,startAngle:-45,donut:{labels:{show:!0,total:{showAlways:!0,show:!1}}}}},legend:{position:"bottom",show:!1,markers:{}},title:{text:this.data.title,align:"left",margin:0,offsetX:0,offsetY:0,floating:!0,style:{fontSize:"10px",color:"#263238",fontWeight:"12"}}}}}},n=r(33),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexchart",{attrs:{height:t.height,width:"100%",options:t.options,series:t.data.series}})}),[],!1,null,null,null);e.default=component.exports},692:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Object,default:null}},data:function(){return{chartOptions:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",width:1},xaxis:{type:"date",categories:this.data.categories},yaxis:{title:{text:"Total"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return""+t}},x:{format:"dd/MM/yy"}}}}}},n=r(33),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"chart"}},[r("apexchart",{attrs:{type:"area",height:"280",options:t.chartOptions,series:t.data.series}})],1)}),[],!1,null,null,null);e.default=component.exports},693:function(t,e,r){"use strict";r.r(e);var o=r(26),n={props:{data:{type:Object,default:null}},data:function(){return{options:{chart:{height:350,type:"line",id:"areachart-2"},stroke:{width:4,curve:"smooth"},title:{text:"Number of consultation's conducted per day",align:"left",margin:10,offsetX:0,offsetY:2,floating:!1,style:{fontSize:"18px",fontWeight:"bold",color:"#666"}},xaxis:{categories:this.data.categories,tickAmount:10,title:{text:"Day in a month",fontWeight:"bold"},axisBorder:{show:!0,color:"#78909C",height:1,width:"100%",offsetX:0,offsetY:0}},yaxis:{title:{text:"No. of consultation`s"},subtitle:{text:"Number of patient consultations opened each day"},min:0,max:"undefined"===this.max?0:this.max,axisBorder:{show:!0,color:"#78909C",offsetX:0,offsetY:0,forceNiceScale:!0},axisTicks:{show:!0,borderType:"solid",color:"#78909C",width:6,offsetX:0,offsetY:0}},markers:{size:4,colors:["#FFA41B"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}}}},created:function(){},computed:{dark:function(){return this.$vuetify.theme.dark},max:function(){var t=this.data.series[0].data;return Math.max.apply(Math,Object(o.a)(t))+5}}},l=r(33),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("apexchart",{attrs:{height:"395",options:t.options,series:t.data.series}})],1)}),[],!1,null,null,null);e.default=component.exports},817:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(6),r(11),r(12);var o=r(0),n=r(3),l=(r(20),r(330),r(18),r(31),r(40),r(46),r(9),r(36),r(78),r(688)),c=r(689),d=r(690),h=r(691),f=r(692),m=r(693),v=r(77);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O,x={components:{"pie-chart":l.default,"bar-chart":c.default,"line-chart-gradient":m.default,summarycard:d.default,donutchart:h.default,"area-chart-spline":f.default},data:function(){return{apexdata:{series:[{name:"Trends",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}]},pie_options:{series:[44,55,13,33],chartOptions:{labels:["Apple","Mango","Orange","Watermelon"]}}}},methods:{percentCalculation:function(t,e){return+(t/e*100).toFixed(2)},syncro:(O=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).sync=!e.sync,t.next=4,Promise.all([e.$store.dispatch("retrievephysicians"),e.$store.dispatch("retrieve_statistics")]).then((function(){console.log("Loading complete...")}));case 4:setTimeout((function(){e.sync=!e.sync}),2e3);case 5:case"end":return t.stop()}}),t,this)}))),function(){return O.apply(this,arguments)})},mounted:function(){this.syncro();var t=window.localStorage.getItem("date");(null===t?(new Date).getTime()-2:t)-(new Date).getTime()>0||this.$store.dispatch("logout")},computed:w(w({},Object(v.b)({staffs:"staffStatistics",servicetrends:"serviceTrends",users:"userStatistics",patient:"patientStatistics",ward:"wardstatistics",services:"servicestatistics",patienttrends:"patienttrends"})),{},{statistics:function(){return this.$store.getters.statistics},patient_trends:{get:function(){return[{series:[this.patient.totalMale,this.patient.totalFemale],chartOptions:{labels:["Male ","Female"]},title:"Gender Composition"},{series:[this.services.totalOpd,this.services.totalIpd],chartOptions:{labels:["Out Patient Department(OPD)","In Patient Department (IPD) "]},title:"OPD Vs IPD in (%)"},{series:[this.services.totalActive,this.services.totalInActive],chartOptions:{labels:["Active","Inactive"]},title:"Consultations distribution"},{series:[this.services.totalAssigned,this.services.totalUnAssigned],chartOptions:{labels:["Assigned","Un-Assigned"]},title:"Consultations assignment"},{series:[this.ward.totalOccupied,this.ward.totalUnOccupied],chartOptions:{labels:["Occupied beds","Free beds"]},title:"Beds distributions"},{series:[this.users.totalUsers,this.users.totalStaffs],chartOptions:{labels:["Users","Staffs"]},title:"System users Vs Staff's"}]}},patient_items:{get:function(){return[{title:"Overall Total Patients",subtitle:"Overall Total Patients",value:this.patient.total,icon:"mdi-account-group-outline",color:"blue"},{title:"Males",subtitle:"Male Patients",value:this.patient.totalMale,icon:"mdi-gender-male",color:"indigo"},{title:"Females",subtitle:"Female patients",value:this.patient.totalFemale,icon:"mdi-gender-female",color:"deep-orange"},{title:"Others",subtitle:"Special Gender",value:this.patient.totalUnspecified,icon:"mdi-gender-male-female",color:"orange"}]}},user_items:{get:function(){return[{title:"Users",subtitle:"Users",value:this.users.totalUsers,icon:"mdi-account-star",color:"orange"},{title:"Staff's",subtitle:"Staff's",value:this.users.totalStaffs,icon:"mdi-account-supervisor",color:"orange"}]}},service_items:{get:function(){return[{title:"Total consultations",subtitle:"Total consultations",measure:"p/d",value:this.services.total,icon:"mdi-egg",color:"red"},{title:"Active consultations",subtitle:"Active consultations",measure:"p/d",value:this.services.totalActive,icon:"mdi-order-alphabetical-ascending",color:"red"},{title:"Inactive consultations",subtitle:"Inactive consultations",measure:"p/d",value:this.services.totalInActive,icon:"mdi-order-bool-ascending",color:"red"},{title:"Assigned consultations",subtitle:"Assigned consultations",measure:"p/d",value:this.services.totalAssigned,icon:"mdi-order-numeric-descending",color:"red"},{title:"Unassigned consultations",subtitle:"Unassigned consultations",value:this.services.totalUnAssigned,icon:"mdi-order-bool-ascending",color:"teal"},{title:" OPD",subtitle:"OPD  consultations",value:this.services.totalOpd,measure:"p/d",icon:"mdi-account-group-outline",color:"lime"},{title:"IPD ",subtitle:"IPD  consultations",measure:"p/d",value:this.services.totalIpd,icon:"mdi-bed",color:"green"},{title:"Physicians",subtitle:"No. of Physicians",value:this.$store.getters.physicians.length,icon:"mdi-doctor",color:"light-blue"}]}},ward_bed:{get:function(){return[{title:"Total beds",subtitle:"Total beds",value:this.ward.totalCount,icon:"mdi-bed-single",color:"brown"},{title:"Occupied beds",subtitle:"Occupied beds",value:this.ward.totalOccupied,icon:"mdi-bunk-bed",color:"grey"},{title:"Un-Occupied beds",subtitle:"Un-Occupied beds",value:this.ward.totalUnOccupied,measure:"pt/min",icon:"mdi-bed-empty",color:"cyan"}]}},bsc_size:{get:function(){return null==this.patienttrends?0:this.patienttrends.length}},bsc_chart:{get:function(){var t=this.patienttrends,e=new Array,r=new Array,o=new Array,n=new Array,l=new Array;return t.forEach((function(element){e.push(element.total),r.push(element.male),o.push(element.female),n.push(element.other),l.push(element.date)})),l.push(0),{series:[{name:"Total",data:e},{name:"Male",data:r},{name:"Female",data:o},{name:"Other",data:n}],categories:l}}},service_trends:{get:function(){var t=this.servicetrends,e=new Array,r=new Array;return void 0!==t&&t.forEach((function(element){e.push(element.total);var t=element.date;r.push(new Date(t).toISOString().split("T")[0])})),{series:[{name:"Service  issued",data:e}],categories:r}}}}),created:function(){}},_=r(33),A=r(47),C=r.n(A),S=r(231),j=r(86),k=r(566),P=r(559),D=r(625),T=r(233),F=r(569),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-2 pa-0 px-2",attrs:{fluid:""}},[t.statistics?r("div",[r("v-row",{staticClass:"mt-2",attrs:{justify:"start",align:"start"}},[[null==t.patient?r("v-progress-circular"):t._l(t.patient_items,(function(t,i){return r("summarycard",{key:i,attrs:{item:t}})})),t._v(" "),null==t.services?r("v-progress-circular"):t._l(t.service_items,(function(t,i){return r("summarycard",{key:t.title,attrs:{item:t}})})),t._v(" "),null==t.users?r("v-progress-circular"):t._l(t.user_items,(function(t,i){return r("summarycard",{key:t.title,attrs:{item:t}})})),t._v(" "),null==t.ward||null==t.ward?r("v-progress-circular"):t._l(t.ward_bed,(function(t,i){return r("summarycard",{key:t.title,attrs:{item:t}})}))]],2),t._v(" "),t.patienttrends?r("v-row",{staticClass:"mt-3",attrs:{justify:"start",align:"start"}},t._l(t.patient_trends,(function(e,i){return r("v-col",{key:i,staticClass:"ma-0 pa-0 mt-1",attrs:{cols:"12",sm:"6",md:"2"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var o=t.hover;return[r("v-card",{staticClass:"default mx-1",attrs:{elevation:o?3:1,dense:""}},[r("v-card-text",{staticClass:"ma-0"},[r("pie-chart",{attrs:{data:e,height:200}})],1)],1)]}}],null,!0)})],1)})),1):t._e(),t._v(" "),r("v-row",{staticClass:"mt-3",attrs:{justify:"start",align:"start"}},[r("v-col",{staticClass:"ma-0 pa-0 mt-2 ",attrs:{cols:"12",sm:"12"}},[r("v-card",{staticClass:"mr-1 ml-1 mx-auto default ",attrs:{height:"400",dense:""}},[r("line-chart-gradient",{attrs:{data:t.service_trends}})],1)],1),t._v(" "),t.bsc_size>0?r("v-col",{staticClass:"ma-0 pa-0 mt-3",attrs:{cols:"12",sm:"12"}},[r("v-card",{staticClass:"mr-1 ml-1 mx-auto default ",attrs:{dense:""}},[r("area-chart-spline",{staticClass:"ma-0 ",attrs:{data:t.bsc_chart}})],1)],1):t._e()],1)],1):r("div",[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}})],1)])}),[],!1,null,null,null);e.default=component.exports;C()(component,{VCard:S.a,VCardText:j.c,VCol:k.a,VContainer:P.a,VHover:D.a,VProgressCircular:T.a,VRow:F.a})}}]);