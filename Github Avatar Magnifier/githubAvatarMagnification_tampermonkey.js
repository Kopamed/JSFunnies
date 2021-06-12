// ==UserScript==
// @name         Github Avatar Magnifier
// @namespace    https://kopamed.cf
// @version      1.0
// @description  This program increases/decreases the scale of github avatars (profile pictures)
// @author       Kopamed
// @match        https://github.com/*
// @icon         https://avatars.githubusercontent.com/u/46960128?v=4
// @grant        GPL v3
// ==/UserScript==

(function() {
    'use strict';

    // Change the 1.5 on line 16 to the number of times you want the avatar to be magnified by
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
})();