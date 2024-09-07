function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		navBtn.classList.toggle('mobile-nav-btn--active')
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};

	// Mobile nav list
	const mobileNavList = document.querySelector('.mobile-nav__list');
	const navListItems = document.querySelectorAll('.nav__list li');  
	const navLoginItems = document.querySelectorAll('.nav__login li');  

	navListItems.forEach(item => {
		const clonedItem = item.cloneNode(true);
		mobileNavList.appendChild(clonedItem);
	});

	navLoginItems.forEach(item => {
		const clonedItem = item.cloneNode(true);
		mobileNavList.appendChild(clonedItem);
	});
}

export default mobileNav;