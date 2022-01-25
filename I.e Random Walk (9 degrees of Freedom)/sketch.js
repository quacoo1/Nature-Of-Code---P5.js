function Walker(){
  this.x = width/2
  this.y = height/2
}

Walker.prototype.display = function(){
  strokeWeight(1)
  stroke(0)
  point(this.x, this.y)
}

Walker.prototype.step = function(){
  
  let directionX = random(-1,1)
  let directionY = random(-1,1)
  
  
  this.x += directionX
  this.y += directionY
  
  
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