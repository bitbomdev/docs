"use strict";(self.webpackChunkbitbom_docs=self.webpackChunkbitbom_docs||[]).push([[1178],{2712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),i=(t(9489),t(7227),t(735)),l=t(6455);const o={title:"Starting up Minefield",slug:"starting-up-minefield",description:"Learn how to start up Minefield",authors:["bitbomdev"],tags:["starting-up-minefield"]},s="Starting up Minefield",c={id:"startup",title:"Starting up Minefield",description:"Learn how to start up Minefield",source:"@site/demos/01_startup.mdx",sourceDirName:".",slug:"/starting-up-minefield",permalink:"/demos/starting-up-minefield",draft:!1,unlisted:!1,editUrl:"https://github.com/bitbomdev/docs/tree/main/demos/01_startup.mdx",tags:[{inline:!0,label:"starting-up-minefield",permalink:"/demos/tags/starting-up-minefield"}],version:"current",lastUpdatedBy:"Naveen",lastUpdatedAt:1733261008e3,sidebarPosition:1,frontMatter:{title:"Starting up Minefield",slug:"starting-up-minefield",description:"Learn how to start up Minefield",authors:["bitbomdev"],tags:["starting-up-minefield"]},sidebar:"demos",next:{title:"Integrating OpenSSF Scorecard Data into the Graph",permalink:"/demos/ingsting-scorecard/ingesting-scorecard"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Installing Minefield",id:"installing-minefield",level:2},...i.RM,{value:"Installing Scorecard Downloader (Optional)",id:"installing-scorecard-downloader-optional",level:2},...l.RM];function h(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"starting-up-minefield",children:"Starting up Minefield"})}),"\n",(0,r.jsxs)(n.p,{children:["Learn how to install ",(0,r.jsx)(n.a,{href:"https://github.com/bitbomdev/minefield",children:"Minefield"})]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"The installation consists of two main components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Minefield"}),": The core engine that graphs and analyzes Software Bill of Materials (SBOM) data"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Scorecard Downloader"}),": A tool to fetch OpenSSF Scorecard data for GitHub repositories (optional)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-minefield",children:"Installing Minefield"}),"\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"installing-scorecard-downloader-optional",children:"Installing Scorecard Downloader (Optional)"}),"\n",(0,r.jsx)(n.p,{children:"The Scorecard Downloader helps fetch security metrics data that can be ingested into Minefield. You can skip this step if you have your own data source."}),"\n",(0,r.jsx)(l.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},735:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var r=t(4848),a=t(8453),i=t(9489),l=t(7227);const o=[];function s(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(i.A,{groupId:"installation-method",children:[(0,r.jsx)(l.A,{value:"git",label:"Git",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:bitbomdev/minefield.git\ncd minefield\ngo build -o minefield main.go\n"})})}),(0,r.jsx)(l.A,{value:"github-cli",label:"GitHub CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gh repo clone bitbomdev/minefield\ncd minefield\ngo build -o minefield main.go\n"})})}),(0,r.jsx)(l.A,{value:"docker",label:"Docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull ghcr.io/bitbomdev/minefield:latest\ndocker run -it ghcr.io/bitbomdev/minefield:latest\n"})})}),(0,r.jsx)(l.A,{value:"go",label:"Go Install",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get github.com/bitbomdev/minefield\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},6455:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var r=t(4848),a=t(8453),i=t(9489),l=t(7227);const o=[];function s(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(i.A,{groupId:"scorecard-installation",children:[(0,r.jsx)(l.A,{value:"git",label:"Git",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:bitbomdev/scorecard-downloader.git\ncd scorecard-downloader\ngo build\n"})})}),(0,r.jsx)(l.A,{value:"github-cli",label:"GitHub CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gh repo clone bitbomdev/scorecard-downloader\ncd scorecard-downloader\ngo build\n"})})}),(0,r.jsx)(l.A,{value:"go",label:"Go Install",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get github.com/bitbomdev/scorecard-downloader\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),a=t(4164),i=t(4245),l=t(6347),o=t(6494),s=t(2814),c=t(5167),u=t(9900);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:a}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);