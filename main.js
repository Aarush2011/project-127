song_1="";
song_2="";
function preload(){
song_1 = loadSound("Migraine.mp3");
song_2 = loadSound("Before I Die.mp3");
}

function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    Image(VIDEO,0,0,500,600);
}