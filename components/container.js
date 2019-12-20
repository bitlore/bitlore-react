const Container = props => (
	<div className="container">
		{props.children}
		<style jsx>{`
			div.container {
				position: relative;
				width: 100%;
				max-width: 80em;
				margin: 0 auto;
				padding: 0 4em;
				box-sizing: border-box;
			}
			@media only screen and (max-width:600px) {
				div.container {
					padding: 0 1em;
				}
			}
		`}</style>
	</div>
);

export default Container;