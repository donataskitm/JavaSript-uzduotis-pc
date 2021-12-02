function changeTextAreaHeight(evt) {
	var elem = document.getElementById('textArea');
	elem.rows = evt.target.id;
	let clientH = elem.clientHeight;
	let scrollH = elem.scrollHeight;
	elem.style.overflow = 'hidden';
	
	if (clientH < scrollH){
		elem.rows = evt.currentTarget.myParamMax;
		elem.style.overflow = '';		
	} else {
		let clientH1 = elem.clientHeight;
		let scrollH1 = elem.scrollHeight;
		
		if (clientH1 < scrollH1){
			elem.rows = evt.currentTarget.myParamMin;
		}
	}
}
