import Layout from '../components/layout';
import Project from '../components/project';


let navigating = false;

const projects = [
  {
    title : 'holofootwear',
    image : '/static/img/holo.png',
    logo : '/static/img/logo-holo-white.svg',
    header : 'Website development',
    deliverables : ['Custom wordpress theme development','Shopify e-commerce integration','Webflow design tool collab'],
    partners : [
      {
          description: 'partnered with',
          title: 'R\\West',
          link: 'https://www.rwest.com/'
      }
  ],
    link : 'https://holofootwearinc.com/'
  },
  {
    title : 'providencehealthplans',
    image : '/static/img/providence1.png',
    logo : '/static/img/logo-providence.svg',
    header : 'Front end development',
    deliverables : ['Custom Sitecore theme frontend development','WCAG AA accessibility compliance'],
    partners : [
      {
          description: 'partnered with',
          title: 'Grey Ghost Studio',
          link: 'https://www.greyghoststudio.com/'
      }
  ],
    link : 'https://www.providencehealthplan.com/?redirect=0'
  },
  {
    title : 'kaligrey',
    image : '/static/img/kali.png',
    logo : '/static/img/kaligrey_logo.png',
    header : 'Website development',
    deliverables : ['Full Wordpress build on existing theme','Hosting management','Google Analytics integration'],
    partners : [],
    link : 'https://kaligrey.com/'
  },
  {
    title : 'evans',
    image : '/static/img/presslok.png',
    logo : '/static/img/evans-components-logo.png',
    header : 'Website Development',
    deliverables : ['Develop custom Wordpress theme','Integrate with Mapbox Studio for distribution map','Implement advanced product filtering'],
    partners : [
        {
            description: 'partnered with',
            title: 'R\\West',
            link: 'https://www.rwest.com/'
        }
    ],
    link : 'https://www.evanscomponents.com/'
  },
  {
    title : 'alexion',
    image : '/static/img/alexion.png',
    logo : '/static/img/alexion-logo.png',
    header : 'Front end development',
    deliverables : ['Front end Sitecore development', 'Custom JS quiz interface and interaction'],
    partners : [
      {
          description: 'partnered with',
          title: 'Grey Ghost Studio',
          link: 'https://www.greyghoststudio.com/'
      }
  ],
    link : 'https://www.providencehealthplan.com/?redirect=0'
  },
  {
    title : 'theheights',
    image : '/static/img/theheights_plant.png',
    logo : '/static/img/theheights_logo.svg',
    header : 'Website development',
    deliverables : [ 'Develop custom Wordpress theme','Create dynamic order form','Deploy site'],
    partners : [
        {
            description: 'design by',
            title : 'Ian Johnson',
            link : 'https://ianj.myportfolio.com/'
        },
        {
            description: 'photography by',
            title : 'Wunderfurn Photography',
            link : 'https://wunderfurn.com/'
        }
    ],
    link : 'https://theheightsco.com'
  }
];

let currentProject = projects[0];


function nextProject() {
  if (navigating) {
    return;
  }
  let currentIndex = projects.indexOf(currentProject);
  navigating = true;
  for (let i = 0, n = projects.length; i < n; i++) {
    let el = document.getElementById(projects[i].title);
    if (i === currentIndex) {
      el.classList.remove('current');
      el.classList.add('prev');
    }
    else if (
      i === currentIndex + 1 ||
      ( currentIndex === projects.length - 1 && i === 0)
    ) {
      el.classList.add('current');
      currentProject = projects[i];
    }
    else {
      el.classList.remove('prev');
    }
  }
  setTimeout( () => { navigating = false; }, 500);
}


function Work() {
  
  
  return (
    <div>
  		<main id="work">
        { 
          projects.map( project => {
            return <Project key={project.title} project={project} current={currentProject}/>;
          })
        }
  		</main>
  		<div className="r-arrow go-right" onClick={nextProject}>
  			<div onClick={nextProject} className="go-right"></div>
  		</div>
  		<style jsx>{`
  			div.r-arrow {
  				position: absolute !important;
  				top: 50%;
  			}
  			div.r-arrow {
  				position: relative;
  				transition: border-color .5s ease;
  				right: 2em;
  				width: 0;
  				height: 0;
  				border: 1em solid transparent;
  				border-color: whitesmoke whitesmoke whitesmoke transparent;
  				cursor: pointer;
  			}
  			div.r-arrow > div:first-child {
  				position: absolute;
  				top: -1em;
  				left: 1em;
  				width: 0;
  				height: 0;
  				border: 1em solid transparent;
  				border-color: transparent transparent transparent whitesmoke;
  				cursor: pointer;
  				transition: border-color .5s ease;
  				overflow: visible;
  			}
  			div.r-arrow:hover {
  				border-color: #444 #444 #444 transparent;
  			}
  			div.r-arrow:hover > div:first-child {
  				border-color: transparent transparent transparent #444;
  			}
  			
  			@media only screen and (max-width: 800px) {
  				main {
  					bottom: auto;
  				}
  				div.r-arrow {
  					top: auto;
  					bottom: 1.5em;
  					right: 2.5em;
  				}
                div.r-arrow:first-child {
                }
  			}
  		`}</style>
    </div>
  );
}

export default Work;