

/*
let xhr = new XMLHttpRequest();
xhr.open('GET', 'prospect.html',true);
xhr.send();
xhr.onload = function() {
	if(xhr.status===200) {
		document.getElementById('content').innerHTML=xhr.responseText;
	}
};


let xhr = new XMLHttpRequest();
xhr.open('GET', 'convert.html',true);
xhr.send();
xhr.onload = function() {
	if(xhr.status===200) {
		document.getElementById('content').innerHTML=xhr.responseText;
	}
};*/

let xhr = new XMLHttpRequest();
$(document).ready(function() {
xhr.onload = function() {
	xhr= document.getElementById('content');
	$('xhr').innerHTML=xhr.response;
}   
   xhr.open('GET','prospect.html',true);
	xhr.send();
	
});


$(document).ready(function() {
xhr.onload = function() {
	xhr= document.getElementById('content');
	$('xhr').innerHTML=xhr.response;
}   
   xhr.open('GET','convert.html',true);
	xhr.send();
	
});

$(document).ready(function() {
	xhr.onload = function() {
		xhr= document.getElementById('content');
		$('xhr').innerHTML=xhr.response;
	}   
	   xhr.open('GET','retain.html',true);
		xhr.send();
		
	});









		
	





	
		

	

