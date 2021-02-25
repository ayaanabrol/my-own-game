const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var basket ;
var score = 0;
var engine;
var world;
var backgroundimg;
var ball1Image,ball2Image,ball3Image,ball4Image,ball5Image,ball6Image;
var basket1,basket2,basket3,basket4,basket5,basket6;
var gameover,
var restart;
var gameoverImage;
var restartImage;






function preload(){
  //ball1Image = loadImage("baseball.gif");
  //ball2Image = loadImage("volleyball.gif");
  //ball3Image = loadImage("bowlinball.gif");
  //ball4Image = loadImage("golfball.gif");
  //ball5Image = loadImage("tennisball.gif");
  //ball6Image = loadImage("basketball.gif");
  //backgroundimg = loadImage("Imported piskel.gif");
  basket1Image = loadImage("");
  basket2Image = loadImage("");
  basket3Image = loadImage("");
  basket4Image = loadImage("");
  basket5Image = loadImage("");
  basket6Image = loadImage("");
  restartImage = loadImage("");
  gameoverImage = loadImage("");




}





function setup() {
  engine = Engine.create();
    world = engine.world;
    
  createCanvas(800,400);
background = createSprite(600,300);
background.addImage ("background",backgroundimg)
gameover = createSprite(400,200,50,50);
gameover.addImage("");
gameover.visible = false;

restart = createSprite(400,350,50,50);
restart.addImage("");
restart.visible = false;

}

function draw() {
  background(255,255,255); 
 // var scene = createSprite(200,200,400,400);
 // b//ackgroundimg.setbackgroundimg("Imported piskel.gif");
  //bac//kgroundimg.scale=2;
 // backgroundimg.velocityX=-2;
 // backgroundimg.x=scene.width/2;
  text("BasketsandBalls",600,600);
  text("score",500,500);
  
 // ball1.display() ;
  drawSprites();
}


function spawningballs (){
  if(frameCount%60===0){
    var ball = createSprite(500,480,20,20);
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1 : ball.addImage(ball1Image);
      break ;
      case 2 : ball.addImage(ball2Image);
      break ;
      case 3 : ball.addImage(ball3Image);
      break
        case 4 : ball.addImage(ball4Image);
      break 
       case 5: ball.addImage(ball5Image);
      break ;
      case 6 : ball.addImage(ball6image);
      break ;
      
  }

  ball.velocityY = 5;

}
}
