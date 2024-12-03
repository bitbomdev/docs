"use strict";(self.webpackChunkbitbom_docs=self.webpackChunkbitbom_docs||[]).push([[8401],{8811:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),i=n(6907),a=n(8630),o=n(4182),l=n(4848);function r(e){let{className:t}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,s.A)(t,a.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(r,{...e})]})}},4648:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var s=n(4164),i=n(6907),a=n(8630),o=n(4182),l=n(4848);function r(e){let{className:t}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,s.A)(t,a.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var c=n(8811);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||s.unlisted)&&(0,l.jsx)(c.A,{}),s.draft&&(0,l.jsx)(r,{})]})}},4168:(e,t,n)=>{n.d(t,{A:()=>p});n(6540);var s=n(4164),i=n(8630),a=n(5357),o=n(260),l=n(4783),r=n(3230),c=n(8180),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function v(e){let{children:t,active:n,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function p(){const e=(0,a.OF)(),t=(0,o.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},306:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var s=n(6540),i=n(6644),a=n(4799),o=n(4848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(i.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(2216),h=n(3682);function b(){const{metadata:e}=c();return(0,o.jsx)(h.A,{previous:e.previous,next:e.next})}var x=n(7180),v=n(9436),p=n(8630),j=n(4721),g=n(6612);function f(){const{metadata:e}=c(),{title:t}=e,n=(0,j.vT)(),s={default:"Documentation",demos:"Demo",glossary:"Glossary"}[n?.pluginId||"default"]||"Documentation";return(0,o.jsx)("footer",{className:`row docusaurus-mt-lg ${p.G.docs.docFooter}`,children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(g.A,{title:t,type:s})})})}var A=n(4549),_=n(1507),N=n(3230);const T={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function C(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",T.tocCollapsibleButton,!t&&T.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(N.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const L={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function k(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:l}=(0,A.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(L.tocCollapsible,!a&&L.tocCollapsibleExpanded,n),children:[(0,o.jsx)(C,{collapsed:a,onClick:l}),(0,o.jsx)(A.N,{lazy:!0,className:L.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(_.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const y={tocMobile:"tocMobile_ITEo"};function M(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(k,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(p.G.docs.docTocMobile,y.tocMobile)})}var w=n(8793);function I(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(w.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var B=n(5225),V=n(2520);function H(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(p.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(B.A,{as:"h1",children:n})}),(0,o.jsx)(V.A,{children:t})]})}var G=n(4168),E=n(4648);const D={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function P(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,o.jsx)(M,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(I,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&D.docItemCol),children:[(0,o.jsx)(E.A,{metadata:s}),(0,o.jsx)(x.A,{}),(0,o.jsxs)("div",{className:D.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(G.A,{}),(0,o.jsx)(v.A,{}),n.mobile,(0,o.jsx)(H,{children:t}),(0,o.jsx)(f,{})]}),(0,o.jsx)(b,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function S(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(i.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(P,{children:(0,o.jsx)(n,{})})]})})}},3682:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(3230),i=n(3555),a=n(4848);function o(e){const{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(i.A,{...t,subLabel:(0,a.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(i.A,{...n,subLabel:(0,a.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},9436:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4164),i=n(3230),a=n(8630),o=n(1704),l=n(4848);function r(e){let{className:t}=e;const n=(0,o.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},7180:(e,t,n)=>{n.d(t,{A:()=>v});n(6540);var s=n(4164),i=n(7639),a=n(4783),o=n(3230),l=n(4721),r=n(8630),c=n(6457),d=n(1704),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.A,{to:n,onClick:s,children:(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,i.A)(),{pluginId:o}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(o),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.HW)(o),v=m??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:a,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(x,{className:t,versionMetadata:n}):null}},3555:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164),i=n(4783),a=n(4848);function o(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return(0,a.jsxs)(i.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6907:(e,t,n)=>{n.d(t,{AE:()=>r,Rc:()=>o,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var s=n(3230),i=n(1141),a=n(4848);function o(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,a.jsx)(i.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},6612:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(4783),i=n(4848);function a(e){let{title:t,type:n}=e;const a=`https://github.com/bitbomdev/docs/issues/new?title=${encodeURIComponent(`${n} Feedback: ${t}`)}&body=${encodeURIComponent(`Feedback for ${n.toLowerCase()}: **${t}**`)}`;return(0,i.jsx)("div",{className:"card margin-top--lg",children:(0,i.jsxs)("div",{className:"card__body",children:[(0,i.jsx)("h3",{children:"Share Your Thoughts"}),(0,i.jsxs)("p",{children:["Have thoughts or comments about this ",n.toLowerCase(),"? Start a discussion on GitHub!"]}),(0,i.jsx)(s.A,{className:"button button--primary",to:a,target:"_blank",rel:"noopener noreferrer",children:"Create GitHub Issue"})]})})}}}]);