export const SERVER_URL = 'http://192.168.56.101:42426'

export function httpGetSync(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText
}

export function httpPostAsync(theUrl,params,callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback();
    }
    xmlHttp.open("POST", theUrl, true); // true for Asynchronous request
    xmlHttp.send(params);
}

export function httpGetAsync(theUrl,callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        xmlHttp.open("GET", theUrl, true); // true for Asynchronous request
        xmlHttp.send(null);
    }
}