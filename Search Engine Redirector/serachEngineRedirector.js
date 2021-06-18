// Search Engine Redirector
// Made by Kopamed on Friday 11th June 2020
// reroutes the person to bing when google is detected in the url bar
// Check out my other JS ghost modifications at https://kopamed.cf

// Change googrl to the thing you want to sdearch for in the url bar, and change https://bing.com to the website you want the person to be re-rputed to once the keyword is detected
var lookFor = "google";
var reRoutTo = "https://bing.com";
var loc = document.location.href;

if(loc.toLowerCase().indexOf(lookFor) != -1) {
    document.location = reRoutTo;
}