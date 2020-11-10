import React from 'react';

class Project extends React.Component {
	render() {
		
		let style = {backgroundImage : 'url(' + this.props.project.image + ')'};
		
		return (
			<section id={this.props.project.title} className={`
				${this.props.current === this.props.project ? 'current' : ''}
				flex collapse`}>
				<div className="left framed" style={style}></div>
				<div className="right flex column">
					<div>
						<img src={this.props.project.logo}></img>
						<h3>{this.props.project.header}</h3>
						<ul>	
							{
								this.props.project.deliverables.map( item => {
									return <li key={item}>{item}</li>;
								})
							}
						</ul>
						<ul>
							{
								this.props.project.partners.map( (partner, index) => {
									return <li key={index}>{partner.description} <a href={partner.link} target="_blank">{partner.title}</a></li>;
								})
							}
						</ul>
						<a href={this.props.project.link} target="_blank">
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
						padding: 6em 1em 6em 0;
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
						margin: 2em 0;
						width: 50%;
						max-width: 350px;
					}
					#theheights img {
						width: 35%;
					}
					
					@media only screen and (max-width: 1000px) {
						section {
							padding: 1em 0;
							max-width: 30em;
							margin: 0 auto;
							bottom: auto;
						}
						section > div.right {
							display: block;
							padding-left: 0;
						}
						section > div.right img {
							margin: 2em auto;
						}
						section > div.left {
							flex: 0 0 80vw;
						}
						#theheights img {
							width: 28%;
						}
					}
				`}</style>
			</section>
		);
	}
}

export default Project;