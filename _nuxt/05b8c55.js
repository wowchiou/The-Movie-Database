(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,11],{284:function(e,t,r){e.exports=r.p+"img/logo-primary-full.de1a664.svg"},285:function(e,t,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("05ea9e4f",content,!0,{sourceMap:!1})},286:function(e,t,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("29c6388c",content,!0,{sourceMap:!1})},288:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-auto w-20"},[t("img",{staticClass:"movie-loader",attrs:{src:r(284),alt:"logo"}})])}],o={props:{movies:{type:Array,required:!0},picUrl:{type:String,required:!0},loadMovies:{type:Function,required:!0},busy:{type:Boolean,required:!0}},methods:{getInfinityScrollHeight:function(){return.5*window.innerHeight}}},c=(r(291),r(18)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("transition-group",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMovies,expression:"loadMovies"}],staticClass:"movie-list",attrs:{tag:"ul",name:"slideLeft","infinite-scroll-disabled":"busy","infinite-scroll-distance":e.getInfinityScrollHeight()}},e._l(e.movies,(function(t,n){return r("li",{key:""+t.id+n,staticClass:"movie-item"},[r("nuxt-link",{attrs:{to:{name:"Movie-id",params:{id:t.id}}}},[r("img",{attrs:{src:""+e.picUrl+t.poster_path,alt:t.title}})])],1)})),0),e._v(" "),e.busy?r("div",{staticClass:"my-20 flex justify-self-center items-center"},[e._m(0)]):e._e()],1)}),n,!1,null,"3097d9e0",null);t.default=component.exports},289:function(e,t,r){"use strict";r.r(t);var n={props:{searchHandler:{type:Function,required:!0}},data:function(){return{searchText:""}}},o=(r(293),r(18)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"search-bar",on:{submit:function(t){return t.preventDefault(),e.searchHandler(e.searchText)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),e._v(" "),r("button",{staticClass:"bg-gradient"},[e._v("搜尋")])])}),[],!1,null,"299a0a4f",null);t.default=component.exports},291:function(e,t,r){"use strict";r(285)},292:function(e,t,r){var n=r(28),o=r(139),c=r(284),l=n((function(i){return i[1]})),d=o(c);l.push([e.i,".movie-list[data-v-3097d9e0]{margin:auto;margin-top:2.5rem;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;max-width:900px}.movie-item[data-v-3097d9e0]{width:300px;height:450px;--tw-bg-opacity:1;background-color:rgb(209 213 219 / var(--tw-bg-opacity));background-image:url("+d+");background-size:60%;background-position:50%;background-repeat:no-repeat}.movie-loader[data-v-3097d9e0]{-webkit-animation:shinny .3s linear infinite alternate;animation:shinny .3s linear infinite alternate}",""]),l.locals={},e.exports=l},293:function(e,t,r){"use strict";r(286)},294:function(e,t,r){var n=r(28)((function(i){return i[1]}));n.push([e.i,".search-bar[data-v-299a0a4f]{margin-top:1.25rem;display:flex;width:100%;align-items:stretch;justify-content:flex-start}.search-bar input[data-v-299a0a4f]{flex:1 1 0%;border-top-left-radius:9999px;border-bottom-left-radius:9999px;font-size:2.25rem;line-height:2.5rem;--tw-text-opacity:1;color:rgb(243 244 246 / var(--tw-text-opacity));padding:1rem 2rem}.search-bar button[data-v-299a0a4f]{border-top-right-radius:9999px;border-bottom-right-radius:9999px;padding-left:2.5rem;padding-right:2.5rem;font-size:1.875rem;line-height:2.25rem;text-shadow:.2rem .2rem .3rem rgba(0,0,0,.5)}",""]),n.locals={},e.exports=n},304:function(e,t,r){"use strict";var n=r(288);t.a=n.default},305:function(e,t,r){"use strict";var n=r(289);t.a=n.default},328:function(e,t,r){var content=r(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("c1a3963c",content,!0,{sourceMap:!1})},334:function(e,t,r){"use strict";r(328)},335:function(e,t,r){var n=r(28)((function(i){return i[1]}));n.push([e.i,".search[data-v-67ef4f38]{margin-top:10rem;padding-bottom:10rem}.search-wrap[data-v-67ef4f38]{width:50rem;margin:auto}",""]),n.locals={},e.exports=n},350:function(e,t,r){"use strict";r.r(t);var n=r(104),o=r(9),c=(r(49),r(42),r(15),r(304)),l={components:{SearchBar:r(305).a,MoviesList:c.a},head:function(){return{title:"尋找".concat(this.$route.query.searchText)}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.query,o=encodeURIComponent(n.searchText),t.next=4,r.dispatch("getSearchMovie",{searchText:o,page:1});case 4:return c=t.sent,t.abrupt("return",{movies:c.results.filter((function(e){return e.poster_path})),moviePage:1,movieTotalPage:c.total_pages});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{movieTotalPage:0,moviePage:0,movies:[],busy:!1}},methods:{loadMovies:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.busy=!0,e.moviePage!==e.movieTotalPage&&0!==e.movies.length){t.next=3;break}return t.abrupt("return",e.busy=!1);case 3:return t.next=5,e.$store.dispatch("getSearchMovie",{searchText:e.$route.query.searchText,page:e.moviePage+1});case 5:o=(o=t.sent).results.filter((function(e){return e.poster_path})),e.moviePage+=1,(r=e.movies).push.apply(r,Object(n.a)(o)),e.busy=!1;case 10:case"end":return t.stop()}}),t)})))()},searchHandler:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.$store.dispatch("getSearchMovie",{searchText:e,page:1});case 4:n=r.sent,t.$router.push({name:"Search",query:{searchText:e}}),t.movies=n.results.filter((function(e){return e.poster_path})),t.moviePage=1,t.movieTotalPage=n.total_pages;case 9:case"end":return r.stop()}}),r)})))()}}},d=(r(334),r(18)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-wrap"},[r("SearchBar",{attrs:{searchHandler:e.searchHandler}})],1),e._v(" "),0===e.movies.length?r("h3",{staticClass:"text-4xl text-center p-20"},[e._v("\n    抱歉！查無電影資料\n  ")]):r("MoviesList",{attrs:{movies:e.movies,busy:e.busy,loadMovies:e.loadMovies,picUrl:e.$store.state.images.post}})],1)}),[],!1,null,"67ef4f38",null);t.default=component.exports;installComponents(component,{SearchBar:r(289).default,MoviesList:r(288).default})}}]);