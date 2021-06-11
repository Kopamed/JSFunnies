// ==UserScript==
// @name         Link To Random Images
// @namespace    https://kopamed.cf
// @version      1.0
// @description  Idk how to explain this but basically makes all hyperlinks route to random-ass images
// @author       Kopamed
// @match        *
// @icon         https://avatars.githubusercontent.com/u/46960128?v=4
// @grant        GPL v3
// ==/UserScript==

(function() {
    'use strict';

    // Change _blank to _self on line 42 if you want the image to open in the same tab as the website you are on
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;


    var best_images_ww = ["https://picsum.photos/" + x + "/" + y]

    function randomInt(min, max) {
    var num = Math.floor(Math.random() * max);
    while(num < min) {
        num = Math.floor(Math.random() * max);
    }
    return num;
    }

    function randomChoice(arr) {
    return arr[randomInt(0, arr.length)];
    }

    var links = document.getElementsByTagName("a");

    for(let i = 0; i<links.length; i++){
    links[i].setAttribute("href", randomChoice(best_images_ww));
    links[i].setAttribute("target", "_blank");
    }
})();