
var turtle,turtle_img;
var plastic,plastic_img;
var bg;
var plastics = [];
var score;

var score;
var bg_img;
var bottle,bottle_img;
var bottles = [];
var end1,end1_img;



function preload(){
  bg_img = loadImage("images/underwater.jpg");
  end1_img = loadImage("images/game end1.jpg");

}

function setup() {
  createCanvas(1000,400);
  end1=createSprite(450,200,100,100);
  end1.addImage("img",end1_img);
  end1.visible=false;
  end1.scale=0.6;
turtle = new Turtle(50,200);
score=0;
bg_img.x=300;


}

function keyPressed(){
  
  if(keyCode===32){
    
    turtle.jump();
  }

  
}


function draw() {

  
  
  background(bg_img); 

  bg_img.x = bg_img.x-5;

  if(World.frameCount%100===0){
    plastics.push(new Plastic() )
  }

  score=Math.round(World.frameCount/10);



  for(var p of plastics){
    p.move();
    p.display();
   
     if(turtle.hits(p)){
      end1.visible=true;
      noLoop();
    }
  }
  
 turtle.display();
 turtle.fly();
 

 drawSprites();

 textSize(20);
  fill("red");
  text("Score:" + score,800,100)
}

