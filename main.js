function setup(){
video=createCapture(VIDEO);
video.size(550, 500);

canvas=createCanvas(500,600);
canvas.center();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Model is Loaded YAY");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
function preload(){

}
function draw(){

}