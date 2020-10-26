class ball{
    constructor(x,y,angle){
        var options ={
            isStatic:false,
            'restitution': 1,
            'friction': .3,
            'density': 1
            }
    this.body = Bodies.circle(x,y,37.5,37.5,angle,options);
    this.width = 75;
    this.height = 75;
    Matter.Body.setAngle(this.body, angle);
    World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    rotate(this.body.angle);
    rectMode(CENTER);
   
    fill("red");
    ellipse(pos.x,pos.y,this.width,this.height);
    pop();
    }}