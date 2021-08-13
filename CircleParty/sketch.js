function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(25);
  stroke(255);
  noFill();
  background(0,0,0);
  
}

function draw() {
  var rad = random(10,100);
  ellipse(mouseX, mouseY,rad, rad);
}

function mousePressed(){
  var Colors = [color('brown'), color('chocolate'), color ('crimson'), color('darkgoldenrod'), color('gold')];
  noStroke();
  fill(Colors[int(random(0,4))]);
  frameRate(50);
}

function mouseReleased(){
  stroke(255);
  noFill();
  frameRate(25);
}

