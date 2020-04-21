// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = " ";
let answer = " ";
let button = ""; 
let playing = false
let A = "";
let fr = -10;
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/G1Twq8Sgp/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  apple = loadImage('apple.png');
  alligator = loadImage('alligator.png');
  A = loadImage('A.png');
}

const flip = true

function setup() {
  color(100);
//   createCanvas(1000, 600);
  // Create the video
    createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  frameRate(fr);
  // STEP 2: Start classifying
  classifyVideo();
video.size(640, 480);
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}



function draw() {
  background(100);

  // Draw the video
  image(video, 0, 0);
  // STEP 4: Draw the label
  // textSize(16);
  // textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train

  if (label == 'A') {

    myFunction()
    // image(apple, 10, 10, 200, 240)
    image(A, 130, 20, 350, 500)
    // image(alligator, 330, 200, 370, 220)
    fr = -10;
    button.show();
    button.mousePressed(changeB);
} 
else if (label == "nothing") button.hide();
  {}
  
  


  // Draw the emoji
  textSize(20);
  text(answer, width / 2, height / 2);


}
function changeB() {
link("sketchb.js"); }

function myFunction() {
  one = fill(255, 204, 100);
}
// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
