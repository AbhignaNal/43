var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200, 200);
  rotate(-90); 
  hr = hour();
  mn = minute();
  sc = second();
  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255, 100, 0);
  strokeWeight(5);
  line(0, 0, 200, 0);
  pop();  

  push();
  rotate(hrAngle);
  stroke(255, 100, 200);
  strokeWeight(5);
  line(0, 0, 250, 0);
  pop();

  stroke(255, 0, 255);
  point(0, 0);

  strokeWeight(10);
  noFill()
  stroke(0, 0, 255);
  arc(0, 0, 300, 300, 0, scAngle);

  strokeWeight(10);
  stroke(0, 255, 0);
  arc(0, 0, 400, 400, 0, mnAngle);

  stroke(0, 255, 200)
  arc(0, 0, 500, 500, 0, hrAngle);
  drawSprites();
}