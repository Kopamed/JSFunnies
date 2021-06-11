// ==UserScript==
// @name         Hyperlink Overrider
// @namespace    https://kopamed.cf
// @version      1.0
// @description  This script overrides all the hyperlinks on the website, and makes them all redirect you to a website of your choice
// @author       Kopamed
// @match        *
// @icon         https://avatars.githubusercontent.com/u/46960128?v=4
// @grant        GPL v3
// ==/UserScript==

(function() {
    'use strict';

    // Replace https://www.kopamed.cf with the website you want all hyperlinks to point to
    var link = "https://www.kopamed.cf";
    var all = document.getElementsByTagName("a");

    for (var i=0, max=all.length; i < max; i++) {
        all[i].setAttribute("href", link)
    }
})();