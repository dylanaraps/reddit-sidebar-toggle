// Reddit Sidebar Toggle.
// Created by Dylan Araps.
/* eslint-disable no-undef */

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        file: "scripts/reddit.js"
    });
});
