"use strict";(self.webpackChunkbitbom_docs=self.webpackChunkbitbom_docs||[]).push([[4531],{9101:(e,t,a)=>{a.d(t,{in:()=>d,x:()=>i,e7:()=>c,J_:()=>f});var n=a(6540),s=a(4799),l=a(3512),r=a(4848);function i(){const e=(0,l.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=n.createContext(null);function d(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(o.Provider,{value:l,children:t})}function c(){const e=(0,n.useContext)(o);if(null===e)throw new s.dV("BlogPostProvider");return e}var u=a(8180),g=a(7639);const h=e=>new Date(e).toISOString();function m(e){const t=e.map(b);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:x({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(){const e=i(),{assets:t,metadata:a}=c(),{siteConfig:n}=(0,g.A)(),{withBaseUrl:s}=(0,u.hH)(),{date:l,title:r,description:o,frontMatter:d,lastUpdatedAt:f}=a,b=t.image??d.image,x=d.keywords??[],v=f?h(f):void 0,j=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:r,name:r,description:o,datePublished:l,...v?{dateModified:v}:{},...m(a.authors),...p(b,s,r),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function b(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function x(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}a(4783)},4934:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(3230),s=a(3555),l=a(4848);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,l.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,l.jsx)(s.A,{permalink:a,title:(0,l.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,l.jsx)(s.A,{permalink:r,title:(0,l.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},5659:(e,t,a)=>{a.d(t,{A:()=>f});a(6540);var n=a(4164),s=a(3230),l=a(8630),r=a(4783);const i={iconEdit:"iconEdit_Z9Sw"};var o=a(4848);function d(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.A)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,o.jsxs)(r.A,{to:t,className:l.G.common.editThisPage,children:[(0,o.jsx)(d,{}),(0,o.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=a(9191);function g(e){let{lastUpdatedAt:t}=e;const a=new Date(t),n=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:n})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function m(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:l.G.common.lastUpdated,children:[(0,o.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(g,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function f(e){let{className:t,editUrl:a,lastUpdatedAt:s,lastUpdatedBy:l}=e;return(0,o.jsxs)("div",{className:(0,n.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(c,{editUrl:a})}),(0,o.jsx)("div",{className:(0,n.A)("col",p.lastUpdated),children:(s||l)&&(0,o.jsx)(m,{lastUpdatedAt:s,lastUpdatedBy:l})})]})}},3555:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var n=a(4164),s=a(4783),l=a(4848);function r(e){const{permalink:t,title:a,subLabel:r,isNext:i}=e;return(0,l.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}},1883:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4164),s=a(4783);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(4848);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,r.jsx)("span",{children:i})]})}},1113:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var n=a(4164),s=a(3230),l=a(1883);const r={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(4848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,n.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:r.tag,children:(0,i.jsx)(l.A,{...e})},e.permalink)))})]})}},9191:(e,t,a)=>{a.d(t,{i:()=>s});var n=a(7639);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,n.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,n.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},7824:(e,t,a)=>{a.d(t,{W:()=>d});var n=a(6540),s=a(7639);const l=["zero","one","two","few","many","other"];function r(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),l=a.pluralForms.indexOf(s);return n[Math.min(l,n.length-1)]}(a,t,e)}}}}]);