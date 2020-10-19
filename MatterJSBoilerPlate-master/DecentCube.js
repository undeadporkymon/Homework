
class Box{

constructor(x,y,width,height){
var settings ={
isStatic: true
}

this.body = Bodies.rectangle(x,y,width,height, settings);
this.width = width;
this.height = height;
World.add(world, this.body);

}
display(){
var pos = this.body.position;
rectMode(CENTER);
strokeWeight(5);
stroke("white");
fill("white");
rect(pos.x,pos.y,this.width,this.height);
}}