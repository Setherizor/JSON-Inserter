URL = "./data.json";

var doRequest = function (callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', URL, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
var apply = function (value, obj, el) {
    if (value == "body") {
        eval("el.innerHTML = obj." + value);
    } else {
        if (eval("obj.style." + value) != undefined) {
            eval("el.style." + value + "= obj.style." + value);
        }
    }
}
var handleAttributes = function (obj, el) {
    if (obj.type == "html") {
        apply("body", obj, el);
        for (var i = 0; i < Object.keys(obj.style).length; i++) {
            var curr = Object.keys(obj.style)[i];
            apply(curr, obj, el);
        }
    } else {
        el.innerText = obj;
        return;
    }
}
var applyData = function (json) {
    var length = Object.keys(json).length;
    for (var i = 0; i < length; i++) {
        var currName = Object.keys(json)[i];
        var elements = document.getElementsByName(currName);
        if (elements[0] != undefined) {
            for (var j = 0; j < elements.length; j++) {
                handleAttributes(json[currName], elements[j])
            }
        }
    }
}
var getData = function () {
    doRequest(function (response) {
        var actual_JSON = JSON.parse(response);
        applyData(actual_JSON);
    });
}
getData();