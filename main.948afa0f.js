parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.getElementById("phone-icon"),t=document.querySelector(".phone-block");e.addEventListener("click",function(){t.classList.toggle("visible")});var n=document.getElementById("contactForm"),d=document.getElementById("submitButton");d.addEventListener("click",function(e){e.preventDefault(),n.reset()});var o=document.getElementById("modal"),l=document.getElementById("modal-close-btn"),a=document.getElementById("consent-form"),i=document.getElementById("modal-text"),c=document.getElementById("decline-btn"),s=document.getElementById("modal-choice-btns");function m(){document.getElementById("mySidepanel").style.width="500px"}function u(){document.getElementById("mySidepanel").style.width="0"}setTimeout(function(){o.style.display="inline"},1500),l.addEventListener("click",function(){o.style.display="none"}),c.addEventListener("mouseenter",function(){s.classList.toggle("modal__btns-reverse")}),a.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(a).get("fullName");i.innerHTML='\n    <div class="modal__content--loading">\n        <img src="loading.svg" class="loading">\n        <p id="upload-text">Uploading your data to the dark web...</p>\n    </div>',setTimeout(function(){document.getElementById("upload-text").innerText="\n        Making the sale..."},1500),setTimeout(function(){document.getElementById("modal-inner").innerHTML='\n      <div class="modal__gif">\n          <img src="talking-head.gif">\n      </div>\n      <h2 class="modal__title">Thanks <span class="modal__name-display">'.concat(t,'</span>, you smarty pants!</h2>\n      <p class="modal__paragraph">I just sold the rights to your eternal soul.</p>\n    '),l.disabled=!1},3e3)}),document.querySelector(".openbtn").addEventListener("click",m),document.querySelector(".closebtn").addEventListener("click",u);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.948afa0f.js.map