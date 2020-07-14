(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),o=(r(0),r(207)),c={id:"_basic_two_square_",title:"twoSquare",sidebar_label:"twoSquare"},b={id:"modules/_basic_two_square_",isDocsHomePage:!1,title:"twoSquare",description:"twoSquare(a number[]",source:"@site/docs\\modules\\_basic_two_square_.md",permalink:"/docs/modules/_basic_two_square_",sidebar_label:"twoSquare",sidebar:"sidebar",previous:{title:"twoProduct",permalink:"/docs/modules/_basic_two_product_"},next:{title:"twoSum",permalink:"/docs/modules/_basic_two_sum_"}},i=[],l={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"twoSquare"),"(",Object(o.b)("inlineCode",{parentName:"p"},"a"),": number): ",Object(o.b)("em",{parentName:"p"},"number[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/basic/two-square.ts#L20"}),"basic/two-square.ts:20"))),Object(o.b)("p",null,"Returns the exact result of squaring a double."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the resulting expansion is least significant double first.")),Object(o.b)("p",null,"Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where\np >= 6. Then the following algorithm will produce a nonoverlapping expansion\nx + y such that ab = x + y, where x is an approximation to ab and y\nrepresents the roundoff error in the calculation of x. Furthermore, if\nround-to-even tiebreaking is used, x and y are non-adjacent."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"}),"https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"a")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A double")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"number[]")))}u.isMDXComponent=!0},207:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return r?a.a.createElement(d,b(b({ref:t},l),{},{components:r})):a.a.createElement(d,b({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);