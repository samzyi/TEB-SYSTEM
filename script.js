var lineLength = 0;
var line = '';
var y = 0;
var x = 1;
var htmlLine = "Line1";
var typecomplete = 1;
var checktypedone = setInterval(checktype, 600)
var redorandom;
var timer;
var precision = 100
var randomnum = Math.floor(Math.random() * (100 * precision - 96 * precision) + 96 * precision) / (1 * precision);
var randomnum2 = Math.floor(Math.random() * 4000) + 1000;


$(document).ready(function () {
  line1 = "Welcome to the TEB System"
  setInterval('cursorAnimation()', 600);
  type();
});

function type() {
  checktypedone;
  console.log("1.line = " + line);
  console.log("2. line1 = " + line1);
  lineLength = line1.length;
  console.log("3. line1 length = " + line1.length);
  console.log("3a. line length = " + line.length)
  var part = line1.substring(y, x);
  console.log("4. part = " + part);
  line = line + part;
  console.log("5. line = " + line);
  document.getElementById(htmlLine).innerHTML = line;
  y++
  x++
  if (lineLength > line.length) {
    //setTimeout('type()', 50);
    setTimeout('type()', 50);
  } else {
    lineLength = 0;
    line = ''
    console.log("done")
    if (line1 == "Welcome to the TEB System") {
      typecomplete = 2;
      setTimeout(function () { document.getElementById("cursor1").innerHTML = ''; }, 1500);
      setTimeout(function () { document.getElementById("cursor2").innerHTML = '_'; }, 1500);
    } else if (line1 == line2) {
      console.log("good shit happened")
      setTimeout(function () { document.getElementById("cursor2").innerHTML = ''; }, 1500);
      setTimeout(function () { document.getElementById("cursor3").innerHTML = '_'; }, 1500);
      redorandom = setInterval(function () { document.getElementById("Line2").innerHTML = "Life support at " + Math.floor(Math.random() * (100 * precision - 96 * precision) + 96 * precision) / (1 * precision) + "%"; }, randomnum2)
      typecomplete = 3;
    } else if (line1 == line3) {
      timer = setInterval(function () { document.getElementById("Line3").innerHTML = "Next Transport arriving in " + time; }, 50)
      setTimeout(function () { document.getElementById("cursor3").innerHTML = ''; }, 1500);
      setTimeout(function () { document.getElementById("cursor4").innerHTML = '_'; }, 1500);
      typecomplete = 4;
    } else if (line1 == line4) {
      setTimeout(function () { document.getElementById("cursor4").innerHTML = ''; }, 1500);
      setTimeout(function () { document.getElementById("option1").innerHTML = "[Check Transports]"; }, 2000)
      setTimeout(function () { document.getElementById("option2").innerHTML = "[Check Agriculture]"; }, 2500)
      setTimeout(function () { document.getElementById("option3").innerHTML = "[Check Lifeforms]"; }, 3000)
      $("#option1").mouseover(function () {
        $("#option1").css("font-weight", "bold");
      });
      $("#option1").mouseout(function () {
        $("#option1").css("font-weight", "normal");
      });
      $("#option2").mouseover(function () {
        $("#option2").css("font-weight", "bold");
      });
      $("#option2").mouseout(function () {
        $("#option2").css("font-weight", "normal");
      });
      $("#option3").mouseover(function () {
        $("#option3").css("font-weight", "bold");
      });
      $("#option3").mouseout(function () {
        $("#option3").css("font-weight", "normal");
      });
      $("#option1").mouseup(function () {
        checkTransports();
      });
      $("#option2").mouseup(function () {
        checkAgriculture();
      });
      $("#option3").mouseup(function () {
        checkLifeforms();
      });
    } else if (line1 == line5) {
      typecomplete = 6;
      setTimeout(function () { document.getElementById("cursor1").innerHTML = ''; }, 1500);
      setTimeout(function () { document.getElementById("cursor2").innerHTML = '_'; }, 1500);
    } else if (line1 == line6) {
      console.log("more good shit happened")
      setTimeout(function () { document.getElementById("cursor2").innerHTML = ''; }, 1500);
      setTimeout(function () { document.getElementById("cursor3").innerHTML = '_'; }, 1500);
      redorandom = setInterval(function () { document.getElementById("Line2").innerHTML = "Life support at " + Math.floor(Math.random() * (100 * precision - 96 * precision) + 96 * precision) / (1 * precision) + "%"; }, randomnum2)
      typecomplete = 7;
    } else if (line1 == line7) {
      timer = setInterval(function () { document.getElementById("Line3").innerHTML = "Next Transport arriving in " + time; }, 50)
      setTimeout(function () { document.getElementById("cursor3").innerHTML = ''; }, 1500);
      setTimeout(function () { document.getElementById("cursor4").innerHTML = '_'; }, 1500);
    } else if (line1 == line8) {
      setTimeout(function () { document.getElementById("cursor4").innerHTML = ''; }, 1500);
    }
  }
}


