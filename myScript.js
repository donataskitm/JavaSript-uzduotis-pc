const btn = document.getElementById('btnReadV');
btn.addEventListener("click", createTextArea);

function createTextArea(){
	if (document.getElementById('myTextarea')) {
		document.getElementById('myTextarea').remove();
	}
	
	let minValue = document.getElementById('txtMin').value
	let maxValue = document.getElementById('txtMax').value
	
	if (validation(minValue,  maxValue)) {
		const txtArea = document.createElement("TEXTAREA");
		document.getElementById("Area").appendChild(txtArea);
		txtArea.setAttribute('id', 'myTextarea');
		txtArea.rows = minValue;
		txtArea.myParamMin = minValue;
		txtArea.myParamMax = maxValue;
		txtArea.addEventListener("keyup", checking);
	}
}

function validation(minValue,  maxValue) {
	if (Number(minValue) >= Number(maxValue) || minValue == '' || maxValue == '' || Number(minValue) <= 0) {
		alert('Please correct numbers');
		return false;
	} else {
		return true;
	}
}

function checking(evt) {
	var elem = document.getElementById('myTextarea');
	elem.rows = evt.currentTarget.myParamMin;
	clientH = elem.clientHeight;
	scrollH = elem.scrollHeight;
	elem.style.overflow = 'hidden';
	
	if (clientH < scrollH){
		elem.rows = evt.currentTarget.myParamMax;
		elem.style.overflow = '';		
	} else {
		clientH1 = elem.clientHeight;
		scrollH1 = elem.scrollHeight;
		
		if (clientH1 < scrollH1){
			elem.rows = evt.currentTarget.myParamMin;
		}
	}
}
