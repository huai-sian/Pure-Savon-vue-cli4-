(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a04b04a"],{"055d":function(t,a,e){"use strict";e("2179")},2179:function(t,a,e){},"4a2f":function(t,a,e){"use strict";e("b1d9")},"56a6":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n=(e("4160"),e("a434"),e("159b"),{name:"AlertMessage",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:e}),this.removeMessageWithTiming(e)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(e,s){e.timestamp===t&&a.messages.splice(s,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(a,e){t.updateMessage(a,e)}))}}),r=n,o=(e("4a2f"),e("2877")),l=Object(o["a"])(r,s,i,!1,null,null,null);a["a"]=l.exports},"88e9":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container-fluid layout px-0"},[e("Navbar"),e("Alert"),e("transition",{attrs:{mode:"out-in",name:"fade"}},[e("router-view",{key:t.$router.fullPath,staticClass:"content"})],1),e("Totop"),e("Footer")],1)])},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-total fixed-top"},[e("div",{staticClass:"container-fluid"},[e("nav",{staticClass:"navbar"},[e("router-link",{staticClass:"nav-title",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-praying-hands"}),t._v("Pure Savon")])],1),e("div",{staticClass:"d-flex justify-content-end navContent"},[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn-store",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("router-link",{attrs:{to:"/productlist"}},[e("i",{staticClass:"fas fa-store"}),e("span",{staticClass:"d-none d-md-inline-block",staticStyle:{"font-size":"1.1rem align-self-center"}},[t._v(t._s(t.$t("Navigation_bar.goshop")))])])],1)]),e("div",{staticClass:"dropdown ml-md-5 ml-1"},[e("button",{staticClass:"btn-heart",class:{disabled:t.avoidClick},attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",id:"wishList"}},[e("i",{staticClass:"fas fa-heart"}),t.wishlength||0!==t.wishlength?e("span",{staticClass:"badge"},[t._v(t._s(t.wishlength))]):t._e()]),e("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-width p-2",attrs:{"aria-labelledby":"wishList"}},[t.wishlength||0!==t.wishlength?e("h4",{staticClass:"mb-2"},[t._v(t._s(t.$t("Navigation_bar.wishlist")))]):e("h4",[t._v(t._s(t.$t("Navigation_bar.wish_notice")))]),e("table",{staticClass:"table-cart table"},[e("tbody",t._l(t.wish,(function(a){return e("tr",{key:a.id,staticClass:"pb-0"},[e("td",{attrs:{width:"10%"}},[e("i",{staticClass:"fas fa-shopping-cart",on:{click:function(e){return e.preventDefault(),t.addTocart(a)}}})]),e("td",[e("div",{staticStyle:{width:"3rem",height:"3rem"}},[e("img",{staticClass:"img-fluid",attrs:{src:a.imageUrl,alt:a.title}})])]),e("td",{staticClass:"wish_title",attrs:{width:"50%"},on:{click:function(e){return e.preventDefault(),t.$router.push("/product_detail/"+a.id)}}},[t._v(t._s(a.title))]),e("td",{attrs:{width:"10%"}},[e("span",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.removeWish(a)}}},[t._v("X")])])])})),0)])])]),e("div",{staticClass:"dropdown ml-md-5"},[e("button",{staticClass:"btn-cart",class:{disabled:t.avoidClick},attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",id:"cartList"}},[e("i",{staticClass:"fas fa-shopping-cart"}),t.cartLength||0!==t.cartLength?e("span",{staticClass:"badge"},[t._v(t._s(t.cartLength))]):t._e()]),e("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-width p-2",attrs:{"aria-labelledby":"cartList"}},[e("h4",{staticClass:"mb-2"},[t._v(t._s(t.$t("Navigation_bar.cart")))]),t.cartLength&&0!==t.cartLength?t._e():e("p",[t._v(t._s(t.$t("Navigation_bar.cart_notice")))]),e("table",{staticClass:"table-cart table"},[e("tbody",t._l(t.cart,(function(a){return e("tr",{key:a.id,staticClass:"pb-0"},[e("td",[e("div",{staticStyle:{width:"3rem",height:"3rem"}},[e("img",{staticClass:"img-fluid",attrs:{src:a.imageUrl,alt:a.title}})])]),e("td",{staticClass:"wish_title",on:{click:function(e){return e.preventDefault(),t.$router.push("/product_detail/"+a.id)}}},[t._v(t._s(a.title))]),e("td",[t._v("x"+t._s(a.qty))]),e("td",[t._v(t._s(t._f("currency")(a.origin_price)))]),e("td",[e("span",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.removeCart(a.id)}}},[t._v("X")])])])})),0)]),e("div",{staticClass:"totalinfo"},[t.cartLength||0!==t.cartLength?e("div",{staticClass:"px-4",staticStyle:{display:"inline-block"}},[t._v(t._s(t.$t("Navigation_bar.total")))]):t._e(),t.cartLength||0!==t.cartLength?e("div",{staticClass:"totalnum",staticStyle:{display:"inline-block"}},[t._v(t._s(t._f("currency")(t.total)))]):t._e(),t.cartLength&&0!==t.cartLength?e("div",{staticClass:"btn btn-goCart",on:{click:function(a){return a.preventDefault(),t.$router.push("/checkorders")}}},[t._v(t._s(t.$t("Navigation_bar.gocheck")))]):e("div",{staticClass:"btn btn-goCart",on:{click:function(a){return a.preventDefault(),t.$router.push("/productlist")}}},[t._v(t._s(t.$t("Navigation_bar.gotoshop")))])])])])])])])])},r=[],o=(e("4160"),e("c975"),e("a434"),e("159b"),e("5530")),l={name:"Navigation_bar",data:function(){return{isClose:!1,cartLength:0,cart:[],total:0,wish:[],wishlength:0}},methods:{getCart:function(){var t=this;t.cart=JSON.parse(localStorage.getItem("cart"))||[],t.total=0,t.cartLength=0,t.cart.forEach((function(a){t.total+=a.total,t.cartLength+=a.qty}))},getWish:function(){var t=this;t.wish=JSON.parse(localStorage.getItem("wish"))||[],t.wishlength=t.wish.length},addTocart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=this,s=-1;if(e.getCart(),e.cart.length>0&&e.cart.forEach((function(a,e){a.id===t.id&&(s=e)})),-1===s){var i=parseInt(t.origin_price*a,10);e.$set(t,"qty",a),e.$set(t,"total",i),e.cart.push(t)}else{var n=Object(o["a"])({},e.cart[s]);n.qty+=a;var r=parseInt(t.origin_price*n.qty,10);n.total=r,e.cart.splice(s,1),e.cart.push(n)}localStorage.setItem("cart",JSON.stringify(e.cart)),e.getCart(),e.$bus.$emit("message:push","商品已加入購物車","success")},removeCart:function(t){var a=this,e=-1;a.cart.length>0&&a.cart.forEach((function(a,s){a.id===t&&(e=s)})),a.cart.splice(e,1),localStorage.setItem("cart",JSON.stringify(a.cart)),a.getCart()},removeWish:function(t){var a=this.wish.indexOf(t);this.wish.splice(a,1),localStorage.setItem("wish",JSON.stringify(this.wish)),this.getWish()}},computed:{avoidClick:function(){return("/checkorders"===this.$route.path||"/billinginfo"===this.$route.path)&&($("#wishList").dropdown("hide"),$("#cartList").dropdown("hide"),!0)}},created:function(){var t=this;this.getCart(),this.$bus.$on("cart:get",(function(){return t.getCart()})),this.getWish(),this.$bus.$on("wish:get",(function(){return t.getWish()}))}},c=l,u=e("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null),h=d.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("footer",[e("div",{staticClass:"container-fixed"},[e("div",{staticClass:"row d-flex align-items-center"},[t._m(0),t._m(1),e("div",{staticClass:"col-xs-12 language"},[t._v("語言： "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.lang,expression:"lang"}],staticClass:"lang_select",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.lang=a.target.multiple?e:e[0]},function(a){return a.preventDefault(),t.setlang(t.lang)}]}},[e("option",{attrs:{value:"tw",selected:""}},[t._v("繁體中文")]),e("option",{attrs:{value:"en"}},[t._v("English")])])])])])])])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-xs-12 contacts"},[e("span",{staticClass:"tel"},[t._v("TEL:(02)2495-0933"),e("br"),t._v("service@puresavon.com.tw")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-xs-12 socials"},[e("h6",[t._v("PURE & SIMPLE")]),e("a",{staticClass:"socialLink apart",attrs:{href:"#"}},[t._v("LINE")]),e("a",{staticClass:"socialLink apart",attrs:{href:"#"}},[t._v("FACEBOOK")]),e("a",{staticClass:"socialLink",attrs:{href:"#"}},[t._v("INSTAGRAM")])])}],v={name:"Footer",data:function(){return{lang:"tw"}},methods:{setlang:function(t){this.$i18n.locale=t,"en"===t?$("html").attr("lang","en"):$("html").attr("lang","zh-Hant-TW")}}},g=v,m=Object(u["a"])(g,f,p,!1,null,null,null),_=m.exports,b=e("56a6"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"toTop",on:{click:t.scrollTop}},[e("i",{staticClass:"fas fa-angle-double-up"})])])},w=[],y={name:"Totop",methods:{scrollTop:function(){$("html,body").animate({scrollTop:0},555)},autoTop:function(){$(window).scrollTop()>300?$(".toTop").fadeIn(222):$(".toTop").stop().fadeOut(222)}},mounted:function(){window.addEventListener("scroll",this.autoTop)},destroyed:function(){window.removeEventListener("scroll",this.autoTop)}},k=y,x=Object(u["a"])(k,C,w,!1,null,null,null),L=x.exports,S={name:"Layout",components:{Navbar:h,Alert:b["a"],Footer:_,Totop:L}},O=S,E=(e("055d"),Object(u["a"])(O,s,i,!1,null,"09489b46",null));a["default"]=E.exports},a434:function(t,a,e){"use strict";var s=e("23e7"),i=e("23cb"),n=e("a691"),r=e("50c4"),o=e("7b0b"),l=e("65f0"),c=e("8418"),u=e("1dde"),d=e("ae40"),h=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,a){var e,s,u,d,h,f,_=o(this),b=r(_.length),C=i(t,b),w=arguments.length;if(0===w?e=s=0:1===w?(e=0,s=b-C):(e=w-2,s=v(p(n(a),0),b-C)),b+e-s>g)throw TypeError(m);for(u=l(_,s),d=0;d<s;d++)h=C+d,h in _&&c(u,d,_[h]);if(u.length=s,e<s){for(d=C;d<b-s;d++)h=d+s,f=d+e,h in _?_[f]=_[h]:delete _[f];for(d=b;d>b-s+e;d--)delete _[d-1]}else if(e>s)for(d=b-s;d>C;d--)h=d+s-1,f=d+e-1,h in _?_[f]=_[h]:delete _[f];for(d=0;d<e;d++)_[d+C]=arguments[d+2];return _.length=b-s+e,u}})},b1d9:function(t,a,e){},c975:function(t,a,e){"use strict";var s=e("23e7"),i=e("4d64").indexOf,n=e("a640"),r=e("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2a04b04a.9eb87679.js.map