var wall,thickness;
var bullet,bulletSpeed,bulletWeight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(60,200,30,9);
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;
  bulletSpeed=0;
  bulletWeight=0;
  thickness=0;
}


function draw() {
  background(0);
  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;
  bullet.velocityX=bulletSpeed;
  thickness=random(22,83);
  bulletSpeed=random(223,321);
  bulletWeight=random(30,52);
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    if(damage < 10) {
      bullet.shapeColor ="green";
      }
    if(damage > 10) {
    bullet.shapeColor ="red";
    }   
  }
  drawSprites();
}