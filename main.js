// ==UserScript==
// @name         SteamWallpaperDeblur
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  去除Wallpaper创意工坊中R18壁纸的缩略图模糊效果(Removes blur effect from adult content images in Steam Wallpaper workshop)
// @author       fly9593
// @match        https://steamcommunity.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Remove blur effect from images
    function removeBlur() {
        var blurredImages = document.querySelectorAll('.ugc.has_adult_content img, .ugc.has_adult_content div.imgWallItem');
        blurredImages.forEach(function(image) {
            image.style.filter = 'none';
        });
    }

    // Call the removeBlur function
    removeBlur();
})();
