var count = 0;
		document.getElementById('toggle').onclick = function(){
			document.getElementById('header').style.transform = "translateX(-300px)";
			count++;
			if(count%2==0){
			document.getElementById('header').style.transform = "translateX(0px)"
		}
		}

document.getElementById('webbtn').onclick = function(){
	document.getElementById('webimg').style.display = "block";
	document.getElementById('cloudimg').style.display = "none";
	document.getElementById('iotimg').style.display="none";
	document.getElementById('designimg').style.display = "none";
	document.getElementById('codingimg').style.display
	="none";
}

document.getElementById('cloudbtn').onclick = function(){
	document.getElementById('webimg').style.display = "none";
	document.getElementById('cloudimg').style.display = "block";
	document.getElementById('iotimg').style.display="none";
	document.getElementById('designimg').style.display = "none";
	document.getElementById('codingimg').style.display
	="none";
}

document.getElementById('iotbtn').onclick = function(){
	document.getElementById('webimg').style.display = "none";
	document.getElementById('cloudimg').style.display = "none";
	document.getElementById('iotimg').style.display="block";
	document.getElementById('designimg').style.display = "none";
	document.getElementById('codingimg').style.display
	="none";
}

document.getElementById('designbtn').onclick = function(){
	document.getElementById('webimg').style.display = "none";
	document.getElementById('cloudimg').style.display = "none";
	document.getElementById('iotimg').style.display="none";
	document.getElementById('designimg').style.display = "block";
	document.getElementById('codingimg').style.display
	="none";
}

document.getElementById('codingbtn').onclick = function(){
	document.getElementById('webimg').style.display = "none";
	document.getElementById('cloudimg').style.display = "none";
	document.getElementById('iotimg').style.display="none";
	document.getElementById('designimg').style.display = "none";
	document.getElementById('codingimg').style.display
	="block";
}

