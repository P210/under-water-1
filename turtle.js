class Turtle{
    constructor(x,y){
        this.size=100;
        this.x=x;
        this.y =y;
        this.width = 50;
        this.height=50;
        this.vel = 0;
        this.gravity=1;
        this.image=loadImage("images/turtlepng.png");
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.size,this.size)
       
        
    }

    jump(){
       
        this.vel= -12;
    }
hits(plastic){
    return collideRectRect(this.x,this.y,this.size,this.size,plastic.x,plastic.y,plastic.size,plastic.size)
}

    fly(){
  this.y=this.y+this.vel;
  this.vel=this.vel+this.gravity;
  this.y = constrain(this.y,0,height-200)
    }

}