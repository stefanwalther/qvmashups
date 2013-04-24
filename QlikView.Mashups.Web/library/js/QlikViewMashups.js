
// ------------------------------------------------------------------
// Reference to demo.qlikview.com (ONLINE MODE)
// ~~
// - this will work for opendoc.htm & singleobject.htm Integration
// - but this will not work for Div integration because of cross
//   domain policy restrictions
// ------------------------------------------------------------------
var qvAjax_Path = 'http://eu.demo.qlikview.com/QvAJAXZfc/';
var qvAjaxLib_Url = qvAjax_Path + 'htc/QvAjax.js';

var docPath_WhatsNew = 'qvdocs/Whats%20New%20in%20QlikView11.qvw';
var docPath_SalesCompass = 'qvDocs/Sales%20Compass.qvw';

// ------------------------------------------------------------------
// LOCAL SETUP
// ~~
// If you want to load your objects from your local machine (or any 
// other machine) uncomment the following line and comment the 
// variables above
// In that scenario please make sure that the following Urls are working
// ------------------------------------------------------------------

var qvAjax_Path = 'http://localhost/QvAJAXZfc/';
var qvAjaxLib_Url = qvAjax_Path + 'htc/QvAjax.js';

var docPath_WhatsNew = 'Whats%20New%20in%20QlikView11.qvw';
var docPath_SalesCompass = 'Sales%20Compass.qvw';







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