!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var r,o,i,a=n(4),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){i=!1}function c(e){if(e){if(e!==r){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,n){return t!==n.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,u()}}else r!==s&&(r=s,u())}function l(){return i||(i=function(){r||c(s);for(var e,t=r.split(""),n=[],o=a.nextValue();t.length>0;)o=a.nextValue(),e=Math.floor(o*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||s},characters:function(e){return c(e),r},seed:function(e){a.seed(e),o!==e&&(u(),o=e)},lookup:function(e){return l()[e]},shuffled:l}},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){},function(e,t,n){"use strict";var r=n(0),o=n(5),i=n(9),a=n(10)||0;function s(){return o(a)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return a=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=i},function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},function(e,t,n){"use strict";var r,o,i=n(6),a=(n(0),1459707606518),s=6;e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-a));return n===o?r++:(r=0,o=n),t+=i(s),t+=i(e),r>0&&(t+=i(r)),t+=i(n)}},function(e,t,n){"use strict";var r=n(0),o=n(7),i=n(8);e.exports=function(e){for(var t,n=0,a="";!t;)a+=i(o,r.get(),1),t=e<Math.pow(16,n+1),n++;return a}},function(e,t,n){"use strict";var r,o="object"==typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(e){return o.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},function(e,t){e.exports=function(e,t,n){var r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=Math.ceil(1.6*r*n/t.length);n=+n;for(var i="";;)for(var a=e(o),s=0;s<o;s++){var u=a[s]&r;if(t[u]&&(i+=t[u]).length===n)return i}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},function(e,t,n){"use strict";e.exports=0},function(e,t,n){"use strict";n.r(t);n(2);var r=n(1),o=n.n(r),i=0,a=1,s=2,u="edit",c="delete",l="expand_more",d="expand_less",f="delete-note",p="edit-note",h="increase-priority",y="decrease-priority";function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._notes=t}var t,n,r;return t=e,(n=[{key:"findNoteById",value:function(e){return this._notes.find(function(t){return t.id===e})}},{key:"saveNote",value:function(e){return this._notes.push(e),e}},{key:"deleteNote",value:function(e){this.findNoteById(e);var t=this._notes.findIndex(function(t){return t.id===e});this._notes.splice(t,1)}},{key:"updateNoteContent",value:function(e,t){var n=this.findNoteById(e);return n&&Object.assign(n,t),n}},{key:"updateNotePriority",value:function(e,t){var n=this.findNoteById(e);return n.priority=t,n}},{key:"filterNotesByQuery",value:function(e){return this._notes.filter(function(t){return t.title.toLowerCase().includes(e.toLowerCase())||t.body.toLowerCase().includes(e.toLowerCase())})}},{key:"filterNotesByPriority",value:function(e){var t=[],n=this._notes.find(function(t){return t.priority===e});return t.push(n),t}},{key:"notes",get:function(){return this._notes}}])&&v(t.prototype,n),r&&v(t,r),e}(),b=[{id:"id-1",title:"JavaScript essentials",body:"Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",priority:s},{id:"id-2",title:"Refresh HTML and CSS",body:"Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",priority:a},{id:"id-3",title:"Get comfy with Frontend frameworks",body:"First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",priority:a},{id:"id-4",title:"Winter clothes",body:"Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",priority:i}];function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _=function(e){var t=e.id,n=e.title,r=e.body,o=document.createElement("li");return o.classList.add("note-list__item"),o.dataset.id=t,o.append(x(n,r)),o},x=function(e,t){var n=document.createElement("div");n.classList.add("note");var r=document.createElement("div");r.classList.add("note__content");var o=document.createElement("h2");o.classList.add("note__title"),o.textContent=e;var i=document.createElement("p");return i.classList.add("note__body"),i.textContent=t,n.appendChild(r),r.appendChild(o),r.appendChild(i),n.appendChild(C()),n},C=function(e){var t=document.createElement("footer");t.classList.add("note__footer"),document.createElement("section").classList.add("note__section");var n=document.createElement("span");return n.classList.add("note__priority"),n.textContent="Priority: Low",t.appendChild(L(y,l,h,d)).append(n),t.appendChild(L(p,u,f,c)),t},L=function(e,t,n,r){var o=document.createElement("section");return o.classList.add("note__section"),o.appendChild(S(e,t)),o.appendChild(S(n,r)),o},S=function(e,t){var n=document.createElement("button");n.classList.add("action"),n.dataset.action=e;var r=document.createElement("i");return r.classList.add("material-icons"),r.classList.add("action__icon"),r.textContent=t,n.appendChild(r),n},k=function(e,t){var n=t.map(function(e){return _(e)});e.innerHTML="",e.append.apply(e,w(n))},E={editor:document.querySelector(".note-editor"),button:document.querySelector(".button"),list:document.querySelector(".note-list"),search:document.querySelector(".search-form")},j=o.a.generate(),M=new m(b);E.editor.addEventListener("submit",function(e){var t=g(e.target.elements,2),n=t[0],r=t[1],o=n.value,i=r.value;return e.preventDefault(),""===o.trim()||""===i.trim()?(e.preventDefault(),alert("Необходимо заполнить все поля!")):(e.currentTarget.reset(),function(e,t){var n=_({id:j,title:e,body:t});E.list.appendChild(n)}(o,i))}),E.list.addEventListener("click",function(e){var t=e.target,n=t.closest("button").dataset.action,r=t.closest(".note-list__item").dataset.id,o=t.closest(".note-list__item");n===f&&(M.deleteNote(r),o.remove())}),E.search.addEventListener("keyup",function(e){var t=e.target.value,n=M.filterNotesByQuery(t);k(E.list,n)}),k(E.list,b)}]);
//# sourceMappingURL=bundle.js.map