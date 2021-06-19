var hr,mn,sc;
var hrAngle,mnAngle,scAngle;


function setup() {
  createCanvas(400,400);
//we use angles in degrees
angleMode(DEGREES)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  //translation and rotation
  translate(200,200)
  rotate(-90)
  
  //calculating time using pre Defined function from p5.js
  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

  //drawing second hand
  push();
  //rotate Hand based on the angle calculated
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop();

  //drawing minute hand
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop();
  //drawing hour hand
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop();
stroke(255,0,255)
point(0,0)
  drawSprites();
  //drawing arcs
  strokeWeight(10);
  noFill();
  //second
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle)
  //minutes
  stroke(0,255,0)
  arc(0,0,280,280,mnAngle)
  //hour
  stroke(0,0,255)
  arc(0,0,260,260,0,hrAngle)

}