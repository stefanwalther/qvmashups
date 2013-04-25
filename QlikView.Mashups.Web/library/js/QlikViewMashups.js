
// ------------------------------------------------------------------
// Do not change code below this line ...
// ------------------------------------------------------------------


function IsOffline() {
    return qvAjax_Path.indexOf('http://eu.demo.qlikview.com/') == -1;
}

function OfflineMsg() {

    $OfflineMsg = $("<div id='dialogOffline'></div>");

    $OfflineMsg.load("library/content/offlinedivmsg.html", function () {
        $OfflineMsg.dialog({
            width: 500,
            height: 300,
            title: 'Not Available in Online Mode',
            resizable: false
        });
    });

}

function loadJs(url, cb) {
    var script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
 
    var loaded = false;
    var loadFunction = function () {
        if (loaded) return;
        loaded = true;
        cb & cb();
    };
    script.onload = loadFunction;
    script.onreadystatechange = loadFunction;
    document.getElementsByTagName("head")[0].appendChild(script);
}

$(function () {

    loadJs('library/js/Config.js');

    // Add the menu button & config the menu
    $("#mnu").empty();
    $("#mnu").append("<button id='cmdMenu'>Select Area</button>");
    $("#cmdMenu")
        .button({
            icons: {
                secondary: "ui-icon-triangle-1-s"
            }
        })
    .click(function (event) {
        // nothing
    });

    $("#mnuContainer").load("library/content/menu.html", function () {
        $("#menu").menu();
        $("#cmdMenu").click(this, function () {
            $("#menu").toggle();
            $("#menu").position({
                my: "left top",
                at: "left bottom",
                of: $("#cmdMenu"),
                collision: "flip"
            });
        });
    });

    // Load the copyright
    $("#divCopyright").load("library/content/copyright.html", function () {
        // do nothing
    });

    
            
});

// ------------------------------------------------------------------
// JavaScript Helpers
// ------------------------------------------------------------------
function randomFromInterval(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}