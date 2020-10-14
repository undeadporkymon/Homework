
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground_layer,ball, box1,box2,box3;
var number = -15;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground_layer = new Ground(400, 650 ,1000, 100);
	ball = new Ball(100,575);
	box1 = new Box(600,600,150,25);
	box2 = new Box(505,550,20,100)
	box3 = new Box(695,550,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-13});
	}else{ 
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:23});
	}
	//I couldn't get gravity working so i made the control when wehre you press
	//the down arrow after pressing the right arrow it activates gravity


}
  ground_layer.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
 

}




