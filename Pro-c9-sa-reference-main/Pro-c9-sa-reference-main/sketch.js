var box;
var bimg;

function preload(){
  bimg = loadAnimation("th.jpg","th1.jpg","th2.jpg")
}

function setup() {
  createCanvas(400,400);
  //x position, y position, width, height
  box = createSprite(200,200,30,30);
  box.addAnimation("batman",bimg);
  box.scale = 0.2

}

function draw() 
{
   background("lightblue");

   //console.log(frameCount)

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }

    

  drawSprites();
}




