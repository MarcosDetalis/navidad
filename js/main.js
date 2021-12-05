var h1 = document.getElementById('H1');
var pie = document.getElementById('pie');
var au = document.getElementById("audio");
var muerdago = document.getElementById("muerdago");
var bolaNavidad = document.getElementById('bolaNavidad');
var celular;
if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)) {
  celular = true;
} else {
  celular = false;
  document.getElementById('particles-js').style.visibility = "visible";
  h1.style.visibility = "visible";
  bolaNavidad.style.visibility = "hidden";
  pie.style.visibility = "hidden";
}
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", motion, false);
  window.addEventListener("devicemotion", orientacionCambiada, false);
}
function orientacionCambiada() {

  var CambiaHV = (window.orientation);
  if (CambiaHV == 90 || CambiaHV == -90) {
    bolaNavidad.style.visibility = "hidden";

    pie.style.visibility = "hidden";
  } else if (celular == true) {

    bolaNavidad.style.visibility = "visible";

    pie.style.visibility = "visible";
  }
}
function motion(event) {
  var AceleR = event.accelerationIncludingGravity.x;

  if (AceleR > 12) {
    au.play();

    document.getElementById('particles-js').style.visibility = "visible";
    var num = Math.floor((Math.random() * 5) + 1);
    bolaNavidad.style.backgroundImage = `url(img/${num}.jpg)`;
    var besho = Math.floor((Math.random() * 19) + 1);
     if(besho == 4 || besho == 10){
        muerdago.style.visibility="visible";
     }

  }
}

