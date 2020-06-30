
var ground, gameState
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
  gameState = "start"
	engine = Engine.create();
	world = engine.world

	dustbin = new DustBin(720, 690, 100, 10)
	paper = new Paper(200,50,10)
  //Create a Ground
  
  ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
  slingshot = new SlingShot(paper.body,{x:200, y:50});
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  if(gameState === "start"){
  text("This is small game that will teach you the importance of throwing away your trash. Press Up Arrow to Start, and Up to throw away the trash.", 50,350)
  if(keyCode === UP_ARROW){
  gameState = "play"
  }
  }
  if(gameState === "play"){
  rectMode(CENTER);
  background("white");
  createEdgeSprites();
  dustbin.display();
  paper.display();
  slingshot.display();
  rect(ground.position.x, ground.position.y, width, 10)
 
  }
}


function keyPressed() {
 //if (keyCode === UP_ARROW && gameState === "play") {
    //Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y:-15});
   
  //}
  if(keyCode === 32){
    slingshot.reattach(paper.body);
}
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}


