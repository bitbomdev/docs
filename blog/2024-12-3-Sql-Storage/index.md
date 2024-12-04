---
slug: introducing-sql-storage
title: Introducing Minefield's SQL Storage
description: What's new in Minefield's SQL Storage
authors: [BitBom]
tags: [SQL, Minefield]
image: "/img/blog/introducing-sql-storage/intro-to-sql.png"
---

![caged-floating-island](/img/blog/introducing-sql-storage/intro-to-sql.png)

Isolating and Identifying Critical Vulnerabilities in under 5 minutes (coffee break ;))

<!-- truncate -->

---
*TL;DR*

*Minefield simplifies the process of discovering and addressing vulnerabilities across complex software projects by using fast, bitwise queries and Roaring Bitmaps to analyze Software Bill of Materials (SBOMs) in air-gapped environments. With straightforward commands, you can quickly identify affected packages, assess their impact, prioritize fixes for critical components, and systematically eliminate risks. Soon, an integrated Language Learning Model (LLM) will make writing these queries even easier, enabling more intuitive and efficient security management without compromising on safety.*

We are excited to announce that Minefield now supports SQL-based storage solutions, in addition to the existing Redis integration. This enhancement offers users greater flexibility in managing their Software Bill of Materials (SBOM) data, catering to diverse operational needs and preferences.

## Understanding the Storage Options: Redis vs. SQL

- **Redis**: A high-performance, in-memory data store known for its speed and efficiency, Redis is ideal for applications requiring rapid data access and real-time analytics.
- **SQL Databases**: Traditional relational databases that provide robust data integrity, complex querying capabilities, and persistent storage. Suitable for applications where data consistency and long-term storage are paramount.

## Benefits of SQL Integration in Minefield

1. **Enhanced Data Persistence**: SQL databases ensure that your SBOM data is stored persistently, safeguarding against data loss even during system restarts or failures.
2. **Scalability**: SQL databases are well-suited for handling large datasets, making them ideal for enterprises managing extensive SBOM information.
3. **Data Integrity**: With built-in support for transactions and constraints, SQL databases maintain high levels of data integrity, ensuring the accuracy and reliability of your SBOM data.

## Choosing the Right Storage Solution

The addition of SQL support allows Minefield users to select the storage solution that best aligns with their specific requirements:

- Opt for **Redis** when speed and real-time data access are critical.
- Choose **SQL** for scenarios where data persistence and integrity are essential.

This flexibility ensures Minefield can adapt to various operational contexts, providing a tailored experience for every user.

We encourage you to explore this new feature and determine how it can enhance your SBOM management processes. As always, we welcome your feedback and look forward to improving Minefield to meet your evolving needs. 