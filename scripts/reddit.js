// Reddit Sidebar Toggle.
// Created by Dylan Araps.


function toggle_post(value) {
    // Remove margin on individual posts.
    // Fixes issues on /r/outoftheloop
    var posts   = document.getElementsByClassName("thing");

    for (var i=0; i<posts.length; i++) {
        posts[i].style.marginRight = value;
    }
}


function main() {
    var sidebar = document.getElementsByClassName("side")[0];
    var content = document.querySelector("[role=\"main\"]");

    if (sidebar) {
        var display = sidebar.style.display;

        if (display == "none") {
            sidebar.style.display = "block";
            content.style.marginRight = null;
            toggle_post(null);

        } else {
            sidebar.style.display = "none";
            content.style.marginRight = "15px";
            toggle_post("15px");
        }
    }
}


main();
