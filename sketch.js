const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11,sling, hit;
var score;

var gameState = "onsling";

function preload(){

  music = loadSound("music.mp3");

}


function setup() {

  createCanvas(600,650);
 
  engine = Engine.create();
  world = engine.world;

  ground2 = new Ground(300,630,600,5);
  ground3 = new Ground(10,350,5,650);
  ground4 = new Ground(595,350,5,650);

  ball1 = new Ball(200,590);
  ball2 = new Snowball(300,590);
  ball3 = new Sun(400,590);
  ball4 = new Ball(500,590);
  ball5 = new Ball(100,590);
  ball6 = new Ball(550,590);
  ball7 = new Sun(150,570);
  ball8 = new Sun(350,570);
  ball9 = new Snowball(450,570);
  ball10 = new Snowball(50,570);
  ball11 = new Snowball(570,570);

  hit = new Hit(385,120,10);

  sling = new Slingshot(hit.body,{x:385,y:120});  
  
  score = 0;

  music.play(); 

}

function draw() {

  background(0);
  fill(255,255,0);
  text("Let's destroy the viruses to save the Planet...", 20,20);
  text("Don't hit the 'Sun'!!", 20,40);
  fill(255);

  textSize(20); 
  fill(255);
  text("Score: "+score,15,70);
  

if((ball3.body.speed)>10 || (ball7.body.speed)>10 || (ball8.body.speed)>10){

  gameState = "launched";
  text("Press 'REFRESH' to play again..",150,380);

}

  if(gameState==="launched"){

    textSize(50);
    fill(255,0,0);
    text("GAMEOVER!!!", 120,350);

    ball1.body.visiblity = 255;
    ball2.body.visiblity = 255;
    ball4.body.visiblity = 255;
    ball5.body.visiblity = 255;
    ball6.body.visiblity = 255;
    ball9.body.visiblity = 255;
    ball10.body.visiblity = 255;
    ball11.body.visiblity = 255;
    ball1.body.restitution=0;
    ball2.body.restitution=0;
    ball3.body.restitution=0;
    ball4.body.restitution=0;
    ball5.body.restitution=0;
    ball6.body.restitution=0;
    ball7.body.restitution=0;
    ball8.body.restitution=0;
    ball9.body.restitution=0;
    ball10.body.restitution=0;
    ball11.body.restitution=0;
    
    music.stop();
    
  }

  if((ball1.body.speed)>10 &&
    (ball2.body.speed)>10 && 
    (ball4.body.speed)>10 &&
    (ball5.body.speed)>10 &&
    (ball6.body.speed)>10 &&
    (ball9.body.speed)>10 &&
    (ball10.body.speed)>10 && 
    (ball11.body.speed)>10){

      ball1.body.speed=0;
      ball2.body.speed=0;
      ball4.body.speed=0;
      ball5.body.speed=0;
      ball6.body.speed=0;
      ball9.body.speed=0;
      ball10.body.speed=0;
      ball11.body.speed=0;
     //ball3.body.restitution=0;
     //ball7.body.restitution=0;
     //ball8.body.restitution=0;

    }
  
  Engine.update(engine);
 
  ground2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ground3.display();
  ground4.display();
  hit.display();
  sling.display();
  ball1.score();
  ball2.score();
  ball4.score();
  ball5.score();
  ball6.score();
  ball9.score();
  ball10.score();
  ball11.score();
  
}

function mouseDragged(){
  if(gameState!=="launched"){

  Matter.Body.setPosition(hit.body,{x:mouseX,y:mouseY});

  }

}

function mouseReleased(){

  sling.fly();
  
}
function keyPressed(){

  if(gameState!=="launched"){

  if(keyCode===32){

    Matter.Body.setPosition(hit.body,{x:385,y:120});
    sling.attach(hit.body);
    hit.trajectory = [];
  }
  
  }


}