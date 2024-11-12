"use strict";(self.webpackChunkbitbom_docs=self.webpackChunkbitbom_docs||[]).push([[6061],{8811:(e,t,a)=>{a.d(t,{A:()=>c});a(6540);var n=a(4164),s=a(6907),i=a(8630),d=a(4182),r=a(4848);function l(e){let{className:t}=e;return(0,r.jsx)(d.A,{type:"caution",title:(0,r.jsx)(s.Rc,{}),className:(0,n.A)(t,i.G.common.unlistedBanner),children:(0,r.jsx)(s.Uh,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.AE,{}),(0,r.jsx)(l,{...e})]})}},4648:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var n=a(4164),s=a(6907),i=a(8630),d=a(4182),r=a(4848);function l(e){let{className:t}=e;return(0,r.jsx)(d.A,{type:"caution",title:(0,r.jsx)(s.Yh,{}),className:(0,n.A)(t,i.G.common.draftBanner),children:(0,r.jsx)(s.TT,{})})}var c=a(8811);function o(e){let{metadata:t}=e;const{unlisted:a,frontMatter:n}=t;return(0,r.jsxs)(r.Fragment,{children:[(a||n.unlisted)&&(0,r.jsx)(c.A,{}),n.draft&&(0,r.jsx)(l,{})]})}},5659:(e,t,a)=>{a.d(t,{A:()=>j});a(6540);var n=a(4164),s=a(3230),i=a(8630),d=a(4783);const r={iconEdit:"iconEdit_Z9Sw"};var l=a(4848);function c(e){let{className:t,...a}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.A)(r.iconEdit,t),"aria-hidden":"true",...a,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function o(e){let{editUrl:t}=e;return(0,l.jsxs)(d.A,{to:t,className:i.G.common.editThisPage,children:[(0,l.jsx)(c,{}),(0,l.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var h=a(9191);function m(e){let{lastUpdatedAt:t}=e;const a=new Date(t),n=(0,h.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,l.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:n})})},children:" on {date}"})}function u(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,l.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(m,{lastUpdatedAt:t}):"",byUser:a?(0,l.jsx)(u,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_JAkA"};function j(e){let{className:t,editUrl:a,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,l.jsxs)("div",{className:(0,n.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:a&&(0,l.jsx)(o,{editUrl:a})}),(0,l.jsx)("div",{className:(0,n.A)("col",x.lastUpdated),children:(s||i)&&(0,l.jsx)(p,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}},7591:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});a(6540);var n=a(4164),s=a(6644),i=a(8630),d=a(6143),r=a(2520),l=a(8793),c=a(4648),o=a(5659);const h={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=a(4848);function u(e){const{content:t}=e,{metadata:a,assets:u}=t,{title:p,editUrl:x,description:j,frontMatter:A,lastUpdatedBy:g,lastUpdatedAt:f}=a,{keywords:b,wrapperClassName:U,hide_table_of_contents:v}=A,y=u.image??A.image,w=!!(x||f||g);return(0,m.jsx)(s.e3,{className:(0,n.A)(U??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,m.jsxs)(d.A,{children:[(0,m.jsx)(s.be,{title:p,description:j,keywords:b,image:y}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,n.A)("row",h.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,n.A)("col",!v&&"col--8"),children:[(0,m.jsx)(c.A,{metadata:a}),(0,m.jsx)("article",{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(t,{})})}),w&&(0,m.jsx)(o.A,{className:(0,n.A)("margin-top--sm",i.G.pages.pageFooterEditMetaRow),editUrl:x,lastUpdatedAt:f,lastUpdatedBy:g})]}),!v&&t.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(l.A,{toc:t.toc,minHeadingLevel:A.toc_min_heading_level,maxHeadingLevel:A.toc_max_heading_level})})]})})]})})}},6907:(e,t,a)=>{a.d(t,{AE:()=>l,Rc:()=>d,TT:()=>o,Uh:()=>r,Yh:()=>c});a(6540);var n=a(3230),s=a(1141),i=a(4848);function d(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function o(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},9191:(e,t,a)=>{a.d(t,{i:()=>s});var n=a(7639);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,n.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,n.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);