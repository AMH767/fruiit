"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{800:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(3375);var o=e(1566);function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||(0,r.Z)(n,t)||(0,o.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=e(5893),i=e(7294),u=function(n){return[Math.floor(n/864e5),Math.floor(n%864e5/36e5),Math.floor(n%36e5/6e4),Math.floor(n%6e4/1e3)]},s=function(){var n=a(function(n){var t=new Date(n).getTime(),e=(0,i.useState)(t-(new Date).getTime()),r=e[0],o=e[1];return(0,i.useEffect)((function(){var n=setInterval((function(){o(t-(new Date).getTime())}),1e3);return function(){return clearInterval(n)}}),[t]),u(r)}("".concat((new Date).getMonth()+1," ").concat((new Date).getDate()+20," , ").concat((new Date).getFullYear()," 00:00:00")),4),t=n[0],e=n[1],r=n[2],o=n[3];return(0,c.jsxs)("ul",{className:"count-down mt-35",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{id:"days",children:t>9?t:"0".concat(t)}),"days"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{id:"hours",children:e>9?e:"0".concat(e)}),"Hours"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{id:"minutes",children:r>9?r:"0".concat(r)}),"Minutes"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{id:"seconds",children:o>9?o:"0".concat(o)}),"Seconds"]})]})}},943:function(n,t,e){function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,{Z:function(){return r}})},3375:function(n,t,e){function r(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}e.d(t,{Z:function(){return r}})},1566:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(943);function o(n,t){if(n){if("string"===typeof n)return(0,r.Z)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(n,t):void 0}}}}]);