var pluginExplain = function(){

	console.dir(window);
	//debugger;
	var customSettings = Object.keys(window._walkMe.getSiteConfig().Custom);
	console.log(customSettings);
	var documentationURL = "https://delivery.walkmedev.com/plugins/";
	var displayString = "This Environment has the following plugins deployed: \n";
	var pluginDict = {
		"SearchEndedDeployable":{
			"plugin": "wm-plugin-search-ended-deployable",
			"desc": "Customizes No Search Results screen so we can add the Contact support link"
		},
		"categorizedSearchResults":{
			"plugin":"wm-plugin-categorized-search-results",
			"desc":"Inserts Category items in the Search Results page"
		},
		"randomMenuPosition":{
			"plugin":"wm-plugin-random-menu-position",
			"desc":"Moves the Menu over to fall below the “Help” dropdown on the site"
		},
		"mandatorySurveyQuestions":{
			"plugin":"n/a",
			"desc":"makes some survey questions mandatory"
		},
		"someThingElse":{
			"plugin":"whatever",
			"desc":"example"
		}
	};
	
	customSettings.forEach(function(setting){
		var pluginName= pluginDict[setting] ? pluginDict[setting].plugin : setting;
		var pluginDesc = pluginDict[setting] ? pluginDict[setting].desc : "does something unknown";
		var pluginString = `${pluginName} , which ${pluginDesc}. \n`;
		displayString=displayString.concat(pluginString);
	})
	console.log(displayString);

	return displayString;
}


var plugins = pluginExplain();

alert(plugins);

