// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
// For displaying the label
let B = "";
let D = "";
let E = "";
let fingers;
// The classifier


// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  apple = loadImage('apple.png');
  alligator = loadImage('alligator.png');
  A = loadImage('A.png');
  B = loadImage('B.png');
  C = loadImage('C.png');
  D = loadImage('D.png');
  E = loadImage('E.png');
}


function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  frameRate(fr);

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}



function draw() {
  background(0);

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


  } else if (label == 'B') {
    image(B, 130, 20, 350, 500)
    fr = -10;
  } else if (label == 'C') {
    image(C, 130, 20, 350, 500)
    fr = -10;
  } else if (label == 'D') {
    image(D, 130, 20, 350, 500)
    fr = -10;
  } else if (label == 'E') {
    image(E, 130, 20, 350, 500)
    fr = -10;
  } else if (label == 'nothing') {
    answer = ' '
  }



  // Draw the emoji
  textSize(20);
  text(answer, width / 2, height / 2);


}

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