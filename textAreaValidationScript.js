
function isValid(minValue,  maxValue) {
	if (Number(minValue) >= Number(maxValue) || minValue == '' || maxValue == '' || Number(minValue) <= 0) {
		alert('Please correct numbers');
		return false;
	} else {
		return true;
	}
}