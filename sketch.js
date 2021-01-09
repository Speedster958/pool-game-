const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
function preload(){
  poolImage=loadImage("Pool_Board.png");
}

function setup() {
  createCanvas(1000,700);
  engine=Engine.create();
  world=engine.world;
  engine.world.gravity.y=0;
  ball1=new Ball(600,350,1,255,60,60);
  ball2=new Ball(645,325,2,60,255,60);
  ball3=new Ball(645,375,3,60,60,255);
  ball4=new Ball(690,300,4,60,255,255);
  ball5=new Ball(690,350,5,255,255,60);
  ball6=new Ball(690,400,6,255,60,255);
  ball7=new Ball(735,275,7,60,60,60);
  ball8=new Ball(735,325,8,100,0,255);
  ball9=new Ball(735,375,9,255,100,0);
  ball10=new Ball(735,425,10,190,190,190);
}

function draw() {
  background(poolImage);  
  Engine.update(engine);
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
}