function checkTransports() {
  document.getElementById("Line1").innerHTML = ''
  document.getElementById("Line2").innerHTML = ''
  document.getElementById("Line3").innerHTML = ''
  document.getElementById("Line4").innerHTML = ''
  document.getElementById("option1").innerHTML = ''
  document.getElementById("option2").innerHTML = ''
  document.getElementById("option3").innerHTML = ''
  document.getElementById("cursor1").innerHTML = '_'
  clearInterval(redorandom);
  clearInterval(timer);
  typecomplete = 1;
  line1 = "You are now viewing the transports";
  line5 = line1
  htmlLine = "Line1";
  y = 0;
  x = 1;
  setTimeout(type, 2000);

}

function checkAgriculture() {
  document.getElementById("Line1").innerHTML = ''
  document.getElementById("Line2").innerHTML = ''
  document.getElementById("Line3").innerHTML = ''
  document.getElementById("Line4").innerHTML = ''
  document.getElementById("option1").innerHTML = ''
  document.getElementById("option2").innerHTML = ''
  document.getElementById("option3").innerHTML = ''
  clearInterval(redorandom);
  clearInterval(timer);
}

function checkLifeforms() {
  document.getElementById("Line1").innerHTML = ''
  document.getElementById("Line2").innerHTML = ''
  document.getElementById("Line3").innerHTML = ''
  document.getElementById("Line4").innerHTML = ''
  document.getElementById("option1").innerHTML = ''
  document.getElementById("option2").innerHTML = ''
  document.getElementById("option3").innerHTML = ''
  clearInterval(redorandom);
  clearInterval(timer);
}


//cursor, nextlines, timer, checktype

function cursorAnimation() {
  $('.cursor').animate({
    opacity: 0
  }, 400, 'swing').animate({
    opacity: 1
  }, 400, 'swing');
}

function nextLine() {
  typecomplete = 1;
  line1 = "Life support at " + randomnum + "%";
  line2 = line1
  htmlLine = "Line2";
  y = 0;
  x = 1;
  setTimeout(type, 2000);

}

function nextLine2() {
  typecomplete = 1;
  line1 = "Next Transport arriving in " + time;
  line3 = line1
  htmlLine = "Line3";
  y = 0;
  x = 1;
  setTimeout(type, 2000);
}

function nextLine3() {
  typecomplete = 1;
  line1 = "What would you like to accomplish?"
  line4 = line1
  htmlLine = "Line4";
  y = 0;
  x = 1;
  setTimeout(type, 2000);
}

function nextLinea() {
  typecomplete = 1;
  line1 = "Life support at " + randomnum + "%";
  line6 = line1
  htmlLine = "Line2";
  y = 0;
  x = 1;
  setTimeout(type, 2000);

}

function nextLine2a() {
  typecomplete = 1;
  line1 = "Next Transport arriving in " + time;
  line7 = line1
  htmlLine = "Line3";
  y = 0;
  x = 1;
  setTimeout(type, 2000);
}

function nextLine3a() {
  typecomplete = 1;
  line1 = "What are you here to do"
  line8 = line1
  htmlLine = "Line4";
  y = 0;
  x = 1;
  setTimeout(type, 2000);
}




(function () {     //time
  var start = new Date;
  start.setHours(17, 30, 0);

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tick() {
    var now = new Date;
    if (now > start) { // too late, go to tomorrow
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    time =
      hh + ":" + mm + ":" + ss;
    setTimeout(tick, 1000);
  }

  document.addEventListener('DOMContentLoaded', tick);
})();

function checktype() {
  if (typecomplete == 2) {
    nextLine();
  } else if (typecomplete == 3) {
    nextLine2();
  } else if (typecomplete == 4) {
    nextLine3();
  } else if (typecomplete == 6) {
    nextLinea();
  } else if (typecomplete == 7) {
    nextLine2a();
  }
}
