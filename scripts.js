document.addEventListener("DOMContentLoaded", function(event) { 
	// let views = ['home','work','about','contact'];
	let views = ['home','work','about','contact'];
	let currentView = 'home';
	
	let projects = [];
	let currentProject = '';
		
	document.addEventListener('click', function (event) {
		if (!event.target.matches('.section-link')) return;
		event.preventDefault();
		goToView(event.target.textContent);
	}, false);
	
	function goToView(id) {
		for (let i = 0; i < views.length; i++) {
			let link = document.getElementById(views[i] + '-link');
			if (link.id.startsWith(id)) {
				link.classList.add('on');
			}
			else if (link.classList.contains('on')) {
				link.classList.remove('on');
			}
		}
		let viewing = document.getElementById(currentView);
		let nextView = document.getElementById(id);
		viewing.classList.remove('show');
		viewing.classList.add('hide');
		nextView.classList.remove('hide');
		nextView.classList.add('show');
		setTimeout( () => {
			viewing.classList.remove('shown');
			viewing.classList.add('hidden');
			nextView.classList.remove('hidden');
			nextView.classList.add('shown');
		}, 500);
		currentView = id;
	}
	
	
});