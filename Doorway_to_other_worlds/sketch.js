function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(137, 236, 240);
  
  //sun
  noStroke();
  fill(220, 220, 0);
  ellipse(0,0,200, 200);
  
  
  //glow
  fill(220, 220, 0, 200);
  ellipse(width/2,height/2,500, 500);
  
  //grass
  fill(7, 145, 26);
  rectMode(CENTER);
  stroke(7, 145, 26);
  rect(width/2, height, windowWidth, 375);
  
  
  //doorway
  fill(168, 7, 66);
  stroke(102, 4, 40);
  strokeWeight(5);
  rect(width/2, height/2, 200, 350);
  
  //doorknob
  fill(102, 4, 40);
  ellipseMode(CENTER);
  ellipse(width/2 - 75, height/2, 10, 10);
  
}