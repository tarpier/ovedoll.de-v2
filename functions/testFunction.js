!function(n,t){for(var e in t)n[e]=t[e]}(exports,function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";var o=e(1);e(2).config();const r=e(5);t.handler=((n,t,e)=>{const s=r.parse(n.body);var i=JSON.stringify({text:`Message sent by ${s.sender_name} (${s.sender_email}):\n ${s.sender_message}`}),c={host:"hooks.slack.com",port:"443",path:`${process.env.SLACK}`,method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(i)}},f=o.request(c,function(n){n.setEncoding("utf8"),n.on("data",function(n){console.log("Response: "+n)})});f.write(i),f.end();e(null,{statusCode:200,headers:{"Content-Type":"application/json"},body:JSON.stringify({one:"44",two:{details:"Some details",another:"More details"}})})})},function(n,t){n.exports=require("https")},function(n,t,e){const o=e(3),r=e(4);function s(n){console.log(`[dotenv][DEBUG] ${n}`)}function i(n,t){const e=Boolean(t&&t.debug),o={};return n.toString().split("\n").forEach(function(n,t){const r=n.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);if(null!=r){const n=r[1];let t=r[2]||"";const e=t?t.length:0;e>0&&'"'===t.charAt(0)&&'"'===t.charAt(e-1)&&(t=t.replace(/\\n/gm,"\n")),t=t.replace(/(^['"]|['"]$)/g,"").trim(),o[n]=t}else e&&s(`did not match key and value when parsing line ${t+1}: ${n}`)}),o}function c(n){let t=r.resolve(process.cwd(),".env"),e="utf8",c=!1;n&&(null!=n.path&&(t=n.path),null!=n.encoding&&(e=n.encoding),null!=n.debug&&(c=!0));try{const n=i(o.readFileSync(t,{encoding:e}),{debug:c});return Object.keys(n).forEach(function(t){process.env.hasOwnProperty(t)?c&&s(`"${t}" is already defined in \`process.env\` and will not be overwritten`):process.env[t]=n[t]}),{parsed:n}}catch(n){return{error:n}}}n.exports.config=c,n.exports.load=c,n.exports.parse=i},function(n,t){n.exports=require("fs")},function(n,t){n.exports=require("path")},function(n,t){n.exports=require("querystring")}]));