(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{8086:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return t(7640)}])},7640:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var i=t(943);var n=t(3375);var a=t(1566);function r(e){return function(e){if(Array.isArray(e))return(0,i.Z)(e)}(e)||(0,n.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t(5893),c=t(1664),o=t.n(c),d=t(7294),h=t(4473),m=t(2745),g=t(7079),u=function(){var e=(0,d.useState)([{id:1,title:"Orange Fruits",description:"Cart Item 1",quantity:1,image:"assets/images/widgets/product2.png",price:250},{id:2,title:"Fresh Broccoli",description:"Cart Item 2",quantity:1,image:"assets/images/widgets/product3.png",price:250},{id:3,title:"Bread Grains",description:"Cart Item 3",quantity:1,image:"assets/images/widgets/product4.png",price:250}]),s=e[0],t=e[1],i=(0,d.useState)(0),n=i[0],a=i[1],c=(0,d.useState)(0),u=c[0],p=c[1],x=(0,d.useState)(15),j=x[0],f=x[1];(0,d.useEffect)((function(){a(b()),f(Number(15*b()/100).toFixed(2)),p((Number(b())+Number(j)+Number(10)).toFixed(2)),localStorage.setItem("munfirm",JSON.stringify({subTotal:n,totalPrice:u,shipping:10,vat:j,cartData:s}))}));var b=function(){return s.map((function(e){return e.price*e.quantity})).reduce((function(e,s){return e+s}),0).toFixed(2)},N=function(e,i){var n=s.find((function(s,t){return t===e}));n.quantity="-"==i?1===n.quantity?1:n.quantity-1:n.quantity+1,t(r(s))};return(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(m.Z,{pageName:"Cart Page"}),(0,l.jsx)("div",{className:"cart-area py-130 rpy-100",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"cart-item-wrap mb-35 wow fadeInUp delay-0-2s",children:s.map((function(e,i){return(0,l.jsxs)("div",{className:"cart-single-item",children:[(0,l.jsx)("button",{type:"button",className:"close",onClick:function(){return t(s.filter((function(s){return s.id!==e.id})))},children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,l.jsx)("div",{className:"cart-img",children:(0,l.jsx)("img",{src:e.image,alt:"Product Image"})}),(0,l.jsx)("h5",{className:"product-name",children:e.title}),(0,l.jsx)("span",{className:"product-price",children:e.price}),(0,l.jsxs)("div",{className:"quantity-input",children:[(0,l.jsx)("button",{className:"quantity-down",onClick:function(){return N(i,"-")},children:"-"}),(0,l.jsx)("input",{className:"quantity",type:"text",defaultValue:e.quantity,value:e.quantity,name:"quantity"}),(0,l.jsx)("button",{className:"quantity-up",onClick:function(){return N(i,"+")},children:"+"})]}),(0,l.jsx)("span",{className:"product-total-price",children:e.quantity*e.price})]},i)}))}),(0,l.jsxs)("div",{className:"row text-center text-lg-left align-items-center wow fadeInUp delay-0-2s",children:[(0,l.jsx)("div",{className:"col-lg-6",children:(0,l.jsx)("div",{className:"discount-wrapper rmb-30",children:(0,l.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},action:"#",className:"d-sm-flex justify-content-center justify-content-lg-start",children:[(0,l.jsx)("input",{type:"text",placeholder:"Coupon Code",required:""}),(0,l.jsxs)("button",{className:"theme-btn flex-none",type:"submit",children:["apply Coupon ",(0,l.jsx)("i",{className:"fas fa-angle-double-right"})]})]})})}),(0,l.jsx)("div",{className:"col-lg-6",children:(0,l.jsxs)("div",{className:"update-shopping text-lg-right",children:[(0,l.jsx)(o(),{href:"/shop-grid",children:(0,l.jsxs)("a",{className:"theme-btn style-two",children:["shopping ",(0,l.jsx)("i",{className:"fas fa-angle-double-right"})]})}),(0,l.jsx)(o(),{href:"/shop-grid",children:(0,l.jsxs)("a",{className:"theme-btn",children:["update cart ",(0,l.jsx)("i",{className:"fas fa-angle-double-right"})]})})]})})]}),(0,l.jsx)("div",{className:"payment-cart-total pt-25 wow fadeInUp delay-0-2s",children:(0,l.jsx)("div",{className:"row justify-content-end",children:(0,l.jsx)("div",{className:"col-lg-5",children:(0,l.jsxs)("div",{className:"shoping-cart-total mt-45",children:[(0,l.jsx)("h4",{className:"form-title m-25",children:"Cart Totals"}),(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Cart Subtotal"}),(0,l.jsx)("td",{className:"sub-total-price",children:n})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Shipping Fee"}),(0,l.jsx)("td",{className:"shipping-price",children:10..toFixed(2)})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Vat"}),(0,l.jsxs)("td",{children:["$",j]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("strong",{children:"Order Total"})}),(0,l.jsx)("td",{children:(0,l.jsx)("strong",{className:"total-price",children:(Number(u)+Number(10)).toFixed(2)})})]})]})}),(0,l.jsx)(o(),{href:"/checkout",children:(0,l.jsx)("a",{className:"theme-btn style-two mt-25 w-100",children:"Proceed to checkout"})})]})})})})]})}),(0,l.jsxs)("div",{className:"client-logo-section text-center bg-light-green py-60",children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(h.Z,{})}),(0,l.jsxs)("div",{className:"client-logo-shapes",children:[(0,l.jsx)("img",{className:"shape-one",src:"assets/images/shapes/cl-shape1.png",alt:"Shape"}),(0,l.jsx)("img",{className:"shape-two",src:"assets/images/shapes/cl-shape2.png",alt:"Shape"}),(0,l.jsx)("img",{className:"shape-three",src:"assets/images/shapes/cl-shape3.png",alt:"Shape"}),(0,l.jsx)("img",{className:"shape-four",src:"assets/images/shapes/cl-shape4.png",alt:"Shape"}),(0,l.jsx)("img",{className:"shape-five",src:"assets/images/shapes/cl-shape5.png",alt:"Shape"}),(0,l.jsx)("img",{className:"shape-six",src:"assets/images/shapes/cl-shape6.png",alt:"Shape"})]})]})]})}},4473:function(e,s,t){"use strict";var i=t(1799),n=t(9396),a=t(5893),r=t(1664),l=t.n(r),c=t(7294),o=t(6066),d=t(5968);s.Z=function(){return(0,a.jsx)(c.Fragment,{children:(0,a.jsxs)(o.Z,(0,n.Z)((0,i.Z)({},d.M4),{className:"client-logo-wrap",children:[(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo3.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo4.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo5.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo6.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo1.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo2.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo3.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo4.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo5.png",alt:"Client Logo"})})})}),(0,a.jsx)("div",{className:"client-logo-item",children:(0,a.jsx)(l(),{href:"/contact",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/images/client-logo/client-logo6.png",alt:"Client Logo"})})})})]}))})}},2745:function(e,s,t){"use strict";var i=t(5893),n=t(1664),a=t.n(n);s.Z=function(e){var s=e.pageName,t=e.pageTitle;return(0,i.jsx)("section",{className:"page-banner text-white py-165 rpy-130",style:{backgroundImage:"url(assets/images/banner/banner.jpg)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"banner-inner",children:[(0,i.jsx)("h1",{className:"page-title wow fadeInUp delay-0-2s",children:t||s}),(0,i.jsx)("nav",{"aria-label":"breadcrumb",children:(0,i.jsxs)("ol",{className:"breadcrumb justify-content-center wow fadeInUp delay-0-4s",children:[(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(a(),{href:"/",children:"Home"})}),(0,i.jsx)("li",{className:"breadcrumb-item active",children:s})]})})]})})})}},5968:function(e,s,t){"use strict";t.d(s,{$K:function(){return l},$R:function(){return o},GZ:function(){return a},M4:function(){return r},dL:function(){return c},zk:function(){return d}});var i=t(5893),n=function(e){var s=e.arrowCls,t=e.onClick,n=e.icon;return(0,i.jsx)("button",{className:s,onClick:t,children:(0,i.jsx)("i",{className:n})})},a={dots:!0,infinite:!0,autoplay:!1,autoplaySpeed:2e3,arrows:!1,speed:1e3,focusOnSelect:!0,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}}]},r={dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,speed:1e3,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:3}},{breakpoint:575,settings:{slidesToShow:2}}]},l={dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:2e3,arrows:!0,speed:1e3,prevArrow:(0,i.jsx)(n,{arrowCls:"slider-prev slick-arrow",icon:"fas fa-chevron-left"}),nextArrow:(0,i.jsx)(n,{arrowCls:"slider-next slick-arrow",icon:"fas fa-chevron-right"}),focusOnSelect:!0,slidesToShow:6,slidesToScroll:2,responsive:[{breakpoint:1500,settings:{slidesToShow:5}},{breakpoint:1300,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},c={dots:!0,infinite:!0,autoplay:!1,autoplaySpeed:2e3,arrows:!1,speed:1e3,focusOnSelect:!0,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}}]},o={slidesToScroll:1,infinite:!0,speed:400,centerMode:!0,arrows:!1,variableWidth:!0,dots:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1,centerMode:!1,variableWidth:!1}}]},d={slidesToShow:2,slidesToScroll:1,infinite:!0,speed:400,arrows:!1,dots:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1,centerMode:!1,variableWidth:!1}}]}},943:function(e,s,t){"use strict";function i(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,i=new Array(s);t<s;t++)i[t]=e[t];return i}t.d(s,{Z:function(){return i}})},3375:function(e,s,t){"use strict";function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(s,{Z:function(){return i}})},1566:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var i=t(943);function n(e,s){if(e){if("string"===typeof e)return(0,i.Z)(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,i.Z)(e,s):void 0}}}},function(e){e.O(0,[95,55,79,774,888,179],(function(){return s=8086,e(e.s=s);var s}));var s=e.O();_N_E=s}]);