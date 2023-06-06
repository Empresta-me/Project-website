import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';  

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
        title: (<Translate description="Features cross-platform title">Distributed</Translate>),
        Svg: require('../../static/img/undraw_progressive_app_m-9-ms.svg').default,
        description: (
            <Translate description="Features cross-platform description">
              Our system is distributed, meaning that multiple communities can be hosted in different servers.
              This way, you can have your own community and manage it however you want.
            </Translate>
        ),
    },
    {
        title: (<Translate description="Features simple title">Reputable</Translate>),
        Svg: require('../../static/img/undraw_innovative_b409.svg').default,
        description: (
            <Translate description="Features simple description">
                We use a reputation system to allow users to rate each other via vouches.
                This way, you can know if you can trust someone before lending them your items.
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
          Our system is secure, meaning that all the data is encrypted and every message is digitally signed.
          This way, you can be sure that your data is safe.
          Choose the authentication method that suits your community the best.
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
    gif: "/img/functionalities/feat_2.gif",
    gifPosition: "left",
  },
  {
    title: "Borrow items",
    description: "Quickly find items you need and borrow them from people in your community.",
    gif: "/img/functionalities/feat_1.gif",
    gifPosition: "right",
  },
  {
    title: "Conveniently connect with other people",
    description: "Share your QR Code with your peers and become connected.",
    gif: "/img/functionalities/feat_3.gif",
    gifPosition: "left",
  },
  {
    title: "See the network of trust",
    description: "View the network of trust between users in your community and see how reliable they are based on their borrowing and lending history.",
    gif: "/img/functionalities/feat_4.gif",
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

//Deliverables 

const Download_File = (event, file, name) => {

  // using Java Script method to get PDF file
  fetch(file).then(response => {
      response.blob().then(blob => {

        console.log(file);
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
       
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = name;
        alink.click();
         console.log(fileURL);
      })
  })
}
function Doc(props) {
  const { name, description, image, file, file_name } = props;

  return (
    
    <div className="col col--12">
      <Card onClick={event => Download_File(event, file, file_name)} className={styles.imageContainer} sx={{ maxWidth: 240 }} style={{backgroundColor: "rgb(46, 47, 48)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"  color="white">
            {name}
          </Typography>
          <Typography variant="body2" color="lightgrey">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button   onClick={event => Download_File(event, file, file_name)} size="small" style={{color: "rgb(196, 132, 13)"}}>
          Download
        </Button> 
      </CardActions>
    </Card>

  
    </div>
  );
}
const Doc_List = [
  {
    name: "Project Calendar",
    description:"Project Calendar Document",
    image: require("../../static/img/Calendar.png").default,
    file: "/documents/Project_Calendar.docx",
    file_name: "Project_Calendar.docx"
  },
  {
    name: "Project Proposal",
    description:"Project Proposal Document made to intruducee our Project",
    image: require("../../static/img/Proposal.png").default,
    file: "/documents/Proposal.pdf",
    file_name: "Proposal.pdf"
  },
  {
    name: "Project Abstract",
    description:"A 2 page summary of the Project",
    image: require("../../static/img/Abstract.jpeg").default,
    file: "/documents/Abstract.pdf",
    file_name: "Abstract.pdf"
  },
  {
    name: "Project Poster",
    description:"Project Poster Shown at Students at DETI",
    image: require("../../static/img/Poster.jpeg").default,
    file: "/documents/Poster.pdf",
    file_name: "Poster.pdf"
  },
  {
    name: "MileStone 1 Presentation",
    description:"Powepoint Presentation made for the first Milestone",
    image: require("../../static/img/Milestone2.png").default,
    file: "/documents/Milestone1.pptx",
    file_name: "Milestone1.pptx",
    
  },
  {
    name: "MileStone 2 Presentation",
    description:"Powepoint Presentation made for the second Milestone",
    image: require("../../static/img/Milestone1.png").default,
    file: "/documents/Milestone2.pptx",
    file_name: "Milestone2.pptx"
   
  },
  {
    name: "MileStone 3 Presentation",
    description:"Powepoint Presentation made for the third Milestone",
    image: require("../../static/img/Milestone3.png").default,
    file: "/documents/Milestone3.pptx",
    file_name: "Milestone3.pptx"
   
  },
  {
    name: "CheckPoint Presentation",
    description:"Powepoint Presentation made for the third MileStone CheckPoint",
    image: require("../../static/img/CheckPoint.png").default,
    file: "/documents/CheckPoint.pptx",
    file_name: "CheckPoint.pptx"
  },
  {
    name: "MileStone 4 Presentation",
    description:"Powepoint Presentation made for the fourth Milestone",
    image: require("../../static/img/Milestone4.png").default,
    file: "/documents/Milestone4.pptx",
    file_name: "Milestone4.pptx"
  },
  {
    name: "Technical Report",
    description:"Extensive Report on the Project",
    image: require("../../static/img/Report.jpeg").default,
    file: "/documents/Report.pdf",
    file_name: "Report.pdf"
  }
 
  
];

export default function HomepageFeatures() {
  return (
    <div>
      <div className="container" id="functionalitiessection">
      <div className={styles.headerFunc}>
      <h2 class={styles.functionalitiesTitle}>Main Functionalities</h2>
        </div>
          {FunctionalityList.map((props, idx) => (
            <Functionality key={idx} {...props} />
          ))}
      </div>
    <section data-aos="fade-up" className={styles.features}>
      <div className="container">
        <h2 class={styles.reqTitle}>Project Video</h2>
        <p></p>
        <p></p>
        <div className="video-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x7mNJgTuKVw"
            title="Project Video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section> 
    <section data-aos="fade-up" id="team" className={styles.TeamSection}>
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
    </section >
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

    <section data-aos="fade-up" className={styles.features}>
      <div className="container">
      <h2 class={styles.reqTitle}>Deliverables</h2>
      <p></p>
      <p></p>
        <div className="row">
         
            {Doc_List.map((props, idx) => ( 
              <div className="col-lg-4 col-md-6 mb-5" key={idx}>
                <Doc {...props} />
              </div>
            ))}
          
        </div>
      </div>
    </section> 
</div>
  );
}
