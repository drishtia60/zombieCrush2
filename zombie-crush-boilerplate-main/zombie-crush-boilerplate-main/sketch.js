const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

stones = [];

function preload(){
  bg_img = loadImage("assets/background.png");
  zombie1 = loadImage("assets/zombie.png");
  bridge1 = loadImage("assets/wood.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(745,745,5000,10,true);
  wall1 = new Base(20,500,10,5000,true);
  wall2 = new Base(1500,500,10,5000,true);
  bridge = new Bridge(25,{x:105,y:460});
  jointPoint = new Base(1340,430,10,10,true);

  zombie = createSprite(700,600);
  zombie.addImage(zombie1);
  zombie.scale = 0.1;
  zombie.velocityX = 2;

  breakButton = createImg("assets/axe.png");
  breakButton.position(width-200,height/2-50);
  breakButton.size(50,50);
  breakButton.mouseClicked(handleButtonPressed);

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint);

  for(var i =0;i <= 8;i++){
    var x = random(650,950);
    var y = random(350,390);
    var stone = new Stone(x,y,10,10);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  image(bg_img,20,2,1500,1000);
  imageMode(CENTER);

  ground.display();
  wall1.display();
  wall2.display();
  bridge.show();
  

  for(var stone of stones){
    stone.display();
  }

  Engine.update(engine);

  drawSprites();

}

function handleButtonPressed(){
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  },1500);
}
