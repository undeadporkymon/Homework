class ground{

    constructor(x,y,width,height){
    var settings ={
    isStatic: true,
    'density': 20
    
    }
    
    this.body = Bodies.rectangle(x,y,width,height, settings);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
    }
    display(){
    push();
    var pos = this.body.position;
    rectMode(CENTER);
    strokeWeight(5);
    stroke("black");
    fill(rgb(99, 60, 20));
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }}