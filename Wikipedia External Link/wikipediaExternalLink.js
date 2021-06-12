// Wikipedia External Link
// Made by Kopamed on Friday 11th June 2020
// Opens links in wikipedia in a new tab instead of the current one
// Check out my other JS ghost modifications at https://kopamed.cf

var links = document.getElementsByTagName("a");

for(let link = 0; link < links.length; link++) {
	links[link].setAttribute("target", "_blank")
}