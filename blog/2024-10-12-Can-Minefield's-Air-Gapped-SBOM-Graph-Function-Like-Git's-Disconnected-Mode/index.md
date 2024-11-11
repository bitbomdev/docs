---
slug: Air-Gapped-Vulnerability
title: How Minefield Enables Air-Gapped SBOM Vulnerability Graphing Like Git's Disconnected Mode
description: How Minefield Graphed Vulnerabilities in an Air-Gapped Environment
authors: [BitBom]
tags: [air-gapped, vulnerabilities]
image: "/img/blog/air-gapped-sbom-vuln-graphing-like-git-disconnected-mode/caged-floating-island.png"
---

![caged-floating-island](/img/blog/air-gapped-sbom-vuln-graphing-like-git-disconnected-mode/caged-floating-island.png)

Graphing vulnerabilities in an air-gapped environment is considered impossible, and we did it. Here's how.

<!-- truncate -->

---
_**TL;DR**: Inspired by Git's offline capabilities, Minefield's air-gapped SBOM vulnerability management tool allows secure, offline vulnerability ingestion and fast graphing. This enables users to integrate public and custom vulnerabilities in isolated environments, ensuring complete data control and enhanced security._

At Minefield, we took inspiration from Git's ability to function offline to create a fast, lightweight tool that operates effectively in an air-gapped environment. Minefield does not require internet access to function, which makes it ideal for secure, isolated settings such as critical infrastructure or sensitive corporate environments.

## The Philosophy Behind Air-Gapped Design

