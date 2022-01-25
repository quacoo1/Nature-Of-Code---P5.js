/*
Create a random walker that has a tendency to move down and to the right.
*/

function Walker(){
  this.x = width/2
  this.y = height/2
}

Walker.prototype.display = function(){
  strokeWeight(2)
  stroke(0)
  point(this.x, this.y)
}

Walker.prototype.step = function(){
  
  let directionX = random(-1,1.25)
  let directionY = random(-1,1.25)
  
  
  this.x = constrain(this.x + directionX, 0, width - 1)
  this.y = constrain(this.y + directionY, 0, height - 1)
  
  
  
  
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