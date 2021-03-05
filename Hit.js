class Hit{

    constructor(x,y,radius){

        this.body = Bodies.circle(x,y,radius);
        this.image = loadImage("hit.png");
        this.smokeimage = loadImage("smoke.png");
        this.radius = radius;
        this.trajectory = [];
        this.visiblity = 255;    
        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(23);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();

        if(this.body.velocity.y>10 && this.body.position.y >150){
            this.trajectory.push([this.body.position.x,this.body.position.y]);
            }
            for(var i = 0; i<this.trajectory.length; i = i+5){
               image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
            }

            if(this.body.position.y>610){

                push();

                this.trajectory.length = 0;
                this.visiblity = this.visiblity-5;
                tint(255,this.visiblity);

                pop();

            }
             

    }
}