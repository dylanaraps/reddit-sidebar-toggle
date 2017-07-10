// Reddit Sidebar Toggle.
// Created by Dylan Araps.

browser.browserAction.onClicked.addListener(function() {
    browser.tabs.executeScript({
        file: "scripts/reddit.js"
    });
});
