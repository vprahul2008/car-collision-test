var car1,car2,car3,car4;
var border1,border2,border3,border4;
var speed,weight;
var wall1,wall2,wall3,wall4;

function setup() {
  createCanvas(600,600);

speed=random(55,90)
weight=random(400,1500)

car1=createSprite(50, 50, 20, 20);
car1.shapeColor="white";

car2=createSprite(50, 150, 20, 20);
car2.shapeColor="yellow";

car3=createSprite(50, 250, 20, 20);
car3.shapeColor="red";

car4=createSprite(50, 350, 20, 20);
car4.shapeColor="green";

border1=createSprite(50,100,100000000,10);
border1.shapeColor="white";

border2=createSprite(50,200,100000000,10);
border2.shapeColor="white";

border3=createSprite(50,300,100000000,10);
border3.shapeColor="white";

border4=createSprite(50,400,100000000,10);
border4.shapeColor="white";

wall1=createSprite(550,50,20,60);
wall1.shapeColor="white";

wall2=createSprite(550,150,20,60);
wall2.shapeColor="white";

wall3=createSprite(550,250,20,60);
wall3.shapeColor="white";

wall4=createSprite(550,350,20,60);
wall4.shapeColor="white";
}

function draw() {
  background("blue"); 
  
  car1.velocityX=speed;
  
  car2.velocityX=speed;

  car3.velocityX=speed;

  car4.velocityX=speed;

  if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5 * speed * speed/22509;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car1.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car1.shapeColor=color(0,255,0);
    }
  }

  if(wall2.x-car2.x < (car2.width+wall2.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5 * speed * speed/22509;
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car2.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car2.shapeColor=color(0,255,0);
    }
  }

  if(wall3.x-car3.x < (car3.width+wall3.width)/2)
  {
    car3.velocityX=0;
    var deformation=0.5 * speed * speed/22509;
    if(deformation>180)
    {
      car3.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car3.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car3.shapeColor=color(0,255,0);
    }
  }

  if(wall4.x-car4.x < (car4.width+wall4.width)/2)
  {
    car4.velocityX=0;
    var deformation=0.5 * speed * speed/22509;
    if(deformation>180)
    {
      car4.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car4.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car4.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}