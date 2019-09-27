const Backdrop = () => (
	<div>
		<style jsx>{`
			div {
				position: fixed;
				height: 100vh;
				width: 100vw;
				background-image: url('/static/img/bl_back.png');
				background-position: center 1em;
				background-repeat: no-repeat;
				background-size: auto 100vh;
				background-color: #202020;
				z-index: 0;
			}
		`}</style>
	</div>
);

export default Backdrop;