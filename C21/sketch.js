var bullet;
var wall, thick;
var speed, weight;
var deformation;
var damage;

function setup() {
  createCanvas(1600,400);
  thick=random(22,83);
speed = random(223,321);
weight = random(30,52);
bullet=createSprite(50,200,100,50);
wall=createSprite(1200,200,thick, height/2);
wall.shapeColor = (80,80,80);
bullet.velocityX=speed;
damage = (.5*weight*speed*speed)/(thick*thick*thick);

}


function draw() {
  background("black");  

  if (wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX=0;
console.log(damage);
if(damage>=10){
bullet.shapeColor="red";
}
if(damage<10){
  bullet.shapeColor="green";
}





  }

console.log(damage);

drawSprites();
}