//alert("Javascript Run");

//new needShareDropdown(document.getElementById('share-button-1'));
//new needShareDropdown(document.getElementById('share-button-2'));
////	new needShareDropdown(document.getElementById('share-button-3'));
//new needShareDropdown(document.getElementById('share-button-4'));
//new needShareDropdown(document.getElementById('share-button-5'));



const side_menu_icon = document.querySelector('.side-menu-icon');

const side_nav = document.querySelector('#side-nav');
const nav_overlay = document.querySelector('.nav-overlay');
const bottom_sheet = document.querySelector('.bottom-sheet');
const material_icons = document.querySelectorAll('.material-icons');
const dropdown_sidemenu = document.querySelector('.dropdown-sidemenu');

const search_back_arrow = document.querySelector('.search-back-arrow');
const top_search_bar = document.querySelector('.top-search-bar');
const search_button = document.querySelector('.search-button');






var isBottomsheetOpen = false;
var isNavOpen = false;
var isDropDownOpen = false;

material_icons.forEach(material_icon => {
	material_icon.onclick = function () {
		if (this.innerText == 'keyboard_arrow_up' || this.innerText == 'keyboard_arrow_down') {

			let parentnode_id = this.parentNode.dataset.dropdown;
			let targetDropdown = document.getElementById(parentnode_id);

			(!isDropDownOpen) ? (this.innerText = 'keyboard_arrow_up', isDropDownOpen = true, targetDropdown.style.display = 'block', targetDropdown.style.opacity = '1') : (this.innerText = 'keyboard_arrow_down', isDropDownOpen = false, targetDropdown.style.display = 'none', targetDropdown.style.opacity = '0')
			console.log(this.innerText);
		}

	}
})


side_menu_icon.addEventListener('click', (e) => {
	e.stopPropagation();
	if (!isNavOpen) {
		side_nav.style.left = "0px";
		nav_overlay.style.opacity = "0.5";
		nav_overlay.style.display = "block";
		isNavOpen = true;
	}



});


nav_overlay.addEventListener('click', () => {
	//alert("Some where around the document is clicked!");
	if (isNavOpen) {
		side_nav.style.left = "-250px";
		nav_overlay.style.opacity = "0";
		nav_overlay.style.display = "none";
		isNavOpen = false;
	}
});

//fab_btn.addEventListener('click',(e)=>{	
//	e.stopPropagation();			
// if(!isNavOpen){
// 	side_nav.style.left="0px";
// 	nav_overlay.style.opacity="0.5";
// 	nav_overlay.style.display="block";
// 	isNavOpen=true;
// }

// else{
// 	side_nav.style.left="-250px";
// 	nav_overlay.style.opacity="0";
// 	nav_overlay.style.display="none";
// 	isNavOpen=false;
// }




//});


search_back_arrow.onclick = function () {
	top_search_bar.classList.remove('active');
	console.log('am click back arrow');
}


search_button.onclick = function () {
	top_search_bar.classList.add('active');
	console.log('am clicked search arrow');
	document.getElementById('search-text').focus();
}