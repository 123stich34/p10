var sea,ship;
var seaImg,shipImg;
var x1,x2
function preload(){
  //uncomment the code to add animation to ship 

  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
x1=0
x2=width
  // // Moving background
  // sea=createSprite(400,200);
  // sea.addImage(seaImg);
  // sea.velocityX = -5;
  // sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
//  sea.velocityX = -3;

  //uncomment code to reset the background
 // if(sea.x < 0){
    //sea.x = 0;
    //sea.x = sea.width;
    //sea.x = sea.width/8;
    //sea.y = height;
 // }
 image(seaImg,x1,0,width,height)
x1-=3
image(seaImg,x2,0,width,height)
x2-=3 
if(x1<-width){

  x1=width+x2
  
  
}
if(x2<-width){
  console.log( 59,x1,x2) 

  x2=width+x1
  console.log( 52,x1,x2) 
}
drawSprites();
}