const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a;
var b;
function setup() {
  createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    var ball_options = {
    restitution: 0.95, 
    frictionAir: 0.01 
  }
    var rotator_options={
       isStatic:true
    }
    var ground_options={
       isStatic:true
    }
    var w2 = width / 2;
    ground = Bodies.rectangle(200,height - 50 ,width * 2,20,ground_options);
    World.add(world,ground); 
    ball = Bodies.circle(w2 - 3, 10,5,ball_options);
    World.add(world,ball);
    rotator1 = Bodies.rectangle(w2,200,150,20,rotator_options);
     World.add(world,rotator1);
    rotator2 = Bodies.rectangle(w2,200,150,20,rotator_options);
    World.add(world,rotator2);
    rotator3 = Bodies.rectangle(w2,200,150,20,rotator_options);
    World.add(world,rotator3);
    rectMode(CENTER);
    ellipseMode(RADIUS);
}
function draw() 
{
  background(50);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,5);
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  rect(ground.position.x,ground.position.y,width * 2,20);
}
// ingnore this function
//function r1fA1(){
  //a = 0.95;
  //b = 0.01;
  //a = Number(document.getElementById('r1').value)
  //b = Number(document.getElementById('fA1').value)
  //window.alert("Restitution 1 has been set to: " + a + ", Air Friction 1 has been set to: " + b);
  //ball.position.y = -1;
  //console.log(ball.position.y);
  //}
