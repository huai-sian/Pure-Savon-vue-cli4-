(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba22c152"],{"99af":function(t,e,a){"use strict";var s=a("23e7"),i=a("d039"),r=a("e8b5"),c=a("861d"),n=a("7b0b"),o=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),v=a("b622"),p=a("2d00"),f=v("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",C=p>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=u("concat"),_=function(t){if(!c(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},b=!C||!g;s({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,s,i,r,c=n(this),u=d(c,0),v=0;for(e=-1,s=arguments.length;e<s;e++)if(r=-1===e?c:arguments[e],_(r)){if(i=o(r.length),v+i>m)throw TypeError(h);for(a=0;a<i;a++,v++)a in r&&l(u,v,r[a])}else{if(v>=m)throw TypeError(h);l(u,v++,r)}return u.length=v,u}})},a434:function(t,e,a){"use strict";var s=a("23e7"),i=a("23cb"),r=a("a691"),c=a("50c4"),n=a("7b0b"),o=a("65f0"),l=a("8418"),d=a("1dde"),u=a("ae40"),v=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,m=Math.min,h=9007199254740991,C="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!v||!p},{splice:function(t,e){var a,s,d,u,v,p,g=n(this),_=c(g.length),b=i(t,_),y=arguments.length;if(0===y?a=s=0:1===y?(a=0,s=_-b):(a=y-2,s=m(f(r(e),0),_-b)),_+a-s>h)throw TypeError(C);for(d=o(g,s),u=0;u<s;u++)v=b+u,v in g&&l(d,u,g[v]);if(d.length=s,a<s){for(u=b;u<_-s;u++)v=u+s,p=u+a,v in g?g[p]=g[v]:delete g[p];for(u=_;u>_-s+a;u--)delete g[u-1]}else if(a>s)for(u=_-s;u>b;u--)v=u+s-1,p=u+a-1,v in g?g[p]=g[v]:delete g[p];for(u=0;u<a;u++)g[u+b]=arguments[u+2];return g.length=_-s+a,d}})},b449:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("Bannerimg",[a("ProgressStep",{attrs:{current:t.step}})],1),a("div",{staticClass:"container orders_check"},[a("h3",[t._v(t._s(t.$t("Checkorder.step_title")))]),a("ul",{staticClass:"order"},[t._l(t.cart,(function(e){return a("li",{key:e.id,staticClass:"pb-3 orderList"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 p-0"},[a("div",{staticClass:"pro-img"},[a("img",{attrs:{src:e.imageUrl,alt:e.title}})])]),a("div",{staticClass:"col-6 p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"pro-name"},[t._v(t._s(e.title))])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"numControl"},[a("button",{staticClass:"btn-minus",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.changeNum(e,-1)}}},[a("i",{staticClass:"fa fa-minus",attrs:{"aria-hidden":"true"}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"item.qty"}],staticClass:"amount",attrs:{type:"number",max:"10",min:"1"},domProps:{value:e.qty},on:{change:function(a){return t.changeAmount(e,e.qty)},input:function(a){a.target.composing||t.$set(e,"qty",a.target.value)}}}),a("button",{staticClass:"btn-plus",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.changeNum(e,1)}}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])])])]),a("div",{staticClass:"col-2 p-0"},[a("div",{staticClass:"pro_price"},[t._v("NT"+t._s(t._f("currency")(e.origin_price)))])]),a("div",{staticClass:"col-1 p-0"},[a("div",{staticClass:"pro_del",on:{click:function(a){return a.preventDefault(),t.removeCart(e)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])])})),a("li",{staticClass:"pt-4"},[a("div",{staticClass:"row summary"},[a("div",{staticClass:"col-7 p-0"},[t._v("共"+t._s(t.cartitemqty)+"件")]),a("div",{staticClass:"col-2 p-0"},[t._v(t._s(t.$t("Checkorder.summary")))]),a("div",{staticClass:"col-2 p-0"},[t._v("NT"+t._s(t._f("currency")(t.total)))]),a("div",{staticClass:"col-1 p-0"})])])],2),a("div",{staticClass:"gocheck"},[a("button",{staticClass:"btn-back",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$router.push("/productlist")}}},[a("i",[t._v(t._s(t.$t("Checkorder.back_btn")))])]),!0===t.clicked?a("button",{staticClass:"btn-check",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goNextPage(e)}}},[a("i"),t._v(t._s(t.$t("Checkorder.next")))]):a("button",{staticClass:"btn-check btn_confirmcart",class:{doubleclick:!0===t.preventDClicked},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.confirmCart(e)}}},[a("i"),t._v(t._s(t.$t("Checkorder.next_btn")))])]),a("div",{staticClass:"declare"},[a("div",{staticClass:"declare_left"},[t._v(t._s(t.$t("Checkorder.warning_title")))]),a("h5",[a("i",{staticClass:"fas fa-exclamation-circle"}),t._v(t._s(t.$t("Checkorder.notice_title")))]),a("ul",[a("li",[t._v(t._s(t.$t("Checkorder.notice1")))]),a("li",[t._v(t._s(t.$t("Checkorder.notice2")))]),a("li",[t._v(t._s(t.$t("Checkorder.notice3")))]),a("li",[t._v(t._s(t.$t("Checkorder.notice4")))]),a("li",[t._v(t._s(t.$t("Checkorder.notice5")))]),a("li",[t._v(t._s(t.$t("Checkorder.notice6")))])])])]),a("div",{staticClass:"modal fade",attrs:{id:"leaveWarn",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("p",[a("i",{staticClass:"fas fa-exclamation-circle"}),t._v(t._s(t.$t("Leavemodal.notice_txt")))])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-stay",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("Leavemodal.cancel")))]),a("button",{staticClass:"btn btn-leave",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("Leavemodal.leave")))])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title text-light",attrs:{id:"exampleModalLabel"}},[t._v("PURE SAVON")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=(a("99af"),a("4160"),a("c975"),a("a434"),a("159b"),a("faba")),c=a("c915"),n={name:"CheckOrders",components:{ProgressStep:c["a"],Bannerimg:r["a"]},data:function(){return{step:1,cart:[],cartLength:0,total:0,goNext:!1,clicked:!1,cartitemqty:0,isLoading:!1,preventDClicked:!1}},methods:{getCart:function(){var t=this;t.cart=JSON.parse(localStorage.getItem("cart"))||[],t.cartLength=t.cart.length,t.total=0,t.cartitemqty=0,t.cart.forEach((function(e){t.total+=e.total,t.cartitemqty+=e.qty})),0===t.cartLength&&(t.goNext=!0,t.$router.push("/productlist"))},changeNum:function(t,e){var a=parseInt(t.qty+e,10);this.changeAmount(t,a)},changeAmount:function(t,e){var a=this,s=-1;a.cart.length>0&&a.cart.forEach((function(e,a){e.id===t.id&&(s=a)})),a.cart[s].qty=e>=10?10:e<=1?1:e;var i=parseInt(a.cart[s].origin_price*a.cart[s].qty,10);a.cart[s].total=i,localStorage.setItem("cart",JSON.stringify(a.cart)),a.$bus.$emit("cart:get"),a.getCart()},removeCart:function(t){var e=this,a=e.cart.indexOf(t);e.cart.splice(a,1),localStorage.setItem("cart",JSON.stringify(e.cart)),e.$bus.$emit("cart:get"),e.$bus.$emit("message:push","已刪除購物車商品","success"),e.getCart()},confirmCart:function(){var t=this;t.preventDClicked=!0,t.isLoading=!0;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("exploreu","/cart");t.cart=JSON.parse(localStorage.getItem("cart"))||[],t.cart.forEach((function(a){var s={product_id:a.id,qty:a.qty,price:a.total};t.$http.post(e,{data:s}).then((function(e){e.data.success||t.$bus.$emit("message:push",e.data.message,"danger")}))})),setTimeout((function(){t.isLoading=!1,t.clicked=!0}),1e3)},goNextPage:function(){this.goNext=!0,this.$router.push("/billinginfo"),console.log("push")}},beforeRouteLeave:function(t,e,a){var s=this;s.goNext?a():($("#leaveWarn").modal("show"),$(".btn-stay").on("click",(function(){a(!1)})),$(".btn-leave").on("click",(function(){a()})))},created:function(){this.getCart()}},o=n,l=a("2877"),d=Object(l["a"])(o,s,i,!1,null,null,null);e["default"]=d.exports},c915:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progressStep"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"step",class:{now:1===t.current}},[a("p",[t._v(t._s(t.$t("Progress_step.step1")))])])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"step",class:{now:2===t.current}},[a("p",[t._v(t._s(t.$t("Progress_step.step2")))])])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"step",class:{now:3===t.current}},[a("p",[t._v(t._s(t.$t("Progress_step.step3")))])])])])])},i=[],r={name:"ProgressStep",props:["current"]},c=r,n=a("2877"),o=Object(n["a"])(c,s,i,!1,null,null,null);e["a"]=o.exports},c975:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").indexOf,r=a("a640"),c=a("ae40"),n=[].indexOf,o=!!n&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:o||!l||!d},{indexOf:function(t){return o?n.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},faba:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid bannerimg"},[t._t("default")],2)])},i=[],r={name:"Bannerimg"},c=r,n=a("2877"),o=Object(n["a"])(c,s,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-ba22c152.a5b7e504.js.map