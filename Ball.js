class Ball{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':1.2            
    
        }

        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
        this.image1 = loadImage("ball2.png");
        this.sling1 = loadImage("sling.png");
        this.visiblity = 255;
       

    }

    display(){

        imageMode(CENTER);
        image(this.sling1,400,100,this.radius*15,this.radius*10);

        if(this.body.speed<10){

            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            imageMode(CENTER);
            image(this.image1,0,0,this.radius*7,this.radius*7);
            pop();
        

        }else{

            World.remove(world,this.body);
            this.score = this.score+1;
            push();
            this.visiblity = this.visiblity - 5;
            tint(255,this.visiblity);
            image(this.image1, this.body.position.x,this.body.position.y, 70, 70);
            pop();
            
            
        }

      
              

    }
}