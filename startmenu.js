///////////////////////////////script to open and close start menu//////////////////////////////
let start = document.getElementsByClassName("icon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

/*fetch current date and time of location*/
// var h = new Date().getHours();
// var m = new Date().getMinutes();
// var time = h +":" +m;
// var d = new Date().getDate();
// var month = new Date().getMonth();
// var year = new Date().getFullYear();
// var date = d+"-"+month+"-"+year;
// document.getElementById("date").innerHTML=date;
// document.getElementById("time").innerHTML = time;

function updateTime() {
  var currentTime = new Date().toLocaleTimeString();
  var currentDate = new Date().toLocaleDateString();
  document.getElementById("date").innerHTML = currentDate;
  document.getElementById("time").innerHTML = currentTime;
}
setInterval(updateTime, 1000);
