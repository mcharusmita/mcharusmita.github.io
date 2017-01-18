window.onload = pleasesmile;
//form3		
function $(id){
	return document.getElementById(id);}
function pleasesmile() {
	$('frm6').onsubmit=red;
	}
function red() {
	if($('passwd6').value == "")
	{
		alert("Please FILL in your password");
		$('passwd6').focus();
		return false;}
		return true;
	}