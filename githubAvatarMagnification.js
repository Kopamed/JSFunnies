// Github Avatar Magnification
// Made by Kopamed on Friday 11th June 2020
// This program increases/decreases the scale of github avatars (profile pictures)
// Check out my other JS ghost modifications at https://kopamed.cf

// Change the 1.5 on line 5 to the number of times you want the avatar to be magnified by
var MagnificationScale = 1.5;
var avatars = document.getElementsByClassName("avatar");

function magnify(scale, obj) {
    let currWidth = obj.getAttribute("width");
    let currHeight = obj.getAttribute("height");
    obj.setAttribute("width", currWidth*scale);
    obj.setAttribute("height", currHeight*scale);
}

for (let i = 0; i < avatars.length; i++) {
    magnify(3, avatars[i]);
}