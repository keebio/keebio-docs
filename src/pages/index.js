import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Recommended Soldering Tools',
    imageUrl: 'img/undraw_bug_fixing_oc7a.svg',
    description: (
      <>
        Just getting started with building your own keyboard? Here's a list of
        tools that we suggest that you get.
      </>
    ),
    callToAction: "See Recommendations",
    callToActionUrl: "docs/soldering-tools"
  },
  {
    title: ' Build Guides',
    imageUrl: 'img/undraw_building_blocks_n0nc.svg',
    description: (
      <>
        Learn how to assemble various keyboards from Keebio. Covers just
        about everything like the Iris, Quefrency, Sinc, BDN9, and more!
      </>
    ),
    callToAction: "View Guides",
    callToActionUrl: "docs"
  },
  {
    title: 'Frequently Asked Questions',
    imageUrl: 'img/undraw_Faq_re_31cw.svg',
    description: (
      <>
        We know that you've got a lot of questions about keyboards, how to
        build them, and more. Don't be lost.
      </>
    ),
    callToAction: "View FAQ",
    callToActionUrl: "docs/faq"
  },
];

function Feature({imageUrl, title, description, callToAction, callToActionUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.featureButton}>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted,
          )}
          to={callToActionUrl}
        >
          {callToAction}
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
