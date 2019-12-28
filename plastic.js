class Plastic{
    constructor(){
        this.size=100;
        this.x=width;
        this.y =200;
        this.width = 50;
        this.height=50;
        this.vel = 0;
        this.image=loadImage("images/coca cola.png");
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.size,this.size)
       
        
    }

    move(){
        this.x=this.x -5;
    }

    

}