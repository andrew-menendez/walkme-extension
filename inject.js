function wm(_tab) {


        chrome.tabs.executeScript(_tab.id, { file: "/scripts/walkme.js" }, function() {
            // console.log('executed walkme.js');
            alert('executed walkme.js')
        });

}



///inject here

//should trigger when the icon is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
	//self executing function
	wm(tab);
	
	
});