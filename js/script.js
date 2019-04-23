var navMain = document.querySelector(".page-navigation");
var navToggle = document.querySelector(".page-navigation__target");

navToggle.addEventListener("click", function() {
	if (navMain.classList.contains("page-navigation--closed")) {
		navMain.classList.remove("page-navigation--closed");
		navMain.classList.add("page-navigation--opened");
	} else {
		navMain.classList.add("page-navigation--closed");
		navMain.classList.remove("page-navigation--opened");
	}
});
