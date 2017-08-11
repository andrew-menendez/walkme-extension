/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
    // var node = document.getElementsByTagName(tag)[0];
    // var script = document.createElement('script');
    // script.setAttribute('type', 'text/javascript');
    // script.setAttribute('src', file_path);
    // node.appendChild(script);

    console.log(document);

    element = document.getElementById('mt_script');
    console.log(element);
    
    var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.async = true;
	script.setAttribute('src', file_path);

	element.parentNode.insertBefore(script, element);
	
}
injectScript(chrome.extension.getURL('content.js'), 'body');



///inject here

//should trigger when the icon is clicked
// chrome.browserAction.onClicked.addListener(function(tab) {
// 	//self executing function
// 	//wm(tab);
	
	
// });