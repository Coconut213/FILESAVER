
function setup() {
  createCanvas(400,400);
  var box = createSprite(100,100,25,25)
  box.shapeColor = "red"
}


function draw() {
  background("yellow");
  drawSprites()
  

}
function keyPressed(){
  if(keyCode("right"))
  box.position.x = box.position.x + 1
}



