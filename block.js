class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.001,
            'density': 0.05,
            'friction': 5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.Visibility = 255;
        World.add(world, this.body);
      }
    display(){

        if(this.body.speed < 5){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width, this.height);
            imageMode(CENTER);
            image(this.image, pos.x - 300, pos.y - 275, this.body.width, this.body.height);
            this.image.resize(35, 45);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
    
         }   
    }
}
