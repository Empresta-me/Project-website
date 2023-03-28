import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from "../components/HomepageFeatures";
import Translate from '@docusaurus/Translate';
import "animate.css/animate.min.css";
import UAParser from 'ua-parser-js';
import {useDocsVersionCandidates} from '@docusaurus/theme-common/internal';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function HomepageHeader({
  docsPluginId}) {
  const [platform, setPlatform] = React.useState('');
  React.useEffect(() => {
    const parser = new UAParser();
    const uaPlatform = parser.getOS().name;
    // Test if it is a linux distro
    if (['Raspbian', 'Debian', 'Ubuntu', 'Linux Mint', 'Fedora', 'Arch', 'CentOS', 'Red Hat', 'Manjaro'].includes(uaPlatform)) {
      setPlatform('Linux');
    } else {
      setPlatform(uaPlatform);
    }
  }, []);
  const {siteConfig} = useDocusaurusContext();
  const version = useDocsVersionCandidates(docsPluginId)[0];
  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6", styles.center)}>
            <h1 data-aos="fade-up" className="hero__title">
              {siteConfig.title}
            </h1>
            <p data-aos="fade-up" className="hero__subtitle">
              {siteConfig.tagline}
            </p>
            <div className={styles.indexCtas}>
              <AnimationOnScroll animateIn="animate__fadeInLeft">
                <Link data-aos="fade-right"
                  className={clsx("button button--lg button--primary", styles.button)}
                  to={`${version.path}/intro`}>
                  <Translate description="homepage getting started button">
                    Know More
                  </Translate>
                </Link>
              </AnimationOnScroll>
              {/* <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className="dropdown dropdown--hoverable">
                  <a href="/downloads" className={clsx("button button--primary button--lg", styles.button)}>Deliverables</a>  
                </div>
              </AnimationOnScroll> */}
            </div>
          </div>
          <div className={clsx("col col--6", styles.center)}>
            <img data-aos="fade-up"
              src={require('../../static/img/lending.png').default}
              className={styles.screenshot}
              alt="Screenshot"
              style={{ width: '80%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home({docsPluginId}) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Change the world">
      <HomepageHeader docsPluginId={docsPluginId} />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
