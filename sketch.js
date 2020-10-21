const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var log1,log2,log3;


var ground,packageBody;

var helicopter,helicopterImg,package,packageImg;

function preload(){

 helicopterImg = loadImage("helicopter.png");
 packageImg = loadImage("package.png");
 }

function setup(){

    createCanvas(800,700);

    engine = Engine.create();
    world = engine.world;

    package = createSprite(400,200,10,10);
    package.addImage(packageImg);
    package.scale = 0.2;

    helicopter = createSprite(400, 200, 50, 50);
    helicopter.addImage(helicopterImg);
    helicopter.scale = 0.6;
    helicopter.shapeColor = "skyblue";
    World.add(world,helicopter);
  

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

    ground = new Ground(400,height-15,800,20);

    log1 = new Log(370,height-25,200,20);
    log2 = new Log(275,height-46,20,60);
    log3 = new Log(475,height-46,20,60);

}

function draw(){

    background(0);
    Engine.update(engine);

    package.x = packageBody.position.x;
    package.y = packageBody.position.y;

    ground.display();
    log1.display();
    log2.display();
    log3.display();
    
    keyPressed() ;
    drawSprites();

}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        
       // Look at the hints in the document and understand how to make the package body fall only on
       Matter.Body.setStatic(packageBody, false);
       
     }
   }