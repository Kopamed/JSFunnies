// Github Avatar Magnification
// Made by Kopamed on Friday 11th June 2020
// This program increases/decreases the scale of github avatars (profile pictures)
// Check out my other JS ghost modifications at https://kopamed.cf

// Change the 1.5 on line 7 to the number of times you want the avatar to be magnified by
var MagnificationScale = 1.5;
const prefix = "[Tampermonkey][GAM][+] ";
var avatars = document.getElementsByClassName("avatar");
console.log(prefix + "Found " + avatars.length + " avatars!");

function magnify(scale, obj) {
    let currWidth = obj.getAttribute("width");
    let currHeight = obj.getAttribute("height");
    obj.setAttribute("width", currWidth*scale);
    obj.setAttribute("height", currHeight*scale);

    return [obj.getAttribute("width"), obj.getAttribute("height")]
}

for (let i = 0; i < avatars.length; i++) {
    let res = magnify(3, avatars[i]);
    console.log(prefix + "Magnified image Nª " + i + "! New width: " + res[0] + " and new height: " + res[1]);
}