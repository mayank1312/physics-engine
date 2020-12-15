const Engine= Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;
 var engine,world,ball,ground;
 function setup() {
  createCanvas(800,400);
  
engine=Engine.create();
world=engine.world;
var props={
  restitution:1.0
}
ball=Bodies.circle(400,200,20,props);
World.add(world,ball);
console.log(ball);
ground=Bodies.rectangle(400,300,800,20,{isStatic:true});

World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS)  
  ellipse(ball.position.x,ball.position.y,50,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);


}