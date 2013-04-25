// ------------------------------------------------------------------
// ONLINE CONFIGURATION (Reference to eu.demo.qlikview.com)
// ~~
// - this will work for opendoc.htm & singleobject.htm Integration
// - but this will not work for Div integration because of cross
//   domain policy restrictions
// ------------------------------------------------------------------
//var qvAjax_Path = 'http://eu.demo.qlikview.com/QvAJAXZfc/';
//var qvAjaxLib_Url = qvAjax_Path + 'htc/QvAjax.js';

//var docPath_WhatsNew = 'qvdocs/Whats%20New%20in%20QlikView11.qvw';
//var docPath_SalesCompass = 'qvDocs/Sales%20Compass.qvw';

// ------------------------------------------------------------------
// LOCAL CONFIGURATION
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