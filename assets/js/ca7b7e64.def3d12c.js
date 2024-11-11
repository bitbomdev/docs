"use strict";(self.webpackChunkbitbom_docs=self.webpackChunkbitbom_docs||[]).push([[6318],{8854:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(4848),a=i(8453);const s={slug:"using-participle",title:"Why We Use Participle?",description:"Learn why we chose Participle and Roaring Bitmaps over GraphQL for our project.",authors:["NeilNaveen","NaveenSrinivasan"],tags:["Participle","Roaring Bitmaps","GraphQL","SBOM","dependency graphs","Minefield"],image:"/img/blog/using-participle/participle-graph.png"},t=void 0,o={permalink:"/blog/using-participle",source:"@site/blog/2024-9-12-using-participle/index.mdx",title:"Why We Use Participle?",description:"Learn why we chose Participle and Roaring Bitmaps over GraphQL for our project.",date:"2024-09-12T00:00:00.000Z",tags:[{inline:!0,label:"Participle",permalink:"/blog/tags/participle"},{inline:!0,label:"Roaring Bitmaps",permalink:"/blog/tags/roaring-bitmaps"},{inline:!0,label:"GraphQL",permalink:"/blog/tags/graph-ql"},{inline:!0,label:"SBOM",permalink:"/blog/tags/sbom"},{inline:!0,label:"dependency graphs",permalink:"/blog/tags/dependency-graphs"},{inline:!0,label:"Minefield",permalink:"/blog/tags/minefield"}],readingTime:5.045,hasTruncateMarker:!0,authors:[{name:"Neil Naveen",title:"bitbom and OpenSSF Maintainer",url:"https://github.com/neilnaveen",page:{permalink:"/blog/authors/neil-naveen"},socials:{github:"https://github.com/neilnaveen",leetcode:"https://leetcode.com/u/neilnaveen"},imageURL:"https://github.com/neilnaveen.png",key:"NeilNaveen"},{name:"Naveen Srinivasan",title:"bitbom and OpenSSF Maintainer",url:"https://github.com/naveensrinivasan",page:{permalink:"/blog/authors/naveen-srinivasan"},socials:{x:"https://x.com/Naveen_Srini_",linkedin:"https://www.linkedin.com/in/naveensrinivasan/",github:"https://github.com/naveensrinivasan"},imageURL:"https://github.com/naveensrinivasan.png",key:"NaveenSrinivasan"}],frontMatter:{slug:"using-participle",title:"Why We Use Participle?",description:"Learn why we chose Participle and Roaring Bitmaps over GraphQL for our project.",authors:["NeilNaveen","NaveenSrinivasan"],tags:["Participle","Roaring Bitmaps","GraphQL","SBOM","dependency graphs","Minefield"],image:"/img/blog/using-participle/participle-graph.png"},unlisted:!1,prevItem:{title:"How Minefield Enables Air-Gapped SBOM Vulnerability Graphing Like Git's Disconnected Mode",permalink:"/blog/Air-Gapped-Vulnerability"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"The Attraction of GraphQL:",id:"the-attraction-of-graphql",level:2},{value:"Why GraphQL Fell Short for Complex Dependency Graphs",id:"why-graphql-fell-short-for-complex-dependency-graphs",level:2},{value:"Why Participle?",id:"why-participle",level:3},{value:"Roaring Bitmaps: Supercharging Query Performance",id:"roaring-bitmaps-supercharging-query-performance",level:2},{value:"Why Roaring Bitmaps?",id:"why-roaring-bitmaps",level:3},{value:"Real-World Use Case: Vulnerability Analysis at Scale",id:"real-world-use-case-vulnerability-analysis-at-scale",level:2},{value:"Conclusion: Choosing the Right Tool for the Job",id:"conclusion-choosing-the-right-tool-for-the-job",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"caged-floating-island",src:i(8725).A+"",width:"1456",height:"816"})}),"\n",(0,r.jsx)(n.p,{children:"We chose Participle and Roaring Bitmaps over GraphQL. Here's why."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TLDR:"})," We had to make a crucial decision when developing ",(0,r.jsx)(n.strong,{children:"Minefield"}),", our tool for analyzing Software Bill of Materials (SBOMs) and their dependency graphs. Initially, we considered using ",(0,r.jsx)(n.strong,{children:"GraphQL"})," to query the intricate relationships between dependencies, dependents, and other relationships. However, as we delved deeper, it became evident that GraphQL wasn\u2019t the ideal solution for our requirements, which included efficient, expressive, and high-performance querying on large, complex datasets.\nThat\u2019s when we opted to create a ",(0,r.jsx)(n.strong,{children:"custom Domain-Specific Language (DSL)"})," using ",(0,r.jsx)(n.strong,{children:"Participle"}),", a parsing library in Golang, and to enhance its performance, we backed it with ",(0,r.jsx)(n.strong,{children:"Roaring Bitmaps"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"In this article, we will explore the reasons behind this decision and explain how it can help you tackle complex querying problems in your projects."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"the-attraction-of-graphql",children:"The Attraction of GraphQL:"}),"\n",(0,r.jsx)(n.p,{children:"Our Initial Consideration is GraphQL, a formidable tool that offers flexibility, is driven by schemas, and is widely adopted in the development community. Initially, it appeared to be the perfect fit for querying Minefield\u2019s dependency graphs.\nIt allowed us to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retrieve only the necessary data"}),", thereby reducing over-fetching commonly found in REST APIs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Utilize a robust schema"}),", which defines the structure of the data, making it simple to work with and validate queries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Leverage a vast ecosystem"})," equipped with tools for clients, servers, and documentation."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Nevertheless, as we started experimenting, we encountered critical obstacles that led us to reconsider using GraphQL as a solution for querying SBOMs."}),"\n",(0,r.jsx)(n.h2,{id:"why-graphql-fell-short-for-complex-dependency-graphs",children:"Why GraphQL Fell Short for Complex Dependency Graphs"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nested Relationships are Cumbersome"}),(0,r.jsx)(n.br,{}),"\n","Dependency graphs are often deeply nested. You have to track which packages a library depends on and the entire chain of dependencies that follow. Writing deeply nested queries in GraphQL quickly became unwieldy and hard to manage."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Complex Set-Based Operations"}),(0,r.jsx)(n.br,{}),"\n",'GraphQL is great for fetching specific pieces of data, but it wasn\'t designed for complex set-based operations like intersections, unions, or complements. When dealing with millions of dependencies, performing these operations is crucial for answering questions like "Which dependencies are affected by this vulnerability but not by others?"']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Performance Bottlenecks"}),(0,r.jsx)(n.br,{}),"\n","As the dataset grew, performance became a concern. Querying large, complex graphs using GraphQL created a lot of overhead that slowed execution, especially when we needed to perform set-based operations on large lists of dependencies and vulnerabilities."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"We recognized the need for a tailored solution to query complex dependency graphs efficiently."}),"\n",(0,r.jsxs)(n.p,{children:["To address this, we developed a ",(0,r.jsx)(n.strong,{children:"custom DSL"})," using ",(0,r.jsx)(n.strong,{children:"Participle"}),", a Golang parsing library that enabled us to define our own query language grammar with ease."]}),"\n",(0,r.jsx)(n.p,{children:"Our DSL empowers us to construct potent, expressive queries that are simple to compose and execute efficiently."}),"\n",(0,r.jsxs)(n.p,{children:["For instance, consider this straightforward example: ",(0,r.jsx)(n.code,{children:"dsl (dependencies library pkg:golang/net and not (dependents library pkg:golang/example)) "}),"\nThis query identifies all libraries dependent on ",(0,r.jsx)(n.code,{children:"golang/net"})," but not relied upon by ",(0,r.jsx)(n.code,{children:"golang/example"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Expressing such nuanced queries clearly in GraphQL was challenging, but our DSL effortlessly managed this task."}),"\n",(0,r.jsx)(n.h3,{id:"why-participle",children:"Why Participle?"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Native to Go"}),(0,r.jsx)(n.br,{}),"\n","We wanted something that felt natural for Go developers. We defined our query language with Participle using Go structs, making the DSL intuitive and type-safe."]}),"\n",(0,r.jsx)(n.p,{children:"Example grammar definition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type Expression struct {\n    Left     Term   @@\n    Operator string @("and" | "or" | "xor")?\n    Right    *Expression @@?\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Strong Typing"}),(0,r.jsx)(n.br,{}),"\n","Leveraging Go's type system allowed us to create a robust DSL that's easy to extend and maintain. Adding new query operators or types is as simple as defining new Go structs and adding them to the parser."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Extensibility and Performance"}),(0,r.jsx)(n.br,{}),"\n","Since we controlled the language's design, we could optimize it for exactly what we needed. With Participle, building a DSL that supports nested queries, conditional logic, and complex operations like set intersections was easy."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"roaring-bitmaps-supercharging-query-performance",children:"Roaring Bitmaps: Supercharging Query Performance"}),"\n",(0,r.jsx)(n.p,{children:"Once Participle parses the queries, we apply them using Roaring Bitmaps, a data structure specifically designed for fast set operations. This was a key advantage over GraphQL, which doesn't natively support efficient set-based operations."}),"\n",(0,r.jsx)(n.h3,{id:"why-roaring-bitmaps",children:"Why Roaring Bitmaps?"}),"\n",(0,r.jsxs)(n.p,{children:["Roaring Bitmaps are perfect for ",(0,r.jsx)(n.strong,{children:"large-scale datasets"})," like dependency graphs. They allow us to perform operations like ",(0,r.jsx)(n.strong,{children:"AND"}),", ",(0,r.jsx)(n.strong,{children:"OR"}),", and ",(0,r.jsx)(n.strong,{children:"XOR"})," on massive lists of dependencies in milliseconds, without sacrificing memory efficiency."]}),"\n",(0,r.jsx)(n.p,{children:"Here's how we evaluate a parsed query using Roaring Bitmaps:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func evaluateExpression(expr *Expression) *roaring.Bitmap {\n    left := evaluateTerm(expr.Left)\n    if expr.Operator == nil {\n        return left\n    }\n    right := evaluateExpression(expr.Right)\n    switch *expr.Operator {\n    case "and":\n        return roaring.And(left, right)\n    case "or":\n        return roaring.Or(left, right)\n    case "xor":\n        return roaring.Xor(left, right)\n    }\n    return nil\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This allows us to calculate query results quickly and efficiently, even when dealing with millions of dependencies and vulnerabilities."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"real-world-use-case-vulnerability-analysis-at-scale",children:"Real-World Use Case: Vulnerability Analysis at Scale"}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s an example of a real-world query you can run in Minefield using our DSL:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dsl",children:"(dependents vulns CVE-2023-12345 and not dependencies library pkg:golang/patchedlib)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This query finds all dependents affected by a vulnerability (",(0,r.jsx)(n.code,{children:"CVE-2023-12345"}),") that haven\u2019t yet patched the issue by using a specific library (",(0,r.jsx)(n.code,{children:"golang/patchedlib"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"In a GraphQL world, expressing this kind of query would be cumbersome, and executing it would be slow due to the overhead of navigating through layers of nested data. With our custom DSL and Roaring Bitmaps, however, it runs quickly\u2014even on large datasets."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"conclusion-choosing-the-right-tool-for-the-job",children:"Conclusion: Choosing the Right Tool for the Job"}),"\n",(0,r.jsxs)(n.p,{children:["GraphQL is an incredibly useful tool for many use cases, but it wasn\u2019t the right fit for Minefield\u2019s complex dependency graph queries. By using ",(0,r.jsx)(n.strong,{children:"Participle"})," to build a custom DSL and ",(0,r.jsx)(n.strong,{children:"Roaring Bitmaps"})," to optimize query performance, we created a solution that\u2019s both ",(0,r.jsx)(n.strong,{children:"expressive"})," and ",(0,r.jsx)(n.strong,{children:"blazingly fast"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The takeaway? Always choose the right tool for the problem you\u2019re solving. When you need something more tailored, building a custom solution can save you a lot of headaches down the road\u2014especially when working with large, complex datasets."}),"\n",(0,r.jsxs)(n.p,{children:["If you\u2019re interested in digging deeper into how we built Minefield\u2019s custom DSL or have your own experiences with dependency analysis, check out our ",(0,r.jsx)(n.a,{href:"https://github.com/bitbomdev/minefield",children:"GitHub repository"})," and let us know what you think!"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8725:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/participle-graph-c9f9ed5fdf9f452f10e192fe9a0af796.png"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var r=i(6540);const a={},s=r.createContext(a);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);