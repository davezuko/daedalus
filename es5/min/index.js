"use strict";var _toConsumableArray=function(r){if(Array.isArray(r)){for(var n=0,t=Array(r.length);n<r.length;n++)t[n]=r[n];return t}return Array.from(r)};+function(r){"object"==typeof exports?module.exports=exports=r:window&&(window.F=window.F||r)}(function(){var r={},n=function(r,t){for(var e=arguments.length,u=Array(e>2?e-2:0),o=2;e>o;o++)u[o-2]=arguments[o];return u.length>=t?r.apply(void 0,u):function(){for(var e=arguments.length,o=Array(e),a=0;e>a;a++)o[a]=arguments[a];return n.apply(void 0,[r,t].concat(u,o))}};r.curry=function(r){for(var t=arguments.length,e=Array(t>1?t-1:0),u=1;t>u;u++)e[u-1]=arguments[u];return n.apply(void 0,[r,r.length].concat(e))},r.curryN=function(r,t){for(var e=arguments.length,u=Array(e>2?e-2:0),o=2;e>o;o++)u[o-2]=arguments[o];return n.apply(void 0,[r,t].concat(u))},r.pipe=function(){for(var n=arguments.length,t=Array(n),e=0;n>e;e++)t[e]=arguments[e];var u=t[0],o=t.slice(1);return function(){for(var n=arguments.length,t=Array(n),e=0;n>e;e++)t[e]=arguments[e];return r.reduce(function(r,n){return n(r)},u.apply(void 0,t),o)}},r.compose=function(){for(var n=arguments.length,t=Array(n),e=0;n>e;e++)t[e]=arguments[e];return r.pipe.apply(r,_toConsumableArray(r.reverse(t)))},r.first=function(r){return r[0]},r.last=function(r){return r[r.length-1]},r.each=r.curry(function(r,n){for(var t=0,e=n.length;e>t;t++)r(n[t],t)}),r.map=r.curry(function(r,n){for(var t=n.length,e=new Array(t),u=0;t>u;u++)e[u]=r(n[u],u);return e}),r.reduce=r.curry(function(r,n,t){var e=0;void 0===n&&(n=t[e++]);for(var u=t.length;u>e;e++)n=r(n,t[e],e);return n}),r.contains=r.curry(function(n,t){for(var e=!1,u="function"==typeof n?n:r.equals(n),o=0,a=t.length;a>o;o++)u(t[o],o)&&(e=!0);return e}),r.reverse=function(r){for(var n=r.length,t=[];n--;)t.push(r[n]);return t},r.filter=function(n,t){for(var e=[],u="function"==typeof n?n:r.equals(n),o=0,a=t.length;a>o;o++)u(t[o],o)&&e.push(t[o]);return e},r.take=r.curry(function(n){return r.filter(function(r,t){return n>t})});var t=function(r,n,t){for(var e in n)n.hasOwnProperty(e)&&(t!==!1||"undefined"==typeof r[e])&&(r[e]=n[e]);return r};return r.mixin=r.curry(function(r,n){return t(t({},r),n,!1)}),r.extend=r.curry(function(r,n){return t(t({},r),n)}),r.has=r.curry(function(r,n){return n.hasOwnProperty(r)}),r.get=r.curry(function(r,n){return n[r]}),r.wrap=function(r){return Array.isArray(r)?r:[r]},r.tap=r.curry(function(r,n){return r(n),n}),r.is=r.curry(function(r,n){return typeof n===r}),r.equals=r.curry(function(r,n){return r===n}),r}());