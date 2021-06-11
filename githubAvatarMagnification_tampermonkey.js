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
})();