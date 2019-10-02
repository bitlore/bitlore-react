import Layout from '../components/layout';

const projects = ['omi','evans','bm','galileo'];
let navigating = false;
let currentProject = 'omi';

function nextProject() {
  if (navigating) {
    return;
  }
  let currentIndex = projects.indexOf(currentProject);
  navigating = true;
  for (let i = 0, n = projects.length; i < n; i++) {
    let el = document.getElementById(projects[i]);
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

  			<section id="omi" className="current flex collapse reverse">
  				<div id="diamond" className="left framed"></div>
  				<div className="right flex column">
  					<div>
  						<img src="/static/img/omi-gold-logo.png" alt="omi gold nyc"></img>
  						<h3>Landing Page</h3>
  						<ul>
  							<li>Layout design</li>
  							<li>Iconography</li>
  							<li>Image optimization</li>
  							<li>Extend Shopify CMS functionality</li>
  						</ul>
  						<p>
  							partnered with <a href="https://surfaceseo.net/" target="_blank">Surface SEO</a>
  						</p>
  						<a href="https://www.omigold.com/pages/about-lab-created-diamonds" target="_blank">
  							visit page
  						</a>
  					</div>
  				</div>
  			</section>

  			<section id="evans" className="queued flex collapse reverse">
  				<div id="presslok" className="left framed"></div>
  				<div className="right flex column">
  					<div>
  						<img src="/static/img/evans-components-logo.png" alt="evans components logo"></img>
  						<h3>Website Development</h3>
  						<ul>
  							<li>Developed responsive custom Wordpress theme</li>
  							<li>Integrated with Mapbox Studio for distribution map</li>
  							<li>Implemented advanced product filtering</li>
  						</ul>
  						<p>
  							developed by Taylor with <a href="https://www.rwest.com/" target="_blank">R\West</a>
  						</p>
  						<a href="https://www.evanscomponents.com/" target="_blank">
  							visit site
  						</a>
  					</div>
  				</div>
  			</section>
  			
  			<section id="bm" className="flex collapse reverse">
  				<div id="jelly" className="left framed"></div>
  				<div className="right flex column">
  					<div>
  						<img src="/static/img/b-m-lockup.png" alt="bonne maman strawberry preserves"></img>
  						<h3>E-commerce integration</h3>
  						<ul>
  							<li>Built out Shopify ecommerce site to match website</li>
  							<li>Developed email campaigns through Mailchimp</li>
  							<li>Led website maintenance and updates</li>
  						</ul>
  						<p>
  							developed by Taylor with <a href="https://www.rwest.com/" target="_blank">R\West</a>
  						</p>
  						<a href="https://shop.bonnemaman.us/" target="_blank">
  							visit site
  						</a>
  					</div>
  				</div>
  			</section>
  		
  			<section id="galileo" className="flex collapse reverse">
  				<div id="fencepost" className="left"></div>
  				<div className="right flex column">
  					<div>
  						<img id="galileo-logo" src="/static/img/galileo-logo.png" alt="galileo logo and lockup"></img>
  						<h3>Website development</h3>
  						<ul>
  							<li>Co-built custom responsive Wordpress theme</li>
  							<li>Collaborated in design concepting</li>
  							<li>Wrote code for SVG animations</li>
  						</ul>
  						<p>
  							developed by Taylor with <a href="https://www.rwest.com/" target="_blank">R\West</a>
  						</p>
  						<a href="https://galileo-camps.com/" target="_blank">
  							visit site
  						</a>
  					</div>
  				</div>
  			</section>
  			
  		</main>
  		<div className="r-arrow go-right" onClick={nextProject}>
  			<div className="go-right"></div>
  		</div>
  		<style jsx>{`

  			section {
  				position: absolute;
  				top: 0;
  				right: 0;
  				left: 0;
  				bottom: 0;
  				margin: 0 auto;
  				padding: 6em;
  				transform: translateX(200%);
  				transition: transform 1s;
  				opacity: 0;
  			}
  			section.prev {
  				opacity: 1;
  				transform: translateX(-200%);
  			}
  			section.current {
  				opacity: 1;
  				transform: translateX(0);
  			}
  			section > div.left {
  				flex: 1 1 50%;
  				background-position: center;
  				background-repeat: no-repeat;
  				background-size: cover;
  			}
  			section > div.right {
  				justify-content: space-around;
  				text-align: left;
  				flex: 1 0 50%;
  				padding-left: 4em;
  			}
  			section > div.right img {
  				display: block;
  				margin: 4em auto;
  				width: 60%;
  				max-width: 350px;
  			}

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

  			div#diamond {
  				background-image: url('/static/img/rough-diamond.jpg');
  			}
  			div#presslok {
  				background-image:url('/static/img/presslok.png');
  			}
  			div#jelly {
  				background-image:url('/static/img/jelly-2.png');
  			}
  			div#fencepost {
  				background-image: url('/static/img/galileo-sign.png');
  				background-size:contain;
  			}
  			img#galileo-logo {
  				width: 40%;
  			}
  			
  			@media only screen and (max-width: 1000px) {
  				main {
  					bottom: auto;
  				}
  				section {
  					padding: 1em;
  					max-width: 40em;
  				}
  				section > div.right {
  					display: block;
  					padding-left: 0;
  				}
  				section > div.left {
  					display: none;
  				}
  				div.r-arrow {
  					top: auto;
  					bottom: 1.5em;
  					right: 2.5em;
  				}
  			}
  		`}</style>
    </div>
  );
}

export default Work;