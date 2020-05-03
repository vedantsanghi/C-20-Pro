var car, wall
var speed, weight;

function setup() {
  createCanvas(1600,400);

 car = createSprite(25, 200, 50,50);
 wall = createSprite(1500,200,60,height/2);

 wall.shapeColor = color(80,80,80);
 car.shapeColor = color(255,255,255);

 speed = random(55,90);
 weight = random(400,1500);

 car.velocityX = speed;
}

function draw() {
  background(0,0,0);

  if(car.collide(wall)){
    car.velocityX = 0;

    var deformation = (0.5*weight*speed*speed)/22500;

    if (deformation<100) {
      car.shapeColor = color(0,225,0);
    }

    if (deformation>180) {
      car.shapeColor = color(225,0,0);
    }

    if (deformation<180 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }
  }
  
  drawSprites();
}