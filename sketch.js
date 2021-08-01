var iss, spacecraft;
var bg, issing , scing;
var hasDocked = false;

function preload(){
  bg= loadImage("spacebg.jpg");
  issing = loadImage("iss.png");
scing = loadImage("spacecraft1.png");
scing1 = loadImage("spacecraft2.png");
scing2= loadImage("spacecraft3.png");
scing3 = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(800,400);
spacecraft= createSprite(285,240);
spacecraft.addImage(scing);
spacecraft.scale=0.15;


iss= createSprite(330,130);
iss.addImage(issing);
iss.scale=0.35;


}

function draw() {
  background(bg);
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y= spacecraft.y-2;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scing3);
      spacecraft.x= spacecraft.x-1;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scing2);
      spacecraft.x= spacecraft.x+1;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scing1);
      
    }

  }

if(spacecraft.y<=(iss.y+40)&& spacecraft.x<= (iss.x-3)){
  hasDocked = true;
  textSize(25);
  fill("white");
  text("Docking succesfull",200,300);
  spacecraft.addImage(scing);

}



  drawSprites();
}