window.onload = pleasesmile;
//form3		
function $(id){
	return document.getElementById(id);}
function pleasesmile() {
	$('frm3').onsubmit=red;
	}
function red() {
	if($('passwd3').value == "")
	{
		alert("Please FILL in your password");
		$('passwd3').focus();
		return false;}
		return true;
	}
