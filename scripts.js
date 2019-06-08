document.addEventListener("DOMContentLoaded", function(event) { 
	// let views = ['home','work','about','contact'];
	let views = ['home','about','work','contact'];
	let currentView = 'home';
	let navigating = false;
	
	let projects = ['omi','evans','bm','galileo'];
	let currentProject = 'omi';
		
	document.addEventListener('click', function (event) {
		if ( event.target.matches('.section-link') ) {			
			event.preventDefault();
			goToView(event.target.id.split('-')[0]);
			return;
		}
		if ( event.target.matches('.r-arrow') ) {
			event.preventDefault();
			nextProject();
			return;
		}
	}, false);
	
	function goToView(id) {
		if (navigating) {
			return;
		}
		navigating = true;
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
			navigating = false;
		}, 500);
		currentView = id;
	}
	
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

	
});