webpackJsonp([2,0],[function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=e(18),n=a(i),o=e(89),r=a(o),l=e(109),c=a(l),d=e(108),u=a(d),f=e(92),v=a(f),p=e(94),_=a(p),h=e(95),C=a(h);n.default.use(c.default),n.default.use(u.default);var g=[{path:"/goods",component:v.default},{path:"/ratings",component:_.default},{path:"/sellers",component:C.default}],m=new c.default({routes:g,linkActiveClass:"active"});new n.default({el:"#app",router:m,template:"<App/>",components:{App:r.default}})},,,,,,,,,,,,,,,,function(t,s,e){var a,i;e(81),a=e(34);var n=e(100);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(79),a=e(43);var n=e(98);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},,function(t,s){"use strict";function e(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var n=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:a(n))}return s}function a(t){return("00"+t).substr(t.length)}Object.defineProperty(s,"__esModule",{value:!0}),s.formatDate=e},,,,,,,,,,,,,function(t,s,e){var a,i;e(86),a=e(40);var n=e(105);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(93),n=a(i);s.default={data:function(){return{seller:{}}},created:function(){this.$http.get("../testData/data.json").then(function(t){t=t.data,this.seller=t.seller})},components:{"v-header":n.default}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(18),n=a(i);s.default={props:["good"],methods:{addGood:function(t){t._constructed&&(this.good.count?this.good.count++:n.default.set(this.good,"count",1),this.$emit("addGood",t.target))},delGood:function(t){t._constructed&&this.good.count>0&&this.good.count--}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(16),n=a(i);s.default={props:["goods"],methods:{addGood:function(t){this.$emit("addGood",t)},clickGood:function(t,s){this.$emit("clickGood",[t,s])}},components:{cartControl:n.default}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(18),n=a(i),o=e(3),r=a(o),l=e(16),c=a(l),d=e(32),u=a(d),f=e(19),v=2;s.default={props:["good"],data:function(){return{goodDetailFlag:!1,selectType:v,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},filters:{formateDate:function(t){var s=new Date(t);return(0,f.formatDate)(s,"yyyy-MM-dd hh:mm")}},components:{cartcontrol:c.default,ratingselect:u.default},methods:{goodDetailShow:function(){this.goodDetailFlag=!0,this.$nextTick(function(){this.scroll?this.scroll.refresh():this.scroll=new r.default(this.$refs.goodDetail,{click:!0})})},hide:function(){this.goodDetailFlag=!1},buyTheGood:function(t){t._constructed&&n.default.set(this.good,"count",1)},addGood:function(t){this.$emit("addGood",t)},selectTypeChange:function(t){this.selectType=t,this.$nextTick(function(){this.scroll.refresh()})},contentToggle:function(){this.onlyContent=!this.onlyContent,this.$nextTick(function(){this.scroll.refresh()})},ratingShow:function(t,s){return!(this.onlyContent&&!s)&&(this.selectType===v||this.selectType===t)}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(48),n=a(i),o=e(3),r=a(o),l=e(90),c=a(l),d=e(96),u=a(d),f=e(91),v=a(f);s.default={props:["seller"],data:function(){return{goods:[],supportsType:["decrease","discount","special","invoice","guarantee"],scrollY:0,goodsListHeight:[],clickedGood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.goodsListHeight.length;t++){var s=this.goodsListHeight[t],e=this.goodsListHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectedGoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},components:{good:c.default,shopcart:u.default,gooddetail:v.default},methods:{initScroll:function(){this.menuScroll=new r.default(this.$refs.menuWrap,{click:!0}),this.detailScroll=new r.default(this.$refs.detailWrap,{click:!0,probeType:3});var t=this;this.detailScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},computedHeight:function(){var t=this.$refs.detailWrap.getElementsByClassName("goodsList-hook"),s=0;this.goodsListHeight=[s];for(var e=0;e<t.length;e++)s+=t[e].clientHeight,this.goodsListHeight.push(s)},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.detailWrap.getElementsByClassName("goodsList-hook"),a=e[t];this.detailScroll.scrollToElement(a,300)}},addGood:function(t){this.$nextTick(function(){this.$refs.shopcart.ballFall(t)})},clickGood:function(t){var s=(0,n.default)(t,2),e=s[0],a=s[1];a._constructed&&(this.clickedGood=e,this.$refs.gooddetail.goodDetailShow())}},created:function(){this.$http.get("../testData/data.json").then(function(t){t=t.data,this.goods=t.goods,this.$nextTick(function(){this.initScroll(),this.computedHeight()})})}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(17),n=a(i);s.default={props:["seller"],data:function(){return{supportsType:["decrease","discount","special","invoice","guarantee"],filterShow:!1}},methods:{showFilter:function(){this.filterShow=!0},hideFilter:function(){this.filterShow=!1}},components:{stars:n.default}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(17),n=a(i),o=e(32),r=a(o),l=e(19),c=e(3),d=a(c),u=2;s.default={props:{seller:{type:Object,default:{}}},data:function(){return{ratings:[],selectType:u,onlyContent:!1,desc:{all:"全部",positive:"满意",negative:"不满意"}}},components:{stars:n.default,ratingselect:r.default},created:function(){this.$http.get("../testData/data.json").then(function(t){t=t.body,this.ratings=t.ratings,this.$nextTick(function(){this.scroll=new d.default(this.$refs.ratings,{click:!0})})})},filters:{formateDate:function(t){var s=new Date(t);return(0,l.formatDate)(s,"yyyy-MM-dd hh:mm")}},methods:{selectTypeChange:function(t){this.selectType=t,this.$nextTick(function(){this.scroll.refresh()})},contentToggle:function(){this.onlyContent=!this.onlyContent,this.$nextTick(function(){this.scroll.refresh()})},ratingShow:function(t,s){return!(this.onlyContent&&!s)&&(this.selectType===u||this.selectType===t)}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=0,a=1,i=2;s.default={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:i},onlyContent:{type:Boolean,default:!0},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return t.rateType===e})},negatives:function(){return this.ratings.filter(function(t){return t.rateType===a})}},methods:{contentToggle:function(t){t._constructed&&this.$emit("contentToggle")},select:function(t,s){s._constructed&&this.$emit("selectTypeChange",t)}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(3),n=a(i),o=e(17),r=a(o),l=e(44);s.default={props:{seller:{type:Object,default:{}}},data:function(){return{supportsType:["decrease","discount","special","invoice","guarantee"],favorite:(0,l.loadLocal)(this.seller.id,"favorite",!1)}},components:{stars:r.default},methods:{_initScroll:function(){this.$nextTick(function(){this.scroll?this.scroll.refresh():this.scroll=new n.default(this.$refs.seller,{click:!0})})},_initPicScroll:function(){if(this.seller.pics){var t=120,s=6,e=(t+s)*this.seller.pics.length;this.$refs.picsList.style.width=e+"px",this.$nextTick(function(){this.picScroll=new n.default(this.$refs.picWrap,{scrollX:!0,eventPassthrough:"vertical"})})}},toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,(0,l.saveLocal)(this.seller.id,"favorite",this.favorite))}},watch:{seller:function(){this._initScroll(),this._initPicScroll()}},mounted:function(){this._initScroll(),this._initPicScroll()}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(3),n=a(i),o=e(16),r=a(o);s.default={props:["deliv-cost","selected-goods","min-price"],data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],failedBalls:[],foldList:!0}},components:{cartControl:r.default},computed:{goodsCost:function(){var t=0;return this.selectedGoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectedGoods.forEach(function(s){t+=s.count}),t},payStatus:function(){return 0===this.goodsCost?"¥"+this.minPrice+"起送":this.goodsCost<this.minPrice?"还差¥"+(this.minPrice-this.goodsCost)+"起送":"去结算"},listShow:function(){if(!this.totalCount)return this.foldList=!0,!1;var t=!this.foldList;return t&&this.$nextTick(function(){this.scroll?this.scroll.refresh():this.scroll=new n.default(this.$refs.listContent,{click:!0})}),t}},methods:{ballFall:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.target=t,void this.failedBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var a=e.target.getBoundingClientRect(),i=a.left-22,n=-(window.innerHeight-a.top-45);t.style.display="",t.style.webKitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var o=t.getElementsByClassName("innerBall")[0];o.style.webKitTransform="translate3d("+i+"px,0,0)",o.style.transform="translate3d("+i+"px,0,0)"}}},enter:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webKitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)",t.style.webkitTransition="all 0.5s cubic-bezier(.28,-0.29,.65,-0.03)",t.style.transition="all 0.5s cubic-bezier(.28,-0.29,.65,-0.03)";var s=t.getElementsByClassName("innerBall")[0];s.style.webKitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)",s.style.webkitTransition="all 0.5s linear",s.style.transition="all 0.5s linear"}),setTimeout(s,500)},afterEnter:function(t){var s=this.failedBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.foldList=!this.foldList)},emptyCart:function(){this.selectedGoods.forEach(function(t){t.count=0})},closeList:function(){this.foldList=!0},pay:function(){this.goodsCost<this.minPrice||window.alert("本次需要支付"+this.goodsCost+"元，不过现在还不能支付哦~")}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=5,a="on",i="half",n="off";s.default={props:["score","size"],data:function(){return{}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=this.score,o=0;o<e;o++)s>=1?(t.push(a),s-=1):s>=.5?(t.push(i),s-=1):t.push(n);return t}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,s,e){var a=window.localStorage.__seller__;a?(a=JSON.parse(a),a[t]||(a[t]={})):(a={},a[t]={}),a[t][s]=e,window.localStorage.__seller__=(0,r.default)(a)}function n(t,s,e){var a=window.localStorage.__seller__;if(!a)return e;if(a=JSON.parse(a)[t],!a)return e;var i=a[s];return i||e}Object.defineProperty(s,"__esModule",{value:!0});var o=e(47),r=a(o);s.saveLocal=i,s.loadLocal=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){var a,i;e(87),a=e(33);var n=e(106);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(85),a=e(35);var n=e(104);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(82),a=e(36);var n=e(101);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(83),a=e(37);var n=e(102);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(84),a=e(38);var n=e(103);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(88),a=e(39);var n=e(107);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(80),a=e(41);var n=e(99);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s,e){var a,i;e(78),a=e(42);var n=e(97);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,t.exports=a},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcartWrap"},[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"cart-icon",class:{cartNotEmpty:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart"}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"goods-cost",class:{totalNotEmpty:t.totalCount>0}},[t._v("¥"+t._s(t.goodsCost))]),t._v(" "),e("div",{staticClass:"deliv-cost"},[t._v("另需配送费¥"+t._s(t.delivCost)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:{uCanPay:t.goodsCost>=t.minPrice},domProps:{innerHTML:t._s(t.payStatus)},on:{click:function(s){s.stopPropagation(),t.pay(s)}}})]),t._v(" "),e("div",{staticClass:"ballsContainer"},t._l(t.balls,function(s){return e("transition",{attrs:{name:"ballFall"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ballWrap"},[e("div",{staticClass:"innerBall"})])])})),t._v(" "),e("transition",{attrs:{name:"toggleList"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcartList"},[e("div",{staticClass:"listHeader clearF"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"emptyCart",on:{click:t.emptyCart}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"listContent"},[e("ul",t._l(t.selectedGoods,function(s){return e("li",{staticClass:"good"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("¥")]),t._v(t._s(s.price*s.count)+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"cartControlWrap"},[e("cartControl",{attrs:{good:s},on:{addGood:t.ballFall}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"listFilterShow"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"listFilter",on:{click:t.closeList}})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"stars",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"itemClass",class:t})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"sellerContent"},[e("div",{staticClass:"overView"},[e("div",{staticClass:"brefInfo"},[e("h1",{staticClass:"sellerName"},[t._v(t._s(t.seller.name))]),t._v(" "),e("stars",{attrs:{score:t.seller.score,size:36}}),t._v(" "),e("span",{staticClass:"ratingCount"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"delivInfo"},[e("div",{staticClass:"delivItem"},[e("span",{staticClass:"delivInfoText"},[t._v("起送价")]),t._v(" "),e("p",{staticClass:"delivInfoCon"},[e("span",{staticClass:"detailNum"},[t._v(t._s(t.seller.minPrice))]),t._v("元")])]),t._v(" "),e("div",{staticClass:"delivItem"},[e("span",{staticClass:"delivInfoText"},[t._v("商家配送")]),t._v(" "),e("p",{staticClass:"delivInfoCon"},[e("span",{staticClass:"detailNum"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元")])]),t._v(" "),e("div",{staticClass:"delivItem"},[e("span",{staticClass:"delivInfoText"},[t._v("平均配送时间")]),t._v(" "),e("p",{staticClass:"delivInfoCon"},[e("span",{staticClass:"detailNum"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟")])])]),t._v(" "),e("div",{staticClass:"collect",on:{click:t.toggleFavorite}},[e("div",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),t.favorite?e("span",{staticClass:"yishoucang"},[t._v("已收藏")]):e("span",{staticClass:"weishoucang"},[t._v("收藏")])])]),t._v(" "),e("div",{staticClass:"bAndS"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("p",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"supportsItem"},[e("span",{staticClass:"brand",class:t.supportsType[s.type]}),e("span",{staticClass:"supportDetail"},[t._v(t._s(s.description))])])}))]),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrap",staticClass:"picWrap"},[e("ul",{ref:"picsList",staticClass:"clearF"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"picItem"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("div",{staticClass:"infos"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"infosItem"},[t._v(t._s(s))])}))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartControl"},[e("transition",{attrs:{name:"delShow"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.good.count>0,expression:"good.count>0"}],staticClass:"deletWrap",on:{click:function(s){s.stopPropagation(),t.delGood(s)}}},[e("span",{staticClass:"delInner icon-remove_circle_outline"})])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.good.count>0,expression:"good.count>0"}],staticClass:"num"},[t._v(t._s(t.good.count))]),t._v(" "),e("span",{staticClass:"add icon-add_circle",on:{click:function(s){s.stopPropagation(),t.addGood(s)}}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"goodDetailShow"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.goodDetailFlag,expression:"goodDetailFlag"}],ref:"goodDetail",staticClass:"goodDetail"},[e("div",[e("div",{staticClass:"goodAvatar"},[e("img",{attrs:{src:t.good.image,alt:"avatar"}}),t._v(" "),e("div",{staticClass:"detailBack",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"shopName"},[e("h1",{staticClass:"name"},[t._v(t._s(t.good.name))]),t._v(" "),e("p",{staticClass:"sellInfo"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(t.good.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"shopRating"},[t._v("好评率"+t._s(t.good.rating)+"%")])]),t._v(" "),e("p",{staticClass:"price"},[e("span",{staticClass:"rmb"},[t._v("¥")]),e("span",{staticClass:"priceNow"},[t._v(t._s(t.good.price))]),t._v(" "),t.good.oldPrice?e("span",{staticClass:"oldPrice"},[t._v("¥"+t._s(t.good.oldPrice))]):t._e()]),t._v(" "),e("div",{staticClass:"addToCart",on:{click:function(s){s.stopPropagation(),t.addGood(s.target)}}},[t.good.count?t.good.count>0?e("div",{staticClass:"cartContr"},[e("cartcontrol",{attrs:{good:t.good},on:{addGood:t.addGood}})],1):t._e():e("div",{staticClass:"addCart",on:{click:t.buyTheGood}},[t._v("加入购物车")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.good.info,expression:"good.info"}],staticClass:"goodInfo"},[e("h1",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("p",[t._v(t._s(t.good.info))])]),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{ratings:t.good.ratings,"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc},on:{selectTypeChange:t.selectTypeChange,contentToggle:t.contentToggle}}),t._v(" "),t.good.ratings&&t.good.ratings.length?e("ul",{staticClass:"ratingWrap"},t._l(t.good.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.ratingShow(s.rateType,s.text),expression:"ratingShow(item.rateType,item.text)"}],staticClass:"ratingItem"},[e("div",{staticClass:"user"},[e("span",{staticClass:"username"},[t._v(t._s(s.username))]),e("img",{staticClass:"useravatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"rateTime"},[t._v(t._s(t._f("formateDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"rateContent"},[e("span",{staticClass:"rateType",class:{"icon-thumb_up":!s.rateType,"icon-thumb_down":s.rateType}}),t._v(t._s(s.text)+"\n\t\t\t\t\t\t")])])})):e("div",{staticClass:"noRatings"},[t._v("暂无对应商品评价~")])],1)])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrap",staticClass:"goodsMenuWrap"},[t.goods?e("ul",t._l(t.goods,function(s,a){return e("li",{class:{current:t.currentIndex==a},on:{click:function(s){t.selectMenu(a,s)}}},[e("span",{staticClass:"goodsMenu"},[s.type>=0?e("span",{staticClass:"supportsBrand",class:t.supportsType[s.type]}):t._e(),t._v(t._s(s.name))])])})):t._e()]),t._v(" "),e("div",{ref:"detailWrap",staticClass:"goodsDetailWrap"},[t.goods?e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"goodsList goodsList-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("good",{attrs:{goods:s},on:{addGood:t.addGood,clickGood:t.clickGood}})],1)})):t._e()]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"deliv-cost":t.seller.deliveryPrice,"min-price":t.seller.minPrice,"selected-goods":t.selectedGoods}}),t._v(" "),e("gooddetail",{ref:"gooddetail",attrs:{good:t.clickedGood},on:{addGood:t.addGood}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),t.seller.supports?e("p",{staticClass:"supports"},[e("span",{staticClass:"brand",class:t.supportsType[t.seller.supports[0].type]}),e("span",{staticClass:"supDescription"},[t._v(t._s(t.seller.supports[0].description))]),t._v(" "),e("span",{staticClass:"supportsNum",on:{click:t.showFilter}},[t._v(t._s(t.seller.supports.length)+"个"),e("i",{staticClass:"icon-keyboard_arrow_right"})])]):t._e()])]),t._v(" "),e("div",{staticClass:"announcement-wrap",on:{click:t.showFilter}},[e("span",{staticClass:"annouce-brand"}),e("span",{staticClass:"annouce-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background-wrap"},[e("img",{attrs:{src:t.seller.avatar,width:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.filterShow,expression:"filterShow"}],staticClass:"filter"},[e("div",{staticClass:"detail-wrap",attrs:{clearF:""}},[e("div",{staticClass:"detail-main"},[e("h1",[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"stars-wrap"},[e("stars",{attrs:{score:t.seller.score,size:48}})],1),t._v(" "),e("div",{staticClass:"discountInfo"},[e("div",{staticClass:"divLine"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"divLine"})]),t._v(" "),t.seller.supports?e("div",{staticClass:"supportsList"},t._l(t.seller.supports,function(s){return e("p",[e("span",{staticClass:"brand",class:t.supportsType[s.type]}),e("span",{staticClass:"supportDetail"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"discountInfo"},[e("div",{staticClass:"divLine"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"divLine"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideFilter}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",t._l(t.goods.foods,function(s){return e("li",{staticClass:"singleGoodWrap",on:{click:function(e){e.stopPropagation(),t.clickGood(s,e)}}},[e("div",{staticClass:"singleGood clearF"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),s.description?e("p",{staticClass:"description"},[t._v(t._s(s.description))]):t._e(),t._v(" "),s.sellCount||s.rating?e("p",{staticClass:"sellInfo"},[s.sellCount?e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]):t._e(),s.rating?e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")]):t._e()]):t._e(),t._v(" "),e("p",{staticClass:"priceInfo"},[e("span",{staticClass:"priceTag"},[t._v("¥")]),e("span",{staticClass:"price"},[t._v(t._s(s.price))]),s.oldPrice?e("span",{staticClass:"oldPrice"},[t._v("¥"+t._s(s.oldPrice))]):t._e()])]),t._v(" "),e("div",{staticClass:"cartControllWrap"},[e("cartControl",{attrs:{good:s},on:{addGood:t.addGood}})],1)])])}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingSelect"},[e("div",{staticClass:"selectType"},[e("span",{staticClass:"all",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("i",{staticClass:"num"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("i",{staticClass:"num"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("i",{staticClass:"num"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch"},[e("i",{staticClass:"icon-check_circle",class:{on:t.onlyContent},on:{click:t.contentToggle}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/sellers"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratingsWrap"},[e("div",{staticClass:"ratings"},[e("div",{staticClass:"overView"},[e("div",{staticClass:"overViewLeft"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("p",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("p",{staticClass:"rankRate"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overViewRight"},[e("div",{staticClass:"scoreWrap"},[e("span",{staticClass:"title"},[t._v("服务态度")]),e("stars",{attrs:{score:t.seller.serviceScore,size:36}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"scoreWrap"},[e("span",{staticClass:"title"},[t._v("商品评价")]),e("stars",{attrs:{score:t.seller.foodScore,size:36}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delInfoWrap"},[e("span",{staticClass:"title"},[t._v("送达时间")]),e("span",{staticClass:"deliveryTime"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"ratingSelectWrap"},[e("ratingselect",{attrs:{ratings:t.ratings,"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc},on:{selectTypeChange:t.selectTypeChange,contentToggle:t.contentToggle}})],1),t._v(" "),e("div",{staticClass:"ratingDetail"},[t.ratings.length?e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.ratingShow(s.rateType,s.text),expression:"ratingShow(item.rateType,item.text)"}],staticClass:"ratingItem"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"detail"},[e("p",{staticClass:"userName"},[t._v(t._s(s.username))]),t._v(" "),e("p",{staticClass:"rateTime"},[t._v(t._s(t._f("formateDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"score"},[e("stars",{attrs:{score:s.score,size:24}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"item.deliveryTime"}],staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("p",{staticClass:"others"},[e("span",{staticClass:"rateType",class:{"icon-thumb_up":0==s.rateType,"icon-thumb_down":s.rateType>0}}),t._l(s.recommend,function(s){return e("span",{staticClass:"recommend"},[t._v(t._s(s))])})],2)])])})):e("div",{staticClass:"noRatings"},[t._v("\n\t\t\t\t本商店暂无评论~\n\t\t\t")])])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.d14fc447370ce93fb870.js.map