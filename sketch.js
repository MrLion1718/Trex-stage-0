
var trex ,trex_running, edges, ground, groundimage;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
 trex=createSprite(40,180,20,20)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
edges=createEdgeSprites();
ground=createSprite(200,185,400,10)
ground.velocityX=-4;
ground.x=ground.width/2
ground.addImage(groundimage)
}

function draw(){
  background(220)
  if(keyDown ("space")){
trex.velocityY=-10 
  }
  trex.velocityY=trex.velocityY+0.8
  if(ground.x<35){
    ground.x=ground.width/2
  }
  trex.collide(ground)
drawSprites();
}
  