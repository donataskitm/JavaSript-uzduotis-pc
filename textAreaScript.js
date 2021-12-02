const btn = document.getElementById('btnReadValue');
btn.addEventListener("click", createTextArea);

function createTextArea(){
	if (document.getElementById('textArea')) {
		document.getElementById('textArea').remove();
	}
	
	let minValue = document.getElementById('txtMin').value;
	let maxValue = document.getElementById('txtMax').value;
	
	if (isValid(minValue,  maxValue)) {
		const textArea = document.createElement("TEXTAREA");
		document.getElementById("textAreaBlock").appendChild(textArea);
		textArea.setAttribute('id', 'textArea');
		textArea.rows = minValue;
		textArea.myParamMin = minValue;
		textArea.myParamMax = maxValue;
		textArea.addEventListener("keyup", changeTextAreaHeight);
	}
}