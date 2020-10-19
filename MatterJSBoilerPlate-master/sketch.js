var bin, binImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground_layer,ball, box1,box2,box3;
var number = -15;

function preload()
{
	binImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin=createSprite(600, 500, 100,200);
	bin.addImage(binImage);
	bin.scale=.7;

	ground_layer = new Ground(400, 650 ,1000, 100);
	ball = new PAPER(100,575, 50,50,0);
	box1 = new Box(600,600,150,25);
	box2 = new Box(505,490,20,200)
	box3 = new Box(695,490,20,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

	
//Press down arrown to stop


  ground_layer.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
 

}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-20});
}else{ 
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:23});
	}

}
