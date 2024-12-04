---
slug: isolating-and-fixing-vulnerabilities-in-an-air-gapped-environment
title: Isolating and Fixing Vulnerabilities in an Air-Gapped Environment
description: How we isolated and fixed vulnerabilities in an air-gapped environment
authors: [BitBom]
tags: [Air-Gapped, Vulnerabilities, Minefield]
image: "/img/blog/air-gapped-vulnerabilities/air-gapped-vulnerabilities.png"
---

![caged-floating-island](/img/blog/air-gapped-vulnerabilities/air-gapped-vulnerabilities.png)

Isolating and Identifying Critical Vulnerabilities in under 5 minutes (coffee break ;))

<!-- truncate -->

---
*TL;DR*

*Minefield simplifies the process of discovering and addressing vulnerabilities across complex software projects by using fast, bitwise queries and Roaring Bitmaps to analyze Software Bill of Materials (SBOMs) in air-gapped environments. With straightforward commands, you can quickly identify affected packages, assess their impact, prioritize fixes for critical components, and systematically eliminate risks. Soon, an integrated Language Learning Model (LLM) will make writing these queries even easier, enabling more intuitive and efficient security management without compromising on safety.*

## Introduction

Imagine you're managing a complex software project with thousands of dependencies. One day, researchers discover a critical vulnerability in a popular library. How quickly can you determine if your project is affected? How do you identify all the dependencies that rely on this vulnerable library? Enter [Minefield](https://github.com/bitbomdev/minefield) an air-gapped solution for analyzing Software Bill of Materials (SBOMs). By leveraging the power of [Roaring Bitmaps](https://github.com/RoaringBitmap/roaring) and bitwise queries, Minefield enables you to perform lightning-fast analyses, uncovering deep insights into your software dependencies with remarkable efficiency.

## The Foundation: Instantaneous Queries

Minefield's core capabilities are its basic queries for dependencies and dependents. Thanks to our [cache](https://github.com/bitbomdev/minefield/blob/main/pkg/graph/cache.go#L10), these operations are `O(1)` or instantaneous. This efficiency enables more complex analyses. It lets you quickly navigate vast dependency graphs.

## Bitwise Operations: Combining Queries for Greater Insight

The real magic happens when we combine these basic queries using bitwise operations. Since the result of every query is a roaring bitmap, we can perform operations like `AND`, `OR`, and `XOR` on the results of multiple queries. This approach opens up many possibilities for analyzing software dependencies. It is especially useful for finding and fixing vulnerabilities.

## A Story of Finding and Eliminating Vulnerabilities

Let's walk through a real-world scenario:

### The Vulnerability Alert

Your security team alerts you to a critical vulnerability `GHSA-1234`. You need to determine:

- How does the vulnerability affect your project?

- How deeply ingrained is the vulnerable library in your dependency tree?

- How can you isolate and address the vulnerability quickly?

#### Step 1: Identifying Affected Dependencies

Our first concern is to find all the packages affected by this vulnerability.

```bash

minefield query custom "dependents library GHSA-1234"

```

This query returns all packages in your graph that depend on `GHSA-1234`, directly or transitively.

#### Step 2: Assessing the Impact

This is a critical vulnerability. Before solving all problems, we want to find what parts of your main critical packages are affected. For example, assume you own `Kubernetes` which is your critical project. You want to know which `Kubernetes` dependencies are affected by this vulnerability. This is your first priority.

```bash

minefield query custom "dependencies library pkg:kubernetes and dependents library GHSA-1234"

```

This bitwise `AND` narrows the list to only those `Kubernetes` dependencies that rely on vulnerable libraries. This gives you a basic understanding of how severe this problem is for `Kubernetes`. This query will give you a list of dependencies for `Kubernetes` that are affected by this vulnerability.

#### Step 3: Prioritizing the Fix

Now that we have this list, we need to inform the engineering team which packages to focus on. Remember, we first want our main package, `Kubernetes`, to be secure. 

Let's create a ranked list for the whole graph. It should rank packages by the number of their dependencies, affected by the vulnerability, that are dependencies of `Kubernetes`.

This is a mouthful, so let's break it down.

Let's say we have packages `A`, `B`, and `C`. 

- `Kubernetes` depends on `A` and `C`. 

- `A` depends on `B` and `C`. 

- Both `A` and `B` are affected by the vulnerability. 

So, package `A` is the one vulnerable dependency and `Kubernetes` dependency. 

