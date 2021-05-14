Video = "";
objects = [];
status = "";

function preload(){
Video = createVideo("video.mp4");
}

function setup(){
canvas = createCanvas(500, 350);
canvas.center();
Video.hide();
}

function draw(){
image(Video, 0, 0, 500, 500);
if(status !=  ""){
OBJ_D.detect(Video, gopose);
for(i=0;i < objects.length;i++){
r = random(255);
g = random(255);
b = random(255);
fill(r, g, b);
document.getElementById("S").innerHTML = "Status : detecting objects";
document.getElementById("OH").innerHTML = "Number of objects detected : "+objects.length;
percent = floor(objects[i].confidence * 100);
text(objects[i].label + percent, objects[i].x + 10, objects[i].y + 10);
noFill()
stroke(r, g, b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}

function start(){
OBJ_D = ml5.objectDetector("cocossd", model_loaded);
document.getElementById("S").innerHTML = "Status : detecting objects";
}

function model_loaded(){
console.log("Model Loaded!");
status = "true";
Video.loop();
Video.speed(1);
Video.volume(1);
}

function gopose(error,results){
if(error){
console.log("error");
}
else{
console.log(results);
objects = results;
}
}