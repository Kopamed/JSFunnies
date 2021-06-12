// Random Image Replacer
// Made by Kopamed on Friday 11th June 2020
// Replaces all the images on the website with random images. Won't work on websites which rely on html2canvas so sry abt that.
// Check out my other JS ghost modifications at https://kopamed.cf

// Change the defaultWidth and Height variables to whatever default size you want images which don-t have a pre-defined size to be (in pixels)
console.log("[Tampermonkey][RIM][+] Waiting for content to load...");
console.log("[Tampermonkey][RIM][+] Content loaded successfuly!");
var defaultWidth = 500;
var defaultHeight = 500;
console.log("[Tampermonkey][RIM][+] Looking for images...");
var images = document.getElementsByTagName("img");
console.log("[Tampermonkey][RIM][+] Found " + images.length + " images!");

for(let image = 0; image<images.length; image++) {
    console.log("[Tampermonkey][RIM][+] Changing image number " + (image+1));
    var img = images[image];
    let width = img.getAttribute("width");
    let height = img.getAttribute("height");
    if (width != null && height != null) {
        img.setAttribute("src", "https://picsum.photos/" + width + "/" + height);
    }else{
        img.setAttribute("src", "https://picsum.photos/" + defaultWidth + "/" + defaultHeight);
    }
}

console.log("[Tampermonkey][RIM][+] Successfuly changed " + images.length + " images!");