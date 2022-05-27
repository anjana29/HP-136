Status="";
object="";
video="";
function setup(){
    canvas=createCanvas(480,320);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,320);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    object=document.getElementById("objectname").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    Status=true;
}
function draw(){
    image(video,0,0,480,320);
}