// ==UserScript==
// @name         Random Image Replacer
// @namespace    https://kopamed.cf
// @version      1.0
// @description  Replaces all the images on the website with random images. Won't work on websites which rely on html2canvas so sry abt that.
// @author       Kopamed
// @match        *://*/*
// @icon         https://avatars.githubusercontent.com/u/46960128?v=4
// @grant        GPL v3
// ==/UserScript==

(function() {
    'use strict';

    // Change the defaultWidth and Height variables to whatever default size you want images which don-t have a pre-defined size to be (in pixels)
    console.log("Waiting for content to load...");
    console.log("Content loaded successfuly!");
    var defaultWidth = 500;
    var defaultHeight = 500;
    console.log("Looking for images...");
    var images = document.getElementsByTagName("img");
    console.log("Found " + images.length + " images!");

    for(let image = 0; image<images.length; image++) {
        console.log("Changing image number " + (image+1));
        var img = images[image];
        let width = img.getAttribute("width");
        let height = img.getAttribute("height");
        if (width != null && height != null) {
            img.setAttribute("src", "https://picsum.photos/" + width + "/" + height);
        }else{
            img.setAttribute("src", "https://picsum.photos/" + defaultWidth + "/" + defaultHeight);
        }
    }

    console.log("Successfuly changed " + images.length + " images!")
})();
