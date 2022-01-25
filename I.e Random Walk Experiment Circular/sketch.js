/*
Create a random walker that has a tendency move in cirular pattern
*/

function Walker(){
  this.centerX = width/2
  this.centerY = height/2
  this.x = this.centerX
  this.y = this.centerY
  this.radius = 50
  this.angle = 0
}

Walker.prototype.display = function(){
  strokeWeight(2)
  stroke(0)
  point(this.x, this.y)
}

Walker.prototype.step = function(){
  
  let deltaRadius = random(-1,1)
  let deltaAngle = random(-0.05,0.05)
  

  this.radius += deltaRadius
  this.angle += deltaAngle
  
  this.x = this.centerX + this.radius * cos(this.angle);
  this.y = this.centerY + this.radius * sin(this.angle);
  

  
  
  
  
}

let w;

function setup() {
  createCanvas(400, 400);
  background(255);
  w = new Walker
}

function draw() {
  
  w.step()
  w.display()
}