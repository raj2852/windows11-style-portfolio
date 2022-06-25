/////////////////////////////////////////////function to open and close edge/////////////////////////////////////
function showedge(){
    var mousePosition;
    var offset = [0, 0];
    var div = document.getElementById("edge");
    var isDown = false;

    div.addEventListener(
      "mousedown",
      function (e) {
        isDown = true;
        offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
      },
      true
    );

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
        }
      },
      true
    );
    div.style.visibility = "visible";
}

function closeedge(){
    document.getElementById("edge").style.visibility = "hidden";
}


/////////////////////////////////////////functions to open and close pdf viewer//////////////////////////////////
function showresume(){
  var mousePosition;
  var offset = [0, 0];
  var div = document.getElementById("pdf");
  var isDown = false;

  div.addEventListener(
    "mousedown",
    function (e) {
      isDown = true;
      offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    },
    true
  );

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
      }
    },
    true
  );
  div.style.visibility = "visible";
}

function closeresume() {
  document.getElementById("pdf").style.visibility = "hidden";
}


////////////////////////////////////////functions to open and close file explorer////////////////////////////////
function showexplorer(){
  var mousePosition;
  var offset = [0, 0];
  var div = document.getElementById("explorer");
  var isDown = false;

  div.addEventListener(
    "mousedown",
    function (e) {
      isDown = true;
      offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    },
    true
  );

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
      }
    },
    true
  );
  div.style.visibility = "visible";
}

function closeexplorer(){
  document.getElementById("explorer").style.visibility = "hidden";
  closecerti();
}



///////////////////////////////////////////functions to open and close portfolio/////////////////////////////////
function showportfolio(){
  var mousePosition;
  var offset = [0, 0];
  var div = document.getElementById("profile");
  var isDown = false;

  div.addEventListener(
    "mousedown",
    function (e) {
      isDown = true;
      offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    },
    true
  );

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
      }
    },
    true
  );
  div.style.visibility = "visible";
}

function closeportfolio(){
  document.getElementById("profile").style.visibility = "hidden";
}



////////////////////////////////////////////open and close education window/////////////////////////////////////
function showedu(){
  var mousePosition;
  var offset = [0, 0];
  var div = document.getElementById("edu");
  var isDown = false;

  div.addEventListener(
    "mousedown",
    function (e) {
      isDown = true;
      offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    },
    true
  );

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
      }
    },
    true
  );
  div.style.visibility = "visible";
}

function closeedu(){
  document.getElementById("edu").style.visibility="hidden";
}



///////////////////////////////function to open and close certificate section////////////////////////////////////
function showcerti(){
  document.getElementById("files").style.visibility = "visible";
}

function closecerti(){
  document.getElementById("files").style.visibility = "hidden";
}


////////////////////////////function to open and close experience window/////////////////////////////////////////
function showexp(){
  var mousePosition;
  var offset = [0, 0];
  var div = document.getElementById("exp");
  var isDown = false;

  div.addEventListener(
    "mousedown",
    function (e) {
      isDown = true;
      offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    },
    true
  );

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
      }
    },
    true
  );
  div.style.visibility = "visible";
}

function closeexp(){
  document.getElementById("exp").style.visibility="hidden";
}


////////////////////////////////////////function to open and close pic viewer////////////////////////////////////
function showpic(){
  var mousePosition;
  var offset = [0, 0];
  var div = document.getElementById("pic");
  var isDown = false;

  div.addEventListener(
    "mousedown",
    function (e) {
      isDown = true;
      offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    },
    true
  );

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
      }
    },
    true
  );
  div.style.visibility = "visible";
}

function closepic(){
  document.getElementById("pic").style.visibility="hidden";
}