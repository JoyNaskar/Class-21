var fixedRect, movingRect;

var box1,box2,box3, object1,object2;

var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1=createSprite(200,400,100,80);
  box2=createSprite(400,400,100,80);
  box3=createSprite(600,400,100,80);
  box1.shapeColor="purple";
  box2.shapeColor="purple";
  box3.shapeColor="purple";

  car=createSprite(100,300,50,50);
  car.shapeColor="yellow";

  car.velocityX=3;

  wall=createSprite(1100,300,20,120)
  wall.shapecolor="brown";
}

function draw() {
  background(0,0,0);  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall))
  {
    //movingRect.shapeColor = "red";
    //box2.shapeColor = "red";
    wall.shapeColor="magenta";
    car.velocityX=-8;
 }
 else
 {
  movingRect.shapeColor = "green";
  box2.shapeColor = "purple";

 }
    drawSprites();
}



