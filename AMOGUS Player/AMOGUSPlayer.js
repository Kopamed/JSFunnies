// AMOGUS Player
// Made by Kopamed on Friday 13th June 2020
// This program plays amogus whenever a link is pressed
// Check out my other JS ghost modifications at https://kopamed.cf

var links = document.getElementsByTagName("a");

for(let link = 0; link < links.length; link++) {
    links[link].setAttribute("target", "_blank")
}

var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function () {
        var audio = new Audio('https://kopamed.cf/AMOGUS.mp3');
audio.play();
    }
}