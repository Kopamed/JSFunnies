// ==UserScript==
// @name         Wikipedia External Link
// @namespace    https://kopamed.cf
// @version      1.0
// @description  Opens links in wikipedia in a new tab instead of the current one
// @author       Kopamed
// @match        https://github.com/*
// @icon         https://avatars.githubusercontent.com/u/46960128?v=4
// @grant        GPL v3
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName("a");

    for(let link = 0; link < links.length; link++) {
        links[link].setAttribute("target", "_blank")
    }
})();