
let y = 0;
let x1 ;
let y1 ;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 0, 0, 5);

  x1 = innerWidth / 2 ;
  y1 = innerHeight;
  frameRate(60);
  
}

function draw() {
  
  // Draw a circle
  stroke(25, 200, random(0, 250), random(0, 50));
  fill(250, random(0, 250), random(0, 250), random(0, 30));
  ellipse(x1, y1, 240, 240);
  
  // Jiggling randomly on the horizontal axis
  


  x1 = x1 + random(-40, 40) ;
  // Moving up at a constant speed
  y1 = y1 - 1;
  
  // Reset to the bottom
  if (y1 < 0) {
    y1 = innerHeight;
  }

}



