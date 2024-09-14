import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const minefieldFeatures: FeatureItem[] = [
    {
        title: 'Efficiency',
        description: (
            <>
                minefield is designed to be extremely fast and memory efficient.
                minefield mainly uses Roaring Bitmaps and Dynamic Programming to do this.
                minefield stores all of its relationship data in Roaring Bitmaps so that there aren't bloated edges.
            </>
        ),
    },
    {
        title: 'Situational Bitwise Queries',
        description: (
            <>
                minefield uses bitwise queries to aggregate queries on SBOMs together, to get complex SBOM diffs, shared elements, and more.
            </>
        ),
    },
    {
        title: 'Leaderboards',
        description: (
            <>
                Leaderboards are impossible without caching. This is because leaderboards sort every artifact in the graph by a query, running thousands, if not millions, of queries at once. Without caching, this process could take literal years.
            </>
        ),
    }
];

const bomfactoryFeatures: FeatureItem[] = [
    {
        title: 'Automated SBOM Downloads',
        description: (
            <>
                bomfactory automates the process of generating and downloading Software Bill of Materials (SBOMs) for critical projects as defined by the OpenSSF Criticality Score.
            </>
        ),
    },
    {
        title: 'Advanced Querying',
        description: (
            <>
                bomfactory allows users to perform complex queries on the downloaded SBOMs based on various criteria. For example, users can query for the SBOMs of the top 1000 most critical Google repositories.
            </>
        ),
    },
];

const bomSiloFeatures: FeatureItem[] = [
    {
        title: 'Centralized SBOMs',
        description: (
            <>
                bom-silo is a centralized repository for storing and managing SBOMs. This addresses the challenge of scattered SBOMs across different projects, providing a single source of truth for dependency and vulnerability management.
            </>
        ),
    },
    {
        title: 'Generated using bomfactory',
        description: (
            <>
                The SBOMs in bom-silo are generated using the bomfactory tool. This leverages bomfactory's advanced querying and criticality scoring features.
            </>
        ),
    }
];

function Feature({title, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3" className={styles.featureHeader}>{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <div>
            <section className={clsx(styles.features, styles.sectionSpacing)}>
                <div className="container">
                    <Heading as="h2" className={styles.sectionHeader}>What is bitbom?</Heading>
                    <div className="row">
                        <div className={clsx('col col--12')}>
                            <p>
                                bitbom is a suite of tools designed to enhance the management and analysis of Software Bill of Materials (SBOMs).
                                It provides solutions for efficiently downloading, querying, and graphing SBOMs, helping organizations to better understand and manage their software dependencies and vulnerabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={clsx(styles.features, styles.sectionSpacing)}>
                <div className="container">
                    <Heading as="h2" className={styles.sectionHeader}>minefield</Heading>
                    <div className="row">
                        {minefieldFeatures.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={clsx(styles.features, styles.sectionSpacing)}>
                <div className="container">
                    <Heading as="h2" className={styles.sectionHeader}>bomfactory</Heading>
                    <div className="row">
                        {bomfactoryFeatures.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={clsx(styles.features, styles.sectionSpacing)}>
                <div className="container">
                    <Heading as="h2" className={styles.sectionHeader}>bom-silo</Heading>
                    <div className="row">
                        {bomSiloFeatures.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
