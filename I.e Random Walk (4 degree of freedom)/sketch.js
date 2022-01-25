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
  let randomRange = [0,1,2,3]
  const [up, down, left, right] =  randomRange

  let direction = random(randomRange)

  switch(direction){
    case up: this.y--
    break;
    case down: this.y++
    break;
    case left: this.x--
    break;
    case right: this.x++
    break;
  }

}

let w;

function setup() {
  createCanvas(640, 380);
  background(220);
  w = new Walker
}

function draw() {

  w.step()
  w.display()
}
