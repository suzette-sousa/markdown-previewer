(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},16:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),o=t.n(a),i=t(8),c=t.n(i),s=(t(14),t(2)),d=t(3),l=t(5),u=t(4),h=(t(15),function(n){Object(l.a)(t,n);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{id:"editor",className:"padd-2",children:[Object(r.jsxs)("label",{htmlFor:"editor-area",className:"editor-head",children:[Object(r.jsx)("strong",{className:"txt-upp",children:"\u2022 Editeur markdown \u2022"}),Object(r.jsx)("em",{children:"Editer le code ci-dessous et visualiser le code html correspondant"})]}),Object(r.jsx)("textarea",{htmlFor:"editor-area",className:"padd-2",onChange:this.props.handleChange,value:this.props.markdown})]})}}]),t}(o.a.Component)),v=function(n){Object(l.a)(t,n);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{id:"preview",children:Object(r.jsx)("div",{className:"padd-2",dangerouslySetInnerHTML:{__html:this.props.convertedmarkdown}})})}}]),t}(o.a.Component),p=t(7),b=t.n(p),g='\n# Ma page HTML g\xe9n\xe9r\xe9e \xe0 partir du code markdown (titre niveau 1)\n\n___\n\n## Titres (niveau 2)\n\n<br>\n\n### Niveau 3\n#### Niveau 4\n##### Niveau 5\n###### Niveau 6\n\n<br>\n\n## Codes\n\n<br>\n\n`<div>Code sur une ligne</div>`\n\n<br>\n\n    const codeBlock = () => {\n        return "Code sur plusieurs lignes";\n    }\n\n<br>\n\n## Listes\n\n<br>\n\n1. Premier \xe9l\xe9ment de liste\n2. Second \xe9l\xe9ment de liste\n3. Troisi\xe8me \xe9l\xe9ment de liste\n    - Premier \xe9l\xe9ment imbriqu\xe9\n    - Second \xe9l\xe9ment imbriqu\xe9\n4. Quatri\xe8me \xe9l\xe9ment de liste\n\n<br>\n\n## Citation\n\n<br>\n\n> blockquote\n\n<br>\n\n## Line break\n\n<br>\n\nParagraphe avec lignes s\xe9par\xe9s par un br  \n2 espaces \xe0 la fin de la ligne pr\xe9c\xe9dente  \n\n<br>\n\n## Apparence texte\n\n<br>\n\n**Texte en gras**\n\n<br>\n\n_Texte en italique_\n\n<br>\n\n## Image\n\n<br>\n\n![Logo React](https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png)\n\n<br>\n\n## Lien\n\n<br>\n\n[Lien vers un guide markdown](https://www.markdownguide.org/basic-syntax/)\n\n***\n\n',m=function(n){Object(l.a)(t,n);var e=Object(u.a)(t);function t(){var n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))).state={markdown:g,convertedmarkdown:b()(g)},n.handleChange=function(e){n.setState({markdown:e.target.value,convertedmarkdown:b()(e.target.value)})},n}return Object(d.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{handleChange:this.handleChange,markdown:this.state.markdown}),Object(r.jsx)(v,{handleChange:this.handleChange,convertedmarkdown:this.state.convertedmarkdown})]})}}]),t}(o.a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var j=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),o(n),i(n)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/markdown-previewer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/markdown-previewer","/service-worker.js");w?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):f(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):f(e,n)}))}}(),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.09072644.chunk.js.map