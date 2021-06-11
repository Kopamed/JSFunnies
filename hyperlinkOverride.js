// Github Avatar Magnification
// Made by Kopamed on Friday 11th June 2020
// This script overrides all the hyperlinks on the website, and makes them all redirect you to a website of your choice
// Check out my other JS ghost modifications at https://kopamed.cf

// Replace https://www.kopamed.cf with the website you want all hyperlinks to point to
var link = "https://www.kopamed.cf";
var all = document.getElementsByTagName("a");

for (var i=0, max=all.length; i < max; i++) {
    all[i].setAttribute("href", link)
}