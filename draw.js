var scrollX = 0;
var scrollY = 0;

function onClick() {
  draw();
}

function draw() {
  var ptStr = document.getElementById("points").value;
  console.log(ptStr);
  const arr = ptStr.split(",");
  var points = [];
  for (var i = 0; i < arr.length - 1; i += 2) {
    points.push({x: Number(arr[i]) + scrollX, y: Number(arr[i+1]) + scrollY});
  }
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  if (points.length < 2) {
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (var i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
  
  ctx.strokeStyle = "#FF0000";
  ctx.beginPath();
  ctx.arc(points[0].x, points[0].y, 5, 0, 2 * Math.PI);
  ctx.stroke();
  
  ctx.strokeStyle = "#00FF00";
  ctx.beginPath();
  ctx.arc(points[1].x, points[1].y, 5, 0, 2 * Math.PI);
  ctx.stroke();
}

$(function() {
    console.log( "ready!" );
    setSize();
});

const fixCanvas = function(cnv, width, height) {
    var dpr = window.devicePixelRatio || 1;
    cnv.width = width * dpr;
    cnv.height = height * dpr;
    cnv.style.width = width + "px";
    cnv.style.height = height + "px";
    var ctx = cnv.getContext("2d");
    ctx.scale(dpr, dpr);
}

setSize = function() {
    var vport = document.getElementById("viewport");
    var rect = vport.getBoundingClientRect();
    var panel = document.getElementById("canvas");
    fixCanvas(panel, rect.width, rect.height);
}
