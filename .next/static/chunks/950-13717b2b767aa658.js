(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{638:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(6856).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){var t=n.default,l={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a(e,Promise)?l.loader=function(){return e}:"function"===typeof e?l.loader=e:"object"===typeof e&&(l=r({},l,e));!1;(l=r({},l,s)).loadableGenerated&&delete(l=r({},l,l.loadableGenerated)).loadableGenerated;if("boolean"===typeof l.ssr&&!l.suspense){if(!l.ssr)return delete l.ssr,i(t,l);delete l.ssr}return t(l)},s.noSSR=i;var r=t(6495).Z,l=t(2648).Z,n=(l(t(7294)),l(t(4302)));function i(e,s){return delete s.webpack,delete s.modules,e(s)}("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&"undefined"===typeof s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6319:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var a=(0,t(2648).Z)(t(7294)).default.createContext(null);s.LoadableContext=a},4302:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(9658).Z,r=t(7222).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=t(6495).Z,n=(0,t(2648).Z)(t(7294)),i=t(6319),c=t(7294).useSyncExternalStore,o=[],d=[],u=!1;function f(e){var s=e(),t={loading:!0,loaded:null,error:null};return t.promise=s.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var h=function(){function e(s,t){a(this,e),this._loadFn=s,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,t=this._opts;s.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(s){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function m(e){return function(e,s){var t=function(){if(!o){var s=new h(e,r);o={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return o.promise()},a=function(){t();var e=n.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach((function(s){e(s)}))},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},s);r.suspense&&(r.lazy=n.default.lazy(r.loader));var o=null;if(!u){var f=r.webpack?r.webpack():r.modules;f&&d.push((function(e){var s=!0,a=!1,r=void 0;try{for(var l,n=f[Symbol.iterator]();!(s=(l=n.next()).done);s=!0){var i=l.value;if(-1!==e.indexOf(i))return t()}}catch(c){a=!0,r=c}finally{try{s||null==n.return||n.return()}finally{if(a)throw r}}}))}var m=r.suspense?function(e,s){return a(),n.default.createElement(r.lazy,l({},e,{ref:s}))}:function(e,s){a();var t=c(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(s,(function(){return{retry:o.retry}}),[]),n.default.useMemo((function(){return t.loading||t.error?n.default.createElement(r.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:o.retry}):t.loaded?n.default.createElement((s=t.loaded)&&s.__esModule?s.default:s,e):null;var s}),[e,t])};return m.preload=function(){return t()},m.displayName="LoadableComponent",n.default.forwardRef(m)}(f,e)}function g(e,s){for(var t=[];e.length;){var a=e.pop();t.push(a(s))}return Promise.all(t).then((function(){if(e.length)return g(e,s)}))}m.preloadAll=function(){return new Promise((function(e,s){g(o).then(e,s)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(s){var t=function(){return u=!0,s()};g(d,e).then(t,t)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var j=m;s.default=j},1567:function(e,s,t){"use strict";t.d(s,{Xc:function(){return c},SJ:function(){return o}});var a=t(5893),r=t(1664),l=t.n(r),n=t(7294),i=function(){var e=(0,n.useState)(1),s=e[0],t=e[1];return(0,n.useEffect)((function(){var e=setInterval((function(){t((function(e){return 2==s?1:e+1}))}),1e4);return function(){return clearInterval(e)}}),[s]),{active:s,setActive:t}},c=function(){var e=i(),s=e.active,t=e.setActive;return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)("button",{className:"slider-prev slick-arrow",onClick:function(){return t(1==s?2:1)},children:(0,a.jsx)("i",{className:"fas fa-chevron-left"})}),(0,a.jsxs)("div",{className:"slider-single-item slide-one ".concat(1==s?"slick-active":""),children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"slider-content",children:[(0,a.jsx)("h1",{children:"FlavorFusion"}),(0,a.jsx)("h6",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 FlavorFusion \u2013 \u0432\u0430\u0448 \u043e\u043d\u043b\u0430\u0439\u043d \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0441\u0432\u0435\u0436\u0438\u0445 \u0444\u0440\u0443\u043a\u0442\u043e\u0432, \u043e\u0432\u043e\u0449\u0435\u0439, \u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u043e\u0432, \u0447\u0430\u044f \u0438 \u043f\u0440\u044f\u043d\u043e\u0441\u0442\u0435\u0439! \u0423 \u043d\u0430\u0441 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438 \u0432\u043a\u0443\u0441\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0434\u043e\u0440\u043e\u0432\u043e\u0439 \u0438 \u0432\u043a\u0443\u0441\u043d\u043e\u0439 \u043f\u0438\u0449\u0438. \u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0435 \u043a \u043d\u0430\u043c \u0438 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c\u0438!"}),(0,a.jsxs)("div",{className:"slider-btns mt-30",children:[(0,a.jsx)(l(),{href:"/shop-grid",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})}),(0,a.jsx)(l(),{href:"/about",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})})]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"slider-images",children:(0,a.jsx)("img",{className:"image",src:"https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/2.png",alt:"Slider"})})})]})}),(0,a.jsxs)("div",{className:"slide-shapes",children:[(0,a.jsx)("img",{className:"two-leaf",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png",alt:"Leaf"}),(0,a.jsx)("img",{className:"half-leaf",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png",alt:"Leaf"}),(0,a.jsx)("img",{className:"leaf-one",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png",alt:"Leaf"}),(0,a.jsx)("img",{className:"leaf-two",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png",alt:"Leaf"})]})]}),(0,a.jsxs)("div",{className:"slider-single-item slide-two ".concat(2==s?"slick-active":""),children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"slider-images",children:(0,a.jsx)("img",{className:"image",src:"https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/3.png",alt:"Slider"})})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"slider-content",children:[(0,a.jsx)("h1",{children:"FlavorFusion"}),(0,a.jsx)("h6",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 FlavorFusion \u2013 \u0432\u0430\u0448 \u043e\u043d\u043b\u0430\u0439\u043d \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0441\u0432\u0435\u0436\u0438\u0445 \u0444\u0440\u0443\u043a\u0442\u043e\u0432, \u043e\u0432\u043e\u0449\u0435\u0439, \u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u043e\u0432, \u0447\u0430\u044f \u0438 \u043f\u0440\u044f\u043d\u043e\u0441\u0442\u0435\u0439! \u0423 \u043d\u0430\u0441 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438 \u0432\u043a\u0443\u0441\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0434\u043e\u0440\u043e\u0432\u043e\u0439 \u0438 \u0432\u043a\u0443\u0441\u043d\u043e\u0439 \u043f\u0438\u0449\u0438. \u041f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0435 \u043a \u043d\u0430\u043c \u0438 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c\u0438!"}),(0,a.jsxs)("div",{className:"slider-btns mt-30",children:[(0,a.jsx)(l(),{href:"/shop-grid",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})}),(0,a.jsx)(l(),{href:"/about",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})})]})]})})]})}),(0,a.jsxs)("div",{className:"slide-shapes",children:[(0,a.jsx)("img",{className:"two-leaf",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png",alt:"Leaf"}),(0,a.jsx)("img",{className:"half-leaf",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png",alt:"Leaf"}),(0,a.jsx)("img",{className:"leaf-one",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png",alt:"Leaf"}),(0,a.jsx)("img",{className:"leaf-two",src:"https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png",alt:"Leaf"})]})]}),(0,a.jsx)("button",{className:"slider-next slick-arrow",onClick:function(){return t(2==s?1:2)},children:(0,a.jsx)("i",{className:"fas fa-chevron-right"})})]})},o=function(){var e=i(),s=e.active,t=e.setActive;return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)("button",{className:"slider-prev slick-arrow",onClick:function(){return t(1==s?2:1)},children:(0,a.jsx)("i",{className:"fas fa-chevron-left"})}),(0,a.jsx)("div",{className:"slider-single-item style-two ".concat(1==s?"slick-active":""),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"slider-content",children:[(0,a.jsx)("h1",{children:"Organic Foods & Vegetables"}),(0,a.jsxs)("div",{className:"slider-btns mt-30",children:[(0,a.jsx)(l(),{href:"/shop-grid",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["Shop Now ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})}),(0,a.jsx)(l(),{href:"/about",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["Learn More ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})})]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"slider-images",children:(0,a.jsx)("img",{className:"image",src:"assets/images/slider/slider-two1.png",alt:"Slider"})})})]})})}),(0,a.jsx)("div",{className:"slider-single-item style-two ".concat(2==s?"slick-active":""),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"slider-content",children:[(0,a.jsx)("h1",{children:"Organic Foods & Vegetables"}),(0,a.jsxs)("div",{className:"slider-btns mt-30",children:[(0,a.jsx)(l(),{href:"/about",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["Learn More ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})}),(0,a.jsx)(l(),{href:"/shop-grid",children:(0,a.jsxs)("a",{className:"theme-btn style-two",children:["Shop Now ",(0,a.jsx)("i",{className:"fas fa-angle-double-right"})]})})]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"slider-images",children:[(0,a.jsx)("img",{className:"image",src:"assets/images/slider/slider-two3.png",alt:"Slider"}),(0,a.jsx)("img",{className:"offer",src:"assets/images/shapes/organic.png",alt:"Organic"})]})})]})})}),(0,a.jsx)("button",{className:"slider-next slick-arrow",onClick:function(){return t(2==s?1:2)},children:(0,a.jsx)("i",{className:"fas fa-chevron-right"})})]})}},7835:function(e,s,t){"use strict";t.d(s,{Z:function(){return g}});var a=t(4111),r=t(1438),l=t(2951),n=t(8029),i=t(1799),c=t(9396),o=t(460),d=t(5893),u=t(1664),f=t.n(u),h=t(7294),m=t(6066),g=function(e){(0,n.Z)(t,e);var s=(0,o.Z)(t);function t(e){var l;return(0,r.Z)(this,t),(l=s.call(this,e)).next=l.next.bind((0,a.Z)(l)),l.previous=l.previous.bind((0,a.Z)(l)),l}return(0,l.Z)(t,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this;return(0,d.jsxs)(h.Fragment,{children:[!this.props.noHeader&&(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"gallery-header mb-35",children:(0,d.jsxs)("div",{className:"row align-items-end",children:[(0,d.jsx)("div",{className:"col-lg-8",children:(0,d.jsxs)("div",{className:"section-title mb-25",children:[(0,d.jsx)("span",{className:"sub-title mb-15"}),(0,d.jsx)("h2",{children:"Insite Photo Gallery"})]})}),(0,d.jsx)("div",{className:"col-lg-4 text-lg-right",children:(0,d.jsxs)("div",{className:"slider-arrows mb-25",children:[(0,d.jsx)("button",{onClick:this.previous,className:"gallery-prev slick-arrow",children:(0,d.jsx)("i",{className:"fas fa-arrow-left"})}),(0,d.jsx)("button",{onClick:this.next,className:"gallery-next slick-arrow",children:(0,d.jsx)("i",{className:"fas fa-arrow-right"})})]})})]})})}),(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)(m.Z,(0,c.Z)((0,i.Z)({},{dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:5e3,arrows:!1,speed:1e3,slidesToShow:1,slidesToScroll:1,variableWidth:!0}),{ref:function(s){return e.slider=s},className:"gallery-active",children:[(0,d.jsxs)("div",{className:"gallery-item wow fadeInUp delay-0-2s",children:[(0,d.jsx)("img",{src:"assets/images/gellery/gallery1.jpg",alt:"Gallery"}),(0,d.jsxs)("div",{className:"gallery-over",children:[(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h4",{children:"Organic Fruits"}),(0,d.jsx)("p",{children:"Fresh Food"})]}),(0,d.jsx)(f(),{href:"/portfolio-details",children:(0,d.jsx)("a",{className:"details-btn",children:(0,d.jsx)("i",{className:"fas fa-arrow-right"})})})]})]}),(0,d.jsxs)("div",{className:"gallery-item big-item wow fadeInUp delay-0-4s",children:[(0,d.jsx)("img",{src:"assets/images/gellery/gallery2.jpg",alt:"Gallery"}),(0,d.jsxs)("div",{className:"gallery-over",children:[(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h4",{children:"Organic Fruits Juice"}),(0,d.jsx)("p",{children:"Fresh Food & Vegetable"})]}),(0,d.jsx)(f(),{href:"/portfolio-details",children:(0,d.jsx)("a",{className:"details-btn",children:(0,d.jsx)("i",{className:"fas fa-arrow-right"})})})]})]}),(0,d.jsxs)("div",{className:"gallery-item wow fadeInUp delay-0-6s",children:[(0,d.jsx)("img",{src:"assets/images/gellery/gallery3.jpg",alt:"Gallery"}),(0,d.jsxs)("div",{className:"gallery-over",children:[(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h4",{children:"Organic Fruits"}),(0,d.jsx)("p",{children:"Vegetable"})]}),(0,d.jsx)(f(),{href:"/portfolio-details",children:(0,d.jsx)("a",{className:"details-btn",children:(0,d.jsx)("i",{className:"fas fa-arrow-right"})})})]})]}),(0,d.jsxs)("div",{className:"gallery-item wow fadeInUp delay-0-8s",children:[(0,d.jsx)("img",{src:"assets/images/gellery/gallery4.jpg",alt:"Gallery"}),(0,d.jsxs)("div",{className:"gallery-over",children:[(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h4",{children:"Organic Fruits"}),(0,d.jsx)("p",{children:"Fresh Food"})]}),(0,d.jsx)(f(),{href:"/portfolio-details",children:(0,d.jsx)("a",{className:"details-btn",children:(0,d.jsx)("i",{className:"fas fa-arrow-right"})})})]})]})]}))})]})}}]),t}(h.Component)},5152:function(e,s,t){e.exports=t(638)},4111:function(e,s,t){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(s,{Z:function(){return a}})},1438:function(e,s,t){"use strict";function a(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}t.d(s,{Z:function(){return a}})},2951:function(e,s,t){"use strict";function a(e,s){for(var t=0;t<s.length;t++){var a=s[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,s,t){return s&&a(e.prototype,s),t&&a(e,t),e}t.d(s,{Z:function(){return r}})},460:function(e,s,t){"use strict";function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function r(e){return a(e)}t.d(s,{Z:function(){return i}});var l=t(4111);function n(e,s){return!s||"object"!==((t=s)&&t.constructor===Symbol?"symbol":typeof t)&&"function"!==typeof s?(0,l.Z)(e):s;var t}function i(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=r(e);if(s){var l=r(this).constructor;t=Reflect.construct(a,arguments,l)}else t=a.apply(this,arguments);return n(this,t)}}},8029:function(e,s,t){"use strict";function a(e,s){return a=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},a(e,s)}function r(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&a(e,s)}t.d(s,{Z:function(){return r}})}}]);