[Minefield's](https://github.com/bitbomdev/minefield) air-gapped approach addresses complex engineering challenges by reducing dependencies on external services. Focusing on simplicity, reliability, and control over the system ensures consistent and reliable results, particularly during testing.

## How Vulnerability Ingestion Works

How do we handle vulnerability ingestion without relying on external network resources or shared vulnerability databases?


Minefield's speed and efficiency come from using Roaring Bitmaps and a direct node-to-node model. These approaches ensure efficient data storage and rapid query execution, making vulnerability graphing in air-gapped environments fast and reliable.

**Data Structure and Algorithm:** Minefield uses Roaring Bitmaps to store relationship data, which keeps the graph lightweight and enables fast bitwise operations for queries. The direct node-to-node model simplifies graph maintenance, and caching common queries ensures O(1) lookup times, making the system highly efficient for handling vulnerability data in an air-gapped environment.

**Direct Node-to-Node Model:** Instead of the traditional node-edge-node graph structure, Minefield adopts a direct node-to-node model. This reduces the complexity of maintaining explicit edges, making the graph lightweight and easier to manage.

**Caching with Pre-Computed Queries:** Minefield caches dependents and dependencies to enhance performance, allowing for O(1) query times. This is critical for maintaining speed in an air-gapped environment.

[![](https://mermaid.ink/img/pako:eNptkTtvhDAMx79K5PlQd4ZKPK6o0tEbaG8odDAXA5EgQXkM1em-e0NoBWrryf7b-cWPG1wVJ4ih1zgP7DVvJPNmXLsKb4b0Ki2W1Ofqwjha_NjEtK7Sc2m-FZL8F6KBROiowHkmzkohqRM08gY2QlY_y56MZbknP1zcKEljK0ZhBRnWaTWFPnZ_ZiyKHllenxRyJqRV4WmLhnZFm3esi9DKH7TS7MXPb3av8oA-_osJqae6oIViiZ0IOelWoeb78Vc3CdXZGqQ_ARxgIj2h4H7ptyXZgB1oogZi73Lq0I122c7dl6KzqvqUV4itdnQAN_vlUy7Qr3aCuMPReHVG-a7UFhMXVulyPWy47wG0cv2wYu5f4KWXlw?type=png)](https://mermaid.live/edit#pako:eNptkTtvhDAMx79K5PlQd4ZKPK6o0tEbaG8odDAXA5EgQXkM1em-e0NoBWrryf7b-cWPG1wVJ4ih1zgP7DVvJPNmXLsKb4b0Ki2W1Ofqwjha_NjEtK7Sc2m-FZL8F6KBROiowHkmzkohqRM08gY2QlY_y56MZbknP1zcKEljK0ZhBRnWaTWFPnZ_ZiyKHllenxRyJqRV4WmLhnZFm3esi9DKH7TS7MXPb3av8oA-_osJqae6oIViiZ0IOelWoeb78Vc3CdXZGqQ_ARxgIj2h4H7ptyXZgB1oogZi73Lq0I122c7dl6KzqvqUV4itdnQAN_vlUy7Qr3aCuMPReHVG-a7UFhMXVulyPWy47wG0cv2wYu5f4KWXlw)

Minefield takes a user-centric approach to vulnerability ingestion, allowing users to process data without Minefield relying on external databases, much like how Git operates offline with local repositories.

Minefield's graphing capabilities are highly optimized for performance, ensuring it can quickly handle complex vulnerability data, even in an air-gapped setup. The data must conform to the OSV (Open Source Vulnerability) schema, a widely recognized standard that promotes consistency and reliability across different data sources.

Users can download vulnerability data from trusted sources like `osv.dev`—available as data dumps at [this link](https://google.github.io/osv.dev/data/#data-dumps)—package it as a zip file, and provide it to Minefield.

## Custom Vulnerability Ingestion

One of Minefield's standout features is its ability to ingest custom vulnerabilities. Users can include vulnerabilities that adhere to the OSV schema, even if they are not listed in public databases. This flexibility allows organizations to address specific security concerns and incorporate proprietary or newly discovered vulnerabilities into their assessments.

## Advantages of an Air-Gapped Approach

**Enhanced Security**: Running in an air-gapped environment significantly improves data security by preventing unauthorized access, data leaks, and dependence on external systems. This benefits organizations dealing with sensitive information or operating in highly regulated industries.

**Data Integrity and Control**: Keeping data local provides users complete control over the accuracy and integrity of their vulnerability information, minimizing the risk of data tampering or corruption from third-party sources.

**Flexibility and Customization**: Users can include custom vulnerabilities, even those unavailable in public databases. This is crucial for organizations that need to address unique security challenges or incorporate findings from internal security reviews.

## Challenges and Considerations

**Manual Updates**: A significant challenge of air-gapped systems is the need for manual updates. Users must periodically ingest new vulnerability data to keep their assessments up-to-date. Fortunately, many databases, including osv.dev, offer frequent updates, making it relatively easy to download and update information. Organizations should establish routines for downloading and ingesting the latest data to ensure their security assessments are always practical.

**User Responsibility**: With great power comes great responsibility. Users must ensure that the data they provide is current and accurate. This requires a proactive approach to managing data and maintaining the integrity of the security assessment process.

## Vulnerability Leaderboard Overview

An example is the leaderboard in Minefield, which displays libraries and their vulnerability information.

| Package                                                                                                                                  | Type    | ID   | Vulnerabilities |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---- | --------------- |
| pkg.com/google/cadvisor@                                                                                                                 | library | 253  | 2               |
| pkg/setuptools\@65.5.1                                                                                                                   | library | 211  | 1               |
| pkg.com/google/agi@                                                                                                                      | library | 192  | 1               |
| pkg/github.com/opencontainers/runc\@v1.1.13                                                                                              | library | 327  | 1               |
| pkg/github.com/docker/docker\@v26.1.4%2Bincompatible                                                                                     | library | 291  | 1               |
| pkg/ajv\@8.11.0                                                                                                                          | library | 677  | 0               |
| pkg/%40babel/helper-remap-async-to-generator\@7.18.9                                                                                     | library | 421  | 0               |
| pkg/github.com/google/trillian\@v1.6.0                                                                                                   | library | 1354 | 0               |
| GO-2024-3110                                                                                                                             | vuln    | 1601 | 1               |
| GO-2024-3005                                                                                                                             | vuln    | 1603 | 1               |
| GHSA-cx63-2mw6-8hw5                                                                                                     |                 | vuln    | 1602 | 1               |

## Conclusion

By focusing on an air-gapped design, Minefield offers Git-like control over vulnerability data, ensuring security while providing the flexibility to ingest various information. This approach empowers users to enhance their security posture and customize vulnerability management based on their unique needs.

With evolving security threats, Minefield offers a reliable solution for managing vulnerabilities in air-gapped environments. It's perfect for organizations needing strong security and complete data control.

To learn more about how we ingest vulnerabilities offline and to get a more hands-on experience, visit our [GitHub repository](https://github.com/bitbomdev/minefield) to get started.
