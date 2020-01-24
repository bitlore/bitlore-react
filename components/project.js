const Project = project => (
	<section id={project.title} className="current flex collapse reverse">
		<div className="left framed"></div>
		<div className="right flex column">
			<div>
				<img src={project.img} alt="omi gold nyc"></img>
				<h3>{project.title}</h3>
				<ul>
					{/*
						{project.bullets.map( bullet => {
						return <li>{bullet}</li>;
					})}
					*/}
				</ul>
				<p>
					partnered with <a href="https://surfaceseo.net/" target="_blank">Surface SEO</a>
				</p>
				<a href="https://www.omigold.com/pages/about-lab-created-diamonds" target="_blank">
					visit page
				</a>
			</div>
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
			}
		`}</style>
	</section>
);

export default Project;