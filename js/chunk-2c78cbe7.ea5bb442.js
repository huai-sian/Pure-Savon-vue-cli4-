(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c78cbe7"],{"7db0":function(t,a,i){"use strict";var e=i("23e7"),r=i("b727").find,s=i("44d2"),c=i("ae40"),n="find",o=!0,u=c(n);n in[]&&Array(1)[n]((function(){o=!1})),e({target:"Array",proto:!0,forced:o||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(n)},"99af":function(t,a,i){"use strict";var e=i("23e7"),r=i("d039"),s=i("e8b5"),c=i("861d"),n=i("7b0b"),o=i("50c4"),u=i("8418"),l=i("65f0"),d=i("1dde"),p=i("b622"),f=i("2d00"),_=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=f>=51||!r((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),h=d("concat"),C=function(t){if(!c(t))return!1;var a=t[_];return void 0!==a?!!a:s(t)},b=!g||!h;e({target:"Array",proto:!0,forced:b},{concat:function(t){var a,i,e,r,s,c=n(this),d=l(c,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(s=-1===a?c:arguments[a],C(s)){if(r=o(s.length),p+r>m)throw TypeError(v);for(i=0;i<r;i++,p++)i in s&&u(d,p,s[i])}else{if(p>=m)throw TypeError(v);u(d,p++,s)}return d.length=p,d}})},a434:function(t,a,i){"use strict";var e=i("23e7"),r=i("23cb"),s=i("a691"),c=i("50c4"),n=i("7b0b"),o=i("65f0"),u=i("8418"),l=i("1dde"),d=i("ae40"),p=l("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),_=Math.max,m=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,a){var i,e,l,d,p,f,h=n(this),C=c(h.length),b=r(t,C),$=arguments.length;if(0===$?i=e=0:1===$?(i=0,e=C-b):(i=$-2,e=m(_(s(a),0),C-b)),C+i-e>v)throw TypeError(g);for(l=o(h,e),d=0;d<e;d++)p=b+d,p in h&&u(l,d,h[p]);if(l.length=e,i<e){for(d=b;d<C-e;d++)p=d+e,f=d+i,p in h?h[f]=h[p]:delete h[f];for(d=C;d>C-e+i;d--)delete h[d-1]}else if(i>e)for(d=C-e;d>b;d--)p=d+e-1,f=d+i-1,p in h?h[f]=h[p]:delete h[f];for(d=0;d<i;d++)h[d+b]=arguments[d+2];return h.length=C-e+i,l}})},faba:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"container-fluid bannerimg"},[t._t("default")],2)])},r=[],s={name:"Bannerimg"},c=s,n=i("2877"),o=Object(n["a"])(c,e,r,!1,null,null,null);a["a"]=o.exports},ff07:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"product_detail"},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("Bannerimg",[i("nav",{staticClass:"breadmark",attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push("/")}}},[t._v(t._s(t.$t("Product_detail.bread_home")))])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push("/productlist")}}},[t._v(t._s(t.$t("Product_detail.bread_store")))])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push({name:"Productlist",params:{series:t.product.category}})}}},[t._v(t._s(t.$t("Product_detail.series")))])]),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])])]),i("div",{staticClass:"container"},[i("div",{staticClass:"row product_info"},[i("div",{staticClass:"col-lg-6 col-md-7"},[i("div",{staticClass:"product_pic"},[i("img",{attrs:{src:t.product.imageUrl,alt:t.product.title}})])]),i("div",{staticClass:"col-lg-6 col-md-5"},[i("ul",{staticClass:"product_meta"},[i("li",[i("h3",[t._v(t._s(t.product.title))])]),i("li",[t.product.price?t._e():i("p",{staticClass:"origin_pricesolo"},[t._v("NT"+t._s(t._f("currency")(t.product.origin_price)))]),t.product.price?i("del",{staticClass:"origin_price"},[t._v("NT"+t._s(t._f("currency")(t.product.origin_price)))]):t._e()]),i("li",[t.product.price?i("p",{staticClass:"salesprice"},[t._v("NT"+t._s(t._f("currency")(t.product.price)))]):t._e()]),i("li",[i("div",{staticClass:"numControl"},[i("button",{staticClass:"btn-minus",attrs:{type:"button","data-quantity":"minus","data-field":"quantity"},on:{click:function(a){return a.preventDefault(),t.changeNum(-1)}}},[i("i",{staticClass:"fa fa-minus",attrs:{"aria-hidden":"true"}})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.productnum,expression:"productnum"}],staticClass:"amount",attrs:{type:"number",max:"10",min:"1"},domProps:{value:t.productnum},on:{change:function(a){return t.changeAmount(t.productnum)},input:function(a){a.target.composing||(t.productnum=a.target.value)}}}),i("button",{staticClass:"btn-plus",attrs:{type:"button","data-quantity":"plus","data-field":"quantity"},on:{click:function(a){return a.preventDefault(),t.changeNum(1)}}},[i("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])]),i("button",{staticClass:"btn-cart",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addToCart(t.product,t.productnum)}}},[i("i",{staticClass:"fas fa-shopping-cart"}),t._v("加入購物車")])]),i("li",[i("p",{staticClass:"product_des"},[t._v(t._s(t.product.description))])]),i("li",[i("p",{staticClass:"product_con"},[t._v(t._s(t.product.content))])])])])]),i("div",{staticClass:"product_intro"},[i("h4",{staticClass:"mb-4 h4"},[t._v(t._s(t.$t("Product_detail.howtouse_title")))]),i("p",[t._v(t._s(t.$t("Product_detail.howtouse")))]),i("h4",{staticClass:"mb-4 h4"},[t._v(t._s(t.$t("Product_detail.warning_title")))]),i("p",[t._v(t._s(t.$t("Product_detail.warning")))]),i("h4",{staticClass:"mb-4 h4"},[t._v(t._s(t.$t("Product_detail.notice_title")))]),i("div",{staticClass:"notice"},[i("div",{staticClass:"return"},[i("h4",{staticClass:"notice_title"},[i("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(t._s(t.$t("Product_detail.noticesub1"))),i("i",{staticClass:"fas fa-exclamation-triangle"})]),i("p",{staticClass:"notice_txt"},[t._v(t._s(t.$t("Product_detail.noticesub1_con")))])]),i("div",{staticClass:"aware"},[i("h4",{staticClass:"notice_title"},[i("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(t._s(t.$t("Product_detail.noticesub2"))),i("i",{staticClass:"fas fa-exclamation-triangle"})]),i("p",{staticClass:"notice_txt"},[t._v(t._s(t.$t("Product_detail.noticesub2_con")))])]),i("div",{staticClass:"ship"},[i("h4",{staticClass:"notice_title"},[i("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(t._s(t.$t("Product_detail.noticesub3"))),i("i",{staticClass:"fas fa-exclamation-triangle"})]),i("p",{staticClass:"notice_txt"},[t._v(t._s(t.$t("Product_detail.noticesub3_con")))])])])]),i("div",{staticClass:"related"},[i("h3",[t._v(t._s(t.$t("Product_detail.related")))]),i("hr"),i("div",{staticClass:"related_content row"},t._l(t.filterSimilars,(function(a){return i("div",{key:a.id,staticClass:"col-md-4 col-sm-6 col-12 d-flex justify-content-start align-item-center"},[i("div",{staticClass:"productCard",on:{click:function(i){return i.preventDefault(),t.goRelated(a.id)}}},[i("div",{staticClass:"top"},[i("img",{attrs:{src:a.imageUrl,alt:a.title}}),i("div",{staticClass:"tag"},[t._v("特價中")])]),i("div",{staticClass:"bottom"},[i("h3",[t._v(t._s(a.title))]),i("div",{staticClass:"price"},[t._v("NT$"+t._s(a.origin_price))])])])])})),0)])])],1)},r=[],s=(i("99af"),i("4de4"),i("7db0"),i("4160"),i("a434"),i("159b"),i("5530")),c=i("faba"),n={name:"Product_detail",components:{Bannerimg:c["a"]},data:function(){return{product:[],productId:"",similarproducts:[],productnum:1,cart:[],isLoading:!1}},methods:{getProduct:function(){var t=this;t.productId=t.$route.params.product_id,t.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("exploreu","/product/").concat(t.productId);t.$http.get(a).then((function(a){t.product=a.data.product,t.productnum=1,t.isLoading=!1}))},getSimilarproducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("exploreu","/products/all");t.$http.get(a).then((function(a){t.similarproducts=a.data.products}))},getCart:function(){var t=this;t.cart=JSON.parse(localStorage.getItem("cart"))||[]},addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this,e=-1;if(i.getCart(),i.cart.length>0&&i.cart.forEach((function(a,i){a.id===t.id&&(e=i)})),-1===e){var r=parseInt(t.origin_price*a,10);i.$set(t,"total",r),i.$set(t,"qty",a),i.cart.push(t)}else{var c=Object(s["a"])({},i.cart[e]);c.qty+=a;var n=parseInt(c.origin_price*c.qty,10);c.total=n,i.cart.splice(e,1),i.cart.push(c)}localStorage.setItem("cart",JSON.stringify(i.cart)),i.$bus.$emit("message:push","商品已加入購物車","success"),i.$bus.$emit("cart:get"),i.getCart()},changeNum:function(t){var a=this.productnum+t;this.changeAmount(a)},changeAmount:function(t){var a=t;this.productnum=a>=10?10:a<=1?1:a},goRelated:function(t){this.$router.push("/product_detail/".concat(t)),this.getProduct()},accordion:function(t){var a=t.currentTarget;$(a).toggleClass("active"),$(a).parent().find(".notice_txt").slideToggle(),$(a).parent().siblings().find(".notice_txt").slideUp(),$(a).parent().siblings().find(".notice_title").removeClass("active")}},computed:{filterSimilars:function(){var t=this;return t.similarproducts.filter((function(a){return a.id!==t.productId&&a.category===t.product.category&&a.is_enabled}))}},created:function(){this.getProduct(),this.getSimilarproducts(),this.getCart()}},o=n,u=i("2877"),l=Object(u["a"])(o,e,r,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2c78cbe7.ea5bb442.js.map