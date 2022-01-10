//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
/*Dropdown menu code from https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp */
var dropdown = document.getElementsByClassName("dropdown-btn"); //dropdown button element
var i; //loop element

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
	//Change styling for dropdown button [i]
    this.classList.toggle("active");
	//Toggle between arrow up/down
	this.classList.toggle("change-arrow");
	//Assign variable for the dropdown-container element
    var dropdownContent = this.nextElementSibling;
		//if dropdown container visible, hide it
    if (dropdownContent.style.display === "block") {
		dropdownContent.style.display = "none";
    } else {
		//if dropdown container hidden, show it
		dropdownContent.style.display = "block";
    }
  });
}


//*OFF CANVAS MENU/
/*Off Canvas Menu code from https://www.w3schools.com/howto/howto_js_off-canvas.asp */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementsByTagName("nav")[0].style.width = "250px";
  document.getElementsByTagName("main")[0].style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementsByTagName("nav")[0].style.width = "0";
  document.getElementsByTagName("main")[0].style.marginLeft = "0";
}

/*classList.toggle code for animated menu ico from https://www.w3schools.com/howto/howto_css_menu_icon.asp */
/*Toggle between element function from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */
function toggleNav(n) {
	//Change the menu icon between bars and X
	n.classList.toggle("change");
	//Select the nav element
	var x = document.getElementsByTagName("nav")[0];
	//Show nav element if it is hidden
	if (x.style.width < "250px") {
		openNav();
	//Hide nav element if it is currently shown
	} else {
		closeNav();
	}
}