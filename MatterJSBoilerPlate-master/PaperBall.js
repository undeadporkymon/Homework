
class Ball{
    constructor(x,y){
        var options ={
            isStatic: false,
            'restitution': .3,
            'friction':.5,
            "density": 1.2
           }
    this.body = Matter.Bodies.circle(x,y,25,options);
    this.width = 50;
    World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    push();
  
   
    strokeWeight(5);
    stroke("green");
    fill("red");
    circle(pos.x,pos.y,this.width);
    pop();
    }}