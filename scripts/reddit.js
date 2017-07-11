// Reddit Sidebar Toggle.
// Created by Dylan Araps.


function toggle_post(value) {
    // Remove margin on individual posts.
    // Fixes issues on /r/outoftheloop
    var posts = document.getElementsByClassName("thing");

    for (var i=0; i<posts.length; i++) {
        posts[i].style.marginRight = value;
    }
}


function main() {
    var sidebar = document.getElementsByClassName("side")[0];
    var content = document.querySelector("[role=\"main\"]");

    if (sidebar) {
        var display = sidebar.style.display;

        if (display != "none") {
            sidebar.style.display = "none";
            toggle_post("15px");

            // !important needs to be used here since this class
            // can't be overidden otherwise.
            content.style.cssText = `margin-top: 20px !important;
                                     margin-right: 15px !important;
                                     padding-top: 0px !important`;
            content.style.border  = "none";

        } else {
            // Reset styles.
            sidebar.style.display = null;
            content.style.border  = null;
            content.style.margin  = null;
            content.style.padding = null;
            toggle_post(null);
        }
    }
}


main();
