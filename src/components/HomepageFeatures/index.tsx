import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import {
  faBoltLightning,
  faShieldHalved,
  faMagnifyingGlassChart,
} from '@fortawesome/free-solid-svg-icons';

type FeatureItem = {
  title: string;
  icon: IconDefinition;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Insainly Fast and Scalable',
    icon: faBoltLightning,
    description: (
      <>
        Graph millions of SBOMs with Minefield in seconds.
      </>
    ),
  },
  {
    title: 'Fully Air-Gapped',
    icon: faShieldHalved,
    description: (
      <>
        Fully air-gapped and secure allowing for integration with existing
        enterprise security policies.
      </>
    ),
  },
  {
    title: 'Understand Your Software',
    icon: faMagnifyingGlassChart,
    description: (
      <>
        Generate insights from your SBOMs with advanced querying.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', 'margin-top--lg')}>
      <div className={clsx('text--center', styles.iconBorder)}>
        <FontAwesomeIcon icon={icon} size="8x" className={styles.iconHeight} />
      </div>
      <div className="text--center padding-horiz--md margin-top--lg">
        <Heading as="h3" className="">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col text--center">
            <Heading as="h2">
              Graph millions of SBOMs in an air-gapped environment
            </Heading>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
