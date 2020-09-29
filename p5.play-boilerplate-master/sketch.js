var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);
speed = random(55,90);
weight = random(400,1500);
car=createSprite(50,200,100,50);
wall=createSprite(1500,200,90, height/2);
wall.shapeColor = (80,80,80);
car.velocityX=speed;

deformation = (.5*weight*speed*speed)/22500;

}


function draw() {
  background("black");  

  if (wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX=0;
console.log(deformation);
if(deformation>180){
car.shapeColor="red";
}
if(deformation<180 && deformation>100){
car.shapeColor="yellow";
}
if(deformation<100){
  car.shapeColor="green";
}





  }



drawSprites();
}