(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[64],{1183:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),c=r(119),l=r(686),i=r.n(l),u=r(208),f=r(47),s=r(59),m=r(151),p=r(205),d=r(118),y=r(677),b=r(692);t.default=Object(f.connect)((function(e){return{cartItems:e.cartData,compareItems:e.compareData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,r,n){e(Object(s.g)(t,r,n))},deleteFromCompare:function(t,r){e(Object(m.d)(t,r))}}}))((function(e){var t=e.location,r=e.cartItems,l=e.compareItems,f=e.addToCart,s=e.deleteFromCompare,m=e.currency,v=t.pathname,h=Object(c.useToasts)().addToast;return a.a.createElement(n.Fragment,null,a.a.createElement(i.a,null,a.a.createElement("title",null,"Flone | Compare"),a.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),a.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),a.a.createElement(u.BreadcrumbsItem,{to:""+v},"Compare"),a.a.createElement(d.a,{headerTop:"visible"},a.a.createElement(y.a,null),a.a.createElement("div",{className:"compare-main-area pt-90 pb-100"},a.a.createElement("div",{className:"container"},l&&l.length>=1?a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("div",{className:"compare-page-content"},a.a.createElement("div",{className:"compare-table table-responsive"},a.a.createElement("table",{className:"table table-bordered mb-0"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Product Info"),l.map((function(e,t){var n=r.filter((function(t){return t.id===e.id}))[0];return a.a.createElement("td",{className:"product-image-title",key:t},a.a.createElement("div",{className:"compare-remove"},a.a.createElement("button",{onClick:function(){return s(e,h)}},a.a.createElement("i",{className:"pe-7s-trash"}))),a.a.createElement(o.c,{to:"/product/"+e.id,className:"image"},a.a.createElement("img",{className:"img-fluid",src:""+e.image[0],alt:""})),a.a.createElement("div",{className:"product-title"},a.a.createElement(o.c,{to:"/product/"+e.id},e.name)),a.a.createElement("div",{className:"compare-btn"},e.affiliateLink?a.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?a.a.createElement(o.c,{to:"".concat("","/product/").concat(e.id)},"Select Option"):e.stock&&e.stock>0?a.a.createElement("button",{onClick:function(){return f(e,h)},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==n&&n.quantity>0?"Added":"Add to cart"):a.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")))}))),a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Price"),l.map((function(e,t){var r=Object(p.a)(e.price,e.discount),o=(e.price*m.currencyRate).toFixed(2),c=(r*m.currencyRate).toFixed(2);return a.a.createElement("td",{className:"product-price",key:t},null!==r?a.a.createElement(n.Fragment,null,a.a.createElement("span",{className:"amount old"},m.currencySymbol+o),a.a.createElement("span",{className:"amount"},m.currencySymbol+c)):a.a.createElement("span",{className:"amount"},m.currencySymbol+o))}))),a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Description"),l.map((function(e,t){return a.a.createElement("td",{className:"product-desc",key:t},a.a.createElement("p",null,e.shortDescription?e.shortDescription:"N/A"))}))),a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Rating"),l.map((function(e,t){return a.a.createElement("td",{className:"product-rating",key:t},a.a.createElement(b.a,{ratingValue:e.rating}))}))))))))):a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("div",{className:"item-empty-area text-center"},a.a.createElement("div",{className:"item-empty-area__icon mb-30"},a.a.createElement("i",{className:"pe-7s-shuffle"})),a.a.createElement("div",{className:"item-empty-area__text"},"No items found in compare ",a.a.createElement("br",null)," ",a.a.createElement(o.c,{to:"/shop-grid-standard"},"Add Items")))))))))}))},677:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(2),c=r(208);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(c.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.d,finalItem:"span"}))))}},686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var n=c(r(703)),a=c(r(689)),o=c(r(705));function c(e){return e&&e.__esModule?e:{default:e}}var l=a.default;t.default=l},689:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=l(r(3)),o=l(r(37)),c=r(704);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,y,b,v=function(e){function t(){return u(this,t),s(this,m(t).apply(this,arguments))}var r,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);o.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),a=document.head,o=a.innerHTML;(n=(n=n.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(a,r)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(a,n)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(a,o)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(r.prototype,a),l&&f(r,l),t}(n.Component);d=v,y="contextTypes",b={extract:a.default.func},y in d?Object.defineProperty(d,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[y]=b;var h=v;t.default=h,e.exports=t.default},692:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){for(var t=e.ratingValue,r=[],o=0;o<5;o++)r.push(a.a.createElement("i",{className:"fa fa-star-o",key:o}));if(t&&t>0)for(var c=0;c<=t-1;c++)r[c]=a.a.createElement("i",{className:"fa fa-star-o yellow",key:c});return a.a.createElement(n.Fragment,null,r)}},703:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(0),o=(n=r(3))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return l(this,t),u(this,f(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&i(r.prototype,n),o&&i(r,o),t}(a.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(m,"childContextTypes",{extract:o.default.func});var p=m;t.default=p,e.exports=t.default},704:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?r=e:"meta"===a?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],l=c.props.id;(l?!t.id[l]:0===a.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),o.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var a,o=e.getAttribute(n);return o?r.concat((a=t.querySelectorAll("[".concat(n,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,a=t.length;n<a;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],a=n.concat(["itemProp"]),o=a.concat(["id"])},705:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=c(r(3)),o=c(r(689));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,y,b=function(e){function t(){return i(this,t),f(this,s(t).apply(this,arguments))}var r,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){return n.default.createElement(o.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(r.prototype,a),c&&u(r,c),t}(n.Component);p=b,d="propTypes",y={title:a.default.string},d in p?Object.defineProperty(p,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[d]=y;var v=b;t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=64.45a85436.chunk.js.map