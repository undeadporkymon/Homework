var a =1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground;
var rope1, bob1;
var rope2, bob2;
var rope3,bob3;
var rope4, bob4;
var rope5, bob5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


   Ground = new ground(400, 50, 600,150);
   bob1 = new ball(200, 500,0)
   rope1 = new Rope(bob1.body,{x:200, y:75});
   bob2 = new ball(275, 500,0)
   rope2 = new Rope(bob2.body,{x:275, y:75});
   bob3= new ball(350, 500,0)
   rope3 = new Rope(bob3.body,{x:350, y:75});
   bob4= new ball(425, 500,0)
   rope4 = new Rope(bob4.body,{x:425, y:75});
   bob5= new ball(600, 400,0)
   rope5 = new Rope(bob5.body,{x:500, y:75});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 Ground.display()
 bob1.display();
 rope1.display();
 bob2.display();
 rope2.display();
 bob3.display();
 rope3.display();
 bob4.display();
 rope4.display();
 bob5.display();
 rope5.display();
 keyPressed()
 reset()
  drawSprites();
 
}

function keyPressed(){
	if(a>=0){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:a,y:-a});
	a=a-.1
}}

}
function reset(){
if(keyCode ===32){

	a=1
}
}