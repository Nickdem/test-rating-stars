parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NesY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ratingsTemplate=e,exports.starTemplate=void 0;var n='<div class="rating__star-item"></div>';function t(t){return"<span>".concat(t," ").concat(n,"</span>")}function a(n,t){return'\n  <div class="rating__list-line line" data-title="'.concat(t,' чел.">\n    <span class="line__colored" style="width: ').concat(n,'%;"></span>\n    <span class="line__num">').concat(n,"%</span>\n  </div>")}function e(n,e){return"\n  <ul class='rating__list'>\n    ".concat(n.map(function(n){return"\n      <li class='rating__list-item'>\n        ".concat(t(n.stars),"\n        ").concat(a(Math.round(n.people/e*100),n.people),"\n      </li>\n    ")}).join(""),"\n  </ul>\n  <button class='remove-btn'>Кнопка</button>\n  ")}exports.starTemplate=n;
},{}],"xwrt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderRatingsList=n;var e,t=require("./templates"),r=[{stars:1,people:20},{stars:2,people:25},{stars:3,people:66},{stars:4,people:52},{stars:5,people:93}];function o(e){return e.map(function(e){return e.people}).reduce(function(e,t){return e+t})}function n(){c();var n=document.querySelectorAll(".rating__star-item--clicked").length;n>0&&n!==e&&(e&&(r[e-1].people=r[e-1].people-1),e=n,r[n-1].people=r[n-1].people+1,document.querySelector(".rating").insertAdjacentHTML("beforeend",(0,t.ratingsTemplate)(r,o(r))),document.querySelector(".remove-btn").addEventListener("click",c))}function c(){document.querySelector(".rating__list")&&(document.querySelector(".rating__list").remove(),document.querySelector(".remove-btn").removeEventListener("click",c),document.querySelector(".remove-btn").remove())}
},{"./templates":"NesY"}],"iNET":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=u;var t=require("./rating-list"),r=require("./templates");function e(t){return a(t)||i(t)||o(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,r){if(t){if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,r):void 0}}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return c(t)}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(){for(var n=document.querySelector(".rating__star-list"),o=0;o<5;o++)n.insertAdjacentHTML("beforeend",r.starTemplate);var i=e(n.children);n.addEventListener("mouseover",function(t){return s(t,"rating__star-item--hover",i)}),n.addEventListener("mouseleave",function(t){t.stopPropagation(),f("rating__star-item--hover",i)}),n.addEventListener("click",function(r){s(r,"rating__star-item--clicked",i),(0,t.renderRatingsList)()})}function s(t,r,e){t.stopPropagation(),l(e.findIndex(function(r){return r===t.target}),r,e)}function f(t,r){r.forEach(function(r){return r.classList.remove(t)})}function l(t,r,e){f(r,e),e.forEach(function(e,n){return t+1>n&&e.classList.add(r)})}
},{"./rating-list":"xwrt","./templates":"NesY"}],"d6sW":[function(require,module,exports) {
"use strict";var t=require("./star-list");document.addEventListener("DOMContentLoaded",function(){(0,t.init)()},!1);
},{"./star-list":"iNET"}]},{},["d6sW"], null)