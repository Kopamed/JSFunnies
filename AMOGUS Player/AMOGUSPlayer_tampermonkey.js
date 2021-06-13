// ==UserScript==
// @name         AMOGUS Player
// @namespace    https://kopamed.cf
// @version      1.0
// @description  This program plays amogus whenever a link is pressed
// @author       Kopamed
// @match        *://*/*
// @icon         https://avatars.githubusercontent.com/u/46960128?v=4
// @grant        GPL v3
// ==/UserScript==

(function() {
    'use strict';

    
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
})();