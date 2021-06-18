// ==UserScript==
// @name         Search Engine Redirector
// @namespace    https://kopamed.cf
// @version      1.0
// @description  reroutes the person to bing when google is detected in the url bar
// @author       Kopamed
// @match        *://*/*
// @icon         https://avatars.githubusercontent.com/u/46960128?v=4
// @grant        GPL v3
// ==/UserScript==

(function() {
    'use strict';

    // Change googrl to the thing you want to sdearch for in the url bar, and change https://bing.com to the website you want the person to be re-rputed to once the keyword is detcted
    var lookFor = "google";
    var reRoutTo = "https://bing.com";
    var loc = document.location.href;

    if(loc.toLowerCase().indexOf(lookFor) != -1) {
        document.location = reRoutTo;
    }
})();