
var qvAjax_Path = 'http://eu.demo.qlikview.com/QvAJAXZfc/';
var qvAjaxLib_Url = qvAjax_Path + 'htc/QvAjax.js';

var docPath_SalesCompass = 'qvdocs/Sales%20Compass.qvw';
var docPath_ITAssetManagement = 'qvdocs/IT%20Asset%20Management.qvw';

// If you want to load your objects from your local machine (or any other machine)
// uncomment the following line
// In that scenario please make sure that the following Urls are working
// var QVAJAX_PATH = 'http://localhost/QVAJAXZfc/';


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
};

$(function () {

    // Load the menu content & config the menu
    $("#mnuContainer").load("library/content/menu.html", function () {
        $("#menu").menu();
        $("#mnuCaller").click(this, function () {
            $("#menu").toggle();
            $("#menu").position({
                my: "left top",
                at: "left bottom",
                of: $("#mnuCaller"),
                collision: "flip"
            });
        });
    });

    // Load the copyright
    $("#divCopyright").load("library/content/copyright.html", function () {
        // do nothing
    });

    
            
});