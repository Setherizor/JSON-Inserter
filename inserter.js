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
var checkVar = function (value, obj, el) {
    if (value == "body") {
        eval("el.innerHTML = obj." + value);
    } else {
        if (eval("obj." + value) != undefined) {
            eval("el.style." + value + "= obj." + value);
        }
    }
}
var handleAttributes = function (obj, el) {
    if (obj.type == "html") {
        // Add function to get all the variables avaliable
        checkVar("body", obj, el);
        checkVar("backgroundColor", obj, el);
    } else {
        el.innerText = obj;
        return;
    }
}
var replace = function (data) {
    var length = Object.keys(data).length;
    for (var i = 0; i < length; i++) {
        var currName = Object.keys(data)[i];
        var elements = document.getElementsByName(currName);
        if (elements[0] != undefined) {
            for (var j = 0; j < elements.length; j++) {
                handleAttributes(data[currName], elements[j])
            }
        }
    }
}
var getData = function () {
    doRequest(function (response) {
        var actual_JSON = JSON.parse(response);
        //console.log(actual_JSON);
        replace(actual_JSON);
    });
}
getData();