[![](https://mermaid.ink/img/pako:eNplkk1vwjAMhv-KFcSt3WFIkxakSbS9TUiTxmmUQ2hcEpEmVT7GJsR_XyAFus0n-3ntyHZ8JI3hSCjZWdYLWBXzWkM0F7aJLJnUb6zZsx0m5WyL9WvYotXo0W0SRs2Ts4A8f4FiPRTBYjPm5Y2XAy8uvLrx4hcvh4BS-hmURsu2amik-sMSbRRzrsIW7hK0Uik6aZ-fMuet2SOdzGazwc8PkntBH_uv-fWJ6RRWQjrgksUddOCEOTjwAsGiYl4a7YTsHb1l53BfB3Ds4y4cGB1HZppD-TBKXIz14r9eGC-GuqhaHI3xQDLSoe2Y5PG_jueimsSuOqwJjS7HlgXla1LrU0xlwZv3b90Q6m3AjISeM49VmukKe6Y_jIlhy5SLMXLpjV2mk7hcRkasCTuRCk4_y-GvSw?type=png)](https://mermaid.live/edit#pako:eNplkk1vwjAMhv-KFcSt3WFIkxakSbS9TUiTxmmUQ2hcEpEmVT7GJsR_XyAFus0n-3ntyHZ8JI3hSCjZWdYLWBXzWkM0F7aJLJnUb6zZsx0m5WyL9WvYotXo0W0SRs2Ts4A8f4FiPRTBYjPm5Y2XAy8uvLrx4hcvh4BS-hmURsu2amik-sMSbRRzrsIW7hK0Uik6aZ-fMuet2SOdzGazwc8PkntBH_uv-fWJ6RRWQjrgksUddOCEOTjwAsGiYl4a7YTsHb1l53BfB3Ds4y4cGB1HZppD-TBKXIz14r9eGC-GuqhaHI3xQDLSoe2Y5PG_jueimsSuOqwJjS7HlgXla1LrU0xlwZv3b90Q6m3AjISeM49VmukKe6Y_jIlhy5SLMXLpjV2mk7hcRkasCTuRCk4_y-GvSw)

```bash

minefield leaderboard custom "dependencies library and (dependents library GHSA-1234 and dependencies library pkg:kubernetes)"

```

This command shows a leaderboard of affected packages. It helps you prioritize which parts to fix first.

### Step 4: Fixing the rest of the graph

We fixed Kubernetes. Now, we need to find what to fix next. We want to run the previous query for all packages that are not Kubernetes dependencies.

```bash

minefield leaderboard custom "dependencies library and ((dependents library GHSA-1234 xor dependencies library pkg:Kubernetes ) and dependents library GHSA-1234)"

```

Ok, so this is a little more complicated but still very close to the previous query, so let's break down the parenthesis.

```((dependents library GHSA-1234 xor dependencies library pkg:Kubernetes ) and dependents library GHSA-1234)```

First, ```(dependents library GHSA-1234 xor dependencies library pkg:Kubernetes )``` finds the unique elements of both queries. It means all the vulnerable libraries that are not dependencies of `Kubernetes` are in this. It also includes all dependencies of `Kubernetes` that are not affected by the vulnerability.

The second part, ```and dependents library GHSA-1234```, isolates just the vulnerable packages from the first query. It throws away anything that was not a vulnerable library.

At the we are end ranking all the packages in the graph by the number of dependencies that are affected by the vulnerabiltiy, that are not dependencies of `Kubernentes`. 


## What’s Up Coming

While these queries are powerful, writing them repeatedly can become tedious. That’s why we are developing a Large Language Model (LLM) to make this process smoother. Our goal is to simplify query creation, allowing you to interact with Minefield in a more natural, conversational way. This LLM will understand your needs and generate the necessary commands, saving you time and reducing the complexity of crafting intricate queries.

Moreover, we plan to deploy this LLM in an air-gapped environment, ensuring that your data and analysis remain secure and isolated. This approach will maintain the high level of security Minefield is known for while enhancing its usability. Stay tuned for updates as we work towards making Minefield even more intuitive and efficient!

## Conclusion

In today's fast-paced development world, we must quickly find and fix vulnerabilities. Minefield's bitwise queries empower you to perform complex analyses with ease, enabling you to:

- Rapidly identify affected components when a vulnerability is discovered.

- Analyze and compare different versions of your projects.

- Perform intricate multi-step analyses for deep insights.

Minefield uses fast, roaring bitmaps and flexible bitwise ops. It opens new ways to understand and manage software dependencies in air-gapped environments. Whether you're safeguarding your projects against vulnerabilities or optimizing your dependency graph, Minefield equips you with the tools you need to maintain a robust and secure software ecosystem.

---

Ready to unleash the power of Minefield in your projects? Our docs explain how bitwise queries can improve your security and dependency management.
