import Header from './header';
import Backdrop from './backdrop';


const Layout = props => (
  <div>
		<Backdrop></Backdrop>
		<div className="container">
			<Header />
			{props.children}
		</div>
		<style jsx>{`
			div.container {
				position: relative;
				width: 100%;
				max-width: 80em;
				margin: 0 auto;
				padding: 0 4em;
				box-sizing: border-box;
			}
		`}</style>
		<style jsx global>{`
			body {
				font-size: 14pt;
				position: relative;
				width: 100%;
				min-height: 100%;
				padding: 0;
				margin: 0;
				color: whitesmoke;
				font-family: 'Cutive Mono', monospace;
				line-height: 1.5em;
				background-color: #202020;
			}

			body * {
				box-sizing: border-box;
			}

			h1, h2, h3, h4, h5, h6, p, li {
				font-weight: normal;
				max-width: 100%;
			}

			h1 {
				margin: 0 auto;
				font-weight: normal;
				font-size: 1.68em;
				line-height: 1.5em;
				max-width: 22em;
				text-align: center;
			}
			h2 {
				margin: 2em auto;
				font-size: 1.68em;
				line-height: 1.6em;
			}
			h3 {
				font-size: 1.41em;
				line-height: 1.6em;
				margin: 0;
				/* border-bottom: 1px solid gray; */
			}
			h4 {
				line-height: 1.88em;
				font-size: 1.19em;
				margin: 0;
			}
			h5 { font-weight: bold; }
			p {
				margin: 1.5em 0;
			}
			ul {
				list-style: none;
				padding-left: 0;
			}
			img {
				box-sizing: border-box;
				object-fit: cover;
			}

			a {
				position: relative;
				color: whitesmoke;
			}
			a.fancy {
				text-decoration: none;
			}
			a.fancy::before {
				content: '';
				position: absolute;
				width: 0;
				height: 1.5em;
				border-bottom: 1px solid whitesmoke;
				transition: width .3s ease, border-color .3s;
			}
			a.fancy:hover::before {
				width: 100%;
			}
			
			main {
				position: relative;
				justify-content: space-around;
				min-height: calc(100vh - 2em);
				padding: 4em 0;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
				overflow-x: hidden;
			}
			
			.flex {
				display: flex;
			}
			.flex.column {
				flex-direction: column;
			}
			.framed {
				border: 1em solid whitesmoke;
			}
			.framed.dark {
				border: 1em solid black;
			}
			.no-top-margin {
				margin-top: 0;
			}
			.no-bottom-margin {
				margin-bottom: 0;
			}
			
			@media only screen and (max-width: 1000px) {
				.flex.collapse {
					flex-direction: column;
				}
				.flex.collapse.reverse {
					flex-direction: column-reverse;
				}
				.responsive-margin {
					margin: 0 !important;
				}
				main {
					padding: 0 1em;
				}
			}
			
			@media only screen and (max-width:600px) {
				body {
					font-size: 12pt;
				}
			}
		`}</style>
  </div>
);

export default Layout;