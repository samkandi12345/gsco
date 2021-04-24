var car1,car2,car3,car4;
var wall1,wall2,wall4,wall3;
var speed,weight;

function setup() {
  createCanvas(1200,600);

  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(50, 150, 30,10);
  car1.velocityX=speed;
  
  car2 = createSprite(50,250,30,10);
  car2.velocityX=speed;
  
  car3 = createSprite(50,350,30,10);
  car3.velocityX=speed;
  
  car4 = createSprite(50,450,30,10);
  car4.velocityX=speed;
  
  wall1 = createSprite(1150, 150,10,height/2);
  wall1.shapeColor = "white";
 //wall1.debug = true;
  
  wall2 = createSprite(1150,250,10,height/2);
  wall2.shapeColor = "white";
  //wall2.debug = true;
  
  wall3 = createSprite(1150,350,10,height/2);
  wall3.shapeColor = "white";
 // wall3.debug = true;
  
  wall4 = createSprite(1150,450,10,height/2);
  wall4.shapeColor = "white";
  //wall4.debug = true;

}


function draw() {
  background(0,0,0); 
  
if(wall1.x - car1.x <= (car1.width+wall1.width)/2){
   car1.velocityX=0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation >180){
  car1.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
  car1.shapeColor=color(230,230,0)
}
if(deformation<100){
  car1.shapeColor=color(0,255,0);
}
}

if(wall2.x - car2.x <= (car2.width+wall2.width)/2){
  car2.velocityX=0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation >180){
 car2.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
 car2.shapeColor=color(230,230,0)
}
if(deformation<100){
 car2.shapeColor=color(0,255,0);
}
}

if(wall3.x - car3.x <= (car3.width+wall3.width)/2){
  car3.velocityX=0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation >180){
 car3.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
 car3.shapeColor=color(230,230,0)
}
if(deformation<100){
 car3.shapeColor=color(0,255,0);
}
}

if(wall4.x - car4.x <= (car4.width+wall4.width)/2){
  car4.velocityX=0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation >180){
 car4.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
 car4.shapeColor=color(230,230,0)
}
if(deformation<100){
 car4.shapeColor=color(0,255,0);
}
}
  drawSprites();
}