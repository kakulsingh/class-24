
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin;
var box1,box2,box3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		 World.add(world, ground);
		 box1 = new Box(300,630,20,200);
	box2 = new Box(550,630,20,200);
	box3= new Box(500,630,150,20)
World.add(world,box1);
World.add(world,box2);
World.add(world,box3);
paper= new Paper(100,180,5);
World.add(world,paper);
	Engine.run(engine);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	(keyCode===UP_ARROW){
		Matter.body.applyForce(paperObject.body.position,{x:85,y:85})
	}



}


