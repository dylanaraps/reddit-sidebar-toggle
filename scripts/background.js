// Reddit Sidebar Toggle.
// Created by Dylan Araps.

browser.contextMenus.create({
    id: "reddit-st",
    title: "Reddit: Hide sidebar"
});

browser.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "reddit-st") {
        browser.tabs.executeScript({
            file: "scripts/reddit.js"
        });
    }
});
