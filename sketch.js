var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(40,347,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,380,400,10);
  ground.velocityX=-4;
  

  
}


function draw() {
  background("lightblue");
  
  
  ground.x = ground.width/2;    
  
  if(keyDown("space")&& monkey.y>300){
    monkey.velocityY=-6;
  }
  monkey.velocityY = monkey.velocityY + 0.3 ;
  
  monkey.collide(ground)
  
  food();
  
  obstacles();
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  var survivaltime=0
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime= "+ survivaltime ,100,50)
  
  drawSprites()
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(380,random(220,300),50,50)
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=100;
    FoodGroup.add(banana)
  }
}

function obstacles(){
  if(frameCount%300===0){
    stone = createSprite(380,357,50,50)
    stone.addImage(obstacleImage);
    stone.scale=0.1;
    stone.velocityX=-4
    stone.lifetime=100;
    obstacleGroup.add(stone)
  }
  
  
}





