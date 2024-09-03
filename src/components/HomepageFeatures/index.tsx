import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Speed',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Minefield is designed to be fast. It uses a combination of techniques to achieve this, including:
        <ul>
          <li>Roaring Bitmaps</li>
          <li>Dynamic Programming</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Memory Efficient',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Minefield is designed to be memory efficient. Without bloated edges, Minefield can store all of its relationship data in roaring bitmaps. Minefield graphs with minimal overhead.
      </>
    ),
  },
  {
    title: 'Situational Bitwise Queries',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Minefield uses bitwise queries to aggregate queries on SBOMs together, to get complex SBOM diffs, shared elements, and more.
      </>
    ),
  },
  {
    title: 'Leaderboards',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Leaderboards are impossible without caching. This is because leaderboards sort every artifact in the graph by a query, runing thousands if not millions of queries at once, without caching could take literal years.
      </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
