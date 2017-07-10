// Reddit Sidebar Toggle.
// Created by Dylan Araps.

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        file: "scripts/reddit.js"
    });
});
