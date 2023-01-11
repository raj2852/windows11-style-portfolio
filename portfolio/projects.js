document.getElementById('web').onclick = function(){
    document.getElementById('webcarousel').style.visibility = "visible";
    document.getElementById('iotcarousel').style.visibility = "hidden";
	document.getElementById('photocarousel').style.visibility = "hidden";
}

document.getElementById('iot').onclick = function(){
    document.getElementById('webcarousel').style.visibility = "hidden";
    document.getElementById('iotcarousel').style.visibility = "visible";
	document.getElementById('photocarousel').style.visibility = "hidden";
}

document.getElementById('photo').onclick = function(){
	document.getElementById('webcarousel').style.visibility = "hidden";
	document.getElementById('iotcarousel').style.visibility = "hidden";
	document.getElementById('photocarousel').style.visibility = "visible";
}