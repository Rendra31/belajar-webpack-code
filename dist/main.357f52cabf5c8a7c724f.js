"use strict";(self.webpackChunkbelajar_webpack_code=self.webpackChunkbelajar_webpack_code||[]).push([[179,736],{198:(e,n,r)=>{var t=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.every((function(e){return"number"==typeof e&&!isNaN(e)}))},o=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.map((function(e){return parseInt(e)}))};function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){if(e){if("string"==typeof e)return u(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,n):void 0}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}console.log("test");var l=r(486),c=r.n(l);function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function f(e,n,r){return n&&s(e.prototype,n),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var p=f((function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"tampilkanErrorPenjumlahan",(function(e,r){var o=e.reduce((function(e,n,o){return t(r[o])?e+"":e+"".concat(n," itu bukan angka! ")}),"Silahkan masukkan angka yang benar: ");n.error.classList.remove("d-none"),n.error.innerText=o})),y(this,"sembunyikanError",(function(){return n.error.classList.add("d-none")})),this.error=document.querySelector("#error")}));function b(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var d=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.operand1=document.querySelector("#operand1"),this.operand2=document.querySelector("#operand2"),this.tombolTambah=document.querySelector("#tombol-tambah"),this.hasil=document.querySelector("#hasil")}var n,r;return n=e,(r=[{key:"getInput",value:function(){return[this.operand1.value,this.operand2.value]}},{key:"setResult",value:function(e,n){this.hasil.innerText=e+n}},{key:"onClick",value:function(e){this.tombolTambah.addEventListener("click",e)}}])&&b(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function h(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var m,v,k,w=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.tombolJokes=document.querySelector("#jokes-receh"),this.modalBody=document.querySelector(".modal-body")}var n,r;return n=e,(r=[{key:"setModal",value:function(e){this.modalBody.innerHTML=e}},{key:"onClick",value:function(e){this.tombolJokes.addEventListener("click",e)}}])&&h(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();r(508),m=new p,v=new d,k=new w,m.sembunyikanError(),v.onClick((function(){m.sembunyikanError();var e,n,r=v.getInput(),u=o.apply(void 0,a(r));if(t.apply(void 0,a(u))){var l=(n=2,function(e){if(Array.isArray(e))return e}(e=u)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,n)||i(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],s=l[1];v.setResult(c,s)}else v.setResult(""),m.tampilkanErrorPenjumlahan(r,u)})),k.onClick((function(){fetch("https://candaan-api.vercel.app/api/text/random").then((function(e){return e.json()})).then((function(e){k.setModal(e.data)}))})),console.log(c().toUpper("hello form index.js"))},508:(e,n,r)=>{r.r(n),r(138),r(662)}},e=>{e.O(0,[242],(()=>(198,e(e.s=198)))),e.O()}]);