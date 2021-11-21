
function checking(){
	var elem = document.getElementById('myTextarea');
	elem.rows = 4;
	clientH = elem.clientHeight;
	scrollH = elem.scrollHeight;
	
	if (clientH < scrollH){
		elem.rows = 8;	
	} 	else {
		clientH1 = elem.clientHeight;
		scrollH1 = elem.scrollHeight;
		
		if (clientH1<scrollH1){
			elem.rows = 4;
		}
	}
}
