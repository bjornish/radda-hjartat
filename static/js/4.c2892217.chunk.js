(this["webpackJsonpradda-hjartat"]=this["webpackJsonpradda-hjartat"]||[]).push([[4],{190:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",(function(){return m}));var o=n(17),r=new WeakMap,a=function(t,e,n,o){void 0===o&&(o=0),r.has(t)!==n&&(n?u(t,e,o):c(t,e))},i=function(t){return t===t.getRootNode().activeElement},u=function(t,e,n){var o=e.parentNode,a=e.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o.appendChild(a),r.set(t,a);var i="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+i+"px,"+n+"px,0) scale(0)"},c=function(t,e){var n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},s="input, textarea, [no-blur]",l=function(t,e,n,o){var r=t.top,a=t.bottom,i=e.top,u=i+15,c=.5*Math.min(e.bottom,o-n)-a,s=u-r,l=Math.round(c<0?-c:s>0?-s:0),d=Math.min(l,r-i),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-u)}},d=function(t,e,n,o){var r=function(t,e,n){var o=t.closest("ion-item,[ion-item]")||t;return l(o.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(a(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then((function(){a(t,e,!1,r.inputSafeY),e.focus()})))},f=function(t,e,n){if(e&&n){var o=e.x-n.x,r=e.y-n.y;return o*o+r*r>t*t}return!1},v=function(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)&&(!t.parentElement||!t.parentElement.parentElement||"ION-SEARCHBAR"!==t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},m=function(t){var e=document,n=t.getNumber("keyboardHeight",290),r=t.getBoolean("scrollAssist",!0),u=t.getBoolean("hideCaretOnScroll",!0),c=t.getBoolean("inputBlurring",!0),l=t.getBoolean("scrollPadding",!0),m=Array.from(e.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,h=new WeakMap,E=function(t){var e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),c=t.closest("ion-content");if(e){if(c&&u&&!p.has(t)){var s=function(t,e,n){if(!n||!e)return function(){};var o=function(n){i(e)&&a(t,e,n)},r=function(){return a(t,e,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",r)}}(t,e,c);p.set(t,s)}if(c&&r&&!h.has(t)){s=function(t,e,n,r){var a,u=function(t){a=Object(o.j)(t)},c=function(u){if(a){var c=Object(o.j)(u);f(6,a,c)||i(e)||(u.preventDefault(),u.stopPropagation(),d(t,e,n,r))}};return t.addEventListener("touchstart",u,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",u,!0),t.removeEventListener("touchend",c,!0)}}(t,e,c,n);h.set(t,s)}}};c&&function(){var t=!0,e=!1,n=document,o=function(){e=!0},r=function(){t=!0},a=function(o){if(e)e=!1;else{var r=n.activeElement;if(r&&!r.matches(s)){var a=o.target;a!==r&&(a.matches(s)||a.closest(s)||(t=!1,setTimeout((function(){t||r.blur()}),50)))}}};n.addEventListener("ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",a,!1)}(),l&&function(t){var e=document,n=function(e){v(e.target,t)},o=function(t){v(t.target,0)};e.addEventListener("focusin",n),e.addEventListener("focusout",o)}(n);for(var g=0,L=m;g<L.length;g++){var y=L[g];E(y)}e.addEventListener("ionInputDidLoad",(function(t){E(t.detail)})),e.addEventListener("ionInputDidUnload",(function(t){!function(t){var e;u&&((e=p.get(t))&&e(),p.delete(t));r&&((e=h.get(t))&&e(),h.delete(t))}(t.detail)}))}}}]);
//# sourceMappingURL=4.c2892217.chunk.js.map