colors=""
function preload() {

}

function setup() {
  canvas=createCanvas(500,400);
  canvas.position (100,200);
  video=createCapture(VIDEO);
  video.hide();
}
 
function draw() {
image(video,0,0,500,400);
tint(color)
}
function take_snapshot() {
    save("myphoto.png")
}
function applyfilter() {
    colors=document.getElementById("color").value
}