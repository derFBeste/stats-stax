var request=require("request");


//TODO write middleware that parses data from url below to json, write that json to mongodb

var input = getGameInfo();
console.log("input :" + input);
var jsonData = xmlToJson(input);
console.log("json :" + jsonData);

function getGameInfo(){
    var data;
    var date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;

    request.get('http://gd2.mlb.com/components/game/mlb/year_2016/month_0'+ month +'/day_' + day +'/playertracker.xml',function(error,response,body){
                   if(error){
                         console.log(error);
                   }else{
                       data = response;

                 }
    });
    return data;
}

// Changes XML to JSON
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
