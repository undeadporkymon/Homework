class PAPER{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':.8,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.body.angle = angle;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop();
      }
}