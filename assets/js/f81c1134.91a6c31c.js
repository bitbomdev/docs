"use strict";(self.webpackChunkbitbom=self.webpackChunkbitbom||[]).push([[130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"isolating-and-fixing-vulnerabilities-in-an-air-gapped-environment","metadata":{"permalink":"/blog/isolating-and-fixing-vulnerabilities-in-an-air-gapped-environment","source":"@site/blog/2024-10-25-Isolating-and-Fixing-Vulnerabilities-in-an-Air-Gapped-Environment/index.md","title":"Isolating and Fixing Vulnerabilities in an Air-Gapped Environment","description":"How we isolated and fixed vulnerabilities in an air-gapped environment","date":"2024-10-25T00:00:00.000Z","tags":[{"inline":true,"label":"air-gapped","permalink":"/blog/tags/air-gapped"},{"inline":true,"label":"vulnerabilities","permalink":"/blog/tags/vulnerabilities"}],"readingTime":5.765,"hasTruncateMarker":true,"authors":[{"name":"BitBom","title":"Graphing SBOM\'s Fast","url":"https://github.com/bitbom","page":{"permalink":"/blog/authors/bit-bom"},"imageURL":"https://github.com/bitbomdev.png","key":"BitBom"}],"frontMatter":{"slug":"isolating-and-fixing-vulnerabilities-in-an-air-gapped-environment","title":"Isolating and Fixing Vulnerabilities in an Air-Gapped Environment","description":"How we isolated and fixed vulnerabilities in an air-gapped environment","keywords":["SBOM","dependency graphs","air-gapped","vulnerabilities"],"authors":["BitBom"],"tags":["air-gapped","vulnerabilities"]},"unlisted":false,"nextItem":{"title":"How Minefield Enables Air-Gapped SBOM Vulnerability Graphing Like Git\'s Disconnected Mode","permalink":"/blog/Air-Gapped-Vulnerability"}},"content":"Isolating and Identifying Critical Vulnerabilities in under 5 minutes (coffee break ;))\\n\\n\x3c!-- truncate --\x3e\\n\\n---\\n*TL;DR*\\n\\n*Minefield simplifies the process of discovering and addressing vulnerabilities across complex software projects by using fast, bitwise queries and Roaring Bitmaps to analyze Software Bill of Materials (SBOMs) in air-gapped environments. With straightforward commands, you can quickly identify affected packages, assess their impact, prioritize fixes for critical components, and systematically eliminate risks. Soon, an integrated Language Learning Model (LLM) will make writing these queries even easier, enabling more intuitive and efficient security management without compromising on safety.*\\n\\n## Introduction\\n\\nImagine you\'re managing a complex software project with thousands of dependencies. One day, researchers discover a critical vulnerability in a popular library. How quickly can you determine if your project is affected? How do you identify all the dependencies that rely on this vulnerable library? Enter [Minefield](https://github.com/bitbomdev/minefield) an air-gapped solution for analyzing Software Bill of Materials (SBOMs). By leveraging the power of [Roaring Bitmaps](https://github.com/RoaringBitmap/roaring) and bitwise queries, Minefield enables you to perform lightning-fast analyses, uncovering deep insights into your software dependencies with remarkable efficiency.\\n\\n## The Foundation: Instantaneous Queries\\n\\nMinefield\'s core capabilities are its basic queries for dependencies and dependents. Thanks to our [cache](https://github.com/bitbomdev/minefield/blob/main/pkg/graph/cache.go#L10), these operations are `O(1)` or instantaneous. This efficiency enables more complex analyses. It lets you quickly navigate vast dependency graphs.\\n\\n## Bitwise Operations: Combining Queries for Greater Insight\\n\\nThe real magic happens when we combine these basic queries using bitwise operations. Since the result of every query is a roaring bitmap, we can perform operations like `AND`, `OR`, and `XOR` on the results of multiple queries. This approach opens up many possibilities for analyzing software dependencies. It is especially useful for finding and fixing vulnerabilities.\\n\\n## A Story of Finding and Eliminating Vulnerabilities\\n\\nLet\'s walk through a real-world scenario:\\n\\n### The Vulnerability Alert\\n\\nYour security team alerts you to a critical vulnerability `GHSA-1234`. You need to determine:\\n\\n- How does the vulnerability affect your project?\\n\\n- How deeply ingrained is the vulnerable library in your dependency tree?\\n\\n- How can you isolate and address the vulnerability quickly?\\n\\n#### Step 1: Identifying Affected Dependencies\\n\\nOur first concern is to find all the packages affected by this vulnerability.\\n\\n```bash\\n\\nminefield query custom \\"dependents library GHSA-1234\\"\\n\\n```\\n\\nThis query returns all packages in your graph that depend on `GHSA-1234`, directly or transitively.\\n\\n#### Step 2: Assessing the Impact\\n\\nThis is a critical vulnerability. Before solving all problems, we want to find what parts of your main critical packages are affected. For example, assume you own `Kubernetes` which is your critical project. You want to know which `Kubernetes` dependencies are affected by this vulnerability. This is your first priority.\\n\\n```bash\\n\\nminefield query custom \\"dependencies library pkg:kubernetes and dependents library GHSA-1234\\"\\n\\n```\\n\\nThis bitwise `AND` narrows the list to only those `Kubernetes` dependencies that rely on vulnerable libraries. This gives you a basic understanding of how severe this problem is for `Kubernetes`. This query will give you a list of dependencies for `Kubernetes` that are affected by this vulnerability.\\n\\n#### Step 3: Prioritizing the Fix\\n\\nNow that we have this list, we need to inform the engineering team which packages to focus on. Remember, we first want our main package, `Kubernetes`, to be secure. \\n\\nLet\'s create a ranked list for the whole graph. It should rank packages by the number of their dependencies, affected by the vulnerability, that are dependencies of `Kubernetes`.\\n\\nThis is a mouthful, so let\'s break it down.\\n\\nLet\'s say we have packages `A`, `B`, and `C`. \\n\\n- `Kubernetes` depends on `A` and `C`. \\n\\n- `A` depends on `B` and `C`. \\n\\n- Both `A` and `B` are affected by the vulnerability. \\n\\nSo, package `A` is the one vulnerable dependency and `Kubernetes` dependency. \\n\\n```mermaid\\ngraph TB;\\n    subgraph MainPackage\\n        A[Kubernetes]\\n    end\\n    A --\x3e B[Package A]\\n    A --\x3e C[Package C]\\n    B --\x3e D[Package B]\\n    B --\x3e C\\n    B:::vulnerable\\n    D:::vulnerable\\n\\n    classDef vulnerable fill:#f96,stroke:#333,stroke-width:2px;\\n\\n    %% This diagram shows the relationships:\\n    %% - Kubernetes depends on A and C.\\n    %% - A depends on B and C.\\n    %% - Both A and B are vulnerable.\\n\\n```\\n\\n```bash\\n\\nminefield leaderboard custom \\"dependencies library and (dependents library GHSA-1234 and dependencies library pkg:kubernetes)\\"\\n\\n```\\n\\nThis command shows a leaderboard of affected packages. It helps you prioritize which parts to fix first.\\n\\n### Step 4: Fixing the rest of the graph\\n\\nWe fixed Kubernetes. Now, we need to find what to fix next. We want to run the previous query for all packages that are not Kubernetes dependencies.\\n\\n```bash\\n\\nminefield leaderboard custom \\"dependencies library and ((dependents library GHSA-1234 xor dependencies library pkg:Kubernetes ) and dependents library GHSA-1234)\\"\\n\\n```\\n\\nOk, so this is a little more complicated but still very close to the previous query, so let\'s break down the parenthesis.\\n\\n```((dependents library GHSA-1234 xor dependencies library pkg:Kubernetes ) and dependents library GHSA-1234)```\\n\\nFirst, ```(dependents library GHSA-1234 xor dependencies library pkg:Kubernetes )``` finds the unique elements of both queries. It means all the vulnerable libraries that are not dependencies of `Kubernetes` are in this. It also includes all dependencies of `Kubernetes` that are not affected by the vulnerability.\\n\\nThe second part, ```and dependents library GHSA-1234```, isolates just the vulnerable packages from the first query. It throws away anything that was not a vulnerable library.\\n\\nAt the we are end ranking all the packages in the graph by the number of dependencies that are affected by the vulnerabiltiy, that are not dependencies of `Kubernentes`. \\n\\n\\n## What\u2019s Up Coming\\n\\nWhile these queries are powerful, writing them repeatedly can become tedious. That\u2019s why we are developing a Large Language Model (LLM) to make this process smoother. Our goal is to simplify query creation, allowing you to interact with Minefield in a more natural, conversational way. This LLM will understand your needs and generate the necessary commands, saving you time and reducing the complexity of crafting intricate queries.\\n\\nMoreover, we plan to deploy this LLM in an air-gapped environment, ensuring that your data and analysis remain secure and isolated. This approach will maintain the high level of security Minefield is known for while enhancing its usability. Stay tuned for updates as we work towards making Minefield even more intuitive and efficient!\\n\\n## Conclusion\\n\\nIn today\'s fast-paced development world, we must quickly find and fix vulnerabilities. Minefield\'s bitwise queries empower you to perform complex analyses with ease, enabling you to:\\n\\n- Rapidly identify affected components when a vulnerability is discovered.\\n\\n- Analyze and compare different versions of your projects.\\n\\n- Perform intricate multi-step analyses for deep insights.\\n\\nMinefield uses fast, roaring bitmaps and flexible bitwise ops. It opens new ways to understand and manage software dependencies in air-gapped environments. Whether you\'re safeguarding your projects against vulnerabilities or optimizing your dependency graph, Minefield equips you with the tools you need to maintain a robust and secure software ecosystem.\\n\\n---\\n\\nReady to unleash the power of Minefield in your projects? Our docs explain how bitwise queries can improve your security and dependency management."},{"id":"Air-Gapped-Vulnerability","metadata":{"permalink":"/blog/Air-Gapped-Vulnerability","source":"@site/blog/2024-10-12-Can-Minefield\'s-Air-Gapped-SBOM-Graph-Function-Like-Git\'s-Disconnected-Mode/index.md","title":"How Minefield Enables Air-Gapped SBOM Vulnerability Graphing Like Git\'s Disconnected Mode","description":"How Minefield Graphed Vulnerabilities in an Air-Gapped Environment","date":"2024-10-12T00:00:00.000Z","tags":[{"inline":true,"label":"air-gapped","permalink":"/blog/tags/air-gapped"},{"inline":true,"label":"vulnerabilities","permalink":"/blog/tags/vulnerabilities"}],"readingTime":4.485,"hasTruncateMarker":true,"authors":[{"name":"BitBom","title":"Graphing SBOM\'s Fast","url":"https://github.com/bitbom","page":{"permalink":"/blog/authors/bit-bom"},"imageURL":"https://github.com/bitbomdev.png","key":"BitBom"}],"frontMatter":{"slug":"Air-Gapped-Vulnerability","title":"How Minefield Enables Air-Gapped SBOM Vulnerability Graphing Like Git\'s Disconnected Mode","description":"How Minefield Graphed Vulnerabilities in an Air-Gapped Environment","keywords":["SBOM","dependency graphs","air-gapped","vulnerabilities"],"authors":["BitBom"],"tags":["air-gapped","vulnerabilities"]},"unlisted":false,"prevItem":{"title":"Isolating and Fixing Vulnerabilities in an Air-Gapped Environment","permalink":"/blog/isolating-and-fixing-vulnerabilities-in-an-air-gapped-environment"},"nextItem":{"title":"Why We Use Participle?","permalink":"/blog/using-participle"}},"content":"Graphing vulnerabilities in an air-gapped environment is considered impossible, and we did it. Here\'s how.\\n\\n\x3c!-- truncate --\x3e\\n\\n---\\n_**TL;DR**: Inspired by Git\'s offline capabilities, Minefield\'s air-gapped SBOM vulnerability management tool allows secure, offline vulnerability ingestion and fast graphing. This enables users to integrate public and custom vulnerabilities in isolated environments, ensuring complete data control and enhanced security._\\n\\nAt Minefield, we took inspiration from Git\'s ability to function offline to create a fast, lightweight tool that operates effectively in an air-gapped environment. Minefield does not require internet access to function, which makes it ideal for secure, isolated settings such as critical infrastructure or sensitive corporate environments.\\n\\n## The Philosophy Behind Air-Gapped Design\\n\\n[Minefield\'s](https://github.com/bitbomdev/minefield) air-gapped approach addresses complex engineering challenges by reducing dependencies on external services. Focusing on simplicity, reliability, and control over the system ensures consistent and reliable results, particularly during testing.\\n\\n## How Vulnerability Ingestion Works\\n\\nHow do we handle vulnerability ingestion without relying on external network resources or shared vulnerability databases?\\n\\n\\nMinefield\'s speed and efficiency come from using Roaring Bitmaps and a direct node-to-node model. These approaches ensure efficient data storage and rapid query execution, making vulnerability graphing in air-gapped environments fast and reliable.\\n\\n**Data Structure and Algorithm:** Minefield uses Roaring Bitmaps to store relationship data, which keeps the graph lightweight and enables fast bitwise operations for queries. The direct node-to-node model simplifies graph maintenance, and caching common queries ensures O(1) lookup times, making the system highly efficient for handling vulnerability data in an air-gapped environment.\\n\\n**Direct Node-to-Node Model:** Instead of the traditional node-edge-node graph structure, Minefield adopts a direct node-to-node model. This reduces the complexity of maintaining explicit edges, making the graph lightweight and easier to manage.\\n\\n**Caching with Pre-Computed Queries:** Minefield caches dependents and dependencies to enhance performance, allowing for O(1) query times. This is critical for maintaining speed in an air-gapped environment.\\n\\n[![](https://mermaid.ink/img/pako:eNptkTtvhDAMx79K5PlQd4ZKPK6o0tEbaG8odDAXA5EgQXkM1em-e0NoBWrryf7b-cWPG1wVJ4ih1zgP7DVvJPNmXLsKb4b0Ki2W1Ofqwjha_NjEtK7Sc2m-FZL8F6KBROiowHkmzkohqRM08gY2QlY_y56MZbknP1zcKEljK0ZhBRnWaTWFPnZ_ZiyKHllenxRyJqRV4WmLhnZFm3esi9DKH7TS7MXPb3av8oA-_osJqae6oIViiZ0IOelWoeb78Vc3CdXZGqQ_ARxgIj2h4H7ptyXZgB1oogZi73Lq0I122c7dl6KzqvqUV4itdnQAN_vlUy7Qr3aCuMPReHVG-a7UFhMXVulyPWy47wG0cv2wYu5f4KWXlw?type=png)](https://mermaid.live/edit#pako:eNptkTtvhDAMx79K5PlQd4ZKPK6o0tEbaG8odDAXA5EgQXkM1em-e0NoBWrryf7b-cWPG1wVJ4ih1zgP7DVvJPNmXLsKb4b0Ki2W1Ofqwjha_NjEtK7Sc2m-FZL8F6KBROiowHkmzkohqRM08gY2QlY_y56MZbknP1zcKEljK0ZhBRnWaTWFPnZ_ZiyKHllenxRyJqRV4WmLhnZFm3esi9DKH7TS7MXPb3av8oA-_osJqae6oIViiZ0IOelWoeb78Vc3CdXZGqQ_ARxgIj2h4H7ptyXZgB1oogZi73Lq0I122c7dl6KzqvqUV4itdnQAN_vlUy7Qr3aCuMPReHVG-a7UFhMXVulyPWy47wG0cv2wYu5f4KWXlw)\\nMinefield takes a user-centric approach to vulnerability ingestion, allowing users to process data without Minefield relying on external databases, much like how Git operates offline with local repositories.\\n\\nMinefield\'s graphing capabilities are highly optimized for performance, ensuring it can quickly handle complex vulnerability data, even in an air-gapped setup. The data must conform to the OSV (Open Source Vulnerability) schema, a widely recognized standard that promotes consistency and reliability across different data sources.\\n\\nUsers can download vulnerability data from trusted sources like `osv.dev`\u2014available as data dumps at [this link](https://google.github.io/osv.dev/data/#data-dumps)\u2014package it as a zip file, and provide it to Minefield.\\n\\n## Custom Vulnerability Ingestion\\n\\nOne of Minefield\'s standout features is its ability to ingest custom vulnerabilities. Users can include vulnerabilities that adhere to the OSV schema, even if they are not listed in public databases. This flexibility allows organizations to address specific security concerns and incorporate proprietary or newly discovered vulnerabilities into their assessments.\\n\\n## Advantages of an Air-Gapped Approach\\n\\n**Enhanced Security**: Running in an air-gapped environment significantly improves data security by preventing unauthorized access, data leaks, and dependence on external systems. This benefits organizations dealing with sensitive information or operating in highly regulated industries.\\n\\n**Data Integrity and Control**: Keeping data local provides users complete control over the accuracy and integrity of their vulnerability information, minimizing the risk of data tampering or corruption from third-party sources.\\n\\n**Flexibility and Customization**: Users can include custom vulnerabilities, even those unavailable in public databases. This is crucial for organizations that need to address unique security challenges or incorporate findings from internal security reviews.\\n\\n## Challenges and Considerations\\n\\n**Manual Updates**: A significant challenge of air-gapped systems is the need for manual updates. Users must periodically ingest new vulnerability data to keep their assessments up-to-date. Fortunately, many databases, including osv.dev, offer frequent updates, making it relatively easy to download and update information. Organizations should establish routines for downloading and ingesting the latest data to ensure their security assessments are always practical.\\n\\n**User Responsibility**: With great power comes great responsibility. Users must ensure that the data they provide is current and accurate. This requires a proactive approach to managing data and maintaining the integrity of the security assessment process.\\n\\n## Vulnerability Leaderboard Overview\\n\\nAn example is the leaderboard in Minefield, which displays libraries and their vulnerability information.\\n\\n| Package                                                                                                                                  | Type    | ID   | Vulnerabilities |\\n| ---------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---- | --------------- |\\n| pkg.com/google/cadvisor@                                                                                                                 | library | 253  | 2               |\\n| pkg/setuptools\\\\@65.5.1                                                                                                                   | library | 211  | 1               |\\n| pkg.com/google/agi@                                                                                                                      | library | 192  | 1               |\\n| pkg/github.com/opencontainers/runc\\\\@v1.1.13                                                                                              | library | 327  | 1               |\\n| pkg/github.com/docker/docker\\\\@v26.1.4%2Bincompatible                                                                                     | library | 291  | 1               |\\n| pkg/ajv\\\\@8.11.0                                                                                                                          | library | 677  | 0               |\\n| pkg/%40babel/helper-remap-async-to-generator\\\\@7.18.9                                                                                     | library | 421  | 0               |\\n| pkg/github.com/google/trillian\\\\@v1.6.0                                                                                                   | library | 1354 | 0               |\\n| GO-2024-3110                                                                                                                             | vuln    | 1601 | 1               |\\n| GO-2024-3005                                                                                                                             | vuln    | 1603 | 1               |\\n| GHSA-cx63-2mw6-8hw5                                                                                                     |                 | vuln    | 1602 | 1               |\\n\\n## Conclusion\\n\\nBy focusing on an air-gapped design, Minefield offers Git-like control over vulnerability data, ensuring security while providing the flexibility to ingest various information. This approach empowers users to enhance their security posture and customize vulnerability management based on their unique needs.\\n\\nWith evolving security threats, Minefield offers a reliable solution for managing vulnerabilities in air-gapped environments. It\'s perfect for organizations needing strong security and complete data control.\\n\\nTo learn more about how we ingest vulnerabilities offline and to get a more hands-on experience, visit our [GitHub repository](https://github.com/bitbomdev/minefield) to get started."},{"id":"using-participle","metadata":{"permalink":"/blog/using-participle","source":"@site/blog/2024-9-12-Using-Participle/index.md","title":"Why We Use Participle?","description":"Learn why we chose Participle and Roaring Bitmaps over GraphQL for our project.","date":"2024-09-12T00:00:00.000Z","tags":[{"inline":true,"label":"participle","permalink":"/blog/tags/participle"},{"inline":true,"label":"roaring bitmaps","permalink":"/blog/tags/roaring-bitmaps"}],"readingTime":5.04,"hasTruncateMarker":true,"authors":[{"name":"Neil Naveen","title":"bitbom and OpenSSF Maintainer","url":"https://github.com/neilnaveen","page":{"permalink":"/blog/authors/neil-naveen"},"socials":{"github":"https://github.com/neilnaveen","leetcode":"https://leetcode.com/u/neilnaveen"},"imageURL":"https://github.com/neilnaveen.png","key":"NeilNaveen"},{"name":"Naveen Srinivasan","title":"bitbom and OpenSSF Maintainer","url":"https://github.com/naveensrinivasan","page":{"permalink":"/blog/authors/naveen-srinivasan"},"socials":{"x":"https://x.com/Naveen_Srini_","linkedin":"https://www.linkedin.com/in/naveensrinivasan/","github":"https://github.com/naveensrinivasan"},"imageURL":"https://github.com/naveensrinivasan.png","key":"NaveenSrinivasan"}],"frontMatter":{"slug":"using-participle","title":"Why We Use Participle?","description":"Learn why we chose Participle and Roaring Bitmaps over GraphQL for our project.","keywords":["Participle","Roaring Bitmaps","GraphQL","SBOM","dependency graphs"],"authors":["NeilNaveen","NaveenSrinivasan"],"tags":["participle","roaring bitmaps"]},"unlisted":false,"prevItem":{"title":"How Minefield Enables Air-Gapped SBOM Vulnerability Graphing Like Git\'s Disconnected Mode","permalink":"/blog/Air-Gapped-Vulnerability"}},"content":"We chose Participle and Roaring Bitmaps over GraphQL. Here\'s why.\\n\\n\x3c!-- truncate --\x3e\\n\\n---\\n\\n**TLDR:** We had to make a crucial decision when developing **Minefield**, our tool for analyzing Software Bill of Materials (SBOMs) and their dependency graphs. Initially, we considered using **GraphQL** to query the intricate relationships between dependencies, dependents, and other relationships. However, as we delved deeper, it became evident that GraphQL wasn\u2019t the ideal solution for our requirements, which included efficient, expressive, and high-performance querying on large, complex datasets.\\nThat\u2019s when we opted to create a **custom Domain-Specific Language (DSL)** using **Participle**, a parsing library in Golang, and to enhance its performance, we backed it with **Roaring Bitmaps**.\\n\\nIn this article, we will explore the reasons behind this decision and explain how it can help you tackle complex querying problems in your projects.\\n\\n--- \\n\\n## The Attraction of GraphQL:\\n\\nOur Initial Consideration is GraphQL, a formidable tool that offers flexibility, is driven by schemas, and is widely adopted in the development community. Initially, it appeared to be the perfect fit for querying Minefield\u2019s dependency graphs.\\nIt allowed us to:\\n- **Retrieve only the necessary data**, thereby reducing over-fetching commonly found in REST APIs.\\n- **Utilize a robust schema**, which defines the structure of the data, making it simple to work with and validate queries.\\n- **Leverage a vast ecosystem** equipped with tools for clients, servers, and documentation.\\n\\nNevertheless, as we started experimenting, we encountered critical obstacles that led us to reconsider using GraphQL as a solution for querying SBOMs.\\n\\n\\n## Why GraphQL Fell Short for Complex Dependency Graphs\\n\\n1. **Nested Relationships are Cumbersome**  \\n   Dependency graphs are often deeply nested. You have to track which packages a library depends on and the entire chain of dependencies that follow. Writing deeply nested queries in GraphQL quickly became unwieldy and hard to manage.\\n\\n2. **Complex Set-Based Operations**  \\n   GraphQL is great for fetching specific pieces of data, but it wasn\'t designed for complex set-based operations like intersections, unions, or complements. When dealing with millions of dependencies, performing these operations is crucial for answering questions like \\"Which dependencies are affected by this vulnerability but not by others?\\"\\n\\n3. **Performance Bottlenecks**  \\n   As the dataset grew, performance became a concern. Querying large, complex graphs using GraphQL created a lot of overhead that slowed execution, especially when we needed to perform set-based operations on large lists of dependencies and vulnerabilities.\\n\\n---\\n\\nWe recognized the need for a tailored solution to query complex dependency graphs efficiently.\\n\\nTo address this, we developed a **custom DSL** using **Participle**, a Golang parsing library that enabled us to define our own query language grammar with ease.\\n\\nOur DSL empowers us to construct potent, expressive queries that are simple to compose and execute efficiently.\\n\\nFor instance, consider this straightforward example: ```dsl (dependencies library pkg:golang/net and not (dependents library pkg:golang/example)) ```\\nThis query identifies all libraries dependent on `golang/net` but not relied upon by `golang/example`.\\n\\nExpressing such nuanced queries clearly in GraphQL was challenging, but our DSL effortlessly managed this task.\\n### Why Participle?\\n\\n1. **Native to Go**  \\n   We wanted something that felt natural for Go developers. We defined our query language with Participle using Go structs, making the DSL intuitive and type-safe.\\n\\n   Example grammar definition:\\n   ```go\\n   type Expression struct {\\n       Left     Term   @@\\n       Operator string @(\\"and\\" | \\"or\\" | \\"xor\\")?\\n       Right    *Expression @@?\\n   }\\n   ```\\n\\n2. **Strong Typing**  \\n   Leveraging Go\'s type system allowed us to create a robust DSL that\'s easy to extend and maintain. Adding new query operators or types is as simple as defining new Go structs and adding them to the parser.\\n\\n3. **Extensibility and Performance**  \\n   Since we controlled the language\'s design, we could optimize it for exactly what we needed. With Participle, building a DSL that supports nested queries, conditional logic, and complex operations like set intersections was easy.\\n\\n---\\n\\n## Roaring Bitmaps: Supercharging Query Performance\\n\\nOnce Participle parses the queries, we apply them using Roaring Bitmaps, a data structure specifically designed for fast set operations. This was a key advantage over GraphQL, which doesn\'t natively support efficient set-based operations.\\n\\n### Why Roaring Bitmaps?\\n\\nRoaring Bitmaps are perfect for **large-scale datasets** like dependency graphs. They allow us to perform operations like **AND**, **OR**, and **XOR** on massive lists of dependencies in milliseconds, without sacrificing memory efficiency.\\n\\nHere\'s how we evaluate a parsed query using Roaring Bitmaps:\\n\\n```go\\nfunc evaluateExpression(expr *Expression) *roaring.Bitmap {\\n    left := evaluateTerm(expr.Left)\\n    if expr.Operator == nil {\\n        return left\\n    }\\n    right := evaluateExpression(expr.Right)\\n    switch *expr.Operator {\\n    case \\"and\\":\\n        return roaring.And(left, right)\\n    case \\"or\\":\\n        return roaring.Or(left, right)\\n    case \\"xor\\":\\n        return roaring.Xor(left, right)\\n    }\\n    return nil\\n}\\n```\\n\\nThis allows us to calculate query results quickly and efficiently, even when dealing with millions of dependencies and vulnerabilities.\\n\\n---\\n\\n## Real-World Use Case: Vulnerability Analysis at Scale\\n\\nHere\u2019s an example of a real-world query you can run in Minefield using our DSL:\\n\\n```dsl\\n(dependents vulns CVE-2023-12345 and not dependencies library pkg:golang/patchedlib)\\n```\\n\\nThis query finds all dependents affected by a vulnerability (`CVE-2023-12345`) that haven\u2019t yet patched the issue by using a specific library (`golang/patchedlib`).\\n\\nIn a GraphQL world, expressing this kind of query would be cumbersome, and executing it would be slow due to the overhead of navigating through layers of nested data. With our custom DSL and Roaring Bitmaps, however, it runs quickly\u2014even on large datasets.\\n\\n---\\n\\n## Conclusion: Choosing the Right Tool for the Job\\n\\nGraphQL is an incredibly useful tool for many use cases, but it wasn\u2019t the right fit for Minefield\u2019s complex dependency graph queries. By using **Participle** to build a custom DSL and **Roaring Bitmaps** to optimize query performance, we created a solution that\u2019s both **expressive** and **blazingly fast**.\\n\\nThe takeaway? Always choose the right tool for the problem you\u2019re solving. When you need something more tailored, building a custom solution can save you a lot of headaches down the road\u2014especially when working with large, complex datasets.\\n\\nIf you\u2019re interested in digging deeper into how we built Minefield\u2019s custom DSL or have your own experiences with dependency analysis, check out our [GitHub repository](https://github.com/bitbomdev/minefield) and let us know what you think!"}]}}')}}]);