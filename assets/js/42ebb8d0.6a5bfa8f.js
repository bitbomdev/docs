"use strict";(self.webpackChunkbitbom_docs=self.webpackChunkbitbom_docs||[]).push([[8986],{6024:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var a=r(4848),o=r(8453);const t={title:"Integrating OpenSSF Scorecard Data into the Graph",slug:"ingesting-scorecard",description:"Learn how to ingest OpenSSF Scorecard data into Minefield",authors:["bitbomdev"],tags:["minefield","starting-up-minefield","scorecard"]},i=void 0,s={id:"ingsting-scorecard/ingesting-scorecard",title:"Integrating OpenSSF Scorecard Data into the Graph",description:"Learn how to ingest OpenSSF Scorecard data into Minefield",source:"@site/demos/02_ingsting-scorecard/02_ingesting-scorecard.mdx",sourceDirName:"02_ingsting-scorecard",slug:"/ingsting-scorecard/ingesting-scorecard",permalink:"/demos/ingsting-scorecard/ingesting-scorecard",draft:!1,unlisted:!1,editUrl:"https://github.com/bitbomdev/docs/tree/main/demos/02_ingsting-scorecard/02_ingesting-scorecard.mdx",tags:[{inline:!0,label:"minefield",permalink:"/demos/tags/minefield"},{inline:!0,label:"starting-up-minefield",permalink:"/demos/tags/starting-up-minefield"},{inline:!0,label:"scorecard",permalink:"/demos/tags/scorecard"}],version:"current",lastUpdatedBy:"Naveen",lastUpdatedAt:1741144434e3,sidebarPosition:2,frontMatter:{title:"Integrating OpenSSF Scorecard Data into the Graph",slug:"ingesting-scorecard",description:"Learn how to ingest OpenSSF Scorecard data into Minefield",authors:["bitbomdev"],tags:["minefield","starting-up-minefield","scorecard"]},sidebar:"demos",previous:{title:"Starting up Minefield",permalink:"/demos/starting-up-minefield"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Air-Gapped Environment",id:"air-gapped-environment",level:2},{value:"Using the Scorecard Downloader",id:"using-the-scorecard-downloader",level:2},{value:"Process Overview",id:"process-overview",level:2},{value:"Steps in Detail",id:"steps-in-detail",level:2},{value:"1. Load SBOM Data into the Storage",id:"1-load-sbom-data-into-the-storage",level:3},{value:"2. Load Scorecard Data into the Storage",id:"2-load-scorecard-data-into-the-storage",level:3},{value:"3. Graph the Scorecard Data",id:"3-graph-the-scorecard-data",level:3},{value:"4. Cache the Graph",id:"4-cache-the-graph",level:3},{value:"5. Utilize the Scorecard Data",id:"5-utilize-the-scorecard-data",level:3},{value:"Generate a Leaderboard Based on Scorecard Data:",id:"generate-a-leaderboard-based-on-scorecard-data",level:4},{value:"Get All Scorecard Nodes",id:"get-all-scorecard-nodes",level:4},{value:"Query Specific Metadata for a Scorecard Node:",id:"query-specific-metadata-for-a-scorecard-node",level:4},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.docker.com",children:"Docker"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"./01_startup.mdx#installing-minefield",children:"Minefield"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./01_startup.mdx#installing-scorecard-downloader-optional",children:"Scorecard Downloader"})," (optional if you have your own Scorecard data)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This documentation provides a guide on how to graph OpenSSF Scorecard data in Minefield via a fully air-gapped process. It includes instructions on using the Scorecard-downloader to fetch data and the steps involved in loading and graphing the data within the system."}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/ossf/scorecard",children:"OpenSSF Scorecard"})," is a tool that provides data for projects so that it is easier to understand the security posture of the project."]}),"\n",(0,a.jsx)(n.h2,{id:"air-gapped-environment",children:"Air-Gapped Environment"}),"\n",(0,a.jsx)(n.p,{children:"To maintain a secure and isolated environment, our project operates in a fully air-gapped manner. This means that all external data must be brought into the system without direct internet access during processing."}),"\n",(0,a.jsxs)(n.p,{children:["We use the ",(0,a.jsx)(n.a,{href:"https://github.com/bitbomdev/scorecard-downloader",children:"Scorecard Downloader"})," to fetch the Scorecard data separately. This tool allows us to download the necessary Scorecard JSON files in advance, which can then be transferred into the air-gapped system for processing."]}),"\n",(0,a.jsx)(n.h2,{id:"using-the-scorecard-downloader",children:"Using the Scorecard Downloader"}),"\n",(0,a.jsx)(n.p,{children:"To download Scorecard data, follow these steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Install the Scorecard Downloader"}),": Use the following command to install the Scorecard Downloader tool."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"go install github.com/bitbomdev/scorecard-downloader@latest\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Download Scorecard Data"}),": Use the Scorecard Downloader to fetch data for specific packages. Replace the PURL and output file name as needed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scorecard-downloader --purls pkg:golang/github.com/stretchr/testify@v1.9.0 --purls pkg:golang/github.com/chromedp/chromedp@v0.10.0 --output=scorecard_data.json\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output should loook similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Date, Input PURLs: [pkg:golang/github.com/stretchr/testify@v1.9.0 pkg:golang/github.com/chromedp/chromedp@v0.10.0] \nResults saved to scorecard_data.json\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now we have some scorecard data to graph."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"process-overview",children:"Process Overview"}),"\n",(0,a.jsx)(n.p,{children:"The integration of Scorecard data into the graph involves several steps:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Process Overview",src:r(4901).A+"",width:"903",height:"385"})}),"\n",(0,a.jsx)(n.h2,{id:"steps-in-detail",children:"Steps in Detail"}),"\n",(0,a.jsx)(n.h3,{id:"1-load-sbom-data-into-the-storage",children:"1. Load SBOM Data into the Storage"}),"\n",(0,a.jsx)(n.p,{children:"First load some SBOM data into the graph, we can use some test data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"go run main.go ingest sbom testdata/sboms\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-load-scorecard-data-into-the-storage",children:"2. Load Scorecard Data into the Storage"}),"\n",(0,a.jsxs)(n.p,{children:["Then, load the Scorecard data into our storage system using the ",(0,a.jsx)(n.code,{children:"load"})," command. This command processes the JSON files and stores the data for later use."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"go run main.go ingest scorecard load scorecard_data.json\n"})}),"\n",(0,a.jsx)(n.h3,{id:"3-graph-the-scorecard-data",children:"3. Graph the Scorecard Data"}),"\n",(0,a.jsxs)(n.p,{children:["Next, graph the Scorecard data using the ",(0,a.jsx)(n.code,{children:"graph"})," command. This step integrates the Scorecard data into the graph, establishing relationships between the Scorecard nodes and existing library nodes."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"go run main.go ingest scorecard graph\n"})}),"\n",(0,a.jsx)(n.h3,{id:"4-cache-the-graph",children:"4. Cache the Graph"}),"\n",(0,a.jsx)(n.p,{children:"After graphing the data, cache the graph to optimize performance for queries and analyses."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"go run main.go cache\n"})}),"\n",(0,a.jsx)(n.h3,{id:"5-utilize-the-scorecard-data",children:"5. Utilize the Scorecard Data"}),"\n",(0,a.jsx)(n.p,{children:"With the Scorecard data integrated into the graph, perform queries to extract valuable security insights."}),"\n",(0,a.jsx)(n.h4,{id:"generate-a-leaderboard-based-on-scorecard-data",children:"Generate a Leaderboard Based on Scorecard Data:"}),"\n",(0,a.jsx)(n.p,{children:"If we want to find all nodes that have a scorecard as their dependency, we can create a leaderboard of the nodes based on the number of dependencies of type scorecard:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'go run main.go leaderboard custom "dependencies scorecard"\n'})}),"\n",(0,a.jsx)(n.p,{children:"you should get something similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n|                                  NAME                                  |   TYPE    |  ID  | OUTPUT |           INFO           |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:github.com/google/chrome-ssh-agent@                                | library   | 1426 |      1 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:golang/github.com/chromedp/chromedp@v0.10.0                        | library   | 1444 |      1 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:github.com/GoogleCloudPlatform/terraform-google-conversion@        | library   |   59 |      1 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| scorecard:pkg:golang/github.com/stretchr/testify@v1.9.0                | scorecard | 1601 |      1 | Score: 5.90              |\n|                                                                        |           |      |        | Checks:                  |\n|                                                                        |           |      |        | - Maintained: 10         |\n|                                                                        |           |      |        | - Code-Review: 10        |\n|                                                                        |           |      |        | - CII-Best-Practices: 0  |\n|                                                                        |           |      |        | - License: 10            |\n|                                                                        |           |      |        | - Signed-Releases: -1    |\n|                                                                        |           |      |        | - Branch-Protection: -1  |\n|                                                                        |           |      |        | - Packaging: -1          |\n|                                                                        |           |      |        | - Dangerous-Workflow: 10 |\n|                                                                        |           |      |        | - Binary-Artifacts: 10   |\n|                                                                        |           |      |        | - Token-Permissions: 0   |\n|                                                                        |           |      |        | - Pinned-Dependencies: 0 |\n|                                                                        |           |      |        | - Security-Policy: 0     |\n|                                                                        |           |      |        | - Fuzzing: 0             |\n|                                                                        |           |      |        | - SAST: 0                |\n|                                                                        |           |      |        | - Vulnerabilities: 10    |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:github.com/google/cadvisor@                                        | library   |  253 |      1 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:golang/github.com/stretchr/testify@v1.9.0                          | library   |  130 |      1 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| scorecard:pkg:golang/github.com/chromedp/chromedp@v0.10.0              | scorecard | 1602 |      1 | Score: 4.20              |\n|                                                                        |           |      |        | Checks:                  |\n|                                                                        |           |      |        | - Code-Review: 4         |\n|                                                                        |           |      |        | - Maintained: 4          |\n|                                                                        |           |      |        | - CII-Best-Practices: 0  |\n|                                                                        |           |      |        | - License: 10            |\n|                                                                        |           |      |        | - Signed-Releases: -1    |\n|                                                                        |           |      |        | - Dangerous-Workflow: 10 |\n|                                                                        |           |      |        | - Token-Permissions: 0   |\n|                                                                        |           |      |        | - Branch-Protection: 0   |\n|                                                                        |           |      |        | - Binary-Artifacts: 10   |\n|                                                                        |           |      |        | - Pinned-Dependencies: 0 |\n|                                                                        |           |      |        | - Packaging: -1          |\n|                                                                        |           |      |        | - Security-Policy: 0     |\n|                                                                        |           |      |        | - Fuzzing: 0             |\n|                                                                        |           |      |        | - Vulnerabilities: 10    |\n|                                                                        |           |      |        | - SAST: 0                |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:npm/micromatch@4.0.5                                               | library   | 1027 |      0 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:golang/github.com/youmark/pkcs8@v0.0.0-20240726163527-a2c0da244d78 | library   | 1452 |      0 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n| pkg:pypi/typing-extensions@4.4.0                                       | library   |  213 |      0 |                          |\n+------------------------------------------------------------------------+-----------+------+--------+--------------------------+\n"})}),"\n",(0,a.jsx)(n.h4,{id:"get-all-scorecard-nodes",children:"Get All Scorecard Nodes"}),"\n",(0,a.jsx)(n.p,{children:"If we want to find all of the scorecard nodes in our graph, we can run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'go run main.go query globsearch "scorecard*"\n'})}),"\n",(0,a.jsx)(n.p,{children:"We would get something similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+-----------------------------------------------------------+-----------+------+--------------------------+\n|                           NAME                            |   TYPE    |  ID  |           INFO           |\n+-----------------------------------------------------------+-----------+------+--------------------------+\n| scorecard:pkg:golang/github.com/chromedp/chromedp@v0.10.0 | scorecard | 1602 | Score: 4.20              |\n|                                                           |           |      | Checks:                  |\n|                                                           |           |      | - Code-Review: 4         |\n|                                                           |           |      | - Maintained: 4          |\n|                                                           |           |      | - CII-Best-Practices: 0  |\n|                                                           |           |      | - License: 10            |\n|                                                           |           |      | - Signed-Releases: -1    |\n|                                                           |           |      | - Dangerous-Workflow: 10 |\n|                                                           |           |      | - Token-Permissions: 0   |\n|                                                           |           |      | - Branch-Protection: 0   |\n|                                                           |           |      | - Binary-Artifacts: 10   |\n|                                                           |           |      | - Pinned-Dependencies: 0 |\n|                                                           |           |      | - Packaging: -1          |\n|                                                           |           |      | - Security-Policy: 0     |\n|                                                           |           |      | - Fuzzing: 0             |\n|                                                           |           |      | - Vulnerabilities: 10    |\n|                                                           |           |      | - SAST: 0                |\n+-----------------------------------------------------------+-----------+------+--------------------------+\n| scorecard:pkg:golang/github.com/stretchr/testify@v1.9.0   | scorecard | 1601 | Score: 5.90              |\n|                                                           |           |      | Checks:                  |\n|                                                           |           |      | - Maintained: 10         |\n|                                                           |           |      | - Code-Review: 10        |\n|                                                           |           |      | - CII-Best-Practices: 0  |\n|                                                           |           |      | - License: 10            |\n|                                                           |           |      | - Signed-Releases: -1    |\n|                                                           |           |      | - Branch-Protection: -1  |\n|                                                           |           |      | - Packaging: -1          |\n|                                                           |           |      | - Dangerous-Workflow: 10 |\n|                                                           |           |      | - Binary-Artifacts: 10   |\n|                                                           |           |      | - Token-Permissions: 0   |\n|                                                           |           |      | - Pinned-Dependencies: 0 |\n|                                                           |           |      | - Security-Policy: 0     |\n|                                                           |           |      | - Fuzzing: 0             |\n|                                                           |           |      | - SAST: 0                |\n|                                                           |           |      | - Vulnerabilities: 10    |\n+-----------------------------------------------------------+-----------+------+--------------------------+\n"})}),"\n",(0,a.jsx)(n.h4,{id:"query-specific-metadata-for-a-scorecard-node",children:"Query Specific Metadata for a Scorecard Node:"}),"\n",(0,a.jsxs)(n.p,{children:["If we want to get all the scorecard data for ",(0,a.jsx)(n.code,{children:"pkg:golang/github.com/stretchr/testify@v1.9.0"})," we can do:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'go run main.go query get-metadata "scorecard:pkg:golang/github.com/stretchr/testify@v1.9.0"\n'})}),"\n",(0,a.jsx)(n.p,{children:"This should output something similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "name": "scorecard:pkg:golang/github.com/stretchr/testify@v1.9.0",\n  "type": "scorecard",\n  "id": "1601",\n  "metadata": {\n    "github_url": "https://github.com/stretchr/testify",\n    "purl": "pkg:golang/github.com/stretchr/testify@v1.9.0",\n    "scorecard": {\n      "Checks": [\n        {\n          "Name": "Code-Review",\n          "Reason": "all changesets reviewed",\n          "Score": 10\n        },\n        {\n          "Name": "Maintained",\n          "Reason": "29 commit(s) and 24 issue activity found in the last 90 days -- score normalized to 10",\n          "Score": 10\n        },\n        {\n          "Name": "CII-Best-Practices",\n          "Reason": "no effort to earn an OpenSSF best practices badge detected",\n          "Score": 0\n        },\n        {\n          "Name": "License",\n          "Reason": "license file detected",\n          "Score": 10\n        },\n        {\n          "Name": "Signed-Releases",\n          "Reason": "no releases found",\n          "Score": -1\n        },\n        {\n          "Name": "Packaging",\n          "Reason": "packaging workflow not detected",\n          "Score": -1\n        },\n        {\n          "Name": "Dangerous-Workflow",\n          "Reason": "no dangerous workflow patterns detected",\n          "Score": 10\n        },\n        {\n          "Name": "Binary-Artifacts",\n          "Reason": "no binaries found in the repo",\n          "Score": 10\n        },\n        {\n          "Name": "Token-Permissions",\n          "Reason": "detected GitHub workflow tokens with excessive permissions",\n          "Score": 0\n        },\n        {\n          "Name": "Pinned-Dependencies",\n          "Reason": "dependency not pinned by hash detected -- score normalized to 0",\n          "Score": 0\n        },\n        {\n          "Name": "Branch-Protection",\n          "Reason": "internal error: error during branchesHandler.setup: internal error: githubv4.Query: Resource not accessible by integration",\n          "Score": -1\n        },\n        {\n          "Name": "Fuzzing",\n          "Reason": "project is not fuzzed",\n          "Score": 0\n        },\n        {\n          "Name": "Security-Policy",\n          "Reason": "security policy file not detected",\n          "Score": 0\n        },\n        {\n          "Name": "SAST",\n          "Reason": "SAST tool is not run on all commits -- score normalized to 0",\n          "Score": 0\n        },\n        {\n          "Name": "Vulnerabilities",\n          "Reason": "0 existing vulnerabilities detected",\n          "Score": 10\n        }\n      ],\n      "date": "2024-10-14",\n      "purl": "pkg:golang/github.com/stretchr/testify@v1.9.0",\n      "repo": {\n        "commit": "a012e45d185128fe5bf3370e42b0854856e0998e",\n        "name": "github.com/stretchr/testify"\n      },\n      "score": 5.9,\n      "scorecard": {\n        "commit": "28db9a99a4c2e43e1f90a5afed6753e6ef2c36d3",\n        "version": "v5.0.0-68-g28db9a99"\n      }\n    },\n    "success": true\n  }\n}\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"By integrating OpenSSF Scorecard data into our graph in a fully air-gapped environment, we enhance the security analysis capabilities of our project while maintaining strict security protocols. The process involves loading pre-downloaded Scorecard data, graphing it to establish relationships within the graph, caching the graph, and utilizing the data for security insights."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4901:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/process-overview-43a45610c3a3d2c076183ae52aea7643.png"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var a=r(6540);const o={},t=a.createContext(o);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);