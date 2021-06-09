var nosex = 0;
var nosey = 0;

function preload(){
  mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(600, 400);
    posenet = ml5.poseNet(video, Modelloaded);
    posenet.on('pose', gotposes);
}

function Modelloaded(){}

function gotposes(results){
  if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x - 15;
    nosey = results[0].pose.nose.y - 15;
  }
}

function draw(){
    image(video, 0, 0, 600, 400);
    image(mustache, nosex, nosey, 40, 40);
}