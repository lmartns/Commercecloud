(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{418:function(t,e,r){"use strict";r.r(e);var n=r(526),o=r(528),c=r(400),l=r(517),d=r(414),f=r(516),v=r(427),h={methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},m=r(81),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"el",style:{padding:t.$vuetify.breakpoint.mdAndUp?"0px 100px":""},attrs:{color:"surface",height:"80",app:""}},[e(v.a,{staticClass:"text-md-h5 font-weight-bold pointer primary--text",on:{click:function(e){return t.$router.push("/")}}},[t._v("\n    CloudWalk\n  ")]),t._v(" "),e(f.a),t._v(" "),e(c.a,{attrs:{nuxt:"",to:"/products",icon:""}},[e(d.a,{attrs:{size:"20"}},[t._v(" mdi-store-outline ")])],1),t._v(" "),t.$store.state.cart.cart.length>0?e(o.a,{attrs:{overlap:"",content:t.$store.state.cart.cart.length}},[e(c.a,{attrs:{nuxt:"",to:"/cart",icon:""}},[e(d.a,{attrs:{size:"20"}},[t._v(" mdi-cart-outline ")])],1)],1):e(c.a,{attrs:{nuxt:"",to:"/cart",icon:""}},[e(d.a,{attrs:{size:"20"}},[t._v(" mdi-cart-outline ")])],1),t._v(" "),e(l.a,{staticClass:"mx-md-5 mx-2",attrs:{vertical:""}}),t._v(" "),e(c.a,{attrs:{icon:""},on:{click:t.toggleTheme}},[e(d.a,{attrs:{size:"20"}},[t._v(" mdi-brightness-7 ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,r){"use strict";r.r(e);var n=r(400),o=r(416),c=r(414),l={data:function(){return{sm:[{icon:"mdi-facebook",link:"#"},{icon:"mdi-twitter",link:"#"},{icon:"mdi-instagram",link:"#"},{icon:"mdi-youtube",link:"#"}]}}},d=r(81),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"pa-md-10 pa-5 text-center",attrs:{tile:"",flat:"",color:"surface"}},[e("h2",{staticClass:"text-md-h6 font-weight-bold primary--text"},[t._v("CloudWalk")]),t._v(" "),e("div",{staticClass:"text-center"},t._l(t.sm,(function(a,i){return e(n.a,{key:"socialMedia-".concat(i),staticClass:"mr-2",attrs:{color:"surface",fab:"",depressed:""}},[e(c.a,[t._v(t._s(a.icon))])],1)})),1)])}),[],!1,null,null,null);e.default=component.exports},428:function(t,e,r){"use strict";r.r(e);var n=r(400),o=r(415),c=r(414),l=r(426),d={data:function(){return{showFab:!1}},methods:{checkScroll:function(){var t=window.scrollY;this.showFab=t>300},goUp:function(){this.$vuetify.goTo(0,{duration:1e3})}}},f=r(81),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(o.c,[e(n.a,{directives:[{def:l.b,name:"scroll",rawName:"v-scroll",value:t.checkScroll,expression:"checkScroll"},{name:"show",rawName:"v-show",value:t.showFab,expression:"showFab"}],attrs:{fixed:"",right:"",bottom:"",fab:"",color:"primary"},on:{click:t.goUp}},[e(c.a,[t._v("mdi-chevron-up")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},524:function(t,e,r){"use strict";r.r(e);var n=r(416),o=r(411),c=r(498),l=r(407),d=r(409),f=r(458),v=r(459),h=r(449),m=r(463),_=r(442),x=r(181),k=r(406),w=r(518),y=r(520),C=(r(19),r(201),r(31),r(28),r(25)),$=(r(18),r(6),r(82),r(47),r(73),r(71),{created:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("category").fetch();case 2:return t.categories=e.sent,e.next=5,t.$content("products").fetch();case 5:t.products=e.sent;case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{products:null,categories:null,search:null}},computed:{filteredProducts:function(){var t=this;return this.search&&this.products?this.products.filter((function(p){var e,r=t.search.toLowerCase(),n=p.name.toLowerCase(),o=p.price.toString(),c=(null===(e=p.salePrice)||void 0===e?void 0:e.toString())||"",l=p.ratings.toString();return n.includes(r)||o.includes(r)||c.includes(r)||l.includes(r)})):this.products||[]}}}),S=r(81),component=Object(S.a)($,(function(){var t=this,e=t._self._c;return e("div",[e("Nav"),t._v(" "),e(d.a,[e(k.a,{attrs:{dense:""}},[e(l.a,{attrs:{md:"3"}},[e("div",[e(y.a,{attrs:{"prepend-inner-icon":"mdi-magnify",outlined:"",clearable:"",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.$vuetify.breakpoint.mdAndUp?e(v.a,{attrs:{subheader:"",color:"transparent"}},[e(w.a,[t._v("Categories")]),t._v(" "),t._l(t.categories,(function(r,i){return e(h.a,{key:"category".concat(i),attrs:{link:""}},[e(m.a,[e(f.a,{attrs:{src:r.image}})],1),t._v(" "),e(_.a,[e(_.b,[t._v("\n                  "+t._s(r.name)+"\n                ")])],1)],1)}))],2):t._e()],1)]),t._v(" "),e(l.a,{attrs:{md:"9"}},[e(k.a,[t._l(t.filteredProducts,(function(p,i){return e(l.a,{key:"products".concat(p.id,"-").concat(i),attrs:{cols:"12",md:"6"}},[e(n.a,{staticClass:"el ma-2 mb-5 mr-5",attrs:{nuxt:"",to:"/products/".concat(p.id),color:"surface"}},[e(f.a,{attrs:{src:p.image,height:"300"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(k.a,{staticClass:"fill-height",attrs:{justify:"center",align:"center"}},[e(x.a,{attrs:{width:"2",size:"100",color:"primary",indeterminate:""}})],1)]},proxy:!0}],null,!0)}),t._v(" "),e(o.c,{staticClass:"text-md-body-1 font-weight-bold"},[t._v("\n                  "+t._s(p.name)+"\n                ")]),t._v(" "),e(o.a,{staticClass:"primary--text pb-3"},[t._v("\n                  "+t._s(t.$formatMoney(p.price))+"\n                ")]),t._v(" "),e(o.b,t._l(p.tags,(function(r,i){return e(c.a,{key:"prod".concat(p.id,"-").concat(i),staticClass:"mr-1",attrs:{"x-small":"",label:"",outlined:""}},[t._v("\n                    "+t._s(r)+"\n                  ")])})),1)],1)],1)}))],2)],1)],1)],1),t._v(" "),e("Footer"),t._v(" "),e("ScroolTop")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(418).default,Footer:r(419).default,ScroolTop:r(428).default})}}]);