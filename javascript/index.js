function closeMenu() {
  
	document.getElementById("nav_menu").style.width= "0px";
	document.getElementById("menu_display").style.transform= "scale(1)";
	

}
function OpenMenu() {
  
	document.getElementById("nav_menu").style.width= "400px";
	document.getElementById("menu_display").style.transform= "scale(0)";

}
function hover(element) {
    element.setAttribute('src', 'images/LOGO-02.png');
}
function unhover(element) {
    element.setAttribute('src', 'images/LOGO-01.png');
}

/*particle animation for object_conatiner_one*/

/* particle animation for object_conatiner_one end */