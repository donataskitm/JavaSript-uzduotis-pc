
function checking(){
	var elem = document.getElementById('myTextarea');
	elem.rows = 4;
	clientH = elem.clientHeight;
	scrollH = elem.scrollHeight;
	elem.style.overflow = 'hidden';
	if (clientH < scrollH){
		elem.rows = 8;
		elem.style.overflow = '';		
	} 	else {
		clientH1 = elem.clientHeight;
		scrollH1 = elem.scrollHeight;
		
		if (clientH1<scrollH1){
			elem.rows = 4;
		}
	}
}
