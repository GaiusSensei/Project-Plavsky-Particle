/**
* Created with Project-Plavsky-Particle.
* User: GaiusSensei
* Date: 2014-02-04
* Time: 07:26 AM
*/
head.js("Content/card-model.css");
head.ready(function readyF(){
    if (getURLParameter("dodge") !== null) {
        document.querySelector("#card-dodge-val").innerHTML = getURLParameter("dodge");
    }
    if (getURLParameter("name") !== null) {
        document.querySelector("#card-model-name").innerHTML = getURLParameter("name");
    }
    if (getURLParameter("icn") !== null) {
        document.querySelector("#card-model-icn").innerHTML = getURLParameter("icn");
    }    
});
// Helper Functions 
var getURLParameter = function getURLParameterF(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
};