import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const NavLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || '';
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return (
		<Link {...props}>
			{React.cloneElement(child, { className })}
		</Link>
	);
};

export default withRouter(NavLink);

// 
// class NavLink extends React.Component {
// 
// 	constructor(props) {
// 		super(props);
// 	}
// 
// 
// 
// 	render() {
// 		return (
// 			<div key={this.props.title}>
// 				<Link href={`/${this.props.path}`} activeClassName="on">
// 					{this.props.title}
// 				</Link>
// 				<style jsx>{`
// 					a {
// 						text-decoration: none;
// 						display: inline-block;
// 						width: 80%;
// 					}
// 					div {
// 						flex: 1;
// 						position: relative;
// 						padding: .5em 0 0 0;
// 						user-select: none;
// 					}
// 					div:not(.on) {
// 						cursor: pointer;
// 					}
// 					div::before {
// 						content: '';
// 						position: absolute;
// 						width: 0;
// 						height: 1.5em;
// 						border-bottom: 1px solid #444;
// 						transition: width .3s ease, border-color .3s;
// 					}
// 					div:hover::before {
// 						width: 80%;
// 					}
// 					div.on::before {
// 						width: 80%;
// 						border-bottom-color: whitesmoke;
// 					}
// 
// 					@media only screen and (max-width:600px) {
// 						div:first-child {
// 							text-align: left;
// 						}
// 						div:last-child {
// 							text-align: right;
// 						}
// 					}
// 				`}</style>
// 			</div>
// 		);
// 	}
// 
// 
// }

// const navLink = new NavLink();

// export default NavLink;



// const NavLink = (props) => (
// 	<div key={props.title}>
// 		<Link href={`/${props.path}`}>
// 			<a>{props.title}</a>
// 		</Link>
// 		<style jsx>{`
// 			a {
// 				text-decoration: none;
// 				display: inline-block;
// 				width: 80%;
// 			}
// 			div {
// 				flex: 1;
// 				position: relative;
// 				padding: .5em 0 0 0;
// 				user-select: none;
// 			}
// 			div:not(.on) {
// 				cursor: pointer;
// 			}
// 			div::before {
// 				content: '';
// 				position: absolute;
// 				width: 0;
// 				height: 1.5em;
// 				border-bottom: 1px solid #444;
// 				transition: width .3s ease, border-color .3s;
// 			}
// 			div:hover::before {
// 				width: 80%;
// 			}
// 			div.on::before {
// 				width: 80%;
// 				border-bottom-color: whitesmoke;
// 			}
// 
// 			@media only screen and (max-width:600px) {
// 				div:first-child {
// 					text-align: left;
// 				}
// 				div:last-child {
// 					text-align: right;
// 				}
// 			}
// 		`}</style>
// 	</div>
// );
// 
// export default NavLink;


