function getStorage(){

	return "apples";
}

function temp(){
	window.alert("hello!")
}



function hello() {
  chrome.tabs.executeScript({
    file: '/storage/alert.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);