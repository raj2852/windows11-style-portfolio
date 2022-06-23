var mousePosition;
var offset = [0, 0];
var offset1 = [50, 50];
var div = document.getElementById("edge");
var div1 = document.getElementById("chrome");
var isDown = false;

div.addEventListener(
  "mousedown",
  function (e) {
    isDown = true;
    offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
  },
  true
);

// div1.addEventListener(
//   "mousedown",
//   function (e) {
//     isDown = true;
//     offset1 = [div1.offsetLeft - e.clientX, div1.offsetTop - e.clientY];
//   },
//   true
// );

document.addEventListener(
  "mouseup",
  function () {
    isDown = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      div.style.left = mousePosition.x + offset[0] + "px";
      div.style.top = mousePosition.y + offset[1] + "px";
      // div1.style.left = mousePosition.x + offset[0] + "px";
      // div1.style.top = mousePosition.y + offset[1] + "px";
    }
  },
  true
);

function showedge(){
    div.style.visibility = "visible";
}

function closeedge(){
    div.style.visibility="hidden";
}

function showchrome() {
  div1.style.visibility = "visible";
}

function closechrome() {
  div1.style.visibility = "hidden";
}

function showgithub(){
  if(div.style.visibility=="visible" && div1.style.visibility=="visible"){
    alert("Please choose one browser window");
  } 
  if(div.style.visibility=="visible" && div1.style.visibility=="hidden"){
    document.getElementById("bing");
  }
  if(div.style.visibility=="hidden" && div1.style.visibility=="visible"){
    alert("Its chrome browser");
  }
}