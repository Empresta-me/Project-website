import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const TeamMembers = [
  {
    name: "Bruno Moura",
    image: require("../../static/img/team/bruno.png").default,
    role: "Cybersecurity and Backend Developer",
    linkedin: "https://www.linkedin.com/in/bruno-rocha-moura/",
    github: "https://github.com/BrunoRochaDev",
  },
  {
    name: "João Teles",
    image: require("../../static/img/team/teles.png").default,
    role: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-teles-b8b0ab182/",
    github: "https://github.com/jteles277",
  },
  {
    name: "Inês Castro",
    image: require("../../static/img/team/ines.png").default,
    role: "Team Manager",
    linkedin: "https://www.linkedin.com/in/in%C3%AAs-castro-baptista/",
    github: "https://github.com/icbaptista",
  },
  {
    name: "Rafael Remígio",
    image: require("../../static/img/team/remigio.png").default,
    role: "Android Dev and Network Engineer",
    linkedin: "https://www.linkedin.com/in/rafael-rem%C3%ADgio-148866252/",
    github: "https://github.com/Rafael-Remigio", 
  },
  {
    name: "Diogo Silva",
    image: require("../../static/img/team/diogo.png").default,
    role: "DevOps Master",
    linkedin: "",
    github: "https://github.com/DiogoAlves002",
  }
];

const Supervisor = [
  {
    name: "André Zúquete",
    image: require("../../static/img/team/zuquete.png").default,
    role: "Supervisor",
  }
]; 

const FeatureList = [
    {
        title: (<Translate description="Features cross-platform title">Cross platform</Translate>),
        Svg: require('../../static/img/undraw_progressive_app_m-9-ms.svg').default,
        description: (
            <Translate description="Features cross-platform description">
                You can use the app on your phone or laptop.
                The mobile app will be avaiable for Android.
            </Translate>
        ),
    },
    {
        title: (<Translate description="Features simple title">Simple and intuitive</Translate>),
        Svg: require('../../static/img/undraw_innovative_b409.svg').default,
        description: (
            <Translate description="Features simple description">
                Every tool is on the right place.
                Open the app and start drawing.
                Change your tools by clicking on it.
            </Translate>
        ),
    },
  {
    title: (<Translate description="Features customizable title">Customizable</Translate>),
    Svg: require('../../static/img/undraw_options_re_9vxh.svg').default,
    description: (
      <Translate description="Features customizable description">
          Our code will be avaliable for everyone that wants to host a community. 
          Change everything that suits the needs of your community.
      </Translate>
    ),
  },
  {
    title: (<Translate description="Features local title">Secure</Translate>),
    Svg: require('../../static/img/undraw_sweet_home_dkhr.svg').default,
    description: (
      <Translate description="Features local description">
          You can choose to store your data locally or in your favorite cloud (webdav).
          You can also export your data to a file and import it again.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


function TeamMember(props) {
  const { name, role, image, linkedin, github } = props;

  return (
    <div className="col col--12">
      <div className={styles.imageContainer}>
        <img className={styles.teammember} src={image} alt={name} />
        <p></p>
        <h3>{name}</h3>
        <p>{role}</p>
        <div className={styles.socialLinks}>
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={29} style={{ color: 'black' }} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={29} style={{ color: 'black' }}/>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Supervise(props) {
  const { name, role, image, linkedin, github } = props;

  return (
    <div className="col col--12">
      <div className={styles.imageContainer}>
        <img className={styles.teammember} src={image} alt={name} />
        <p></p>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}


const FunctionalityList = [
  {
    title: "Lend items",
    description: "Easily lend items to people in your community with just a few taps on your phone.",
    gif: "/img/functionalities/mockup.gif",
    gifPosition: "left",
  },
  {
    title: "Borrow items",
    description: "Quickly find items you need and borrow them from people in your community.",
    gif: "/img/functionalities/mockup.gif",
    gifPosition: "right",
  },
  {
    title: "Host a community server",
    description: "Create a server for your community and invite people to join, so they can start lending and borrowing items.",
    gif: "/img/functionalities/mockup.gif",
    gifPosition: "left",
  },
  {
    title: "See the network of trust",
    description: "View the network of trust between users in your community and see how reliable they are based on their borrowing and lending history.",
    gif: "/img/functionalities/mockup.gif",
    gifPosition: "right",
  },
];

function Functionality(props) {
  const {title, description, gif, gifPosition, index} = props;
  const isGifOnRight = gifPosition === 'right';
  const colorScheme = index % 4 === 0 || index % 4 === 3 ? 'light' : 'dark';

  return (
    <div class="row">
    <section
      data-aos="fade-up"
      className={`${styles.functionalitySection} ${styles[`functionalitySection--${colorScheme}`]}`}
    >
        <div className="col col--7" style={{ order: isGifOnRight ? 2 : 1 }}>
          <div className={styles.funcTitle}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className="col col--7" style={{ order: isGifOnRight ? 1 : 2 }}>
        <div className={styles.gifContainer}>
          <img className={styles.gif} src={gif} alt="Functionality gif" />
        </div>
      </div>
    </section>
    </div>
  );
}



export default function HomepageFeatures() {
  return (
    <div>
      <div className="container">
      <div className={styles.headerFunc}>
      <h2 class={styles.functionalitiesTitle}>Main Functionalities</h2>
        </div>
          {FunctionalityList.map((props, idx) => (
            <Functionality key={idx} {...props} />
          ))}
      </div>
    <section data-aos="fade-up" className={styles.TeamSection}>
    <h2 class={styles.teamheader}>Team</h2>
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          { Supervisor.map((props, idx) => (
            <div className="col-lg-4 col-md-6 mb-5" key={idx}>
              <Supervise {...props} />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          {TeamMembers.map((props, idx) => (
            <div className="col-lg-4 col-md-6 mb-5" key={idx}>
              <TeamMember {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section data-aos="fade-up" className={styles.features}>
      <div className="container">
      <h2 class={styles.reqTitle}>Requirements</h2>
      <p></p>
      <p></p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
</div>
  );
}