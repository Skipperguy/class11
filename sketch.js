
var trex ,trex_running;
var ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  


}

function setup(){
  createCanvas(600,200)
  
  //create a trex Sprite=(50,160,20,30)
 trex=createSprite(50,160,20,30)
 trex.addAnimation("running",trex_running)
 ground=createSprite(0,170,600,20)
}

function draw(){
  background("white")
  trex.collide(ground)
drawSprites()
}
